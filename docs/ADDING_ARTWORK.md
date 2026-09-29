# Adding art to G-Art Journey

This is a personal gallery for a father and daughter. No account, comments, scoring, AI or direct browser uploads.

1. Upload a JPG, PNG, WebP, AVIF or SVG to `public/artworks/daughter/`, `public/artworks/dad/`, or `public/artworks/shared/` on GitHub.
2. Optionally add a matching entry in `public/artworks/artworks.json` (see example).
3. Commit the files to `main`. GitHub Actions regenerates the gallery manifest and deploys the site when Pages is configured with **GitHub Actions** as source.
4. The website lists the new artwork automatically after deployment. Do not put personal details, addresses, school names, or private photographs in this public repository.

Example metadata key: `daughter/sunlit-lake.jpg`. Available fields are `title`, `medium`, `date` (YYYY-MM-DD), `note`, and `featured`. Empty details are allowed. The example metadata entry does not create a gallery item: only real image files are included.

The curated showcase in `public/showcase/` is separate from family art. Its illustrations are original site placeholders, not attributed to family members. Replace them with artwork you are allowed to display.

## Optional bilingual captions

Personal artwork is never machine-translated. To provide separate labels for the two website languages, add any of `title_vi`, `title_en`, `medium_vi`, `medium_en`, `note_vi`, and `note_en` to its `artworks.json` entry. When a locale-specific field is absent, the original caption is shown unchanged. The image itself is never edited.
