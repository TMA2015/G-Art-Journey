import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {language,ui} from '../src/i18n/ui.mjs';
import {getGuides,getShowcase} from '../src/i18n/content.mjs';
import {getVisualNotes} from '../src/i18n/notes.mjs';
const read=p=>readFile(p,'utf8');
test('English is default while explicit Vietnamese data remains available',()=>{
 assert.equal(language(), 'en');
 assert.equal(language('en'), 'en');
 assert.equal(language('vi'), 'vi');
 assert.equal(ui().nav.guides,ui('en').nav.guides);
 assert.notEqual(ui('vi').nav.guides,ui('en').nav.guides);
 for(const getItems of [getGuides,getShowcase,getVisualNotes])assert.deepEqual(getItems(),getItems('en'));
});
test('all public content pages choose English and canonical root URLs',async()=>{
 for(const page of ['index.astro','explore.astro','guides.astro','gallery.astro','guide/[slug].astro','movement/[slug].astro','artist/[slug].astro','notes/index.astro','notes/[slug].astro']){
  const content=await read('src/pages/'+page);
  assert.match(content,/const lang='en'/);
  assert.doesNotMatch(content,/const lang=language\(Astro\.props\.lang\)/);
 }
 const layout=await read('src/layouts/Base.astro');
 assert.match(layout,/const root=base;/);
 assert.doesNotMatch(layout,/class="language-switch"/);
 assert.doesNotMatch(layout,/data-language-switch/);
 assert.match(layout,/rel="canonical"/);
});
test('the English-only visible poster avoids unexplained jargon',async()=>{
 const image=await read('public/infographics/light-and-value.svg');
 const notes=getVisualNotes('en');
 assert.match(image,/FIVE SHADES/);
 assert.doesNotMatch(image,/Core shadow|Midtone|FIVE SIMPLE VALUES/);
 assert.match(notes[0].title,/Light and shade/);
 assert.doesNotMatch(notes[0].description,/middle value/);
 assert.ok(notes[0].steps.every(s=>s.title&&s.body));
});
test('legacy /en pages remain to protect existing links',async()=>{
 for(const path of ['index.astro','guides.astro','gallery.astro','explore.astro','guide/[slug].astro','notes/[slug].astro'])await access('src/pages/en/'+path);
});
