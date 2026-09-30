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
- new infographics use the purple **G-Art Journey** logo/lockup in the **upper-left corner by default**
- reuse one canonical repository logo/lockup; do **not** let AI redraw or reinterpret the logo for each poster
- move the logo only when the lesson layout gives a clear reason
- do **not** retrofit already-approved historical posters only to add or reposition the logo
- original teaching artwork and original wording
- no copied quotes or copied instructional diagrams

The layout may vary when the teaching objective benefits from it. Consistency means shared identity and quality, **not forcing every poster into the same composition**.

### Phase 2 visual-quality baseline
The approved **Draw Hair as Masses, Then Strands** poster is the current minimum visual-quality benchmark for Phase 2 Core Drawing Skills until a later approved poster raises the bar.

New or refreshed Phase 2 posters should have:
- convincing hand-drawn / graphite examples rather than sparse schematic placeholders
- enough practical examples or studies to make the lesson useful at a glance
- clear editorial hierarchy and mobile-readable labels
- G-Art identity without overwhelming the teaching content
- panel-first QA for dense or anatomy-heavy infographics

Match the **quality level**, not necessarily Hair's exact layout.

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

For anatomy-heavy lessons, each important study is a separate QA unit before compositing. One incorrect panel is enough to hold the whole poster back.

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
- PR #23: merged — initial Phase 2A **Draw Hands from Simple Forms** guide release. Its v1 artwork was later superseded by the approved Hands v2 release in PR #29.
- Phase 2A posters release individually after their own QA gate.
- PR #24: merged — initial **Draw an Eye from Structure** release. Its v1 artwork was later superseded by the approved Eye v2 release in PR #31.
- PR #25: merged — durable handoff finalized after the Eye release; stream-timeout recovery rule added.
- PR #26: merged — **Draw Hair as Masses, Then Strands** is live. PR CI #84 passed and main Pages deployment #85 passed. The release uses a five-step construction, four key tips, ten hairstyle references, English-only copy and the purple G-Art Journey logo.
- PR #29: merged — **Hands v2** is live at the existing `hands-simple-forms` guide. The owner-approved five-step / four-key-point / ten-pose poster was preserved, only its branding region was normalized to the canonical lockup, the raster source was integrity-pinned, PR CI passed, and main Pages deployment workflow #107 passed at merge commit `9f372e968bcd0ac9616318cff2d09fef8f4db460`.
- PR #31: merged — **Eye v2** is live at the existing `eye-structure` guide. The owner-approved poster is pinned as a 1024×1536 raster source and published at 900×1350 without cropping; PR CI passed and main Pages workflow #119 completed successfully at merge commit `6c99542af5d7114c962f9b83fdc294d888db9934`.
- PR #36: merged — **Draw Fabric from Tension & Gravity** is released as the fourth Core Drawing Skills 2A poster. The owner-approved 1024×1536 source is pinned, the AI-rendered logo area is replaced deterministically with the canonical G-Art Journey lockup, the guide/skill-intent record are wired, PR CI passed, and main Pages workflow #142 passed at merge commit `6552900f5ee34a3848868aa183a485c942b53a19`.
- PR #38: closed without merge — **Five Values & a Lit Sphere** was started prematurely. Its sphere artwork is not Fabric and is not approved for production. Resume Fabric focused cards before Phase 2B.
- PR #39: merged — **Fabric five-image guide set** is live. The guide now shows four focused cards (One support point, Two tension points, Compression at a bend, Wrap and overlap) plus the approved Fabric overview as image 5. Canonical branding is applied to all public assets. Main Pages workflow #176 passed at merge commit `0484d6d7db2582c87ef446f64ba3ba80fcd1aa68`.
- PR #42: merged — **Explore Art completion**. The existing 4 artist pages and 5 movement/style pages now use a two-part structure (About / Why it matters + Representative works), with sourced Public Domain/CC0/open-license artwork galleries. Main Pages workflow #182 passed at merge commit `f7a19453c1fa54218a85dbaab3776feb89dd6911`. Final browser visual QA is pending owner confirmation.
- PR #44: merged — **Materials & Tools detail pages** for all 9 existing media. Each page now covers medium overview, starter tools, beginner workflow, examples and G-Art learning links where available. Main Pages workflow #186 passed at merge commit `155cf3556be8011047b502f13e5342c914e7abbb`. Browser visual QA is pending owner confirmation.
- PR #33: merged — core poster crop-safe generation + canonical branding remediation. Hands public output now preserves its full 2:3 approved source at 900×1350; Eye adds a deterministic canonical upper-left brand band; implicit cover cropping was removed. Main Pages workflow #123 passed at merge commit `4bccdf87c95b384b3e872bda0ebcbee71d550d58`.
- PR #34: merged — Hair follow-up branding hotfix. Hair now uses a separate canonical upper-left brand band at 900×1300 and masks only the tiny legacy mark area so the title artwork is not covered. Main Pages workflow #125 passed at merge commit `cfa7ab8b2d8fbf80e3f8effc7a000df0fbbb4023`.
- **Core poster branding remediation closed:** owner confirmed on the live Drawing Guides page that Hands, Eye and Hair all show the G-Art Journey logo correctly. Hands is no longer cropped; Eye/Hair branding bands render correctly. Fabric may resume.

## 11. Current production task

### Phase 2 visual baseline reset — current priority

**Phase 2A is complete:** Hands v2, Eye v2, Hair and the five-image Fabric set are live. Lesson production remains temporarily paused. **Explore Art is complete and has passed browser QA on desktop and iPhone.**

**1. Draw Hands from Simple Forms — V2 COMPLETED / LIVE**

Released in PR #29:
- slug remains `hands-simple-forms`
- lesson objective, guide data, URL and five-step hand-construction logic are unchanged
- approved poster contains five construction steps, four key-point studies and ten practical hand-pose references
- graphite-first artwork with light G-Art pastel accents and the canonical purple lockup
- approved 1024×1536 raster source is integrity-pinned in ten base64 chunks and generates the 900×1200 public WebP
- owner-approved known imperfection: the **Finger structure** study says **3 segments** while the visual subdivision can read as four visible sections; do not regenerate the full poster solely for this
- PR CI passed and main Pages deployment workflow #107 passed

Exact academic/release record: `docs/HANDS_FROM_SIMPLE_FORMS_AUTHORING.md`

**2. Draw an Eye from Structure — V2 COMPLETED / LIVE**

Released in PR #31:
- slug remains `eye-structure`
- lesson objective, guide data, URL and five-step eye-construction logic remain unchanged
- owner-approved poster includes five construction stages, four key structural studies, ten eye-view examples and four practice tips
- approved source is pinned at 1024×1536; public WebP is 900×1350 so the full 2:3 composition is preserved without cropping
- superseded Eye SVG source was removed
- owner-approved presentation exceptions are recorded in `docs/EYE_STRUCTURE_AUTHORING.md`
- PR CI passed and main Pages deployment workflow #119 passed

Exact academic/release record: `docs/EYE_STRUCTURE_AUTHORING.md`

**3. Draw Hair as Masses, Then Strands — COMPLETED / CURRENT VISUAL BASELINE**

Approved implementation from PR #26:
- slug: `hair-masses`
- five-step construction: Head → Big shape → Flow → Lock groups → Few strands
- four short key tips and a corrected hair-thickness study
- ten hairstyle examples for practical reference
- warm paper + graphite/pencil artwork + light pastel accents
- purple G-Art Journey logo
- English-only wording using simple common language

Exact authoring record: `docs/HAIR_MASSES_AUTHORING.md`

**COMPLETED: Draw Fabric from Tension & Gravity — five-image set live**

The Fabric overview poster was published through PR #36 and the focused four-card set was completed/published through PR #39. The live guide now contains all five approved images.

Phase 2B remains intentionally paused until the owner chooses to resume it.

Planned Fabric teaching order remains:
- support / tension points
- gravity and pull direction
- stretch versus compression
- large folds before small wrinkles
- thickness, wrap and overlap

Production rule: use panel-first QA. Create and inspect high-risk fold examples separately, repair/reject failures, then composite the final infographic.

### Explore Art — complete

Owner-approved scope:
- keep the existing **4 artist pages**: Leonardo da Vinci, Claude Monet, Vincent van Gogh, Fan Kuan
- keep the existing **5 style/movement pages**: Renaissance, Impressionism, Post-Impressionism, Cubism, Chinese Ink & Wash
- complete quickly rather than expanding the catalog
- each artist page has two main sections: **About / why the artist matters** and **Representative works**
- each movement page has the same two-part structure
- use approximately **4–6 representative works** where reliable/open material is available
- each artwork card includes title, artist, date, holding institution when useful, one short observation, source and rights status
- attribution alone is **not** considered copyright permission; use Public Domain / CC0 / clearly open-license sources
- Fan Kuan is a documented exception: only a small number of securely associated works are available, so do not pad his page with doubtful attributions just to reach a count
- no new lesson production until Explore Art is complete

Learner-art status:
- the 18-piece learner artwork audit is **paused**
- no learner images are in the repository/public site
- resume only after the learner confirms original vs fan-art/reference, image-background rights and approximate chronology

### Style authenticity rule

For **Explore Art → Styles**, use only real artworks that genuinely belong to the movement/style being discussed.
- do not use original G-Art showcase illustrations as style examples or style-card covers
- every style cover and representative work must have a real artist/work source
- continue using Public Domain / CC0 / clearly open-license image sources
- G-Art illustrations belong in teaching/material pages, not as historical style exemplars

### Materials & Tools completion — complete

Owner browser QA confirmed the new Artists + Styles content is clear on desktop and iPhone.

Complete the existing 9 material cards with dedicated detail pages:
- Graphite & Pencil
- Colored Pencil
- Watercolor
- Oil Painting
- Acrylic Painting
- Crayon & Pastel
- Ink & Wash
- Vietnamese Lacquer
- Digital Painting

Each material page should explain:
1. what the medium is / what makes it distinctive
2. basic tools and paint/material types
3. a simple beginner workflow
4. representative examples — public-domain/open-license famous works where appropriate, otherwise original G-Art illustrations
5. a link to an existing G-Art learning route when a corresponding tutorial exists

Keep this section concise and practical. Do not expand the material catalog during this pass.

### Explore Art image-source policy

Locked owner decision:

**Artists**
- use real artworks only
- do not use AI-generated substitutes as representative artist works
- before adding a new artist, confirm that enough usable/open artwork images can be sourced

**Styles / movements**
- use real artworks only
- do not use G-Art illustrations or AI-generated simulations as representative historical style examples
- before adding a new style, confirm that enough usable/open artwork images can be sourced

**Materials / media**
- this section is pedagogical rather than art-historical: its job is to show how a medium affects color, surface, marks and visual character
- target **at least 3 useful images per medium**: one introductory image plus two additional examples
- prefer real/open-license artwork or photography when it is visually strong and appropriate
- original G-Art illustration is acceptable where it genuinely demonstrates the medium
- AI-generated medium studies may be used **sparingly only when suitable real/open examples are insufficient**
- any AI image must be explicitly labeled **AI-generated medium study** / **not a historical artwork**
- do not add AI merely to increase variety when three suitable real/original examples already exist

General priority:
**real usable artwork first → original G-Art illustration when appropriate → limited clearly labeled AI only as a gap-filler for Materials.**

## 12. Handoff update protocol

Whenever a future decision changes the project:
- update the relevant specialist document if needed
- also update this master handoff if the change affects the roadmap, visual rules, QA, release process, completed status or next task
- keep the “Current production task” section accurate
- never rely on chat memory alone for a project-critical rule
- if a chat/stream times out during GitHub work, **verify repository/PR/CI state first and continue from the last confirmed step; do not repeat the previous command blindly**
