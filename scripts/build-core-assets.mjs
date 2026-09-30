import {mkdir,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
import {coreAssetManifest} from '../src/data/core-assets.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

for(const asset of coreAssetManifest){
  const source=path.join(root,asset.sourcePath);
  const output=path.join(root,asset.outputPath);
  await mkdir(path.dirname(output),{recursive:true});
  const svg=await readFile(source);
  const info=await sharp(svg)
    .resize(asset.width,asset.height)
    .webp({quality:85})
    .toFile(output);
  const bytes=await readFile(output);
  const sha256=createHash('sha256').update(bytes).digest('hex');
  console.log('Generated '+path.relative(root,output)+' · '+info.width+'x'+info.height+' · '+bytes.length+' bytes · sha256 '+sha256);
}
