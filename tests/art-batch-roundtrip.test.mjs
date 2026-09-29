import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,readFile,rm,mkdir} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import sharp from 'sharp';
import {prepare,verify,validateManifest} from '../scripts/art-batch.mjs';

test('actual PNG is converted into a clean WebP and its SHA-256 inventory matches',async()=>{
 const folder=await mkdtemp(path.join(os.tmpdir(),'g-art-binary-'));
 const outputDir='public/infographics/character-binary-test';
 const m=validateManifest({
  batchId:'character-binary-test',
  outputDir,
  maxLongEdge:1200,
  minShortEdge:600,
  preferredMaxBytes:1048576,
  items:[{slug:'roundtrip',sourceName:'roundtrip.png',filename:'roundtrip.webp'}]
 });
 try{
  const input=path.join(folder,'inputs');await mkdir(input,{recursive:true});
  await sharp({create:{width:820,height:1220,channels:4,background:{r:249,g:235,b:228,alpha:1}}})
   .png().toFile(path.join(input,'roundtrip.png'));
  const made=await prepare(m,input,sharp);
  assert.equal(made.length,1);
  const verified=await verify(m,sharp);
  assert.deepEqual(made,verified);
  const bytes=await readFile(path.join(outputDir,'roundtrip.webp'));
  assert.equal(bytes.toString('ascii',0,4),'RIFF');
  assert.equal(bytes.toString('ascii',8,12),'WEBP');
  assert.ok(bytes.length<1048576);
  const meta=await sharp(bytes).metadata();
  assert.equal(meta.width,807);
  assert.equal(meta.height,1200);
  assert.equal(meta.exif,undefined);
 }finally{
  await rm(folder,{recursive:true,force:true});
  await rm(outputDir,{recursive:true,force:true});
 }
});
test('an incomplete batch fails closed',async()=>{
 const m=validateManifest({batchId:'missing-test',outputDir:'public/infographics/missing-test',items:[{slug:'missing',sourceName:'missing.png',filename:'missing.webp'}]});
 await assert.rejects(()=>verify(m,sharp),/Missing approved poster/);
});
