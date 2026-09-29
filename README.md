# G-Art Journey

*A little art space for a father and daughter.* Explore · Feel · Create.

G-Art Journey is a personal, public art website, not a classroom or art marketplace. Browse illustrations and drawing ideas, learn a few gentle techniques, and keep a small family gallery. No scores, AI assessment, accounts, comments, or direct browser uploads.

## Start locally

Node.js 22+:

```bash
npm install
npm run dev
npm test
npm run build
```

Astro builds to `dist/`; the site is configured for the GitHub Pages project path `/G-Art-Journey/`.

## Gallery workflow

Add images to `public/artworks/daughter/`, `public/artworks/dad/`, or `public/artworks/shared/`. Optionally describe them in `public/artworks/artworks.json`. Run `npm run build`, or push to `main` to let GitHub Actions scan folders and regenerate the gallery. See [docs/ADDING_ARTWORK.md](docs/ADDING_ARTWORK.md).

**Public repository = public artwork.** Do not upload private personal or location information. The curated SVG artwork in `public/showcase/` is original placeholder illustration for this site's design; none is represented as work by either family member.

## Publish

In GitHub **Settings → Pages**, set **Build and deployment → Source: GitHub Actions**. The workflow tests, builds and publishes the site from `main` at:

https://tma2015.github.io/G-Art-Journey/

A pull request builds/tests but never deploys. Merge only when ready. Update the repo's image folders any time afterwards; a successful push to `main` refreshes the gallery.

Brand mark is reused from the owner's G Learning identity, while G-Art Journey has its own art-oriented title and character.

## Language direction (v0.5)

English is the only active public language, at the canonical root URL. Existing `/en/` addresses remain as English aliases for older links. The VN/EN switch is deliberately hidden, and the previous Vietnamese content dictionary and translated image assets are retained in source for a future, independently reviewed `/vi/` release. There is no auto-translation of family artworks. See [docs/ENGLISH_FIRST.md](docs/ENGLISH_FIRST.md).
