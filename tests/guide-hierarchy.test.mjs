import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {guides} from '../src/data/content.mjs';
import {humanGuides} from '../src/data/human-guides.mjs';
import {characterGuides} from '../src/data/character-guides.mjs';
import {humanTopics,characterTopics,digitalSeries} from '../src/data/guide-topics.mjs';

test('Digital Art has two topics with five standalone lesson definitions each',async()=>{
 assert.deepEqual(Object.keys(digitalSeries).sort(),['color-a-face-in-layers','digital-color-layers']);
 for(const [slug,series] of Object.entries(digitalSeries)){
  const guide=guides.find(g=>g.slug===slug);
  assert.ok(guide,slug);
  assert.equal(series.lessons.length,5,slug);
  assert.equal(guide.posterGallery?.length,5,slug);
  assert.equal(new Set(series.lessons.map(x=>x.slug)).size,5,slug);
  for(let i=0;i<5;i++){
   assert.ok(series.lessons[i].title);
   assert.ok(series.lessons[i].description);
   await access('public/'+guide.posterGallery[i].image);
  }
 }
});

test('Human Drawing exposes two topic shelves and keeps all eight lessons reachable',()=>{
 assert.deepEqual(humanTopics.map(x=>x.id),['faces','figures']);
 assert.equal(humanGuides.length,8);
 assert.equal(humanGuides.filter(x=>x.group==='face').length,4);
 assert.equal(humanGuides.filter(x=>x.group==='figure').length,4);
});

test('Character Art exposes six topics with beginner companions added to Manhua and Princess',()=>{
 assert.deepEqual(characterTopics.map(x=>x.id),['manga','webtoon','manhua','cartoon','chibi','princess']);
 const counts=Object.fromEntries(characterTopics.map(topic=>[topic.id,characterGuides.filter(x=>x.group===topic.id).length]));
 assert.deepEqual(counts,{manga:3,webtoon:3,manhua:6,cartoon:3,chibi:3,princess:6});
 assert.equal(characterGuides.length,24);
 assert.deepEqual(characterGuides.filter(x=>x.group==='manhua').sort((a,b)=>a.groupOrder-b.groupOrder).slice(0,3).map(x=>x.slug),
  ['manhua-full-body-foundation','manhua-clothing-simple-shapes','manhua-pose-to-finished']);
 assert.deepEqual(characterGuides.filter(x=>x.group==='princess').sort((a,b)=>a.groupOrder-b.groupOrder).slice(0,3).map(x=>x.slug),
  ['simple-princess-face','simple-princess-dress','simple-princess-pose']);
});

test('topic-first pages and standalone Digital lesson route are wired',async()=>{
 const guidesPage=await readFile('src/pages/guides.astro','utf8');
 const digitalParent=await readFile('src/pages/guide/[slug].astro','utf8');
 const digitalLesson=await readFile('src/pages/guide/[slug]/[lesson].astro','utf8');
 const humanPage=await readFile('src/pages/human-drawing.astro','utf8');
 const characterPage=await readFile('src/pages/character-styles.astro','utf8');
 assert.match(guidesPage,/groupedLessonSlugs/);
 assert.match(guidesPage,/human-drawing\//);
 assert.match(guidesPage,/character-styles\//);
 assert.match(guidesPage,/characterTopics\.length/);
 assert.match(guidesPage,/characterGuides\.length/);
 assert.match(guidesPage,/referenceItems\.length/);
 assert.doesNotMatch(guidesPage,/time:'12 lessons'/);
 assert.doesNotMatch(guidesPage,/Twelve original illustrated lessons/);
 assert.doesNotMatch(guidesPage,/Explore all 12 guides/);
 assert.match(digitalParent,/OPEN LESSON/);
 assert.match(digitalLesson,/View large/);
 assert.match(digitalLesson,/Save WebP/);
 assert.match(digitalLesson,/PREVIOUS LESSON/);
 assert.match(digitalLesson,/NEXT LESSON/);
 assert.match(humanPage,/OPEN TOPIC/);
 assert.match(characterPage,/OPEN TOPIC/);
});


test('all Human Drawing posters pin exact binary dimensions',()=>{
 for(const guide of humanGuides){
  assert.ok(Number.isInteger(guide.posterWidth)&&guide.posterWidth>0,guide.slug+' missing posterWidth');
  assert.ok(Number.isInteger(guide.posterHeight)&&guide.posterHeight>0,guide.slug+' missing posterHeight');
 }
 const expectedWide=new Set(['face-expressions','head-angles','faces-by-age','standing-figure','sitting-poses','body-silhouettes']);
 for(const guide of humanGuides){
  if(expectedWide.has(guide.slug)){
   assert.equal(guide.posterWidth,1122,guide.slug);
   assert.equal(guide.posterHeight,1402,guide.slug);
  }
 }
});
