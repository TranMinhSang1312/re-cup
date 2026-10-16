"use client";

import { useEffect } from "react";

export function PageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.fromTo(
              element,
              { y: 34, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });

          gsap
            .utils.toArray<HTMLElement>("[data-reveal-lines]")
            .forEach((group) => {
              const lines = group.querySelectorAll<HTMLElement>("[data-reveal-line]");

              gsap.fromTo(
                lines,
                { yPercent: 115 },
                {
                  yPercent: 0,
                  duration: 1.05,
                  stagger: 0.1,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: group,
                    start: "top 84%",
                    once: true,
                  },
                },
              );
            });

          gsap
            .utils.toArray<HTMLElement>("[data-image-reveal]")
            .forEach((frame) => {
              const image = frame.querySelector("img");

              gsap.fromTo(
                frame,
                { clipPath: "inset(0 100% 0 0 round 2.25rem)" },
                {
                  clipPath: "inset(0 0% 0 0 round 2.25rem)",
                  duration: 1.25,
                  ease: "power4.inOut",
                  scrollTrigger: {
                    trigger: frame,
                    start: "top 82%",
                    once: true,
                  },
                },
              );

              if (image) {
                gsap.fromTo(
                  image,
                  { scale: 1.12 },
                  {
                    scale: 1,
                    duration: 1.6,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: frame,
                      start: "top 82%",
                      once: true,
                    },
                  },
                );
              }
            });

          gsap
            .utils.toArray<HTMLElement>("[data-parallax-image]")
            .forEach((image) => {
              const section = image.closest("section") ?? image;

              gsap.fromTo(
                image,
                { yPercent: -4, scale: 1.08 },
                {
                  yPercent: 4,
                  scale: 1.08,
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.8,
                  },
                },
              );
            });
        });

        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, []);

  return null;
}

