import { PROCESS_STEPS } from "../../config/occasions";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function HowItWorks() {
  return (
    <section className="bg-black py-24 md:py-36">
      <div className="container-edit">
        <Reveal>
          <SectionLabel align="center">How It Works</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6 text-center text-balance">
            From your evening, to your table.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          <div
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            aria-hidden
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={(i as 0 | 1 | 2 | 3)} className="relative text-center md:text-left">
              <span className="font-display text-5xl text-gold relative z-10 bg-black pr-4 md:pr-0 md:bg-transparent">
                {step.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-ivory mt-6">{step.title}</h3>
              <p className="text-sm text-grey mt-3 leading-relaxed max-w-[16rem] mx-auto md:mx-0">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
