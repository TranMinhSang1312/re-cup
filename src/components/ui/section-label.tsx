type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  inverse?: boolean;
};

export function SectionLabel({
  index,
  children,
  inverse = false,
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
        inverse ? "text-cream/65" : "text-coconut"
      }`}
    >
      <span>{index}</span>
      <span
        aria-hidden="true"
        className={`h-px w-10 ${inverse ? "bg-cream/25" : "bg-coconut/30"}`}
      />
      <span>{children}</span>
    </div>
  );
}

