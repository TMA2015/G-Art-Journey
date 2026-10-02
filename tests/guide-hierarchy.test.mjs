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

test('Character Art exposes four style topics with three lessons each',()=>{
 assert.deepEqual(characterTopics.map(x=>x.id),['manga','webtoon','manhua','cartoon']);
 for(const topic of characterTopics)assert.equal(characterGuides.filter(x=>x.group===topic.id).length,3,topic.id);
 assert.equal(characterGuides.length,12);
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
 assert.match(digitalParent,/OPEN LESSON/);
 assert.match(digitalLesson,/View large/);
 assert.match(digitalLesson,/Save WebP/);
 assert.match(digitalLesson,/PREVIOUS LESSON/);
 assert.match(digitalLesson,/NEXT LESSON/);
 assert.match(humanPage,/OPEN TOPIC/);
 assert.match(characterPage,/OPEN TOPIC/);
});
