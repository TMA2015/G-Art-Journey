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

## Owner approval / current state

The owner approved the newly generated full Eye v2 poster in the project chat on **2026-09-30**.

Important:
- preserve the approved artwork; do not regenerate it
- the earlier full-page concept remains non-release
- the newly approved poster is the release candidate
- record its owner-approved visual exceptions in `docs/EYE_STRUCTURE_AUTHORING.md`

## Exact resume order

1. Verify this branch and current HEAD before any write.
2. Preserve the approved Eye v2 poster exactly.
3. Store/pin the approved raster source, dimensions and source hash.
4. Generate the public WebP without cropping away teaching content.
5. Keep slug, URL and academic guide content unchanged.
6. Switch the core asset manifest from the old Eye SVG to the approved raster source.
7. Remove/supersede the old Eye SVG source only after the raster source is safely pinned.
8. Run repository tests, guide audit, build and asset audit.
9. If CI passes, mark PR #31 ready and merge it.
10. Verify the main Pages deployment.
11. Update the master handoff to Eye v2 completed/live.
12. Resume Fabric only after Eye v2 release is complete.

## Release implementation progress

Completed after owner approval:
- approved 1024×1536 poster preserved as high-quality WebP source
- source split into eight repository base64 chunks
- source size pinned at **495,832 bytes**
- source SHA-256 pinned as `37526ddfcbe1181641193fe951e9940714916f2a518085ddb7ec3846fac78de2`
- core manifest switched from the superseded Eye SVG to the approved raster source
- public target set to **900×1350** to preserve the full 2:3 composition without cropping
- Eye guide metadata now declares the matching 900×1350 poster dimensions
- superseded `assets/core/eye-structure.svg` removed

Still pending:
- final PR CI on the completed source
- merge PR #31 if CI passes
- verify main Pages deployment
- update master handoff to Eye v2 completed/live
- only then resume Fabric

## Recovery rule

If another stream timeout occurs, verify branch SHA / PR / CI first and continue from the last confirmed step. Do not repeat writes blindly and do not promote the non-release full-page concept.
