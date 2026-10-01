# G-Art Journey — Daughter Gallery V1

_Last updated: 2026-10-01_

## Goal

Keep this deliberately simple and joyful.

The first version is a small personal art space where the learner can see her own drawings presented nicely and feel like drawing more. It is **not** a progress dashboard, assessment system or public critique page.

## Initial selection

The owner supplied a final ten-image RAR for Gallery V1. The archive is numbered **01 → 10**.

All were drawn in **Procreate on iPad during 2026**.

Chronology is learner/owner-confirmed:
- 01 is the earliest of this set
- each larger number was drawn later
- 10 is the most recent of this set

## V1 interaction

One lightweight page at `/my-art/`:

- large filtered slideshow
- tag filters
- gallery grid
- newest / oldest ordering
- open artwork at full size
- no scores, levels, ratings or progress claims

Initial tags:
- Character
- Portrait
- Pose
- Expression
- Hair
- Outfit
- Chibi
- Sketch

Tags can evolve later without changing the page architecture.

## Chronology rule

Do not invent month/day dates.

Confirmed metadata:
- year: **2026** for all ten works
- order: **01 → 10**, oldest → newest

This is sufficient for newest/oldest sorting and later filtered timelines such as “Portraits through time” without introducing a formal progress system.

## Publication approval

On 2026-10-01 the owner explicitly approved the ten selected candidate IDs above as the first set that may be uploaded to the learner gallery.

The earlier 18-image audit had separately flagged other images for fan-art/reference or external-background checks; those flagged images are not part of this initial ten-image release.

No additional provenance round is required for these ten unless a new concern is discovered while reconnecting the source files.

## Privacy

Public copy should not need:
- learner full name
- school
- exact age
- location
- personal account identifiers

The artwork is the focus.

## Current technical state

Branch: `feature/daughter-gallery-v1-20261001`

Data:
- `src/data/daughter-art.mjs`

Page:
- `src/pages/my-art.astro`

Styles:
- `src/styles/my-art.css`

Images:
- owner supplied `New folder.rar` containing `1.jpg` through `10.jpg`
- web copies are stored as AVIF under `public/artworks/daughter/01.avif` through `10.avif`
- source chronology maps directly to the numeric filenames
- originals remain the owner's source archive; web copies are optimized derivatives for the site

Release remains on the Draft PR until owner visual QA.
