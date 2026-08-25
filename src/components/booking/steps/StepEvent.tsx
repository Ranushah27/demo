import type { EnquiryData } from "../../../lib/enquiry";
import { getMinBookableDate, type StepErrors } from "../../../lib/validation";
import { OCCASION_OPTIONS } from "../../../config/booking";
import { FormField } from "../FormField";
import { ChoicePills } from "../ChoicePills";
import { OtherField } from "../OtherField";
import { StepShell } from "../StepShell";
import { TimePicker } from "../TimePicker";

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 3V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
  errors: StepErrors;
};

export function StepEvent({ data, update, errors }: Props) {
  return (
    <StepShell eyebrow="Step 01 · Your Event" title="Tell us about your event.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FormField
          label="Full Name"
          value={data.fullName}
          onChange={(e) => update({ fullName: e.target.value })}
          error={errors.fullName}
          autoComplete="name"
        />
        <FormField
          label="Email (Optional)"
          id="email"
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
          icon={<CalendarIcon />}
          min={getMinBookableDate()}
        />
        <TimePicker label="Preferred Time" value={data.time} onChange={(time) => update({ time })} error={errors.time} />
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

      <OtherField
        show={data.occasion === "Other"}
        label="Tell us the occasion"
        value={data.occasionOther}
        onChange={(occasionOther) => update({ occasionOther })}
        error={errors.occasionOther}
      />
    </StepShell>
  );
}
