import {mkdir,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';
import {coreAssetManifest} from '../src/data/core-assets.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

const warmPaper='#FBF7EF';

async function sourceFor(asset){
  if(asset.sourceChunks){
    const parts=await Promise.all(asset.sourceChunks.map(p=>readFile(path.join(root,p),'utf8')));
    return Buffer.from(parts.join(''),'base64');
  }
  return readFile(path.join(root,asset.sourcePath));
}

async function canonicalLogo(asset){
  if(!asset.brand?.canonical)return null;
  const svg=await readFile(path.join(root,asset.brand.canonical));
  return sharp(svg,{density:220})
    .resize({width:asset.brand.logoWidth||240})
    .png()
    .toBuffer();
}

async function buildPoster(asset,sourceBytes){
  const brand=asset.brand||{mode:'source'};
  const background=brand.background||warmPaper;

  if(brand.mode==='band'){
    const artHeight=asset.height-brand.bandHeight;
    let art=await sharp(sourceBytes)
      .resize({width:asset.width,height:artHeight,fit:'contain',background})
      .png()
      .toBuffer();
    if(brand.artPlate){
      const p=brand.artPlate;
      const plate=Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${p.width}" height="${p.height}"><rect width="100%" height="100%" rx="10" fill="${p.background||background}"/></svg>`
      );
      art=await sharp(art).composite([{input:plate,left:p.left,top:p.top}]).png().toBuffer();
    }
    const logo=await canonicalLogo(asset);
    return sharp({
      create:{width:asset.width,height:asset.height,channels:4,background}
    })
      .composite([
        {input:art,left:0,top:brand.bandHeight},
        {input:logo,left:brand.left??24,top:brand.top??16}
      ])
      .webp({quality:85})
      .toBuffer();
  }

  let image=sharp(sourceBytes)
    .resize({width:asset.width,height:asset.height,fit:'contain',background});

  if(brand.mode==='overlay'){
    const composites=[];
    if(brand.plate){
      const plate=Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${brand.plate.width}" height="${brand.plate.height}"><rect width="100%" height="100%" rx="10" fill="${brand.plate.background||background}"/></svg>`
      );
      composites.push({input:plate,left:brand.plate.left,top:brand.plate.top});
    }
    const logo=await canonicalLogo(asset);
    composites.push({input:logo,left:brand.left,top:brand.top});
    image=image.composite(composites);
  }

  return image.webp({quality:85}).toBuffer();
}

for(const asset of coreAssetManifest){
  const output=path.join(root,asset.outputPath);
  await mkdir(path.dirname(output),{recursive:true});
  const sourceBytes=await sourceFor(asset);
  const bytes=await buildPoster(asset,sourceBytes);
  await sharp(bytes).toFile(output);
  const info=await sharp(bytes).metadata();
  const sha256=createHash('sha256').update(bytes).digest('hex');
  console.log('Generated '+path.relative(root,output)+' · '+info.width+'x'+info.height+' · '+bytes.length+' bytes · sha256 '+sha256+' · brand '+(asset.brand?.mode||'none'));
}
