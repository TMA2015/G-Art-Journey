# Character Styles — original Batch 02 baseline (12 posters)

> **Historical baseline.** This document records the original four-topic Character Styles batch: Manga, Manhwa / Webtoon, Manhua and Cartoon / Comics, three posters each. The current live Character Art library has **6 topic shelves × 3 lessons = 18 topic lessons**, plus the separate Character Face Design Lab, after the Chibi Characters + Fairy-Tale Princess expansion. See `docs/CHARACTER_CHIBI_PRINCESS_RELEASE.md` and `docs/PROJECT_MASTER_HANDOFF.md` for current status.

Batch 02 introduced twelve approved original posters in four groups: manga, webtoon, manhua and cartoon. Each group has an introductory character guide, an illustrated variation sheet and a focused technique. Layouts flex with the skill; shared pastel colors and accessible captions keep the family identity.

The images are optimized original WebP web versions stored in `public/infographics/character/`. No external image host, account or grading. The source PNGs are not committed. All twelve SHA-256 checksums and dimensions are recorded in `src/data/character-assets.mjs`; `npm run art:check` and CI verify the real files.

## Navigation
- At the time of Batch 02, `/character-styles/` offered four groups with three complete poster cards each. The current page now exposes six topic shelves.
- Every poster has its own `/guide/<slug>/` page with plain-English steps, viewing and saving controls.
- Drawing Guides provides a prominent collection entry and keeps the character category filter.
- The earlier generic manga starter guide redirects readers via an update notice to the new dedicated poster rather than remaining a duplicate catalog card.

## Art direction and distinctions
- Manga Face: eye and hair design; Manga Variations: multiple face designs; Manga Character: styled proportions and full-body design.
- Webtoon Character: contemporary character; Face Variations: subtle mood and features; Color and Story: five vertical story panels and soft rendering.
- Manhua Character: outfit and figure; Variations: face/ornament designs; Ink Rhythm: flowing hair and fabric.
- Cartoon Character: construction; Variations: shape language and individual facial features; Expressions and Action: gesture and animation-minded pose design.

These are creative examples, not rules for all artists or people from a country. Character faces and clothes are deliberately distinct between collections.

## Release verification
`npm test && npm run art:check && npm run audit:guides && npm run build && node scripts/verify-build.mjs && npm run audit:assets`. Preserve the deployed site until these pass and check a real Pages deployment afterwards.
