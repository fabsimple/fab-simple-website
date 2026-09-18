@AGENTS.md

# FabSimple — Agent & Developer Standards

This document defines the canonical design system, tech stack, component patterns, and coding conventions for the **FabSimple** project. Any AI agent or developer making changes **must follow these standards exactly**.

---

## Project Overview

**FabSimple** is a B2B SaaS landing website for steel fabrication management software — similar to Tekla PowerFab. The target audience is structural steel shop owners, operations managers, and estimators.

**Live dev server:** `http://localhost:3000`  
**Project root:** `C:\Users\Vinay kumar\.gemini\antigravity-ide\scratch\fabsimple`

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animation | Framer Motion | 13.x |
| Icons | Lucide React | latest |
| Utilities | clsx + tailwind-merge via `@/lib/utils` `cn()` | latest |

> **No shadcn/ui component library is installed.** All UI components are hand-built. Do not add shadcn, Radix, or any third-party component library without explicit approval.

---

## File Structure

```
src/
├── app/
│   ├── globals.css          ← Design tokens, base styles — edit here for global style changes
│   ├── layout.tsx           ← Root layout, fonts, metadata
│   └── page.tsx             ← Main page — assembles all sections in order
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       ← Sticky navbar, scroll-aware
│   │   └── Footer.tsx       ← Dark footer, 4 link columns
│   └── sections/            ← One file per page section
│       ├── Hero.tsx
│       ├── PainPoints.tsx
│       ├── Modules.tsx      ← Interactive 6-tab module showcase
│       ├── HowItWorks.tsx
│       ├── Stats.tsx        ← Animated counters
│       ├── Testimonials.tsx ← Carousel
│       ├── Integrations.tsx
│       ├── PricingFaq.tsx
│       └── CtaSection.tsx
└── lib/
    └── utils.ts             ← cn() helper only
```

**Rules:**
- Each page section = its own file in `src/components/sections/`
- Layout elements (nav, footer) live in `src/components/layout/`
- No `pages/` directory — this is an App Router project
- All client-side components must have `"use client"` at the top

---

## Design System

### Philosophy
**Strictly monochromatic.** The entire palette is tints and shades of black and white using Tailwind's `zinc` scale. Color is only introduced **sparingly** via `slate-500/600` for icons and minor highlights. No bright colors (no red, blue, green, orange, purple, etc.) anywhere.

### Color Palette

Use **only** these Tailwind color tokens:

| Usage | Token | Hex Approx |
|-------|-------|-----------|
| Page background | `zinc-50` | `#FAFAFA` |
| Card / surface | `white` | `#FFFFFF` |
| Subtle bg | `zinc-100` | `#F4F4F5` |
| Border (default) | `zinc-200` | `#E4E4E7` |
| Border (strong) | `zinc-300` | `#D4D4D8` |
| Text primary | `zinc-900` | `#18181B` |
| Text secondary | `zinc-600` | `#52525B` |
| Text muted | `zinc-400` | `#A1A1AA` |
| CTA / dark bg | `zinc-900` | `#18181B` |
| Dark section bg | `zinc-900` / `zinc-950` | `#18181B` / `#09090B` |
| Icon accent *(sparingly)* | `slate-500` / `slate-600` | `#64748B` |
| Icon bg *(sparingly)* | `slate-50` / `slate-100` | `#F8FAFC` |

**Never use:** `blue-*`, `red-*`, `green-*`, `yellow-*`, `purple-*`, `pink-*`, `indigo-*`, `emerald-*`, `teal-*`, or any vibrant/saturated color.

### Typography

Fonts are loaded via `next/font/google` in `layout.tsx`:
- **Inter** — all body text, headings, UI labels (`font-sans`)
- **JetBrains Mono** — numbers, stats, code snippets, monospace data (`font-mono`)

**Scale:**
| Role | Classes |
|------|---------|
| Section heading | `text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight` |
| Sub-heading | `text-2xl font-bold text-zinc-900` |
| Body | `text-sm text-zinc-500 leading-relaxed` |
| Label / badge | `text-xs font-semibold text-zinc-400 uppercase tracking-widest` |
| Stat number | `text-3xl font-bold text-zinc-900 font-mono tracking-tight` |

### Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28` (or use `.section-padding` CSS class)
- Card border radius: `rounded-xl`
- Button border radius: `rounded-md`
- Grid gaps: `gap-6` (standard), `gap-4` (tight), `gap-8` (loose)

### Sections Pattern

Every section follows this structure:
```tsx
<section id="anchor-id" className="section-padding bg-[surface] border-t border-zinc-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header — always top-left or centered */}
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="badge mb-4">Section Label</div>
      <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
        Primary headline
        <span className="text-zinc-400"> secondary part.</span>
      </h2>
    </motion.div>
    {/* Section content */}
  </div>
</section>
```

**Alternating backgrounds:**
- Light sections: `bg-white` or `bg-zinc-50`
- Dark sections: `bg-zinc-900` (Stats, CtaSection, Footer)

---

## Animation Standards (Framer Motion)

All animations use `whileInView` with `viewport={{ once: true }}` — animations fire once on scroll-enter, never repeat.

### Standard Variants

```tsx
// Fade up (default for most elements)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}

// Staggered children — apply to parent container
variants={{
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-80px" }}

// Tab/panel swap (AnimatePresence)
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -12 }}
transition={{ duration: 0.3, ease: "easeInOut" }}

// Carousel slide
initial={{ opacity: 0, x: 40 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -40 }}
transition={{ duration: 0.4, ease: "easeInOut" }}
```

**Rules:**
- Do NOT use `whileHover` with large transforms — keep hover effects to CSS (`hover:` classes)
- Do NOT use spring physics (`type: "spring"`) — stick to the cubic bezier above
- Keep `duration` between `0.3` and `0.7` — never longer

---

## Component Patterns

### Badges / Labels
```tsx
<div className="badge mb-4">Section Label</div>
```
(defined in `globals.css` as `.badge`)

### Dark UI Preview Panels
Dark terminal-style preview panels use:
```tsx
<div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
  {/* Window chrome */}
  <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
    <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
  </div>
  {/* Content */}
</div>
```

### CTA Buttons
Primary (dark): `px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-md hover:bg-zinc-700 transition-colors`  
Secondary (outlined): `px-6 py-3 bg-white text-zinc-700 text-sm font-semibold rounded-md border border-zinc-300 hover:bg-zinc-50 transition-colors`

### Feature / Checklist Items
```tsx
<li className="flex items-start gap-2.5 text-sm text-zinc-600">
  <div className="w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
      <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
  Feature text here
</li>
```

---

## SEO & Accessibility

- Every section must have a unique `id` attribute for anchor navigation
- Every interactive element must have a unique `id` for testing
- All `<button>` elements must have `aria-label` when they contain only icons
- Images must have descriptive `alt` text
- Use semantic HTML: `<section>`, `<nav>`, `<main>`, `<footer>`, `<header>`, `<article>`
- One `<h1>` per page (in Hero). Sections use `<h2>`. Sub-items use `<h3>`

---

## Fonts in CSS

Fonts are **only** loaded via `next/font` in `layout.tsx`. Do **not** add `@import url(...)` for Google Fonts inside `globals.css` — Tailwind CSS v4 PostCSS will throw an error because `@import "tailwindcss"` expands before the font import can be processed.

---

## Domain Terminology

Use steel fabrication industry language:
- **Piece mark** (not "part number") — unique identifier for a fabricated piece
- **BOM** — Bill of Materials
- **WIP** — Work in Progress
- **MTR** — Mill Test Report (material traceability document)
- **Heat number** — material traceability ID from the steel mill
- **Takeoff** — extracting quantities from drawings/models
- **Work center** — a production station (e.g., cutting, welding, painting)
- **Erection** — on-site steel installation (not "construction")
- **Shop drawings** — fabrication-level engineering drawings
