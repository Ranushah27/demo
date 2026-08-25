type ProgressBarProps = {
  step: number;
  total: number;
};

export function ProgressBar({ step, total }: ProgressBarProps) {
  const pct = ((step + 1) / total) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] tracking-[0.16em] uppercase text-grey">
          {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="h-px w-full bg-line relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gold transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
