# Pencil Art — production plan

Status: **lesson map approved; Pencil Art overview infographic owner-approved; Lesson 1 detail poster NOT YET successfully generated**

## 1. Category role

Pencil Art teaches the **medium itself**: control, value, marks, form, objects and graphite texture.

It should not duplicate:
- Figure Drawing anatomy/construction
- Character Art style design
- Landscape scene construction
- the existing `graphite-values` visual note

## 2. Approved five-lesson path

1. **Pencil Control — Lines, Pressure & Marks**
2. **Shade Simple Forms**
3. **Draw Everyday Objects**
4. **Create Texture with Graphite**
5. **Shade a Pencil Portrait**

Learning progression:

`Control → Form → Object → Texture → Portrait`

The existing `shade-a-pencil-portrait` practical lesson may become Lesson 5 after its artwork/presentation is refreshed.

## 3. Production method

Produce one lesson at a time.

For each lesson:
1. lock the learning objective and five steps
2. create one original illustrated poster
3. inspect labels and visual logic at full size
4. ensure examples are large enough to study on iPad
5. owner visual QA
6. only after approval, optimize and publish
7. then move to the next lesson

Do not mass-generate all five posters at once.

## 4. Lesson 1 — Pencil Control

### Learning outcome

A beginner should be able to intentionally vary:
- line direction
- pressure
- line weight
- hatch spacing
- hatch layering
- simple mark texture

This lesson is about **control**, not drawing a finished subject.

### Five-step lesson

1. **Warm up with long lines**
   - straight, curved and S-shaped strokes
   - one confident stroke rather than scratchy correction

2. **Change pressure on purpose**
   - light → dark → light in one stroke
   - smooth pressure changes

3. **Vary line weight**
   - stronger edge for overlap/focus
   - lighter secondary lines

4. **Build tone with hatching**
   - parallel marks
   - even spacing
   - darker tone through controlled layering

5. **Try cross-hatching and texture**
   - second hatch direction
   - compare dots, short strokes and broken marks

### Poster layout

**Landscape is the approved Pencil Art exception.** Use a wide layout for this Pencil Art set so graphite comparisons can stay large and readable.

Recommended working ratio: about **16:10 or 3:2**.

This is an explicit exception to the project-wide portrait default; it does not change the default orientation for other categories.

Use three visual zones:

**A. Five large control studies**
- each study gets enough room to inspect individual marks
- avoid tiny repeated marks that blur on mobile

**B. Mark vocabulary strip**
Show a compact but readable set:
- light line
- dark line
- taper
- parallel hatch
- cross-hatch
- dots
- short broken marks

**C. Mini practice area**
Five simple blank/example boxes:
- pressure
- line weight
- hatching
- cross-hatching
- texture

### Visual identity

- warm off-white sketchbook paper
- graphite only for teaching marks
- small G-Art pastel accents for numbers/arrows
- canonical G-Art Journey logo added from repository, not AI-redrawn
- generous whitespace
- crisp common English
- no decorative character
- no photograph
- no complex object drawing

### QA

Reject if:
- line examples are too small to distinguish
- pressure scale changes in abrupt blobs instead of gradual control
- hatch spacing is chaotic when the panel is meant to teach even spacing
- cross-hatching becomes a dense black patch
- poster is mostly text instead of visible pencil examples
- labels are misspelled or unreadable
- the result looks like a software brush chart rather than real graphite practice

## 5. Deferred Pencil lessons

Lessons 2–4 remain **plan-only** until each has complete academic steps. Do not add empty-step placeholder guides to runtime data.

Lesson 5 will reuse/refine the existing `shade-a-pencil-portrait` academic content rather than creating a duplicate portrait lesson.


## 6. Approved Pencil Art overview infographic

Owner visual QA: **PASS / approved on 2026-10-01**.

The approved image summarizes the full five-lesson Pencil Art path in one landscape infographic:
1. Pencil Control — Lines, Pressure & Marks
2. Shade Simple Forms
3. Draw Everyday Objects
4. Texture with Graphite
5. A Pencil Portrait

Important classification:
- this image is the **Pencil Art category overview / roadmap**
- it does **not** replace the detailed instructional poster for Lesson 1
- keep the approved overview unchanged unless the owner later requests a revision
- lesson-specific posters should be simpler and give each teaching example much more space


## 7. Current generation issue and recovery rule

Observed failure on 2026-10-01:
- three image-generation attempts returned essentially the same **five-lesson Pencil Art overview**
- the first overview image was owner-approved as a category roadmap
- later near-duplicate generations are **not additional approved lesson posters**
- **Lesson 1 detail poster has not yet been successfully generated**

Root cause:
- the generation context remained dominated by the five-lesson Pencil Art overview
- retrying with the same broad context caused the model to reproduce the roadmap instead of isolating Lesson 1

Recovery rule:
1. stop after the first wrong-scope generation; do not repeatedly regenerate the same broad prompt/context
2. explicitly classify the requested asset before generation: category overview vs. lesson poster vs. reference sheet
3. for Lesson 1, include **only Pencil Control content** in the generation brief
4. reject immediately if any of Lessons 2–5 appear in the Lesson 1 image
5. use the approved landscape Pencil format
6. add the canonical logo deterministically in production; do not rely on the image model to redraw it
7. do not add the image to GitHub or mark Lesson 1 complete until owner visual QA passes

## 8. Pencil Art current asset state

- Category roadmap / overview: **APPROVED visually in chat**, landscape
- Roadmap binary asset: **not yet committed to repository**
- Lesson 1 academic content: complete on feature branch
- Lesson 1 poster: **missing / not approved**
- Lessons 2–4: plan-only, not runtime guides
- Lesson 5: existing `shade-a-pencil-portrait` content available for later refresh
- feature branch: `feature/pencil-art-foundation-20261001`
- PR: **none yet**
- production impact: **none**
