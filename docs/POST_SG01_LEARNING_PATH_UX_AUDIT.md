# Post-SG-01 Learning Paths UX Audit

**Status:** PROPOSAL FOR OWNER REVIEW  
**Date:** 2026-10-03  
**Scope:** live `/start-here/` after SG-01

## 1. What changed

SG-01 added:
- Gesture & Motion as a new Draw People core lesson
- Feet as an optional Draw People support lesson
- Gesture, Feet and Simple Color Palette as Create Characters support choices
- Simple Color Palette as optional support for Watercolor and Digital Art

The six-path structure still works. The main new UX risk is **scanability**, not missing content.

## 2. Finding A — Draw People is now long, but not overbuilt

Current core route has 9 lessons:
1. Face Basics
2. Facial Expressions
3. Head Angles
4. Figure Proportions
5. Gesture & Motion
6. Standing Figure
7. Sitting Poses
8. Hands
9. Hair

All nine still have a clear role. Removing one would weaken the learning sequence more than it would simplify the page.

### Recommendation

Keep all 9, but divide them into **3 visible stages**:

#### Stage 1 — Face & Head
- Draw a Face in Five Steps
- Five Everyday Facial Expressions
- Turn a Head: Five Useful Views

#### Stage 2 — Figure & Motion
- Understand Simple Figure Proportions
- Draw Gesture & Motion from Simple Lines
- Draw a Standing Figure Step by Step
- Five Relaxed Sitting Poses

#### Stage 3 — Finish the Figure
- Draw Hands from Simple Forms
- Draw Hair as Masses, Then Strands

This makes the learner see **3 manageable chunks** instead of one 9-item list.

### Explore more should also be grouped

**Face details**
- Draw an Eye from Structure
- Facial Features in Pencil
- A Pencil Portrait
- Faces at Different Ages

**Figure extras**
- Body Shapes and Character Silhouettes
- Draw Feet from Simple Forms
- Draw Fabric from Tension & Gravity

## 3. Finding B — Create Characters support is useful but visually dense

Current optional support has 7 guides. They are all valid, but a flat grid makes the learner compare unrelated needs at once.

### Recommendation

Keep all 7, grouped by purpose:

#### Pose & Motion
- Draw Gesture & Motion from Simple Lines
- Draw a Standing Figure Step by Step

#### Anatomy
- Draw Hands from Simple Forms
- Draw Feet from Simple Forms

#### Hair & Clothing
- Draw Hair as Masses, Then Strands
- Draw Fabric from Tension & Gravity

#### Color
- Build a Simple Color Palette

The learner then answers a simpler question:
**“What does my character need help with?”**

## 4. Other paths

### Drawing Basics
4 steps. No change.

### Draw Places
5 steps. No change.

### Watercolor Basics
6 core steps + 1 optional palette lesson. No change.

### Digital Art Basics
2 series × 5 lessons + optional palette lesson. No change.

## 5. Page architecture

Do **not** add:
- tabs
- accordions
- locked stages
- progress bars
- completion checkboxes
- another top-level navigation layer

The current page already passed desktop and iPad QA. A small visual hierarchy improvement is enough.

## 6. Proposed data change

Prefer metadata, not hard-coded page conditions.

For Draw People:
- add a `stage` field to each core step
- add grouped explore metadata

For Create Characters:
- replace one flat `supportGuides` list with grouped support metadata

The renderer should read these structures generically so future paths can use grouping without special-case code.

## 7. Proposed UI treatment

Stage headers should be subtle:
- small uppercase eyebrow
- one short helper sentence
- no extra large illustration
- preserve existing lesson cards

Suggested labels:
- **STAGE 1 / FACE & HEAD**
- **STAGE 2 / FIGURE & MOTION**
- **STAGE 3 / FINISH THE FIGURE**

Support groups:
- **POSE & MOTION**
- **ANATOMY**
- **HAIR & CLOTHING**
- **COLOR**

## 8. Release boundary

This is a **UX organization pass only**.

Do not change:
- lesson order
- lesson copy
- artwork
- route structure
- Digital 2×5
- Watercolor six core steps
- Human Drawing 2 topics / 8 lessons
- Character Art 6 topics × 3 lessons

## 9. Recommendation

Implement the grouping pass before any new content batch.

Expected benefit:
- same content
- lower visual/cognitive load
- clearer learning progression
- no new artwork or curriculum expansion
