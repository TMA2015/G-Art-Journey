# G-Art Journey — Reference Library Plan

_Last updated: 2026-10-01_

## Purpose

The Reference Library belongs inside **Learn to Draw / Drawing Guides**, but it is not a lesson sequence.

Its job is to answer a practical drawing question quickly:

> “I want to draw this. What could the pose, movement, hair or clothes look like?”

A learner should be able to open a visual, borrow an idea, then change it.

## Initial collections

1. **Poses**
   - standing and weight shift
   - sitting
   - crouching / kneeling
   - leaning / turning
   - front / side / back / three-quarter views
   - mild foreshortening after the basic sets are stable

2. **Motion**
   - walking
   - running
   - jumping / landing
   - reaching / turning
   - dance / flowing movement
   - simple action poses

3. **Hair**
   - short cuts
   - bob / medium length
   - long straight / wavy hair
   - ponytails and buns
   - braids
   - layered / stylized variants

4. **Clothing**
   - everyday casual clothing
   - shirts / hoodies / jackets
   - trousers / skirts / dresses
   - coats and layered outfits
   - manga-inspired outfit design
   - manhwa / webtoon-inspired casual and fashion silhouettes
   - manhua-inspired flowing robes / elegant layered clothing

## Style filters

- General / Natural
- Manga
- Manhwa / Webtoon
- Manhua

The regional labels are broad visual families, not fixed rules. Avoid implying that every manga, manhwa or manhua artist draws the same way.

## Starter production size

Target **6 original reference sheets per collection** for the first useful library:
- 24 sheets total
- produce them as **3 portrait infographics with 2 sheets per infographic**
- target about **5 large reference figures per sheet**
- small batches, not one large generation run
- keep individual studies large enough to inspect
- do not use tutorial-style Key Points / Construction panels in Reference Library sheets; reserve that space for larger reference figures

This target is intentionally modest. Expand only after the learner actually uses the library and we can see what she reaches for.

## Visual direction

- warm G-Art paper / sketchbook presentation
- mostly graphite / clean drawing line
- light pastel accents only when useful
- reference first, decoration second
- short English labels; no long instructional paragraphs
- across different sheets, vary character face, hairstyle and clothing; within one sheet, one consistent character is acceptable and outfits may vary
- no copied character designs, costumes or copyrighted model sheets

## Human / anatomy QA

All existing mandatory human-image rules in PROJECT_MASTER_HANDOFF.md apply.

Additional Reference Library rule:
- **do not hide anatomy errors behind tiny thumbnails**
- if hands are visible, they must pass the five-digit/thumb check
- for pose/action sheets, balance and joint direction matter more than clothing detail
- for hair/clothing sheets, the underlying head/body construction must still be coherent
- if a sheet contains several figures, each figure is a separate QA unit

## Asset contract

Public assets:
- public/references/poses/
- public/references/motion/
- public/references/hair/
- public/references/clothing/

Preferred public format: optimized WebP.

Metadata lives in:
- src/data/reference-library.mjs

Each item records:
- id
- category
- style
- title
- one-line description
- image path
- width / height
- alt text
- tags

## Product boundary

**Drawing Guides teach. Reference Library supplies visual vocabulary.**

A reference sheet should not duplicate a full lesson poster. If a topic needs explanation, link to the relevant guide rather than turning every reference card into another tutorial.

## Recommended first image batch

Start with **Poses / General** because this gives immediate value across realistic drawing, manga, manhwa and manhua:

1. relaxed standing / weight shift
2. sitting on chair / floor
3. leaning / resting
4. crouching / kneeling
5. turning / looking back
6. simple front / side / back body views

Owner visual QA on 2026-10-01: **PASS — Poses / General complete**.

Approved production format from this batch:
- infographic 1: Relaxed standing / weight shift + Sitting on chair / floor
- infographic 2: Leaning / resting + Crouching / kneeling
- infographic 3: Turning / looking back + Front / side / back body views

Motion / General owner visual QA on 2026-10-01: **PASS — starter set complete**.

Approved Motion sheets:
- infographic 1: Walking / Strolling + Running
- infographic 2: Jumping / Landing + Reaching / Stretching
- infographic 3: Turning / Spinning + Simple Action / Dynamic Pose

QA note:
- some approved Motion figures still contain minor finger-count defects
- this is accepted for this batch only and **does not change the mandatory hand/anatomy rule**
- future assets should avoid tiny ambiguous hands; either render hands large enough to inspect or crop them naturally when hands are not the reference subject

Next: **Hair / General**, then Clothing.


## Hair / General starter plan

Use the same approved Reference Library format: **3 portrait infographics × 2 sheets**, with about **5 large references per sheet**.

1. Short cuts
2. Bob / medium length
3. Long straight / wavy
4. Ponytails / buns
5. Braids
6. Layered / stylized

Hair-specific composition:
- prioritize head / bust / upper-body views so the hairstyle is large and easy to study
- do not add Key Points / Construction panels
- within one sheet, one consistent face is acceptable while showing several hairstyle variants from the same family
- use a different face, clothing palette and overall character identity on the next sheet
- front, 3/4, side and back views are especially useful where they clarify the hairstyle
- avoid unnecessary visible hands; if hands appear, they still require exact five-digit/thumb QA


## Hair / General completion

Owner visual QA on 2026-10-01: **PASS — 2 infographics / 30 hairstyle references complete**.

Approved groups:
1. Short Cuts
2. Bob / Medium Length
3. Long Straight / Wavy
4. Ponytails / Buns
5. Braids
6. Layered / Stylized

Important retained rule:
- do not use one face template for every hairstyle; vary face shape, hair color, clothing and character identity across sheets

## Clothing / General production plan

Create **4 portrait infographics**.
Each infographic contains **2 full-body sheets × 5 figures**, for **10 outfits per infographic / 40 outfits total**.

Proposed 8 sheets:
1. Everyday Casual
2. Smart Casual
3. School / Campus
4. Office / Formal
5. Spring / Summer
6. Autumn / Winter
7. Dresses / Skirts
8. Layered / Statement Outfits

Clothing QA:
- all 10 figures per infographic must remain large enough to inspect
- exact five fingers when hands are visible
- no fused limbs, extra arms, duplicated legs, malformed shoes or broken joints
- garment seams, hems, straps, pockets and layers must connect logically
- bags/accessories must attach to the body plausibly
- avoid tiny dense props
- vary faces, hairstyles and outfits across sheets to prevent repetitive character templates


## Clothing / General completion

Owner visual QA on 2026-10-01: **PASS — 4 infographics / 40 outfit references complete**.

Approved structure:
1. Everyday Casual + Smart Casual
2. School / Campus + Office / Formal
3. Spring / Summer + Autumn / Winter
4. Dresses / Skirts + Layered / Statement Outfits

## Vietnamese Traditional Clothing extension

Create **2 additional portrait infographics**, total **20 outfits**.

Special layout exception approved by owner:
- one unified theme per infographic
- **2 rows × 5 full-body figures**
- no internal two-sheet split
- keep each figure large enough to study silhouette, garment construction and accessories

Suggested coverage:
- áo dài
- áo bà ba
- áo tứ thân
- áo ngũ thân
- Nhật Bình / court-inspired historical dress where appropriate
- selected traditional clothing from Vietnamese ethnic groups such as H'Mông, Dao, Tày, Nùng, Thái, Mường, Ê Đê, Ba Na, Chăm, Khmer

Cultural QA:
- do not merge motifs or headdresses from different ethnic groups
- do not label a generic fantasy costume as a specific ethnic-group costume
- prefer respectful reference-style presentation over theatrical or sexualized styling
- keep accessories and garment details coherent and plausible
- hand/anatomy QA remains mandatory


## Approved asset upload checkpoint

Owner-approved inventory for the first website upload:

| Collection | Approved infographics |
| --- | ---: |
| Poses / General | 3 |
| Motion / General | 6 |
| Hair / General | 2 |
| Clothing / General | 4 |
| Vietnamese Clothing | 3 |
| **Total** | **18** |

Vietnamese Clothing approved assets:
1. Vietnamese Traditional Clothing (1)
2. Vietnamese Traditional Clothing (2)
3. Vietnamese Modernized Traditional Fashion

Layout clarification:
- the Vietnamese Clothing assets use a landscape **2 rows × 5 outfits** layout by explicit owner exception
- this does **not** change the default portrait Reference Library format
- future normal full-body infographics remain portrait 2-sheet layouts unless the owner explicitly approves another exception

Release status:
- all 18 approved image files connected
- PR #52 merged to production commit `70aaecf49e48d3c8053f641a5d1b7dfb5b8205de`
- Pages workflow #225 PASS
- technical release complete
- owner browser visual QA remains before closing this first Reference Library release checkpoint


## Character-themed Reference Library expansion — approved 2026-10-02

Owner approved **5 additional portrait reference sheets** for the live Reference Library.

### Fairy-Tale Princess
1. **Princess Hairstyles & Accessories**
   - category: Hair
   - style filter: Fairy-Tale Princess
   - 3 hairstyle rows plus 1 accessory row
2. **Princess Dress Library**
   - category: Clothing
   - style filter: Fairy-Tale Princess
   - 2 rows × 5 dresses = 10 dress references

### Chibi
1. **Chibi Clothing Library**
   - category: Clothing
   - style filter: Chibi
   - 3 rows × 5 outfits = 15 references
2. **Chibi Pose & Motion Library**
   - category: Motion
   - style filter: Chibi
   - 3 rows × 5 poses = 15 references
3. **Chibi Hair Library**
   - category: Hair
   - style filter: Chibi
   - 4 rows × 4 hairstyles = 16 references

Retained rules:
- keep the four core collections **Poses / Motion / Hair / Clothing**
- add **Chibi** and **Fairy-Tale Princess** as style filters, not new core collections
- use varied faces / character identities across the reference sheets
- Reference Library remains visual vocabulary, not a tutorial sequence
- approved artwork must be published unchanged apart from optimized WebP conversion with no crop or resize

New approved inventory after this release: **23 reference infographics total** (existing 18 + new 5).

## Integration release gate — 2026-10-02

- Existing PR #62 / `feature/chibi-princess-reference-release-20261002`; all 11 approved WebPs now present.
- All supplied and built SHA-256 hashes, byte sizes and dimensions match the approved manifest. No crop, resize, recolor, redesign or logo modification.
- Character Art: 6 topic shelves × 3 lessons = 18 topic lessons; Character Face Design Lab remains a separate direct lesson (19 Character Art lessons overall).
- Chibi and Fairy-Tale Princess each contain exactly 3 complete lesson records and standalone poster pages.
- Reference Library: 23 sheets; Poses 3, Motion 7, Hair 4, Clothing 9. Styles: General 18, Chibi 3, Fairy-Tale Princess 2.
- Local checks PASS: 90 tests; 50-guide intent audit, zero high-overlap pairs; 206-page build; English-first / legacy-alias verification; image-budget audit with no warnings.
- Generated HTML verified: two new topic cards, three lesson cards per new topic, six standalone posters with View large / Save WebP, new style filters, five reference cards, and all eleven built asset hashes.
- Existing 12 Character Style lessons, Design Lab, four core reference collection IDs and all existing routes are preserved.
- Final PR CI must pass before merge; Pages build and deployment are checked after merge.
- Remaining acceptance: owner desktop/iPad QA after release.
