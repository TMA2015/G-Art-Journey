# G-Art Journey

*A little art space for a father and daughter.* Explore · Feel · Create.

G-Art Journey is a personal, public art website, not a classroom or art marketplace. Browse illustrations and drawing ideas, learn a few gentle techniques, and keep a small family gallery. No scores, AI assessment, accounts, comments, or direct browser uploads.

## Project handoff / source of truth

Before continuing development in a new chat or work session, read [docs/PROJECT_MASTER_HANDOFF.md](docs/PROJECT_MASTER_HANDOFF.md). It records the current master plan, approved design principles, QA rules, completed milestones and exact next task. Any change to those rules should update the handoff in the same PR.

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

`npm run art:prepare -- --input <temporary-art-folder> --activate` optimizes and validates a prepared art batch, activates pages only when every required image is present, and writes checksum metadata. An authorized Work/desktop environment can push binary art on the current release branch with Git or `node scripts/push-art-batch.mjs --branch <release-branch> --push`. No extra image-host account is required. Historical Batch 02 details remain in [docs/CHARACTER_BATCH_02.md](docs/CHARACTER_BATCH_02.md).

## Introductory guide reconciliation

The previous face, figure and perspective vector-only notes have been withdrawn from featured cards. Current Human Drawing and landscape learning areas use illustrated guides, while legacy URLs remain friendly update/compatibility pages where needed. See [docs/LEGACY_GUIDE_RECONCILIATION.md](docs/LEGACY_GUIDE_RECONCILIATION.md).

## Character Art collection

Character Art now uses a topic-first library with **6 topics × 3 illustrated lessons = 18 topic lessons**: Manga, Manhwa / Webtoon, Manhua, Cartoon / Comics, Chibi Characters and Fairy-Tale Princess. The separate Character Face Design Lab remains available as its own direct guide. Start at [Character Styles](https://tma2015.github.io/G-Art-Journey/character-styles/).

Artwork is stored as optimized WebP in GitHub with checksum validation. The original 12-poster baseline is documented in [docs/CHARACTER_BATCH_02.md](docs/CHARACTER_BATCH_02.md); the latest Chibi + Fairy-Tale Princess release is documented in [docs/CHARACTER_CHIBI_PRINCESS_RELEASE.md](docs/CHARACTER_CHIBI_PRINCESS_RELEASE.md).

## Reference Library

The live [Reference Library](https://tma2015.github.io/G-Art-Journey/reference-library/) contains **23 approved visual reference sheets** across Poses, Motion, Hair and Clothing. Current published style filters with assets are General / Natural, Chibi and Fairy-Tale Princess. The Manga, Manhwa / Webtoon and Manhua labels remain reserved for future reference batches. See [docs/REFERENCE_LIBRARY_PLAN.md](docs/REFERENCE_LIBRARY_PLAN.md).

## Core Drawing Skills and medium guides

The original Phase 2 roadmap has grown into live illustrated learning areas for **Hands, Eyes, Hair and Fabric**, alongside Pencil, Landscape, Watercolor and Digital Art guides. Digital Art uses topic → lesson navigation, and teaching posters are displayed at a comfortable single-lesson reading size. Graphite work remains pencil-first while G-Art pastel identity stays in headings and small annotations.

The historical roadmap and source map remain in [docs/CORE_DRAWING_SKILLS_PHASE2.md](docs/CORE_DRAWING_SKILLS_PHASE2.md) and [docs/ACADEMIC_REFERENCE_MAP.md](docs/ACADEMIC_REFERENCE_MAP.md). Current production status and release history live in [docs/PROJECT_MASTER_HANDOFF.md](docs/PROJECT_MASTER_HANDOFF.md).
