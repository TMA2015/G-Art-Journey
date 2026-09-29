import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {characterGuides} from '../src/data/character-guides.mjs';
import {guides} from '../src/data/content.mjs';
import {validateManifest} from '../scripts/art-batch.mjs';

const read=p=>readFile(p,'utf8');
test('batch 02 manifest and staged guide metadata are complete',async()=>{
 const manifest=validateManifest(JSON.parse(await read('assets/batches/character-02.json')));
 assert.equal(manifest.items.length,5);
 assert.equal(characterGuides.length,5);
 assert.equal(new Set(characterGuides.map(x=>x.slug)).size,5);
 assert.deepEqual(characterGuides.map(x=>x.slug),manifest.items.map(x=>x.slug));
 for(const g of characterGuides){
  assert.equal(g.category,'character');
  assert.equal(g.poster,true);
  assert.ok(g.steps.length>=5&&g.steps.every(s=>s.title&&s.body));
  assert.ok(g.tryIt&&g.remember);
 }
});
test('staging cannot publish broken poster paths',async()=>{
 const content=await read('src/data/content.mjs');
 const active=content.includes('...characterGuides');
 if(!active){
  for(const g of characterGuides)assert.ok(!guides.some(x=>x.slug===g.slug));
  return;
 }
 const {characterAssets}=await import('../src/data/character-assets.mjs');
 const {default:sharp}=await import('sharp');
 const {verify}=await import('../scripts/art-batch.mjs');
 const m=JSON.parse(await read('assets/batches/character-02.json'));
 const actual=await verify(m,sharp);
 assert.deepEqual(actual,characterAssets);
 for(const guide of characterGuides)assert.ok(guides.some(g=>g.slug===guide.slug));
});
test('batch manifest rejects duplicate slugs and traversals',async()=>{
 const m=JSON.parse(await read('assets/batches/character-02.json'));
 assert.throws(()=>validateManifest({...m,outputDir:'../private'}));
 assert.throws(()=>validateManifest({...m,items:[m.items[0],m.items[0]]}));
});
