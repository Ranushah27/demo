import type { EnquiryData } from "../../../lib/enquiry";
import type { StepErrors } from "../../../lib/validation";
import { BUDGET_OPTIONS, COURSE_OPTIONS, DINING_STYLE_OPTIONS } from "../../../config/booking";
import { ChoicePills } from "../ChoicePills";
import { StepShell } from "../StepShell";

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
  errors: StepErrors;
};

export function StepStyle({ data, update, errors }: Props) {
  return (
    <StepShell eyebrow="Step 05 — Dining Style" title="How would you like your experience to feel?">
      <ChoicePills
        options={DINING_STYLE_OPTIONS}
        value={data.diningStyle}
        onChange={(v) => update({ diningStyle: v as string })}
        error={errors.diningStyle}
      />

      <div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-grey mb-3">How many courses are you interested in?</p>
        <ChoicePills
          options={COURSE_OPTIONS}
          value={data.courses}
          onChange={(v) => update({ courses: v as string })}
          error={errors.courses}
        />
      </div>

      <div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-grey mb-3">Approximate budget per person</p>
        <ChoicePills
          options={BUDGET_OPTIONS}
          value={data.budget}
          onChange={(v) => update({ budget: v as string })}
          error={errors.budget}
        />
        <p className="mt-3 text-xs text-grey/70">
          This is only a guide for your enquiry, not a confirmed price.
        </p>
      </div>
    </StepShell>
  );
}
