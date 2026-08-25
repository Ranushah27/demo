import { useState } from "react";
import { FAQ_ITEMS } from "../../config/faq";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-black py-24 md:py-36">
      <div className="container-edit">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6">Good to know.</h2>
          </Reveal>
        </div>

        <div className="mt-14 max-w-3xl divide-y divide-line border-t border-b border-line">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl text-ivory">{item.question}</span>
                  <span
                    className={`shrink-0 text-gold text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-grey leading-relaxed pb-6 pr-10">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
