# Draw Hair as Masses, Then Strands — production specification

Status: **artwork approved; release implementation in PR #26**

This is the third Phase 2A Core Drawing Skills item. It teaches hair as a designed 3D mass with flow and overlap before individual strands are added.

## 1. Learning outcome

A beginner should stop drawing hair as many unrelated lines. The poster should show how to build hair from:
1. skull / head volume
2. overall silhouette
3. major flow direction
4. large grouped locks and overlaps
5. selected strands and clean finishing detail

The method must work for realistic drawing and later character stylization.

## 2. Visual identity

- portrait infographic, roughly 3:4
- warm off-white paper / sketchbook background
- graphite / pencil artwork only
- pastel accents only for title bars, arrows, step numbers and tiny callouts
- concise English-only labels using simple words
- G-Art Journey logo in the upper corner, using the purple website brand as the primary identity color
- one consistent head/viewpoint through the five cumulative stages
- no decorative character portrait competing with the lesson
- no copied hairstyle or tutorial diagram

## 3. Main cumulative sequence

Use **one neutral three-quarter head** throughout Steps 1–5. The face can remain simple because hair construction is the subject.

### Step 1 — Head volume

Draw a simple head/skull mass and hairline area.

Teach:
- hair grows over the head volume
- leave a small sense of thickness above the skull
- do not paste hair directly onto the face outline

Label: **Start with the head volume**

### Step 2 — Hair silhouette

Add one clear outer hair shape.

Teach:
- establish the hairstyle’s overall mass before internal strands
- compare width, height and balance around the head
- keep the silhouette readable from a distance

Label: **Find the silhouette**

### Step 3 — Flow direction

Add a few directional guide curves from the part/crown.

Teach:
- hair follows gravity, growth direction and movement
- different regions may flow in different but connected directions
- guide lines are not finished strands

Label: **Map the flow**

### Step 4 — Group large locks

Divide the mass into a few overlapping ribbon/wedge-like groups.

Teach:
- big groups create depth
- overlaps show which lock sits in front
- edges can alternate between smooth and broken shapes

Label: **Group the locks**

### Step 5 — Add selected strands

Refine the same hairstyle with a limited number of strands and graphite accents.

Teach:
- keep most detail inside the large grouping
- add loose strands only where they support flow
- vary edge sharpness and value instead of drawing every hair
- preserve the silhouette

Label: **Add strands last**

## 4. Supporting references

The approved poster combines the five-step construction with a compact reference library. This gives beginners both a method and useful hairstyle variety without turning every example into a separate tutorial.

Use these support areas:

### A. Key tips
Keep four short reminders: big shapes first, hair has thickness, show flow from the part/crown, and do not draw every hair.

### B. Hair thickness mini-study
Use one larger side/three-quarter example so the outer hair mass clearly sits outside the skull. The approved revision must not leave the front half of the head bald.

### C. Hairstyle reference grid
Show ten distinct hairstyle examples using the same simple head language. The approved set includes short bob, long straight, wavy long, side part, curtain bangs, ponytail, twin tails, bun, braids and messy short. These are examples, not a claim that one texture or style is universal.

## 5. Mandatory hair QA

Before publication:
- same head orientation and hairstyle identity continue through Steps 1–5
- hair volume sits around the skull rather than collapsing onto it
- silhouette remains coherent as detail is added
- flow guides connect logically from part/crown through the locks
- large groups are visible before small strands
- overlaps clearly show front/back order
- no random spaghetti lines
- no impossible tangles or unexplained direction changes
- face/head anatomy remains coherent even though it is secondary
- final strand detail does not erase the large forms
- examples do not imply that one texture, gender or regional style is universal

Inspect at full resolution before release.

## 6. What to avoid

Reject the poster if:
- each step changes the hairstyle or head angle
- hundreds of strands appear before the silhouette is solved
- hair is drawn as a helmet with no directional flow
- strands ignore gravity/growth/movement without an intentional design reason
- every edge has identical line weight
- the face becomes the main visual focus
- colored hair violates the graphite-first rule
- tiny labels are unreadable on mobile

## 7. Poster text

Title:
**Draw Hair as Masses, Then Strands**

Subtitle:
**Build the silhouette and flow before drawing individual hairs.**

Five step labels:
1. Head volume
2. Hair silhouette
3. Flow direction
4. Grouped locks
5. Selected strands

Bottom note:
**Tip: squint at your reference — if the big hair shape disappears, you are drawing details too soon.**

## 8. Production method

Continuity matters more than decorative rendering.

Preferred workflow for complex infographics:
1. lock the page layout and define each panel before final rendering
2. create the important panels or examples separately when detail density is high
3. inspect each panel at full size for anatomy, continuity, text, cropping and teaching accuracy
4. reject or repair a bad panel before compositing the full infographic
5. assemble only approved panels, then perform one final whole-page QA pass
6. keep public copy English-only and simple
7. include the G-Art Journey purple logo on new infographics unless the layout gives a strong reason not to
8. preserve the approved raster source in the repository and generate the public WebP before dev/test/build

This panel-first process is preferred over asking one large AI render to solve many small detailed teaching drawings at once.

## 9. Release sequence

1. Create original structural source.
2. Inspect silhouette, flow, overlap and head continuity at full resolution.
3. Generate optimized WebP.
4. Add guide data and learning-intent record.
5. Pin source/output integrity metadata.
6. Run tests, guide audit, build and asset audit.
7. Review desktop/tablet/mobile.
8. Publish independently once it passes its own gate.


## 10. Approved implementation record

Owner-approved poster direction:
- five-step construction: Head → Big shape → Flow → Lock groups → Few strands
- four short key tips plus a corrected hair-thickness study
- ten hairstyle examples for practical reference
- warm paper, graphite/pencil drawings and light pastel accents
- purple **G-Art Journey** logo in the upper corner
- English-only wording

Repository implementation in PR #26:
- guide slug: `hair-masses`
- approved 900×1200 WebP source is pinned as base64 text at `assets/core/hair-masses.b64`
- generated 900×1200 public asset: `public/infographics/core/hair-masses.webp`
- the earlier deterministic SVG draft was rejected and removed; do not restore it.
