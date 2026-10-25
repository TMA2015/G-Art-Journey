# G-Art Journey — 24 Gemini Face-Shape Variants: visual QA

**Checkpoint:** 2026-10-25. **State:** RESEARCH / REVIEW, **not** public-release approval.  
**Input:** 24 original cards generated in Sets 1–3 (8 Round/Square, 8 Oval, 8 Heart/Diamond), checked visually against the 24 variant rows in `Thu_vien_5_dang_khuon_mat_Chuan_hoa_A1.xlsx` and the five fixed face-shape definitions in `FACE_SHAPES_A1_FOUNDATION_SPEC.md`.

## Interpretation

This is a **qualitative drawing/reference review**, not objective measurement or a classification of real people. Five shapes are artistic heuristics; some real or illustrated faces are intermediate.

- **PASS (10):** visually good as a style-variant candidate; does not mean scientifically canonical shape proof.
- **WATCH (12):** keep the image, but validate the visible silhouette at neutral/front view or check distinctiveness; do **not** use as a pure-shape teaching exemplar yet.
- **REWORK (2):** targeted identity/structural revision recommended before final library approval; keep existing images for comparison.

**Do not regenerate all 24**: most variants are useful, and the owner liked their quality. The key issue is not visual polish but insufficient difference between particular identities and/or silhouette obscured by hair/3/4 pose.

## Audit of all 24 codes

| Code | Status | Brief-specific assessment and key risk |
|---|---|---|
| ASIA_ROUND_01 | **PASS** | Big soft eyes, natural small mouth, full cheeks and curved jaw read as Round. Strong pilot candidate. |
| ASIA_ROUND_02 | WATCH | Cat-eye/glossy lips and wavy hair match Sultry Doll, but chin/face can read oval-ish; face/features very close to ASIA_SQUARE_02. |
| ASIA_ROUND_03 | WATCH | Straighter lob and calm eyes distinguish Elegant Modern; face seems longer/narrower than strongest Round example. |
| ASIA_SQUARE_01 | WATCH | Hair, eye expression and editorial mood match brief; partial angle and hair obscure jaw-width proof of Soft Square. |
| ASIA_SQUARE_02 | **REWORK** | Visually near-duplicate of ASIA_ROUND_02 in eyes/nose/mouth/expression, and square jaw softened toward Oval/Round. Distinguish identity and restore visible lower-jaw width. |
| EUR_SQUARE_01 | **PASS** | Straight-on squared lower jaw, defined corners and strong runway expression. Strong pilot candidate. |
| EUR_SQUARE_02 | WATCH | Voluminous curly hair and full lips convey Mediterranean brief; hair/angle obscure some jaw anatomy. |
| EUR_SQUARE_03 | **PASS** | Clearly structured broad jaw and softer British-elegance styling; good Soft/structured Square example. |
| ASIA_OVAL_01 | WATCH | First Love attributes match; face is nearly the same as ASIA_HEART_01 (features, gaze and tilt), even though hair/color differ. Retain this one provisionally and revise Heart version. |
| ASIA_OVAL_02 | **PASS** | Bob cut, confident narrow eyes and full lips suit Chic & Trendy; smooth cheek–jaw taper remains broadly Oval. Pilot candidate. |
| ASIA_OVAL_03 | WATCH | Graceful long dark hair and almond eyes; 3/4 angle and pointed lower face reduce frontal certainty of Oval versus Heart. |
| ASIA_OVAL_04 | WATCH | Big-eyed wide smile, high ponytail fit Bright Youth; smile and head tilt make outline classification less reliable. |
| EUR_OVAL_01 | **PASS** | Glamour waves, deep-set eyes and fuller lips follow classic Hollywood brief; styling is dramatic but face remains broadly Oval. |
| EUR_OVAL_02 | **PASS** | French bob, softer expression, natural lip styling and balanced features; good distinct identity. |
| EUR_OVAL_03 | WATCH | Sleek ponytail and fox eyes match fashion model; cheek/jaw appear rather angular, risking Diamond/Square drift in this pose. |
| EUR_OVAL_04 | **PASS** | Light brows, blue eyes, braid and soft jaw make a distinct Scandinavian Muse; good alternative Oval. |
| ASIA_HEART_01 | **REWORK** | Near-duplicate of ASIA_OVAL_01 in face identity/eye/nose/mouth/expression/pose; face-shape separation cannot be trusted. Redesign underlying face, not just its hair or styling. |
| ASIA_HEART_02 | **PASS** | Sharper eyes, narrower lower face, red lips and high bun fit Glamorous Heart; fairly legible upper-wide/lower-tapered construction. |
| EUR_HEART_01 | **PASS** | Rounder deep-set eyes, doll lashes, strawberry lips and half-up waves fit Romantic Doll; upper-face to chin taper reasonably clear. Pilot candidate. |
| EUR_HEART_02 | WATCH | Smoky eyes and asymmetric bob match Bold & Edgy; hair across temple/forehead hides a decisive Heart-versus-Diamond landmark. |
| ASIA_DIAMOND_01 | WATCH | Pixie haircut and dramatic cheekbone intent match Sharp & Chic, but tilted face/side hair complicate true forehead-versus-cheekbone reading. |
| ASIA_DIAMOND_02 | WATCH | Loose updo, eye expression, full mouth fit Mysterious Siren; features notably similar to ASIA_DIAMOND_01, needs stronger nose/lip/eye variation and cleaner frontal shape check. |
| EUR_DIAMOND_01 | **PASS** | High cheekbones, narrow temples, blue cat-eyes and high swept bun best show Diamond in this set; strong pilot candidate. |
| EUR_DIAMOND_02 | WATCH | Amber eyes, platinum wavy hair and subtle mouth fit Unique Aristocratic; 3/4 view/hair obscures exact frontal width hierarchy. |

**Count:** **10 PASS · 12 WATCH · 2 REWORK = 24**.  
No artwork has been deleted or automatically redrawn.

## Priority corrective actions — do not restart the library

1. **First:** redraw `ASIA_HEART_01` with a new underlying identity (not a color/tone/hair variation of `ASIA_OVAL_01`), preserving explicit wide forehead → narrower jaw → small chin.
2. **Second:** redraw `ASIA_SQUARE_02` to separate eyes, nose, lips and gaze from `ASIA_ROUND_02` and retain a visible Soft Square jaw/corners.
3. **Third (WATCH, optional targeted fix):** increase distinctive eye/nose/lip construction between `ASIA_DIAMOND_01` and `ASIA_DIAMOND_02` without changing the Diamond skeleton.
4. For other WATCH portraits, use neutral front-view contour studies before calling them canonical shape examples. No automatic replacement needed.
5. Normalize variant card branding with the **actual** G-Art Journey repository logo in final website/reference production; current AI-drawn logo lockups are visually inconsistent. Existing cards remain research-only.

## Pilot photoreal-style translation: representative five

| Base shape | Chosen Gemini variant | Why this one | Preservation test |
|---|---|---|---|
| Oval | `ASIA_OVAL_02` | Distinct bob/phoenix-eye aesthetic, smoother Oval jaw | Do not turn chin into V-line/Heart. |
| Round | `ASIA_ROUND_01` | Most legible cheek fullness, round short chin | Do not slim jaw or elongate facial oval. |
| Heart | `EUR_HEART_01` | Different features from Asian Oval, broad upper face and tapered chin | Maintain forehead-to-jaw width relationship. |
| Square | `EUR_SQUARE_01` | Clearest angular lower jaw with frontal viewpoint | Preserve wide mandible and corners, avoid rounded jaw. |
| Diamond | `EUR_DIAMOND_01` | Strong cheekbone prominence and relatively narrow forehead/jaw | Do not broaden forehead into Heart. |

**Conversion specification:** for each selected individual portrait, render one natural photorealistic young-adult face with the same distinct identity, face shape, expression, facial-feature geometry, hair styling and approximately same camera pose. Prefer evenly lit studio neutral background, natural skin texture, minimal makeup (no sculpting contour), no face slimming or over-retouching. Colors may be natural; do not introduce styling that disguises a face-shape change. Reference images are stylized synthetic portraits, not photographs of named real people.

**Release gate:** compare each converted image side by side with its exact original reference and grade structure, identity and style fidelity independently. If 5-way image generation causes identity drift, switch to **one conversion per variant**. No automatic PASS merely because the photographs look attractive.

## Owner-facing status

- A1 basic-shape sheet: experiment done.
- A2 comparison sheet: experiment done, owner chose not to continue revising Heart–Diamond comparison.
- 24 individually briefed variant portraits: **created** (owner considered quality much better with detailed briefs), **not yet fully QA accepted**.
- This report is a new QA checkpoint, not a website mini-series or publish approval.


## Photoreal pilot execution QA — 2026-10-25

**Result: FAIL — output-source binding and identity preservation.** Two experimental generation calls are not accepted as conversions.

1. The first attempt, based on a five-reference comparison strip (approved *shortlist*, not approved photoreal output), generated a generic 5-column/3-style teaching infographic and **changed several variant IDs/face identities**. It did not faithfully translate the five original portrait identities.
2. The narrower `ASIA_ROUND_01` single-source attempt unexpectedly generated a new **Heart & Diamond eight-portrait board**, not a transformation of the Round portrait. This is a severe target mismatch.

**Do not label either image as a valid photoreal translation or add it to the 24-variant library.** The issue is image-to-image source anchoring / instruction fidelity in this execution path, not a failure of the base Gemini design briefs.

Next reproducible test, once exact source-image editing can be grounded: transform **one explicitly referenced original image at a time**, retain its unique eyes/nose/mouth and head proportions, verify shape and identity against the original before trying the other four. If the conversion still changes identity, stop instead of producing visually attractive but invalid substitutes.

**Confirmed deliverables so far:** 24 portraits inspected with QA statuses, specific duplicate risks identified, a five-code shortlist, and a source reference comparison strip. **Photoreal conversion remains BLOCKED / NOT APPROVED.**


---

## Subsequent five-portrait photoreal pilot — OWNER VISUAL PASS — 2026-10-25

This records a **later successful five-image transformation batch** and supersedes the *blocked* status of the two **earlier failed attempts above**; those failed outputs remain explicitly rejected and must not be relabeled as successful.

Converted pilot variants (one photoreal portrait each):
- `ASIA_OVAL_02` — Oval
- `ASIA_ROUND_01` — Round
- `EUR_HEART_01` — Heart
- `EUR_SQUARE_01` — Square
- `EUR_DIAMOND_01` — Diamond

**Owner visual feedback:** the five conversions are **near-perfect and accurate**, with near-unchanged face shape and identity/feature geometry; the primary difference is the photographic/color rendition. **Pilot result: OWNER VISUAL PASS, 5/5.** This is an owner assessment based on visual comparison, not an automated biometric measurement. Do not infer that all remaining variants will convert with equal fidelity.

**Status distinction:** 5 successful photo conversions are approved as **research/reference pilots**, while the **24 original variants remain 10 PASS / 12 WATCH / 2 REWORK** from the earlier library-wide QA. Approving the photo pilot does not clear the other face-shape/identity flags.

**Owner scope decision:** these portraits are *private character reference/research materials*. No intention to publish the faces to G-Art Journey. The public website focuses on **drawing instruction**, not beauty-character-reference galleries.

**Recommended next phase:** targeted repairs to `ASIA_HEART_01` and `ASIA_SQUARE_02`, preserving their Gemini briefs and distinguishing each from its near-duplicate; then owner QA on these two. Once accepted, proceed to staged photoreal conversions of other original variants and per-pair QA, without bulk automatic PASS. Optional future European Round variants are outside the original 24 and would require a new brief.
