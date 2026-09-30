# G-Art Journey — Eye v2 Recovery Checkpoint

_Last verified: 2026-09-30_

Purpose: durable recovery point for the active **Eye v2 visual refresh**. Read this file together with `docs/PROJECT_MASTER_HANDOFF.md` and `docs/EYE_STRUCTURE_AUTHORING.md` before resuming after any interrupted stream.

## Confirmed repository state

- Repository: `TMA2015/G-Art-Journey`
- Main baseline at Eye v2 start: `811f2b2906801f1be34b3e42e298260f3a845b3e`
- Working branch: `core/eye-v2-20260930`
- Hands v2 is already released and live.
- Hair remains the earlier Phase 2 finish benchmark; Hands v2 now joins it as the practical density/finish reference.
- Fabric remains paused until Eye v2 is complete.

## Locked Eye v2 decisions

- Keep slug `eye-structure`, guide URL, academic guide data and sphere → lid wrap → iris/pupil → thickness/shadow → clean-eye logic unchanged.
- Use panel-first QA.
- Main five-step construction is the first independent artwork unit.
- Use neutral graphite structural drawing; pastel only for editorial accents.
- Avoid beauty/makeup or manga-eye framing.
- Reserve the upper-left area for the canonical repository lockup; do not generate a replacement logo.
- Wording must avoid rigid universal claims where eye anatomy varies.

## Non-release concept already created

A first full-page concept was generated before this checkpoint. It is **layout reference only**, not a release candidate.

Useful layout idea:
- five-step main sequence
- four key studies
- ten eye-view examples
- short practice tips

Reasons it is not releasable:
- five-step continuity is not strict enough
- some wording is too absolute
- practical examples lean too strongly toward a beauty/feminine eyelash treatment
- dense text needs simplification for mobile

Do not upload or wire that concept to production.

## Exact resume order

1. Verify this branch and current HEAD before any write.
2. Create the five-step main-eye group only.
3. Inspect continuity, lid wrap, iris/pupil, shadow/highlight and viewpoint at full resolution.
4. Repair/reject failures before moving on.
5. Create four key structural studies.
6. QA those studies independently.
7. Create practical eye-view references in small groups.
8. QA all references.
9. Composite only approved studies and add the canonical logo.
10. Ask owner to approve the final Eye v2 poster.
11. Only after approval: pin source integrity, switch the core asset manifest, remove/supersede the old Eye source as appropriate, run CI, merge and verify Pages.
12. Resume Fabric only after Eye v2 release is complete.

## Recovery rule

If another stream timeout occurs, verify branch SHA / PR / CI first and continue from the last confirmed step. Do not repeat writes blindly and do not promote the non-release full-page concept.
