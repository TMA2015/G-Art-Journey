import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {guides} from '../src/data/content.mjs';
import {coreAssetManifest} from '../src/data/core-assets.mjs';

test('Core Drawing Skills guides publish approved poster metadata',()=>{
  const hands=guides.find(g=>g.slug==='hands-simple-forms');
  assert.ok(hands);
  assert.equal(hands.poster,true);
  assert.equal(hands.image,'infographics/core/hands-simple-forms.webp');
  assert.equal(hands.steps.length,5);
  assert.match(hands.remember,/five clear digits/i);

  assert.equal(hands.posterWidth,900);
  assert.equal(hands.posterHeight,1350);

  const eye=guides.find(g=>g.slug==='eye-structure');
  assert.ok(eye);
  assert.equal(eye.poster,true);
  assert.equal(eye.image,'infographics/core/eye-structure.webp');
  assert.equal(eye.posterWidth,900);
  assert.equal(eye.posterHeight,1450);
  assert.equal(eye.steps.length,5);
  assert.match(eye.remember,/eyeball is round/i);

  const hair=guides.find(g=>g.slug==='hair-masses');
  assert.ok(hair);
  assert.equal(hair.poster,true);
  assert.equal(hair.image,'infographics/core/hair-masses.webp');
  assert.equal(hair.posterWidth,900);
  assert.equal(hair.posterHeight,1300);
  assert.equal(hair.steps.length,5);
  assert.match(hair.remember,/big shapes first/i);

  const fabric=guides.find(g=>g.slug==='fabric-tension-gravity');
  assert.ok(fabric);
  assert.equal(fabric.poster,true);
  assert.equal(fabric.image,'infographics/core/fabric-tension-gravity.webp');
  assert.equal(fabric.posterWidth,900);
  assert.equal(fabric.posterHeight,1350);
  assert.equal(fabric.steps.length,5);
  assert.match(fabric.remember,/Big folds come before small wrinkles/i);
});

test('Core approved sources are pinned and generated WebPs are valid',async()=>{
  assert.ok(coreAssetManifest.length>=2);
  const {default:sharp}=await import('sharp');
  for(const asset of coreAssetManifest){
    let source;
    if(asset.sourceChunks){
      const parts=await Promise.all(asset.sourceChunks.map(p=>readFile(p,'utf8')));
      source=Buffer.from(parts.join(''),'base64');
      const sha256=createHash('sha256').update(source).digest('hex');
      assert.equal(sha256,asset.sourceSha256,asset.slug+' source sha256');
    }else{
      source=await readFile(asset.sourcePath);
      const gitBlobSha=createHash('sha1')
        .update(Buffer.from('blob '+source.length+'\0'))
        .update(source)
        .digest('hex');
      assert.equal(gitBlobSha,asset.sourceGitBlobSha,asset.slug+' source identity');
    }
    assert.equal(source.length,asset.sourceBytes,asset.slug+' source size');

    const bytes=await readFile(asset.outputPath);
    assert.ok(bytes.length>10000,asset.slug+' generated poster should not be suspiciously small');
    assert.equal(bytes.subarray(0,4).toString(),'RIFF',asset.slug+' RIFF');
    assert.equal(bytes.subarray(8,12).toString(),'WEBP',asset.slug+' WebP');
    const meta=await sharp(bytes).metadata();
    assert.equal(meta.width,asset.width,asset.slug+' width');
    assert.equal(meta.height,asset.height,asset.slug+' height');
    assert.equal(meta.format,asset.format,asset.slug+' format');
  }
});


test('Core poster output preserves approved artwork and canonical branding contract',async()=>{
  const {default:sharp}=await import('sharp');
  for(const asset of coreAssetManifest){
    assert.ok(asset.brand,asset.slug+' brand contract');
    assert.ok(['source','band','overlay'].includes(asset.brand.mode),asset.slug+' brand mode');
    assert.equal(asset.brand.canonical,'public/branding/g-art-lockup.svg',asset.slug+' canonical brand asset');

    let source;
    if(asset.sourceChunks){
      const parts=await Promise.all(asset.sourceChunks.map(p=>readFile(p,'utf8')));
      source=Buffer.from(parts.join(''),'base64');
    }else{
      source=await readFile(asset.sourcePath);
    }
    const sourceMeta=await sharp(source).metadata();
    const contentHeight=asset.brand.mode==='band'?asset.height-asset.brand.bandHeight:asset.height;
    const sourceRatio=sourceMeta.width/sourceMeta.height;
    const targetRatio=asset.width/contentHeight;
    assert.ok(Math.abs(sourceRatio-targetRatio)<0.002,asset.slug+' artwork aspect ratio must be preserved');

    if(asset.slug==='hands-simple-forms')assert.equal(asset.brand.mode,'source');
    if(asset.slug==='eye-structure'){
      assert.equal(asset.brand.mode,'band');
      assert.equal(asset.brand.placement,'upper-left');
    }
    if(asset.slug==='hair-masses'){
      assert.equal(asset.brand.mode,'band');
      assert.equal(asset.brand.placement,'upper-left');
      assert.ok(asset.brand.artPlate,'hair legacy mark cleanup plate');
    }
    if(asset.slug==='fabric-tension-gravity'){
      assert.equal(asset.brand.mode,'overlay');
      assert.equal(asset.brand.placement,'upper-left');
      assert.ok(asset.brand.plate,'fabric generated-logo cleanup plate');
    }
  }
});
