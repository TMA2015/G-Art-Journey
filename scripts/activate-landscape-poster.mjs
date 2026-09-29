import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(await readFile(path.join(root,'assets/batches/landscape-refresh-01.json'),'utf8'));
const artPath=path.join(root,'public',manifest.targetImage);
const sourcePath=path.join(root,'src/data/content.mjs');
export function updateGuide(source){
 const key="slug:'draw-a-pencil-landscape'";
 const next="slug:'draw-a-manga-face'";
 const start=source.indexOf(key),end=source.indexOf(next,start);
 if(start<0||end<0)throw Error('Cannot identify the unique existing mountain/lake guide');
 const before=source.slice(start,end);
 const oldImage="image:'showcase/pencil-landscape.svg'";
 const newImage="poster:true, posterAlt:'Original G-Art pencil landscape infographic with five clear drawing stages', posterWidth:1055, posterHeight:1491, image:'"+manifest.targetImage+"'";
 if(before.includes(newImage))return source;
 if(!before.includes(oldImage))throw Error('Existing guide artwork changed; review manually before activation');
 return source.slice(0,start)+before.replace(oldImage,newImage)+source.slice(end);
}
export async function verifyArt(){
 const bytes=await readFile(artPath);
 if(bytes.length!==manifest.bytes)throw Error('Landscape image size mismatch');
 if(bytes.toString('ascii',0,4)!=='RIFF'||bytes.toString('ascii',8,12)!=='WEBP')throw Error('Landscape artwork is not a WebP');
 const digest=createHash('sha256').update(bytes).digest('hex');
 if(digest!==manifest.sha256)throw Error('Landscape image checksum mismatch');
 const {default:sharp}=await import('sharp');
 const meta=await sharp(bytes,{failOn:'error'}).metadata();
 if(meta.width!==manifest.width||meta.height!==manifest.height)throw Error('Landscape image dimensions mismatch');
 return {bytes:bytes.length,sha256:digest,width:meta.width,height:meta.height};
}
export async function main(args=process.argv.slice(2)){
 if(!args.includes('--check')&&!args.includes('--activate'))throw Error('Specify --check or --activate');
 const verified=await verifyArt();
 const source=await readFile(sourcePath,'utf8');
 const updated=updateGuide(source);
 if(args.includes('--activate')&&updated!==source){
  await writeFile(sourcePath,updated);
  console.log('Updated existing landscape guide without adding a duplicate route.');
 }
 console.log('Verified original landscape poster:',verified.width+'x'+verified.height,verified.bytes+' bytes');
 return verified;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))main().catch(e=>{console.error(e.message);process.exitCode=1;});
