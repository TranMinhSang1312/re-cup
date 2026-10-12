"use client";

import { useEffect, useRef } from "react";

const checkpoints = [
  { x: 46, y: 146, label: "01" },
  { x: 316, y: 82, label: "02" },
  { x: 600, y: 146, label: "03" },
  { x: 884, y: 82, label: "04" },
  { x: 1154, y: 146, label: "05" },
];

export function CyclePath() {
  const root = useRef<HTMLDivElement>(null);
  const line = useRef<SVGPathElement>(null);

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

  return (
    <div ref={root} className="mt-16 hidden md:block" aria-hidden="true">
      <svg viewBox="0 0 1200 230" className="h-auto w-full overflow-visible">
        <path
          d="M46 146C148 146 210 82 316 82C426 82 487 146 600 146C713 146 774 82 884 82C990 82 1052 146 1154 146"
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
          d="M46 146C148 146 210 82 316 82C426 82 487 146 600 146C713 146 774 82 884 82C990 82 1052 146 1154 146"
          fill="none"
          stroke="#8AAA72"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {checkpoints.map((point) => (
          <g key={point.label} data-cycle-point>
            <circle cx={point.x} cy={point.y} r="22" fill="#1C211D" stroke="#C8754D" strokeWidth="2" />
            <circle cx={point.x} cy={point.y} r="4" fill="#F3EBDD" />
            <text
              x={point.x}
              y={point.y + 43}
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
      </svg>
    </div>
  );
}

