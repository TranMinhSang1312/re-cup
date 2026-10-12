# RE-CUP Landing Page

A frontend-only, presentation-led website for the RE-CUP circular packaging concept. The experience combines editorial storytelling, a procedural 3D cup, scroll-linked motion, and accessible static fallbacks.

## Run locally

Requirements:

- Node.js 20.9 or newer
- pnpm

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm build
```

`pnpm build` generates a static export in `out/`. No Node.js server, database, API, or environment variables are required at runtime.

For a deployed build, set `NEXT_PUBLIC_SITE_URL` to the final public origin so Open Graph image URLs resolve to the production domain. Local builds default to `http://localhost:3000`.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS
- React Three Fiber, Drei, and Three.js
- GSAP and ScrollTrigger
- Lucide icons

## Experience architecture

- Server Components render all core copy and section structure.
- Client Components are limited to 3D and motion behavior.
- Desktop and capable tablets receive the interactive WebGL cup.
- Mobile, reduced-motion, no-JavaScript, and WebGL-failure paths use an inline SVG product illustration.
- The site remains a valid static document without motion.

## Project structure

```text
src/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── visuals/
└── data/
    └── site-content.ts
```

## Content policy

This is a concept-stage student project. Copy must not present hypothetical customers, certifications, material performance, end-of-life routes, or environmental outcomes as verified facts. Update central repeated content in `src/data/site-content.ts` and preserve the qualification language in the page.

## Working plan

Implementation status, decisions, remaining work, and the definition of done are tracked in [`IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md).

