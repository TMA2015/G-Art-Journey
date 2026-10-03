import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {guides} from '../src/data/content.mjs';
import {humanGuides} from '../src/data/human-guides.mjs';
import {humanAssetManifest} from '../src/data/human-assets.mjs';
const get=path=>readFile(path,'utf8');
test('nine unique illustrated human drawing guides with accessible poster metadata',()=>{
 assert.equal(humanGuides.length,9);
 assert.equal(new Set(humanGuides.map(g=>g.slug)).size,9);
 assert.equal(humanGuides.filter(g=>g.group==='face').length,4);
 assert.equal(humanGuides.filter(g=>g.group==='figure').length,5);
 const proportions=humanGuides.find(g=>g.slug==='figure-proportions');
 assert.equal(proportions?.posterGallery?.length,3);
 assert.equal(humanGuides.find(g=>g.slug==='sitting-poses')?.image,'infographics/human/sitting-poses.webp');
 assert.ok(humanGuides.some(g=>g.slug==='five-everyday-sitting-poses'));
 for(const g of humanGuides){
  assert.ok(g.poster && g.posterAlt);
  assert.ok(g.steps.length>=5 && g.steps.every(s=>s.title&&s.body));
  assert.ok(g.tryIt && g.remember);
  assert.ok(guides.some(x=>x.slug===g.slug));
  assert.match(g.image,/^infographics\/human\/[a-z-]+\.webp$/);
 }
});
test('approved original WebP artwork present, undamaged and storage-efficient',async()=>{
 let total=0;
 for(const asset of humanAssetManifest){
  const bytes=await readFile('public/'+asset.path);
  total+=bytes.length;
  assert.equal(bytes.length,asset.bytes,asset.slug+' size');
  assert.equal(bytes.subarray(0,4).toString(),'RIFF',asset.slug+' RIFF');
  assert.equal(bytes.subarray(8,12).toString(),'WEBP',asset.slug+' WebP');
  assert.ok(createHash('sha256').update(bytes).digest('hex').startsWith(asset.shaPrefix),asset.slug+' checksum');
 }
 assert.ok(total<3*1024*1024);
});
test('topic-first Human Drawing navigation preserves standalone poster actions',async()=>{
 const guide=await get('src/pages/guide/[slug].astro');
 const list=await get('src/pages/guides.astro');
 const css=await get('src/styles/human-batch.css');
 const page=await get('src/pages/human-drawing.astro');
 const topicPage=await get('src/pages/human-drawing/[group].astro');
 assert.match(guide,/guide\.poster\?/);
 assert.match(guide,/Save WebP/);
 assert.match(guide,/View large/);
 assert.match(css,/object-fit:contain/);
 assert.match(list,/human-drawing\//);
 assert.match(page,/humanTopics/);
 assert.match(topicPage,/humanGuides/);
 assert.match(topicPage,/OPEN LESSON/);
 await access('src/pages/en/human-drawing.astro');
});
