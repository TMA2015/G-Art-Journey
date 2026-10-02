import {learningPaths} from './learning-paths.mjs';

const pathById=new Map(learningPaths.map(path=>[path.id,path]));

const stageById=(path)=>new Map((path.stages||[]).map(stage=>[stage.id,stage]));

const coreMemberships=[];
const optionalMemberships=[];

for(const path of learningPaths){
 const stages=stageById(path);
 path.steps.forEach((step,index)=>{
  if(step.kind!=='guide') return;
  const nextStep=path.steps[index+1];
  coreMemberships.push({
   slug:step.slug,
   pathId:path.id,
   pathTitle:path.title,
   role:'core',
   stage:step.stage?stages.get(step.stage)||null:null,
   index,
   nextSlug:nextStep?.kind==='guide'?nextStep.slug:null
  });
 });

 for(const slug of path.explore||[]){
  optionalMemberships.push({slug,pathId:path.id,pathTitle:path.title,role:'explore',group:null});
 }
 for(const group of path.exploreGroups||[]){
  for(const slug of group.guides){
   optionalMemberships.push({slug,pathId:path.id,pathTitle:path.title,role:'explore',group:group.label||null});
  }
 }
 for(const slug of path.supportGuides||[]){
  optionalMemberships.push({slug,pathId:path.id,pathTitle:path.title,role:'support',group:null});
 }
 for(const group of path.supportGroups||[]){
  for(const slug of group.guides){
   optionalMemberships.push({slug,pathId:path.id,pathTitle:path.title,role:'support',group:group.label||null});
  }
 }
}

const allMemberships=[...coreMemberships,...optionalMemberships];

export function getGuideContinuity(slug){
 const core=coreMemberships.filter(item=>item.slug===slug);
 const optional=optionalMemberships.filter(item=>item.slug===slug);
 const primary=core[0]||optional[0]||null;
 if(!primary)return null;

 const memberships=[...core,...optional].map(item=>({
  ...item,
  path:pathById.get(item.pathId)
 })).filter(item=>item.path);

 return {
  slug,
  primary:{...primary,path:pathById.get(primary.pathId)},
  memberships,
  nextSlug:primary.role==='core'?primary.nextSlug:null
 };
}

export function getAllGuideContinuity(){
 const slugs=[...new Set(allMemberships.map(item=>item.slug))];
 return new Map(slugs.map(slug=>[slug,getGuideContinuity(slug)]));
}
