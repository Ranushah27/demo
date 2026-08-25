import type { EnquiryData } from "../../../lib/enquiry";
import type { StepErrors } from "../../../lib/validation";
import { OCCASION_OPTIONS } from "../../../config/booking";
import { FormField } from "../FormField";
import { ChoicePills } from "../ChoicePills";
import { StepShell } from "../StepShell";

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
  errors: StepErrors;
};

export function StepEvent({ data, update, errors }: Props) {
  return (
    <StepShell eyebrow="Step 01 — Your Event" title="Tell us about your evening.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FormField
          label="Full Name"
          value={data.fullName}
          onChange={(e) => update({ fullName: e.target.value })}
          error={errors.fullName}
          autoComplete="name"
        />
        <FormField
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => update({ email: e.target.value })}
          error={errors.email}
          autoComplete="email"
        />
        <FormField
          label="WhatsApp Number"
          type="tel"
          value={data.whatsapp}
          onChange={(e) => update({ whatsapp: e.target.value })}
          error={errors.whatsapp}
          placeholder="+60 12-345 6789"
          autoComplete="tel"
        />
        <FormField
          label="Number of Guests"
          type="number"
          min={1}
          value={data.guests}
          onChange={(e) => update({ guests: e.target.value })}
          error={errors.guests}
          inputMode="numeric"
        />
        <FormField
          label="Preferred Date"
          type="date"
          value={data.date}
          onChange={(e) => update({ date: e.target.value })}
          error={errors.date}
        />
        <FormField
          label="Preferred Time"
          type="time"
          value={data.time}
          onChange={(e) => update({ time: e.target.value })}
          error={errors.time}
        />
        <div className="sm:col-span-2">
          <FormField
            label="Location"
            value={data.location}
            onChange={(e) => update({ location: e.target.value })}
            error={errors.location}
            placeholder="Home address or venue"
          />
        </div>
      </div>

      <div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-grey mb-3">Occasion</p>
        <ChoicePills
          options={OCCASION_OPTIONS}
          value={data.occasion}
          onChange={(v) => update({ occasion: v as string })}
          error={errors.occasion}
        />
      </div>
    </StepShell>
  );
}
