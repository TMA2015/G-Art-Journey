# G-Art Journey — Project Master Handoff

_Last updated: 2026-09-30_

This file is the durable handoff for future ChatGPT sessions. Treat it as the project source of truth for **current status, master plan, design rules, QA gates and the next production step**. When a rule or project decision changes, update this file in the same PR as the change whenever practical.

## 1. Project identity

- Repository: `TMA2015/G-Art-Journey`
- Public site: `https://tma2015.github.io/G-Art-Journey/`
- Platform direction: GitHub-first, free, simple, maintainable.
- Product intent: a father–daughter art journey and practical beginner reference, not a graded course.
- No login, AI judge, public critique, commerce or subscription is required.
- Public language: English-first, using short common words; keep the structure ready for optional Vietnamese later.

## 2. Durable visual identity

G-Art Journey should feel handmade, calm and easy to study:

- warm paper / sketchbook feeling
- generous spacing and readable hierarchy
- clean pencil/editorial linework
- light pastel accents (pink/peach/mint/purple) for identity
- new infographics should carry the **G-Art Journey** logo when practical; use the website's purple brand as the main logo/identity color
- do **not** retrofit already-approved historical posters only to add the logo
- original teaching artwork and original wording
- no copied quotes or copied instructional diagrams

The layout may vary when the teaching objective benefits from it. Consistency means shared identity and quality, **not forcing every poster into the same composition**.

## 3. Anti-duplication rule

Before producing a new poster, compare it with already-published lessons.

A new lesson must have a distinct learning objective and a visibly different teaching result. Similar subject matter is allowed only when the new poster teaches a different transferable skill.

Do not:
- re-teach the same construction with cosmetic changes
- reuse essentially the same face/clothes/character across separate style families
- create a “new” poster that differs only by palette, accessory or label

Where the lesson allows, vary character identity, face, hair, clothing, age and/or pose.

Historical exception: the already-approved `figure-proportions` and `standing-figure` posters remain unchanged even though they share some scaffolding.

## 4. Mandatory human / character image QA

Every image containing a human or human-like character must be inspected at full size before publication.

1. **Anatomy** — joints, limbs and visible structure read plausibly for the intended stylization.
2. **Hands** — every fully visible hand has exactly five digits, including one correctly placed thumb; reject extra, fused or missing fingers unless intentionally hidden.
3. **Hand readability** — hands are detailed enough to count fingers and understand the pose; tiny ambiguous hands must not carry a teaching point.
4. **Face balance** — eyes, nose, mouth and jaw align coherently with the head angle.
5. **Eyes** — clean, balanced and appropriate to the intended style; realistic eye lessons keep believable structure.
6. **Expression** — brows, eyelids, mouth and cheeks work together naturally.
7. **Feature clarity** — enough detail to teach the point without clutter.
8. **Body proportion** — ratios may be stylized but must be deliberate and internally consistent.
9. **Framing** — do not crop hands, feet or landmarks required by the lesson.
10. **Step continuity** — cumulative step-by-step art keeps the same subject, camera angle and pose unless viewpoint change is explicitly the lesson.

AI-generated artwork always receives a dedicated anatomy pass. Visual attractiveness never overrides construction errors.

For complex infographics with many detailed drawings, use a **panel-first QA workflow**: define the layout and panel purpose first, create/inspect high-risk panels individually, reject or repair bad panels, then composite the final poster and run one whole-page QA pass. This is preferred over relying on one large AI render to solve every small detailed drawing at once.

## 5. Medium-specific art rules

### Character / color lessons
Pastel color may appear inside the artwork.

### Graphite / pencil lessons
The drawing itself remains monochrome graphite. G-Art pastel appears only in headings, step numbers, arrows, small labels or framing accents.

### Digital lessons
Keep concepts software-neutral whenever possible. Teach layers, value, light and color principles rather than dependence on one paid app.

### Watercolor lessons
Preserve white paper, transparent washes and visible water behavior. Do not make watercolor instruction look like opaque digital painting.

## 6. Completed foundation

### Human Drawing — Batch 01
Approved foundation set:
- face basics
- facial expressions
- head angles
- faces by age
- figure proportions
- standing figure
- sitting poses
- body silhouettes / body types

### Character Styles — Batch 02
Twelve published guides: three each for
- Manga
- Manhwa / Webtoon
- Manhua
- Cartoon / Comics

Approved Manhua replacements from PR #18:
- **How to Draw Manhua Movement**
- **Elegant Manhua Details**

Do not restore earlier versions with hand-anatomy or step-continuity problems.

## 7. Phase 2 — Core Drawing Skills master plan

Phase 2 is modular. Each poster teaches one transferable skill and can stand on its own.

### 2A — Structure and forces
Production order:
1. **Draw Hands from Simple Forms**
   - palm block
   - thumb base
   - finger groups
   - joints
   - gesture
   - five-digit check
2. **Draw an Eye from Structure**
   - eyeball volume
   - lids wrapping around the sphere
   - iris / pupil placement
   - upper-lid shadow
   - view changes
3. **Draw Hair as Masses, Then Strands**
   - silhouette
   - flow direction
   - grouped locks
   - selected strand detail
4. **Draw Fabric from Tension & Gravity**
   - support / tension points
   - gravity and movement
   - compression
   - large folds before wrinkles
   - thickness and overlap

### 2B — Graphite foundations
5. **Five Values & a Lit Sphere**
6. **Graphite Edges & Mark Making**
7. **Pencil Portrait: Block-in to Light & Shadow**
8. **Pencil Landscape Depth**
9. **Simple Trees, Foliage & Texture**
10. **Water & Reflections in Pencil**

### 2C — Drawing-app essentials
11. **Layers for Beginners**
12. **Simple Skin Color**
13. **Light & Shadow on a Digital Character**
14. **Soft Color Harmony**

## 8. Academic direction

Use `docs/ACADEMIC_REFERENCE_MAP.md` as the authoring reference.

Public lessons stay friendly and concise. Academic terminology is for planning and QA, not for making the site read like a textbook.

Core principle: **structure, observation, value, light and forces come before decorative detail or stylization**.

## 9. Release gate for every new poster

A poster is publishable only after all of these pass:

1. academic/content check against the topic reference map
2. distinct-learning-objective / duplication check
3. image QA: anatomy, hands, face, eyes, proportions, perspective and continuity
4. rights/credit check
5. optimized WebP + dimensions + hash inventory
6. desktop, tablet and mobile layout check
7. repository tests and build
8. GitHub Pages deployment verification

Phase 2 modular rule: each poster may release independently after passing this gate; do not wait for the full phase batch.

A beautiful image that teaches the wrong construction, changes the subject mid-process or contains anatomy errors must be held back.

## 10. Current technical / project status

- PR #18: merged — approved Manhua replacements + mandatory human/anatomy QA + graphite color exception.
- PR #19: merged — Phase 2 Core Drawing Skills roadmap + academic reference map + 2A authoring packet.
- Character Styles stable set is live.
- PR #23: merged — first Phase 2A guide **Draw Hands from Simple Forms** is live; generated WebP comes from the pinned editable SVG source.
- Phase 2A posters release individually after their own QA gate.
- PR #24: merged — **Draw an Eye from Structure** is live with deterministic SVG source, generated WebP, guide data and eye-specific QA. Main deployment workflow #69 passed.
- PR #25: merged — durable handoff finalized after the Eye release; stream-timeout recovery rule added.
- PR #26: **Draw Hair as Masses, Then Strands** — owner-approved artwork uses a five-step construction, four key tips, ten hairstyle references, English-only copy and the purple G-Art Journey logo. Release implementation is being finalized.

## 11. Current production task

**COMPLETED: Draw Hands from Simple Forms**

Published guide:
- slug: `hands-simple-forms`
- published asset: `public/infographics/core/hands-simple-forms.webp` (generated from `assets/core/hands-simple-forms.svg` before dev/test/build)
- graphite-first poster with five-step construction and three supporting studies
- full-size hand/finger QA completed before release

Exact authoring record: `docs/HANDS_FROM_SIMPLE_FORMS_AUTHORING.md`

**COMPLETED: Draw an Eye from Structure**

Published implementation in this release:
- slug: `eye-structure`
- editable source: `assets/core/eye-structure.svg`
- generated asset: `public/infographics/core/eye-structure.webp`
- five cumulative stages preserve the same eye/viewpoint
- iris/pupil, lid-wrap and one-light-direction QA completed at full resolution

Exact authoring record: `docs/EYE_STRUCTURE_AUTHORING.md`

**COMPLETED / APPROVED: Draw Hair as Masses, Then Strands**

Approved implementation in PR #26:
- slug: `hair-masses`
- five-step construction: Head → Big shape → Flow → Lock groups → Few strands
- four short key tips and a corrected hair-thickness study
- ten hairstyle examples for practical reference
- warm paper + graphite/pencil artwork + light pastel accents
- purple **G-Art Journey** logo in the upper corner
- English-only wording using simple common language
- earlier deterministic SVG draft was rejected and removed
- approved raster source is pinned at `assets/core/hair-masses.webp` and generates the public 900×1200 WebP before dev/test/build

Exact authoring record: `docs/HAIR_MASSES_AUTHORING.md`

**NEXT: Draw Fabric from Tension & Gravity**

Primary teaching order:
- support / tension points
- gravity and movement
- compression
- large folds before small wrinkles
- thickness and overlap

Production note: apply the panel-first QA workflow for detailed fold examples instead of generating one dense poster in a single pass.

## 12. Handoff update protocol

Whenever a future decision changes the project:
- update the relevant specialist document if needed
- also update this master handoff if the change affects the roadmap, visual rules, QA, release process, completed status or next task
- keep the “Current production task” section accurate
- never rely on chat memory alone for a project-critical rule
- if a chat/stream times out during GitHub work, **verify repository/PR/CI state first and continue from the last confirmed step; do not repeat the previous command blindly**
