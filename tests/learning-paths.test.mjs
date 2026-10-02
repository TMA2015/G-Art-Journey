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
  for(const group of path.exploreGroups||[])for(const slug of group.guides)slugs.push(slug);
  for(const slug of path.supportGuides||[])slugs.push(slug);
  for(const group of path.supportGroups||[])for(const slug of group.guides)slugs.push(slug);
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


test('SG-01 lessons are placed in Learning Paths as approved',()=>{
 const people=learningPaths.find(x=>x.id==='draw-people');
 const peopleCore=people.steps.filter(x=>x.kind==='guide').map(x=>x.slug);
 assert.equal(peopleCore.indexOf('gesture-motion-basics'),peopleCore.indexOf('figure-proportions')+1);
 assert.equal(peopleCore.indexOf('standing-figure'),peopleCore.indexOf('gesture-motion-basics')+1);
 assert.ok(people.exploreGroups.flatMap(group=>group.guides).includes('feet-simple-forms'));

 const characters=learningPaths.find(x=>x.id==='create-characters');
 const characterSupport=characters.supportGroups.flatMap(group=>group.guides);
 for(const slug of ['gesture-motion-basics','feet-simple-forms','simple-color-harmony'])assert.ok(characterSupport.includes(slug));

 const watercolor=learningPaths.find(x=>x.id==='watercolor-basics');
 const digital=learningPaths.find(x=>x.id==='digital-art-basics');
 assert.ok(watercolor.exploreGroups.flatMap(group=>group.guides).includes('simple-color-harmony'));
 assert.ok(digital.explore.includes('simple-color-harmony'));

 for(const slug of ['gesture-motion-basics','feet-simple-forms','simple-color-harmony'])assert.ok(activeGuides.has(slug));
});


test('Post-SG01 grouping keeps Draw People and Create Characters easy to scan',async()=>{
 const people=learningPaths.find(x=>x.id==='draw-people');
 assert.deepEqual(people.stages.map(x=>x.id),['face-head','figure-motion','finish-figure']);
 assert.deepEqual(people.stages.map(x=>x.label),['Face & Head','Figure & Motion','Finish the Figure']);
 assert.deepEqual(
  people.steps.filter(x=>x.kind==='guide').map(x=>x.stage),
  ['face-head','face-head','face-head','figure-motion','figure-motion','figure-motion','figure-motion','finish-figure','finish-figure']
 );
 assert.deepEqual(people.exploreGroups.map(x=>x.id),['face-details','figure-extras']);
 assert.equal(people.exploreGroups.flatMap(x=>x.guides).length,7);

 const characters=learningPaths.find(x=>x.id==='create-characters');
 assert.deepEqual(characters.supportGroups.map(x=>x.id),['pose-motion','anatomy','hair-clothing','color']);
 assert.deepEqual(characters.supportGroups.map(x=>x.label),['Pose & Motion','Anatomy','Hair & Clothing','Color']);
 assert.equal(characters.supportGroups.flatMap(x=>x.guides).length,7);

 const page=await readFile('src/pages/start-here.astro','utf8');
 assert.match(page,/pathBlocksFor/);
 assert.match(page,/STAGE \{block\.stage\.number\}/);
 assert.match(page,/supportGroupsFor/);
 assert.match(page,/exploreGroupsFor/);
});


test('Watercolor keeps one sky technique in core and moves the duplicate drill to optional practice',()=>{
 const watercolor=learningPaths.find(x=>x.id==='watercolor-basics');
 const core=watercolor.steps.filter(x=>x.kind==='guide').map(x=>x.slug);
 assert.equal(core.length,5);
 assert.ok(core.includes('watercolor-soft-sky-cloud-washes'));
 assert.ok(!core.includes('watercolor-sky-wash-practice'));
 assert.equal(core.at(-1),'watercolor-small-landscape');
 assert.deepEqual(watercolor.exploreGroups.map(x=>x.id),['practice','color-planning']);
 assert.ok(watercolor.exploreGroups.find(x=>x.id==='practice').guides.includes('watercolor-sky-wash-practice'));
 assert.ok(watercolor.exploreGroups.find(x=>x.id==='color-planning').guides.includes('simple-color-harmony'));
});
