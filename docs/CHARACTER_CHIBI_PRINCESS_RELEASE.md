# Chibi + Fairy-Tale Princess + Reference Library release

Status: **STAGED — exact 11 approved WebPs awaiting binary upload**

Branch: `feature/chibi-princess-reference-release-20261002`

## Scope

Publish one coordinated release:

- **Chibi Characters** topic: 3 lessons
- **Fairy-Tale Princess** topic: 3 lessons
- Reference Library: 5 new sheets

Use only the 11 WebPs pinned in `assets/batches/character-chibi-princess-release.json`.

## Character Art metadata

Add two `characterTopics` entries:
- `chibi` → **Chibi Characters** → cover `infographics/character/chibi-proportions.webp`
- `princess` → **Fairy-Tale Princess** → cover `infographics/character/fairy-tale-princess-design.webp`

Add exactly three `characterGuides` per group:

### chibi
1. `chibi-proportions` — **Draw Cute Chibi Proportions**
2. `chibi-faces-expressions` — **Chibi Faces & Expressions**
3. `chibi-poses-outfits` — **Chibi Poses & Outfits**

### princess
1. `fairy-tale-princess-design` — **Design a Fairy-Tale Princess**
2. `princess-hair-dress-details` — **Princess Hair, Dress & Royal Details**
3. `graceful-princess-poses` — **Graceful Princess Poses**

Preserve the existing Character Art hierarchy and standalone lesson route behavior.

## Reference Library metadata

Keep the four core collections unchanged:
- poses
- motion
- hair
- clothing

Add two style filters:
- `chibi` → **Chibi**
- `princess` → **Fairy-Tale Princess**

Add exactly five items:
- Hair / princess → **Princess Hairstyles & Accessories**
- Clothing / princess → **Princess Dress Library**
- Clothing / chibi → **Chibi Clothing Library**
- Motion / chibi → **Chibi Pose & Motion Library**
- Hair / chibi → **Chibi Hair Library**

Expected Reference Library count after release: **23**.

## Release gate

Before merge:
1. verify all 11 binary hashes, dimensions and paths against the manifest
2. update asset manifests/tests so binaries are pinned
3. update Character Art and Reference Library tests for new groups/styles/counts
4. run full `npm test`
5. run guide distinctness audit
6. run production build + English legacy alias verification
7. run asset/image budget audit
8. inspect generated HTML for the two new topic shelves, six lesson pages and five Reference Library cards
9. merge only after all checks pass
10. verify Pages build + deploy after merge

Do not regenerate, crop, resize, rebrand or substitute any artwork.
