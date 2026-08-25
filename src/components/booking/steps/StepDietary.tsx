import type { EnquiryData } from "../../../lib/enquiry";
import type { StepErrors } from "../../../lib/validation";
import { DIETARY_OPTIONS } from "../../../config/booking";
import { FormField } from "../FormField";
import { ChoicePills } from "../ChoicePills";
import { StepShell } from "../StepShell";

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
  errors: StepErrors;
};

export function StepDietary({ data, update, errors }: Props) {
  return (
    <StepShell eyebrow="Step 04 — Dietary Requirements" title="Do you or your guests have any dietary requirements?">
      <ChoicePills
        options={DIETARY_OPTIONS}
        value={data.dietary}
        onChange={(v) => update({ dietary: v as string[] })}
        multi
        error={errors.dietary}
      />

      <FormField
        as="textarea"
        rows={3}
        label="Allergies"
        value={data.allergies}
        onChange={(e) => update({ allergies: e.target.value })}
        placeholder="Let us know about any allergies we should be aware of"
      />

      <FormField
        as="textarea"
        rows={3}
        label="Ingredients you don't enjoy"
        value={data.dislikedIngredients}
        onChange={(e) => update({ dislikedIngredients: e.target.value })}
        placeholder="Anything you'd rather we leave off the table"
      />
    </StepShell>
  );
}
