# v0.3 visual polish and first drawing notes

## Owner feedback
- Playful needs its own artistic background rather than recoloring controls.
- Some Vietnamese text and accent combinations looked uneven with fallback serif.
- Long pages need a return-to-top control.
- Begin actual educational visual notes, not only text.

## Implementation
- Playful uses a locally stored paper/wash/doodle SVG background, low contrast and not intended to compete with artwork. Studio stays neutral. Existing theme toggle and browser-local preference are preserved.
- Be Vietnam Pro for body and Noto Serif for titles are requested through Google Fonts with Vietnamese-capable system fallbacks. No font files are checked into the public repository.
- A fixed return-to-top button appears after scrolling 480px, is keyboard accessible, and respects reduced-motion preference.
- Two original diagram-style SVG infographic notes are available as full-size and downloadable assets: **graphite value sphere** and **head construction**. These are educational diagrams, not attributed as artworks by any historical artist.
- Notes are linked from Home and Drawing Guides. Existing gallery and daily showcase are unchanged.

## Follow-up asset quality
The diagrams are the first pilot; curated full artistic illustrations and 4–6 consistent step images for individual tutorials remain a separate asset production task. Do not claim these are finished art-historical infographics. Historical artworks should only be added with verified provenance and rights.

## QA matrix
Desktop/mobile widths: 360, 390, 768, 900, 1024, 1440. Check both themes, current-tab highlighting (including notes), responsive menu, readability of Vietnamese diacritics, art-background contrast, back-to-top appearance, reduced motion, and downloaded poster. GitHub build/tests are necessary but not a substitute for device visual QA.
