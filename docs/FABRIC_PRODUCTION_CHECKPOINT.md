# G-Art Journey — Fabric Focused Set / Recovery Record

_Last verified: 2026-09-30_

Purpose: durable recovery point for the active **Draw Fabric from Tension & Gravity** Phase 2A poster.

## Confirmed baseline

- Repository: `TMA2015/G-Art-Journey`
- Working branch: `core/fabric-tension-gravity-20260930`
- Branding remediation for Hands / Eye / Hair is closed after owner browser QA.
- Core poster pipeline now preserves aspect ratio and validates public branding.
- Fabric is the active production task.
- Existing academic/authoring source: `docs/FABRIC_TENSION_GRAVITY_AUTHORING.md`

## Locked teaching goal

Teach **cause before wrinkle pattern**:
1. support / tension points
2. gravity and pull direction
3. stretch versus compression
4. large fold groups before small wrinkles
5. thickness, overlap and the form underneath

Do not turn this into a taxonomy of named fold types.

## Locked production method

Use panel-first QA.

Order:
1. hero study — **APPROVED**
2. four cause cards
3. six practical reference studies
4. final composite
5. canonical G-Art Journey branding
6. full poster QA
7. owner approval
8. asset pinning / guide wiring / CI / release

## Approved hero study

Owner approved the second hero version on **2026-09-30**.

Approved changes versus the first attempt:
- show more of the shirt/torso, not only the sleeve
- use a female subject
- retain the support / gravity / stretch / compression teaching callouts

Do not regenerate this approved hero without a concrete reason.

## Hero study requirements

One large bent sleeve on a simplified believable arm/torso.

Must clearly show:
- shoulder/seam support point
- gravity pulling loose fabric down
- stretch on the outside of the elbow bend
- compression / shorter fold groups on the inside of the elbow

Main message:
**Find what holds and pulls the cloth**

Callouts:
- **support**
- **gravity**
- **stretch**
- **compression**

The body is only a support for the fabric lesson. Keep the face out of frame. Omit the hand unless needed. Preserve believable elbow, upper-arm and forearm structure.

## Visual rules

- graphite/pencil teaching artwork
- warm off-white paper
- pastel only for callout arrows / labels
- concise English
- no AI-generated logo inside the panel
- final infographic gets the canonical repository logo during deterministic composition
- no copied garment or tutorial composition

## Approved cause cards

- **Cause Card 1 — One support point — APPROVED**
  - female subject
  - shirt/sleeve drape from one shoulder support
  - gravity and large-fold direction read clearly
- **Cause Card 2 — Two tension points — APPROVED**
  - female subject
  - fabric held at two supports
  - tension toward both supports and gravity sag are clearly separated

Next artwork unit:
- **Cause Card 3 — Compression at a bend**

## Released overview poster

Owner approved the full Fabric infographic on **2026-09-30**.

The released full poster is an **overview poster**. It does not cancel the separately approved focused-card production sequence.

Release implementation:
- source chunks: `assets/core/fabric-v1.b64/01.txt` … `06.txt`
- source bytes: **375,710**
- source SHA-256: `f391b18060466e38003eb8dbf653299ee5578d4dafc0ee0bbe72efb3b1d60877`
- public output: **900×1350**
- canonical logo replaces the generated logo via deterministic overlay
- guide slug: `fabric-tension-gravity`
- skill-intent ledger entry added

Remaining gate:
1. final PR CI
2. merge PR #36 if green
3. verify main Pages deployment
4. visually inspect the deployed Fabric card/page
5. close Phase 2A handoff

## Current state after sequencing correction

- PR #36 overview poster is live and may remain as an approved Fabric overview.
- Focused Fabric cards remain a separate unfinished set.
- Cause Card 1 — **One support point** — APPROVED.
- Cause Card 2 — **Two tension points** — APPROVED.
- Cause Card 3 — **Compression at a bend — APPROVED WITH NOTES**.
  - teaching logic is accepted
  - sleeve/arm proportion is improved but not ideal
  - future sleeve drawings must avoid an oversized upper sleeve near the shoulder
  - future sleeve drawings must also avoid an unnaturally tight lower sleeve around the forearm
  - keep the bent arm anatomy straighter and more believable through upper arm → elbow → forearm
  - use more even, realistic garment ease along the sleeve
- Next: Cause Card 4 — **Wrap and overlap**.
- PR #38 / Five Values was closed without merge because Phase 2B started too early.
- The lit-sphere artwork is not part of Fabric and is not an approved project asset.

## Resume rule

If interrupted:
1. verify branch SHA / PR / CI first
2. inspect the last approved Fabric panel
3. continue from the next unapproved panel
4. never regenerate an owner-approved panel without an explicit reason
