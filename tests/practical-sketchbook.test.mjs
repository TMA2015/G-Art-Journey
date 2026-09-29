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
test('new original diagrams have readable labels and five stages',async()=>{
 for(const slug of ['figure-simple-shapes','landscape-depth']){
  const note=visualNotes.find(n=>n.slug===slug);
  assert.ok(note);assert.equal(note.steps.length,5);
  const svg=await readFile('public/'+note.image,'utf8');
  assert.match(svg,/<title id="t">/);assert.match(svg,/<desc id="d">/);assert.match(svg,/ORIGINAL EDUCATIONAL DIAGRAM/);
 }
});
test('English-first getters expose new guide and note routes',()=>{
 assert.equal(getGuides('en').length,guides.length);
 assert.equal(getVisualNotes('en').length,visualNotes.length);
 assert.equal(getGuides('en').find(x=>x.slug==='figure-from-simple-shapes').title,'Draw a Standing Figure with Simple Shapes');
});
