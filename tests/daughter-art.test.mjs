import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {daughterArt,daughterArtTags} from '../src/data/daughter-art.mjs';

test('daughter art V1 keeps exactly the ten approved candidate IDs',()=>{
  assert.deepEqual(daughterArt.map(x=>x.legacyId),['01','02','03','04','05','06','07','08','09','10']);
});

test('daughter art metadata is lightweight and filterable',()=>{
  for(const item of daughterArt){
    assert.equal(item.medium,'Procreate · iPad');
    assert.equal(item.date,'2026');
    assert.ok(Number.isInteger(item.sortOrder)&&item.sortOrder>=1&&item.sortOrder<=10);
    assert.match(item.src,/^artworks\/daughter\/\d{2}\.avif$/);
    assert.ok(Array.isArray(item.tags)&&item.tags.length>=2);
    assert.ok(item.tags.every(tag=>daughterArtTags.includes(tag)));
    assert.ok(['owner-approved-gallery','original','fan-art','reference'].includes(item.origin));
  }
});

test('My Art page provides slideshow filters, gallery filters and time ordering controls',async()=>{
  const page=await readFile('src/pages/my-art.astro','utf8');
  assert.match(page,/data-art-filter/);
  assert.match(page,/data-art-slide/);
  assert.match(page,/data-art-sort/);
  assert.match(page,/Newest first/);
  assert.match(page,/Oldest first/);
  assert.doesNotMatch(page,/data-rating|data-score|progress-bar/i);
});
