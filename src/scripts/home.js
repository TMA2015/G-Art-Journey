import { getShowcase } from '../i18n/content.mjs';
import {ui} from '../i18n/ui.mjs';
const root=document.querySelector('[data-hero]');
if(root){
 const locale=document.documentElement.lang==='en'?'en':'vi',t=ui(locale),showcase=getShowcase(locale);
 const base=document.documentElement.dataset.base||'/';
 const image=root.querySelector('[data-hero-image]'),title=root.querySelector('[data-hero-title]'),label=root.querySelector('[data-hero-label]'),description=root.querySelector('[data-hero-description]'),caption=root.querySelector('[data-hero-caption]'),count=root.querySelector('[data-hero-count]'),picker=root.querySelector('[data-style-select]');
 let chosen='daily';try{chosen=sessionStorage.getItem('g-art-style')||'daily'}catch{}
 if(!showcase.some(s=>s.id===chosen))chosen='daily';picker.value=chosen;
 let groupIndex=0,slide=0;
 const now=new Date();const day=Math.floor(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate())/86400000),daily=day%showcase.length;
 const update=()=>{const group=showcase[groupIndex],selected=group.images[slide];image.src=base+selected.src;image.alt=selected.alt;title.textContent=group.title;label.textContent=chosen==='daily'?t.home.today+' · '+group.label:group.label;description.textContent=group.description;caption.textContent=selected.title+' · '+t.home.illustration;count.textContent=String(slide+1).padStart(2,'0')+' / '+String(group.images.length).padStart(2,'0')};
 const select=id=>{chosen=id;groupIndex=id==='daily'?daily:showcase.findIndex(s=>s.id===id);slide=0;update();try{sessionStorage.setItem('g-art-style',id)}catch{}};
 root.querySelector('[data-prev]').addEventListener('click',()=>{slide=(slide-1+showcase[groupIndex].images.length)%showcase[groupIndex].images.length;update()});
 root.querySelector('[data-next]').addEventListener('click',()=>{slide=(slide+1)%showcase[groupIndex].images.length;update()});
 picker.addEventListener('change',()=>select(picker.value));
 const pause=root.querySelector('[data-pause]');let paused=false;
 pause.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?t.home.resume:t.home.pause);pause.setAttribute('aria-pressed',String(paused))});
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches)setInterval(()=>{if(!paused&&!document.hidden){slide=(slide+1)%showcase[groupIndex].images.length;update()}},7000);
 select(chosen);
}