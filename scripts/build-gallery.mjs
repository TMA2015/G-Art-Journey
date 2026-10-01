import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public/artworks');
const destination = path.resolve('src/data/gallery.generated.json');
const allowed = new Set(['.jpg','.jpeg','.png','.webp','.avif','.svg']);
const owners = new Set(['dad','daughter','shared']);
const metadata = JSON.parse(await readFile(path.join(root,'artworks.json'),'utf8'));
const entries = [];
for (const owner of owners) {
  let files = [];
  try { files = await readdir(path.join(root,owner),{withFileTypes:true}); } catch { continue; }
  for (const file of files) {
    if (!file.isFile() || !allowed.has(path.extname(file.name).toLowerCase())) continue;
    const key = owner + '/' + file.name;
    const detail = metadata[key] ?? {};
    entries.push({
      id:key,
      src:'artworks/' + encodeURIComponent(owner) + '/' + encodeURIComponent(file.name),
      owner,
      title: typeof detail.title === 'string' ? detail.title : path.parse(file.name).name.replace(/[-_]+/g,' '),
      medium: typeof detail.medium === 'string' ? detail.medium : '',
      note: typeof detail.note === 'string' ? detail.note : '',
      date: typeof detail.date === 'string' ? detail.date : '',
      sortOrder: Number.isInteger(detail.sortOrder) ? detail.sortOrder : null,
      ...Object.fromEntries(['title_vi','title_en','medium_vi','medium_en','note_vi','note_en'].filter(field=>typeof detail[field]==='string').map(field=>[field,detail[field]])),
      featured: detail.featured === true
    });
  }
}
entries.sort((a,b)=> (b.date || '').localeCompare(a.date || '') || ((b.sortOrder??-1)-(a.sortOrder??-1)) || a.title.localeCompare(b.title));
await mkdir(path.dirname(destination),{recursive:true});
await writeFile(destination,JSON.stringify(entries,null,2)+'\n');
console.log('Gallery manifest: '+entries.length+' artwork(s).');
