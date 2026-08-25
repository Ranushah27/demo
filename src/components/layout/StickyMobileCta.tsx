import { Link } from "react-router-dom";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-charcoal/95 backdrop-blur-md border-t border-line px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <Link to="/enquire" className="btn-gold w-full">
          Plan Your Dining Experience
        </Link>
      </div>
    </div>
  );
}
