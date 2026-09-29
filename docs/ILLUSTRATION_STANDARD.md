# G-Art Journey — Illustration standard (approved)

## Look and feel
Original pencil and soft pastel illustration; warm paper, airy white space, gentle rose/peach/mint accents, legible English. A tutorial must look like artwork someone would want to draw, not a crude wireframe presented as a finished example. Do not copy slogans, watermarks, compositions or finished characters from reference artists. Use our own short G-Art notes.

## Basic tutorial poster
- One clear visual question per poster.
- A row of five connected stages with the **same subject** and consistent camera angle where the skill is cumulative.
- Optional rows of five expressions, angles, poses, age or silhouette examples. Label these as variations rather than progressive stages.
- Show enough actual drawing, not only numbered explanations. Keep proportions, hands, feet and perspective consistent.
- Make small text readable in a 100% full-size view. Use concise English; place detailed explanations in the web lesson, not crowded into the artwork.
- Finish with a simple original creative exercise, not a grade or score.

## Anatomy and representation
- Proportions in head lengths are useful approximations, not an anatomical law.
- Individual bodies, faces, ages and expressions vary. Avoid rigid claims that one facial feature defines an age, gender or region.
- Manga, manhwa, manhua and Western comics are varied media traditions, not immutable appearance templates.
- Check balance, joint direction, five-digit hands when relevant, uncut feet and legs, believable neck/hip/shoulder connections, and consistency across panels.
- Credit original illustrations to G-Art Journey. Museum artwork uses its actual maker/source, not a generic site credit.

## Technical delivery
- English-first; retain localization-friendly metadata for future use but do not maintain an incomplete VN/EN switch.
- Original art may be created at a higher resolution offsite, but the public GitHub repository stores only a clear WebP web version (usually 1000–1600 px on its longer useful axis).
- Check lettering at full size and on mobile. Do not optimize away legibility.
- A poster is linked from its own detail page with View large and Save image actions. Lazy-load card previews; keep hero poster full-height (no object-fit: cover crop).
- Keep GitHub as the single ongoing storage and hosting platform, and watch the existing advisory asset budget.
- All eight Human Drawing Batch 01 image checksums are pinned in src/data/human-assets.mjs. Never publish with missing or wrong assets.

## Content distinction gate (added after Batch 01 review)

Before producing a new poster, record its dominant learning result in `assets/guides/skill-intents.json`. The five stage-focus tags are for **what the viewer learns**, not merely the five pieces of the drawing. Run `npm run audit:guides` before generating artwork. CI rejects missing, duplicated or almost identical skill sequences.

A new card needs a distinguishable outcome and a visual example that proves it. A change of name, medium, region, gender or character alone does not create another basic lesson. Shared first steps may be prerequisites, but most of the visual stages must teach something new. If the concept overlaps, extend the existing guide with a variation, embed a related example, or cross-link it rather than create another competing card.

The approved `figure-proportions` and `standing-figure` posters remain unchanged. The first is a head-unit and body-landmark reference; the second is about gesture, supporting leg and standing balance. Their acknowledged scaffolding overlap is documented as an owner-approved historical exception, not a template for future duplication. 

In Batch 02, manga face focuses on feature/hair/line design choices rather than re-teaching basic face construction; manga full figure compares stylized proportions and costume silhouettes rather than redoing the general standing-pose tutorial. Regional terms describe varied storytelling/art contexts and are not fixed face or body templates.
