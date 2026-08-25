import { useEffect, useRef, useState } from "react";
import { GEOCODING_COUNTRY_CODE } from "../../config/site";

type Suggestion = {
  displayName: string;
  lat: number;
  lng: number;
};

type LocationAutocompleteProps = {
  value: string;
  onSelect: (location: { address: string; lat: number | null; lng: number | null }) => void;
  error?: string;
};

const DEBOUNCE_MS = 450;
const MIN_QUERY_LENGTH = 3;

// Address suggestions as the guest types, powered by OpenStreetMap's free
// Nominatim search — no API key or account required, so it works out of the
// box. If a richer provider (e.g. Google Places) is added later, this is the
// only file that needs to change: swap fetchSuggestions for that provider's
// call and keep the same Suggestion shape.
async function fetchSuggestions(query: string, signal: AbortSignal): Promise<Suggestion[]> {
  const params = new URLSearchParams({
    format: "json",
    addressdetails: "0",
    limit: "5",
    countrycodes: GEOCODING_COUNTRY_CODE,
    q: query,
  });

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, { signal });
  if (!response.ok) throw new Error(`Geocoding request failed: ${response.status}`);

  const results: Array<{ display_name: string; lat: string; lon: string }> = await response.json();
  return results.map((r) => ({ displayName: r.display_name, lat: Number(r.lat), lng: Number(r.lon) }));
}

export function LocationAutocomplete({ value, onSelect, error }: LocationAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const abortRef = useRef<AbortController | undefined>(undefined);

  useEffect(() => setQuery(value), [value]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleChange(next: string) {
    setQuery(next);
    setActiveIndex(-1);
    // Free-typed text is still a valid location — only a selected suggestion
    // carries coordinates, so clear any previously captured pin.
    onSelect({ address: next, lat: null, lng: null });

    clearTimeout(debounceRef.current);
    abortRef.current?.abort();

    if (next.trim().length < MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      abortRef.current = controller;
      setIsLoading(true);
      try {
        const results = await fetchSuggestions(next, controller.signal);
        setSuggestions(results);
        setIsOpen(results.length > 0);
      } catch {
        // Network hiccup or rate limit — the field still works as plain
        // text, so fail silently rather than blocking the guest.
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, DEBOUNCE_MS);
  }

  function selectSuggestion(s: Suggestion) {
    setQuery(s.displayName);
    onSelect({ address: s.displayName, lat: s.lat, lng: s.lng });
    setSuggestions([]);
    setIsOpen(false);
    setActiveIndex(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  const fieldClass = `w-full bg-transparent border-b ${
    error ? "border-red-400" : "border-line"
  } focus:border-gold outline-none text-ivory placeholder:text-grey/60 py-3 text-base transition-colors duration-300`;

  return (
    <div className="w-full" ref={containerRef}>
      <label htmlFor="location" className="block text-[11px] tracking-[0.16em] uppercase text-grey mb-2">
        Location
      </label>
      <div className="relative">
        <input
          id="location"
          type="text"
          value={query}
          placeholder="Start typing an address or venue"
          autoComplete="off"
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => suggestions.length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className={fieldClass}
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
        />
        {isLoading && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-grey animate-pulse">
            Searching&hellip;
          </span>
        )}

        {isOpen && suggestions.length > 0 && (
          <ul className="absolute z-20 left-0 right-0 mt-2 bg-panel border border-line max-h-64 overflow-y-auto shadow-xl">
            {suggestions.map((s, i) => (
              <li key={`${s.lat}-${s.lng}`}>
                <button
                  type="button"
                  onClick={() => selectSuggestion(s)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                    i === activeIndex ? "bg-gold/10 text-gold-soft" : "text-ivory/80"
                  }`}
                >
                  {s.displayName}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isOpen && suggestions.length > 0 && (
        <p className="mt-2 text-[10px] text-grey/50">Address search by OpenStreetMap contributors</p>
      )}
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
