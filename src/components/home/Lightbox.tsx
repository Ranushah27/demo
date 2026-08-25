import { useEffect } from "react";
import type { GalleryItem } from "../../config/gallery";

type LightboxProps = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndexChange]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center px-4 py-10"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-ivory text-3xl leading-none hover:text-gold transition-colors"
      >
        &times;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-ivory text-3xl hover:text-gold transition-colors p-3"
      >
        &#8249;
      </button>

      <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.caption}
          className="w-full max-h-[75vh] object-contain mx-auto"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-ivory">{item.caption}</p>
          <p className="text-xs text-grey">
            {index + 1} / {items.length}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index + 1) % items.length);
        }}
        aria-label="Next image"
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-ivory text-3xl hover:text-gold transition-colors p-3"
      >
        &#8250;
      </button>
    </div>
  );
}
