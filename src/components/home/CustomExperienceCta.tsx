import { Link } from "react-router-dom";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function CustomExperienceCta() {
  return (
    <section className="relative bg-charcoal py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full border border-gold/10"
      />
      <div className="container-edit relative">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <SectionLabel align="center">Build Your Dining Experience</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory mt-6 leading-[1.1] text-balance">
              You tell us what you love.
              <br />
              Chef Maddy creates the rest.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-grey text-base md:text-lg leading-relaxed mt-6 max-w-lg mx-auto">
              Share your taste, your occasion and your guests through a short guided form. Chef Maddy remains the
              professional who curates the final menu: you don't build it, you inspire it.
            </p>
          </Reveal>
          <Reveal delay={3} className="mt-10">
            <Link to="/enquire" className="btn-gold">
              Start Your Enquiry
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
