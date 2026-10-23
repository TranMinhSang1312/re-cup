import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";

const footerGroups = [
  {
    title: "Giải pháp",
    links: [
      { label: "Vật liệu xơ dừa", href: "#materials" },
      { label: "Vòng đời sản phẩm", href: "#cycle" },
      { label: "Giải pháp cho F&B", href: "#partners" },
    ],
  },
  {
    title: "Về RE-CUP",
    links: [
      { label: "Câu chuyện dự án", href: "#story" },
      { label: "Sứ mệnh", href: "#concept" },
      { label: "Cơ sở kiểm nghiệm", href: "#research" },
    ],
  },
  {
    title: "Minh bạch",
    links: [
      { label: "Thành phần dự kiến", href: "#materials" },
      { label: "Quy trình thu hồi", href: "#cycle" },
      { label: "Nguyên tắc nghiên cứu", href: "#research" },
    ],
  },
  {
    title: "Liên hệ",
    links: [
      { label: "hello@recup.vn", href: "mailto:hello@recup.vn" },
      {
        label: "Hợp tác cùng RE-CUP",
        href: "mailto:hello@recup.vn?subject=Hợp%20t%C3%A1c%20c%C3%B9ng%20RE-CUP",
      },
      {
        label: "Góp ý cho dự án",
        href: "mailto:hello@recup.vn?subject=G%C3%B3p%20%C3%BD%20cho%20d%E1%BB%B1%20%C3%A1n%20RE-CUP",
      },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <>
      <section
        id="closing"
        className="screen-section scroll-mt-6 bg-forest-deep px-5 py-16 text-cream sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="mx-auto w-full max-w-[96rem]">
          <div className="grid gap-12 border-b border-cream/15 pb-12 md:grid-cols-[minmax(0,1fr)_13.5rem] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] xl:relative xl:min-h-[28rem] xl:grid-cols-1 xl:gap-0">
            <div className="xl:max-w-[55rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
                Rethink · Return · Regrow
              </p>
              <h2 className="mt-6 max-w-none font-display text-[clamp(2.7rem,5.2vw,6.5rem)] leading-[1.02] tracking-[-0.052em]">
                <span className="block sm:whitespace-nowrap">
                  Tận dụng <span className="whitespace-nowrap">phụ phẩm.</span>
                </span>
                <em className="block font-normal text-clay">Tái tạo giá trị.</em>
              </h2>
              <a
                href="#top"
                className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest-deep transition-colors hover:bg-leaf"
              >
                Xem lại hành trình
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <figure
              data-reveal
              className="group relative mx-auto w-full max-w-[13rem] sm:max-w-[15rem] md:max-w-none xl:absolute xl:left-[66%] xl:top-1/2 xl:w-[17rem] xl:-translate-x-1/2 xl:-translate-y-1/2"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.35rem] border border-clay/55 transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:translate-y-4"
              />
              <div className="relative aspect-[2/3] overflow-hidden rounded-[1.35rem] border border-cream/20 bg-forest shadow-[0_28px_70px_rgba(0,0,0,0.26)] transition-transform duration-500 ease-out group-hover:-rotate-1 group-hover:scale-[1.015]">
                <Image
                  src="/images/return-loop-poster-v1.png"
                  alt="Poster minh họa vòng quay trả ly của RE-CUP"
                  fill
                  sizes="(max-width: 767px) 240px, (max-width: 1023px) 216px, 272px"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <footer className="border-t border-cream/10 bg-forest-deep px-5 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-[96rem]">
          <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(17rem,1.25fr)_minmax(0,2fr)] lg:gap-16 lg:py-20">
            <div className="max-w-sm">
              <BrandMark inverse />
              <p className="mt-6 text-sm leading-7 text-cream/55">
                Ý tưởng bao bì tuần hoàn từ xơ dừa, kết nối vật liệu, trải
                nghiệm tại điểm bán và hành trình thu hồi sau sử dụng.
              </p>
            </div>

            <nav
              aria-label="Liên kết chân trang"
              className="grid gap-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-6"
            >
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/35">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {group.links.map((link) => (
                      <li key={group.title + "-" + link.label}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-cream"
                        >
                          {link.label}
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="border-t border-cream/10 py-7 text-[0.68rem] leading-5 text-cream/35">
            <p>© 2026 RE-CUP. Dự án ý tưởng phục vụ học tập và nghiên cứu.</p>
            <p className="mt-1 max-w-2xl">
              Các thông số vật liệu, tác động môi trường và phương án xử lý
              cuối vòng đời cần được kiểm nghiệm trước khi thương mại hóa.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
