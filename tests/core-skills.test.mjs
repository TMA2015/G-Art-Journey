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

test('approved core poster bytes and dimensions stay pinned',async()=>{
  const asset=coreAssetManifest.find(x=>x.slug==='hands-simple-forms');
  const bytes=await readFile(asset.path);
  assert.equal(bytes.length,asset.bytes);
  assert.equal(bytes.subarray(0,4).toString(),'RIFF');
  assert.equal(bytes.subarray(8,12).toString(),'WEBP');
  assert.equal(createHash('sha256').update(bytes).digest('hex'),asset.sha256);
  const {default:sharp}=await import('sharp');
  const meta=await sharp(bytes).metadata();
  assert.equal(meta.width,asset.width);
  assert.equal(meta.height,asset.height);
});
