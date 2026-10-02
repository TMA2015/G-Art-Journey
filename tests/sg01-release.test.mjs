import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
import {guides} from '../src/data/content.mjs';
import {learningPaths} from '../src/data/learning-paths.mjs';

const manifest=JSON.parse(await readFile('assets/batches/sg01-release.json','utf8'));

test('all three owner-approved SG-01 WebPs retain exact bytes, hashes and dimensions',async()=>{
 assert.equal(manifest.assets.length,3);
 assert.equal(new Set(manifest.assets.map(a=>a.slug)).size,3);
 assert.equal(new Set(manifest.assets.map(a=>a.targetPath)).size,3);
 for(const asset of manifest.assets){
  const bytes=await readFile(asset.targetPath);
  assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.webpSha256,asset.targetPath);
  assert.equal(bytes.length,asset.webpBytes,asset.targetPath);
  const info=await sharp(bytes).metadata();
  assert.equal(info.format,'webp',asset.targetPath);
  assert.equal(info.width,asset.width,asset.targetPath);
  assert.equal(info.height,asset.height,asset.targetPath);
 }
});

test('SG-01 guide records pin the approved posters and lesson categories',()=>{
 const expected=[
  ['gesture-motion-basics','figure','infographics/core/gesture-motion-basics.webp'],
  ['feet-simple-forms','figure','infographics/core/feet-simple-forms.webp'],
  ['simple-color-harmony','color','infographics/color/simple-color-palette.webp']
 ];
 for(const [slug,category,image] of expected){
  const matches=guides.filter(g=>g.slug===slug);
  assert.equal(matches.length,1,slug);
  const guide=matches[0];
  const asset=manifest.assets.find(a=>a.slug===slug);
  assert.equal(guide.category,category);
  assert.equal(guide.image,image);
  assert.equal(guide.poster,true);
  assert.equal(guide.posterWidth,asset.width);
  assert.equal(guide.posterHeight,asset.height);
  assert.ok(guide.steps.length>=5&&guide.steps.length<=6);
  assert.ok(guide.tryIt&&guide.remember);
 }
});

test('SG-01 Learning Path placement preserves core and optional roles',()=>{
 const people=learningPaths.find(x=>x.id==='draw-people');
 const core=people.steps.filter(x=>x.kind==='guide').map(x=>x.slug);
 assert.equal(core.indexOf('gesture-motion-basics'),core.indexOf('figure-proportions')+1);
 assert.equal(core.indexOf('standing-figure'),core.indexOf('gesture-motion-basics')+1);
 const peopleExplore=(people.exploreGroups||[]).flatMap(group=>group.guides);
 assert.ok(peopleExplore.includes('feet-simple-forms'));

 const character=learningPaths.find(x=>x.id==='create-characters');
 const characterSupport=(character.supportGroups||[]).flatMap(group=>group.guides);
 for(const slug of ['gesture-motion-basics','feet-simple-forms','simple-color-harmony'])assert.ok(characterSupport.includes(slug));

 const watercolor=learningPaths.find(x=>x.id==='watercolor-basics');
 assert.ok((watercolor.exploreGroups||[]).flatMap(group=>group.guides).includes('simple-color-harmony'));
 assert.ok(learningPaths.find(x=>x.id==='digital-art-basics').explore.includes('simple-color-harmony'));
});
