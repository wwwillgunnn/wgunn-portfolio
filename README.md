# William Gunn — Portfolio

A portfolio site built with [Astro](https://astro.build), React islands, Tailwind CSS v4, and Three.js.

## Requirements

- Node.js `>=22.12.0`
- [pnpm](https://pnpm.io) (this project uses `pnpm`; the version is pinned via the `packageManager` field)

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the static site to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Run `astro check` (types + diagnostics) |
| `pnpm astro` | Run the Astro CLI |

## Project Structure

```text
src/
├── assets/model/          # Source images (optimized at build by astro:assets)
├── components/
│   ├── explore/           # Three.js / React Three Fiber scene
│   └── model/             # Navbar, Card, Gallery, Lightbox, RunwayCard
├── data/galleryData.ts    # Model gallery content
├── layouts/               # BaseLayout + ModelLayout
├── pages/
│   ├── index.astro        # Landing
│   ├── explore.astro      # Interactive 3D space environment
│   └── model/             # Gallery, runway, compcard, contact
└── styles/global.css      # Tailwind v4 entry + theme tokens
public/                    # Static assets served as-is
```

## Notes

- The `/model` gallery images live in `src/assets/model` and are imported into
  `src/data/galleryData.ts`, so Astro can generate optimized WebP variants.
- React is used only for interactive islands (`Navbar`, `Lightbox`, `SpaceScene`).
- The `/explore` scene is mounted with `client:only="react"` because WebGL requires
  the browser environment.
