# G-Art Journey — Learning Material Quality Audit

**Date:** 2026-10-03  
**Status:** CURRENT QUALITY BASELINE  
**Scope:** 53 active learning guides, 6 Learning Paths, 23 Reference Library sheets

## 1. Executive conclusion

The current library is no longer in a “fill the gaps everywhere” stage.

It has:
- 53 active guides
- 53/53 guides with published WebP artwork
- no active `artPending` guide
- 23 Reference Library sheets
- 6 Character Art topics
- 2 Digital Art series
- a complete Start Here → Path → Lesson → Continue Learning loop
- automated content-consistency and distinctness gates

The next phase should be **selective refinement + small expansion**, not volume growth.

## 2. Technical quality baseline

Current release checks:
- 103/103 tests PASS at lesson-continuity PR gate
- content consistency PASS: 53 active guides / 6 Character topics / 2 Digital topics / 23 reference sheets
- distinctness audit: 53 guides / 0 high-overlap pairs at the current blocking threshold
- 214-page production build
- 66 canonical routes + legacy aliases
- image-budget audit PASS

Asset state:
- all 53 active guide cover/poster assets are WebP
- no active guide is waiting for artwork

Technical debt:
- 6 Human Drawing posters do not currently carry explicit `posterWidth` / `posterHeight` metadata:
  - Five Everyday Facial Expressions
  - Turn a Head: Five Useful Views
  - Faces at Different Ages
  - Draw a Standing Figure Step by Step
  - Five Relaxed Sitting Poses
  - Body Shapes and Character Silhouettes

The site currently uses fallback dimensions, so this is not a broken-route issue. Exact source dimensions should be verified from the binaries before metadata is patched; do not guess dimensions.

## 3. Instructional quality by learning area

### Drawing Basics — STRONG / HOLD

Current route:
1. Pencil Control
2. Shade Simple Forms
3. Draw Everyday Objects
4. Texture with Graphite

Strengths:
- clear simple-to-complex sequence
- line control → form/value → observation/application → surface vocabulary
- no unnecessary fifth lesson

Decision:
- no new core lesson now
- negative space / sighting may be integrated into future observation exercises rather than added as a formal standalone poster

### Draw People — STRONG / HOLD AFTER SG-01

Current core:
- Face & Head
- Figure & Motion
- Finish the Figure

SG-01 closed the main gaps:
- Gesture & Motion
- Feet
- simple color support

Strengths:
- strong construction-first progression
- dedicated hands, eye, hair, fabric, feet and gesture support
- grouped path now lowers cognitive load

Known visual note:
- Gesture & Motion is owner-approved but explicitly **acceptable rather than an ideal visual benchmark** after the continuity correction
- keep it live; do not use it as the quality target for future posters

Decision:
- no new anatomy batch now

### Character Art — STRONG / DO NOT ADD ANOTHER TOPIC YET

Current topic lessons:
- Manga 3
- Manhwa / Webtoon 3
- Manhua 3
- Cartoon / Comics 3
- Chibi 3
- Fairy-Tale Princess 3
- plus Character Face Design Lab

Semantic overlap review:
- style variation lessons share vocabulary by design, but their learning intent remains distinct
- the current 53-guide distinctness audit reports zero high-overlap pairs
- Manga / Webtoon / Manhua notes appropriately avoid presenting broad visual families as fixed national formulas

Decision:
- do not add another Character Art topic now
- future expansion should favor references or transferable skills rather than more style shelves

### Digital Art — ACADEMICALLY SOUND / VISUAL STYLE WATCH

Current structure:
- Painting with Separate Layers — 5 lessons
- Color a Face with Simple Layers — 5 lessons

The two series intentionally overlap:
- Series 1 = general layer workflow
- Series 2 = application to one face

This is **productive repetition**, not duplicate curriculum.

Known visual-design note:
- owner previously observed that several Digital posters are denser / more block-heavy than the later preferred Character poster family
- the approved 10 Digital WebPs remain valid and readable after standalone lesson pages were added
- they should **not** be treated as the current visual benchmark for new poster design

Decision:
- do not redesign approved Digital artwork without explicit owner approval
- no new layer lesson needed

### Watercolor — ONE REAL REDUNDANCY TO CORRECT

Strong core:
- First Flower
- Wet-on-Wet & Wet-on-Dry
- Leaves & Botanical Shapes
- Soft Sky / Cloud Washes
- Small Watercolor Landscape

Quality concern:
- **Soft Sky / Cloud Washes**
- **Sky Wash Practice & Variations**

These two lessons currently have very similar teaching sequences:
- wet sky area
- add blue / warm color wet-on-wet
- lift clouds
- keep edges soft
- dry and add a few details

Their semantic similarity is the highest pair in the current full-guide comparison.

The second poster still has value because it presents multiple sky moods, but pedagogically it works better as **practice / variation**, not another required core step.

Recommended correction:
- keep both lessons live
- move **Sky Wash Practice & Variations** from Watercolor core to **Explore more / Practice**
- keep **Soft Sky / Cloud Washes** as the main sky-technique core lesson
- optionally polish the practice lesson copy later to emphasize controlled comparison among clear / sunset / overcast / evening skies

This reduces repetition without deleting approved material.

### Draw Places — STRONG BEGINNER CORE / BEST NEXT EXPANSION

Current route:
- big natural shapes
- depth layers
- one-point street perspective
- water/reflections
- complete landscape composition

The current route is good for outdoor scenes and beginner depth.

Real extension gap:
- corners / boxes in two-point perspective
- simple rooms / furniture as box-based constructions

Decision:
- this is the strongest next expansion area
- keep it optional at first rather than making the five-step beginner route longer immediately

### Color Basics — ADEQUATE FOUNDATION / HOLD

Build a Simple Color Palette closes the current cross-medium gap:
- hue
- value
- saturation
- dominant/support/accent relationships

Decision:
- keep as optional support for Character, Watercolor and Digital
- do not create a large “color theory course” yet

## 4. Reference Library quality

Current inventory:
- Poses: 3
- Motion: 7
- Hair: 4
- Clothing: 9
- Total: 23

Current live style coverage:
- General / Natural: 18
- Chibi: 3
- Fairy-Tale Princess: 2

Strengths:
- strong practical visual vocabulary
- Reference Library remains correctly separated from tutorials
- Chibi / Princess additions connect well to Character Art

Imbalance:
- Character Art has Manga, Manhwa / Webtoon and Manhua topics but Reference Library has no live sheets under those reserved style filters yet

Decision:
- this is a useful later expansion, but not as urgent academically as built-space perspective
- when expanded, add a small number of genuinely useful sheets rather than filling every category/style cell

## 5. Visual consistency assessment

Current poster families reflect several generations of the project:
- older wide Pencil / Landscape posters
- Human Drawing series
- Core Skills graphite/poster family
- Character Art portrait family
- Digital Art block-heavy family
- newer Chibi / Fairy-Tale Princess / SG-01 soft portrait family

This variation is acceptable because the site already groups learning areas clearly.

Current visual benchmark for **new portrait teaching posters**:
- warm paper
- generous whitespace
- soft pastel accents
- readable small headings
- clear cumulative figures
- limited decorative blocks
- strong continuity
- original G-Art branding

Do not retroactively redraw every older approved poster merely for uniformity. Refresh only when:
- readability is materially weaker
- anatomy / continuity is wrong
- the lesson objective no longer matches the visual
- the owner explicitly requests a visual modernization pass

## 6. Content clarity / young-learner suitability

Current copy is structurally strong:
- active lessons have 3–7 steps
- every active guide has Try it + Remember
- no current copy exceeds the content-gate length ceilings

Art vocabulary such as:
- gesture
- silhouette
- saturation
- compression
- reflected light

is acceptable when it is explained by the immediate sentence / poster.

Do not create a global glossary yet. Prefer local plain-language explanation first.

## 7. Quality actions

### Q-01 — Watercolor path refinement
Priority: HIGH / low risk

- move Sky Wash Practice & Variations from Watercolor core to Explore more
- preserve the lesson and poster
- no artwork change

### Q-02 — Human poster dimension metadata
Priority: MEDIUM / technical

- verify exact dimensions for six Human Drawing binaries
- patch metadata only after exact verification
- no guessed values

### Q-03 — Digital visual-density watch
Priority: DOCUMENTED / no immediate change

- approved Digital posters remain live
- do not use them as the visual template for new art
- redesign only by explicit owner decision

### Q-04 — Gesture visual note
Priority: DOCUMENTED / no immediate change

- approved and usable
- not current best-in-class benchmark

## 8. Expansion recommendation

Next small expansion: **DP-01 Built Spaces**

Do not create a large perspective course.

Two proposed lessons:
1. **Draw Boxes & Corners in Two-Point Perspective**
2. **Draw a Simple Room from Boxes**

Role:
- optional Draw Places expansion
- teaches transferable constructed-space skills
- bridges landscape/street drawing toward rooms, furniture and everyday environments

Production rule:
- create Lesson 1 pilot first
- owner approves teaching logic and poster continuity
- only then create Lesson 2
- only after both are approved decide whether they become core or remain Explore more

After DP-01:
- reassess Draw Places
- then consider a small Manga / Manhwa-Webtoon / Manhua Reference Library expansion

## 9. What not to expand now

Do not add:
- another Character Art topic
- another basic light/value lesson
- another basic layer lesson
- another basic face construction lesson
- a large color-theory curriculum
- a large Reference Library matrix merely for completeness

The project should now grow by **instructional need**, not by empty slots.
