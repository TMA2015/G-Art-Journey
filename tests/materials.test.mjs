import test from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {media} from '../src/data/discovery.mjs';

test('all nine Explore materials have complete beginner pages',async()=>{
  assert.equal(media.length,9);
  for(const item of media){
    assert.equal(item.start,`material/${item.id}/`,item.id+' route');
    assert.ok(item.about,item.id+' about');
    assert.ok(Array.isArray(item.tools)&&item.tools.length>=4,item.id+' tools');
    assert.ok(Array.isArray(item.process)&&item.process.length>=4,item.id+' process');
    assert.ok(Array.isArray(item.examples)&&item.examples.length>=2,item.id+' examples');
    for(const ex of item.examples){
      assert.ok(ex.title&&ex.artist&&ex.year&&ex.note&&ex.rights,item.id+' example metadata');
      if(ex.image.startsWith('https:')){
        assert.ok(ex.source?.startsWith('https://commons.wikimedia.org/'),item.id+' external source');
      }else{
        await access('public/'+ex.image);
        assert.equal(ex.source,null,item.id+' local example source');
      }
    }
  }
});

test('material routes exist in both route trees',async()=>{
  await access('src/pages/material/[slug].astro');
  await access('src/pages/en/material/[slug].astro');
  const page=await readFile('src/pages/material/[slug].astro','utf8');
  assert.match(page,/Basic tools/);
  assert.match(page,/How it works/);
  assert.match(page,/Examples/);
  assert.match(page,/Learn more on G-Art Journey/);
});

test('medium-specific safety notes are retained where useful',()=>{
  assert.match(media.find(x=>x.id==='oil').care,/ventilation|solvent-free/i);
  assert.match(media.find(x=>x.id==='lacquer').care,/irritate skin|trained teacher/i);
  assert.match(media.find(x=>x.id==='acrylic').care,/Rinse brushes/i);
});
