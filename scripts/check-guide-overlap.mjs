import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {humanGuides} from '../src/data/human-guides.mjs';
import {characterGuides} from '../src/data/character-guides.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const sourcePath=path.join(root,'assets/guides/skill-intents.json');

export function auditSkillIntents(ledger,{published=humanGuides,planned=characterGuides}={}){
 const problems=[];
 const all=[...published.map(g=>({slug:g.slug,status:'published'})),...planned.map(g=>({slug:g.slug,status:'staged'}))];
 const seen=new Set(), skills=new Map();
 for(const g of ledger.guides||[]){
  if(seen.has(g.slug))problems.push('Duplicate ledger slug: '+g.slug);
  seen.add(g.slug);
  if(!['published','staged'].includes(g.status)||!g.primarySkill||!g.family||!g.visibleEvidence||!Array.isArray(g.stageFocus)||g.stageFocus.length!==5||new Set(g.stageFocus).size!==5)problems.push('Incomplete learning purpose: '+g.slug);
  if(skills.has(g.primarySkill))problems.push('Repeated primary skill: '+g.primarySkill+' ('+skills.get(g.primarySkill)+' and '+g.slug+')');
  skills.set(g.primarySkill,g.slug);
 }
 for(const g of all){
  const entry=ledger.guides.find(x=>x.slug===g.slug);
  if(!entry)problems.push('Guide lacks skill-intent review: '+g.slug);
  else if(entry.status!==g.status)problems.push('Skill status mismatch: '+g.slug);
 }
 const recorded=new Set(all.map(x=>x.slug));
 for(const g of ledger.guides)if(!recorded.has(g.slug))problems.push('Stale skill-intent entry: '+g.slug);
 const pairs=[];
 for(let i=0;i<ledger.guides.length;i++)for(let j=i+1;j<ledger.guides.length;j++){
  const a=ledger.guides[i],b=ledger.guides[j];
  if(a.family!==b.family)continue;
  const same=a.stageFocus.filter(v=>b.stageFocus.includes(v)).length;
  const similarity=same/(10-same);
  if(similarity>=0.67)pairs.push({slugs:[a.slug,b.slug],sharedStages:same,similarity});
 }
 const exception=ledger.approvedLegacyOverlap||{};
 if(!Array.isArray(exception.slugs)||exception.slugs.length!==2||!exception.reason)problems.push('Missing owner-approved existing overlap exception');
 else if(!exception.slugs.every(slug=>published.some(g=>g.slug===slug)))problems.push('Legacy exception refers to an unpublished guide');
 for(const pair of pairs){
  const permitted=pair.slugs.every(s=>exception.slugs.includes(s));
  if(!permitted)problems.push('Potential duplicate instructional sequence: '+pair.slugs.join(' / '));
 }
 return {ok:problems.length===0,problems,pairs,reviewed:ledger.guides.length};
}
export async function main(){
 const ledger=JSON.parse(await readFile(sourcePath,'utf8'));
 const result=auditSkillIntents(ledger);
 console.log('Learning-intent audit: '+result.reviewed+' guides, '+result.pairs.length+' high-overlap pairs.');
 for(const p of result.problems)console.error('ERROR: '+p);
 if(!result.ok)process.exitCode=1;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await main();
