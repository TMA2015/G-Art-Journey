# Character Batch 02 — one-command import

The website and finished images remain on GitHub. The art creation files can stay temporary, outside the repository.

## Artistic direction
Original G-Art pastel-pencil infographic format: warm paper, soft color, five meaningful drawing stages of a consistent invented subject; English-first. These are five creative approaches, not rigid national/ethnic facial rules. No watermarks or borrowed quotes. Art starts in `assets/batches/character-02.json`; complete guide copy is staged in `src/data/character-guides.mjs` but intentionally not public until assets are ready.

## Portable importer for an authorized Work/desktop environment

1. Checkout branch `feat/character-batch02-pipeline` in a clean repo.
2. Place the five source posters as `manga-face.png`, `manga-figure.png`, `webtoon-character.png`, `manhua-ink-character.png`, `cartoon-shapes.png` in a temporary directory **outside** the repository.
3. Run `npm install --no-audit --no-fund`.
4. Run `npm run art:prepare -- --input /path/to/temporary/source --activate`. This creates optimized WebP files, strips metadata, checks sizes and content signatures, creates SHA-256 manifest and activates the five guides only after all posters exist. A `*.webp` source with the same slug is also accepted.
5. Run `npm test && npm run build && node scripts/verify-build.mjs && npm run audit:assets`.
6. If the Work environment has authorized git access, stage **only** `public/infographics/character/*.webp`, `src/data/content.mjs`, `src/data/character-assets.mjs`; commit and push the feature branch. Otherwise, `node scripts/push-art-batch.mjs --branch feat/character-batch02-pipeline --push` can upload those exact files atomically with an existing authorized `GH_TOKEN` or `GITHUB_TOKEN`. Do not paste a token into chat or add one to the repo.
7. Wait for PR checks, merge only after PASS, then verify the main-branch Pages deployment.

`node scripts/push-art-batch.mjs --branch feat/character-batch02-pipeline` performs a dry run without any remote write. The GitHub API upload uses Base64 blobs and one Git commit; it does **not** need a second image host.

## Safety boundary

Do not push original PNGs, RAW files, temporary exports, or a downloaded ZIP into the Git history. No new subscription, account, server or background task is required. A missing asset is a hard failure. Large images produce advisory size warnings but are not blindly blurred. If source assets are not available in the active Work session, obtain the approved files first; do not substitute unrelated images.
