import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {guides} from '../src/data/content.mjs';
import {updateGuide} from '../scripts/activate-landscape-poster.mjs';
const load=p=>readFile(p,'utf8');
test('landscape poster updates an existing lesson; never adds a duplicate',async()=>{
 const m=JSON.parse(await load('assets/batches/landscape-refresh-01.json'));
 const existing=guides.find(g=>g.slug===m.targetSlug);
 assert.ok(existing);
 const source=await load('src/data/content.mjs');
 const updated=updateGuide(source);
 assert.ok(updated.includes("image:'"+m.targetImage+"'"));
 assert.ok(updated.includes("poster:true, posterAlt:"));
 assert.equal((updated.match(/slug:'draw-a-pencil-landscape'/g)||[]).length,1);
 assert.equal(updateGuide(updated),updated);
});
test('staged artwork is not linked until its exact file has arrived',async()=>{
 const m=JSON.parse(await load('assets/batches/landscape-refresh-01.json'));
 const target=guides.find(g=>g.slug===m.targetSlug);
 if(target.image===m.targetImage)await access('public/'+m.targetImage);
 else assert.equal(target.image,'showcase/pencil-landscape.svg');
});
