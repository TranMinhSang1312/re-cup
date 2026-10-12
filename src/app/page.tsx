import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
} from "lucide-react";

import { HeroCupExperience } from "@/components/visuals/hero-cup-experience";
import { CyclePath } from "@/components/visuals/cycle-path";
import { BrandMark } from "@/components/ui/brand-mark";
import { PageMotion } from "@/components/ui/page-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { SiteHeader } from "@/components/ui/site-header";
import {
  cycleSteps,
  materials,
  partnerBenefits,
  values,
} from "@/data/site-content";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <PageMotion />
      <SiteHeader />

      <section className="relative isolate min-h-screen overflow-hidden bg-cream-light px-5 pb-14 pt-28 sm:px-8 lg:px-12 lg:pb-10">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-50" />
        <div className="absolute -right-40 top-16 -z-10 size-[38rem] rounded-full bg-leaf/20 blur-3xl" />
        <div className="absolute -left-52 bottom-[-18rem] -z-10 size-[36rem] rounded-full bg-clay/10 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-[90rem] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 pt-8 lg:pt-0">
            <div className="mb-8 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-coconut">
              <span className="size-2 rounded-full bg-clay" />
              Circular packaging concept
            </div>

            <h1 className="font-display text-[clamp(4.8rem,12vw,10.5rem)] leading-[0.73] tracking-[-0.065em] text-forest">
              RE-CUP
            </h1>

            <div className="mt-9 max-w-3xl border-t border-forest/15 pt-7">
              <p className="font-display text-[clamp(2.15rem,3.4vw,3.9rem)] leading-[0.96] tracking-[-0.04em] text-charcoal">
                <span className="block whitespace-nowrap">Một lần sử dụng,</span>
                <em className="block whitespace-nowrap font-normal text-coconut">
                  nhiều vòng giá trị.
                </em>
              </p>
              <p className="mt-6 max-w-[34ch] text-pretty text-sm leading-6 text-charcoal/65 sm:ml-auto sm:text-base sm:leading-7">
                Ý tưởng ly dùng một lần từ xơ dừa, được thiết kế cho một hành
                trình thu gom sau sử dụng.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#concept"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream-light transition-colors hover:bg-forest-deep"
              >
                Khám phá RE-CUP
                <ArrowDown
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-y-1"
                />
              </a>
              <span className="text-xs uppercase tracking-[0.16em] text-charcoal/45">
                Rethink · Return · Regrow
              </span>
            </div>
          </div>

          <div className="relative min-h-[30rem] lg:min-h-[44rem]">
            <HeroCupExperience />
            <div className="absolute bottom-0 right-0 hidden max-w-48 border-l border-forest/20 pl-4 text-xs leading-5 text-charcoal/55 sm:block">
              Hình ảnh mô phỏng thiết kế, không phải nguyên mẫu sản xuất.
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[90rem] grid-cols-2 gap-4 border-t border-forest/15 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-charcoal/45 sm:grid-cols-3">
          <span>01 · Material first</span>
          <span className="text-right sm:text-center">02 · Designed to return</span>
          <span className="hidden text-right sm:block">03 · Value after use</span>
        </div>
      </section>

      <section
        id="concept"
        className="scroll-mt-6 bg-forest px-5 py-24 text-cream sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[90rem]">
          <SectionLabel index="01" inverse>
            Điểm bắt đầu
          </SectionLabel>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
            <h2 data-reveal className="max-w-5xl font-display text-[clamp(3.4rem,7.5vw,8.2rem)] leading-[0.88] tracking-[-0.055em]">
              Một vật liệu
              <br />
              chưa kết thúc
              <br />
              <em className="font-normal text-leaf">vòng đời.</em>
            </h2>

            <div className="flex flex-col justify-end gap-8 lg:pb-3">
              <Asterisk aria-hidden="true" className="size-8 text-clay" />
              <p className="text-lg leading-8 text-cream/75">
                Trong quá trình sơ chế dừa, xơ dừa có thể trở thành một nguồn
                phụ phẩm chưa được khai thác hết giá trị. RE-CUP bắt đầu từ một
                câu hỏi đơn giản: nếu nguồn sợi này có thể bước vào một vòng đời
                khác thì sao?
              </p>
              <div className="border-t border-cream/15 pt-6 text-sm leading-6 text-cream/50">
                Không bắt đầu bằng lời hứa “xanh”. Bắt đầu bằng vật liệu, cách sử
                dụng và phương án xử lý có thể kiểm chứng.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-10">
              <SectionLabel index="02">Ý tưởng</SectionLabel>
              <p className="mt-10 max-w-sm text-lg leading-8 text-charcoal/70">
                RE-CUP không chỉ thay chiếc ly bằng một vật liệu khác. Dự án đặt
                việc thu gom sau sử dụng vào trong thiết kế mô hình ngay từ đầu.
              </p>
            </div>

            <div>
              <p data-reveal className="font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.92] tracking-[-0.05em] text-forest">
                Tận dụng phụ phẩm.
                <br />
                Tạo bao bì.
                <br />
                <span className="text-coconut">Thu hồi sau sử dụng.</span>
                <br />
                Tái tạo giá trị.
              </p>

              <div className="mt-16 grid gap-px overflow-hidden border border-forest/15 bg-forest/15 sm:grid-cols-3">
                {[
                  ["01", "Vật liệu", "Xơ dừa là nguồn sợi nền chính của ý tưởng sản phẩm."],
                  ["02", "Trải nghiệm", "Hướng tới cách sử dụng quen thuộc của ly mang đi."],
                  ["03", "Sau sử dụng", "Thiết kế một luồng thu gom riêng thay vì bỏ chung."],
                ].map(([number, title, description]) => (
                  <article key={number} className="bg-cream p-7 sm:min-h-64">
                    <span className="text-xs font-semibold tracking-[0.2em] text-clay">
                      {number}
                    </span>
                    <h3 className="mt-12 font-display text-3xl text-forest">{title}</h3>
                    <p className="mt-4 text-sm leading-6 text-charcoal/60">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="materials"
        className="scroll-mt-6 bg-cream-light px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col gap-8 border-b border-forest/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel index="03">Cấu trúc vật liệu</SectionLabel>
              <h2 data-reveal className="mt-8 max-w-4xl font-display text-[clamp(3.6rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.055em] text-forest">
                Nhìn vào
                <br />
                <em className="font-normal text-coconut">bên trong chiếc ly.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-charcoal/55 lg:pb-2">
              Các tỷ lệ dưới đây là khoảng giả định cho giai đoạn nghiên cứu.
              Công thức cuối cùng phải được xác nhận bằng thử nghiệm thực tế và
              luôn có tổng tỷ lệ bằng 100%.
            </p>
          </div>

          <div className="divide-y divide-forest/15">
            {materials.map((material) => (
              <article
                key={material.number}
                data-tone={material.tone}
                className="material-row grid gap-5 py-8 transition-colors sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:py-10 lg:grid-cols-[7rem_1.2fr_0.8fr_auto]"
                data-reveal
              >
                <span className="text-xs font-semibold tracking-[0.22em] text-coconut">
                  {material.number}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-forest sm:text-4xl">
                    {material.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-charcoal/40">
                    {material.englishName}
                  </p>
                </div>
                <p className="max-w-md text-sm leading-6 text-charcoal/60 sm:col-start-2 lg:col-start-auto">
                  {material.description}
                </p>
                <span className="w-fit rounded-full border border-forest/15 px-4 py-2 text-xs font-semibold text-forest">
                  {material.range}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cycle"
        className="scroll-mt-6 relative bg-charcoal px-5 py-24 text-cream sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="cycle-glow pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[90rem]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionLabel index="04" inverse>
              Vòng đời đề xuất
            </SectionLabel>
            <h2 data-reveal className="font-display text-[clamp(3.6rem,7vw,7.6rem)] leading-[0.87] tracking-[-0.055em]">
              Return the cup.
              <br />
              <em className="font-normal text-leaf">Regrow the value.</em>
            </h2>
          </div>

          <CyclePath />

          <div className="relative mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/10 md:grid-cols-5">
            {cycleSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative min-h-72 bg-charcoal p-6 transition-colors hover:bg-forest-deep sm:p-7"
                  data-reveal
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-cream/35">
                      {step.number}
                    </span>
                    <Icon aria-hidden="true" className="size-5 text-clay" />
                  </div>
                  <div className="absolute inset-x-6 bottom-7 sm:inset-x-7">
                    <h3 className="font-display text-3xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-cream/55">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-7 max-w-3xl text-xs leading-5 text-cream/40">
            Phương án xử lý cuối vòng đời sẽ chỉ được công bố cụ thể sau khi sản
            phẩm hoàn chỉnh được kiểm nghiệm và có đơn vị xử lý phù hợp tiếp nhận.
          </p>
        </div>
      </section>

      <section className="bg-clay px-5 py-24 text-forest-deep sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <SectionLabel index="05">Ba lớp giá trị</SectionLabel>
          <div className="mt-14 divide-y divide-forest-deep/20 border-y border-forest-deep/20">
            {values.map((value) => (
              <article
                key={value.number}
                className="grid gap-6 py-10 lg:grid-cols-[6rem_0.7fr_1.3fr] lg:items-center lg:py-12"
                data-reveal
              >
                <span className="text-xs font-semibold tracking-[0.22em] opacity-55">
                  {value.number}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                    {value.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                    {value.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-7 opacity-70 lg:justify-self-end">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="partners"
        className="scroll-mt-6 bg-cream-light px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <SectionLabel index="06">Dành cho F&amp;B</SectionLabel>
              <h2 data-reveal className="mt-10 max-w-3xl font-display text-[clamp(3.5rem,6vw,6.8rem)] leading-[0.9] tracking-[-0.05em] text-forest">
                Một chiếc ly.
                <br />
                <em className="font-normal text-coconut">Một hệ thống đi kèm.</em>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-7 text-charcoal/65">
                RE-CUP hướng tới việc cùng đối tác thiết kế trải nghiệm sử dụng,
                vị trí thu gom và luồng bàn giao — thay vì chỉ giao sản phẩm rồi
                kết thúc.
              </p>
              <a
                href="#story"
                className="group mt-10 inline-flex items-center gap-3 border-b border-forest/30 pb-2 text-sm font-semibold text-forest"
              >
                Đi đến câu chuyện thương hiệu
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="divide-y divide-forest/15 border-y border-forest/15">
              {partnerBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article key={benefit.title} className="grid grid-cols-[3rem_1fr] gap-5 py-8 sm:grid-cols-[4rem_1fr] sm:py-10">
                    <div className="grid size-10 place-items-center rounded-full bg-forest text-cream-light sm:size-12">
                      <Icon aria-hidden="true" className="size-4 sm:size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl text-forest">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-charcoal/60">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="scroll-mt-6 relative overflow-hidden bg-forest-deep px-5 py-24 text-cream sm:px-8 sm:py-36 lg:px-12 lg:py-44"
      >
        <div className="absolute right-[-12rem] top-[-12rem] size-[30rem] rounded-full border border-cream/10" />
        <div className="absolute right-[-5rem] top-[-5rem] size-[16rem] rounded-full border border-dashed border-leaf/20" />
        <div className="relative mx-auto max-w-[90rem]">
          <SectionLabel index="07" inverse>
            Câu chuyện RE-CUP
          </SectionLabel>

          <blockquote data-reveal className="mt-14 max-w-6xl font-display text-[clamp(3.5rem,7vw,7.8rem)] leading-[0.9] tracking-[-0.055em]">
            “Nếu xơ dừa vẫn còn
            <br />
            <em className="font-normal text-leaf">một vòng đời khác</em>
            <br />
            thì sao?”
          </blockquote>

          <div className="mt-20 grid gap-10 border-t border-cream/15 pt-10 lg:grid-cols-[1fr_1fr]">
            <p className="max-w-xl text-lg leading-8 text-cream/70">
              RE-CUP không chỉ là câu chuyện môi trường. Dự án đặt thêm một câu
              hỏi: liệu chúng ta có thể tạo giá trị kinh tế mà không kết thúc vòng
              đời của vật liệu ngay sau một lần sử dụng?
            </p>
            <div className="grid gap-3 text-sm text-cream/65 sm:grid-cols-2 lg:justify-self-end">
              {["Material with purpose", "Designed to return", "Built for transparency", "Test before claim"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 rounded-full border border-cream/15 px-4 py-3">
                    <Check aria-hidden="true" className="size-4 text-clay" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-cream px-5 pb-8 pt-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-12 border-b border-forest/15 pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coconut">
                Rethink · Return · Regrow
              </p>
              <h2 className="mt-5 font-display text-[clamp(3.8rem,8vw,8rem)] leading-[0.8] tracking-[-0.06em] text-forest">
                Một vòng mới
                <br />
                <em className="font-normal text-coconut">bắt đầu ở đây.</em>
              </h2>
            </div>
            <a
              href="#top"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream-light transition-colors hover:bg-forest-deep"
            >
              Xem lại hành trình
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="flex flex-col gap-5 py-7 text-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
            <BrandMark />
            <p>Ý tưởng dự án học tập · Nội dung kỹ thuật đang ở giai đoạn nghiên cứu.</p>
            <p>© 2026 RE-CUP concept.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

