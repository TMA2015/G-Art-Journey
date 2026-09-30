import {mkdir,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(root,'assets/core/hands-simple-forms.svg');
const output=path.join(root,'public/infographics/core/hands-simple-forms.webp');
await mkdir(path.dirname(output),{recursive:true});
const svg=await readFile(source);
const info=await sharp(svg).resize(900,1200).webp({quality:85}).toFile(output);
const bytes=await readFile(output);
const sha256=createHash('sha256').update(bytes).digest('hex');
console.log('Generated '+path.relative(root,output)+' · '+info.width+'x'+info.height+' · '+bytes.length+' bytes · sha256 '+sha256);
