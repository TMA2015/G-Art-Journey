import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {getGuides} from '../src/i18n/content.mjs';
test('portrait pilot has five panels sharing one construction path',async()=>{
 const guide=getGuides('en').find(x=>x.slug==='draw-a-pencil-portrait');
 assert.equal(guide.visualSequence,'infographics/portrait-five-stages.svg');
 const svg=await readFile('public/'+guide.visualSequence,'utf8');
 assert.match(svg,/<title id="title">/);
 assert.match(svg,/<desc id="desc">/);
 assert.match(svg,/SAME FACE/);
 assert.equal((svg.match(/<rect x="0" y="165"/g)||[]).length,5);
 assert.equal((svg.match(/A Portrait, One Step at a Time/g)||[]).length,1);
});
test('downloadable pilot is linked only on guides with real sequence art',async()=>{
 const page=await readFile('src/pages/guide/[slug].astro','utf8');
 assert.match(page,/guide\.visualSequence&&/);
 assert.match(page,/download/);
 assert.match(page,/portrait-sequence/);
 await access('src/styles/portrait-sequence.css');
});
