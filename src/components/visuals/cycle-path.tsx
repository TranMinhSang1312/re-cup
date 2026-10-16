"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const journeyPath =
  "M46 104C148 104 210 54 316 54C426 54 487 104 600 104C713 104 774 54 884 54C990 54 1052 104 1154 104";

const checkpoints = [
  {
    x: 46,
    y: 104,
    label: "01",
    image: "/images/cycle-01-coir-v1.png",
  },
  {
    x: 316,
    y: 54,
    label: "02",
    image: "/images/cycle-02-forming-v1.png",
  },
  {
    x: 600,
    y: 104,
    label: "03",
    image: "/images/cycle-03-use-v1.png",
  },
  {
    x: 884,
    y: 54,
    label: "04",
    image: "/images/return-tray-editorial-v1.png",
  },
  {
    x: 1154,
    y: 104,
    label: "05",
    image: "/images/cycle-05-sorting-v1.png",
  },
];

export function CyclePath() {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<SVGPathElement>(null);
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (
      !root.current ||
      !line.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.fromTo(
            line.current,
            { strokeDashoffset: 1 },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top 78%",
                end: "bottom 45%",
                scrub: 0.7,
              },
            },
          );

          gsap.fromTo(
            "[data-cycle-point]",
            { scale: 0.55, opacity: 0.25, transformOrigin: "center" },
            {
              scale: 1,
              opacity: 1,
              duration: 0.45,
              stagger: 0.1,
              ease: "back.out(1.8)",
              scrollTrigger: {
                trigger: root.current,
                start: "top 72%",
                once: true,
              },
            },
          );
        }, root);

        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, []);

  useEffect(() => {
    const container = root.current;
    const section = container?.closest("section");
    const graphic = svg.current;

    if (
      !container ||
      !section ||
      !graphic ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    graphic.pauseAnimations();

    const cards = Array.from(
      section.querySelectorAll<HTMLElement>(".cycle-card"),
    );
    const points = Array.from(
      container.querySelectorAll<SVGGElement>("[data-cycle-point]"),
    );
    const media = Array.from(
      container.querySelectorAll<HTMLElement>(".cycle-node-media-anchor"),
    );
    let frame = 0;
    let activeIndex = -1;

    const setActive = (nextIndex: number) => {
      if (nextIndex === activeIndex) return;

      activeIndex = nextIndex;
      cards.forEach((card, index) => {
        const isActive = index === nextIndex;
        card.classList.toggle("is-cycle-active", isActive);
        if (isActive) {
          card.style.setProperty("transform", "translateY(-5px)", "important");
        } else {
          card.style.removeProperty("transform");
        }
      });
      points.forEach((point, index) =>
        point.classList.toggle("is-cycle-active", index === nextIndex),
      );
      media.forEach((item, index) =>
        item.classList.toggle("is-cycle-active", index === nextIndex),
      );
    };

    const syncActiveStep = () => {
      const time = graphic.getCurrentTime() % 8;
      const nodeTimes = [0, 2, 4, 6, 8];
      const nextIndex = nodeTimes.findIndex(
        (nodeTime) => Math.abs(time - nodeTime) <= 0.52,
      );

      setActive(nextIndex);
      frame = window.requestAnimationFrame(syncActiveStep);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.dataset.cycleRunning = "true";
          window.cancelAnimationFrame(frame);
          graphic.pauseAnimations();
          graphic.setCurrentTime(0);
          setActive(0);
          graphic.unpauseAnimations();
          frame = window.requestAnimationFrame(syncActiveStep);
          return;
        }

        container.dataset.cycleRunning = "false";
        window.cancelAnimationFrame(frame);
        frame = 0;
        setActive(-1);
        graphic.pauseAnimations();
      },
      { threshold: 0.42 },
    );

    observer.observe(section);

    return () => {
      window.cancelAnimationFrame(frame);
      setActive(-1);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={root}
      className="cycle-journey relative mt-10 hidden md:block lg:mt-8"
      data-cycle-running="false"
      aria-hidden="true"
    >
      <div className="cycle-live-label absolute -top-6 right-0 z-10 flex items-center gap-2 rounded-full border border-cream/12 bg-charcoal/70 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-cream/48 backdrop-blur-sm">
        <span className="cycle-live-dot size-1.5 rounded-full bg-clay" />
        Một vòng giá trị đang di chuyển
      </div>

      {checkpoints.map((point) => (
        <div
          key={`media-${point.label}`}
          className="cycle-node-media-anchor absolute z-20 h-[4.5rem] w-[6.75rem]"
          style={{
            left: `${point.x / 12}%`,
            top: `${point.y / 1.5}%`,
          }}
        >
          <figure className="cycle-node-media relative size-full overflow-hidden rounded-xl border border-cream/12 bg-forest-deep shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <Image
              src={point.image}
              alt=""
              fill
              sizes="108px"
              className="object-cover"
            />
          </figure>
          <span className="cycle-node-media__stem absolute left-1/2 top-full h-4 w-px -translate-x-1/2 bg-cream/15" />
        </div>
      ))}

      <svg
        ref={svg}
        viewBox="0 0 1200 150"
        className="h-auto w-full overflow-visible"
      >
        <path
          d={journeyPath}
          fill="none"
          stroke="#F3EBDD"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <path
          ref={line}
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="0"
          d={journeyPath}
          fill="none"
          stroke="#8AAA72"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          className="cycle-flow-dashes"
          pathLength="100"
          strokeDasharray="3 8"
          d={journeyPath}
          fill="none"
          stroke="#F3EBDD"
          strokeOpacity="0.48"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {checkpoints.map((point) => (
          <g key={point.label} data-cycle-point>
            <g className="cycle-checkpoint">
              <circle
                className="cycle-checkpoint__halo"
                cx={point.x}
                cy={point.y}
                r="28"
                fill="none"
                stroke="#C8754D"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="18"
                fill="#1C211D"
                stroke="#C8754D"
                strokeWidth="2"
              />
              <circle cx={point.x} cy={point.y} r="4" fill="#F3EBDD" />
            </g>
            <text
              x={point.x}
              y={point.y + 34}
              textAnchor="middle"
              fill="#F3EBDD"
              fillOpacity="0.45"
              fontSize="12"
              fontWeight="600"
              letterSpacing="2"
            >
              {point.label}
            </text>
          </g>
        ))}

        <g className="cycle-runner">
          <circle r="15" fill="#C8754D" fillOpacity="0.15" />
          <circle r="8" fill="#C8754D" />
          <circle r="3" fill="#FFF8EE" />
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path={journeyPath}
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            keyPoints="0;0.2439;0.5;0.7561;1"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
          />
        </g>
      </svg>
    </div>
  );
}

