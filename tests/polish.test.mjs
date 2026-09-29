import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { visualNotes } from '../src/data/visual-notes.mjs';
const load = p => readFile(p,'utf8');

test('both educational posters exist and have accessible SVG labels', async()=>{
  assert.equal(visualNotes.length,2);
  for(const n of visualNotes){
    const svg=await load('public/'+n.image);
    assert.match(svg,/<svg[^>]+viewBox=/);
    assert.match(svg,/<title id="t">/);
    assert.match(svg,/<desc id="d">/);
    assert.ok(n.steps.length>=5);
    assert.ok(n.steps.every(s=>s.title&&s.body));
  }
});
test('new routes and home links are present',async()=>{
  const home=await load('src/pages/index.astro'),guide=await load('src/pages/guides.astro');
  const route=await load('src/pages/notes/[slug].astro');
  for(const page of [home,guide])assert.match(page,/notes\/\x27\+n\.slug/);
  assert.match(route,/getStaticPaths/);
  assert.match(route,/download/);
});
test('playful background uses local asset and preserves studio theme',async()=>{
  const layout=await load('src/layouts/Base.astro'),css=await load('src/styles/polish.css');
  const art=await load('public/decor/playful-paper.svg');
  assert.match(layout,/--playful-art/);
  assert.match(layout,/decor\/playful-paper\.svg/);
  assert.match(css,/html\[data-theme="playful"\] body/);
  assert.match(css,/html\[data-theme="studio"\] body/);
  assert.match(art,/<svg /);
});
test('Vietnamese font fallback and actual back-to-top button',async()=>{
  const layout=await load('src/layouts/Base.astro'),css=await load('src/styles/polish.css');
  assert.match(layout,/Be\+Vietnam\+Pro/);
  assert.match(layout,/Noto\+Serif/);
  assert.match(css,/--art-font-serif/);
  assert.match(layout,/data-back-to-top/);
  assert.match(layout,/window\.scrollY\s*<\s*480/);
  assert.match(layout,/prefers-reduced-motion/);
  assert.match(layout,/relative\.startsWith\('notes\/'\)/);
  assert.match(css,/\.back-to-top\[hidden\]/);
});
