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

## Human/character image QA — mandatory before publication

For any infographic that contains people or human-like characters, explicitly inspect the final image at full size before publishing:

- **correct anatomy / anatomically correct**: joints, limbs and visible body structure must read plausibly for the intended stylization.
- **five fingers on each visible hand**: exactly five digits including one correctly placed thumb; reject extra, fused or missing fingers unless intentionally hidden by the pose.
- **detailed hands**: hands should be drawn clearly enough to count fingers and understand the pose; tiny ambiguous hands should not carry a teaching point.
- **balanced face**: eyes, nose, mouth and jaw must align coherently with the head angle; avoid accidental asymmetry or duplicated features.
- **style-appropriate eyes**: clean, balanced and intentional. Realistic lessons need believable eye structure; stylized lessons may exaggerate while remaining internally consistent.
- **natural facial expression**: brows, eyelids, mouth and cheeks should work together rather than contradict one another.
- **detailed features**: teaching examples should have enough detail to demonstrate the skill without visual noise.
- **proportionate body anatomy**: proportions may be stylized, but the chosen ratio must be deliberate and consistent within the lesson.
- **clear framing**: use a deliberate full-length or medium shot when body/pose is being taught; do not crop hands, feet or key landmarks needed by the lesson.
- **cumulative-step continuity**: when a poster is step-by-step, keep the same subject, camera angle and pose unless the lesson explicitly teaches a viewpoint change.

AI-generated art gets a dedicated final anatomy pass. Hands are checked one by one, including small secondary examples. A visually attractive image does not pass QA if anatomy or step continuity is wrong.

### Pencil/graphite exception to the color identity

G-Art Journey keeps its typography, spacing, warm paper and gentle editorial character, but graphite lessons should not color the drawing itself. Use monochrome graphite/value studies, hatching, edges and paper texture; reserve pastel accents for headings, callouts or small navigation marks only. The medium should remain visibly pencil-first.
