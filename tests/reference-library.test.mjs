import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {referenceCollections,referenceItems,referenceStyles} from '../src/data/reference-library.mjs';

test('reference library keeps four distinct core collections',()=>{
  assert.deepEqual(referenceCollections.map(x=>x.id),['poses','motion','hair','clothing']);
  assert.equal(new Set(referenceCollections.map(x=>x.id)).size,referenceCollections.length);
  assert.ok(referenceCollections.every(x=>x.label&&x.description));
});

test('reference library preserves future style families',()=>{
  for(const id of ['general','manga','webtoon','manhua','chibi','princess'])assert.ok(referenceStyles.some(x=>x.id===id));
});

test('approved Reference Library inventory is complete',()=>{
  assert.equal(referenceItems.length,23);
  const counts=Object.fromEntries(referenceCollections.map(c=>[c.id,referenceItems.filter(x=>x.category===c.id).length]));
  assert.deepEqual(counts,{poses:3,motion:7,hair:4,clothing:9});
  assert.equal(referenceItems.filter(x=>x.style==='general').length,18);
  assert.equal(referenceItems.filter(x=>x.style==='chibi').length,3);
  assert.equal(referenceItems.filter(x=>x.style==='princess').length,2);
  assert.equal(referenceItems.filter(x=>x.orientation==='landscape').length,3);
});

test('reference items follow the asset contract',()=>{
  const categories=new Set(referenceCollections.map(x=>x.id));
  const styles=new Set(referenceStyles.map(x=>x.id));
  const ids=new Set();
  for(const item of referenceItems){
    assert.ok(item.id&&item.title&&item.description&&item.alt);
    assert.ok(!ids.has(item.id)); ids.add(item.id);
    assert.ok(categories.has(item.category));
    assert.ok(styles.has(item.style));
    assert.match(item.image,/^references\/(poses|motion|hair|clothing)\/.+\.webp$/);
    assert.ok(item.width>0&&item.height>0);
    assert.ok(['portrait','landscape'].includes(item.orientation));
    assert.ok(Array.isArray(item.tags)&&item.tags.length>0);
  }
});

test('reference page includes filters, full-size links and responsive landscape cards',async()=>{
  const page=await readFile('src/pages/reference-library.astro','utf8');
  const css=await readFile('src/styles/reference-library.css','utf8');
  assert.match(page,/data-reference-category/);
  assert.match(page,/data-reference-style/);
  assert.match(page,/View large/);
  assert.match(page,/reference-card-landscape/);
  assert.match(page,/id="how-to-use"/);
  assert.match(css,/object-fit:contain/);
  assert.match(css,/grid-column:span 2/);
});
