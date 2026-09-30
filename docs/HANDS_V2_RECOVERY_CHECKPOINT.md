# G-Art Journey — Hands v2 Recovery Checkpoint

_Last verified: 2026-09-30_

Purpose: durable recovery point for the in-progress **Hands v2 visual refresh**. Read this file together with `docs/PROJECT_MASTER_HANDOFF.md` before resuming if a chat/stream is interrupted.

## Confirmed repository state

- Repository: `TMA2015/G-Art-Journey`
- Main at checkpoint start: `71a4e065a364490cc6b61a3972ebe6f055b8f5da`
- Working branch: `core/hands-v2-20260930`
- Draft PR: **#29 — Refresh Hands poster to Phase 2 visual baseline**
- PR #29 preparation head before this checkpoint: `feec3cd4b24748487b2a83c1e84b35b13b4ed824`
- CI run #90 passed on that preparation head.
- Live site still uses the old Hands poster. No Hands v2 artwork has been published yet.

## Decisions already approved by owner

### Project-wide visual rules
- Hair is the current minimum visual-quality baseline for Phase 2.
- New infographics use the canonical purple **G-Art Journey** logo/lockup at upper-left by default.
- Reuse the repository logo asset; do not ask an image model to redraw the logo for each poster.
- Dense/anatomy-heavy posters use panel-first QA.
- Public artwork copy is English-only and uses short common words.

### Hands v2
The owner approved the generated Hands v2 infographic shown in the current project chat.

Approved composition contains:
- five-step hand construction sequence
- four key-point studies
- ten practical hand-pose examples
- warm paper / graphite / pastel G-Art visual language
- G-Art Journey identity at upper-left

Known accepted imperfection:
- the **Finger structure** mini-study says each finger has **3 segments**, while the visual subdivision can read as four sections.
- Owner explicitly approved the poster without requiring regeneration for this small issue.
- Record this as an owner-approved known imperfection; do not regenerate the whole poster solely for it.

## Files already committed on PR #29

- `public/branding/g-art-lockup.svg`
  - canonical purple G-Art Journey poster lockup
- `docs/HANDS_FROM_SIMPLE_FORMS_AUTHORING.md`
  - Hands v2 visual-refresh layout
  - Hair quality baseline
  - panel-first production / QA rules

## Not yet done at this checkpoint

- approved Hands v2 raster artwork has **not yet been committed**
- core asset manifest still points Hands to the old SVG source
- public Hands WebP has **not yet been replaced**
- no updated Hands source/hash/dimensions have been pinned yet
- no final Hands v2 release tests have run
- PR #29 is still draft and unmerged
- Eye v2 has not started
- Fabric remains paused after its authoring brief

## Exact resume order

1. Verify PR #29 and branch state before any write.
2. Preserve the owner-approved Hands v2 artwork; do not regenerate it.
3. Normalize poster branding with the canonical repository lockup if technically needed without altering approved teaching artwork.
4. Inspect the full-resolution composite and all practical pose studies for obvious anatomy failures.
5. Record the accepted Finger-structure imperfection in the Hands authoring/release record.
6. Commit the approved raster source and pin source integrity metadata.
7. Generate/replace `public/infographics/core/hands-simple-forms.webp` for the existing slug.
8. Keep the existing Hands guide URL/slug and academic guide content unchanged.
9. Run repository tests, guide audit, build and asset checks.
10. If CI passes, mark PR #29 ready and merge it.
11. Verify the main Pages deployment.
12. Only then start **Eye v2**.
13. Resume Fabric after Hands v2 and Eye v2 establish one coherent Phase 2 visual row.

## Recovery rule

If another stream timeout occurs, do **not** repeat the previous write blindly. Read:
1. `docs/PROJECT_MASTER_HANDOFF.md`
2. this checkpoint
3. PR #29 state / current branch SHA / CI

Continue only from the last confirmed repository state.
