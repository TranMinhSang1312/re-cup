"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SECTION_STOPS = [
  { id: "top", label: "Mở đầu" },
  { id: "story", label: "Câu chuyện xơ dừa" },
  { id: "concept", label: "Sứ mệnh RE-CUP" },
  { id: "materials", label: "Cấu trúc vật liệu" },
  { id: "research", label: "Kế hoạch kiểm nghiệm" },
  { id: "cycle", label: "Vòng đời đề xuất" },
  { id: "value", label: "Ba lớp giá trị" },
  { id: "partners", label: "Dành cho F&B" },
  { id: "closing", label: "Kết thúc hành trình" },
] as const;

export function SectionStepper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateCurrentSection = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.38;
      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      let nextIndex = 0;

      for (const [index, section] of SECTION_STOPS.entries()) {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= marker) {
          nextIndex = index;
        }
      }

      if (atPageEnd) {
        nextIndex = SECTION_STOPS.length - 1;
      }

      setCurrentIndex(nextIndex);
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateCurrentSection);
      }
    };

    updateCurrentSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const moveToSection = useCallback((nextIndex: number) => {
    const section = SECTION_STOPS[nextIndex];
    const element = section ? document.getElementById(section.id) : null;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
    setCurrentIndex(nextIndex);
  }, []);

  const previousSection = SECTION_STOPS[currentIndex - 1];
  const nextSection = SECTION_STOPS[currentIndex + 1];

  return (
    <nav
      aria-label="Điều hướng nhanh giữa các phần"
      className="fixed bottom-5 right-4 z-[70] flex flex-col gap-3 text-forest sm:bottom-7 sm:right-7"
    >
      <button
        type="button"
        aria-label={
          previousSection
            ? `Đi lên phần ${previousSection.label}`
            : "Đang ở phần đầu trang"
        }
        title={previousSection ? `Lên: ${previousSection.label}` : "Đầu trang"}
        disabled={!previousSection}
        onClick={() => moveToSection(currentIndex - 1)}
        className="grid size-12 place-items-center rounded-full border border-forest/15 bg-cream-light text-forest shadow-[0_8px_24px_rgba(13,42,29,0.16)] transition-colors hover:bg-forest hover:text-cream-light disabled:cursor-not-allowed disabled:border-forest/10 disabled:bg-cream disabled:text-forest/30 sm:size-14"
      >
        <ChevronUp aria-hidden="true" className="size-5 sm:size-6" strokeWidth={2} />
      </button>

      <button
        type="button"
        aria-label={
          nextSection ? `Đi xuống phần ${nextSection.label}` : "Đang ở phần cuối trang"
        }
        title={nextSection ? `Xuống: ${nextSection.label}` : "Cuối trang"}
        disabled={!nextSection}
        onClick={() => moveToSection(currentIndex + 1)}
        className="grid size-12 place-items-center rounded-full border border-clay bg-clay text-forest-deep shadow-[0_8px_24px_rgba(13,42,29,0.2)] transition-colors hover:border-coconut hover:bg-coconut hover:text-cream-light disabled:cursor-not-allowed disabled:border-forest/10 disabled:bg-cream disabled:text-forest/30 sm:size-14"
      >
        <ChevronDown aria-hidden="true" className="size-5 sm:size-6" strokeWidth={2} />
      </button>
    </nav>
  );
}
