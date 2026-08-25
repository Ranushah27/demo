import { useState } from "react";
import { Link } from "react-router-dom";
import { EMPTY_ENQUIRY, buildEnquiryMessage, type EnquiryData } from "../lib/enquiry";
import { validateStep, type StepErrors } from "../lib/validation";
import { buildWhatsAppLink } from "../config/site";
import { ProgressBar } from "../components/booking/ProgressBar";
import { SuccessScreen } from "../components/booking/SuccessScreen";
import { StepEvent } from "../components/booking/steps/StepEvent";
import { StepLove } from "../components/booking/steps/StepLove";
import { StepFlavour } from "../components/booking/steps/StepFlavour";
import { StepDietary } from "../components/booking/steps/StepDietary";
import { StepStyle } from "../components/booking/steps/StepStyle";
import { StepFinal } from "../components/booking/steps/StepFinal";

const TOTAL_STEPS = 6;

export function Enquire() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<EnquiryData>(EMPTY_ENQUIRY);
  const [errors, setErrors] = useState<StepErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [transitionKey, setTransitionKey] = useState(0);

  function update(patch: Partial<EnquiryData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  function goNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    if (step === TOTAL_STEPS - 1) {
      setSubmitted(true);
      return;
    }
    setDirection("forward");
    setStep((s) => s + 1);
    setTransitionKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (step === 0) return;
    setErrors({});
    setDirection("back");
    setStep((s) => s - 1);
    setTransitionKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    const whatsappUrl = buildWhatsAppLink(buildEnquiryMessage(data));
    return <SuccessScreen whatsappUrl={whatsappUrl} />;
  }

  const stepProps = { data, update, errors };

  return (
    <div className="min-h-[100svh] bg-black flex flex-col">
      <header className="border-b border-line">
        <div className="container-edit flex items-center justify-between h-20">
          <Link to="/" className="font-display text-lg tracking-[0.08em] text-ivory">
            MADDY <span className="text-gold">COOKS</span>
          </Link>
          <Link to="/" aria-label="Close and return home" className="text-2xl text-ivory hover:text-gold transition-colors">
            &times;
          </Link>
        </div>
        <div className="container-edit pb-5">
          <ProgressBar step={step} total={TOTAL_STEPS} />
        </div>
      </header>

      <main className="flex-1">
        <div className="container-edit py-14 md:py-20 max-w-3xl">
          <div key={transitionKey} className={direction === "forward" ? "step-enter-forward" : "step-enter-back"}>
            {step === 0 && <StepEvent {...stepProps} />}
            {step === 1 && <StepLove {...stepProps} />}
            {step === 2 && <StepFlavour {...stepProps} />}
            {step === 3 && <StepDietary {...stepProps} />}
            {step === 4 && <StepStyle {...stepProps} />}
            {step === 5 && <StepFinal data={data} update={update} />}
          </div>

          <div className="mt-14 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="btn-outline disabled:opacity-30 disabled:pointer-events-none"
            >
              Back
            </button>
            <button type="button" onClick={goNext} className="btn-gold">
              {step === TOTAL_STEPS - 1 ? "Send My Dining Request" : "Continue"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
