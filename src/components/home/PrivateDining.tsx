import { Link } from "react-router-dom";
import { OCCASIONS } from "../../config/occasions";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function PrivateDining() {
  return (
    <section id="private-dining" className="bg-charcoal py-24 md:py-36">
      <div className="container-edit">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Private Dining</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory mt-6 leading-[1.1] text-balance">
              Your table.
              <br />
              Your people.
              <br />
              Your menu.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-grey text-base md:text-lg leading-relaxed mt-6">
              Private dining is designed for intimate occasions where the food is prepared specifically for your
              group — not served from a fixed menu, but created around the people at your table.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-line">
          {OCCASIONS.map((occasion, i) => (
            <Reveal
              key={occasion.title}
              delay={(Math.min(i, 3) as 0 | 1 | 2 | 3)}
              className={`bg-charcoal p-8 md:p-10 group lg:col-span-2 ${i >= 3 ? "lg:col-span-3" : ""}`}
            >
              <span className="font-display text-3xl text-gold/40 group-hover:text-gold transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl text-ivory mt-4">{occasion.title}</h3>
              <p className="text-sm text-grey mt-3 leading-relaxed">{occasion.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3} className="mt-14">
          <Link to="/enquire" className="btn-gold">
            Reserve Your Date
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
