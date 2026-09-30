# Draw an Eye from Structure — production specification

Status: **v2 artwork approved and live; released in PR #31**

This is the second Phase 2A Core Drawing Skills item. It should teach a transferable eye-construction method before manga/webtoon/manhua stylization.

## 1. Learning outcome

A beginner should understand that an eye is not a flat almond symbol. The visible eye is built around a spherical eyeball, with eyelids wrapping around that curved form.

The poster must teach:
1. eyeball sphere and eye axis
2. inner/outer corners and lid wrap
3. iris and pupil placement on the curved surface
4. lid thickness, crease and upper-lid cast shadow
5. clean final eye with simple value and highlight

## 2. Visual identity

- portrait infographic, roughly 3:4
- warm off-white paper / sketchbook background
- graphite / pencil artwork only
- G-Art pastel accents only for title bars, arrows, step numbers and tiny callouts
- concise English labels
- large drawings that remain readable on mobile
- no decorative manga character portrait
- no copied anatomy diagram or artist composition

The lesson should feel like a polished beginner drawing plate, not a medical chart.

## 3. Main cumulative sequence

Use **one consistent eye, one head angle and one camera angle** through all five stages. Recommended view: a slightly three-quarter eye, close enough to show lid thickness without becoming a profile lesson.

### Step 1 — Eyeball sphere

Show a light sphere with a horizontal eye axis.

Teach:
- the eyeball is a rounded form
- the eye axis follows the sphere
- the visible opening will sit on this form

Label: **Start with the sphere**

### Step 2 — Wrap the eyelids

Add the inner and outer corners, then draw upper and lower lids curving around the sphere.

Teach:
- lids wrap over the eyeball rather than floating in front
- upper and lower lid curves are different
- corners anchor the opening

Label: **Wrap the lids**

### Step 3 — Place iris & pupil

Place the iris on the front/turning surface and center the pupil within it.

Teach:
- the iris is partly covered by the lids in a normal relaxed eye
- the pupil stays centered in the iris
- when the eye turns, the visible iris shape compresses with perspective

Label: **Place iris & pupil**

### Step 4 — Add thickness & shadow

Add the lid rim, crease and a simple cast shadow from the upper lid.

Teach:
- eyelids have thickness
- the upper lid usually creates a darker edge / shadow
- the crease follows the lid form
- do not outline every edge equally

Label: **Add lid thickness & shadow**

### Step 5 — Clean final eye

Refine the same eye with controlled graphite values.

Teach:
- keep the sclera lighter but not necessarily pure white
- darken the pupil and selected upper-lid area
- use one small highlight that agrees with the light direction
- add only a few lashes after the structure works

Label: **Refine the final eye**

## 4. Supporting mini-studies

Use up to three small studies, clearly labeled as **variations**, not cumulative steps:

### A. Lid wrap
A side/three-quarter diagram showing upper and lower lids curving over a sphere.

### B. Iris in perspective
Front-facing iris compared with a turned eye, showing the visible iris narrowing.

### C. Upper-lid shadow
A tiny value study showing light source, lid shadow and highlight relationship.

## 5. Mandatory eye QA

Before publication:
- same eye orientation and proportions continue through Steps 1–5
- upper and lower lids visibly wrap around the eyeball
- inner and outer corners connect plausibly
- iris sits on the eye surface; it is not pasted flat above the lids
- pupil is centered within the iris
- relaxed eye does not show the full iris circle floating between the lids
- no accidental double iris, double pupil or duplicate highlight
- lid thickness is readable but not exaggerated
- upper-lid shadow agrees with the chosen light direction
- highlight placement agrees with the same light source
- eyelashes are secondary; they do not hide bad structure
- final eye remains believable before stylization

Inspect the artwork at full resolution before release.

## 6. What to avoid

Reject the poster if:
- the eye changes shape or viewpoint between cumulative stages
- the lids are two flat arcs unrelated to the sphere
- the iris/pupil drifts position from one step to the next
- the pupil is off-center without perspective reason
- the iris is a full floating circle in a normal relaxed eye
- lashes replace construction
- heavy rendering hides incorrect lid or iris placement
- colored iris/skin violates the graphite-first rule
- labels are too small to read on mobile
- decorative character art competes with the lesson

## 7. Poster text

Title:
**Draw an Eye from Structure**

Subtitle:
**Build the sphere and eyelids before adding iris, shadow and detail.**

Five step labels:
1. Eyeball sphere
2. Lid wrap
3. Iris & pupil
4. Thickness & shadow
5. Clean eye

Bottom note:
**Tip: use a mirror or photo and check how the lids wrap around the eyeball.**

## 8. Production method

For this structural foundation poster, continuity is more important than decorative rendering.

Preferred workflow:
1. construct the five stages from deterministic vector/graphite geometry so the same eye cannot drift between steps
2. use original line/value studies for the final eye and mini-studies
3. keep the source editable in the repository
4. generate the public WebP deterministically before dev/test/build
5. use AI-generated reference art only if it passes continuity and eye-anatomy QA; it is not required for publication

## 9. Release sequence

1. Create the original structural source.
2. Inspect eye anatomy, continuity and lighting at full resolution.
3. Generate optimized WebP.
4. Add guide data and learning-intent record.
5. Pin source/output integrity metadata.
6. Run tests, guide audit, build and asset audit.
7. Review desktop/tablet/mobile.
8. Publish the eye poster independently once it passes its own gate.

Published implementation:
- guide slug: `eye-structure`
- editable source: `assets/core/eye-structure.svg`
- generated public asset: `public/infographics/core/eye-structure.webp`
- source is regenerated deterministically before dev/test/build.


## 10. Eye v2 visual refresh — active production specification

The v2 refresh changes **presentation quality and practical reference depth**, not the learning objective, guide slug, URL or core construction logic.

### A. Main construction sequence
Create this as the first independent QA unit before any full poster is assembled.

Use one consistent neutral eye in the same three-quarter/front-biased view through all five stages:
1. **Eyeball sphere** — sphere plus eye axis
2. **Wrap the lids** — upper/lower lids and corners wrapping around the sphere
3. **Iris & pupil** — iris seated on the curved eye surface, pupil centered within it
4. **Thickness & shadow** — readable lid rim/crease plus simple upper-lid cast shadow
5. **Clean eye** — restrained graphite value and one coherent highlight

The eye identity, opening shape, iris position and camera angle must not drift between stages.

### B. Four key structural studies
After the five-step group passes QA, create four separate studies:
1. **Lids wrap the ball** — clear upper/lower lid wrap around the sphere
2. **Iris sits under the lids** — relaxed eye with iris partly occluded by lids
3. **Rim, crease & shadow** — show lid thickness and upper-lid shadow without claiming every upper lid is universally thicker/darker
4. **Corners anchor the opening** — compare inner/outer corner roles without declaring one universal corner shape

Use short beginner wording. Prefer observation-based language such as “often,” “can,” or direct structural description when anatomy varies.

### C. Practical eye-view reference grid
After key studies pass QA, create 8–10 neutral graphite references. Preferred set:
- relaxed front
- three-quarter
- side / near-profile
- looking left
- looking right
- looking up
- looking down
- half-closed
- wide open
- closed eye

These are reference variations, not cumulative steps. Avoid turning the grid into a makeup, eyelash or stylized-character showcase. Keep lashes restrained and vary eye identity subtly enough that the sheet does not imply one gendered eye template.

### D. Poster composition
Final poster may use:
- title + subtitle
- five-step main sequence
- four key structural studies
- 8–10 practical view references
- three short practice tips

Keep the upper-left branding area clear during image generation. Composite the canonical repository asset `public/branding/g-art-lockup.svg` after teaching artwork passes QA. Do not ask an image model to redraw the logo.

### E. Eye v2 mandatory QA
Before final composition:
- inspect each important eye study at full resolution
- same eye identity and camera angle across Steps 1–5
- lids visibly wrap around a spherical form
- iris/pupil placement remains coherent through the sequence
- relaxed-eye iris is not a floating full circle
- no duplicate pupil, iris, highlight or lid edge
- perspective compression is plausible in turned views
- lid thickness is visible but not exaggerated
- cast shadow and highlight agree with one light direction
- corners connect naturally to upper/lower lids
- lashes never hide construction errors
- no panel relies on a rigid gender, ethnicity or beauty-template claim

### F. v2 production order
1. Lock the page architecture only.
2. Generate the five-step main eye group.
3. QA/reject/repair the five-step group.
4. Generate the four key studies.
5. QA/reject/repair the key studies.
6. Generate practical eye-view references in small groups.
7. QA every reference.
8. Composite approved panels with the canonical G-Art Journey lockup.
9. Run whole-page readability/anatomy QA.
10. Only after owner approval, pin source integrity, generate the public WebP, run CI and release.

### G. Non-release concept
The first full-page Eye v2 image generated on 2026-09-30 is a **layout reference only**. It is not an approved artwork candidate and must not be wired to the live site. Its useful contribution is the overall density pattern (five steps + four key studies + practical views + practice tips); its eye continuity, wording and representation still require panel-first rebuilding.


## 11. Owner-approved Eye v2 artwork

Owner approval recorded: **2026-09-30**.

The owner approved the generated full Eye v2 poster shown in the project chat. Preserve this exact artwork direction; do **not** regenerate the poster merely to make it conform more mechanically to the earlier panel-first layout brief.

Approved composition includes:
- five-stage eye construction row
- four key structural studies
- ten practical eye-view examples
- four compact practice tips
- warm paper / graphite-led G-Art visual language
- a small decorative colored drawing-helper character at the upper-right

### Owner-approved visual exceptions

The approved poster differs from the earlier strict v2 brief in several small ways. These are recorded so a future session does not “fix” them by regenerating the whole image:

- the upper-right contains a small colored decorative character rather than being entirely graphite-only
- the poster does not reserve a dedicated upper-left logo box
- some short callouts simplify variable anatomy (for example upper/lower lid character and inner/outer corner shape); the web lesson retains the more careful structural explanation
- the rendered finish increases strongly from Steps 3 → 5, but the construction remains in one consistent overall viewing direction

Treat these as owner-approved presentation choices, not new universal academic rules.

### Release handling

- Keep the approved raster artwork itself unchanged.
- Do not ask an image model to redraw the logo into the artwork.
- If brand treatment is needed on the website, use the canonical repository lockup in the surrounding page/UI rather than regenerating the approved image.
- Pin the approved source hash and dimensions before switching the live asset.


### Approved source integrity record

The owner-approved generated poster was archived into the repository pipeline as a high-quality WebP source without changing composition.

Original approved generation:
- dimensions: **1024×1536**
- PNG bytes: **3,183,197**
- PNG SHA-256: `b3786c8b40857907f03cd6144222d0fac711b014fd2c5932f6d18e188a3327df`

Pinned repository source:
- dimensions: **1024×1536**
- WebP source bytes: **495,832**
- WebP source SHA-256: `37526ddfcbe1181641193fe951e9940714916f2a518085ddb7ec3846fac78de2`
- source chunks: `assets/core/eye-v2.b64/01.txt` through `08.txt`

Generated public asset:
- `public/infographics/core/eye-structure.webp`
- target dimensions: **900×1350**
- aspect ratio preserved at **2:3** so no teaching content is cropped
