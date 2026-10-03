# Pencil landscape refresh — reuse the existing guide

The original landscape infographic depicts a peaceful mountain/river scene in the approved pastel graphite format. Its five-step drawing demonstration covers horizon, big shapes, near/far layers, shading and a finished scene. **Do not add a second mountain/lake card.** It belongs on the existing `draw-a-pencil-landscape` guide.

The separate `street-with-depth` lesson concerns one-point street perspective, so do not attach a mountain poster to that lesson just to fill a missing thumbnail. It remains text-only until a correct street drawing meets the art standard.

## Work integration: one batch, zero manual GitHub uploads

Portable artwork snapshot `G-Art-Next-Art-Pack.zip` contains the optimized `landscape-basics.webp` and two Character Styles seed WebPs. Import this file into an authorized Work/desktop environment; **keep the ZIP and original PNGs out of the Git repository**.

Place the exact landscape WebP under `public/infographics/landscape/landscape-basics.webp` on a feature branch. Run `node scripts/activate-landscape-poster.mjs --check` and then `node scripts/activate-landscape-poster.mjs --activate`. Both verify size, SHA-256, format and dimensions. Activation updates the existing guide to use the poster with full-size / download actions, not a new route. Run `npm test && npm run build && node scripts/verify-build.mjs && npm run audit:assets && npm run audit:guides`, commit only the WebP and amended guide source, let PR checks pass, then merge and verify GitHub Pages. Never publish a missing or mismatched image.

The two manga WebPs in the portable pack remain staged until all five original Character Batch 02 illustrations are available and the full importer passes. Use `assets/batches/character-02.json` for their intended focus; don't repeat Face Basics or Standing Figure.
