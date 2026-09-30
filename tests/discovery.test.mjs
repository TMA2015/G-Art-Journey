import test from 'node:test';
import assert from 'node:assert/strict';
import {media,movements,artists,moreArtists} from '../src/data/discovery.mjs';

test('discovery taxonomy and unique routes',()=>{
  assert.ok(media.length>=8);
  assert.equal(movements.length,5);
  assert.equal(artists.length,4);
  for(const items of [media,movements,artists]){
    const ids=items.map(x=>x.slug||x.id);
    assert.equal(ids.length,new Set(ids).size);
  }
});

test('Explore Art movements have compact sourced galleries',()=>{
  for(const movement of movements){
    assert.ok(movement.summary);
    assert.ok(Array.isArray(movement.why)&&movement.why.length>=3,movement.slug+' why');
    assert.ok(Array.isArray(movement.artworks),movement.slug+' artworks');
    assert.ok(movement.artworks.length>=4&&movement.artworks.length<=6,movement.slug+' artwork count');
    for(const work of movement.artworks){
      assert.match(work.image,/^https:\/\//,movement.slug+' remote image');
      assert.match(work.source,/^https:\/\/commons\.wikimedia\.org\//,movement.slug+' source');
      assert.ok(work.title&&work.artist&&work.year,movement.slug+' artwork metadata');
      assert.ok(work.rights,movement.slug+' rights');
    }
  }
});

test('Explore Art artist pages include sourced representative works',()=>{
  for(const artist of artists){
    assert.ok(artist.intro);
    assert.ok(Array.isArray(artist.why)&&artist.why.length>=3,artist.slug+' why');
    assert.ok(Array.isArray(artist.artworks)&&artist.artworks.length>=2,artist.slug+' artworks');
    if(artist.slug!=='fan-kuan'){
      assert.ok(artist.artworks.length>=4&&artist.artworks.length<=6,artist.slug+' artwork count');
    }
    for(const work of artist.artworks){
      assert.match(work.image,/^https:\/\//,artist.slug+' remote image');
      assert.match(work.source,/^https:\/\/commons\.wikimedia\.org\//,artist.slug+' source');
      assert.ok(work.title&&work.artist&&work.year,artist.slug+' artwork metadata');
      assert.ok(work.rights,artist.slug+' rights');
    }
  }
  const fan=artists.find(a=>a.slug==='fan-kuan');
  assert.match(fan.worksNote,/small number of surviving paintings/i);
});

test('each media entry provides a route',()=>{
  for(const m of media)assert.ok(m.start);
  assert.ok(moreArtists.length>=4);
});


test('style pages never use internal showcase illustrations',()=>{
  for(const movement of movements){
    assert.match(movement.image,/^https:\/\/commons\.wikimedia\.org\//,movement.slug+' cover must be a sourced artwork');
    assert.equal(movement.image.includes('/showcase/'),false,movement.slug+' must not use G-Art showcase art');
    for(const work of movement.artworks){
      assert.match(work.image,/^https:\/\/commons\.wikimedia\.org\//,movement.slug+' artwork must be a sourced historical artwork');
      assert.ok(work.source?.startsWith('https://commons.wikimedia.org/'),movement.slug+' artwork source');
      assert.notEqual(work.artist,'G-Art Journey',movement.slug+' style example must be a real artwork');
    }
  }
});
