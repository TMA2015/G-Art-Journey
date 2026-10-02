# G-Art Journey — Phase 2 production roadmap

> **Historical roadmap with current reconciliation.** This file records the Phase 2 plan that guided early Core Drawing Skills expansion. Many planned items have since been implemented under newer titles or broader lesson series. Do not treat every unchecked roadmap concept as a missing lesson. The current gap decision is in `docs/SKILL_GAP_AUDIT.md`.

## Current reconciliation — 2026-10-03

| Original roadmap concept | Current status |
| --- | --- |
| Draw an Eye from Structure | Live |
| Draw Hands from Simple Forms | Live |
| Draw Hair as Masses, Then Strands | Live |
| Draw Fabric from Tension & Gravity | Live |
| Five Values & a Lit Sphere | **Superseded / covered by Shade Simple Forms + Graphite Values note** |
| Graphite Edges & Mark Making | **Covered by Pencil Control + Texture with Graphite** |
| Pencil Portrait: Block-in to Light & Shadow | **Live as A Pencil Portrait + Facial Features in Pencil** |
| Pencil Landscape Depth | **Live as Build Depth with Three Layers** |
| Simple Trees, Foliage & Texture | **Covered by Trees, Rocks & Clouds as Big Shapes + graphite texture work** |
| Water & Reflections in Pencil | Live |
| Layers for Beginners | **Superseded by Painting with Separate Layers (5-lesson Digital series)** |
| Simple Skin Color | **Superseded by Color a Face with Simple Layers (5-lesson Digital series)** |
| Light & Shadow on a Digital Character | **Covered inside the current Digital series** |
| Soft Color Harmony | **Still a real gap; renamed proposal: Build a Simple Color Palette** |

The current highest-priority missing foundation is **Gesture & Motion**, followed by **Feet from Simple Forms** as a support skill and **Simple Color Harmony** as a cross-medium color foundation.

The website is a father–daughter art journey, not a comprehensive art-history course. Every subject should be easy to enter independently, visually inviting and useful enough that a beginner can continue exploring on their own. No grading, login, AI judge, commerce or public critique is required.

## Completed foundation

### Human Drawing Batch 01
Face basics, expressions, head angles, age examples, figure proportions, standing figure, sitting poses and body silhouettes.

### Character Styles Batch 02 — approved stable set
Twelve illustrated guides, three each for:
- Manga
- Manhwa / Webtoon
- Manhua
- Cartoon / Comics

The two current Manhua replacements are the approved **How to Draw Manhua Movement** and **Elegant Manhua Details** posters. Do not revert to earlier versions with hand-anatomy or step-continuity issues.

## Phase 2 — Core Drawing Skills

This phase is modular rather than a compulsory course. Each poster teaches one transferable drawing idea and links to related guides.

### 2A — Observation, face, hands and fabric
1. **Draw an Eye from Structure** — lids around the eyeball, iris/pupil placement, shadow under upper lid, view changes.
2. **Draw Hands from Simple Forms** — palm block, thumb base, finger groups, joints, gesture; five digits visible when the pose shows them.
3. **Draw Hair as Masses, Then Strands** — overall silhouette, flow direction, grouped locks, selected strand detail.
4. **Draw Fabric from Tension & Gravity** — anchor/tension points, compression, hanging folds and direction of movement.

### 2B — Graphite foundations
5. **Five Values & a Lit Sphere** — value scale, light source, light family, shadow family, cast shadow and reflected light.
6. **Graphite Edges & Mark Making** — hard/soft/lost edges, hatching and pressure control.
7. **Pencil Portrait: Block-in to Light & Shadow** — head proportion, big shadow shapes, planes and selective detail.
8. **Pencil Landscape Depth** — horizon/eye level, overlap, scale change, atmospheric contrast and focal emphasis.
9. **Simple Trees, Foliage & Texture** — masses before leaves; edge and value variety.
10. **Water & Reflections in Pencil** — horizontal rhythm, reflection grouping, value control and broken edges.

### 2C — Drawing-app essentials
11. **Layers for Beginners** — sketch, base color, shadow and highlight roles; hide/show/reorder.
12. **Simple Skin Color** — base, one directional shadow, warmth and small highlights.
13. **Light & Shadow on a Digital Character** — one light source, simple form shadows and cast shadows.
14. **Soft Color Harmony** — base color, analogous/limited palettes, value and saturation checks.

## Visual language by medium

G-Art Journey keeps typography, generous spacing, warm paper and gentle editorial character across the site. The artwork itself changes with the medium.

- **Character/color lessons:** pastel color may appear inside the artwork.
- **Graphite/pencil lessons:** drawings remain monochrome graphite. Pastel is limited to headings, small labels, arrows or framing accents.
- **Digital lessons:** interface/layer concepts should stay software-neutral where possible; screenshots are optional and should not make the lesson dependent on one paid app.
- **Watercolor lessons:** preserve white paper, transparent washes and visible water behavior rather than making them look like digital painting.

## Review gate for every new poster

Before publication:
1. Academic/content check against the topic reference map.
2. Distinct learning objective check (`npm run audit:guides`).
3. Image QA: anatomy, hands/fingers, face/eyes, pose, perspective and cumulative-step continuity.
4. Rights/credit check: original G-Art art or correctly attributed public/museum reference.
5. WebP/dimension/hash verification.
6. Desktop, tablet and mobile layout check.
7. Tests, build and GitHub Pages deployment PASS.

A visually attractive image that teaches the wrong construction, changes the subject mid-process or contains anatomy errors is not publishable.
