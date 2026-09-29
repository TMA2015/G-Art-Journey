# GitHub-first image budget

The audit is advisory. It never deletes, recompresses or rejects a drawing automatically.

| Group | Soft warning for one image |
|---|---:|
| public/artworks (family web versions) | 1 MiB |
| public/showcase | 512 KiB |
| public/infographics | 1 MiB |
| other images | 1 MiB |
| built website total | 200 MiB |

Plan a storage discussion when the built site approaches 500 MiB. These are **project thresholds**, not new GitHub Pages limits. Image legibility takes precedence over a small target.

## How it works

Every GitHub Actions build invokes `npm run audit:assets` after the site build, before uploading Pages. The job summary shows the image count, image size by folder, published site size, eight largest images and any soft warnings. When GitHub API is available it also reports the approximate repository size; Git history may accumulate even when current image files are replaced.

No extra account, external storage provider, paid service, credential, background database, or image CDN is needed.

## Preparing a drawing for the family gallery

- Export one **web version** (JPEG/WebP for a paper drawing or PNG if it genuinely needs transparency). Keep it around 1200–1600 pixels on the longer side; use slightly more only when small pencil details need it.
- Aim for clear lines rather than high resolution for its own sake. Use a larger file if necessary, even if the advisory audit flags it.
- Do not store PSD/Procreate originals, phone RAW files or multiple oversized versions in the public repository.
- Remove unnecessary EXIF/GPS information, names, school details or other private information before uploading.
- Upload the image to `public/artworks/daughter/`, `dad/` or `shared/` using GitHub. The gallery discovers it on the next deployment.
- Do not replace an existing large image repeatedly merely to experiment with compression: Git retains historical objects.

## Future migration boundary

Only if the actual gallery/site needs it, consider moving image URLs (not site pages) to another simple, free-friendly provider. The current design stays on GitHub and does not initiate a storage migration.
