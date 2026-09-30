# G-Art Journey — Core Poster Branding Recovery Checkpoint

_Last verified: 2026-09-30_

Purpose: durable checkpoint for the Hands / Eye / Hair branding remediation discovered through real website screenshots.

## Confirmed problem

The owner-approved project rule already requires a readable canonical purple **G-Art Journey** lockup on new infographics.

Website QA found:
- **Hands v2:** approved source contains the logo, but the generated 900×1200 WebP cropped the 1024×1536 source from 2:3 to 3:4, removing the logo from the public card image.
- **Eye v2:** approved source and released public WebP contain no canonical G-Art Journey logo.
- **Hair:** a small right-side logo exists, but it is too small to function reliably as branding on the actual guide card.

Root cause for Hands:
- `scripts/build-core-assets.mjs` used `sharp.resize(width,height)` with default cover behavior.
- Different source/output aspect ratios therefore cropped approved artwork.

## Locked fix

Do **not** regenerate any approved artwork.

- Hands: preserve the full 2:3 artwork and publish at 900×1350; its approved source logo remains intact.
- Eye: preserve approved eye artwork and add the canonical repository lockup in a deterministic top brand band.
- Hair: preserve approved hair artwork; cover only the tiny legacy mark area with a small paper plate, then add the canonical lockup in a new upper-left brand band so title artwork is never covered.
- Build pipeline: all core posters use `fit:'contain'` / explicit aspect-preserving composition. No implicit crop.
- Public QA: inspect generated WebP and actual website card rendering, not source alone.

## New durable rule

Artwork approval does not waive project branding rules unless the owner explicitly approves an exception.

## Working branch

`fix/core-poster-branding-20260930`

## Resume order

1. Verify branch SHA and current CI state.
2. Run the updated core poster build.
3. Confirm Hands = 900×1350 with visible source logo.
4. Confirm Eye = 900×1450 with readable canonical upper-left brand band.
5. Confirm Hair = 900×1300 with readable canonical upper-left brand band and no visible tiny legacy mark.
6. Inspect website card rendering for all three.
7. If all pass, merge and verify GitHub Pages.
8. Update master handoff to close remediation.
9. Resume Fabric.
