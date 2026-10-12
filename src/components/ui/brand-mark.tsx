type BrandMarkProps = {
  inverse?: boolean;
};

export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <a
      href="#top"
      aria-label="RE-CUP — về đầu trang"
      className={`inline-flex items-center gap-3 text-sm font-bold tracking-[-0.02em] ${
        inverse ? "text-cream-light" : "text-forest"
      }`}
    >
      <span
        aria-hidden="true"
        className={`grid size-8 place-items-center rounded-full border ${
          inverse ? "border-cream-light/35" : "border-forest/25"
        }`}
      >
        <span className="size-2.5 rounded-full bg-clay" />
      </span>
      RE-CUP
    </a>
  );
}

