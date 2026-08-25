import { GALLERY_ITEMS } from "../../config/gallery";
import { SITE } from "../../config/site";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const feedItems = GALLERY_ITEMS.filter((item) => item.id !== "chef-portrait").slice(0, 6);

export function InstagramSection() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container-edit">
        <div className="text-center max-w-xl mx-auto">
          <Reveal>
            <SectionLabel align="center">From The Kitchen</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display text-4xl sm:text-5xl text-ivory mt-6">@{SITE.instagramHandle}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-grey mt-5 leading-relaxed">
              Follow the food, the experiments and everything happening behind the scenes.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {feedItems.map((item, i) => (
            <Reveal key={item.id} delay={(Math.min(i % 4, 3) as 0 | 1 | 2 | 3)}>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="block relative aspect-square overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3} className="mt-12 flex justify-center">
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline">
            Follow @{SITE.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
