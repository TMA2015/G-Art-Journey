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

## One-platform image monitoring

Images stay in GitHub. Each build reports asset counts, large images and published-site size in the GitHub Actions job summary. No images are rejected or altered automatically. See [docs/ASSET_POLICY.md](docs/ASSET_POLICY.md). Run locally after `npm run build` with `npm run audit:assets`.

## Human Drawing visual guides

Eight original English-first illustrated guides for faces, expressions, head angles, age examples, figure proportions and poses. Start at `/human-drawing/`. Optimized WebP posters are tracked in `public/infographics/human/`; integrity checks prevent publishing missing artwork. See [docs/HUMAN_DRAWING_BATCH_01.md](docs/HUMAN_DRAWING_BATCH_01.md).

## Automated batch publishing

`npm run art:prepare -- --input <temporary-art-folder> --activate` optimizes and validates the full next art batch, activates its pages only when every image is present, and writes the image checksum manifest. An authorized Work/desktop environment can push the batch in one commit with Git or `node scripts/push-art-batch.mjs --branch feat/character-batch02-pipeline --push`. No original artwork or extra image-host account is required. See [docs/CHARACTER_BATCH_02.md](docs/CHARACTER_BATCH_02.md).

## Introductory guide reconciliation

The previous face, figure and perspective vector-only notes have been withdrawn from featured cards. Approved human-drawing posters replace the first two; old links remain friendly update pages. Landscape perspective text stays accessible while its new illustration is prepared. See [docs/LEGACY_GUIDE_RECONCILIATION.md](docs/LEGACY_GUIDE_RECONCILIATION.md).

## Character Styles collection

Twelve original illustrated posters now live in four groups at [Character Styles](https://tma2015.github.io/G-Art-Journey/character-styles/). Artwork is stored as optimized WebP in GitHub with exact SHA-256 validation; see [docs/CHARACTER_BATCH_02.md](docs/CHARACTER_BATCH_02.md).
