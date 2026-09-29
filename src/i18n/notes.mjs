import {visualNotes} from '../data/visual-notes.mjs';
import {asset} from './content.mjs';
import {language} from './ui.mjs';
const en={
'graphite-values':{title:'Light and shade with a pencil',subtitle:'Light & Shade',tag:'PENCIL ART',description:'Look at a round shape in light and dark areas. Learn where to shade before adding small details.',time:'10–15 min',steps:[
{title:'Choose a light direction',body:'Draw an arrow to indicate the light. The side facing the source generally receives more direct illumination.'},
{title:'Start with three shades',body:'Keep the paper white for bright areas. Add middle gray and dark gray where needed. Do not shade everything evenly.'},
{title:'Notice the two shadows',body:'The ball has a dark side. It also makes a shadow on the paper by blocking the light.'},
{title:'Add two more shades',body:'Add two shades between white and dark gray. Keep the overall bright and dark areas easy to see.'},
{title:'Step back and look',body:'Look from a little distance. If the ball still looks round without tiny details, your light and dark areas are working.'}
],note:'A simple sphere introduces the idea. Portraits and landscapes use the same principles, though real lighting and materials vary.'},
'head-construction':{title:'Draw a face from simple shapes',subtitle:'Drawing a Face',tag:'FIGURE DRAWING',description:'Start with the overall head shape and a few guide lines. Add eyes, nose and lips later.',time:'15–20 min',steps:[
{title:'Sketch the head shape',body:'Lightly draw an oval or sphere and check the overall height and width.'},
{title:'Draw the middle guide line',body:'A line down the middle helps show which way the head turns. On a turned head, this line curves with the face.'},
{title:'Place the eyes',body:'Place both eyes using a horizontal reference. Observe your subject instead of relying on one fixed formula.'},
{title:'Place the nose and mouth',body:'Compare eye-to-nose and nose-to-chin distances, and check the tilt.'},
{title:'Clean up and add light shading',body:'Gently erase extra guide lines, then shade with light, middle and dark pencil tones to show the forehead, cheeks and chin.'}
],note:'These are observation and construction guides, not fixed proportions for every age, viewpoint or manga/manhwa style.'}
};
const vi={
'graphite-values':{subtitle:'Ánh sáng và sắc độ',tag:'VẼ CHÌ'},
'head-construction':{subtitle:'Dựng hình chân dung',tag:'VẼ HÌNH NGƯỜI'}
};
export const getVisualNotes=(lang='en')=>visualNotes.map(n=>({...n,...(language(lang)==='en'?en[n.slug]:vi[n.slug]),image:asset(lang,n.image)}));
