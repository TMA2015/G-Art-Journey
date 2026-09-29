import {readdir,stat,readFile,appendFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const IMAGE_TYPES=new Set(['.svg','.png','.jpg','.jpeg','.webp','.avif','.gif']);
const mb=n=>(n/1048576).toFixed(2)+' MB';
const safe=p=>p.replaceAll('\\','/').replace(/[|\r\n]/g,' ');

export async function walk(root,relative=''){
 let entries=[];
 try{entries=await readdir(path.join(root,relative),{withFileTypes:true});}
 catch(error){if(error.code==='ENOENT')return [];throw error;}
 const files=[];
 for(const entry of entries){
  const rel=path.join(relative,entry.name);
  if(entry.isDirectory())files.push(...await walk(root,rel));
  else if(entry.isFile()){
   const info=await stat(path.join(root,rel));
   files.push({path:safe(rel),bytes:info.size});
  }
 }
 return files;
}
export function summarize(images,siteBytes=0,rules={}){
 const rule={galleryWarningBytes:1048576,showcaseWarningBytes:524288,infographicWarningBytes:1048576,otherWarningBytes:1048576,siteNoticeBytes:209715200,sitePlanBytes:524288000,...rules};
 const totals={artworks:0,showcase:0,infographics:0,branding:0,other:0};
 const counts=Object.fromEntries(Object.keys(totals).map(key=>[key,0]));
 const warnings=[];
 const sorted=[...images].sort((a,b)=>b.bytes-a.bytes);
 for(const image of sorted){
  const folder=image.path.split('/')[0];
  const group=Object.hasOwn(totals,folder)?folder:'other';
  totals[group]+=image.bytes;counts[group]++;
  const limit=group==='artworks'?rule.galleryWarningBytes:group==='showcase'?rule.showcaseWarningBytes:group==='infographics'?rule.infographicWarningBytes:rule.otherWarningBytes;
  if(image.bytes>limit)warnings.push({path:image.path,bytes:image.bytes,limit});
 }
 if(siteBytes>rule.siteNoticeBytes)warnings.push({path:'built website',bytes:siteBytes,limit:rule.siteNoticeBytes});
 return {imageCount:images.length,imageBytes:images.reduce((sum,x)=>sum+x.bytes,0),siteBytes,counts,totals,largest:sorted.slice(0,8),warnings,sitePlanBytes:rule.sitePlanBytes};
}
export function markdown(report,repositoryKiB=null){
 const lines=['## G-Art Journey — image budget','',
 '| Metric | Current size |','|---|---:|',
 '| Website images | '+report.imageCount+' files / '+mb(report.imageBytes)+' |',
 '| Published website (all files) | '+mb(report.siteBytes)+' |'];
 if(repositoryKiB!==null)lines.push('| GitHub repository (API estimate, including Git data) | '+mb(repositoryKiB*1024)+' |');
 lines.push('','### Image groups','','| Folder | Images | Size |','|---|---:|---:|');
 for(const key of Object.keys(report.totals))lines.push('| '+key+' | '+report.counts[key]+' | '+mb(report.totals[key])+' |');
 lines.push('','### Largest images','','| File | Size |','|---|---:|');
 for(const file of report.largest)lines.push('| `'+safe(file.path)+'` | '+mb(file.bytes)+' |');
 lines.push('','### Soft warnings');
 if(report.warnings.length===0)lines.push('No image exceeded its recommended size. No storage action is needed.');
 else for(const warning of report.warnings)lines.push('- `'+safe(warning.path)+'`: '+mb(warning.bytes)+' (suggested '+mb(warning.limit)+').');
 lines.push('','These are **advisory targets, not image rejection rules**. Keep diagrams legible. Source art remains optional and separate; do not add paid storage automatically. The GitHub repository size is an approximate API value, not a complete history audit.');
 return lines.join('\n')+'\n';
}
async function repoSize(){
 const name=process.env.GITHUB_REPOSITORY;
 if(!name)return null;
 try{
  const headers={'Accept':'application/vnd.github+json','User-Agent':'G-Art-Journey-Asset-Audit'};
  if(process.env.GITHUB_TOKEN)headers.Authorization='Bearer '+process.env.GITHUB_TOKEN;
  const response=await fetch('https://api.github.com/repos/'+name,{headers,signal:AbortSignal.timeout(3500)});
  if(!response.ok)return null;
  const data=await response.json();
  return typeof data.size==='number'?data.size:null;
 }catch{return null;}
}
export async function main(){
 const publicFiles=(await walk('public')).filter(x=>IMAGE_TYPES.has(path.extname(x.path).toLowerCase()));
 const builtFiles=await walk('dist');
 const builtBytes=builtFiles.reduce((sum,x)=>sum+x.bytes,0);
 const report=summarize(publicFiles,builtBytes);
 const summary=markdown(report,await repoSize());
 process.stdout.write(summary);
 if(process.env.GITHUB_STEP_SUMMARY)await appendFile(process.env.GITHUB_STEP_SUMMARY,summary);
 for(const warning of report.warnings){
  if(process.env.GITHUB_ACTIONS)process.stdout.write('::warning title=Image budget advisory::'+safe(warning.path)+' is '+mb(warning.bytes)+'; suggested '+mb(warning.limit)+'\n');
 }
 return report;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await main();
