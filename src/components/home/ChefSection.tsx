import { Link } from "react-router-dom";
import { CHEF } from "../../config/chef";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function ChefSection() {
  return (
    <section id="chef" className="bg-black py-24 md:py-36 overflow-hidden">
      <div className="container-edit">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <SectionLabel>The Chef</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6 leading-[1.1]">Meet Chef Maddy</h2>
            </Reveal>

            <Reveal delay={2}>
              <blockquote className="mt-8 border-l border-gold/40 pl-6">
                <p className="font-display italic text-xl md:text-2xl text-gold-soft leading-snug">
                  &ldquo;{CHEF.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs tracking-[0.16em] uppercase text-grey">— Maddy Cooks</p>
              </blockquote>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 space-y-6">
                <p className="text-grey leading-relaxed">{CHEF.bio}</p>
                <p className="text-grey leading-relaxed">{CHEF.experience}</p>
                <p className="text-grey leading-relaxed">{CHEF.philosophy}</p>
              </div>

              <Link to="/enquire" className="btn-outline mt-10">
                Plan Your Evening
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={1} className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 border border-gold/20 hidden sm:block" aria-hidden />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={CHEF.portraitImage}
                    alt="Chef Maddy portrait, editorial crop"
                    className="h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-gold text-black px-6 py-4 hidden sm:block">
                  <p className="font-display text-2xl leading-none">Maddy</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase mt-1">Private Chef</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
