import test from 'node:test';
import assert from 'node:assert/strict';
import {getGuideContinuity,getAllGuideContinuity} from '../src/data/learning-path-continuity.mjs';

test('core Learning Path lessons expose the approved next lesson',()=>{
 const face=getGuideContinuity('face-basics');
 assert.equal(face.primary.role,'core');
 assert.equal(face.primary.pathId,'draw-people');
 assert.equal(face.primary.stage.label,'Face & Head');
 assert.equal(face.nextSlug,'face-expressions');

 const proportion=getGuideContinuity('figure-proportions');
 assert.equal(proportion.primary.stage.label,'Figure & Motion');
 assert.equal(proportion.nextSlug,'gesture-motion-basics');

 const gesture=getGuideContinuity('gesture-motion-basics');
 assert.equal(gesture.nextSlug,'standing-figure');

 const basics=getGuideContinuity('pencil-control-lines-pressure');
 assert.equal(basics.primary.pathId,'drawing-basics');
 assert.equal(basics.nextSlug,'pencil-simple-forms');
});

test('end-of-core sequence has no invented next lesson',()=>{
 const basicsEnd=getGuideContinuity('pencil-textures');
 assert.equal(basicsEnd.primary.role,'core');
 assert.equal(basicsEnd.nextSlug,null);

 const peopleEnd=getGuideContinuity('hair-masses');
 assert.equal(peopleEnd.primary.role,'core');
 assert.equal(peopleEnd.nextSlug,null);
});

test('optional lessons keep support/explore roles without forced next lesson',()=>{
 const feet=getGuideContinuity('feet-simple-forms');
 assert.equal(feet.primary.role,'explore');
 assert.equal(feet.nextSlug,null);
 assert.ok(feet.memberships.some(item=>item.pathId==='draw-people'&&item.role==='explore'));
 assert.ok(feet.memberships.some(item=>item.pathId==='create-characters'&&item.role==='support'));

 const palette=getGuideContinuity('simple-color-harmony');
 assert.equal(palette.nextSlug,null);
 assert.ok(palette.memberships.some(item=>item.pathId==='create-characters'&&item.group==='Color'));
 assert.ok(palette.memberships.some(item=>item.pathId==='watercolor-basics'&&item.role==='explore'));
 assert.ok(palette.memberships.some(item=>item.pathId==='digital-art-basics'&&item.role==='explore'));
});

test('continuity index covers every guide referenced directly by path metadata',()=>{
 const index=getAllGuideContinuity();
 for(const slug of ['face-basics','gesture-motion-basics','feet-simple-forms','simple-color-harmony','landscape-big-shapes','watercolor-first-flower']){
  assert.ok(index.has(slug),slug);
 }
});
