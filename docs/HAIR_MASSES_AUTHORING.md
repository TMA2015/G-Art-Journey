# Draw Hair as Masses, Then Strands — production specification

Status: **authoring ready; artwork not yet published**

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
- concise English labels
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

## 4. Supporting mini-studies

Use up to three small studies:

### A. Part and crown
Show two simple direction maps from a center/side part.

### B. Overlap
Show two or three lock groups crossing so front/back order is obvious.

### C. Straight vs. wavy flow
Compare the same mass logic with different curve rhythms; do not present one hair type as the default.

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

Preferred workflow:
1. use one deterministic head guide and hairstyle silhouette for the full cumulative sequence
2. add vector/graphite flow guides, grouped locks and selected strands in layers
3. keep the source editable in the repository
4. generate the public WebP deterministically before dev/test/build
5. use AI-generated reference only when it preserves the same subject and passes anatomy/continuity QA

## 9. Release sequence

1. Create original structural source.
2. Inspect silhouette, flow, overlap and head continuity at full resolution.
3. Generate optimized WebP.
4. Add guide data and learning-intent record.
5. Pin source/output integrity metadata.
6. Run tests, guide audit, build and asset audit.
7. Review desktop/tablet/mobile.
8. Publish independently once it passes its own gate.
