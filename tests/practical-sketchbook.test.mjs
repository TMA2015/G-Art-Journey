import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {guides} from '../src/data/content.mjs';
import {visualNotes} from '../src/data/visual-notes.mjs';
import {getGuides} from '../src/i18n/content.mjs';
import {getVisualNotes} from '../src/i18n/notes.mjs';
const added=['figure-from-simple-shapes','shade-a-pencil-portrait','street-with-depth','four-character-face-approaches','color-a-face-in-layers'];
test('five new independent art guides exist',()=>{
 for(const slug of added){const g=guides.find(x=>x.slug===slug);assert.ok(g);assert.ok(g.steps.length>=5);assert.ok(g.tryIt);assert.ok(g.remember);assert.ok(g.steps.every(s=>s.title&&s.body));}
 assert.equal(new Set(guides.map(g=>g.slug)).size,guides.length);
});
test('character style exploration includes four traditions without rigid rules',()=>{
 const g=guides.find(x=>x.slug==='four-character-face-approaches');
 const joined=g.steps.map(x=>x.title+' '+x.body).join(' ').toLowerCase();
 for(const term of ['manga','webtoon','manhua','western comics'])assert.ok(joined.includes(term),term);
 assert.match(g.remember,/not fixed facial rules/);
});
test('all linked note slugs and referenced images resolve',async()=>{
 const noteNames=new Set(visualNotes.map(n=>n.slug));
 for(const g of guides){for(const slug of g.seeAlso||[])assert.ok(noteNames.has(slug));await access('public/'+g.image);}
 for(const note of visualNotes)await access('public/'+note.image);
 assert.equal(visualNotes.length,4);
});
test('replaced diagrams have safe destinations with approved posters',async()=>{
 for(const [slug,guide] of [['head-construction','face-basics'],['figure-simple-shapes','standing-figure'],['landscape-depth','landscape-depth-layers']]){
  const note=visualNotes.find(n=>n.slug===slug);
  assert.ok(note.retired);
  assert.equal(note.replacementGuide,guide);
  await access('public/'+note.image);
 }
 const oldFigure=guides.find(g=>g.slug==='figure-from-simple-shapes');
 const oldStreet=guides.find(g=>g.slug==='street-with-depth');
 assert.ok(oldFigure.retired);
 assert.ok(!oldStreet.artPending);assert.equal(oldStreet.image,'infographics/landscape/landscape-04-street-depth.webp');
});
test('English-first getters expose new guide and note routes',()=>{
 assert.equal(getGuides('en').length,guides.length);
 assert.equal(getVisualNotes('en').length,visualNotes.length);
 assert.equal(getGuides('en').find(x=>x.slug==='figure-from-simple-shapes').title,'Draw a Standing Figure with Simple Shapes');
});


const pencilSet=[
 'pencil-control-lines-pressure','pencil-simple-forms','pencil-everyday-objects',
 'pencil-textures','shade-a-pencil-portrait','pencil-facial-features'
];
const landscapeSet=[
 'landscape-depth-layers','landscape-big-shapes','landscape-water-reflections',
 'street-with-depth','landscape-complete-composition'
];

test('approved Pencil and Landscape sets are active wide posters',async()=>{
 for(const slug of [...pencilSet,...landscapeSet]){
  const g=guides.find(x=>x.slug===slug);
  assert.ok(g,slug);
  assert.ok(!g.retired,slug);
  assert.ok(!g.artPending,slug);
  assert.equal(g.poster,true,slug);
  assert.equal(g.posterWide,true,slug);
  assert.ok(g.steps.length>=5,slug);
  assert.ok(g.tryIt,slug);
  assert.ok(g.remember,slug);
  await access('public/'+g.image);
 }
});

test('old Pencil and Landscape starter placeholders retire to the new lessons',()=>{
 const oldPencil=guides.find(x=>x.slug==='draw-a-pencil-portrait');
 const oldLandscape=guides.find(x=>x.slug==='draw-a-pencil-landscape');
 assert.ok(oldPencil.retired);
 assert.equal(oldPencil.replacementGuide,'shade-a-pencil-portrait');
 assert.ok(oldLandscape.retired);
 assert.equal(oldLandscape.replacementGuide,'landscape-depth-layers');
});
