# G-Art Journey — Daughter Gallery V1

_Last updated: 2026-10-01_

## Goal

Keep this deliberately simple and joyful.

The first version is a small personal art space where the learner can see her own drawings presented nicely and feel like drawing more. It is **not** a progress dashboard, assessment system or public critique page.

## Initial selection

Approved candidate IDs from the previous 18-image audit:

- 02
- 04
- 07
- 08
- 09
- 11
- 12
- 13
- 15
- 16

All were drawn in **Procreate on iPad**.

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

Do not invent dates.

Before public release, record either:
- approximate date (preferred), or
- a simple learner-confirmed chronological order.

The page can then sort newest/oldest and later support filtered timelines such as “Portraits through time” without introducing a formal progress system.

## Rights / provenance gate

The earlier learner-art rule still applies before public release.

For each selected piece, confirm:
- original character/artwork vs fan-art/reference
- whether any external photo/background/reference is embedded in the final image
- whether that background/reference is okay to publish

The V1 branch may stage the page and metadata before this confirmation, but **do not merge image publication to the public site until the gate is satisfied**.

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
- not yet copied to the repository because the previous-chat image records are viewable for audit but their original raw bytes are not exportable into the current GitHub tool session
- once the ten source files are available again as raw uploads, place them under `public/artworks/daughter/` and fill the matching `src` values

Release remains staging-only until chronology + provenance are confirmed.
