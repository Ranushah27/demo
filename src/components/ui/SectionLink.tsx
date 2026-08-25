import type { MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

// Scrolls to an in-page section via JS rather than a plain "#id" anchor, so
// navigation keeps working regardless of router type (HashRouter reserves
// the URL hash for routing) or static host configuration.
export function SectionLink({ targetId, className, children, onNavigate }: SectionLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    onNavigate?.();
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
