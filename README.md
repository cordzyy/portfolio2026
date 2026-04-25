# Portfolio 2026

A professional-grade portfolio built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v3 + shadcn/ui (zinc)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Images**: Unsplash placeholders (swap via `src/data/mock.ts`)

## Design

- **Theme**: Midnight Black `#050505` with Zinc accents and Violet highlights
- **Effects**: Glassmorphism, radial glows, CSS grid background
- **Motion**: Staggered entrance animations, smooth scroll, hover lift effects

## Quick Start

1. Copy all files from this output into `D:\VS Code\portfolio2026`
2. In that directory, run:

```powershell
# Initialize Next.js (will ask about overwriting - choose to keep your files)
npx create-next-app@latest . --typescript --tailwind --eslint --src-dir --app --import-alias "@/*" --yes

# Init shadcn
npx shadcn@latest init -d

# Install Framer Motion
npm install framer-motion

# Start dev server
npm run dev
```

3. Visit `http://localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind + custom vars + scrollbar
│   ├── layout.tsx         # Root layout with Navbar + Footer
│   └── page.tsx           # Home page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky nav with scroll effect + mobile menu
│   │   └── Footer.tsx     # Simple footer
│   ├── sections/
│   │   ├── Hero.tsx       # Landing hero with avatar + floating badges
│   │   ├── Projects.tsx   # Featured + grid cards with hover effects
│   │   ├── Skills.tsx     # Animated skill bars by category
│   │   ├── Experience.tsx # Timeline layout
│   │   └── Contact.tsx    # CTA section
│   └── ui/
│       └── badge.tsx      # shadcn Badge component
├── data/
│   └── mock.ts            # ← ALL content lives here. Edit this.
└── lib/
    └── utils.ts           # cn() helper
```

## Customization

All portfolio content is in **`src/data/mock.ts`**. No text is hardcoded in components.

- `heroData` – name, title, description, stats, social links
- `navLinks` – navigation items
- `projectsData` – projects array (title, description, image, tags, urls)
- `skillsData` – skill categories with proficiency levels
- `experienceData` – work history with highlights
- `contactData` – email and availability

To swap images, replace the Unsplash URLs in `mock.ts` with your own.

## Notes

- `next.config.ts` already has `images.remotePatterns` configured for `images.unsplash.com`
- All components use `"use client"` where needed for Framer Motion
- The `scroll-smooth` class is applied at the `<html>` level for anchor navigation
