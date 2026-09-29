import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {auditSkillIntents} from '../scripts/check-guide-overlap.mjs';
import {humanGuides} from '../src/data/human-guides.mjs';
import {characterGuides} from '../src/data/character-guides.mjs';
const load=()=>readFile('assets/guides/skill-intents.json','utf8').then(JSON.parse);
test('all approved and planned guides have separate primary skills',async()=>{
 const result=auditSkillIntents(await load());
 assert.equal(result.ok,true,result.problems.join('\n'));
 assert.equal(result.reviewed,humanGuides.length+characterGuides.length);
 assert.equal(result.pairs.length,0);
});
test('new duplicate skill is rejected without changing approved pair',async()=>{
 const source=await load(), bad=structuredClone(source);
 bad.guides.find(x=>x.slug==='manga-figure').primarySkill=bad.guides.find(x=>x.slug==='standing-figure').primarySkill;
 assert.match(auditSkillIntents(bad).problems.join('\n'),/Repeated primary skill/);
 assert.deepEqual(source.approvedLegacyOverlap.slugs,['figure-proportions','standing-figure']);
});
test('copying a five-stage sequence is blocked',async()=>{
 const source=await load(),bad=structuredClone(source);
 bad.guides.find(x=>x.slug==='manga-figure').stageFocus=[...bad.guides.find(x=>x.slug==='webtoon-character').stageFocus];
 assert.match(auditSkillIntents(bad).problems.join('\n'),/Potential duplicate instructional sequence/);
});
test('an unreviewed new guide requires an entry before publication',async()=>{
 const source=await load(),more=[...characterGuides,{slug:'new-unreviewed'}];
 assert.match(auditSkillIntents(source,{published:humanGuides,planned:more}).problems.join('\n'),/lacks skill-intent review/);
});
