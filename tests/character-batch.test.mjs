import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {characterGuides} from '../src/data/character-guides.mjs';
import {characterAssets} from '../src/data/character-assets.mjs';
import {guides} from '../src/data/content.mjs';
import {validateManifest,verify} from '../scripts/art-batch.mjs';
import sharp from 'sharp';
const read=p=>readFile(p,'utf8');
const groups=['manga','webtoon','manhua','cartoon'];
test('twelve complete original guides in four distinct groups',async()=>{
 const manifest=validateManifest(JSON.parse(await read('assets/batches/character-02.json')));
 assert.equal(manifest.items.length,12);
 assert.equal(characterGuides.length,12);
 assert.equal(new Set(characterGuides.map(x=>x.slug)).size,12);
 assert.deepEqual(characterGuides.map(x=>x.slug),manifest.items.map(x=>x.slug));
 for(const group of groups)assert.equal(characterGuides.filter(x=>x.group===group).length,3,group);
 for(const g of characterGuides){assert.equal(g.category,'character');assert.equal(g.poster,true);assert.ok(g.steps.length>=5);assert.ok(g.steps.every(x=>x.title&&x.body));assert.ok(g.tryIt&&g.remember);assert.ok(g.image.endsWith('/'+g.slug+'.webp'));assert.ok(g.posterWidth>=1000);}
});
test('published posters all exist with exact WebP, checksum, dimensions and source paths',async()=>{
 const m=JSON.parse(await read('assets/batches/character-02.json'));
 const actual=await verify(m,sharp);
 assert.deepEqual(actual,characterAssets);
 assert.equal(actual.length,12);
 assert.ok(actual.reduce((s,x)=>s+x.bytes,0)<6*1024*1024);
 for(const g of characterGuides){assert.ok(guides.some(x=>x.slug===g.slug));await access('public/'+g.image);}
});
test('previous generic manga entry remains as a friendly legacy link, not a duplicate card',()=>{
 const old=guides.find(x=>x.slug==='draw-a-manga-face');
 assert.ok(old.retired);
 assert.equal(old.replacementGuide,'manga-face');
});
test('curated page, full-size poster actions and main catalog navigation exist',async()=>{
 const page=await read('src/pages/character-styles.astro');
 const catalog=await read('src/pages/guides.astro');
 const guide=await read('src/pages/guide/[slug].astro');
 for(const group of groups)assert.match(page,new RegExp("id:'"+group+"'"));
 assert.match(page,/loading="lazy"/);
 assert.match(catalog,/character-styles\//);
 assert.match(guide,/Save WebP/);
 assert.match(guide,/View large/);
 await access('src/pages/en/character-styles.astro');
});
test('manifest refuses duplicates and traversal paths',async()=>{
 const m=JSON.parse(await read('assets/batches/character-02.json'));
 assert.throws(()=>validateManifest({...m,outputDir:'../private'}));
 assert.throws(()=>validateManifest({...m,items:[m.items[0],m.items[0]]}));
});
