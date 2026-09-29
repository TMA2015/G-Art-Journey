import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
const read=async route=>readFile('dist/'+route+'index.html','utf8');
const paths=['','explore/','guides/','gallery/','guide/draw-a-pencil-portrait/','guide/draw-a-pencil-landscape/','guide/draw-a-manga-face/','guide/watercolor-first-flower/','guide/digital-color-layers/','notes/','notes/graphite-values/','notes/head-construction/','movement/renaissance/','movement/impressionism/','movement/post-impressionism/','movement/cubism/','movement/ink-wash/','artist/leonardo-da-vinci/','artist/claude-monet/','artist/vincent-van-gogh/','artist/fan-kuan/'];
for(const path of paths){
 const vi=await read(path),en=await read('en/'+path);
 assert.match(vi,/<html lang="vi"/);
 assert.match(en,/<html lang="en"/);
 assert.ok(vi.includes('/G-Art-Journey/en/'+path));
 assert.ok(en.includes('/G-Art-Journey/'+path));
}
const viHome=await read(''),enHome=await read('en/');
assert.match(viHome,/Không cần vẽ thật giỏi/);assert.match(enHome,/No need to be perfect/);
assert.doesNotMatch(enHome,/Không cần vẽ thật giỏi/);
const viNote=await read('notes/head-construction/'),enNote=await read('en/notes/head-construction/');
assert.match(viNote,/head-construction-vi\.svg/);
assert.match(enNote,/infographics\/head-construction\.svg/);
for(const file of ['dist/showcase/vi/pencil-portrait.svg','dist/infographics/head-construction-vi.svg','dist/infographics/light-and-value-vi.svg'])await access(file);
console.log('Localized build PASS: '+paths.length+' page pairs + both infographic assets and home copy.');
