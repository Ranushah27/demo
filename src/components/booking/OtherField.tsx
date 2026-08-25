import { FormField } from "./FormField";

type OtherFieldProps = {
  show: boolean;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
};

// Appears under a ChoicePills group when its "Other" option is selected,
// so a free-text answer can never be silently dropped.
export function OtherField({ show, label, value, onChange, error, placeholder }: OtherFieldProps) {
  if (!show) return null;

  return (
    <div className="field-in mt-4">
      <FormField
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={error}
        placeholder={placeholder}
      />
    </div>
  );
}
