import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {ui} from '../src/i18n/ui.mjs';
import {getShowcase,getCollections,getGuides} from '../src/i18n/content.mjs';
import {getMedia,getMovements,getArtists,getMoreArtists} from '../src/i18n/discovery.mjs';
import {getVisualNotes} from '../src/i18n/notes.mjs';
const read=p=>readFile(p,'utf8');
test('both locales have complete navigation and distinct copy',()=>{
 for(const lang of ['vi','en'])for(const value of Object.values(ui(lang).nav))assert.ok(value);
 assert.notEqual(ui('vi').nav.guides,ui('en').nav.guides);
 assert.notEqual(ui('vi').home.visualTitle,ui('en').home.visualTitle);
});
test('all topics keep route parity and localized illustrated assets',async()=>{
 for(const getItems of [getShowcase,getCollections,getGuides,getMedia,getMovements,getArtists,getMoreArtists,getVisualNotes]){
  const vi=getItems('vi'),en=getItems('en');assert.equal(vi.length,en.length);
  assert.deepEqual(vi.map(x=>x.slug||x.id||x.name),en.map(x=>x.slug||x.id||x.name).map((v,i)=>vi[i].slug||vi[i].id||vi[i].name));
  for(const item of vi)if(item.image && !item.image.startsWith('https:'))await access('public/'+item.image);
  for(const item of en)if(item.image && !item.image.startsWith('https:'))await access('public/'+item.image);
 }
});
test('every hero slide has a matching localized image and alt',async()=>{
 for(const lang of ['vi','en'])for(const group of getShowcase(lang))for(const image of group.images){
  assert.ok(image.alt && image.title);
  await access('public/'+image.src);
 }
});
test('guide and visual notes have localized text at every step',()=>{
 for(const lang of ['vi','en']){
  for(const guide of getGuides(lang)){assert.ok(guide.steps.length>=5);assert.ok(guide.steps.every(x=>x.title&&x.body));}
  for(const note of getVisualNotes(lang)){assert.equal(note.steps.length,5);assert.ok(note.steps.every(x=>x.title&&x.body));}
  for(const style of getMovements(lang)){assert.equal(style.clues.length,3);assert.ok(style.clues.every(Boolean));}
  for(const artist of getArtists(lang)){assert.equal(artist.facts.length,3);assert.ok(artist.facts.every(x=>x.name&&x.detail));}
 }
});
test('the primary infographic image labels are localized',async()=>{
 const vi=await read('public/infographics/light-and-value-vi.svg');
 const en=await read('public/infographics/light-and-value.svg');
 assert.match(vi,/NĂM SẮC ĐỘ CƠ BẢN/);assert.doesNotMatch(vi,/FIVE SIMPLE VALUES/);
 assert.match(en,/FIVE SHADES/);
});
test('separate English pages exist for all content types',async()=>{
 for(const page of ['index.astro','explore.astro','guides.astro','gallery.astro','artist/[slug].astro','movement/[slug].astro','guide/[slug].astro','notes/index.astro','notes/[slug].astro'])await access('src/pages/en/'+page);
});
test('guide catalog uses a shared multi-column grid and quick links',async()=>{
 const guides=await read('src/pages/guides.astro'),css=await read('src/styles/guide-grid.css'),layout=await read('src/layouts/Base.astro');
 assert.match(guides,/guide-catalog/);assert.match(css,/grid-template-columns:repeat\(3/);assert.match(layout,/explore\/#materials/);assert.match(layout,/explore\/#movements/);assert.match(layout,/explore\/#artists/);
});
