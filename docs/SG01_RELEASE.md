# SG-01 — Skill Gap Release

**Status:** LIVE — PR #69 merged; Pages #316 PASS; owner desktop/iPad QA pending
**Date:** 2026-10-03

## Scope

Three owner-approved transferable foundation lessons:

1. **Draw Gesture & Motion from Simple Lines**
   - slug: `gesture-motion-basics`
   - category: Core Drawing / Figure
   - Learning Paths: Draw People core; Create Characters support

2. **Draw Feet from Simple Forms**
   - slug: `feet-simple-forms`
   - category: Core Drawing / Figure
   - Learning Paths: Draw People Explore more; Create Characters support

3. **Build a Simple Color Palette**
   - slug: `simple-color-harmony`
   - category/filter: Color Basics
   - Learning Paths: Create Characters support; Watercolor Explore more; Digital Art Explore more

## Architecture boundaries

- Do not add Gesture or Feet to the fixed Human Drawing 2-topic / 8-lesson shelf. They are reusable Core Drawing support lessons.
- Do not add Color Palette to either Digital 5-lesson series.
- Do not add Color Palette as a required seventh Watercolor step.
- `Color Basics` is a light catalog filter for cross-medium color foundations, not a new top-level curriculum area.
- Existing URLs, Character Art hierarchy and Reference Library remain unchanged.

## Approved binary contract

Pinned in:
- `assets/batches/sg01-release.json`

Exactly three supplied WebPs must be used unchanged:
- `public/infographics/core/gesture-motion-basics.webp`
- `public/infographics/core/feet-simple-forms.webp`
- `public/infographics/color/simple-color-palette.webp`

No regeneration, crop, resize, logo replacement, recolor or alternative artwork.

## Release gate

Before merge:
1. exact WebP SHA-256 / byte-size / dimension verification
2. full `npm test`
3. `npm run audit:content`
4. guide distinctness audit
5. production build
6. route verification for all three lesson pages
7. Learning Paths verification
8. Color Basics filter verification

After deploy, owner desktop/iPad QA:
- each poster readable at normal lesson-page width
- View large / Save WebP work
- Gesture appears between Figure Proportions and Standing Figure in Draw People
- Feet appears only under Explore more/support
- Color Palette appears as optional support in Character, Watercolor and Digital paths
- Digital remains 2 × 5 lessons
- Watercolor remains 6 core steps

### SG-01 integration gate — 2026-10-03

- Existing PR #69 / `feature/sg01-learning-path-integration-20261003`; exactly three approved binaries uploaded unchanged.
- Hashes, byte sizes and dimensions match `assets/batches/sg01-release.json`; built output hashes also match.
- Semantic review: lesson descriptions, six teaching steps, Try it and Remember agree with the approved poster sequences. Existing owner acceptance of the imperfect Gesture continuity remains in force; no artwork changed.
- Local full gate PASS: **98 tests**, content-consistency audit (53 active guides), distinctness audit (53 guides, zero high-overlap pairs), **214-page build**, **66 canonical routes / legacy aliases**, asset audit with no warnings.
- Generated HTML confirms Gesture between Figure Proportions and Standing Figure, Feet only in Draw People Explore more, all three Character support links, optional palette links in Watercolor/Digital, and the Color Basics filter/card.
- Digital remains **two series × five lessons**; Watercolor remains **six core steps**; Human Drawing remains **two topics / eight lessons**.
- Final PR CI must pass before merge; verify Pages build/deploy after merge. Owner desktop/iPad visual QA remains pending.

### SG-01 verified production release — 2026-10-03

- Existing PR **#69 merged** after final-head CI **#315 PASS**.
- Final PR head: `17c89ebb697f9be89c06d9cdf828e851bcbe83f7`.
- Production implementation merge: `9ca5f88a91a915476b43494076bf2c5af60c6a18`.
- Pages workflow **#316 PASS**: build and deploy succeeded.
- Full release gate PASS: **98/98 tests**, content consistency, guide distinctness (53 guides / zero high-overlap pairs), 214-page production build, 66 canonical routes with legacy aliases, and asset-budget audit with no warnings.
- Exactly **3/3 approved WebPs** are published unchanged; hashes, byte sizes and dimensions match the supplied manifest and built output.
- New lesson routes: `/guide/gesture-motion-basics/`, `/guide/feet-simple-forms/`, `/guide/simple-color-harmony/`.
- Gesture is Draw People core immediately after Figure Proportions and before Standing Figure. Feet remains Explore more/support.
- Gesture, Feet and Palette are optional Create Characters support choices; Palette is only Explore more in Watercolor and Digital Art.
- Color Basics remains a lightweight catalog filter. Human Drawing is still two topics/eight lessons; Digital remains two series × five lessons; Watercolor remains six core steps.
- Approved images and embedded logos were not regenerated, cropped, resized, recolored or rebranded. Unrelated generated gallery/material artifacts were excluded.
- Next: owner desktop/iPad QA of poster readability, View large / Save WebP, path placement, optional boundaries, Color Basics filter and portrait/landscape overflow. Pause content expansion after SG-01 and reassess Learning Paths.
