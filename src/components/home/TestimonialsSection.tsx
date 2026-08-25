import { TESTIMONIALS } from "../../config/testimonials";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function TestimonialsSection() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="container-edit">
        <div className="text-center max-w-xl mx-auto">
          <Reveal>
            <SectionLabel align="center">Words From The Table</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6">Client Testimonials</h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              delay={(Math.min(i, 3) as 0 | 1 | 2 | 3)}
              className="border border-line p-8 flex flex-col justify-between min-h-[14rem]"
            >
              <p className="font-display italic text-lg text-ivory/90 leading-snug">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm text-gold">{t.name}</p>
                {t.occasion && <p className="text-xs text-grey mt-1">{t.occasion}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
