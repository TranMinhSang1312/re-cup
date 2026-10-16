import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Quote,
} from "lucide-react";

import { CyclePath } from "@/components/visuals/cycle-path";
import { HeroCupExperience } from "@/components/visuals/hero-cup-experience";
import { BrandMark } from "@/components/ui/brand-mark";
import { PageMotion } from "@/components/ui/page-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { SectionStepper } from "@/components/ui/section-stepper";
import { SiteHeader } from "@/components/ui/site-header";
import {
  cycleSteps,
  materials,
  missionSteps,
  partnerBenefits,
  researchChecks,
  values,
} from "@/data/site-content";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <PageMotion />
      <SiteHeader />
      <SectionStepper />

      <section className="hero-section relative isolate min-h-screen overflow-hidden bg-cream-light px-5 pb-10 pt-24 sm:px-8 lg:px-12">
        <div className="hero-halo pointer-events-none absolute inset-y-0 right-0 -z-20 w-[58%]" />
        <div className="pointer-events-none absolute left-[46%] top-[16%] -z-10 hidden h-[66%] w-px bg-forest/10 lg:block" />

        <div className="hero-layout mx-auto grid min-h-[calc(100svh-11rem)] max-w-[96rem] items-center gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="relative z-10 py-8 lg:py-0">
            <div className="mb-7 flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-coconut">
              <span className="size-2 rounded-full bg-clay" />
              Ý tưởng bao bì tuần hoàn · Giai đoạn nghiên cứu
            </div>

            <h1 className="font-display text-[clamp(5.5rem,12vw,11.5rem)] leading-[0.72] tracking-[-0.072em] text-forest">
              RE-CUP
            </h1>

            <div className="mt-8 max-w-[46rem] border-t border-forest/15 pt-7">
              <p className="font-display text-[clamp(2.35rem,4.15vw,4.6rem)] leading-[1.04] tracking-[-0.045em] text-charcoal">
                Một lần sử dụng,
                <br />
                <em className="font-normal text-coconut">nhiều vòng giá trị.</em>
              </p>
              <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-[37ch] text-pretty text-base leading-7 text-charcoal/65">
                  Ý tưởng ly dùng một lần với xơ dừa là nguồn sợi chính, được
                  thiết kế cùng một cơ chế thu gom sau sử dụng.
                </p>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/45">
                  Rethink · Return · Regrow
                </span>
              </div>
            </div>

            <a
              href="#story"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream-light transition-colors hover:bg-forest-deep"
            >
              Bắt đầu từ xơ dừa
              <ArrowDown
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-y-1"
              />
            </a>
          </div>

          <div className="hero-model relative min-h-[31rem] lg:min-h-[43rem]">
            <div className="absolute inset-x-[8%] bottom-[10%] top-[10%] rounded-[50%] border border-forest/10" />
            <div className="absolute inset-x-[15%] bottom-[16%] top-[16%] rounded-[50%] border border-dashed border-clay/30" />
            <HeroCupExperience />
          </div>
        </div>

        <div className="hero-meta mx-auto flex max-w-[96rem] items-center justify-between border-t border-forest/15 pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
          <span>Material first</span>
          <span className="hidden sm:inline">Designed to return</span>
          <span>Value after use</span>
        </div>
      </section>

      <section
        id="story"
        className="screen-section story-section relative isolate overflow-hidden bg-forest-deep px-5 py-20 text-cream sm:px-8 sm:py-24 lg:px-12 lg:py-16"
      >
        <Image
          data-parallax-image
          src="/images/coconut-husk-real.jpg"
          alt="Bề mặt xơ dừa thô"
          fill
          sizes="100vw"
          className="-z-20 scale-[1.08] object-cover object-center will-change-transform"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,30,21,0.94)_0%,rgba(9,30,21,0.74)_44%,rgba(9,30,21,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-forest-deep/80 to-transparent" />

        <div className="mx-auto w-full max-w-[96rem]">
          <SectionLabel index="01" inverse>
            Câu chuyện bắt đầu
          </SectionLabel>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
            <blockquote
              data-reveal-lines
              className="max-w-[13ch] font-display text-[clamp(3.6rem,7vw,8rem)] leading-[0.98] tracking-[-0.052em]"
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-reveal-line className="block">
                  Nếu xơ dừa
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-reveal-line className="block">
                  vẫn còn
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <em data-reveal-line className="block font-normal text-leaf">
                  một vòng đời khác
                </em>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-reveal-line className="block">
                  thì sao?
                </span>
              </span>
            </blockquote>

            <div className="max-w-lg border-l border-cream/25 pl-6 lg:justify-self-end">
              <Quote aria-hidden="true" className="mb-8 size-7 text-clay" />
              <p className="text-lg leading-8 text-cream/78">
                Trong quá trình sơ chế dừa, xơ dừa có thể trở thành nguồn phụ
                phẩm chưa được khai thác hết giá trị. RE-CUP hướng tới tận dụng
                nguồn vật liệu này để tạo nên một sản phẩm bao bì có giá trị sử
                dụng.
              </p>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-cream/48">
                Không phải phế phẩm · Một nguồn vật liệu đang chờ được tiếp tục
                khai thác
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mission-marquee border-y border-forest/15 bg-clay text-forest-deep"
      >
        <div className="mission-marquee__track py-4">
          {[0, 1, 2].map((item) => (
            <p key={item} className="mission-marquee__item">
              Tận dụng phụ phẩm
              <span>·</span>
              Tạo bao bì
              <span>·</span>
              Thu hồi sau sử dụng
              <span>·</span>
              Tái tạo giá trị
              <span>·</span>
            </p>
          ))}
        </div>
      </div>

      <section
        id="concept"
        className="concept-section screen-section scroll-mt-6 bg-cream px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-14"
      >
        <div className="mx-auto w-full max-w-[96rem]">
          <div className="grid gap-10 border-b border-forest/15 pb-9 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionLabel index="02">Sứ mệnh RE-CUP</SectionLabel>
            <h2
              data-reveal
              className="concept-title max-w-[12ch] font-display text-[clamp(3.4rem,6.2vw,7rem)] leading-[1.04] tracking-[-0.05em] text-forest"
            >
              <span className="block">Giá trị không</span>
              <span className="block">dừng lại sau</span>
              <em className="block font-normal text-coconut">một lần dùng.</em>
            </h2>
          </div>

          <div className="divide-y divide-forest/15">
            {missionSteps.map((step) => (
              <article
                key={step.number}
                data-reveal
                className="mission-row group grid gap-4 py-6 sm:grid-cols-[5rem_0.85fr_1.15fr] sm:items-center lg:py-7"
              >
                <span className="text-xs font-semibold tracking-[0.22em] text-clay">
                  {step.number}
                </span>
                <h3 className="font-display text-3xl leading-none text-forest sm:text-4xl">
                  {step.title}
                </h3>
                <p className="max-w-xl text-sm leading-6 text-charcoal/62 sm:justify-self-end">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="materials"
        className="materials-section screen-section scroll-mt-6 bg-cream-light px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-14"
      >
        <div className="mx-auto grid w-full max-w-[96rem] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16">
          <div
            data-image-reveal
            className="materials-visual relative min-h-[31rem] overflow-hidden rounded-[2.25rem] sm:min-h-[38rem] lg:min-h-[42rem]"
          >
            <div className="material-film__motion absolute -inset-[4%]">
              <Image
                src="/images/coir-fiber-real.jpg"
                alt="Cận cảnh xơ dừa đã được tách thành sợi"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="material-film__scan" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-transparent to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-cream/25 bg-forest-deep/55 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-md sm:left-8 sm:top-8">
              <span className="material-film__record size-1.5 rounded-full bg-clay" />
              Material study · 08s
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-cream/20 bg-forest-deep/65 p-6 text-cream backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-leaf">
                Quan sát cấu trúc sợi
              </p>
              <p className="mt-3 max-w-md font-display text-3xl leading-tight">
                Xơ dừa là nguồn sợi thực vật chính và duy nhất của RE-CUP.
              </p>
              <p className="mt-4 text-[0.58rem] uppercase tracking-[0.15em] text-cream/45">
                Ảnh tham khảo · Viet Sea Farm
              </p>
            </div>
          </div>

          <div>
            <SectionLabel index="03">Cấu trúc vật liệu dự kiến</SectionLabel>
            <h2
              data-reveal
              className="materials-title mt-7 max-w-[11ch] font-display text-[clamp(3.2rem,5.6vw,6.2rem)] leading-[1.04] tracking-[-0.048em] text-forest"
            >
              Ba thành phần.
              <em className="block font-normal text-coconut">Một công thức cần thử.</em>
            </h2>

            <div className="mt-9 divide-y divide-forest/15 border-y border-forest/15">
              {materials.map((material) => (
                <article
                  key={material.number}
                  data-reveal
                  className="materials-row grid gap-4 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-clay">
                    {material.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl text-forest sm:text-3xl">
                        {material.name}
                      </h3>
                      <span className="text-[0.62rem] uppercase tracking-[0.16em] text-charcoal/38">
                        {material.englishName}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-charcoal/62">
                      {material.description}
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-forest px-4 py-2 text-xs font-semibold text-cream-light">
                    {material.range}
                  </span>
                </article>
              ))}
            </div>

            <p className="mt-5 max-w-2xl text-xs leading-5 text-charcoal/48">
              Các tỷ lệ trên là khoảng nghiên cứu trong tài liệu dự án, không
              phải công thức sản xuất đã được xác nhận.
            </p>
          </div>
        </div>
      </section>

      <section
        id="research"
        className="research-section screen-section scroll-mt-6 bg-forest px-5 py-20 text-cream sm:px-8 sm:py-24 lg:px-12 lg:py-14"
      >
        <div className="mx-auto w-full max-w-[96rem]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <SectionLabel index="04" inverse>
                Kế hoạch kiểm nghiệm
              </SectionLabel>
              <FlaskConical aria-hidden="true" className="mt-10 size-10 text-clay" />
            </div>
            <h2
              data-reveal
              className="research-title max-w-[12ch] font-display text-[clamp(3.35rem,6vw,6.8rem)] leading-[1.04] tracking-[-0.05em]"
            >
              Chỉ công bố đặc tính
              <em className="block font-normal text-leaf">sau khi kiểm nghiệm.</em>
            </h2>
          </div>

          <div className="research-grid mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-cream/15 bg-cream/15 lg:grid-cols-3">
            {researchChecks.map((item) => (
              <article
                key={item.title}
                data-reveal
                className="research-card min-h-64 bg-forest p-7 sm:p-8 lg:min-h-[19rem]"
              >
                <div className="flex items-end gap-3 border-b border-cream/15 pb-5">
                  <strong className="font-display text-6xl font-normal leading-none text-clay sm:text-7xl">
                    {item.number}
                  </strong>
                  <span className="pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                    {item.unit}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-cream/62">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cycle"
        className="cycle-section screen-section scroll-mt-6 relative bg-charcoal px-5 py-20 text-cream sm:px-8 sm:py-24 lg:px-12 lg:py-10"
      >
        <div className="cycle-glow pointer-events-none absolute inset-0 opacity-45" />
        <div className="relative mx-auto w-full max-w-[96rem]">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <SectionLabel index="05" inverse>
              Vòng đời đề xuất
            </SectionLabel>
            <h2
              data-reveal
              className="font-display text-[clamp(3.2rem,5.7vw,6.4rem)] leading-[0.92] tracking-[-0.05em]"
            >
              Return the cup.
              <em className="block font-normal text-leaf">Regrow the value.</em>
            </h2>
          </div>

          <CyclePath />

          <div className="relative mt-5 grid overflow-hidden rounded-[2rem] border border-cream/12 md:grid-cols-5">
            {cycleSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  data-reveal
                  className="cycle-card group relative min-h-56 border-b border-cream/10 p-6 transition-[background-color,transform,box-shadow] last:border-b-0 hover:bg-forest-deep md:min-h-60 md:border-b-0 md:border-r md:last:border-r-0 lg:min-h-52"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] text-cream/35">
                      {step.number}
                    </span>
                    <Icon aria-hidden="true" className="size-5 text-clay" />
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <h3 className="font-display text-3xl leading-none">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-cream/55">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-4 max-w-3xl text-xs leading-5 text-cream/42">
            Phương án cuối vòng đời chỉ được xác định sau khi sản phẩm hoàn chỉnh
            được kiểm nghiệm và có đơn vị xử lý phù hợp tiếp nhận.
          </p>
        </div>
      </section>

      <section
        id="value"
        className="screen-section scroll-mt-6 bg-clay px-5 py-20 text-forest-deep sm:px-8 sm:py-24 lg:px-12 lg:py-14"
      >
        <div className="mx-auto w-full max-w-[96rem]">
          <div className="grid gap-8 border-b border-forest-deep/20 pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionLabel index="06">Ba lớp giá trị</SectionLabel>
            <h2
              data-reveal
              className="max-w-[13ch] font-display text-[clamp(3.3rem,5.8vw,6.5rem)] leading-[1.04] tracking-[-0.05em]"
            >
              Không chỉ là câu chuyện môi trường.
            </h2>
          </div>

          <div className="divide-y divide-forest-deep/20">
            {values.map((value) => (
              <article
                key={value.number}
                data-reveal
                className="grid gap-5 py-7 sm:grid-cols-[5rem_0.8fr_1.2fr] sm:items-center"
              >
                <span className="text-xs font-semibold tracking-[0.22em] opacity-55">
                  {value.number}
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] opacity-55">
                    {value.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                    {value.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-7 opacity-70 sm:justify-self-end">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="partners"
        className="screen-section scroll-mt-6 bg-cream-light px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-14"
      >
        <div className="mx-auto grid w-full max-w-[96rem] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-20">
          <div>
            <SectionLabel index="07">Dành cho đối tác F&amp;B</SectionLabel>
            <h2
              data-reveal
              className="mt-8 max-w-[10ch] font-display text-[clamp(3.4rem,5.8vw,6.5rem)] leading-[1.04] tracking-[-0.05em] text-forest"
            >
              Một chiếc ly.
              <em className="block font-normal text-coconut">Một hệ thống đi kèm.</em>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-charcoal/65">
              Trong mô hình đề xuất, điểm F&amp;B vừa là khách hàng sử dụng
              RE-CUP, vừa là nơi triển khai điểm thu hồi ly sau sử dụng.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-clay/30 bg-clay/10 px-4 py-2 text-xs font-semibold text-coconut">
              <span className="size-2 rounded-full bg-clay" />
              Dự kiến thử nghiệm trước khi mở rộng
            </div>
          </div>

          <div className="divide-y divide-forest/15 border-y border-forest/15">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  data-reveal
                  className="grid grid-cols-[3rem_1fr] gap-5 py-7 sm:grid-cols-[4rem_1fr] sm:py-8"
                >
                  <div className="grid size-11 place-items-center rounded-full bg-forest text-cream-light sm:size-12">
                    <Icon aria-hidden="true" className="size-4 sm:size-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl text-forest sm:text-4xl">
                        {benefit.title}
                      </h3>
                      <span className="text-xs font-semibold tracking-[0.18em] text-clay">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-charcoal/62">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer
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

          <div className="grid gap-6 py-7 text-xs text-cream/48 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <BrandMark inverse />
            <p className="sm:text-center">
              Ý tưởng dự án học tập · Nội dung kỹ thuật đang ở giai đoạn nghiên cứu.
            </p>
            <a
              href="#research"
              className="group inline-flex items-center gap-2 text-cream/65 hover:text-cream"
            >
              Nguyên tắc kiểm nghiệm
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="flex items-center justify-between border-t border-cream/10 pt-5 text-[0.62rem] uppercase tracking-[0.18em] text-cream/30">
            <span>RE-CUP concept</span>
            <span>2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
