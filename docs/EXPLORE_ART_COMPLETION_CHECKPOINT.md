# G-Art Journey — Explore Art Completion Checkpoint

_Last verified: 2026-09-30_

## Active scope

Complete the existing Explore Art section without expanding its catalog.

Artists:
1. Leonardo da Vinci
2. Claude Monet
3. Vincent van Gogh
4. Fan Kuan

Movements / styles:
1. Renaissance
2. Impressionism
3. Post-Impressionism
4. Cubism
5. Chinese Ink & Wash

## Page contract

Each artist page:
- section 1: who the artist was + why the artist/work became important
- section 2: representative works with image, title, year, artist, short explanation, institution/source and rights

Each movement page:
- section 1: what the style is + the visual ideas that make it recognizable
- section 2: 4–6 representative works with artist and short explanation

Keep wording simple and English-first.

## Copyright / source rule

- attribution is provenance, not permission
- only embed artwork images when the source indicates Public Domain, CC0 or another clearly open license
- link every image to its source page so provenance/rights can be checked
- use moderate-resolution web images only; do not store high-resolution museum masters in the repository
- do not use contemporary copyrighted work merely because a source can be found online

## Fan Kuan exception

Do not invent a 4–6 work list for Fan Kuan. Very few surviving works are securely associated with him. Prefer an honest compact page and explicitly distinguish traditionally attributed / later works.

## Learner art

The 18-image learner audit is paused in Draft PR #41.
- no learner art is public
- no learner images have been added to the repository
- wait for learner confirmation before any gallery implementation

## Current implementation branch

`feature/explore-art-complete-20260930`

## Deployment state

- PR #42 merged to `main` as `f7a19453c1fa54218a85dbaab3776feb89dd6911`.
- Main Pages workflow #182 completed successfully.
- Code, tests, build and deployment gates are green.
- Final browser visual QA remains open because the current tool session cannot directly render the GitHub Pages site.
- Owner should inspect at least one artist page and one movement page; if layout/images look correct, close this checkpoint.

## Release gate

1. update discovery data
2. simplify artist/movement pages to the two-section contract
3. add responsive artwork galleries
4. add tests for counts/source metadata/rights fields
5. PR CI — PASS
6. merge — DONE (PR #42)
7. GitHub Pages deployment — PASS (workflow #182)
8. browser visual QA of at least one artist page and one movement page — PENDING OWNER CONFIRMATION
