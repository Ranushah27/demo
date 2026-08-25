import { Link } from "react-router-dom";
import { SITE, buildWhatsAppLink } from "../../config/site";
import { SectionLink } from "../ui/SectionLink";

const FOOTER_LINKS = [
  { label: "Home", id: "home" },
  { label: "The Chef", id: "chef" },
  { label: "Private Dining", id: "private-dining" },
  { label: "Menus", id: "menus" },
  { label: "FAQ", id: "faq" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-line">
      <div className="container-edit py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-display text-2xl tracking-[0.08em] text-ivory">
              MADDY <span className="text-gold">COOKS</span>
            </span>
            <p className="mt-4 text-sm text-grey max-w-xs">{SITE.tagline}</p>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <SectionLink targetId={l.id} className="text-sm text-ivory/80 hover:text-gold transition-colors">
                    {l.label}
                  </SectionLink>
                </li>
              ))}
              <li>
                <Link to="/enquire" className="text-sm text-ivory/80 hover:text-gold transition-colors">
                  Enquire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ivory/80 hover:text-gold transition-colors"
                >
                  Instagram (@{SITE.instagramHandle})
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink("Hi Chef Maddy, I'd love to know more about Maddy Cooks private dining.")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ivory/80 hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-grey">&copy; 2026 Maddy Cooks. All rights reserved.</p>
          <p className="text-xs text-grey">Private dining, made personal.</p>
        </div>
      </div>
    </footer>
  );
}
