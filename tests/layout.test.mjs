import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
const layout=await readFile('src/layouts/Base.astro','utf8');
const css=await readFile('src/styles/global.css','utf8');
const explore=await readFile('src/pages/explore.astro','utf8');
test('responsive menu and current page semantics exist',()=>{assert.match(layout,/class="mobile-nav"/);assert.match(layout,/aria-current=\{active\(n.href\)/);assert.match(css,/\.top-nav,.header-action\{display:none\}/);});
test('independent persisted theme and colored G art mark exist',async()=>{assert.match(layout,/g-art-theme/);assert.match(layout,/g-art-mark\.svg/);assert.match(css,/html\[data-theme="playful"\]/);const mark=await readFile('public/branding/g-art-mark.svg','utf8');assert.match(mark,/#945779/);});
test('collection images have a contained absolute frame',()=>{assert.match(css,/\.collection-card \.art-frame\{position:relative/);assert.match(css,/\.collection-card \.art-frame img\{position:absolute/);});
test('Explore Art keeps media, movements and artists separate',()=>{for(const id of ['materials','movements','artists'])assert.match(explore,new RegExp('id="'+id+'"'));});
