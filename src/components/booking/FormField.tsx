import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  error?: string;
  hint?: string;
};

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export function FormField(props: InputProps | TextareaProps) {
  const { label, error, hint, as = "input", className, ...rest } = props;
  const fieldId = (rest as { id?: string }).id ?? label.toLowerCase().replace(/\s+/g, "-");

  const fieldClass = `w-full bg-transparent border-b ${
    error ? "border-red-400" : "border-line"
  } focus:border-gold outline-none text-ivory placeholder:text-grey/60 py-3 text-base transition-colors duration-300`;

  return (
    <div className="w-full">
      <label htmlFor={fieldId} className="block text-[11px] tracking-[0.16em] uppercase text-grey mb-2">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={fieldId}
          className={`${fieldClass} resize-none ${className ?? ""}`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input id={fieldId} className={`${fieldClass} ${className ?? ""}`} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {hint && !error && <p className="mt-2 text-xs text-grey/70">{hint}</p>}
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
