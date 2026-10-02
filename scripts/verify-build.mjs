import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile,access} from 'node:fs/promises';
const read=async path=>readFile('dist/'+path+'index.html','utf8');
const paths=['','explore/','guides/','start-here/','guide/gesture-motion-basics/','guide/feet-simple-forms/','guide/simple-color-harmony/','gallery/','guide/draw-a-pencil-portrait/','guide/draw-a-pencil-landscape/','guide/draw-a-manga-face/','guide/watercolor-first-flower/','guide/digital-color-layers/','notes/','notes/graphite-values/','notes/head-construction/','movement/renaissance/','movement/impressionism/','movement/post-impressionism/','movement/cubism/','movement/ink-wash/','artist/leonardo-da-vinci/','artist/claude-monet/','artist/vincent-van-gogh/','artist/fan-kuan/','guide/figure-from-simple-shapes/','guide/shade-a-pencil-portrait/','guide/street-with-depth/','guide/four-character-face-approaches/','guide/color-a-face-in-layers/','notes/figure-simple-shapes/','notes/landscape-depth/','human-drawing/','human-drawing/faces/','human-drawing/figures/','character-styles/','character-styles/manga/','character-styles/webtoon/','character-styles/manhua/','character-styles/cartoon/','guide/digital-color-layers/01-layer-workflow/','guide/digital-color-layers/02-base-color-layers/','guide/digital-color-layers/03-shadow-layer/','guide/digital-color-layers/04-light-and-details/','guide/digital-color-layers/05-check-your-layers/','guide/color-a-face-in-layers/01-clean-sketch/','guide/color-a-face-in-layers/02-flat-skin-color/','guide/color-a-face-in-layers/03-one-clear-shadow/','guide/color-a-face-in-layers/04-add-details/','guide/color-a-face-in-layers/05-check-your-layers/','guide/face-basics/','guide/face-expressions/','guide/head-angles/','guide/faces-by-age/','guide/figure-proportions/','guide/standing-figure/','guide/sitting-poses/','guide/body-silhouettes/'];
const expansion=JSON.parse(await readFile('assets/batches/character-chibi-princess-release.json','utf8'));
paths.push('character-styles/chibi/','character-styles/princess/',...expansion.assets.filter(a=>a.kind==='lesson').map(a=>'guide/'+a.targetPath.split('/').at(-1).replace('.webp','')+'/'));
for(const path of paths){
 const root=await read(path),legacy=await read('en/'+path);
 for(const html of [root,legacy]){
  assert.match(html,/<html lang="en"/);
  assert.doesNotMatch(html,/data-language-switch/);
  assert.match(html,/<link rel="canonical"/);
  assert.ok(html.includes('https://tma2015.github.io/G-Art-Journey/'+path));
  assert.ok(html.includes('/G-Art-Journey/explore/'));
 }
 assert.doesNotMatch(root,/href="\/G-Art-Journey\/en\//);
}
const home=await read('');
assert.match(home,/No need to be perfect/);
assert.doesNotMatch(home,/Không cần vẽ thật giỏi/);
const guide=await read('guides/');
assert.match(guide,/Pick up a pencil/);
assert.match(guide,/Start with a learning path/);
const startHere=await read('start-here/');
assert.match(startHere,/What would you like/);
assert.equal((startHere.match(/class="path-card"/g)||[]).length,6);
for(const id of ['drawing-basics','draw-people','create-characters','draw-places','watercolor-basics','digital-art-basics'])assert.ok(startHere.includes('id="'+id+'"'));
assert.match(startHere,/character-styles\/chibi\//);
assert.match(startHere,/guide\/digital-color-layers\/01-layer-workflow\//);
for(const label of ['STAGE 1 \/ FACE &amp; HEAD','STAGE 2 \/ FIGURE &amp; MOTION','STAGE 3 \/ FINISH THE FIGURE'])assert.ok(startHere.includes(label));
for(const label of ['POSE &amp; MOTION','ANATOMY','HAIR &amp; CLOTHING','COLOR'])assert.ok(startHere.includes(label));
assert.ok(startHere.indexOf('Draw Gesture &amp; Motion from Simple Lines')<startHere.indexOf('Draw a Standing Figure Step by Step'));
assert.match(startHere,/Face details/);
assert.match(startHere,/Figure extras/);
assert.doesNotMatch(guide,/Không có giáo trình/);
const note=await read('notes/graphite-values/');
assert.match(note,/light-and-value\.svg/);
assert.doesNotMatch(note,/light-and-value-vi\.svg/);
for(const file of ['dist/showcase/pencil-portrait.svg','dist/infographics/human/face-basics.webp','dist/infographics/human/standing-figure.webp','dist/infographics/light-and-value.svg'])await access(file);
const oldFace=await read('notes/head-construction/'),oldFigure=await read('notes/figure-simple-shapes/'),oldLand=await read('notes/landscape-depth/');
assert.match(oldFace,/UPDATED DRAWING GUIDE/);
assert.match(oldFigure,/guide\/standing-figure\//);
assert.match(oldLand,/fresh illustrated version/);
assert.doesNotMatch(oldFace,/head-construction\.svg/);
assert.doesNotMatch(await read('guides/'),/figure-simple-shapes\.svg|landscape-depth\.svg|head-construction\.svg/);
assert.match(await read(''),/infographics\/human\/face-basics\.webp/);
for(const slug of ['face-basics','face-expressions','head-angles','faces-by-age','figure-proportions','standing-figure','sitting-poses','body-silhouettes'])await access('dist/infographics/human/'+slug+'.webp');
const characterSlugs=['manga-face','manga-variations','manga-figure','webtoon-character','webtoon-variations','webtoon-color-story','manhua-ink-character','manhua-variations','manhua-ink-rhythm','cartoon-shapes','cartoon-variations','cartoon-expression-action'];
for(const slug of characterSlugs){const html=await read('guide/'+slug+'/');assert.match(html,/Save WebP/);await access('dist/infographics/character/'+slug+'.webp');}
assert.match(await read('character-styles/'),/OPEN TOPIC/);
assert.match(await read('human-drawing/'),/OPEN TOPIC/);
assert.match(await read('guide\/digital-color-layers\/'),/OPEN LESSON/);
assert.match(await read('guide\/digital-color-layers\/01-layer-workflow\/'),/View large/);
assert.match(await read('guide\/color-a-face-in-layers\/01-clean-sketch\/'),/Save WebP/);
assert.match(await read('guide/draw-a-manga-face/'),/guide\/manga-face\//);
assert.doesNotMatch(await read('guides/'),/href="\/G-Art-Journey\/guide\/draw-a-manga-face\//);
console.log('English-first build PASS: '+paths.length+' canonical routes and /en legacy aliases; no visible language switch.');

const characterLanding=await read('character-styles/');
assert.equal((characterLanding.match(/class="topic-hub-card"/g)||[]).length,6);
for(const group of ['chibi','princess']){
 assert.ok(characterLanding.includes('character-styles/'+group+'/'));
 assert.equal(((await read('character-styles/'+group+'/')).match(/class="series-lesson-card"/g)||[]).length,3);
}
const references=await read('reference-library/');
assert.equal((references.match(/<article class="reference-card/g)||[]).length,23);
for(const style of ['chibi','princess'])assert.ok(references.includes('data-reference-style="'+style+'"'));
for(const a of expansion.assets){
 const image=a.targetPath.replace('public/','');
 const bytes=await readFile('dist/'+image);
 assert.equal(createHash('sha256').update(bytes).digest('hex'),a.webpSha256,image);
 if(a.kind==='lesson'){
  const slug=image.split('/').at(-1).replace('.webp','');
  const html=await read('guide/'+slug+'/');
  assert.ok(html.includes(image));assert.match(html,/View large/);assert.match(html,/Save WebP/);
  assert.equal((html.match(/class="guide-poster"/g)||[]).length,1);
 }else assert.ok(references.includes(image));
}
console.log('Character expansion build PASS: 6 topics, 18 topic lessons + Design Lab; 23 reference sheets; all 11 built hashes match.');

const sgGesture=await read('guide/gesture-motion-basics/');
assert.match(sgGesture,/Draw Gesture &amp; Motion from Simple Lines|Draw Gesture & Motion from Simple Lines/);
const sgFeet=await read('guide/feet-simple-forms/');
assert.match(sgFeet,/Draw Feet from Simple Forms/);
const sgColor=await read('guide/simple-color-harmony/');
assert.match(sgColor,/Build a Simple Color Palette/);
