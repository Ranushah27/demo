import type { ReactNode } from "react";

type StepShellProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function StepShell({ eyebrow, title, subtitle, children }: StepShellProps) {
  return (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory mt-4 leading-[1.1] text-balance">
        {title}
      </h2>
      {subtitle && <p className="text-grey mt-4 max-w-lg leading-relaxed">{subtitle}</p>}
      <div className="mt-10 space-y-8">{children}</div>
    </div>
  );
}
