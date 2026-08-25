type ChoicePillsProps = {
  options: readonly string[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multi?: boolean;
  error?: string;
};

export function ChoicePills({ options, value, onChange, multi = false, error }: ChoicePillsProps) {
  const selected = Array.isArray(value) ? value : [value].filter(Boolean);

  function toggle(option: string) {
    if (multi) {
      const arr = Array.isArray(value) ? value : [];
      onChange(arr.includes(option) ? arr.filter((o) => o !== option) : [...arr, option]);
    } else {
      onChange(option);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3" role={multi ? "group" : "radiogroup"}>
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              role={multi ? "checkbox" : "radio"}
              aria-checked={isSelected}
              onClick={() => toggle(option)}
              className={`px-5 py-3 text-sm border transition-all duration-300 active:scale-95 ${
                isSelected
                  ? "border-gold bg-gold text-black font-medium"
                  : "border-line text-ivory/80 hover:border-gold/50 hover:text-ivory"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
    </div>
  );
}
