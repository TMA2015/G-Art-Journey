import {readFile} from 'node:fs/promises';
import {guides} from '../src/data/content.mjs';
import {characterGuides} from '../src/data/character-guides.mjs';
import {humanGuides} from '../src/data/human-guides.mjs';
import {characterTopics,humanTopics,digitalSeries} from '../src/data/guide-topics.mjs';
import {referenceCollections,referenceItems,referenceStyles} from '../src/data/reference-library.mjs';

const errors=[];
const warn=(message)=>errors.push(message);
const present=(value)=>typeof value==='string'&&value.trim().length>0;
const startsLikeSentence=(value)=>present(value)&&/^[A-Z0-9“"'(]/.test(value.trim());
const activeGuides=guides.filter(g=>!g.retired&&!g.artPending);

const unique=(values,label)=>{
 const seen=new Set();
 for(const value of values){
  if(seen.has(value))warn(`${label}: duplicate "${value}"`);
  seen.add(value);
 }
};

unique(activeGuides.map(g=>g.slug),'active guide slug');
unique(activeGuides.map(g=>g.title),'active guide title');

for(const guide of activeGuides){
 const id=guide.slug||'(missing slug)';
 for(const field of ['slug','title','description','category','tag','difficulty','time','supplies']){
  if(!present(guide[field]))warn(`${id}: missing ${field}`);
 }
 if((guide.description||'').length>240)warn(`${id}: description is over 240 characters`);
 if(!Array.isArray(guide.steps)||guide.steps.length<3||guide.steps.length>7){
  warn(`${id}: expected 3–7 teaching steps, got ${guide.steps?.length??0}`);
 }else{
  const stepTitles=[];
  guide.steps.forEach((step,index)=>{
   if(!present(step.title))warn(`${id}: step ${index+1} missing title`);
   if(!present(step.body))warn(`${id}: step ${index+1} missing body`);
   if((step.body||'').length>420)warn(`${id}: step ${index+1} body is over 420 characters`);
   if(present(step.title))stepTitles.push(step.title.trim().toLowerCase());
  });
  unique(stepTitles,`${id} step title`);
 }
 if(!present(guide.tryIt))warn(`${id}: missing Try it prompt`);
 else{
  if(!startsLikeSentence(guide.tryIt))warn(`${id}: Try it should begin like a sentence`);
  if(guide.tryIt.length>420)warn(`${id}: Try it is over 420 characters`);
 }
 if(!present(guide.remember))warn(`${id}: missing Remember prompt`);
 else{
  if(!startsLikeSentence(guide.remember))warn(`${id}: Remember should begin like a sentence`);
  if(guide.remember.length>420)warn(`${id}: Remember is over 420 characters`);
 }
}

unique(characterTopics.map(x=>x.id),'Character Art topic id');
unique(characterTopics.map(x=>x.label),'Character Art topic label');
for(const topic of characterTopics){
 if(!present(topic.description))warn(`Character topic ${topic.id}: missing description`);
 const lessons=characterGuides.filter(g=>g.group===topic.id);
 if(lessons.length!==3)warn(`Character topic ${topic.id}: expected 3 lessons, got ${lessons.length}`);
 const orders=lessons.map(g=>g.groupOrder).sort((a,b)=>a-b);
 if(JSON.stringify(orders)!==JSON.stringify([0,1,2]))warn(`Character topic ${topic.id}: groupOrder must be 0,1,2`);
}

const humanGroupMap={faces:'face',figures:'figure'};
unique(humanTopics.map(x=>x.id),'Human Drawing topic id');
for(const topic of humanTopics){
 const group=humanGroupMap[topic.id];
 if(!group)warn(`Human topic ${topic.id}: no content-group mapping in audit`);
 else if(humanGuides.filter(g=>g.group===group).length!==4)warn(`Human topic ${topic.id}: expected 4 lessons`);
 if(!present(topic.description))warn(`Human topic ${topic.id}: missing description`);
}

for(const [slug,series] of Object.entries(digitalSeries)){
 const parent=activeGuides.find(g=>g.slug===slug);
 if(!parent){warn(`Digital topic ${slug}: missing active parent guide`);continue;}
 if(!present(series.description))warn(`Digital topic ${slug}: missing description`);
 if(series.lessons.length!==5)warn(`Digital topic ${slug}: expected 5 lessons, got ${series.lessons.length}`);
 if(parent.posterGallery?.length!==series.lessons.length)warn(`Digital topic ${slug}: poster/lesson count mismatch`);
 if(parent.steps?.length!==series.lessons.length)warn(`Digital topic ${slug}: parent step/lesson count mismatch`);
 unique(series.lessons.map(x=>x.slug),`Digital topic ${slug} lesson slug`);
 for(const lesson of series.lessons){
  if(!present(lesson.title)||!present(lesson.description))warn(`Digital topic ${slug}: incomplete lesson metadata for ${lesson.slug}`);
  if((lesson.description||'').length>220)warn(`Digital topic ${slug}/${lesson.slug}: description is over 220 characters`);
 }
}

unique(referenceCollections.map(x=>x.id),'Reference collection id');
unique(referenceItems.map(x=>x.id),'Reference item id');
const collectionIds=new Set(referenceCollections.map(x=>x.id));
const styleIds=new Set(referenceStyles.map(x=>x.id));
for(const item of referenceItems){
 if(!collectionIds.has(item.category))warn(`Reference ${item.id}: unknown category ${item.category}`);
 if(!styleIds.has(item.style))warn(`Reference ${item.id}: unknown style ${item.style}`);
 for(const field of ['title','description','alt','image'])if(!present(item[field]))warn(`Reference ${item.id}: missing ${field}`);
 if((item.description||'').length>240)warn(`Reference ${item.id}: description is over 240 characters`);
 if(!Array.isArray(item.tags)||item.tags.length<2)warn(`Reference ${item.id}: expected at least 2 tags`);
}

const publicCopyFiles=[
 'src/pages/guides.astro',
 'src/pages/character-styles.astro',
 'src/i18n/content.mjs',
 'src/data/content.mjs'
];
for(const path of publicCopyFiles){
 const text=await readFile(path,'utf8');
 if(/Disney Princess/i.test(text))warn(`${path}: public copy must use original Fairy-Tale Princess naming, not Disney Princess`);
 if(/Explore all 12 guides|Twelve original illustrated lessons|time:'12 lessons'/i.test(text))warn(`${path}: stale pre-expansion Character Art count found`);
}

if(errors.length){
 console.error('Content consistency audit FAILED');
 for(const error of errors)console.error('- '+error);
 process.exit(1);
}

console.log(`Content consistency audit PASS · ${activeGuides.length} active guides · ${characterTopics.length} Character topics · ${Object.keys(digitalSeries).length} Digital topics · ${referenceItems.length} reference sheets`);
