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

## Deployment state

- PR #33 merged to `main` as `4bccdf87c95b384b3e872bda0ebcbee71d550d58`; main Pages workflow #123 passed.
- PR #34 merged to `main` as `cfa7ab8b2d8fbf80e3f8effc7a000df0fbbb4023`; main Pages workflow #125 passed.
- Code/build/deployment gates are green.
- Final release gate still open: visually inspect the actual website cards after browser refresh and confirm logo presence/readability plus no title/content cropping.
- Fabric remains paused until this visual gate passes.

## Resume order

1. Refresh the deployed website after workflow #125.
2. Confirm Hands card: full poster, readable upper-left logo, no crop.
3. Confirm Eye card: canonical upper-left brand band visible, no teaching content crop.
4. Confirm Hair card: canonical upper-left brand band visible, title untouched, tiny legacy mark no longer visible.
5. If all three pass, close this remediation in the master handoff and resume Fabric.
6. If any fail, hotfix the deterministic compositor only; do not regenerate approved artwork.
