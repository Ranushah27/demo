type AdventureSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export function AdventureSlider({ value, onChange }: AdventureSliderProps) {
  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-gold h-1 cursor-pointer"
        aria-label="Adventure level, from classic to adventurous"
      />
      <div className="flex items-center justify-between mt-3 text-[11px] tracking-[0.14em] uppercase text-grey">
        <span>Classic</span>
        <span className="text-gold">{value}</span>
        <span>Adventurous</span>
      </div>
    </div>
  );
}
