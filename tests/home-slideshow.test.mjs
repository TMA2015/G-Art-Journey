import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {getHomeShowcase} from '../src/i18n/content.mjs';

test('home slideshow includes Explore Art and My Art topics',()=>{
  const groups=getHomeShowcase('en');
  const explore=groups.find(g=>g.id==='explore-art');
  const myArt=groups.find(g=>g.id==='my-art');
  assert.ok(explore);
  assert.ok(myArt);
  assert.equal(explore.section,'journey');
  assert.equal(myArt.section,'journey');
  assert.ok(explore.images.length>=6);
  assert.equal(myArt.images.length,10);
});

test('My Art home slideshow preserves confirmed 2026 chronology',()=>{
  const myArt=getHomeShowcase('en').find(g=>g.id==='my-art');
  assert.deepEqual(myArt.images.map(i=>i.title),Array.from({length:10},(_,i)=>'Drawing '+String(i+1).padStart(2,'0')));
  assert.ok(myArt.images.every(i=>i.fit==='contain'&&i.href==='my-art/'));
});

test('Explore Art home slideshow links back into Explore content',()=>{
  const explore=getHomeShowcase('en').find(g=>g.id==='explore-art');
  assert.ok(explore.images.some(i=>i.href.startsWith('movement/')));
  assert.ok(explore.images.some(i=>i.href.startsWith('material/')));
  assert.ok(explore.images.every(i=>i.fit==='contain'));
});

test('home hero exposes the two collections with dynamic image links and CTA',async()=>{
  const page=await readFile('src/pages/index.astro','utf8');
  const script=await readFile('src/scripts/home.js','utf8');
  assert.match(page,/showcase\.map\(s=>/);
  assert.match(page,/data-hero-image-link/);
  assert.match(page,/data-hero-source/);
  assert.match(page,/data-hero-cta/);
  assert.match(script,/getHomeShowcase/);
  assert.match(script,/selected\.href\|\|group\.href/);
});


test('home Discover section links only into Explore Art with real Explore imagery',async()=>{
  const page=await readFile('src/pages/index.astro','utf8');
  assert.match(page,/explore\/#artists/);
  assert.match(page,/explore\/#movements/);
  assert.match(page,/explore\/#materials/);
  assert.match(page,/exploreArtists/);
  assert.match(page,/exploreMovements/);
  assert.match(page,/exploreMedia/);
  assert.doesNotMatch(page,/getCollections/);
});

test('home little gallery uses real learner artwork',async()=>{
  const page=await readFile('src/pages/index.astro','utf8');
  assert.match(page,/daughterArt/);
  assert.match(page,/galleryArt=\['07','09'\]/);
  assert.doesNotMatch(page,/showcase\/character-2\.svg/);
  assert.doesNotMatch(page,/showcase\/pencil-portrait-2\.svg/);
});


test('home hero exposes only Explore Art and My Art choices',async()=>{
  const groups=getHomeShowcase('en');
  assert.deepEqual(groups.map(g=>g.id),['explore-art','my-art']);
  const page=await readFile('src/pages/index.astro','utf8');
  assert.doesNotMatch(page,/G-Art Showcase/);
  assert.doesNotMatch(page,/value="daily"/);
  assert.match(page,/showcase\.map\(s=>/);
});

test('home hero defaults to Explore Art when no valid saved choice exists',async()=>{
  const script=await readFile('src/scripts/home.js','utf8');
  assert.match(script,/let chosen='explore-art'/);
  assert.doesNotMatch(script,/dailyGroups|dailyEligible|dailyGroup/);
});
