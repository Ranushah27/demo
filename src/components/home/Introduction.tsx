import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function Introduction() {
  return (
    <section id="experience" className="bg-charcoal py-24 md:py-36">
      <div className="container-edit">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>The Experience</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-ivory mt-6 text-balance">
                Not just dinner.
                <br />
                Your own private
                <br />
                dining experience.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal delay={2}>
              <div className="gold-line w-16 mb-8" />
              <p className="text-grey text-base md:text-lg leading-relaxed">
                Chef Maddy brings restaurant-style cooking into your chosen space, creating a dining experience that
                feels personal, intimate and completely yours.
              </p>
              <p className="text-grey text-base md:text-lg leading-relaxed mt-5">
                Every menu can be shaped around your preferences, the occasion, your guests and the ingredients you
                love.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
