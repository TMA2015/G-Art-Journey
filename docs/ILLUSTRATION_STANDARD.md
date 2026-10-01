# G-Art Journey — Illustration standard (approved)

## Look and feel
Original pencil and soft pastel illustration; warm paper, airy white space, gentle rose/peach/mint accents, legible English.

### Brand mark placement
- **Every new G-Art Journey infographic must carry the canonical purple G-Art Journey logo/lockup in the upper-left corner by default.**
- Reuse one canonical repository brand asset/lockup. Do **not** ask an image model to redraw or reinterpret the logo on each poster.
- Keep the logo large enough to read at the actual website card size, not only at source resolution.
- Move it from the upper-left only when the teaching layout has a clear reason; document the layout exception.
- Do not rebuild already-approved historical posters only to add or move the logo. Use deterministic production compositing when possible.
- **Artwork approval does not waive mandatory branding rules** unless the owner explicitly approves that exception.
- **Owner-approved series-logo exception:** the approved **Landscape Drawing** series uses its own hand-drawn/stylized G-Art logo treatment in the upper-left. Keep that approved series mark on Landscape posters and **do not replace it with the canonical website lockup during upload/compositing**.
- Before release, inspect the **generated public WebP as rendered on the website**. Checking only the source artwork is not sufficient.
- Poster generation must preserve the approved artwork aspect ratio; never use an implicit crop/cover resize that can remove the logo or teaching content.

A tutorial must look like artwork someone would want to draw, not a crude wireframe presented as a finished example. Do not copy slogans, watermarks, compositions or finished characters from reference artists. Use our own short G-Art notes.

## Infographic format and density rules

### Default orientation
- **Portrait is the project default** for new G-Art Journey infographics so the library feels consistent on the website and iPad.
- Use landscape only when the teaching content genuinely benefits from width; document the exception.
- Approved current exceptions:
  - **Pencil Art** may use landscape for its lesson/roadmap graphics when the graphite studies need a wide comparison layout.
  - **Landscape drawing** may use landscape when the scene or composition itself is naturally horizontal.
  - previously owner-approved horizontal Vietnamese clothing reference sheets remain historical approved exceptions.
- Do not switch orientation merely because generation is easier.

### Maximum visual density
The goal is to keep every reference large enough to inspect and to reduce anatomy/detail failures.

For **full-body figures**:
- target **2 sheets per infographic**
- target **5 figures per sheet**
- hard maximum: **10 full-body figures in one infographic**
- if more examples are needed, create another infographic rather than shrinking figures

For **smaller subjects or partial-body studies** such as hair, eyes, hands, heads or close-up details:
- up to **3 sheets per infographic**
- target **5 studies per sheet**
- hard maximum: **15 studies in one infographic**
- if not divided into visible sheets, the same 15-study maximum still applies

For tutorial posters that are not reference sheets:
- use the same principle: fewer, larger examples are preferred to many tiny examples
- dense small-detail generation should be split into separately QA'd panels and composited afterward
- for Landscape lesson posters, prefer **one lesson per infographic**, with **no more than 4 main teaching zones** plus a compact practice/footer strip; do not combine several lessons into one generated poster

## Basic tutorial poster
- **Current Phase 2 visual baseline:** the approved **Draw Hair as Masses, Then Strands** poster sets the minimum finish level for new Core Drawing Skills artwork until a later approved poster raises that bar. This means convincing hand-drawn/graphite examples, useful visual variety, clear hierarchy and a finished editorial page—not merely correct but sparse technical diagrams.
- Match the baseline quality, not necessarily the Hair poster's exact grid. Layout should follow the teaching goal.
- One clear visual question per poster.
- A row of five connected stages with the **same subject** and consistent camera angle where the skill is cumulative.
- Optional rows of five expressions, angles, poses, age or silhouette examples. Label these as variations rather than progressive stages.
- Show enough actual drawing, not only numbered explanations. Keep proportions, hands, feet and perspective consistent.
- Make small text readable in a 100% full-size view. Use concise English; place detailed explanations in the web lesson, not crowded into the artwork.
- Finish with a simple original creative exercise, not a grade or score.
- For dense posters with many small drawings, define the panel grid and the teaching job of each panel first. Create and inspect high-risk panels individually, repair or reject failures, then composite the final infographic and run a whole-page QA pass. Do not rely on one large AI generation to solve many small detailed teaching drawings at once.
- For anatomy-heavy topics such as hands, eyes, faces or figures, treat each important study as its own QA unit before it enters the final composite. A poster with nine good panels and one incorrect teaching panel does not pass.

## Anatomy and representation

### Default human subject direction
- For new G-Art Journey tutorial artwork that includes a human character, **default to a female subject** unless the teaching objective clearly benefits from another choice.
- This is a project art-direction preference for the intended learner and visual identity, not a claim that drawing rules differ by gender.
- Keep the subject age-appropriate, friendly and secondary to the teaching goal when the lesson is about fabric, light, anatomy, perspective or another transferable skill.

- Proportions in head lengths are useful approximations, not an anatomical law.
- Individual bodies, faces, ages and expressions vary. Avoid rigid claims that one facial feature defines an age, gender or region.
- Manga, manhwa, manhua and Western comics are varied media traditions, not immutable appearance templates.
- Check balance, joint direction, five-digit hands when relevant, uncut feet and legs, believable neck/hip/shoulder connections, and consistency across panels.
- Credit original illustrations to G-Art Journey. Museum artwork uses its actual maker/source, not a generic site credit.

## Technical delivery
- English-first; use short common words in public artwork. Retain localization-friendly metadata for future use but do not maintain an incomplete VN/EN switch.
- Before the next new infographic release, maintain one canonical purple G-Art Journey logo/lockup in the repository branding assets and reuse it across new poster sources.
- Original art may be created at a higher resolution offsite, but the public GitHub repository stores only a clear WebP web version (usually 1000–1600 px on its longer useful axis).
- Check lettering at full size and on mobile. Do not optimize away legibility.
- A poster is linked from its own detail page with View large and Save image actions. Lazy-load card previews; keep hero poster full-height (no object-fit: cover crop).
- Keep GitHub as the single ongoing storage and hosting platform, and watch the existing advisory asset budget.
- All eight Human Drawing Batch 01 image checksums are pinned in src/data/human-assets.mjs. Never publish with missing or wrong assets.

## Content distinction gate (added after Batch 01 review)

Before producing a new poster, record its dominant learning result in `assets/guides/skill-intents.json`. The five stage-focus tags are for **what the viewer learns**, not merely the five pieces of the drawing. Run `npm run audit:guides` before generating artwork. CI rejects missing, duplicated or almost identical skill sequences.

A new card needs a distinguishable outcome and a visual example that proves it. A change of name, medium, region, gender or character alone does not create another basic lesson. Shared first steps may be prerequisites, but most of the visual stages must teach something new. If the concept overlaps, extend the existing guide with a variation, embed a related example, or cross-link it rather than create another competing card.

The approved `figure-proportions` and `standing-figure` posters remain unchanged. The first is a head-unit and body-landmark reference; the second is about gesture, supporting leg and standing balance. Their acknowledged scaffolding overlap is documented as an owner-approved historical exception, not a template for future duplication. 

In Batch 02, manga face focuses on feature/hair/line design choices rather than re-teaching basic face construction; manga full figure compares stylized proportions and costume silhouettes rather than redoing the general standing-pose tutorial. Regional terms describe varied storytelling/art contexts and are not fixed face or body templates.

## Human/character image QA — mandatory before publication

For any infographic that contains people or human-like characters, explicitly inspect the final image at full size before publishing:

- **correct anatomy / anatomically correct**: joints, limbs and visible body structure must read plausibly for the intended stylization.
- **five fingers on each visible hand**: exactly five digits including one correctly placed thumb; reject extra, fused or missing fingers unless intentionally hidden by the pose.
- **detailed hands**: hands should be drawn clearly enough to count fingers and understand the pose; tiny ambiguous hands should not carry a teaching point.
- **balanced face**: eyes, nose, mouth and jaw must align coherently with the head angle; avoid accidental asymmetry or duplicated features.
- **style-appropriate eyes**: clean, balanced and intentional. Realistic lessons need believable eye structure; stylized lessons may exaggerate while remaining internally consistent.
- **natural facial expression**: brows, eyelids, mouth and cheeks should work together rather than contradict one another.
- **detailed features**: teaching examples should have enough detail to demonstrate the skill without visual noise.
- **proportionate body anatomy**: proportions may be stylized, but the chosen ratio must be deliberate and consistent within the lesson.
- **clear framing**: use a deliberate full-length or medium shot when body/pose is being taught; do not crop hands, feet or key landmarks needed by the lesson.
- **cumulative-step continuity**: when a poster is step-by-step, keep the same subject, camera angle and pose unless the lesson explicitly teaches a viewpoint change.

AI-generated art gets a dedicated final anatomy pass. Hands are checked one by one, including small secondary examples. A visually attractive image does not pass QA if anatomy or step continuity is wrong.

### Human / character generation reject list

When people or human-like characters appear, reject or repair the image if any of the following occurs:

- extra arm, duplicated arm, extra leg or duplicated limb
- missing limb, disconnected limb or a limb that merges into clothing/background
- more or fewer than five digits on a fully visible hand
- duplicated thumb, missing thumb, thumb attached in the wrong place, or fused/broken fingers
- tiny ambiguous hands used where the hand is important to the lesson
- wrist, elbow, knee, ankle or shoulder bending in an implausible direction
- broken or twisted fingers with no believable joint structure
- malformed feet or shoes, duplicated feet, or feet that do not connect coherently to the leg
- face features drifting off the head angle, accidental extra eye/feature, or strongly mismatched eyes
- neck, shoulder, torso, hip or pelvis connection that does not make structural sense
- clothing seams, straps, pockets or layers that connect to the wrong body part
- bags, tools or props floating, merging into a hand/body, or creating an accidental extra limb
- step-by-step panels changing subject identity, pose, camera angle or handedness without the lesson explicitly teaching that change
- important anatomy cropped out of frame
- anatomy defects hidden by tiny scale, hair, props, folds or dense composition

A visually attractive figure still fails if one of these errors affects the teaching/reference value.

### Pencil/graphite exception to the color identity

G-Art Journey keeps its typography, spacing, warm paper and gentle editorial character, but graphite lessons should not color the drawing itself. Use monochrome graphite/value studies, hatching, edges and paper texture; reserve pastel accents for headings, callouts or small navigation marks only. The medium should remain visibly pencil-first.
