import { useMemo, useState } from "react";
import { GALLERY_CATEGORY_LABELS, GALLERY_ITEMS, type GalleryCategory } from "../../config/gallery";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { Lightbox } from "./Lightbox";

type FilterKey = "all" | GalleryCategory;

const FILTERS: FilterKey[] = ["all", "food", "plating", "chef", "behind-the-scenes", "dining"];

export function GallerySection() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="gallery" className="bg-charcoal py-24 md:py-36">
      <div className="container-edit">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel>Gallery</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6 leading-[1.1]">From the table.</h2>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((key) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 text-[11px] tracking-[0.14em] uppercase border transition-colors duration-300 ${
                    filter === key
                      ? "border-gold text-gold bg-gold/10"
                      : "border-line text-grey hover:border-gold/50 hover:text-ivory"
                  }`}
                >
                  {GALLERY_CATEGORY_LABELS[key]}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(Math.min(i % 4, 3) as 0 | 1 | 2 | 3)}
              className="mb-4 break-inside-avoid relative group cursor-pointer overflow-hidden bg-black"
              as="div"
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="block w-full text-left"
                aria-label={`View ${item.caption}`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                    item.orientation === "portrait" ? "aspect-[3/4]" : "aspect-square"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-3 left-3 right-3 text-xs text-ivory opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {item.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox items={items} index={activeIndex} onClose={() => setActiveIndex(null)} onIndexChange={setActiveIndex} />
      )}
    </section>
  );
}
