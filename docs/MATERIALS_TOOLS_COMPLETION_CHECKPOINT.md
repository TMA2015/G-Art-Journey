# G-Art Journey — Materials & Tools Completion Checkpoint

_Last verified: 2026-09-30_

## Scope

Complete the existing 9 Explore material categories without adding new ones:

1. Graphite & Pencil
2. Colored Pencil
3. Watercolor
4. Oil Painting
5. Acrylic Painting
6. Crayon & Pastel
7. Ink & Wash
8. Vietnamese Lacquer
9. Digital Painting

## Page contract

Each material page includes:
- what the medium is and what makes it distinctive
- basic beginner tools/materials
- a simple four-step workflow
- example works or original G-Art illustrations
- G-Art learning links when a corresponding guide/style page already exists

## Example-image rule

- famous artworks may be embedded only when the file source clearly marks them Public Domain, CC0 or otherwise open
- modern/copyright-sensitive media may use original G-Art illustrations instead
- every external artwork carries source + rights metadata
- moderate web-size images only
- do not store museum-resolution files in the repo

## Material-specific notes

- Graphite explains H/B pencil behavior and value building.
- Colored Pencil explains wax/oil cores and light-pressure layering.
- Watercolor explains transparent washes and preserving paper white.
- Oil Painting explains slow working time, layers and a solvent-free beginner option.
- Acrylic explains fast drying and cleanup before paint cures.
- Crayon & Pastel explicitly distinguishes dry pastel, oil pastel and wax crayon.
- Ink & Wash explains diluted ink, brush control and empty paper; cross-links to Chinese Ink & Wash style.
- Vietnamese Lacquer explains layered lacquer, eggshell/metal leaf and polishing; includes a safety note that traditional lacquer sap requires supervised studio handling.
- Digital Painting explains tablet/stylus/apps while keeping traditional fundamentals central.

## Active branch

`feature/materials-and-tools-pages-20260930`

## Deployment state

- PR #44 merged to `main` as `155cf3556be8011047b502f13e5342c914e7abbb`.
- Main Pages workflow #186 completed successfully.
- Code/tests/build/deployment are green.
- Final browser visual QA on desktop + iPhone remains pending owner confirmation.

## Release gate

1. all 9 data records complete
2. root + /en material routes exist
3. responsive material template/styles
4. tests validate page completeness, local assets and source metadata
5. PR CI — PASS
6. merge — DONE (PR #44)
7. Pages deployment — PASS (workflow #186)
8. owner browser QA on desktop + iPhone — PENDING


## Browser QA result

Owner confirmed on **2026-09-30**:
- desktop: PASS
- iPhone: PASS
- new Materials content is visible
- layout is clear and stable

Materials & Tools browser QA is **closed**.


## Image-source policy

Owner decision locked on **2026-09-30**.

For each medium, target at least **3 useful visual examples total**:
- 1 introductory image
- 2 additional examples

Priority:
1. real artwork / image with usable rights and strong visual relevance
2. original G-Art illustration where it genuinely demonstrates the medium
3. clearly labeled AI-generated medium study only when suitable real/open examples are still insufficient

AI is allowed **only in Materials / Mediums**, not as a substitute for real works in Artists or Styles.

Any AI medium image must be labeled clearly as:
- **AI-generated medium study**
- **Not a historical artwork**

Do not create AI images simply to exceed the three-image minimum.


## Approved image completion batch

Owner approved the following generated medium studies on **2026-09-30**:

- Graphite — classical bust + cube graphite study
- Colored Pencil — botanical bouquet study
- Colored Pencil — bluebird study
- Watercolor — river landscape at sunrise
- Acrylic — bright still life with flowers and fruit
- Crayon & Pastel — expressive dancer study
- Vietnamese Lacquer — lotus-lake lacquer-style study

Release mapping:
- Graphite: AI study becomes cover; Leonardo + original G-Art value study remain supporting examples
- Colored Pencil: AI bouquet cover + AI bluebird example + original G-Art character example; remove the weak distant CC0 photo
- Watercolor: AI landscape cover + Turner + original G-Art watercolor example
- Oil: real Starry Night cover + Mona Lisa + Poppy Field
- Acrylic: AI still-life cover + two original G-Art examples
- Pastel: AI dancer cover + Degas + original G-Art example
- Ink & Wash: real Fan Kuan cover + Guo Xi + original G-Art landscape example
- Vietnamese Lacquer: AI lacquer cover + two original G-Art explanatory examples
- Digital Painting: keep three original G-Art visuals; no AI added

AI label contract:
**AI-generated medium study · Not a historical artwork**

Each medium must expose at least **3 distinct useful visuals** across cover + examples.
