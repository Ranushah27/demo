type SectionLabelProps = {
  children: string;
  align?: "left" | "center";
};

export function SectionLabel({ children, align = "left" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
      <span className="gold-line-center" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
