import { useRef, useState } from "react";
import type { EnquiryData } from "../../../lib/enquiry";
import { FormField } from "../FormField";
import { StepShell } from "../StepShell";

type Props = {
  data: EnquiryData;
  update: (patch: Partial<EnquiryData>) => void;
};

export function StepFinal({ data, update }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  function handleFile(file: File | undefined) {
    if (!file) {
      update({ inspirationImageName: "" });
      setPreviewUrl(null);
      return;
    }
    update({ inspirationImageName: file.name });
    setPreviewUrl(URL.createObjectURL(file));
  }

  return (
    <StepShell eyebrow="Step 06 — Anything Else" title="Tell Chef Maddy anything else.">
      <FormField
        as="textarea"
        rows={6}
        label="Your message"
        value={data.notes}
        onChange={(e) => update({ notes: e.target.value })}
        placeholder="Tell us about the occasion, your guests, something they love, a dish you'd like inspired, or anything else that would make it special."
      />

      <div>
        <p className="text-[11px] tracking-[0.16em] uppercase text-grey mb-3">Add Inspiration (optional)</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="btn-outline"
          >
            {data.inspirationImageName ? "Change Image" : "Upload Image"}
          </button>
          {data.inspirationImageName && (
            <span className="text-sm text-grey truncate max-w-[10rem]">{data.inspirationImageName}</span>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        {previewUrl && (
          <img src={previewUrl} alt="Inspiration preview" className="mt-4 h-32 w-32 object-cover border border-line" />
        )}
        <p className="mt-3 text-xs text-grey/70">
          Your enquiry opens in WhatsApp so Chef Maddy can respond directly — please attach this image there too, as
          images can't be sent automatically through this form.
        </p>
      </div>
    </StepShell>
  );
}
