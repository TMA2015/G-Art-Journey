import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { visualNotes } from '../src/data/visual-notes.mjs';
const load = p => readFile(p,'utf8');

test('legacy notes are retired without losing stable old URLs', async()=>{
 assert.equal(visualNotes.length,4);
 const current=visualNotes.filter(n=>!n.retired);
 assert.deepEqual(current.map(n=>n.slug),['graphite-values']);
 const svg=await load('public/'+current[0].image);
 assert.match(svg,/<title/);
 const retired=visualNotes.filter(n=>n.retired);
 assert.equal(retired.length,3);
 for(const note of retired){
  assert.ok(note.replacementGuide);
  assert.ok(note.replacementTitle);
  await load('public/'+note.image);
 }
});
test('approved posters are featured and old diagrams are not listed',async()=>{
 const home=await load('src/pages/index.astro'),catalog=await load('src/pages/guides.astro'),notes=await load('src/pages/notes/index.astro'),route=await load('src/pages/notes/[slug].astro');
 assert.match(home,/featuredGuides\.map/);
 assert.doesNotMatch(home,/visualNotes\.map/);
 assert.match(catalog,/!g\.retired&&!g\.artPending/);
 assert.doesNotMatch(catalog,/visualNotes\.map/);
 assert.match(notes,/filter\(note=>!note\.retired\)/);
 assert.match(route,/getStaticPaths/);
 assert.match(route,/note\.replacementGuide/);
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

test('home poster thumbnails use a bounded frame so intrinsic HTML height cannot stretch cards',async()=>{
 const page=await load('src/pages/index.astro'),css=await load('src/styles/human-batch.css');
 assert.match(page,/class="home-guide-media"><img/);
 assert.match(page,/decoding="async" width=\{g\.posterWidth/);
 assert.match(css,/\.home-approved-guides \.home-guide-media\{[^}]*aspect-ratio:4\/5;[^}]*overflow:hidden/);
 assert.match(css,/\.home-approved-guides \.home-guide-media img\{[^}]*position:absolute;[^}]*width:100%;height:100%;aspect-ratio:auto;object-fit:contain/);
 assert.match(css,/\.home-approved-guides \.guide-card\{[^}]*display:flex;flex-direction:column/);
});
