import { showcase } from '../data/content.mjs';
const root = document.querySelector('[data-hero]');
if (root) {
  const base = document.documentElement.dataset.base || '/';
  const image = root.querySelector('[data-hero-image]');
  const title = root.querySelector('[data-hero-title]');
  const label = root.querySelector('[data-hero-label]');
  const description = root.querySelector('[data-hero-description]');
  const caption = root.querySelector('[data-hero-caption]');
  const count = root.querySelector('[data-hero-count]');
  const picker = root.querySelector('[data-style-select]');
  let chosen = 'daily';
  try { chosen = sessionStorage.getItem('g-art-style') || 'daily'; } catch {}
  if (!showcase.some(s=>s.id===chosen)) chosen='daily';
  picker.value=chosen;
  let theme = 0;
  let slide = 0;
  const day = Math.floor(Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())/86400000);
  const daily = day % showcase.length;
  const src = name => base + name;
  const update = () => {
    const group = showcase[theme];
    const selected = group.images[slide];
    image.src = src(selected.src);
    image.alt = selected.alt;
    title.textContent = group.title;
    label.textContent = chosen === 'daily' ? 'TODAY’S ART JOURNEY · ' + group.label : group.label;
    description.textContent = group.description;
    caption.textContent = selected.title + ' · Original site illustration';
    count.textContent = String(slide + 1).padStart(2,'0') + ' / ' + String(group.images.length).padStart(2,'0');
  };
  const select = id => { chosen=id; theme=id==='daily'?daily:showcase.findIndex(s=>s.id===id); slide=0; update(); try { sessionStorage.setItem('g-art-style',id); } catch {} };
  root.querySelector('[data-prev]').addEventListener('click',()=>{slide=(slide-1+showcase[theme].images.length)%showcase[theme].images.length;update();});
  root.querySelector('[data-next]').addEventListener('click',()=>{slide=(slide+1)%showcase[theme].images.length;update();});
  picker.addEventListener('change',()=>select(picker.value));
  const pause=root.querySelector('[data-pause]');let paused=false;
  pause.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?'Tiếp tục slideshow':'Tạm dừng slideshow');pause.setAttribute('aria-pressed',String(paused));});
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(()=>{if(!paused && !document.hidden){slide=(slide+1)%showcase[theme].images.length;update();}},7000);
  }
  select(chosen);
}
