import { useEffect, useState } from "react";

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1));
const MINUTES = ["00", "15", "30", "45"];
const PERIODS = ["AM", "PM"] as const;

type TimePickerProps = {
  label: string;
  value: string; // formatted as "7:30 PM", empty until all three parts are chosen
  onChange: (value: string) => void;
  error?: string;
};

function parseTime(value: string) {
  const match = value.match(/^(\d{1,2}):(\d{2}) (AM|PM)$/);
  if (!match) return { hour: "", minute: "", period: "" };
  return { hour: match[1], minute: match[2], period: match[3] };
}

// A custom 12-hour picker instead of the native <input type="time">, whose
// AM/PM vs 24-hour display depends on the device's OS locale setting and
// can't be controlled from the page — this way every visitor sees the same,
// unambiguous AM/PM controls, and the stored value reads naturally in the
// WhatsApp message and the Google Sheet ("7:30 PM" rather than "19:30").
export function TimePicker({ label, value, onChange, error }: TimePickerProps) {
  const [hour, setHour] = useState(() => parseTime(value).hour);
  const [minute, setMinute] = useState(() => parseTime(value).minute);
  const [period, setPeriod] = useState(() => parseTime(value).period);

  // Keep local selections in sync if the parent resets the form (e.g. Back then a fresh start).
  useEffect(() => {
    if (value === "") {
      setHour("");
      setMinute("");
      setPeriod("");
    }
  }, [value]);

  useEffect(() => {
    if (hour && minute && period) {
      onChange(`${hour}:${minute} ${period}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hour, minute, period]);

  const selectClass = `bg-transparent border-b ${
    error ? "border-red-400" : "border-line"
  } focus:border-gold outline-none text-ivory py-3 text-base transition-colors duration-300`;

  return (
    <div className="w-full">
      <label className="block text-[11px] tracking-[0.16em] uppercase text-grey mb-2">{label}</label>
      <div className="flex items-center gap-3">
        <select aria-label="Hour" value={hour} onChange={(e) => setHour(e.target.value)} className={`${selectClass} w-16`}>
          <option value="" disabled>
            HH
          </option>
          {HOURS.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
        <span className="text-grey">:</span>
        <select
          aria-label="Minute"
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className={`${selectClass} w-16`}
        >
          <option value="" disabled>
            MM
          </option>
          {MINUTES.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <div className="flex gap-2 ml-auto">
          {PERIODS.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={period === p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 text-sm border transition-all duration-300 ${
                period === p ? "border-gold bg-gold text-black font-medium" : "border-line text-ivory/80 hover:border-gold/50"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
