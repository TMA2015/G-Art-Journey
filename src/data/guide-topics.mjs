export const humanTopics=[
 {
  id:'faces',
  label:'Faces & Head',
  eyebrow:'HUMAN DRAWING',
  description:'Face construction, expressions, head turns and age-inspired character studies.',
  image:'infographics/human/face-basics.webp'
 },
 {
  id:'figures',
  label:'Figure & Pose',
  eyebrow:'HUMAN DRAWING',
  description:'Proportions, standing balance, sitting poses and readable body silhouettes.',
  image:'infographics/human/figure-proportions.webp'
 }
];

export const characterTopics=[
 {
  id:'manga',
  label:'Manga',
  eyebrow:'CHARACTER ART',
  description:'Face design, variations and stylized character proportions.',
  image:'infographics/character/manga-face.webp'
 },
 {
  id:'webtoon',
  label:'Manhwa / Webtoon',
  eyebrow:'CHARACTER ART',
  description:'Everyday character design, soft variation and vertical visual storytelling.',
  image:'infographics/character/webtoon-character.webp'
 },
 {
  id:'manhua',
  label:'Manhua',
  eyebrow:'CHARACTER ART',
  description:'Elegant character design, detail studies and flowing movement rhythm.',
  image:'infographics/character/manhua-ink-character.webp'
 },
 {
  id:'cartoon',
  label:'Cartoon / Comics',
  eyebrow:'CHARACTER ART',
  description:'Shape language, expressive faces and lively action.',
  image:'infographics/character/cartoon-shapes.webp'
 },
 {id:'chibi',label:'Chibi Characters',eyebrow:'CHARACTER ART',description:'Cute proportions, clear expressions and playful poses with simple outfits.',image:'infographics/character/chibi-proportions.webp'},
 {id:'princess',label:'Fairy-Tale Princess',eyebrow:'CHARACTER ART',description:'Original princess design, elegant hair and dress details, and graceful balanced poses.',image:'infographics/character/fairy-tale-princess-design.webp'}
];

export const digitalSeries={
 'digital-color-layers':{
  label:'Painting with Separate Layers',
  description:'Learn how sketch, base colors, shadow, light and detail layers work together in one digital painting.',
  lessons:[
   {slug:'01-layer-workflow',title:'Painting with Separate Layers',description:'See the complete five-stage layer workflow and what each layer contributes.'},
   {slug:'02-base-color-layers',title:'Base Color Layers',description:'Separate the largest color groups so they stay easy to edit.'},
   {slug:'03-shadow-layer',title:'Shadow Layer',description:'Choose one light direction, add one clear shadow layer and try simple clipping.'},
   {slug:'04-light-and-details',title:'Light & Details',description:'Add selected highlights and details without making every area equally busy.'},
   {slug:'05-check-your-layers',title:'Check Your Layers',description:'Toggle, organize and merge layers only when it makes the file clearer.'}
  ]
 },
 'color-a-face-in-layers':{
  label:'Color a Face with Simple Layers',
  description:'Apply a simple layer workflow to one face from clean sketch through flat skin, shadow and selected details.',
  lessons:[
   {slug:'01-clean-sketch',title:'Clean Sketch',description:'Keep a clean sketch on its own top layer and lower its opacity before coloring.'},
   {slug:'02-flat-skin-color',title:'Flat Skin Color',description:'Build one clean skin base for face, ears and neck before shading.'},
   {slug:'03-one-clear-shadow',title:'Add One Clear Shadow',description:'Use one consistent light direction and one simple shadow layer.'},
   {slug:'04-add-details',title:'Add Details',description:'Add only selected blush, lips, highlights, hair strands or edge light.'},
   {slug:'05-check-your-layers',title:'Check Your Layers',description:'Compare sketch, flat color, shadow and detail layers before merging anything.'}
  ]
 }
};

export const digitalSeriesSlugs=Object.keys(digitalSeries);
