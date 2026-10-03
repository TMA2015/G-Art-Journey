export const learningPaths=[
 {
  id:'drawing-basics',
  title:'Drawing Basics',
  eyebrow:'START WITH THE BASICS',
  description:'Build control, simple form, value and texture before choosing what you want to draw next.',
  outcome:'Feel more confident turning simple marks and shapes into drawings.',
  firstSlug:'pencil-control-lines-pressure',
  recommended:'Best if you are not sure where to begin.',
  steps:[
   {kind:'guide',slug:'pencil-control-lines-pressure',label:'Core'},
   {kind:'guide',slug:'pencil-simple-forms',label:'Core'},
   {kind:'guide',slug:'pencil-everyday-objects',label:'Core'},
   {kind:'guide',slug:'pencil-textures',label:'Core'}
  ],
  nextPaths:['draw-people','create-characters','draw-places','watercolor-basics','digital-art-basics']
 },
 {
  id:'draw-people',
  title:'Draw People',
  eyebrow:'FACES TO FIGURES',
  description:'Move from face construction to full-body balance, then add hands, hair and supporting skills.',
  outcome:'Build people from simple structure instead of drawing details first.',
  firstSlug:'face-basics',
  recommended:'Helpful after the first two Drawing Basics lessons, but you can start here.',
  stages:[
   {id:'face-head',label:'Face & Head',description:'Build a clear head and expression before moving to the full figure.'},
   {id:'figure-motion',label:'Figure & Motion',description:'Move from proportion into gesture, balance and everyday poses.'},
   {id:'finish-figure',label:'Finish the Figure',description:'Add two high-value supporting skills without losing the big structure.'}
  ],
  steps:[
   {kind:'guide',slug:'face-basics',label:'Core',stage:'face-head'},
   {kind:'guide',slug:'face-expressions',label:'Core',stage:'face-head'},
   {kind:'guide',slug:'head-angles',label:'Core',stage:'face-head'},
   {kind:'guide',slug:'figure-proportions',label:'Core',stage:'figure-motion'},
   {kind:'guide',slug:'gesture-motion-basics',label:'Core',stage:'figure-motion'},
   {kind:'guide',slug:'standing-figure',label:'Core',stage:'figure-motion'},
   {kind:'guide',slug:'sitting-poses',label:'Core',stage:'figure-motion'},
   {kind:'guide',slug:'hands-simple-forms',label:'Core',stage:'finish-figure'},
   {kind:'guide',slug:'hair-masses',label:'Core',stage:'finish-figure'}
  ],
  exploreGroups:[
   {id:'face-details',label:'Face details',guides:['eye-structure','pencil-facial-features','shade-a-pencil-portrait','faces-by-age']},
   {id:'figure-extras',label:'Figure extras',guides:['body-silhouettes','feet-simple-forms','fabric-tension-gravity']}
  ],
  referenceCollections:['poses','motion','hair','clothing']
 },
 {
  id:'create-characters',
  title:'Create Characters',
  eyebrow:'DESIGN YOUR OWN',
  description:'Start with one design lab, choose a Character Art topic, then add only the supporting skills your character needs.',
  outcome:'Turn simple construction choices into an original character idea.',
  firstSlug:'four-character-face-approaches',
  recommended:'A simple face is enough to begin.',
  steps:[
   {kind:'guide',slug:'four-character-face-approaches',label:'Core'},
   {kind:'characterTopics',label:'Choose one'},
   {kind:'supportChoice',label:'Choose what you need'},
   {kind:'reference',label:'Explore more'}
  ],
  supportGroups:[
   {id:'pose-motion',label:'Pose & Motion',description:'Make the pose read clearly before adding detail.',guides:['gesture-motion-basics','standing-figure']},
   {id:'anatomy',label:'Anatomy',description:'Strengthen difficult contact points and small forms.',guides:['hands-simple-forms','feet-simple-forms']},
   {id:'hair-clothing',label:'Hair & Clothing',description:'Add flow, silhouette and fabric behavior around the figure.',guides:['hair-masses','fabric-tension-gravity']},
   {id:'color',label:'Color',description:'Plan a small, coherent palette when you are ready to color.',guides:['simple-color-harmony']}
  ],
  referenceCollections:['poses','motion','hair','clothing']
 },
 {
  id:'draw-places',
  title:'Draw Places',
  eyebrow:'DEPTH & LANDSCAPE',
  description:'Build landscapes from large shapes and depth before adding water, perspective and composition.',
  outcome:'Make a scene feel deeper and more organized without drawing every detail.',
  firstSlug:'landscape-big-shapes',
  recommended:'Basic pencil control helps, but there is no required prerequisite.',
  steps:[
   {kind:'guide',slug:'landscape-big-shapes',label:'Core'},
   {kind:'guide',slug:'landscape-depth-layers',label:'Core'},
   {kind:'guide',slug:'street-with-depth',label:'Core'},
   {kind:'guide',slug:'landscape-water-reflections',label:'Core'},
   {kind:'guide',slug:'landscape-complete-composition',label:'Core'}
  ],
  exploreGroups:[
   {id:'built-spaces',label:'Built spaces',guides:['two-point-boxes-corners','simple-room-from-boxes']},
   {id:'watercolor-scene',label:'Try watercolor',guides:['watercolor-small-landscape']}
  ]
 },
 {
  id:'watercolor-basics',
  title:'Watercolor Basics',
  eyebrow:'WATER, EDGES & LAYERS',
  description:'Learn water control, edge behavior, transparent layers and simple subject building.',
  outcome:'Use watercolor with more control while still letting it stay loose and fresh.',
  firstSlug:'watercolor-first-flower',
  recommended:'No drawing path is required first.',
  steps:[
   {kind:'guide',slug:'watercolor-first-flower',label:'Core'},
   {kind:'guide',slug:'watercolor-wet-on-wet-dry',label:'Core'},
   {kind:'guide',slug:'watercolor-leaves-botanical',label:'Core'},
   {kind:'guide',slug:'watercolor-soft-sky-cloud-washes',label:'Core'},
   {kind:'guide',slug:'watercolor-small-landscape',label:'Core'}
  ],
  exploreGroups:[
   {id:'practice',label:'Practice',guides:['watercolor-sky-wash-practice']},
   {id:'color-planning',label:'Color planning',guides:['simple-color-harmony']}
  ]
 },
 {
  id:'digital-art-basics',
  title:'Digital Art Basics',
  eyebrow:'LAYERS & COLOR',
  description:'Learn a simple layer workflow, then use the same idea to color a face.',
  outcome:'Understand what each layer is doing instead of building a confusing layer stack.',
  firstSlug:'digital-color-layers',
  recommended:'Any drawing app with layers is enough.',
  steps:[
   {kind:'digitalSeries',slug:'digital-color-layers',label:'Series 1'},
   {kind:'digitalSeries',slug:'color-a-face-in-layers',label:'Series 2'}
  ],
  explore:['simple-color-harmony']
 }
];

export const learningPathById=new Map(learningPaths.map(path=>[path.id,path]));
