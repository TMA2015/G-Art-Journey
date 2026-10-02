# SG-01 — Skill Gap Release

**Status:** staging complete; approved binary upload pending  
**Date:** 2026-10-03

## Scope

Three owner-approved transferable foundation lessons:

1. **Draw Gesture & Motion from Simple Lines**
   - slug: `gesture-motion-basics`
   - category: Core Drawing / Figure
   - Learning Paths: Draw People core; Create Characters support

2. **Draw Feet from Simple Forms**
   - slug: `feet-simple-forms`
   - category: Core Drawing / Figure
   - Learning Paths: Draw People Explore more; Create Characters support

3. **Build a Simple Color Palette**
   - slug: `simple-color-harmony`
   - category/filter: Color Basics
   - Learning Paths: Create Characters support; Watercolor Explore more; Digital Art Explore more

## Architecture boundaries

- Do not add Gesture or Feet to the fixed Human Drawing 2-topic / 8-lesson shelf. They are reusable Core Drawing support lessons.
- Do not add Color Palette to either Digital 5-lesson series.
- Do not add Color Palette as a required seventh Watercolor step.
- `Color Basics` is a light catalog filter for cross-medium color foundations, not a new top-level curriculum area.
- Existing URLs, Character Art hierarchy and Reference Library remain unchanged.

## Approved binary contract

Pinned in:
- `assets/batches/sg01-release.json`

Exactly three supplied WebPs must be used unchanged:
- `public/infographics/core/gesture-motion-basics.webp`
- `public/infographics/core/feet-simple-forms.webp`
- `public/infographics/color/simple-color-palette.webp`

No regeneration, crop, resize, logo replacement, recolor or alternative artwork.

## Release gate

Before merge:
1. exact WebP SHA-256 / byte-size / dimension verification
2. full `npm test`
3. `npm run audit:content`
4. guide distinctness audit
5. production build
6. route verification for all three lesson pages
7. Learning Paths verification
8. Color Basics filter verification

After deploy, owner desktop/iPad QA:
- each poster readable at normal lesson-page width
- View large / Save WebP work
- Gesture appears between Figure Proportions and Standing Figure in Draw People
- Feet appears only under Explore more/support
- Color Palette appears as optional support in Character, Watercolor and Digital paths
- Digital remains 2 × 5 lessons
- Watercolor remains 6 core steps
