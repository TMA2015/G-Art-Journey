import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
test('binary GitHub importer has branch protection and no credential in source',async()=>{
 const code=await readFile('scripts/push-art-batch.mjs','utf8');
 assert.ok(code.includes("feat/"));
 assert.match(code,/--push/);
 assert.match(code,/encoding:'base64'/);
 assert.match(code,/force:false/);
 assert.match(code,/GH_TOKEN/);
 assert.doesNotMatch(code,/ghp_[A-Za-z0-9]+/);
});
