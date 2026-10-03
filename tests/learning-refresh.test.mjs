import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {guides} from '../src/data/content.mjs';
import {characterGuides} from '../src/data/character-guides.mjs';
import {learningPaths} from '../src/data/learning-paths.mjs';

const manifest=JSON.parse(await readFile('assets/batches/learning-refresh-20261003.json','utf8'));

test('combined refresh pins all thirteen approved WebPs',async()=>{
 assert.equal(manifest.assets.length,13);
 assert.equal(new Set(manifest.assets.map(a=>a.targetPath)).size,13);
 for(const a of manifest.assets){
  const bytes=await readFile(a.targetPath);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),a.sha256,a.targetPath);
  assert.equal(bytes.length,a.bytes,a.targetPath);
  const info=await sharp(bytes).metadata();
  assert.equal(info.format,'webp',a.targetPath);
  assert.equal(info.width,a.width,a.targetPath);
  assert.equal(info.height,a.height,a.targetPath);
 }
});

test('Digital Set A uses four refreshed posters while Lesson 4 stays unchanged',()=>{
 const g=guides.find(x=>x.slug==='digital-color-layers');
 assert.ok(g);
 assert.deepEqual(g.posterGallery.map(x=>[x.image,x.width,x.height]),[
  ['infographics/digital/layers-01-overview.webp',1024,1536],
  ['infographics/digital/layers-02-base-color.webp',1024,1536],
  ['infographics/digital/layers-03-shadow.webp',1024,1536],
  ['infographics/digital/layers-04-light-details.webp',1024,1536],
  ['infographics/digital/layers-05-check.webp',1024,1536]
 ]);
});

test('Princess and Manhua companions appear before the richer legacy lessons',()=>{
 const princess=characterGuides.filter(x=>x.group==='princess').sort((a,b)=>a.groupOrder-b.groupOrder);
 const manhua=characterGuides.filter(x=>x.group==='manhua').sort((a,b)=>a.groupOrder-b.groupOrder);
 assert.deepEqual(princess.map(x=>x.slug),[
  'simple-princess-face','simple-princess-dress','simple-princess-pose',
  'fairy-tale-princess-design','princess-hair-dress-details','graceful-princess-poses'
 ]);
 assert.deepEqual(manhua.map(x=>x.slug),[
  'manhua-full-body-foundation','manhua-clothing-simple-shapes','manhua-pose-to-finished',
  'manhua-ink-character','manhua-variations','manhua-ink-rhythm'
 ]);
 for(const g of [...princess.slice(0,3),...manhua.slice(0,3)]){
  assert.equal(g.poster,true);
  assert.equal(g.posterWidth,1024);
  assert.equal(g.posterHeight,1536);
  assert.equal(g.steps.length,5);
  assert.ok(g.tryIt&&g.remember);
 }
});

test('DP-01 contains one single-poster lesson and one two-poster room lesson',()=>{
 const boxes=guides.find(x=>x.slug==='two-point-boxes-corners');
 const room=guides.find(x=>x.slug==='simple-room-from-boxes');
 assert.ok(boxes&&room);
 assert.equal(boxes.poster,true);
 assert.equal(boxes.posterGallery?.length??0,0);
 assert.equal(room.posterGallery.length,2);
 assert.deepEqual(room.posterGallery.map(x=>x.image),[
  'infographics/landscape/simple-room-boxes-01.webp',
  'infographics/landscape/simple-room-boxes-02.webp'
 ]);
 const places=learningPaths.find(x=>x.id==='draw-places');
 assert.deepEqual(places.exploreGroups.find(x=>x.id==='built-spaces').guides,['two-point-boxes-corners','simple-room-from-boxes']);
});
