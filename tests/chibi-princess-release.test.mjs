import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {characterGuides} from '../src/data/character-guides.mjs';
import {characterAssets} from '../src/data/character-assets.mjs';
import {referenceItems} from '../src/data/reference-library.mjs';
import {guides} from '../src/data/content.mjs';
const manifest=JSON.parse(await readFile('assets/batches/character-chibi-princess-release.json','utf8'));

test('all eleven approved expansion binaries retain exact hashes, bytes and dimensions',async()=>{
 assert.equal(manifest.assets.length,11);
 assert.equal(manifest.assets.filter(a=>a.kind==='lesson').length,6);
 assert.equal(manifest.assets.filter(a=>a.kind==='reference').length,5);
 assert.equal(new Set(manifest.assets.map(a=>a.targetPath)).size,11);
 const supplied=JSON.parse(await readFile('assets/batches/character-chibi-princess-plan.json','utf8'));
 for(const a of manifest.assets){
  const bytes=await readFile(a.targetPath);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),a.webpSha256,a.targetPath);
  assert.equal(bytes.length,a.webpBytes);
  const info=await sharp(bytes).metadata();
  assert.equal(info.format,'webp');assert.equal(info.width,a.width);assert.equal(info.height,a.height);
  if(a.kind==='lesson'){
   const slug=a.targetPath.split('/').at(-1).replace('.webp','');
   const approved=supplied.topics.flatMap(t=>t.lessons).find(l=>l.slug===slug);
   assert.equal(a.sourceSha256,approved.approved_source.sha256);
  }
 }
});

test('six new lessons use unique standalone routes and pinned approved posters',()=>{
 const assets=manifest.assets.filter(a=>a.kind==='lesson');
 for(const a of assets){
  const image=a.targetPath.replace('public/','');
  const guide=characterGuides.find(g=>g.image===image);
  assert.ok(guide);assert.equal(guides.filter(g=>g.slug===guide.slug).length,1);
  assert.equal(guide.poster,true);assert.equal(guide.posterWidth,a.width);assert.equal(guide.posterHeight,a.height);
  assert.ok(guide.steps.length===5&&guide.steps.every(s=>s.title&&s.body));assert.ok(guide.tryIt&&guide.remember);
  const pinned=characterAssets.find(x=>x.slug===guide.slug);
  assert.equal(pinned.sha256,a.webpSha256);assert.equal(pinned.bytes,a.webpBytes);
 }
 assert.deepEqual(characterGuides.filter(g=>g.group==='chibi').map(g=>g.groupOrder),[0,1,2]);
 const oldPrincessSlugs=assets.filter(a=>a.targetPath.includes('princess')).map(a=>a.targetPath.split('/').at(-1).replace('.webp',''));
 assert.deepEqual(oldPrincessSlugs.map(slug=>characterGuides.find(g=>g.slug===slug).groupOrder),[3,4,5]);
});

test('five new reference sheets use their locked collection and style mappings',()=>{
 const expected=[['princess-hairstyles-accessories','hair','princess'],['princess-dress-library','clothing','princess'],['chibi-clothing-library','clothing','chibi'],['chibi-pose-motion-library','motion','chibi'],['chibi-hair-library','hair','chibi']];
 for(const [name,category,style] of expected){
  const image=`references/${category}/${name}.webp`;
  const items=referenceItems.filter(i=>i.image===image);assert.equal(items.length,1);
  assert.equal(items[0].category,category);assert.equal(items[0].style,style);
  const a=manifest.assets.find(a=>a.targetPath==='public/'+image);
  assert.equal(items[0].width,a.width);assert.equal(items[0].height,a.height);
 }
});
