import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "../../config/site";
import { SectionLink } from "../ui/SectionLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-charcoal/90 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <nav className="container-edit flex items-center justify-between h-20 md:h-24">
          <SectionLink targetId="home" className="font-display text-xl md:text-2xl tracking-[0.08em] text-ivory">
            MADDY <span className="text-gold">COOKS</span>
          </SectionLink>

          <ul className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <SectionLink
                  targetId={link.id}
                  className="text-xs tracking-[0.16em] uppercase text-ivory/80 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </SectionLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/enquire" className="btn-gold">
              Book / Enquire
            </Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block w-6 h-px bg-ivory" />
            <span className="block w-6 h-px bg-ivory" />
            <span className="block w-4 h-px bg-gold" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black transition-opacity duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <span className="font-display text-xl tracking-[0.08em] text-ivory">
            MADDY <span className="text-gold">COOKS</span>
          </span>
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2 text-2xl text-ivory">
            &times;
          </button>
        </div>

        <ul className="flex flex-col items-start gap-8 px-8 mt-12">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.label}
              className={`transition-all duration-500 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 60}ms` }}
            >
              <SectionLink
                targetId={link.id}
                onNavigate={() => setMobileOpen(false)}
                className="font-display text-3xl text-ivory hover:text-gold transition-colors"
              >
                {link.label}
              </SectionLink>
            </li>
          ))}
        </ul>

        <div className="px-8 mt-12">
          <Link to="/enquire" onClick={() => setMobileOpen(false)} className="btn-gold w-full">
            Enquire Now
          </Link>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="block mt-6 text-xs tracking-[0.18em] uppercase text-grey"
          >
            @{SITE.instagramHandle}
          </a>
        </div>
      </div>
    </>
  );
}
