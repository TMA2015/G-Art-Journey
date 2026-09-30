import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
import {materialAssetManifest} from '../src/data/material-assets.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

for(const asset of materialAssetManifest){
  const parts=await Promise.all(asset.sourceChunks.map(p=>readFile(path.join(root,p),'utf8')));
  const bytes=Buffer.from(parts.join(''),'base64');
  if(bytes.length!==asset.sourceBytes)throw new Error(asset.slug+': byte-size mismatch');
  const sha=createHash('sha256').update(bytes).digest('hex');
  if(sha!==asset.sourceSha256)throw new Error(asset.slug+': sha256 mismatch');
  const info=await sharp(bytes).metadata();
  if(info.width!==asset.width||info.height!==asset.height)throw new Error(asset.slug+': dimensions mismatch');
  const output=path.join(root,asset.outputPath);
  await mkdir(path.dirname(output),{recursive:true});
  await writeFile(output,bytes);
  console.log('Generated '+path.relative(root,output)+' · '+info.width+'x'+info.height+' · '+bytes.length+' bytes · sha256 '+sha);
}
