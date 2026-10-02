import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {learningPaths} from '../src/data/learning-paths.mjs';
import {guides} from '../src/data/content.mjs';
import {characterTopics,digitalSeries} from '../src/data/guide-topics.mjs';

const activeGuides=new Map(guides.filter(g=>!g.retired&&!g.artPending).map(g=>[g.slug,g]));
const expectedIds=['drawing-basics','draw-people','create-characters','draw-places','watercolor-basics','digital-art-basics'];

test('Learning Paths exposes the approved six-path structure',()=>{
 assert.deepEqual(learningPaths.map(x=>x.id),expectedIds);
 assert.equal(new Set(learningPaths.map(x=>x.id)).size,learningPaths.length);
 for(const path of learningPaths){
  assert.ok(path.title);
  assert.ok(path.description);
  assert.ok(path.outcome);
  assert.ok(path.recommended);
  assert.ok(activeGuides.has(path.firstSlug),path.firstSlug);
  assert.ok(Array.isArray(path.steps)&&path.steps.length>0,path.id);
 }
});

test('Every Learning Path guide reference resolves to an active guide',()=>{
 const slugs=[];
 for(const path of learningPaths){
  for(const step of path.steps)if(step.kind==='guide')slugs.push(step.slug);
  for(const slug of path.explore||[])slugs.push(slug);
  for(const slug of path.supportGuides||[])slugs.push(slug);
 }
 for(const slug of slugs){
  assert.ok(activeGuides.has(slug),'missing or retired guide: '+slug);
 }
});

test('Character and Digital branches preserve their existing topic hierarchy',()=>{
 const character=learningPaths.find(x=>x.id==='create-characters');
 assert.ok(character.steps.some(x=>x.kind==='characterTopics'));
 assert.equal(characterTopics.length,6);
 assert.deepEqual(characterTopics.map(x=>x.id),['manga','webtoon','manhua','cartoon','chibi','princess']);

 const digital=learningPaths.find(x=>x.id==='digital-art-basics');
 const seriesSteps=digital.steps.filter(x=>x.kind==='digitalSeries');
 assert.deepEqual(seriesSteps.map(x=>x.slug),['digital-color-layers','color-a-face-in-layers']);
 for(const step of seriesSteps){
  assert.ok(digitalSeries[step.slug]);
  assert.equal(digitalSeries[step.slug].lessons.length,5);
  assert.ok(activeGuides.has(step.slug));
 }
});

test('Start Here routes and Drawing Guides entry point exist',async()=>{
 await access('src/pages/start-here.astro');
 await access('src/pages/en/start-here.astro');
 const page=await readFile('src/pages/start-here.astro','utf8');
 const guidesPage=await readFile('src/pages/guides.astro','utf8');
 const base=await readFile('src/layouts/Base.astro','utf8');
 assert.match(page,/What would you like/);
 assert.match(page,/Suggested, not locked/);
 assert.match(page,/characterTopics/);
 assert.match(page,/digitalSeries/);
 assert.match(guidesPage,/Start with a learning path/);
 assert.match(guidesPage,/learningPaths\.length/);
 assert.match(base,/relative==='start-here\/'/);
});
