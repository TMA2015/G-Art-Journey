import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadManifest,verify} from './art-batch.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function argsParse(args){
 const o={};
 for(let i=0;i<args.length;i++){
  if(args[i]==='--branch')o.branch=args[++i];
  else if(args[i]==='--manifest')o.manifest=args[++i];
  else if(args[i]==='--push')o.push=true;
  else throw Error('Unknown argument: '+args[i]);
 }
 if(!/^feat\/[a-z0-9._/-]+$/.test(o.branch||'')||o.branch.includes('..'))throw Error('Use an explicit feat/ branch, never main');
 return o;
}
async function main(){
 const opt=argsParse(process.argv.slice(2));
 const manifest=await loadManifest(opt.manifest||'assets/batches/character-02.json');
 const {default:sharp}=await import('sharp');
 const records=await verify(manifest,sharp);
 const content=await readFile(path.join(root,'src/data/content.mjs'),'utf8');
 if(!content.includes('...characterGuides'))throw Error('Batch is not activated; run art:prepare --activate first');
 const manifestSource=await readFile(path.join(root,'src/data/character-assets.mjs'),'utf8');
 for(const r of records)if(!manifestSource.includes(r.sha256))throw Error('Checksum manifest is out of date: '+r.slug);
 const paths=[
  ...records.map(x=>x.path),
  'src/data/character-guides.mjs','src/data/character-assets.mjs','src/data/content.mjs'
 ];
 console.log('Validated files for '+manifest.batchId+':\n'+paths.map(x=>'  '+x).join('\n'));
 if(!opt.push){console.log('Dry run only. Re-run with --push and an authorized GitHub token.');return;}
 const token=process.env.GH_TOKEN||process.env.GITHUB_TOKEN;
 const repo=process.env.GITHUB_REPOSITORY||'TMA2015/G-Art-Journey';
 if(!token)throw Error('No authorized GH_TOKEN/GITHUB_TOKEN. Use an authorized Work git environment instead; never paste tokens into chat.');
 if(repo!=='TMA2015/G-Art-Journey')throw Error('Unexpected repository: '+repo);
 const api='https://api.github.com/repos/'+repo;
 const call=async(method,route,data)=>{
  const res=await fetch(api+route,{method,headers:{
   'Authorization':'Bearer '+token,
   'Accept':'application/vnd.github+json',
   'X-GitHub-Api-Version':'2022-11-28',
   'Content-Type':'application/json',
   'User-Agent':'G-Art-Journey-Asset-Import'
  },body:data===undefined?undefined:JSON.stringify(data),signal:AbortSignal.timeout(30000)});
  if(!res.ok)throw Error('GitHub request failed ('+res.status+') at '+route+': '+(await res.text()).slice(0,180));
  return res.json();
 };
 const ref=await call('GET','/git/ref/heads/'+opt.branch);
 const parent=ref.object.sha;
 const parentCommit=await call('GET','/git/commits/'+parent);
 const tree=[];
 for(const p of paths){
  const bytes=await readFile(path.join(root,p));
  const blob=await call('POST','/git/blobs',{content:bytes.toString('base64'),encoding:'base64'});
  tree.push({path:p,mode:'100644',type:'blob',sha:blob.sha});
  console.log('Uploaded '+p+' ('+Math.ceil(bytes.length/1024)+' KiB)');
 }
 const newTree=await call('POST','/git/trees',{base_tree:parentCommit.tree.sha,tree});
 const commit=await call('POST','/git/commits',{message:'feat: publish '+manifest.batchId+' optimized illustration batch',tree:newTree.sha,parents:[parent]});
 const beforePatch=await call('GET','/git/ref/heads/'+opt.branch);
 if(beforePatch.object.sha!==parent)throw Error('Branch changed during upload; no reference was updated');
 await call('PATCH','/git/refs/heads/'+opt.branch,{sha:commit.sha,force:false});
 console.log('Published '+paths.length+' files to '+opt.branch+' @ '+commit.sha+'. Review the PR checks before merging.');
}
main().catch(err=>{console.error(err.message);process.exitCode=1;});
