import {visualNotes} from '../data/visual-notes.mjs';
import {asset} from './content.mjs';
import {language} from './ui.mjs';
const en={
'graphite-values':{title:'Light and five graphite values',subtitle:'Light & Value',tag:'PENCIL ART',description:'See a sphere as areas of light, middle value and shadow. Organize values before getting lost in details.',time:'10–15 min',steps:[
{title:'Choose a light direction',body:'Draw an arrow to indicate the light. The side facing the source generally receives more direct illumination.'},
{title:'Divide three big areas',body:'Keep the paper white for light, use a medium pencil value for halftone and a dark value for shadow. Do not shade everything evenly.'},
{title:'Find core and cast shadows',body:'The core shadow turns away from the light on the form; the cast shadow falls where the object blocks light.'},
{title:'Expand to five values',body:'Add two in-between tones while keeping the light and shadow families distinct.'},
{title:'Try squinting',body:'Squint or step back. If the sphere still looks solid without details, the value pattern is doing its job.'}
],note:'A simple sphere introduces the idea. Portraits and landscapes use the same principles, though real lighting and materials vary.'},
'head-construction':{title:'Constructing a pencil portrait',subtitle:'Portrait Construction',tag:'FIGURE DRAWING',description:'Start with the head mass, facial axis and landmarks. There is no need to perfect the eyes, nose and lips immediately.',time:'15–20 min',steps:[
{title:'Sketch the skull mass',body:'Lightly draw an oval or sphere and check the overall height and width.'},
{title:'Add the centerline',body:'The centerline shows head direction. In a three-quarter view it curves around the form.'},
{title:'Estimate the eye line',body:'Place both eyes using a horizontal reference. Observe your subject instead of relying on one fixed formula.'},
{title:'Locate nose and mouth',body:'Compare eye-to-nose and nose-to-chin distances, and check the tilt.'},
{title:'Soften construction and model',body:'Gently erase excess guide lines, then use three values to suggest forehead, cheeks and chin.'}
],note:'These are observation and construction guides, not fixed proportions for every age, viewpoint or manga/manhwa style.'}
};
const vi={
'graphite-values':{subtitle:'Ánh sáng và sắc độ',tag:'VẼ CHÌ'},
'head-construction':{subtitle:'Dựng hình chân dung',tag:'VẼ HÌNH NGƯỜI'}
};
export const getVisualNotes=(lang='vi')=>visualNotes.map(n=>({...n,...(language(lang)==='en'?en[n.slug]:vi[n.slug]),image:asset(lang,n.image)}));
