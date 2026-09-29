# Human Drawing — approved illustrated batch 01

Eight original, owner-approved illustrations are used as full teaching posters (not cut into unusable cropped thumbnails). English-first, gentle pastel typography, graphite-style lines, five visual stages/variations where applicable.

## Grouping

| Faces & Head | Figure & Pose |
|---|---|
| Draw a Face in Five Steps | Understand Simple Figure Proportions |
| Five Everyday Facial Expressions | Draw a Standing Figure Step by Step |
| Turn a Head: Five Useful Views | Five Relaxed Sitting Poses |
| Faces at Different Ages | Body Shapes and Character Silhouettes |

Each guide has a full-size WebP poster, simple English instructions, a small creative practice prompt, observational caveats, and a View large / Save WebP action. The gallery has no account, scores, or AI review.

**Original artwork**, created for G-Art Journey. Do not attribute these to the Instagram reference artist. Reference images informed the general educational layout, not asset ownership.

## Image storage

Only the eight WebP web versions belong in GitHub, under `public/infographics/human/`. Do not commit original multi-megabyte PNGs or a second compressed archive. Each poster is about 250–350 KiB and 1055–1122 px wide. The total remains under 3 MiB.

The exact approved files and SHA-256 prefixes are recorded in `src/data/human-assets.mjs`. Asset tests enforce integrity. CI must **not** publish if a poster is absent; do not weaken the checks or replace it with a broken URL.

## Editorial QA

The age and body-type illustrations are stylized examples and do not define universal proportions by age, gender or body type. Regional illustration traditions are broad and internally diverse, not fixed anatomical templates. For realistic drawing, encourage observation of actual subjects.

## Upload and release

Commit the eight named WebP files in one batch to `public/infographics/human/` on the dedicated branch. Then run GitHub Actions checks, inspect the built routes, merge and verify production Pages. Do not merge text-only staging without the eight posters.
