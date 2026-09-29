import test from 'node:test';import assert from 'node:assert/strict';
import {media,movements,artists,moreArtists} from '../src/data/discovery.mjs';
test('discovery taxonomy and unique routes',()=>{
 assert.ok(media.length>=8);assert.ok(movements.length>=5);assert.ok(artists.length>=4);
 for(const items of [media,movements,artists]) { const ids=items.map(x=>x.slug||x.id); assert.equal(ids.length,new Set(ids).size); }
});
test('each featured artist has a complete infographic and verified museum link',()=>{
 for(const a of artists){assert.equal(a.facts.length,3);assert.ok(a.workUrl.startsWith('https://'));assert.ok(a.work&&a.museum&&a.imageNote&&a.try);}
});
test('all movements offer looking clues and attributions',()=>{
 for(const m of movements){assert.equal(m.clues.length,3);assert.ok(m.source.startsWith('https://'));assert.ok(m.look&&m.try);}
});
test('each media entry provides a route',()=>{for(const m of media)assert.ok(m.start);});
