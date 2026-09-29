import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
test('artwork metadata keys are relative to recognized owner folders',async()=>{const m=JSON.parse(await readFile('public/artworks/artworks.json','utf8'));for(const key of Object.keys(m))assert.match(key,/^(dad|daughter|shared)\/[^/]+$/);});
