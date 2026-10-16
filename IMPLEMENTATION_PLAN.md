# RE-CUP Landing Page — Implementation Plan

> This document is the source of truth for the project. Update the status and decision log whenever scope, implementation, or validation changes.

## 1. Project goal

Build a polished, responsive, single-page website that introduces the RE-CUP circular packaging concept to lecturers, classmates, potential F&B partners, and general visitors.

The site should explain the project clearly, feel credible, and use one memorable interactive sequence without implying that unverified product claims are already certified.

## 2. Current status

- **Phase:** In progress — v2 material-first editorial redesign
- **Local project:** `project/recup-landing`
- **Target development URL:** `http://localhost:3000`
- **Deployment:** out of scope until explicitly requested
- **Last updated:** 2026-10-16

## 3. Confirmed constraints

- Local framework project, not ChatGPT Sites.
- No backend, API, database, authentication, payment, or admin dashboard.
- Static-export-friendly implementation.
- One-page landing experience.
- Vietnamese primary copy with selected English brand phrases.
- Responsive from mobile to desktop.
- Respect `prefers-reduced-motion` and provide a non-WebGL fallback.
- Do not invent customers, certifications, test results, environmental impact statistics, or production capabilities.

## 4. Technical decisions

| Area | Choice | Reason |
| --- | --- | --- |
| Framework | Next.js App Router + TypeScript | Component structure, metadata support, local development, static export |
| Styling | Tailwind CSS + CSS custom properties | Fast responsive implementation with a controlled design system |
| Primary animation | GSAP + ScrollTrigger | Scroll-linked timelines, pinning, and sequencing |
| 3D | Three.js through React Three Fiber and Drei | React-friendly 3D scene and GLTF support |
| Icons | Lucide React | Lightweight, consistent icon set |
| Output | Next.js static export | Produces deployable HTML/CSS/JS without a runtime server |
| Data | Local typed content objects | Keeps copy centralized without adding a CMS |

## 5. Visual direction

**Theme:** eco-editorial with an industrial material-science edge.

### Color tokens

- Coconut cream: `#F3EBDD`
- Deep forest: `#173F2C`
- Coconut brown: `#805438`
- Young leaf: `#8AAA72`
- Warm clay: `#C8754D`
- Charcoal: `#1C211D`

### Style principles

- Large editorial headlines and generous whitespace.
- Natural-fiber texture used sparingly.
- Asymmetric layouts rather than repeated centered cards.
- Product material and circular journey remain the visual focus.
- Motion explains structure; it is not added merely as decoration.

## 6. Page narrative

1. **Navigation** — Logo and anchors for story, material, validation, lifecycle, and F&B.
2. **Hero** — Brand proposition and interactive product visual.
3. **Coconut-fiber story** — Full-screen real-material photography and the founding question.
4. **Mission** — By-product → packaging → collection → renewed value.
5. **Material composition** — Coconut fiber, bio-binder, and PLA coating, all explicitly presented as estimated ranges.
6. **Validation plan** — 3–5 material formulas and 30–60 minute use-condition checks presented as planned research, not achieved results.
7. **Circular journey** — Material → cup → use → return → suitable validated processing.
8. **Value pillars** — Economic, social, and environmental intent.
9. **For F&B partners** — Cup, separate collection point, and traceable handover data.
10. **Closing statement / footer** — Restates the documented mission and research-stage status.

## 7. Signature interaction

The hero contains a stylized 3D RE-CUP built from simple geometry. Its current
visual reference is a small kraft takeaway cup: tapered body, warm-white lid,
subtle paper-fiber texture, and flat forest-green branding.

### Direct manipulation

1. The hero keeps the cup assembled and recognizable at every scroll position.
2. Desktop visitors can hold and drag the cup to rotate it through 360 degrees.
3. Rotation uses damping and prevents zoom/pan so the interaction stays focused.
4. Material composition remains in the dedicated section below instead of being
   shown as technically misleading, detachable shells.

### Fallback strategy

- Mobile/low-power fallback: simplified scene with reduced pixel ratio and fewer particles.
- WebGL failure fallback: static rendered product illustration.
- Reduced-motion mode: no pinning or scrubbed motion; content remains fully readable.

## 8. Content guardrails

- Use “dự kiến”, “hướng tới”, or “cần được kiểm nghiệm” for unverified material properties.
- Do not claim that the full cup is certified compostable or recyclable.
- Do not display named F&B brands as customers or partners.
- The seed version is optional and will not be presented as part of the core product unless scope changes.
- Do not present the 2,700 VND target price as a confirmed market price unless clearly labeled as an assumption.

## 9. Planned file structure

```text
recup-landing/
├── IMPLEMENTATION_PLAN.md
├── public/
│   ├── images/
│   ├── textures/
│   └── models/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   ├── three/
│   │   └── ui/
│   ├── data/
│   │   └── site-content.ts
│   └── lib/
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 10. Delivery phases

### Phase 0 — Plan and workspace

- [x] Confirm local-only scope.
- [x] Confirm no backend requirements.
- [x] Define stack and page narrative.
- [x] Create this implementation plan.
- [x] Inspect available Node.js and package-manager versions.

### Phase 1 — Scaffold

- [x] Create the Next.js TypeScript project.
- [x] Configure static export.
- [x] Add animation, 3D, and icon dependencies.
- [x] Establish design tokens, typography, metadata, and base layout.
- [x] Verify the untouched scaffold builds successfully.
- [x] Run lint and verify the configured static export build.

### Phase 2 — Complete static landing page

- [x] Centralize approved copy in typed content data.
- [x] Implement navigation and every narrative section.
- [x] Build responsive layouts for mobile, tablet, and desktop.
- [x] Add meaningful placeholder/product visuals without false claims.
- [x] Confirm the page remains coherent with JavaScript animations disabled.

### Phase 3 — Motion and 3D

- [x] Build the procedural RE-CUP model.
- [x] Add lighting, material texture, and pointer response.
- [x] Connect the hero sequence to scroll progress.
- [x] Animate the circular-journey SVG.
- [x] Add restrained section reveals and micro-interactions.
- [x] Implement reduced-motion and WebGL fallbacks.

### Phase 4 — Polish

- [x] Replace temporary visuals with final local assets where useful.
- [x] Tune typography, spacing, contrast, and visual rhythm.
- [x] Optimize images, textures, canvas resolution, and bundle size.
- [x] Add favicon and final metadata.
- [x] Add a social preview image.

### Phase 5 — Verification

- [x] Run lint/type checks.
- [x] Run production build and confirm static export output.
- [x] Test desktop and mobile layouts in a browser.
- [x] Test keyboard navigation and reduced-motion mode.
- [x] Check for console errors, horizontal overflow, and visible layout shifts.
- [x] Record final commands and handoff notes in `README.md`.

## 11. Definition of done

- `pnpm dev` starts the project locally without errors.
- The page tells the complete RE-CUP story without requiring backend data.
- The hero interaction works on desktop and degrades safely on mobile.
- All sections are readable and navigable without animation.
- The project passes its checks and production build.
- Static export assets are generated successfully.
- No unsupported environmental, certification, or customer claims are shown.

## 12. Decision log

| Date | Decision |
| --- | --- |
| 2026-10-13 | Keep the project local and framework-based; do not use ChatGPT Sites hosting. |
| 2026-10-13 | Use a frontend-only Next.js static-export architecture. |
| 2026-10-13 | Build the initial cup procedurally so progress is not blocked by a 3D asset. |
| 2026-10-13 | Treat the Google Doc as source material, while softening claims that are still hypotheses. |
| 2026-10-13 | Disable the generated Partial Prerendering/cache flags because Next.js export mode rejects PPR and the site has no runtime data. |
| 2026-10-13 | Keep an inline SVG product illustration as the no-JavaScript, reduced-motion, mobile, and WebGL fallback. |
| 2026-10-13 | Render the WebGL scene from 768 px upward; mobile prioritizes readability and load cost over 3D. |
| 2026-10-13 | Generate the social preview image at build time and use `NEXT_PUBLIC_SITE_URL` only as an optional deployment-time origin override. |
| 2026-10-13 | Final QA confirmed keyboard focus, reduced-motion fallback, valid anchors, no horizontal overflow, and no runtime errors. |
| 2026-10-13 | Rebuilt the hero cup around the supplied café reference: shorter takeaway proportions, a layered white lid, kraft-fiber texture, and direct printed branding; updated the SVG fallback to match. |
| 2026-10-13 | Removed the scroll-driven exploded shells and material callouts; the assembled cup now uses pointer-drag 360-degree rotation on desktop. |
| 2026-10-13 | Removed the procedural fiber texture from both WebGL and SVG render paths in favor of a smooth kraft finish; rebuilt the hero proposition as an intentional two-line lockup with separately balanced supporting copy. |
| 2026-10-13 | Added screen-wide cursor parallax as a subtle translation/tilt layer while keeping direct cup dragging dedicated to 360-degree rotation; restored the full RETHINK · RETURN · REGROW mark on every cup render path. |
| 2026-10-13 | Added an accessible floating two-button section stepper with nine intentional stops, smooth scrolling, clear solid controls, endpoint locking, and reduced-motion support. |
| 2026-10-13 | Removed the cup interaction hint, prototype-image disclaimer, and material-ratio research note to simplify the presentation and eliminate competing peripheral copy. |
| 2026-10-16 | Reframed the full site around a material-first editorial narrative inspired by strong biomaterial and circular-product references; retained only claims traceable to the source document. |
| 2026-10-16 | Moved the real coconut-fiber image into a dedicated full-screen story section and kept the cup as a separate product reveal in the hero. |
| 2026-10-16 | Added a distinct validation section so planned formulas and use-condition checks cannot be mistaken for completed test results. |

