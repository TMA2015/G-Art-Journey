import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {guides} from '../src/data/content.mjs';
import {coreAssetManifest} from '../src/data/core-assets.mjs';

test('hands core guide is published with the approved poster metadata',()=>{
  const guide=guides.find(g=>g.slug==='hands-simple-forms');
  assert.ok(guide);
  assert.equal(guide.poster,true);
  assert.equal(guide.image,'infographics/core/hands-simple-forms.webp');
  assert.equal(guide.steps.length,5);
  assert.match(guide.remember,/five clear digits/i);
});

test('core source is pinned and generated WebP is valid',async()=>{
  const asset=coreAssetManifest.find(x=>x.slug==='hands-simple-forms');
  const source=await readFile(asset.sourcePath);
  assert.equal(source.length,asset.sourceBytes);
  const gitBlobSha=createHash('sha1')
    .update(Buffer.from('blob '+source.length+'\0'))
    .update(source)
    .digest('hex');
  assert.equal(gitBlobSha,asset.sourceGitBlobSha);

  const bytes=await readFile(asset.outputPath);
  assert.ok(bytes.length>20000,'generated poster should not be suspiciously small');
  assert.equal(bytes.subarray(0,4).toString(),'RIFF');
  assert.equal(bytes.subarray(8,12).toString(),'WEBP');
  const {default:sharp}=await import('sharp');
  const meta=await sharp(bytes).metadata();
  assert.equal(meta.width,asset.width);
  assert.equal(meta.height,asset.height);
  assert.equal(meta.format,asset.format);
});
