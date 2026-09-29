import test from 'node:test';
import assert from 'node:assert/strict';
import { showcase,collections,guides } from '../src/data/content.mjs';
test('all showcase groups contain named illustrations',()=>{assert.equal(showcase.length,5); for(const s of showcase){assert.ok(s.images.length>0);assert.ok(s.title);for(const x of s.images)assert.ok(x.src.endsWith('.svg'));}});
test('collections and guide IDs are unique',()=>{assert.equal(new Set(collections.map(x=>x.id)).size,collections.length);assert.equal(new Set(guides.map(x=>x.slug)).size,guides.length);});
test('guides contain actionable stages',()=>{for(const g of guides){assert.ok(g.steps.length>=4);assert.ok(g.steps.every(x=>x.title&&x.body));}});
