import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,rm} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {walk,summarize,markdown} from '../scripts/check-assets.mjs';
test('recursive scan reads only files and counts bytes',async()=>{
 const root=await mkdtemp(path.join(os.tmpdir(),'g-art-assets-'));
 try{await mkdir(path.join(root,'artworks','daughter'),{recursive:true});await writeFile(path.join(root,'artworks','daughter','first.webp'),Buffer.alloc(12));await writeFile(path.join(root,'readme.txt'),'x');
 const files=await walk(root);assert.equal(files.length,2);assert.equal(files.find(x=>x.path.includes('first.webp')).bytes,12);}
 finally{await rm(root,{recursive:true,force:true});}
});
test('light art reports do not block release',()=>{
 const images=[{path:'artworks/daughter/sketch.webp',bytes:220000},{path:'infographics/lesson.svg',bytes:61000},{path:'showcase/flower.webp',bytes:96000}];
 const report=summarize(images,720000);
 assert.equal(report.imageCount,3);assert.equal(report.warnings.length,0);assert.equal(report.totals.artworks,220000);
 assert.match(markdown(report,214),/No image exceeded/);
});
test('large files warn but are never deleted or automatically rejected',()=>{
 const report=summarize([{path:'artworks/dad/sketch.jpg',bytes:2100000},{path:'infographics/detail.png',bytes:1100000}],230000000);
 assert.equal(report.warnings.length,3);
 assert.ok(report.warnings.some(x=>x.path==='artworks/dad/sketch.jpg'));
 assert.ok(report.warnings.some(x=>x.path==='built website'));
 assert.match(markdown(report),/advisory targets/);
});
