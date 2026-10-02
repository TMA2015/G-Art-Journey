import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {guides} from '../src/data/content.mjs';
import {getGuides} from '../src/i18n/content.mjs';

const manifest=JSON.parse(await readFile('assets/batches/digital-art-10.json','utf8'));
test('exactly ten approved digital binaries retain hashes, bytes and dimensions',async()=>{
 const posters=manifest.routeMap.flatMap(route=>route.posters);
 assert.equal(posters.length,10);
 assert.deepEqual((await readdir('public/infographics/digital')).sort(),posters.map(p=>p.targetPath.split('/').at(-1)).sort());
 for(const p of posters){
  const bytes=await readFile('public/'+p.targetPath);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),p.sha256,p.targetPath);
  assert.equal(bytes.length,p.bytes);
  const info=await sharp(bytes).metadata();
  assert.equal(info.format,'webp');
  assert.equal(info.width,p.width);assert.equal(info.height,p.height);
 }
});
test('existing digital routes stay unique and show five approved posters in order',()=>{
 for(const route of manifest.routeMap){
  assert.equal(guides.filter(g=>g.slug===route.slug).length,1);
  for(const lang of ['en','vi']){
   const guide=getGuides(lang).find(g=>g.slug===route.slug);
   assert.equal(guide.poster,true);assert.equal(guide.posterGallery.length,5);
   assert.equal(guide.image,route.posters[0].targetPath);
   assert.deepEqual(guide.posterGallery.map(p=>[p.image,p.width,p.height]),route.posters.map(p=>[p.targetPath,p.width,p.height]));
  }
 }
 const face=guides.find(g=>g.slug==='color-a-face-in-layers');
 assert.equal(face.posterGallery[0].image,'infographics/digital/face-01-clean-sketch.webp');
 assert.equal(face.posterGallery[1].image,'infographics/digital/face-02-flat-skin.webp');
 assert.equal(manifest.routeMap[1].posters[0].sha256,'fbee372981911fc8106e0de6cf5274cbff5a8e5935290437ba527fe6132c8df9');
 assert.equal(manifest.routeMap[1].posters[1].sha256,'20f927ec0ec938543fb96980ae718a6f3b2e20fd8e8278b81809facd79b2a782');
});
