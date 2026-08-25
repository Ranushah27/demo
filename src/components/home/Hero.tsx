import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CHEF } from "../../config/chef";
import { SectionLink } from "../ui/SectionLink";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <img
          src={CHEF.heroImage}
          alt="Chef Maddy, founder of Maddy Cooks, in chef whites"
          className="hero-image-anim h-full w-full object-cover object-[45%_20%] md:object-[75%_center] opacity-90"
        />
        {/* Dark luxury treatment so the image sits inside the black theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30 md:from-black md:via-black/60 md:to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Subtle gold ring detail, echoing the circular framing of the portrait */}
      <div
        aria-hidden
        className="absolute -right-24 top-1/2 -translate-y-1/2 h-[32rem] w-[32rem] rounded-full border border-gold/25 hidden md:block"
      />
      <div
        aria-hidden
        className="absolute -right-10 top-1/2 -translate-y-1/2 h-[24rem] w-[24rem] rounded-full border border-gold/15 hidden md:block"
      />

      <div className="relative z-10 flex min-h-[100svh] items-end md:items-center">
        <div className="container-edit w-full pb-28 md:pb-0">
          <div className="max-w-xl">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="gold-line-center" />
              <span className="eyebrow">Private Dining</span>
            </div>

            <h1
              className={`font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ivory mt-6 text-balance transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Private dining,
              <br />
              made personal.
            </h1>

            <p
              className={`mt-6 text-base md:text-lg text-grey max-w-md leading-relaxed transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              A chef-crafted dining experience designed around your taste, your occasion and your table.
            </p>

            <div
              className={`mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <Link to="/enquire" className="btn-gold">
                Plan Your Dining Experience
              </Link>
              <SectionLink
                targetId="experience"
                className="text-xs tracking-[0.18em] uppercase text-ivory/80 hover:text-gold transition-colors flex items-center gap-2"
              >
                Explore The Experience <span aria-hidden>↓</span>
              </SectionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
