import type { EnquiryData } from "../../../lib/enquiry";
import type { StepErrors } from "../../../lib/validation";
import { PROTEIN_OPTIONS } from "../../../config/booking";
import { FormField } from "../FormField";
import { ChoicePills } from "../ChoicePills";
import { StepShell } from "../StepShell";

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
  errors: StepErrors;
};

export function StepLove({ data, update, errors }: Props) {
  return (
    <StepShell eyebrow="Step 02 — What Do You Love?" title="What would you like at the centre of your meal?">
      <ChoicePills
        options={PROTEIN_OPTIONS}
        value={data.proteins}
        onChange={(v) => update({ proteins: v as string[] })}
        multi
        error={errors.proteins}
      />

      <FormField
        as="textarea"
        rows={3}
        label="Any proteins you would prefer we avoid?"
        value={data.avoidProteins}
        onChange={(e) => update({ avoidProteins: e.target.value })}
        placeholder="e.g. no pork, no shellfish"
      />
    </StepShell>
  );
}
