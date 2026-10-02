# Content Consistency Standard

**Status:** active release gate  
**Applies to:** public learning guides, topic metadata and Reference Library copy

G-Art Journey should stay easy to understand as the library grows. Every content change must pass both an automated structural check and a human semantic review.

## 1. Topic → lesson agreement

A topic description should tell the learner what the lessons inside actually teach.

Before release:
- topic title and description match the current lesson set
- each lesson has one primary learning purpose
- neighboring lessons do not merely repeat the same exercise with different artwork
- lesson order moves in a useful sequence when order matters
- collection-level descriptions include newly published topic families

## 2. Lesson copy contract

Every active lesson should have:
- a concise title
- a short description explaining the learning goal
- suggested time and supplies
- 3–7 clear teaching steps
- one **Try it** prompt that asks the learner to do something
- one **Remember** prompt that states the key idea without adding a new lesson

Writing should be:
- English-first and understandable to a young learner
- concrete rather than abstract
- short enough to read comfortably beside the artwork
- consistent with what the approved poster visibly demonstrates

Avoid:
- oversized paragraphs that duplicate the poster
- unexplained specialist vocabulary
- claims that one national or publishing tradition has one fixed visual formula
- franchise names or copied character identity in original G-Art character-design topics

## 3. Poster ↔ copy agreement

Human review is mandatory because code cannot judge the picture itself.

Check:
- the description matches the poster
- step order matches the illustrated teaching sequence
- quantities stated in text match the image
- character continuity is preserved in cumulative steps
- Try it can actually be completed using the lesson just taught
- Remember reinforces the lesson instead of introducing unrelated material

## 4. Reference Library boundary

Reference cards supply visual vocabulary; they are not mini-lessons.

Each reference item needs:
- a clear collection
- a published style family
- concise title and description
- useful tags
- accurate image description / alt text

Do not turn reference descriptions into long tutorials. Link to a guide when deeper teaching is needed.

## 5. Automated gate

Run:

`npm run audit:content`

CI runs this on every pull request and every push to main.

The audit currently checks:
- required active-guide fields
- 3–7 non-empty lesson steps
- duplicate step titles
- reasonable copy-length ceilings
- sentence-style Try it / Remember prompts
- Character Art topic/lesson counts and ordering
- Human Drawing shelf counts
- Digital topic ↔ lesson ↔ poster ↔ parent-step count agreement
- Reference Library category/style/metadata integrity
- selected stale public-count wording
- the public Fairy-Tale Princess originality naming boundary

Automation catches structural drift. It does **not** replace owner visual QA or editorial judgment.

## 6. Release gate

For a new or revised learning batch:

**Topic description → lesson objective → steps → Try it → Remember → poster**

All six should agree before merge.
