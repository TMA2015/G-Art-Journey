# G-Art Journey — Project Backlog

_Last updated: 2026-10-02_

This file tracks deferred or upcoming work that should not interrupt the current approved task. Historical release details belong in the master handoff, not here.

## Active proposal

### Start Here / Learning Paths
**Status:** Completed / live on 2026-10-02  
**Priority:** Closed

Purpose:
- help a new learner answer “What should I learn next?”
- organize the existing library without locking lessons
- reuse current artwork and routes before creating more content

Proposal:
- `docs/LEARNING_PATHS_PLAN.md`
- six initial paths: Drawing Basics, Draw People, Create Characters, Draw Places, Watercolor Basics, Digital Art Basics
- Reference Library remains an optional support tool

Implemented at `/start-here/` after owner approval. Keep future changes within the approved principle: suggested routes, never locked curriculum.

## Learn to Draw — future content

### Learning-material visual refresh
**Status:** Creative production complete; integration/release next  
**Priority:** Highest

Plan:
- `docs/LEARNING_MATERIAL_REFRESH_BACKLOG_20261003.md`
- `docs/CLEAR_MANHUA_COMPANION_PLAN_20261003.md`

Replace:
- Digital Art Set A Lessons 1, 2, 3, 5 — **4/4 replacement posters approved**

Add:
- Simple Princess companion: **3/3 beginner posters approved**
- Clear Manhua companion: **3/3 posters approved**

Keep:
- Digital Lesson 4 as visual benchmark
- existing Princess and Manhua lessons

Release:
- hold all new/replacement assets until the whole refresh batch is approved
- combine with already approved DP-01 Built Spaces assets for one controlled website update


### Combined refresh integration / release
**Status:** NEXT  
**Priority:** Highest

Approved source assets are complete:
- Digital Art replacements: 4
- Simple Princess companion: 3
- Clear Manhua companion: 3
- DP-01 Built Spaces: 3 poster files across 2 lessons

Next work:
- prepare exact production WebPs
- integrate content/metadata/navigation
- reconcile lesson/topic counts and descriptions
- full tests + content audit + distinctness audit + production build
- controlled deploy
- owner desktop/iPad QA

Do not create more posters for this batch unless integration exposes a real learning gap.

### Full learning-material quality audit
**Status:** Completed baseline / quality correction staged  
**Priority:** Active

Audit:
- `docs/LEARNING_MATERIAL_QUALITY_AUDIT_20261003.md`

Immediate correction:
- keep Soft Sky / Cloud Washes as Watercolor core
- move Sky Wash Practice & Variations to optional Practice
- keep Build a Simple Color Palette under optional Color planning

Known watch items:
- Digital approved posters are denser than the current preferred poster family; no redesign without owner instruction
- Gesture & Motion is approved but not a best-in-class visual benchmark
- six Human Drawing posters need exact width/height verification before metadata cleanup

### DP-01 Built Spaces
**Status:** 2/2 lessons approved; pending combined integration  
**Priority:** High

Plan:
- `docs/DP01_BUILT_SPACES_PLAN.md`

Lessons:
1. Draw Boxes & Corners in Two-Point Perspective
2. Draw a Simple Room from Boxes

Production rule:
- create Lesson 1 pilot first
- owner QA before Lesson 2
- initial placement under Draw Places Explore more


### Reference Library style expansion
**Status:** Foundation complete; future expansion deferred

Current live state:
- 23 approved reference sheets
- collections: Poses, Motion, Hair, Clothing
- published style filters with assets: General / Natural, Chibi, Fairy-Tale Princess

Reserved style families that may receive future reference sheets:
- Manga
- Manhwa / Webtoon
- Manhua

Do not fill these filters merely to make the matrix look complete. Add a reference sheet only when it supplies useful visual vocabulary not already covered.

### Skill-gap audit
**Status:** Completed and released as SG-01

Audit:
- `docs/SKILL_GAP_AUDIT.md`

Findings:
- **Gesture & Motion Basics** — highest-priority true gap
- **Feet from Simple Forms** — medium-priority anatomy/support gap
- **Simple Color Harmony / Build a Simple Color Palette** — real cross-medium gap
- two-point / room perspective — useful later, not required by current paths
- general illustration composition — defer until a finished-illustration path exists
- negative space / sighting — integrate into existing observational exercises rather than create a standalone lesson now

Explicit non-gap:
- Light & Value is already covered strongly by Shade Simple Forms + Graphite Values + portrait/digital reinforcement.

SG-01 is live: Gesture & Motion, Feet from Simple Forms and Build a Simple Color Palette. Owner desktop and iPad QA passed; SG-01 is fully closed.

## Product / UX

### Post-SG-01 Learning Paths UX audit
**Status:** Completed / owner QA PASS  
**Priority:** Closed

Review the live Start Here experience after SG-01:
- Draw People now has 9 core steps; check whether grouping into stages improves scanability without removing content
- Create Characters now has 7 optional support guides; check whether grouping by purpose reduces visual/cognitive clutter
- keep Feet and Color Palette optional
- preserve Digital Art 2×5 and Watercolor 6 core steps
- prefer UX grouping and clearer labels over creating more lessons

Implementation is live through PR #71 and owner visual QA passed. This UX pass is closed.


### Lesson-level path continuity
**Status:** Completed / live  
**Priority:** Closed

Learning Paths now organize discovery well, but standalone guide pages still do not consistently show where a learner can go next.

Evaluate a lightweight, stateless footer for eligible lessons:
- return to Start Here / relevant path
- show one suggested next lesson when the lesson belongs to a clear core sequence
- show optional “Explore more” only when it genuinely helps
- do not add accounts, checkboxes, streaks, locked prerequisites or saved progress
- do not disturb the existing Digital Art previous/next lesson navigation

Prefer path metadata as the source of truth rather than hard-coded lesson-page links.

### Learning-path progress tracking
**Status:** Deferred

Do not add accounts, streaks, badges, locked prerequisites or progress percentages in Learning Paths v1. First confirm that suggested paths are useful without extra state.

### Vietnamese public release
**Status:** Deferred

English remains the active public language. Existing Vietnamese source material may support a future independently reviewed release; do not auto-translate live learning content.

## Visual / Home

### Replace the original G-Art Showcase image set
**Status:** Closed / superseded on 2026-10-01  
**Priority:** None for homepage

Owner decision:
- the five original G-Art Showcase topics were removed from the homepage hero
- the homepage hero now focuses on Explore Art and My Art
- old showcase assets remain only where still needed for compatibility or secondary pages
- do not replace them quickly with merely adequate substitutes

If a future redesign needs a new coordinated showcase set, create it as a dedicated visual project with the current Illustration Standard and anatomy QA.

## Completed foundations

These items should no longer appear as active backlog work:
- Human Drawing topic hierarchy
- Character Art topic hierarchy
- Digital Art standalone lesson hierarchy
- Reference Library foundation and first 23 approved sheets
- Chibi Characters 3-lesson topic
- Fairy-Tale Princess 3-lesson topic
- content consistency audit + permanent CI gate
- dynamic current collection counts / stale-copy regression protection
