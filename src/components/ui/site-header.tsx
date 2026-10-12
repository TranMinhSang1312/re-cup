import { ArrowUpRight } from "lucide-react";

import { navigation } from "@/data/site-content";
import { BrandMark } from "@/components/ui/brand-mark";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <BrandMark />

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-charcoal/70">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="transition-colors hover:text-forest"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#story"
          className="group inline-flex items-center gap-2 rounded-full border border-forest/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-forest hover:text-cream-light"
        >
          Câu chuyện
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </header>
  );
}

