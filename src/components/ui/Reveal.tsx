import type { ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: "div" | "section";
};

const delayClass: Record<number, string> = {
  0: "",
  1: "fade-up-delay-1",
  2: "fade-up-delay-2",
  3: "fade-up-delay-3",
  4: "fade-up-delay-4",
};

export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`fade-up ${delayClass[delay]} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
