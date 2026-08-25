import type { EnquiryData } from "../../../lib/enquiry";
import type { StepErrors } from "../../../lib/validation";
import { CUISINE_OPTIONS, SPICE_OPTIONS } from "../../../config/booking";
import { ChoicePills } from "../ChoicePills";
import { OtherField } from "../OtherField";
import { StepShell } from "../StepShell";

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
  errors: StepErrors;
};

export function StepFlavour({ data, update, errors }: Props) {
  return (
    <StepShell eyebrow="Step 03 · Your Flavour" title="What direction should the flavours take?">
      <div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-grey mb-3">Cuisine / Flavour Direction</p>
        <ChoicePills
          options={CUISINE_OPTIONS}
          value={data.cuisine}
          onChange={(v) => update({ cuisine: v as string })}
          error={errors.cuisine}
        />
        <OtherField
          show={data.cuisine === "Other"}
          label="Tell us what you have in mind"
          value={data.cuisineOther}
          onChange={(cuisineOther) => update({ cuisineOther })}
          error={errors.cuisineOther}
        />
      </div>

      <div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-grey mb-3">Spice Preference</p>
        <ChoicePills
          options={SPICE_OPTIONS}
          value={data.spiceLevel}
          onChange={(v) => update({ spiceLevel: v as string })}
          error={errors.spiceLevel}
        />
      </div>
    </StepShell>
  );
}
