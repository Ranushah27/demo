import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
};

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export function FormField(props: InputProps | TextareaProps) {
  const { label, error, hint, icon, as = "input", className, ...rest } = props;
  const fieldId = (rest as { id?: string }).id ?? label.toLowerCase().replace(/\s+/g, "-");

  const fieldClass = `w-full bg-transparent border-b ${
    error ? "border-red-400" : "border-line"
  } focus:border-gold outline-none text-ivory placeholder:text-grey/60 py-3 text-base transition-colors duration-300 ${icon ? "pr-8" : ""}`;

  return (
    <div className="w-full">
      <label htmlFor={fieldId} className="block text-[11px] tracking-[0.16em] uppercase text-grey mb-2">
        {label}
      </label>
      <div className="relative">
        {as === "textarea" ? (
          <textarea
            id={fieldId}
            className={`${fieldClass} resize-none ${className ?? ""}`}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={fieldId}
            className={`${fieldClass} ${className ?? ""}`}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {icon && (
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gold/80">{icon}</span>
        )}
      </div>
      {hint && !error && <p className="mt-2 text-xs text-grey/70">{hint}</p>}
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
