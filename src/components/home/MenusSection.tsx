import { Link } from "react-router-dom";
import { MENU_DISCLAIMER, MENU_FORMATS } from "../../config/menus";
import { SITE } from "../../config/site";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function MenusSection() {
  return (
    <section id="menus" className="bg-black py-24 md:py-36">
      <div className="container-edit">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel>Chef-Curated Menus</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6 leading-[1.1] text-balance">
                Formats, not fixed menus.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <p className="text-sm text-grey max-w-sm leading-relaxed">{MENU_DISCLAIMER}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {MENU_FORMATS.map((menu, i) => (
            <Reveal
              key={menu.id}
              delay={(Math.min(i, 3) as 0 | 1 | 2 | 3)}
              className="group bg-black p-8 flex flex-col justify-between min-h-[16rem] transition-colors duration-500 hover:bg-panel"
            >
              <div>
                <h3 className="font-display text-2xl text-ivory transition-colors duration-500 group-hover:text-gold-soft">
                  {menu.title}
                </h3>
                <p className="text-sm text-grey mt-4 leading-relaxed">{menu.description}</p>
              </div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-gold-dim mt-8">{menu.courses}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline">
            Check Out Maddy's Food Portfolio
          </a>
          <Link to="/enquire" className="btn-gold">
            Discuss Your Menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
