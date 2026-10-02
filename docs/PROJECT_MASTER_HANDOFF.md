# G-Art Journey — Project Master Handoff

_Last updated: 2026-10-02_

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
- PR #48: merged — **Materials visual completion pass**. Approved AI medium studies were added only where needed, Oil/Ink covers were upgraded to real artworks, every AI image is explicitly labeled, and tests enforce at least three distinct visuals per medium. Main Pages workflow #194 passed at merge commit `e5305ab86da526a03853fdbf7fe7c4995bd95957`.
- PR #50: merged — **Final Materials example replacement pass**. Remaining weak G-Art example cards in Graphite, Colored Pencil, Watercolor, Acrylic, Crayon & Pastel and Vietnamese Lacquer were replaced by owner-approved AI medium studies. Main Pages workflow #198 passed at merge commit `7ba413219e509dea08b0f82105f559601d8aeb27`.
- PR #33: merged — core poster crop-safe generation + canonical branding remediation. Hands public output now preserves its full 2:3 approved source at 900×1350; Eye adds a deterministic canonical upper-left brand band; implicit cover cropping was removed. Main Pages workflow #123 passed at merge commit `4bccdf87c95b384b3e872bda0ebcbee71d550d58`.
- PR #34: merged — Hair follow-up branding hotfix. Hair now uses a separate canonical upper-left brand band at 900×1300 and masks only the tiny legacy mark area so the title artwork is not covered. Main Pages workflow #125 passed at merge commit `cfa7ab8b2d8fbf80e3f8effc7a000df0fbbb4023`.
- **Core poster branding remediation closed:** owner confirmed on the live Drawing Guides page that Hands, Eye and Hair all show the G-Art Journey logo correctly. Hands is no longer cropped; Eye/Hair branding bands render correctly. Fabric may resume.

## 11. Current production task

SG-01 is live through PR #69 after the complete 98-test release gate and Pages deployment passed. Next: owner desktop/iPad visual QA of the three approved posters, Start Here path placement and Color Basics catalog filtering. Preserve the optional Feet/Palette roles, Digital 2×5, Watercolor six core steps and Human Drawing two topics/eight lessons. Pause new content production after this batch and reassess the Learning Paths.

## 12. Daughter Gallery V1 — active task

Owner decision on 2026-10-01:
- pause Reference Library work temporarily and return to the learner's own artwork
- keep the first gallery intentionally simple and motivating rather than evaluative
- final Gallery V1 archive contains **10 works numbered 01 → 10**
- all selected works were drawn in **Procreate on iPad during 2026**
- chronology is confirmed by filename: **01 oldest → 10 newest**
- V1 should provide a personal-feeling art page with slideshow, tags, gallery grid and newest/oldest ordering
- do **not** add scores, levels, progress charts or comparative judgments
- store dates/order + tags now so filtered timelines can emerge naturally later
- page should avoid unnecessary identifying information about the learner
- the owner explicitly approved these ten images for the first public gallery set on 2026-10-01; do not reopen the earlier provenance audit for this selected set unless a new concern appears
- do not invent chronology; add approximate date/order only from learner/owner information

Current staging implementation:
- branch: `feature/daughter-gallery-v1-20261001`
- page: `src/pages/my-art.astro`
- metadata: `src/data/daughter-art.mjs`
- plan: `docs/DAUGHTER_GALLERY_V1.md`
- the owner supplied the ten-image RAR; optimized AVIF web copies are connected under `public/artworks/daughter/01.avif` → `10.avif`
- PR #53 merged to `main` on 2026-10-01 as production commit `2d9aabc3914902adb8165028cbf56eef39e7d250`
- production Pages workflow **#211 PASS** (build + deploy)
- My Art V1 is now live at `/G-Art-Journey/my-art/`
- owner visual QA: **PASS** for the My Art V1 presentation; keep future changes additive and lightweight

Reference Library status:
- foundation remains preserved in Draft PR #52
- its image-production work is **paused**, not cancelled

### Home slideshow topic expansion

Owner decision and production release on 2026-10-01:
- keep the five original G-Art Showcase topics and their daily rotation
- add **Explore Art** as an explicit slideshow topic using representative material studies and historical works already present in Explore Art
- add **My Art · 2026** as an explicit slideshow topic using all ten learner drawings in confirmed order **01 → 10**
- historical and learner artwork use `contain` in the hero so portrait/square works are not cropped
- clicking the slideshow image opens the specific relevant Explore/My Art destination; the CTA stays at the topic-level destination
- selector groups are **G-Art Showcase** and **From G-Art Journey**
- PR #54 merged to `main` as production commit `027da7d994ef4e47609ee6855416846b58f63d42`
- production Pages workflow **#214 PASS** (build + deploy)
- owner visual QA on 2026-10-01: **PASS on desktop and iPad** for the new Explore Art / My Art slideshow topics
- deferred visual improvement: the five original G-Art Showcase images are functional but not yet visually strong enough; replacement is tracked in `docs/PROJECT_BACKLOG.md` and should wait for genuinely better imagery rather than a rushed swap


## 13. Deferred-work backlog

Durable deferred tasks live in `docs/PROJECT_BACKLOG.md`.

Current notable backlog:
- replace the five original G-Art Showcase hero image sets when sufficiently strong imagery exists
- if suitable future content does not naturally supply enough replacements, create a dedicated polished G-Art Showcase image library
- resume Reference Library image production when Learn to Draw becomes active again

## 14. Session checkpoint — 2026-10-01 midday

Current stable state before pause:
- production `main` checkpoint before this handoff-only update: `594c2f55125211f1353c743a18d0ca7f7304e709`
- Explore Art: complete for current scope
- My Art V1: live and owner-approved visually
- home slideshow expansion: live; Explore Art + My Art topics PASS on desktop and iPad
- original five G-Art Showcase image sets remain functional but visually weaker; replacement is deferred in `docs/PROJECT_BACKLOG.md`
- no production visual/content change is requested during this pause

Reference Library resumed on 2026-10-01:
- Draft PR #52 remains open on branch `feature/reference-library-foundation-20261001`
- **Poses / General is owner-approved and complete for the starter set**
- approved output structure: **3 portrait infographics × 2 sheets each = 6 pose sheets**
- approved sheets:
  1. relaxed standing / weight shift
  2. sitting on chair / floor
  3. leaning / resting
  4. crouching / kneeling
  5. turning / looking back
  6. front / side / back body views
- new Reference Library visual rule: **2 sheets per portrait infographic**
- target about **5 large reference figures per sheet**
- remove Key Points / Construction blocks from reference-library infographics; that teaching content belongs in Drawing Guides
- prioritize large, readable figures over dense poster layouts
- within one sheet, one consistent character is acceptable; outfit variations are allowed
- across different sheets, deliberately vary face, hairstyle and clothing so the library feels like a broad reference collection rather than one repeated character
- small hands/fingers are a major failure mode; hands must remain large/clear enough to inspect
- mandatory anatomy/hand QA applies to every figure
- **Motion / General is owner-approved and complete for the starter set**
- approved Motion sheets:
  1. Walking / Strolling
  2. Running
  3. Jumping / Landing
  4. Reaching / Stretching
  5. Turning / Spinning
  6. Simple Action / Dynamic Pose
- owner noted minor residual defects in the approved Motion batch, especially extra fingers
- approval of the current batch **does not relax** the anatomy/hand standard; future batches must still pass exact finger-count and hand-shape QA
- where hands are not central to the reference goal, compose the sheet so hands are either clearly visible at inspectable size or naturally outside the crop; do not hide malformed tiny hands in dense layouts
- next production collection: **Hair / General**, followed by **Clothing**

### Reference Library — Clothing / General checkpoint

Owner approval on 2026-10-01:
- **Clothing / General complete**
- 4 portrait infographics
- each infographic = 2 full-body sheets × 5 figures
- total **40 outfit references**
- approved groups:
  1. Everyday Casual + Smart Casual
  2. School / Campus + Office / Formal
  3. Spring / Summer + Autumn / Winter
  4. Dresses / Skirts + Layered / Statement Outfits

Next extension:
- add **2 Vietnamese Traditional Clothing infographics**
- each infographic is one unified theme, not split into two sheets
- layout: **2 rows × 5 full-body figures = 10 outfits per infographic**
- total: **20 Vietnamese clothing references**
- include major Vietnamese traditional garments (e.g. áo dài, áo bà ba, áo tứ thân) and selected ethnic-minority traditional clothing
- keep respectful, readable, non-costume-like presentation; avoid mixing motifs between ethnic groups
- anatomy/hand QA still applies to every figure

### Reference Library approved-asset checkpoint — 18 infographics

Owner approvals confirmed on 2026-10-01:
- **Poses / General:** 3 infographics
- **Motion / General:** 6 infographics
- **Hair / General:** 2 infographics
- **Clothing / General:** 4 infographics
- **Vietnamese Clothing:** 3 infographics
  - Vietnamese Traditional Clothing (1)
  - Vietnamese Traditional Clothing (2)
  - Vietnamese Modernized Traditional Fashion
- total approved assets for first website upload: **18 infographics**

Layout rules retained:
- normal Reference Library default remains **portrait**
- full-body collections normally use **2 sheets × 5 figures per portrait infographic**
- partial/head-focused collections may use **3 sheets × 5 figures per portrait infographic**
- the Vietnamese Clothing set is an **explicit horizontal exception**: 2 rows × 5 outfits, approved for these three assets only; do not generalize this layout to the whole library
- no Key Points / Construction blocks inside reference-library infographics
- prioritize large readable references over dense poster layouts
- exact hand/finger/anatomy QA remains mandatory; approval of earlier minor residual defects does not weaken the rule

Production release completed:
- PR #52 merged to `main` on 2026-10-01
- production commit: `70aaecf49e48d3c8053f641a5d1b7dfb5b8205de`
- Pages workflow **#225 PASS**: project check, distinctness review, build, both-language verification, image-budget audit and deploy all succeeded
- **18 approved Reference Library infographics are now live**
- page: `/G-Art-Journey/reference-library/`
- Drawing Guides now links directly to Reference Library
- portrait images use uncropped contain display; the three approved Vietnamese clothing landscape infographics use wider landscape cards on desktop and responsive single-column cards on mobile
- owner visual QA on desktop/iPad: **PASS** for filters, portrait/landscape presentation and View large links

### Homepage Discover + Little Gallery refresh

Owner decision and release on 2026-10-01:
- **01 / Discover** now links only into Explore Art
- three cards:
  1. Artists → `explore/#artists`
  2. Styles & Movements → `explore/#movements`
  3. Materials → `explore/#materials`
- performance rule: **smoothness takes priority over mini slideshows**
- current implementation uses one representative lazy-loaded Explore artwork per card; do not restore old G-Art placeholder/guide imagery to these three cards
- optional mini slideshows may be reconsidered later only if they can be added without noticeable page-load/scroll cost
- **02 / Try Something remains unchanged**
- **Our Little Gallery** now shows two real 2026 Procreate drawings from My Art (Drawing 07 and Drawing 09) instead of simulated G-Art illustrations
- PR #55 merged to `main`
- production commit: `4005109efe6becba72a169b38f147d3428558dff`
- Pages workflow **#229 PASS**: build, both-language verification, image-budget audit and deploy succeeded
- remaining gate: owner visual QA of the refreshed homepage on desktop/iPad

### Homepage gallery real-art layout fix

Owner reported a display defect after replacing simulated gallery images with real learner artwork:
- root cause: the old homepage gallery CSS still forced a fixed portrait `aspect-ratio` designed for the simulated images
- this created large empty bands around real artworks with different proportions
- fix: preserve each real artwork's natural aspect ratio, keep `object-fit: contain`, cap desktop/tablet height for balance, and retain the light polaroid rotation
- PR #56 merged to `main`
- production commit: `c4ba13dc89ac1bab34687f645156dc0957547c62`
- Pages workflow **#232 PASS** including build and deploy
- remaining gate: owner visual confirmation on desktop/iPad

### Homepage hero simplified to Explore Art + My Art only

Owner decision and release on 2026-10-01:
- remove the legacy **G-Art Showcase** group from the homepage hero slideshow
- remove the old Daily/Style selector mode
- hero selector now has exactly **2 choices**:
  1. Explore Art
  2. My Art
- default hero collection: **Explore Art**
- preserve previous / next / pause controls and 7-second autoplay
- preserve session choice when it is still one of the two valid collections
- historical G-Art Showcase assets remain in the repository for compatibility/other uses but are not part of the homepage hero
- PR #57 merged to `main`
- production commit: `21f76b933177537223f1444e6daef98f6388c169`
- Pages workflow **#236 PASS** including build and deploy

### Evening checkpoint — Pencil Art + Landscape planning

Owner confirmed the current site state is stable enough to move on from homepage/ref-library work.
Next content target:
- replace thin/placeholder content in the **Pencil Art** and **Landscape** tabs with real, original learning content
- maintain clear category roles so Pencil teaches graphite technique while Landscape teaches scene construction, depth, perspective and composition
- avoid duplicating Figure Drawing, Character Art or existing light/value notes
- finalize the lesson map before generating visual assets

### Infographic layout rule refresh — 2026-10-01

Owner reconfirmed the global image-production rules:
- every new infographic carries the canonical G-Art Journey logo at the **upper-left**
- **portrait remains the default orientation**
- landscape is allowed only when content benefits from width
- current approved orientation exceptions include **Pencil Art** and **Landscape drawing**
- full-body infographic: normally 2 sheets × 5 figures; **maximum 10 full-body figures total**
- smaller/partial studies: up to 3 sheets × 5; **maximum 15 studies total**
- never shrink many detailed figures merely to fit more examples; split into more infographics instead
- all mandatory anatomy/hand rules remain active, including rejection of extra limbs, extra/missing/fused fingers, malformed joints/feet, incoherent clothing/props, face drift and step-continuity failures
- dense human sheets should use panel-first QA rather than one large uncontrolled generation

Pencil-specific decision:
- the current Pencil Art set will use **landscape** layout
- graphite artwork stays monochrome; pastel is limited to headings/callouts
- the approved Pencil Art overview is a category roadmap, not the Lesson 1 detail poster

### Pencil Art production recovery checkpoint — 2026-10-01

Current Pencil Art state:
- approved curriculum: 5 lessons
  1. Pencil Control — Lines, Pressure & Marks
  2. Shade Simple Forms
  3. Draw Everyday Objects
  4. Create Texture with Graphite
  5. Shade a Pencil Portrait
- Pencil Art orientation for this set: **landscape**
- one five-lesson overview/roadmap image was owner-approved visually in chat
- that approved overview binary has **not yet been committed to GitHub**
- Lesson 1 academic content is complete on branch `feature/pencil-art-foundation-20261001`
- Lesson 1 detail poster is **not yet successfully generated or approved**
- repeated generation failure: later attempts reproduced the five-lesson overview instead of isolating Lesson 1
- recovery rule: stop after a wrong-scope generation, classify the asset type explicitly, and regenerate only from the single-lesson brief
- incomplete Lessons 2–4 runtime placeholders were removed; only Lesson 1 remains staged in runtime data
- no empty `steps: []` entries remain
- there is **no PR** for the Pencil branch yet; production is unaffected
- branch is currently behind `main` and must be resynced before any PR/release

### Landscape production reset — 2026-10-01

Owner-confirmed Landscape map:
1. Build Depth with Three Layers
2. Trees, Rocks & Clouds as Big Shapes
3. Water & Reflections
4. Draw a Street That Feels Deep
5. Compose a Complete Landscape

Current status:
- Landscape image #1 / Lesson 1: **owner-approved**
- Lessons 2–5: **not yet approved**
- several subsequent generations were rejected because they combined unrelated lessons/categories and became too dense
- new rule: each Landscape lesson is one independent landscape-format infographic with **maximum 4 main teaching zones + compact footer**
- Landscape series keeps the owner-approved **stylized G-Art logo** from Lesson 1; do not replace it with the canonical website logo on upload
- match Lesson 1's graphite/warm-paper/pastel identity, but do not duplicate its exact composition
- next generation target: **Lesson 2 only — Trees, Rocks & Clouds as Big Shapes**

### Pencil + Landscape website release checkpoint — 2026-10-01

Owner visual approvals are complete:
- **Pencil Art: 6 infographics APPROVED**
- **Landscape Drawing: 5 infographics APPROVED**
- total new approved lesson posters: **11**

Pencil set:
1. Pencil Control — Lines, Pressure & Marks
2. Shade Simple Forms
3. Draw Everyday Objects
4. Texture with Graphite
5. A Pencil Portrait
6. Facial Features in Pencil (portrait add-on)

Landscape set:
1. Build Depth with Three Layers
2. Trees, Rocks & Clouds as Big Shapes
3. Water & Reflections
4. Draw a Street That Feels Deep
5. Compose a Complete Landscape

Release rules:
- preserve both series' **embedded stylized logos**
- do not replace or overlay them with the canonical website logo
- use landscape/wide poster cards with contain behavior; never crop these approved artworks
- old starter placeholders `draw-a-pencil-portrait` and `draw-a-pencil-landscape` are retired
- retain and upgrade the academically useful `shade-a-pencil-portrait` and `street-with-depth` routes
- `landscape-depth` retired note now redirects to `landscape-depth-layers`

Production release:
- PR #58 merged to `main`
- production commit: `e9463e6898a5b7a9b36500aabe4ece3e332192ff`
- Pages workflow **#248 PASS**
- build, guide-distinctness audit, both-language verification, image-budget audit and Pages deploy all succeeded
- **11 approved WebP lesson posters are live**
- Pencil Art: 6/6 live
- Landscape Drawing: 5/5 live
- embedded stylized series logos were preserved unchanged; no canonical website logo was overlaid
- wide catalog cards use contain behavior and the lesson pages preserve natural poster aspect ratio
- remaining gate: owner visual QA on desktop/iPad

### Character Face Design Lab — spec locked 2026-10-01

Next Drawing Guides target:
- existing route: `four-character-face-approaches`
- title remains **Try Four Ways to Draw a Character Face**
- new learning goal: **One Base Head · Four Design Choices**

Scope decision:
- do **not** repeat Manga / Webtoon / Manhua / Cartoon style-family lessons
- use one shared head construction and compare four controlled design approaches:
  1. Soft & Gentle
  2. Bright & Expressive
  3. Cool & Angular
  4. Playful & Graphic
- primary learning skill: controlled character-face design variation
- differences come from **face shape / feature language / hair silhouette / line weight**
- keep pose, camera and broad expression nearly constant
- landscape infographic
- target 5 large faces total: 1 base + 4 variations
- no dense mini-gallery
- canonical G-Art Journey brand mark at upper-left
- owner visual QA required before replacing the current placeholder artwork

Detailed spec: `docs/CHARACTER_FACE_DESIGN_LAB_AUTHORING.md`

### Character Face Design Lab — artwork approved 2026-10-01

Owner visual QA: **PASS**.

Approved asset direction:
- **Try Four Ways to Draw a Character Face**
- subtitle: **One Base Head · Four Design Choices**
- 1 shared base head + 4 controlled character variations
- design levers: face shape / features / hair silhouette / line weight
- no style-family duplication

Next content priority after this approval:
- **Watercolor**, currently the thinnest Drawing Guides category
- first real target: replace the placeholder **Watercolor First Flower** with a proper illustrated lesson

### Character Face + Watercolor website release checkpoint — 2026-10-02

Owner visual approvals:
- **Character Face Design Lab: 1 infographic APPROVED**
- **Watercolor: 6 infographics APPROVED**
- total new poster assets in this release: **7**

Character Face:
- existing route `four-character-face-approaches` is upgraded in place
- approved artwork: 1 shared base head + 4 controlled design variations
- it no longer teaches Manga / Webtoon / Manhua / Western-comics categories
- poster is landscape/wide and uses contain behavior

Watercolor:
1. Watercolor First Flower
2. Wet-on-Wet & Wet-on-Dry
3. Simple Leaves & Botanical Shapes
4. Soft Sky / Cloud Washes — **main Lesson 4**
5. Sky Wash Practice & Variations — **additional approved companion**
6. Small Watercolor Landscape

Watercolor logo rule:
- keep the watercolor-styled G-Art Journey logo already embedded in every approved poster
- **do not replace or overlay it with the canonical website logo**

Production release:
- PR #59 merged to `main`
- production commit: `e78e220bbcd044e4542657ce5c73af184667acfa`
- Pages workflow **#257 PASS**
- project check, guide-distinctness audit, build, both-language verification, image-budget audit and Pages deploy all succeeded
- **Character Face Design Lab: LIVE**
- **Watercolor: 6/6 approved posters LIVE**
- both approved Soft Sky posters remain published with separate roles
- embedded Watercolor series logos were preserved unchanged; no canonical website-logo overlay
- remaining gate: owner visual QA on desktop/iPad

Detailed Watercolor status:
- `docs/WATERCOLOR_ART_AUTHORING.md`

### Digital Art handoff — 2026-10-02

Artwork status: **2 approved sets / exactly 10 official infographics**.

Set A — **Painting with Separate Layers**:
1. Painting with Separate Layers
2. Base Color Layers
3. Shadow Layer
4. Light & Details
5. Check Your Layers

Set B — **Color a Face with Simple Layers**:
1. Clean Sketch — **new remake is official**
2. Flat Skin Color — **new remake is official**
3. Add One Clear Shadow
4. Add Details
5. Check Your Layers

Critical replacement rule:
- the earlier Set B Lesson 1 and Lesson 2 approvals were later revoked
- those old two images are **SUPERSEDED / REJECTED**
- do not publish them
- official approved total remains **10**, not 12

Design rule:
- prefer the Digital Art logo/style from Set A Lessons 1–3 for future images
- Set A Lesson 4 has a different logo but is **owner-approved as a one-off exception**
- preserve every approved poster's embedded logo when uploading; do not overlay the canonical website logo
- keep backgrounds bright/clean and teaching stages easy to inspect
- same artwork within one progressive lesson; more variety between lessons

Website state:
- these ten newly approved Digital Art posters are **LIVE via PR #60**
- integration branch: `feature/digital-art-10-posters-20261002`
- exact approved asset/checksum map: `assets/batches/digital-art-10.json`
- route mapping is now locked:
  - `digital-color-layers` → **Painting with Separate Layers** → Set A five-poster gallery
  - `color-a-face-in-layers` → **Color a Face with Simple Layers** → Set B five-poster gallery
- both routes are upgraded **in place**; do not create duplicate Digital Art routes
- all 10 approved originals have been recovered and converted to WebP without resize/crop; embedded logos and owner-approved compositions are preserved
- Digital skill intents are separated: Set A = layer-role organization; Set B = applied face-color layer progression
- English-first route copy has been aligned with both approved five-stage sequences
- draft PR **#60** is open on the integration branch
- staging CI/build checkpoint: **PASS**
- **do not switch runtime image references until all 10 WebP binaries are committed**, so production/build never points at missing files
- next gate: binary upload → route/gallery patch → tests/audit/build → controlled PR/Pages release → owner desktop/iPad QA

Detailed durable spec:
- `docs/DIGITAL_ART_AUTHORING.md`

## 15. Handoff update protocol

Whenever a future decision changes the project:
- update the relevant specialist document if needed
- also update this master handoff if the change affects the roadmap, visual rules, QA, release process, completed status or next task
- keep the “Current production task” section accurate
- never rely on chat memory alone for a project-critical rule
- if a chat/stream times out during GitHub work, **verify repository/PR/CI state first and continue from the last confirmed step; do not repeat the previous command blindly**

### Digital Art integration release gate — 2026-10-02

- Integration checkpoint: `c0a9498b8ad3bd12aa5fedf069f98b252993bc47` on `feature/digital-art-10-posters-20261002`, existing PR #60.
- Binary checkpoint: `b756fac14c8cafba03622cc93e0b2497b285f128`.
- Exactly ten supplied WebP files pass SHA-256, byte-size and dimension checks; no artwork was edited, cropped, resized or rebranded.
- Both existing Digital routes now use five-poster galleries in the locked order; catalog covers use the first approved poster.
- Official Clean Sketch and Flat Skin Color remake hashes are pinned in release tests.
- Local release gate PASS: 83/83 tests; 44-guide intent audit with zero high-overlap pairs; 158-page build; English-first/legacy-alias verification; image-budget audit with no warnings.
- Built HTML has exactly five poster figures per route and all ten built assets retain the approved hashes.
- PR CI and Pages deployment are verified separately before reporting the production release; this checkpoint does not assert a deployment has already occurred.
- Next: PR CI → ready/merge PR #60 → verify Pages → record production result → owner desktop/iPad QA.
- Owner QA: Digital tab contains the two existing guides; each opens five ordered uncropped posters; View large and Save WebP work; remake first two face posters and approved Light & Details logo remain intact.

### Digital Art production release — 2026-10-02

- Existing PR **#60 merged** after final-head CI **#272 PASS**.
- Final PR head: `188c0f8e2e2c03ad5abe4ea0ddee3674f8ef965e`.
- Production release commit: `7bf250edd40d88d4a9550497d56fc68b74ae887d`.
- Pages workflow **#273 PASS** (build and deploy).
- **Painting with Separate Layers: 5/5 LIVE** at `/G-Art-Journey/guide/digital-color-layers/`.
- **Color a Face with Simple Layers: 5/5 LIVE** at `/G-Art-Journey/guide/color-a-face-in-layers/`.
- Exactly ten approved WebP binaries preserved unchanged, with manifest hashes and dimensions verified; official face remakes and the Light & Details logo exception remain intact.
- Local and CI release checks PASS: 83 tests, guide distinctness audit, production build, route verification and asset audit.
- No unrelated generated material/gallery assets were included in the release.
- Remaining acceptance: owner desktop/iPad visual QA of both catalog cards, five-poster order, uncropped display, responsive layout, View large and Save WebP.
- This release-record update changes documentation/manifest status only; the production artwork and route implementation remain the verified PR #60 tree.


### Guide information architecture refinement — 2026-10-02

Owner desktop/iPad review of the Digital Art release identified a navigation problem rather than an artwork-integrity problem: grouped topics were exposing many posters at once, but learners could not open each Digital poster as its own lesson page.

New durable navigation rule:
- use **Category → Topic → Lesson** when a category contains meaningful subtopics
- use **Category → Lesson** when the category is already a single coherent lesson shelf
- do not flatten Human Drawing, Character Art or Digital Art into one mixed lesson catalog

Implementation staged in PR #61:
- Digital Art keeps its two existing topic routes; each now presents five lesson cards instead of a five-poster wall
- all ten approved Digital posters get standalone lesson routes with comfortable-width display, View large, Save WebP and previous/next navigation
- Human Drawing becomes two topic cards: **Faces & Head** and **Figure & Pose**, each opening a four-lesson shelf
- Character Art becomes four topic cards: **Manga**, **Manhwa / Webtoon**, **Manhua**, **Cartoon / Comics**; each opens its three-lesson shelf
- Character Face Design Lab remains a separate direct card because it is not tied to one regional/style family
- the main Drawing Guides catalog no longer mixes all Human Drawing and Character Style lessons together; it exposes topic hubs instead
- Pencil, Landscape, Watercolor and other single-level groups remain direct lesson collections

Artwork rule:
- no approved poster is regenerated, resized, cropped or replaced for this navigation refinement
- lesson-page layout must make the infographic readable at normal page size; **View large is optional inspection, not a requirement for basic reading**

Staging branch:
- `feature/guide-topic-hierarchy-20261002`
- draft PR: **#61**
- CI #279: **PASS** after updating hierarchy-aware tests and English legacy aliases
- production remains unchanged until PR #61 is merged and Pages passes


### Guide topic hierarchy production release — 2026-10-02

- PR **#61 merged** after final-head CI **#280 PASS**.
- Production merge commit: `ee65a4c3f9004e674e96fe336c40937ac4e4159d`.
- Pages workflow **#281 PASS**; build and deploy jobs both succeeded.
- Release checks PASS: **87 tests**, guide-distinctness audit, production build, English-first / `/en` legacy-alias verification and image-budget audit.
- New durable hierarchy is live: **Category → Topic → Lesson** for grouped learning areas.
- Digital Art:
  - the two existing topic URLs remain stable
  - each topic now shows five lesson cards instead of five reduced posters
  - all ten approved posters have standalone lesson pages with comfortable single-poster width, View large, Save WebP and previous/next lesson navigation
  - the ten approved WebP assets were not regenerated, cropped, resized or replaced
- Human Drawing:
  - landing page now shows **Faces & Head** and **Figure & Pose**
  - each topic opens a four-lesson shelf
- Character Art:
  - landing page now shows **Manga**, **Manhwa / Webtoon**, **Manhua**, **Cartoon / Comics**
  - each topic opens a three-lesson shelf
  - Character Face Design Lab remains a separate direct card
- Main Drawing Guides catalog no longer mixes all Human Drawing / Character Styles lesson cards into the flat list; topic hubs are used instead.
- Pencil, Landscape, Watercolor and other single-level guide groups remain direct lesson collections.
- Remaining acceptance: owner visual QA on desktop/iPad for topic-card clarity, lesson selection, Digital poster readability and previous/next navigation.


### Character Art expansion approved — Chibi + Fairy-Tale Princess — 2026-10-02

Owner approved the next two Character Art topics after the topic-first navigation release:

1. **Chibi Characters**
2. **Fairy-Tale Princess**

Locked scope:
- exactly **3 lessons per topic / 6 planned posters total**
- use **Character Art → Topic → Lesson**
- do not publish an incomplete topic
- Chibi lessons: **Draw Cute Chibi Proportions**, **Chibi Faces & Expressions**, **Chibi Poses & Outfits**
- Princess lessons: **Design a Fairy-Tale Princess**, **Princess Hair, Dress & Royal Details**, **Graceful Princess Poses**

Locked visual direction:
- use the current **Manhwa / Webtoon Character** posters as the closest layout/mood reference
- light pastel palette, warm/bright background, generous whitespace, character-first composition
- avoid the Digital Art block-heavy look: no page full of strongly colored boxes, no oversized lettering, no dense technical-dashboard feeling
- normal lesson-page display must be readable without requiring View large

Princess originality boundary:
- public topic name is **Fairy-Tale Princess**, not Disney Princess
- all princess characters must be original G-Art Journey designs
- do not use Disney names or recognizable franchise costumes/hairstyles/props/signature combinations

Production gate:
- create **Chibi Lesson 1** first and obtain owner visual approval before Lessons 2–3
- then create **Fairy-Tale Princess Lesson 1** as the princess visual pilot before Lessons 2–3
- do not mass-generate all six before these pilot approvals
- full anatomy/hand/continuity QA remains mandatory

Durable sources:
- `docs/CHARACTER_CHIBI_PRINCESS_AUTHORING.md`
- `assets/batches/character-chibi-princess-plan.json`
- `docs/ILLUSTRATION_STANDARD.md`

Current production status: **spec locked; artwork not yet produced or published**.


### Chibi Characters artwork complete — 2026-10-02

Owner approved the complete **Chibi Characters** topic artwork: **3/3 posters APPROVED**.

Approved lessons:
1. **Draw Cute Chibi Proportions**
2. **Chibi Faces & Expressions**
3. **Chibi Poses & Outfits**

Locked visual family:
- soft pastel Character Art treatment derived from the approved Webtoon-like direction
- warm off-white background, generous whitespace and character-first layout
- no dense Digital Art-style colored block treatment
- consistent original brown-haired chibi character family across the topic

Exact source PNG dimensions/hashes and durable Library paths are recorded in:
- `assets/batches/character-chibi-princess-plan.json`
- `docs/CHARACTER_CHIBI_PRINCESS_AUTHORING.md`

The three approved source artworks are preserved in the project Library under:
- `/G-Art Journey/Approved/Chibi/`

Do not regenerate or replace the approved Chibi artwork during integration without explicit owner instruction.

Current next task:
- **Fairy-Tale Princess Lesson 1 — Design a Fairy-Tale Princess**
- create this as the single princess visual pilot
- wait for owner approval before creating Princess Lessons 2–3


### Chibi + Fairy-Tale Princess artwork and Reference Library expansion complete — 2026-10-02

Owner approval is now complete for the full next release scope:

**Character Art lessons — 6/6 APPROVED**
- Chibi Characters: 3/3
- Fairy-Tale Princess: 3/3

**Reference Library additions — 5/5 APPROVED**
- Princess Hairstyles & Accessories
- Princess Dress Library
- Chibi Clothing Library
- Chibi Pose & Motion Library
- Chibi Hair Library

Release architecture:
- Character Art gains two topic cards: **Chibi Characters** and **Fairy-Tale Princess**
- each topic opens exactly three lesson cards under the existing Category → Topic → Lesson hierarchy
- Reference Library keeps core collections Poses / Motion / Hair / Clothing
- add style filters **Chibi** and **Fairy-Tale Princess**
- Princess hair/accessories and Chibi hair go under Hair
- Princess dresses and Chibi clothing go under Clothing
- Chibi pose/motion goes under Motion

Approved originals are preserved in the project Library. Exact source hashes/dimensions are recorded in `assets/batches/character-chibi-princess-plan.json`.

Next task: controlled integration of **11 exact approved assets** (6 Character Art lesson posters + 5 Reference Library sheets), full tests/audits/build, then Pages deployment and owner desktop/iPad QA. No asset may be regenerated, cropped, resized, rebranded or substituted during integration.

## Integration release gate — 2026-10-02

- Existing PR #62 / `feature/chibi-princess-reference-release-20261002`; all 11 approved WebPs now present.
- All supplied and built SHA-256 hashes, byte sizes and dimensions match the approved manifest. No crop, resize, recolor, redesign or logo modification.
- Character Art: 6 topic shelves × 3 lessons = 18 topic lessons; Character Face Design Lab remains a separate direct lesson (19 Character Art lessons overall).
- Chibi and Fairy-Tale Princess each contain exactly 3 complete lesson records and standalone poster pages.
- Reference Library: 23 sheets; Poses 3, Motion 7, Hair 4, Clothing 9. Styles: General 18, Chibi 3, Fairy-Tale Princess 2.
- Local checks PASS: 90 tests; 50-guide intent audit, zero high-overlap pairs; 206-page build; English-first / legacy-alias verification; image-budget audit with no warnings.
- Generated HTML verified: two new topic cards, three lesson cards per new topic, six standalone posters with View large / Save WebP, new style filters, five reference cards, and all eleven built asset hashes.
- Existing 12 Character Style lessons, Design Lab, four core reference collection IDs and all existing routes are preserved.
- Final PR CI must pass before merge; Pages build and deployment are checked after merge.
- Remaining acceptance: owner desktop/iPad QA after release.

## Verified production release — 2026-10-02

- Existing PR **#62 merged** after final PR CI **#293 PASS**.
- Final PR head: `2333fc127fb0513b89f9abaa1009bf5c81befdec`.
- Production implementation merge: `1ad8cccb6222ca38f451f7782c54b92b7399ddab`.
- Pages workflow **#294 PASS**, build and deploy.
- Release checks: **90/90 tests PASS**, 50-guide distinctness audit with zero high-overlap pairs, 206-page production build, 62 canonical routes / legacy aliases verified, and image-budget audit with no warnings.
- All **11/11 supplied WebP SHA-256 hashes**, dimensions, byte sizes and target paths match. Artwork and embedded logos were preserved byte-for-byte.
- Character Art landing: **6 topic shelves × 3 lessons = 18 topic lessons**, plus the separate Character Face Design Lab (19 lessons exposed through this landing). Human Drawing face lessons remain in their existing separate shelves.
- New topics: Chibi Characters **3/3 LIVE**; Fairy-Tale Princess **3/3 LIVE**.
- Reference Library: **23 sheets LIVE**; Poses 3, Motion 7, Hair 4, Clothing 9. Style counts: General 18, Chibi 3, Fairy-Tale Princess 2.
- Core collection IDs, original twelve Character Style lessons, Design Lab, existing topic routes and compatibility aliases are unchanged.
- No unrelated generated gallery/material assets were committed.
- Remaining acceptance: owner desktop/iPad visual QA.

QA checklist:
1. Character Art landing has six topic cards plus the separate Design Lab.
2. Chibi and Princess topics each open exactly three lessons in order.
3. Each of the six lesson pages shows its full approved poster, readable text and intact logo, with working View large and Save WebP.
4. Back links return to the topic/Character Art landing without losing route context.
5. Reference Library has the Chibi and Fairy-Tale Princess style filters; style-only results show three and two cards respectively.
6. Combined filters show Hair (one Chibi + one Princess), Clothing (one Chibi + one Princess), Motion (one Chibi), and no new Poses sheets.
7. View large opens the correct full reference; iPad portrait/landscape layouts scroll without clipping or horizontal overflow.


### Post-release catalog consistency audit — 2026-10-02

Owner QA found a stale public catalog card that still said **12 lessons** after Character Art expanded to six topic shelves.

Audit result:
- live Character Art data is correct: **6 topics / 18 topic lessons**, plus the separate Character Face Design Lab
- live Reference Library data is correct: **23 sheets**; General 18, Chibi 3, Fairy-Tale Princess 2
- stale information was presentation/documentation debt, not missing content

Correction rule:
- public collection counts should be derived from live data arrays whenever practical instead of being duplicated as hard-coded strings
- historical release documents may retain old counts only when clearly labeled as historical baselines
- current README / master / catalog copy must reflect the latest live state

Correction branch:
- `fix/current-project-counts-20261002`
- updates Drawing Guides card/preview copy to derive Human/Character/Reference counts from data
- refreshes Reference Library preview to show only style families with published assets
- marks Character Batch 02 and the first 18-sheet Reference Library checkpoint as historical baselines
- refreshes README to the current Character Art, Reference Library and Core Drawing Skills state
- adds regression assertions preventing the old Character Art `12 lessons` copy from returning


### Catalog consistency fix released — 2026-10-02

- PR **#63 merged**.
- PR CI **#296 PASS**.
- Production merge commit: `e2622d5ce6af6b69691aa7158210e520a70a14f9`.
- Pages workflow **#297 PASS**; build and deploy both succeeded.
- Public Drawing Guides now derives collection counts from live data instead of the stale hard-coded Character Styles count.
- Character Styles card/preview now reflects **6 topics · 18 lessons** and includes Manga, Manhwa / Webtoon, Manhua, Cartoon / Comics, Chibi Characters and Fairy-Tale Princess.
- Reference Library preview now reflects **23 approved sheets** and only names style filters that currently have published assets.
- README and historical baseline docs were reconciled so old 12-poster / 18-sheet checkpoints are clearly labeled as historical.
- No artwork, binary asset, route hierarchy or approved lesson content changed.


### Learning-copy consistency audit — 2026-10-02

A focused post-expansion content audit reviewed the active Character Art, Human Drawing, Digital Art, Core Drawing, Watercolor and Reference Library copy after the Chibi / Fairy-Tale Princess release.

Findings:
- no major academic or instructional error was found in the active lesson steps
- the six new Chibi / Fairy-Tale Princess lessons remain aligned with their approved authoring spec
- guide-distinctness remains structurally sound; the main issues were wording consistency and stale collection-level descriptions rather than lesson overlap
- active guide data contains no remaining stale `12 lessons` / four-topic Character Art wording

Copy refinements staged:
- Character Art collection descriptions now include Manga, Manhwa / Webtoon, Manhua, Cartoon / Comics, Chibi and Fairy-Tale Princess
- Character Art topic descriptions were polished for simpler, more natural English
- Character Styles intro now distinguishes broad visual families from design themes without presenting them as fixed rules
- new Chibi / Princess `Try it` prompts use consistent sentence casing
- Chibi proportion wording was simplified from “2-head / 2.5-head / 3-head” to “roughly 2, 2.5 and 3 heads tall”

No artwork, route, lesson count, teaching objective or approved poster is changed by this pass.


### Content consistency gate — 2026-10-02

Owner approved making content consistency a permanent release gate after the post-expansion copy audit.

Durable standard:
- `docs/CONTENT_CONSISTENCY_STANDARD.md`

Automated audit:
- `scripts/check-content-consistency.mjs`
- command: `npm run audit:content`
- CI runs the audit on every pull request and every push to `main`

The gate checks structural learning-copy integrity across active guides, Character Art topics, Human Drawing shelves, Digital Art topic/lesson/poster alignment and Reference Library metadata. It also blocks selected stale Character Art count wording and public use of `Disney Princess` in place of the original `Fairy-Tale Princess` topic.

Human review remains required for semantic and visual agreement:
**Topic description → lesson objective → steps → Try it → Remember → poster**.


### Start Here / Learning Paths proposal — 2026-10-02

After the Character Art / Reference Library expansion and the new permanent content-consistency gate, the next proposed product step is **Start Here / Learning Paths**.

Reason:
- the library is now large enough that discovery is becoming a learning-design problem rather than a content-volume problem
- the goal is to answer “What should I learn next?” without turning G-Art Journey into a locked curriculum

Proposal saved at:
- `docs/LEARNING_PATHS_PLAN.md`

Proposed v1 paths:
1. Drawing Basics
2. Draw People
3. Create Characters
4. Draw Places
5. Watercolor Basics
6. Digital Art Basics

Reference Library remains a contextual support tool, not a mandatory curriculum path.

Important rules:
- suggested order only; all lessons remain freely accessible
- use existing lessons first; no new poster batch required for v1
- Core / Optional / Choose one distinctions must be explicit
- Character Art remains a branching choice among six topic families
- Digital Art preserves its existing two-series / ten-lesson hierarchy
- no progress tracking, badges, locked prerequisites or AI personalization in v1
- counts and references should resolve from data rather than duplicated hard-coded copy

Current state:
- planning only
- no production route or UI code has been changed
- owner review of the learning-path structure is required before implementation

The project backlog was refreshed at the same checkpoint: Reference Library is no longer listed as paused; its current 23-sheet foundation is complete, while Manga / Manhwa-Webtoon / Manhua reference expansion and a future skill-gap audit remain deferred.


### Start Here / Learning Paths owner approval + implementation — 2026-10-02

Owner approved the six-path structure in `docs/LEARNING_PATHS_PLAN.md`.

Approved v1 paths:
1. Drawing Basics
2. Draw People
3. Create Characters
4. Draw Places
5. Watercolor Basics
6. Digital Art Basics

Implementation branch:
- `feature/start-here-learning-paths-20261002`

Implementation scope:
- structured path data in `src/data/learning-paths.mjs`
- canonical `/start-here/` page plus `/en/start-here/` legacy alias
- one clear Start Here entry point from Drawing Guides
- no locked prerequisites, accounts, progress bars, badges or new art assets
- Character Art remains a branch choice among six topic families
- Digital Art retains two series / ten nested lessons
- Reference Library remains optional support
- automated path-integrity tests verify all guide references resolve to active content
- production build verification now includes the Start Here route

No existing lesson artwork or lesson content is changed by this implementation.


### Start Here / Learning Paths production release — 2026-10-02

- Owner-approved structure from PR #66 is implemented and live.
- Implementation PR **#67 merged** after PR CI **#305 PASS**.
- Production merge commit: `500c056d4ab461163c5b52e20d9d9da716d54d14`.
- Pages workflow **#306 PASS**; build and deploy both succeeded.
- New canonical route: `/start-here/`; `/en/start-here/` remains a legacy English alias.
- Drawing Guides now includes a clear **Start Here** entry point.
- Live v1 paths:
  1. Drawing Basics
  2. Draw People
  3. Create Characters
  4. Draw Places
  5. Watercolor Basics
  6. Digital Art Basics
- Character Art remains a branch choice across six topic families rather than a forced sequence.
- Digital Art keeps its two-series / ten-lesson internal hierarchy.
- Reference Library remains optional support.
- Automated Learning Paths tests verify that referenced guide slugs are active, topic branches resolve and Digital series structure remains intact.
- Production route verification includes Start Here and its legacy alias.
- No existing lesson artwork, approved poster, lesson objective or route was replaced.

Owner visual QA requested on desktop/iPad:
- Start Here entry point visibility on Drawing Guides
- six path cards and anchor navigation
- readability / spacing on iPad portrait and landscape
- Character Art branch links
- Digital nested lesson links
- Reference Library helper
- no horizontal overflow or clipped cards


### Learning Paths skill-gap audit — 2026-10-03

After owner QA confirmed Start Here / Learning Paths works well on desktop and iPad, the next approved task was a skill-gap audit based on the live paths rather than content-count expansion.

Durable audit:
- `docs/SKILL_GAP_AUDIT.md`

Main findings:
- the current library already covers most beginner foundations well
- **Light & Value is not a current gap**: Shade Simple Forms already teaches one light source, light/shadow family, core shadow, reflected light and cast shadow; Graphite Values, Portrait and Digital Art reinforce it
- **Gesture & Motion Basics** is the strongest real gap because motion principles are fragmented across Standing Figure, style-specific action lessons and Reference Library examples
- **Feet from Simple Forms** is a useful missing support skill for standing/balance but should remain optional rather than a mandatory core step
- **Simple Color Harmony / Build a Simple Color Palette** is a real cross-medium gap: Digital Art teaches layer workflow and Watercolor teaches paint behavior, but neither directly teaches hue/value/saturation, limited palettes or dominant/support/accent color choices
- two-point/room perspective and general illustration composition are useful future extensions, not immediate needs
- negative space/sighting should be integrated into observation exercises rather than becoming a formal standalone lesson now

Recommended small batch **SG-01**:
1. Draw Gesture & Motion from Simple Lines
2. Draw Feet from Simple Forms
3. Build a Simple Color Palette

Production rule:
- do not mass-produce SG-01
- begin with Gesture & Motion as the single pilot
- owner approves the teaching design before Feet
- owner approves Feet before Color Palette
- Learning Paths are updated only after each new lesson is approved and published

The old Phase 2 roadmap was reconciled so superseded items such as Five Values & a Lit Sphere / Layers for Beginners do not accidentally trigger duplicate content.


### SG-01 Gesture & Motion pilot approved — 2026-10-03

Owner approved the revised **Draw Gesture & Motion from Simple Lines** poster for use.

Approval note:
- the first draft had a continuity error: Steps 4–5 changed the leg relationship established in Steps 1–3
- the revised version corrected the sequence enough to be accepted
- owner explicitly noted the revision is **acceptable but not perfect**
- therefore this poster is approved content, but should **not** be treated as the ideal visual-quality benchmark for the remaining SG-01 posters
- cumulative-step continuity remains a mandatory gate for future anatomy/gesture posters

Approved source artwork is preserved in Library:
- `/G-Art Journey/Approved/Skill Gap/01-gesture-motion-basics.png`

SG-01 status:
1. Draw Gesture & Motion from Simple Lines — **OWNER APPROVED**
2. Draw Feet from Simple Forms — **NEXT**
3. Build a Simple Color Palette — pending

Next production rule:
- create only **Draw Feet from Simple Forms**
- prioritize clear ankle/heel/forefoot construction, top/side/three-quarter views, weight/contact, five-toe anatomy where visible, and shoe simplification without changing foot direction
- do not start Color Palette until Feet is owner-approved


### SG-01 artwork complete — 2026-10-03

Owner approved all three SG-01 teaching posters:

1. **Draw Gesture & Motion from Simple Lines** — approved
2. **Draw Feet from Simple Forms** — approved
3. **Build a Simple Color Palette** — approved

Durable approved source PNGs:
- `/G-Art Journey/Approved/Skill Gap/01-gesture-motion-basics.png`
- `/G-Art Journey/Approved/Skill Gap/02-feet-simple-forms.png`
- `/G-Art Journey/Approved/Skill Gap/03-simple-color-palette.png`

Visual note:
- Gesture & Motion is approved for use, but owner noted it is acceptable rather than an ideal benchmark because pose-continuity correction remained visually imperfect.
- Feet and Color Palette should preserve the same warm-paper, soft-pastel, spacious teaching-poster family.
- Do not regenerate or replace these three approved artworks during integration without explicit owner instruction.

Recommended integration:
- Gesture & Motion: Core Drawing / Figure; insert into **Draw People** after Figure Proportions and before Standing Figure; add as optional Create Characters support.
- Feet from Simple Forms: Core Drawing / Figure; keep in **Explore more / support**, not mandatory core; add to Create Characters support.
- Build a Simple Color Palette: treat as medium-independent **Color Basics** support; link from Digital Art, Watercolor and Create Characters without altering the existing Digital 5+5 series or Watercolor six-step core route.

Current next task: package the 3 approved PNGs as production WebPs, add the three lesson records and Learning Path links, run the full content-consistency / guide-distinctness / build gate, then owner visual QA.


### SG-01 integration staging — 2026-10-03

Owner approved integration of the complete SG-01 batch.

Staging branch:
- `feature/sg01-learning-path-integration-20261003`

Planned lesson placement:
- `gesture-motion-basics` — Core Drawing / Figure; Draw People core after Figure Proportions and before Standing Figure; optional Create Characters support
- `feet-simple-forms` — Core Drawing / Figure; Draw People Explore more; optional Create Characters support
- `simple-color-harmony` — Color Basics; optional support for Create Characters, Watercolor Basics and Digital Art Basics

Catalog rule:
- add a light **Color Basics** filter rather than misclassifying the color lesson as Digital Art or Watercolor
- preserve existing Digital Art 5+5 series and Watercolor six-step core route unchanged

Approved production asset targets:
- `public/infographics/core/gesture-motion-basics.webp`
- `public/infographics/core/feet-simple-forms.webp`
- `public/infographics/color/simple-color-palette.webp`

Do not crop, resize, regenerate, recolor, rebrand or replace the approved artwork.

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


### SG-01 owner desktop QA — 2026-10-03

Owner confirmed all three newly published SG-01 lessons display correctly on desktop:
- Draw Gesture & Motion from Simple Lines
- Draw Feet from Simple Forms
- Build a Simple Color Palette

Desktop visual QA: **PASS**.

Remaining close-out check:
- quick iPad QA for poster readability, View large / Save WebP, Start Here placement, optional/support labels and Color Basics filtering

Next product task after SG-01 close-out:
- **Post-SG-01 Learning Paths UX audit**
- review path length and cognitive load now that Draw People has 9 core steps
- review Create Characters support density now that it has 7 optional support guides
- prefer grouping/staging over deleting useful lessons
- do not start a new content batch until this audit is complete


### SG-01 owner QA complete + post-release Learning Paths UX audit — 2026-10-03

Owner confirmed SG-01 visual QA on both desktop and iPad: **PASS**.

SG-01 is fully accepted and closed.

Post-SG-01 Learning Paths UX audit:
- `docs/POST_SG01_LEARNING_PATH_UX_AUDIT.md`

Audit conclusion:
- no lesson should be removed
- no new tabs, accordions, progress UI or navigation layer is needed
- Draw People should keep all 9 core lessons but present them as 3 visible stages:
  1. Face & Head
  2. Figure & Motion
  3. Finish the Figure
- Draw People Explore more should be grouped into Face details / Figure extras
- Create Characters should keep all 7 support guides but group them by purpose:
  - Pose & Motion
  - Anatomy
  - Hair & Clothing
  - Color
- Drawing Basics, Draw Places, Watercolor and Digital require no structural change
- this is a UX organization pass only; lesson order, artwork, routes and curriculum remain unchanged

Next proposed implementation:
- generic stage/group metadata in Learning Paths data
- subtle group headings in Start Here
- no new artwork


### Post-SG-01 Learning Paths grouping implementation — 2026-10-03

Owner approved immediate implementation of the UX grouping proposal.

Implementation branch:
- `feature/post-sg01-learning-path-grouping-20261003`

Implemented data model:
- Draw People core steps now carry generic stage IDs with stage metadata
- Draw People Explore more uses grouped metadata
- Create Characters optional support uses grouped metadata
- renderer remains generic and still supports ungrouped paths

Visible grouping:
- Draw People: Face & Head / Figure & Motion / Finish the Figure
- Draw People Explore more: Face details / Figure extras
- Create Characters support: Pose & Motion / Anatomy / Hair & Clothing / Color

Preserved:
- all lesson order and lesson copy
- all artwork and routes
- Drawing Basics / Draw Places structure
- Watercolor six core steps
- Digital Art two series × five lessons
- no tabs, accordions, progress UI or new navigation layer

Regression tests now validate group metadata, all nested guide references and generated Start Here headings.


### Post-SG-01 Learning Paths grouping release — 2026-10-03

The owner-approved grouping pass is live.

Release:
- PR **#71 merged**
- final PR CI **#325 PASS**
- production merge commit: `ee9f6a75e185ead719baa72f70b98e604fabbd5f`
- Pages workflow **#326 PASS**; build and deployment both succeeded
- full gate: **99/99 tests PASS**
- content consistency: 53 active guides / 6 Character topics / 2 Digital topics / 23 reference sheets
- learning-intent distinctness: 53 guides / 0 high-overlap pairs
- production build: 214 pages
- English-first verification: 66 canonical routes + legacy aliases
- image-budget audit: PASS

Live UX:
- Draw People keeps all 9 core lessons, now grouped as:
  1. Face & Head
  2. Figure & Motion
  3. Finish the Figure
- Draw People Explore more is grouped into Face details / Figure extras
- Create Characters keeps all 7 optional support guides, grouped as:
  - Pose & Motion
  - Anatomy
  - Hair & Clothing
  - Color
- grouping is metadata-driven and the Start Here renderer remains generic
- Drawing Basics, Draw Places, Watercolor six core steps and Digital Art 2×5 are unchanged
- no lesson content, artwork or route changed
- no tabs, accordions, progress UI or additional navigation layer was added

Next acceptance step:
- owner visual QA on desktop/iPad, focused only on Draw People stage headings and Create Characters support groups
