# Digital Art — approved infographic handoff

Status: **ARTWORK APPROVED — 2 sets / exactly 10 infographics**

Date locked: 2026-10-02

## 1. Official approved inventory

### Set A — Painting with Separate Layers — 5/5 APPROVED

1. **Painting with Separate Layers**
   - teaches the overall layer workflow
   - same simple scene is used through the lesson so the learner can see what each layer contributes

2. **Base Color Layers**
   - separates large color groups: background / object / foreground

3. **Shadow Layer**
   - adds one shadow layer
   - introduces simple clipping
   - keeps one consistent light direction

4. **Light & Details**
   - uses a different artwork so the series does not become visually repetitive
   - teaches highlights and selected small details
   - **owner-approved logo exception:** its logo differs from the first three lessons; keep this approved artwork as-is and do not remake only for the logo

5. **Check Your Layers**
   - toggle layers on/off
   - understand what each layer contributes
   - organize layers clearly
   - merge only when truly useful

### Set B — Color a Face with Simple Layers — 5/5 APPROVED

1. **Clean Sketch — REMAKE / official replacement**
   - clean bright background
   - sketch stays on its own top layer
   - lower sketch opacity before coloring

2. **Flat Skin Color — REMAKE / official replacement**
   - one clean flat skin base
   - face / neck / ears
   - no shadows or highlights yet

3. **Add One Clear Shadow**
   - one clear soft shadow layer
   - light direction remains consistent
   - simple clipping may be used

4. **Add Details**
   - small highlights / blush / lips / hair strands / edge light
   - keep details subtle

5. **Check Your Layers**
   - toggle and compare sketch / flat colors / shadow / details
   - organize and name layers
   - merge only when needed

## 2. Replacement rule — important

The **first versions** of Set B Lesson 1 and Lesson 2 were initially approved, but the owner later revoked those approvals because their colored panels made the teaching progression harder to read.

They are now **REJECTED / SUPERSEDED** and must **not** be published or counted.

Official replacements:
- Set B Lesson 1 = the newer bright-background **Clean Sketch** remake
- Set B Lesson 2 = the newer bright-background **Flat Skin Color** remake

Therefore:
- official Digital Art approved count = **10**
- not 12
- never publish both old and remake versions

## 3. Visual system

### Shared Digital Art rules

- portrait-format infographic
- bright / clean background
- generous white or cream space
- pastel purple / pink / blue / teal accents
- large readable teaching panels
- avoid dense tiny screenshots or too many small examples
- use neutral layer-panel illustrations instead of tying the lesson to one specific app UI
- English-first public copy

### Artwork continuity rule

Within **one lesson**:
- keep one artwork / same character / same camera and pose whenever the lesson is showing progressive stages
- changes should come from the digital technique being taught

Across **different lessons**:
- artwork may change to make the library richer
- do not reuse the same cottage scene or portrait forever
- keep the series layout and graphic language consistent

### Logo rule

The preferred Digital Art logo/style reference is the logo used in the **first three approved lessons of Set A**.

- future Digital Art infographics should follow that logo and visual identity
- **Set A Lesson 4 Light & Details** has a different logo; the owner explicitly approved it as a one-off exception
- do not remake Lesson 4 only to normalize the logo
- when uploading approved posters to the website, preserve the logo already embedded in each approved image; do not overlay the canonical website logo unless the owner explicitly asks

## 4. Teaching-role separation

Set A — **Painting with Separate Layers**
- teaches how a digital file is organized
- layer roles, visibility, separation, clipping, highlights, organization and merging

Set B — **Color a Face with Simple Layers**
- applies a simple layer workflow to one face
- sketch → skin base → shadow → details → layer check

The two sets should remain distinct and should not be collapsed into one course.

## 5. Human-image QA

For all character illustrations:
- coherent face and eye alignment
- consistent character identity across progressive steps
- same pose / camera when showing before-and-after stages
- plausible visible anatomy
- exactly five fingers on every fully visible hand
- no extra limbs / duplicated features
- no hair / facial-feature merging artifacts
- inspect full-resolution human anatomy before approval

## 6. Current release state

Artwork production:
- Set A: **5/5 APPROVED**
- Set B: **5/5 APPROVED**
- total official Digital Art assets: **10 APPROVED**

Website release:
- **NOT YET PUBLISHED as this new 10-poster Digital Art batch**
- integration branch: `feature/digital-art-10-posters-20261002`
- exact asset map/checksums: `assets/batches/digital-art-10.json`

Route mapping is now locked:
- `digital-color-layers` → **Painting with Separate Layers** → Set A five-poster gallery
- `color-a-face-in-layers` → **Color a Face with Simple Layers** → Set B five-poster gallery
- upgrade both routes in place; do not create duplicate Digital Art routes

Planned public assets:

Set A:
- `infographics/digital/layers-01-overview.webp`
- `infographics/digital/layers-02-base-color.webp`
- `infographics/digital/layers-03-shadow.webp`
- `infographics/digital/layers-04-light-details.webp`
- `infographics/digital/layers-05-check.webp`

Set B:
- `infographics/digital/face-01-clean-sketch.webp`
- `infographics/digital/face-02-flat-skin.webp`
- `infographics/digital/face-03-shadow.webp`
- `infographics/digital/face-04-details.webp`
- `infographics/digital/face-05-check.webp`

Preparation checkpoint:
- all 10 owner-approved source PNGs were recovered from the Art Project Library
- only the **remake** Clean Sketch and Flat Skin Color were selected
- all 10 were converted to WebP with **no resize/crop**, preserving embedded logos and composition
- dimensions, byte sizes and source/output SHA-256 hashes are recorded in the batch manifest
- Digital Art skill intents were refined so Set A teaches **layer-role organization** while Set B teaches an **applied face-color layer progression**
- binary WebP upload and runtime route switch remain gated together so the site never references missing poster files

Next release gate:
1. commit the 10 WebP binaries to the integration branch
2. switch the two existing routes to their five-poster galleries
3. update English-first route copy and release tests
4. run guide-overlap audit + full tests + build
5. controlled PR merge and Pages deployment
6. owner desktop/iPad visual QA

## 7. Source-art checkpoint from current conversation

Approved source images are the current conversation-generated originals. Important distinction:
- use the **new remake** Clean Sketch and Flat Skin Color files for Set B Lessons 1–2
- do **not** accidentally use the earlier rejected versions with more colorful sheet backgrounds

This document is the durable source of truth for the next chat.
