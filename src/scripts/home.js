import { getHomeShowcase } from '../i18n/content.mjs';
import {ui} from '../i18n/ui.mjs';
const root=document.querySelector('[data-hero]');
if(root){
 const locale=document.documentElement.lang==='en'?'en':'vi',t=ui(locale),showcase=getHomeShowcase(locale);
 const base=document.documentElement.dataset.base||'/';
 const image=root.querySelector('[data-hero-image]'),imageLink=root.querySelector('[data-hero-image-link]'),title=root.querySelector('[data-hero-title]'),label=root.querySelector('[data-hero-label]'),description=root.querySelector('[data-hero-description]'),caption=root.querySelector('[data-hero-caption]'),source=root.querySelector('[data-hero-source]'),count=root.querySelector('[data-hero-count]'),picker=root.querySelector('[data-style-select]'),cta=root.querySelector('[data-hero-cta]');
 let chosen='explore-art';try{chosen=sessionStorage.getItem('g-art-style')||'explore-art'}catch{}
 if(!showcase.some(s=>s.id===chosen))chosen='explore-art';
 let groupIndex=Math.max(0,showcase.findIndex(s=>s.id===chosen)),slide=0;
 picker.value=showcase[groupIndex]?.id||'explore-art';
 const resolveSrc=src=>/^https?:\/\//.test(src)?src:base+src;
 const resolveHref=href=>/^https?:\/\//.test(href||'')?href:base+(href||'');
 const update=()=>{const group=showcase[groupIndex],selected=group.images[slide];const remote=/^https?:\/\//.test(selected.src);image.src=resolveSrc(selected.src);image.alt=selected.alt;image.dataset.fit=selected.fit||'contain';if(remote)image.setAttribute('referrerpolicy','no-referrer');else image.removeAttribute('referrerpolicy');const itemHref=resolveHref(selected.href||group.href||'explore/'),groupHref=resolveHref(group.href||selected.href||'explore/');if(imageLink)imageLink.href=itemHref;if(cta){cta.href=groupHref;cta.textContent=group.cta||t.home.cta}title.textContent=group.title;label.textContent=group.label;description.textContent=group.description;caption.textContent=selected.caption||selected.title+' · '+t.home.illustration;if(source)source.textContent=group.sourceLabel||'G-ART';count.textContent=String(slide+1).padStart(2,'0')+' / '+String(group.images.length).padStart(2,'0')};
 const select=id=>{const next=showcase.findIndex(s=>s.id===id);groupIndex=next>=0?next:0;chosen=showcase[groupIndex].id;slide=0;picker.value=chosen;update();try{sessionStorage.setItem('g-art-style',chosen)}catch{}};
 root.querySelector('[data-prev]').addEventListener('click',()=>{slide=(slide-1+showcase[groupIndex].images.length)%showcase[groupIndex].images.length;update()});
 root.querySelector('[data-next]').addEventListener('click',()=>{slide=(slide+1)%showcase[groupIndex].images.length;update()});
 picker.addEventListener('change',()=>select(picker.value));
 const pause=root.querySelector('[data-pause]');let paused=false;
 pause.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',paused?t.home.resume:t.home.pause);pause.setAttribute('aria-pressed',String(paused))});
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches)setInterval(()=>{if(!paused&&!document.hidden){slide=(slide+1)%showcase[groupIndex].images.length;update()}},7000);
 select(chosen);
}