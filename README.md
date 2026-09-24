# CODEFRAME

Premium marketing site for CODEFRAME — a digital systems company (websites, AI automation, lead generation, custom software).

## Stack
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide React

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `app/` — root layout, global styles, and the single page (`app/page.tsx`)
- `components/` — Navbar, Hero, SystemVisual, Services, ServiceCard, FeaturedWork, ProjectCard, Process, ProcessStep, Pricing, PricingCard, About, CTA, Footer
- `lib/data.ts` — nav links, services, process steps, and pricing tiers (single source of content)

## Notes

- Colors, fonts, spacing, and shadows are defined as Tailwind theme tokens in `tailwind.config.ts` — change the palette from one place.
- The hero's system visualization and the CreatorLink project preview are built entirely from CSS/SVG/React, no images required.
- Update the contact link in `components/CTA.tsx` (`mailto:hello@codeframe.studio`) and the canonical URL in `app/layout.tsx` before deploying.
