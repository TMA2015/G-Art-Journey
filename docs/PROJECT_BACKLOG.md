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
**Status:** Implemented / live — owner visual QA pending  
**Priority:** Closing

Review the live Start Here experience after SG-01:
- Draw People now has 9 core steps; check whether grouping into stages improves scanability without removing content
- Create Characters now has 7 optional support guides; check whether grouping by purpose reduces visual/cognitive clutter
- keep Feet and Color Palette optional
- preserve Digital Art 2×5 and Watercolor 6 core steps
- prefer UX grouping and clearer labels over creating more lessons

Implementation is live through PR #71. Keep new content paused only until the owner confirms the grouped Start Here presentation on desktop/iPad.


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
