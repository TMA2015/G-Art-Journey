// Explore Art editorial data.
// Historical artwork images are loaded from sources that explicitly mark the file Public Domain,
// CC0, or another open license. Source links remain visible on every artwork card.

const commonsImage=(file,width=760)=>`https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}?width=${width}`;
const commonsSource=file=>`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;
const artwork=(title,artist,year,file,museum,note,rights='Public domain')=>({
 title,artist,year,image:commonsImage(file),source:commonsSource(file),museum,note,rights
});
const siteExample=(title,image,note)=>({
 title,artist:'G-Art Journey',year:'Illustration',image,source:null,museum:null,note,rights:'Original G-Art illustration'
});
const aiExample=(title,image,note)=>({
 title,artist:'G-Art Journey · AI study',year:'AI-generated medium study',image,source:null,museum:null,note,rights:'AI-generated medium study · Not a historical artwork'
});

export const media = [
 {
  id:'graphite',name:'Vẽ chì',en:'Graphite & Pencil',emoji:'✎',image:'explore/materials/graphite-study.webp',imageNote:'AI-generated medium study · Not a historical artwork',
  text:'Build shapes with light and shade. Beautiful even without color.',start:'material/graphite/',
  about:'Graphite pencils mix graphite with clay inside a wooden or mechanical holder. Harder H grades usually make lighter, sharper marks; softer B grades make darker, broader marks. HB, 2B and 4B are enough for most beginner studies.',
  tools:['HB or H pencil for light construction','2B–4B pencil for darker values','Eraser or kneaded eraser','Sharpener','Smooth or medium-tooth drawing paper'],
  process:['Sketch the biggest shapes very lightly.','Check proportion and placement before darkening lines.','Group the main light and shadow shapes.','Build darker values gradually and keep the lightest paper clean.'],
  examples:[
   artwork('Sheet of Studies of Hands and Arms','Leonardo da Vinci','c. 1480','Study of Arms and Hands.jpg','Royal Collection','A useful example of drawing as observation: separate hand and arm studies are tested on one sheet.'),
   siteExample('Portrait value study','showcase/pencil-portrait.svg','A G-Art illustration showing how simple line and value can describe a face.')
  ],
  learn:[{label:'Pencil drawing guides',href:'guides/#pencil'}]
 },
 {
  id:'colored-pencil',name:'Chì màu',en:'Colored Pencil',emoji:'✿',image:'explore/materials/colored-pencil-floral-study.webp',imageNote:'AI-generated medium study · Not a historical artwork',
  text:'Explore pressure, layered pigments and subtle color transitions.',start:'material/colored-pencil/',
  about:'Colored pencils carry pigment in a wax- or oil-based core. They reward patient layering: light pressure keeps the paper texture open, while heavier pressure can blend or burnish colors into a denser surface.',
  tools:['A small set of colored pencils','Smooth drawing paper or light drawing card','Sharpener','Light graphite pencil for a faint sketch','Optional colorless blender or white pencil'],
  process:['Begin with a clean, light sketch.','Lay down the lightest local colors with gentle pressure.','Layer new colors instead of pressing hard too early.','Sharpen edges and deepen the darkest accents near the end.'],
  examples:[
   aiExample('Bluebird colored-pencil study','explore/materials/colored-pencil-bird-study.webp','Layered blue, orange and neutral pencil strokes show how colored pencil can build feather texture and gradual color changes.'),
   siteExample('Character color study','showcase/character.svg','A G-Art character illustration used to show simple flat colors and controlled color accents.')
  ],
  learn:[]
 },
 {
  id:'watercolor',name:'Màu nước',en:'Watercolor',emoji:'◌',image:'explore/materials/watercolor-landscape-study.webp',imageNote:'AI-generated medium study · Not a historical artwork',
  text:'Transparent washes, blooms, water and white paper.',start:'material/watercolor/',
  about:'Watercolor uses pigment carried by water and gum arabic. The white of the paper often supplies the brightest light, so watercolor is usually planned from light toward dark rather than covered with opaque corrections.',
  tools:['Watercolor pans or tubes','Watercolor paper','Round brush plus one larger wash brush','Two water containers','Palette or mixing plate','Paper towel or clean cloth'],
  process:['Make a very light drawing if you need one.','Wet or dry the paper depending on the edge you want.','Paint broad light washes first.','Let layers dry, then add darker shapes and the smallest accents.'],
  examples:[
   artwork('The Blue Rigi, Sunrise','J. M. W. Turner','1842','Blue Rigi painting.jpg','Tate','A famous watercolor where transparent washes, paper white and atmospheric edges create distance and light.'),
   siteExample('Watercolor flower study','showcase/watercolor.svg','An original G-Art illustration showing soft washes, edge control and visible paper.')
  ],
  learn:[{label:'Watercolor guides',href:'guides/#watercolor'}]
 },
 {
  id:'oil',name:'Sơn dầu',en:'Oil Painting',emoji:'✦',image:commonsImage('Vincent van Gogh Starry Night.jpg'),imageNote:'The Starry Night · Vincent van Gogh · Public domain source via Wikimedia Commons',
  text:'Brush marks, rich paint layers, color mixing and texture.',start:'material/oil/',
  about:'Oil paint suspends pigment in a drying oil such as linseed oil. It stays workable much longer than acrylic, making it good for slow blending, rich darks, thick brushwork and repeated adjustment.',
  tools:['Tube oil colors','A rigid palette or disposable palette paper','Bristle and/or soft brushes','Prepared canvas or painting panel','Palette knife','Painting medium if needed; beginners can work solvent-free'],
  process:['Block in the large shapes and value pattern.','Establish the main color families before chasing detail.','Build opaque or transparent layers as needed.','Finish with deliberate edges, highlights and brush texture after the large structure works.'],
  examples:[
   artwork('Mona Lisa','Leonardo da Vinci','c. 1503–1516','Leonardo da Vinci - Mona Lisa (Louvre, Paris).jpg','Louvre Museum','Very soft transitions show another side of oil painting: slow modeling rather than obvious brush marks.'),
   artwork('Poppy Field','Claude Monet','1873','Monet, Claude - Poppy Field.jpg','Musée d’Orsay','Separated touches of oil color build light, grass and flowers without describing every detail.')
  ],
  learn:[],
  care:'If a studio uses solvents or traditional mediums, follow the product label, provide ventilation and keep materials away from food. A solvent-free beginner setup is possible.'
 },
 {
  id:'acrylic',name:'Acrylic',en:'Acrylic Painting',emoji:'◇',image:'explore/materials/acrylic-still-life-study.webp',imageNote:'AI-generated medium study · Not a historical artwork',
  text:'Quick-drying color for exploring layers and styles.',start:'material/acrylic/',
  about:'Acrylic paint uses pigment in an acrylic-polymer binder. It dilutes with water while wet, dries quickly and becomes water-resistant after drying. It can be used in thin transparent layers or in more opaque, paint-like blocks.',
  tools:['Acrylic colors','Synthetic brushes','Palette','Canvas, board or heavy paper','Water container','Cloth or paper towel'],
  process:['Plan the large shapes before the paint dries.','Block in broad mid-tone color areas.','Add lighter and darker layers after the first shapes are established.','Use smaller brushes only for the final edges and details.'],
  examples:[
   siteExample('Layered color study','showcase/watercolor-2.svg','A G-Art illustration used to show how transparent-looking and opaque-looking color areas can be layered.'),
   siteExample('Graphic color study','showcase/digital.svg','An original G-Art image that demonstrates the bold, flat shapes acrylic can handle well.')
  ],
  learn:[],
  care:'Rinse brushes before acrylic dries in them. Do not pour heavy paint residue directly into a sink; wipe excess paint first.'
 },
 {
  id:'pastel',name:'Sáp & phấn màu',en:'Crayon & Pastel',emoji:'✺',image:'explore/materials/pastel-dancer-study.webp',imageNote:'AI-generated medium study · Not a historical artwork',
  text:'Soft surfaces, direct color and expressive marks.',start:'material/pastel/',
  about:'This page groups several stick media that behave differently: dry pastel is powdery and blendable, oil pastel is soft and waxy, and wax crayons are firmer and cleaner. All are direct mark-making media with no brush between the hand and the surface.',
  tools:['Dry pastel, oil pastel or wax crayons','Textured pastel paper or drawing paper','Scrap paper for testing colors','Optional blending tool or tissue','Fixative only when appropriate for the chosen pastel and with adult/studio guidance'],
  process:['Choose a limited palette and place the biggest color shapes first.','Layer or hatch colors instead of immediately smearing everything together.','Blend selectively where a soft transition helps.','Keep some crisp marks and accents so the surface stays lively.'],
  examples:[
   artwork('The Star','Edgar Degas','c. 1876–1878','Edgar Degas - The Star - Google Art Project.jpg','Philadelphia Museum of Art','Pastel over an ink monotype shows both soft color clouds and sharp drawn accents.'),
   siteExample('Character color sketch','showcase/character-2.svg','A G-Art illustration showing direct color blocks and simple expressive edges.')
  ],
  learn:[]
 },
 {
  id:'ink',name:'Mực & thủy mặc',en:'Ink & Wash',emoji:'〰',image:commonsImage('Fan Kuan - Travelers Among Mountains and Streams - Google Art Project.jpg'),imageNote:'Travelers Among Mountains and Streams · Fan Kuan · Public domain source via Wikimedia Commons',
  text:'Brush strokes, diluted ink and the expressive space left on paper.',start:'material/ink/',
  about:'Ink drawing can use a pen, brush or traditional ink stick. When ink is diluted with water, one dark material can produce many values. In East Asian ink painting, brush pressure, speed and untouched paper are as important as the black ink itself.',
  tools:['Liquid ink or an ink stick with inkstone','Brush and/or dip pen','Absorbent drawing, xuan or sumi paper','Water containers','Small palette or dishes for diluted ink'],
  process:['Test how quickly the paper absorbs ink.','Prepare two or three dilutions before starting.','Place the largest dark/light structure with confident marks.','Use dry brush, wet wash and empty paper deliberately rather than filling every area.'],
  examples:[
   artwork('Early Spring','Guo Xi','1072','Guo Xi - Early Spring (large).jpg','National Palace Museum, Taipei','Layered ink values and mist create a landscape that seems to unfold through space.'),
   siteExample('Ink landscape study','showcase/pencil-landscape.svg','A G-Art landscape illustration used to compare broad value masses, empty space and simplified brush-like shapes.')
  ],
  learn:[],
  related:[{label:'Explore Chinese Ink & Wash style',href:'movement/ink-wash/'}]
 },
 {
  id:'lacquer',name:'Sơn mài Việt Nam',en:'Vietnamese Lacquer',emoji:'✧',image:'explore/materials/lacquer-lotus-study.webp',imageNote:'AI-generated medium study · Not a historical artwork',
  text:'Vietnamese lacquer, layered paint, gold, silver, eggshell and polishing.',start:'material/lacquer/',
  about:'Vietnamese lacquer painting is built through repeated layers on a prepared support. Traditional practice may combine lacquer, pigments, eggshell and metal leaf, then sand and polish the surface so earlier layers reappear in controlled ways.',
  tools:['Prepared lacquer board or panel','Traditional lacquer materials or a modern studio-safe substitute','Pigments and brushes','Eggshell, gold or silver leaf when part of the design','Abrasives and polishing materials used in the studio'],
  process:['Prepare and seal the support.','Build the image through planned layers rather than one final coat.','Add materials such as pigment, eggshell or metal leaf according to the design.','Sand and polish selectively so different layers and textures become visible.'],
  examples:[
   siteExample('Layered-surface illustration','showcase/digital-2.svg','A G-Art illustration used only to explain layered color and surface planning; it is not presented as a historical lacquer artwork.'),
   siteExample('Color-and-texture planning study','showcase/watercolor-2.svg','A simple original illustration used to discuss how a lacquer design can be planned in large color areas before surface finishing.')
  ],
  learn:[],
  care:'Traditional lacquer sap can irritate skin and requires experienced studio handling. This medium is best learned with a trained teacher rather than treated as an unsupervised home craft.'
 },
 {
  id:'digital',name:'Vẽ trên máy',en:'Digital Painting',emoji:'◈',image:'showcase/digital.svg',
  text:'Brushes, layers, light and the freedom to experiment.',start:'material/digital/',
  about:'Digital painting uses a drawing tablet, stylus or touchscreen with software that simulates brushes, layers, selections and color mixing. The tools are flexible, but the same fundamentals—shape, value, edge, color and composition—still matter.',
  tools:['Tablet, iPad/phone or pen display','Pressure-sensitive stylus when available','Drawing app with brush and layer support','A simple brush set','Cloud or local backup for working files'],
  process:['Sketch on a separate layer.','Block the largest color and value shapes before details.','Use layers to separate major tasks, not every tiny stroke.','Zoom out often, then finish edges, accents and export a copy for sharing.'],
  examples:[
   siteExample('Digital color study','showcase/digital-2.svg','An original G-Art illustration showing how layers and flat shapes can support quick experimentation.'),
   siteExample('Character study','showcase/character.svg','A simple G-Art character example connecting digital tools with the character-drawing lessons on the site.')
  ],
  learn:[{label:'Digital art guides',href:'guides/#digital'}]
 }
];

export const movements = [
 {
  slug:'renaissance',name:'Phục Hưng',en:'Renaissance',period:'Europe · 15th–16th centuries',color:'#e3cbb1',
  image:commonsImage('Raphael School of Athens.jpg'),
  summary:'Artists studied the human figure, perspective, nature and light with renewed attention to observation and classical ideas.',
  why:['Linear perspective made deep architectural space convincing.','Anatomy and proportion became central tools for figure painting.','Gradual light and shadow helped bodies and faces feel solid.'],
  artworks:[
   artwork('Mona Lisa','Leonardo da Vinci','c. 1503–1516','Leonardo da Vinci - Mona Lisa (Louvre, Paris).jpg','Louvre Museum','A portrait famous for subtle expression, atmospheric depth and soft transitions.'),
   artwork('The Last Supper','Leonardo da Vinci','c. 1495–1498','Leonardo da Vinci - The Last Supper high res.jpg','Santa Maria delle Grazie, Milan','A large narrative composition built around perspective, grouping and gesture.'),
   artwork('The Birth of Venus','Sandro Botticelli','c. 1484–1486','Sandro Botticelli - La nascita di Venere - Google Art Project.jpg','Uffizi Gallery','Flowing contour and an idealized figure give the scene a lyrical, almost weightless rhythm.'),
   artwork('The School of Athens','Raphael','1509–1511','Raphael School of Athens.jpg','Apostolic Palace, Vatican City','Architecture, perspective and many figures are organized into one exceptionally clear composition.')
  ]
 },
 {
  slug:'impressionism',name:'Ấn tượng',en:'Impressionism',period:'France · late 19th century',color:'#d8e7dd',
  image:commonsImage('Monet - Impression, Sunrise.jpg'),
  summary:'Impressionist painters often focused on changing light, modern life and visible brushwork rather than polishing every detail.',
  why:['Broken or visible brush marks keep the surface lively.','Outdoor light and changing weather become subjects in themselves.','Color relationships often do more work than precise outlines.'],
  artworks:[
   artwork('Impression, Sunrise','Claude Monet','1872','Monet - Impression, Sunrise.jpg','Musée Marmottan Monet','The painting whose title helped give Impressionism its name.'),
   artwork('Woman with a Parasol — Madame Monet and Her Son','Claude Monet','1875','Claude Monet, Woman with a Parasol - Madame Monet and Her Son, 1875, NGA 61379.jpg','National Gallery of Art','A low viewpoint, wind and bright outdoor light make the moment feel immediate.','CC0'),
   artwork('Poppy Field','Claude Monet','1873','Monet, Claude - Poppy Field.jpg','Musée d’Orsay','Small figures and repeated red marks turn an ordinary field into a study of light and color.'),
   artwork('The Cradle','Berthe Morisot','1872','Berthe Morisot - The Cradle - Google Art Project.jpg','Musée d’Orsay','Soft handling and intimate observation show how Impressionism also explored everyday domestic life.')
  ]
 },
 {
  slug:'post-impressionism',name:'Hậu Ấn tượng',en:'Post-Impressionism',period:'Europe · late 19th century',color:'#efddb0',
  image:commonsImage('Vincent van Gogh Starry Night.jpg'),
  summary:'Post-Impressionism is an umbrella term for artists who moved beyond Impressionism in different directions: structure, symbolism, rhythm and expressive color.',
  why:['There is no single Post-Impressionist look.','Color can carry mood or symbolism instead of simply copying nature.','Artists increasingly organize a picture around personal structure and rhythm.'],
  artworks:[
   artwork('The Starry Night','Vincent van Gogh','1889','Vincent van Gogh Starry Night.jpg','Museum of Modern Art','Rhythmic curves make sky and landscape feel emotionally charged.'),
   artwork('Mont Sainte-Victoire','Paul Cézanne','c. 1902–1906','Paul Cézanne - Mont Sainte-Victoire - Google Art Project.jpg','Princeton University Art Museum','Cézanne builds landscape through color patches and strong underlying structure.'),
   artwork('Vision After the Sermon','Paul Gauguin','1888','La vision après le sermon (Paul Gauguin).jpg','Scottish National Gallery','Flattened space and intense color move the scene away from naturalistic observation.'),
   artwork('Wheat Field with Cypresses','Vincent van Gogh','1889','Vincent van Gogh - Wheat Field with Cypresses - Google Art Project.jpg','The Metropolitan Museum of Art','Directional brushwork links the field, trees and sky into one visual rhythm.')
  ]
 },
 {
  slug:'cubism',name:'Lập thể',en:'Cubism',period:'Europe · early 20th century',color:'#decfbd',
  image:commonsImage('Juan Gris - Portrait of Pablo Picasso - Google Art Project.jpg'),
  summary:'Cubist artists broke objects into planes and reorganized viewpoints on a flat surface instead of preserving one realistic camera-like view.',
  why:['Objects are simplified into intersecting planes and shapes.','More than one viewpoint can be suggested in one image.','The picture surface becomes as important as the object being represented.'],
  artworks:[
   artwork('Portrait of Pablo Picasso','Juan Gris','1912','Juan Gris - Portrait of Pablo Picasso - Google Art Project.jpg','Art Institute of Chicago','A portrait is rebuilt from angular planes while the sitter remains recognizable.'),
   artwork('Still Life with Checked Tablecloth','Juan Gris','1915','Still Life with Checked Tablecloth Juan Gris 1915.jpeg','The Metropolitan Museum of Art','Table objects are compressed and reordered into overlapping geometric fragments.'),
   artwork('Simultaneous Windows on the City','Robert Delaunay','1912','Robert Delaunay, 1912, Les Fenêtres simultanée sur la ville (Simultaneous Windows on the City), 40 x 46 cm, Kunsthalle Hamburg.jpg','Hamburger Kunsthalle','Color and fragmented window-like planes push Cubist ideas toward abstraction.'),
   artwork('Man on a Balcony','Albert Gleizes','1912',"Albert Gleizes, l'Homme au Balcon, 1912, oil on canvas, 195.6 x 114.9 cm, Philadelphia Museum of Art.jpg",'Philadelphia Museum of Art','The standing figure is broken into broad geometric structures that still suggest volume.')
  ]
 },
 {
  slug:'ink-wash',name:'Thủy mặc Trung Quốc',en:'Chinese Ink & Wash',period:'Chinese painting tradition · many eras',color:'#dfe5dc',
  image:commonsImage('Fan Kuan - Travelers Among Mountains and Streams - Google Art Project.jpg'),
  summary:'Ink wash painting uses brush pressure, diluted ink and empty paper to suggest form, distance, atmosphere and the energy of nature.',
  why:['Ink can move from dense black to pale wash without changing medium.','Unpainted paper can become mist, water or open air.','Scale and placement often make people feel small within a much larger landscape.'],
  artworks:[
   artwork('Travelers Among Mountains and Streams','Fan Kuan','c. 1000','Fan Kuan - Travelers Among Mountains and Streams - Google Art Project.jpg','National Palace Museum, Taipei','A monumental mountain dwarfs the travelers below; texture and scale create extraordinary weight.'),
   artwork('Early Spring','Guo Xi','1072','Guo Xi - Early Spring (large).jpg','National Palace Museum, Taipei','Layered mountain forms, mist and winding paths build a landscape that seems to unfold through space.'),
   artwork('Wind in Pines Among a Myriad Valleys','Li Tang','1124','Li Tang - Wind in Pines Among a Myriad Valleys.jpg','National Palace Museum, Taipei','Dense rock texture and strongly structured peaks bridge Northern and Southern Song landscape traditions.'),
   artwork('Walking on a Mountain Path in Spring','Ma Yuan','c. 1200','Ma Yuan Walking on Path in Spring.jpg','National Palace Museum, Taipei','A deliberately sparse composition uses empty space and a few carefully placed forms to create atmosphere.')
  ]
 }
];

export const artists = [
 {
  slug:'leonardo-da-vinci',name:'Leonardo da Vinci',dates:'1452–1519',region:'Italy · Renaissance',tag:'ARTIST STORY 01',
  image:commonsImage('Leonardo da Vinci - Mona Lisa (Louvre, Paris).jpg'),imageNote:'Mona Lisa · Public domain source via Wikimedia Commons.',accent:'#ead8c5',
  intro:'Leonardo combined close observation with an unusual curiosity about anatomy, engineering, nature and how light describes form.',
  signature:'Observation · structure · soft transitions',
  why:['His portraits use extremely subtle transitions rather than hard outlines.','His drawings connect artistic observation with anatomy and scientific curiosity.','Perspective, gesture and grouping make complex scenes feel organized.'],
  artworks:[
   artwork('Mona Lisa','Leonardo da Vinci','c. 1503–1516','Leonardo da Vinci - Mona Lisa (Louvre, Paris).jpg','Louvre Museum','Look at the soft edges around the face and the atmospheric landscape behind it.'),
   artwork('The Last Supper','Leonardo da Vinci','c. 1495–1498','Leonardo da Vinci - The Last Supper high res.jpg','Santa Maria delle Grazie, Milan','The vanishing point, gestures and small figure groups organize a very complex narrative.'),
   artwork('Lady with an Ermine','Leonardo da Vinci','c. 1489–1491','Lady with the ermine.jpg','Czartoryski Museum, Kraków','The turning pose links the head, shoulders, hands and animal into one flowing movement.'),
   artwork("Ginevra de' Benci",'Leonardo da Vinci','c. 1474–1478',"Leonardo da Vinci - Ginevra de' Benci - Google Art Project.jpg",'National Gallery of Art','A restrained portrait where soft modeling and landscape atmosphere are already central.')
  ]
 },
 {
  slug:'claude-monet',name:'Claude Monet',dates:'1840–1926',region:'France · Impressionism',tag:'ARTIST STORY 02',
  image:commonsImage('Monet - Impression, Sunrise.jpg'),imageNote:'Impression, Sunrise · Public domain source via Wikimedia Commons.',accent:'#dce8db',
  intro:'Monet repeatedly painted changing light, weather, water and familiar places, making perception itself the subject.',
  signature:'Light · atmosphere · color',
  why:['He often returned to the same subject at different hours or seasons.','Separate touches of color can merge when viewed from a distance.','Reflections and atmosphere can be more important than hard outlines.'],
  artworks:[
   artwork('Impression, Sunrise','Claude Monet','1872','Monet - Impression, Sunrise.jpg','Musée Marmottan Monet','Loose marks and a small orange sun capture a fleeting harbor atmosphere.'),
   artwork('Woman with a Parasol — Madame Monet and Her Son','Claude Monet','1875','Claude Monet, Woman with a Parasol - Madame Monet and Her Son, 1875, NGA 61379.jpg','National Gallery of Art','Wind, viewpoint and sunlight make the figure feel caught in an instant.','CC0'),
   artwork('Poppy Field','Claude Monet','1873','Monet, Claude - Poppy Field.jpg','Musée d’Orsay','Repeated color marks guide the eye through a simple landscape.'),
   artwork('The Magpie','Claude Monet','1868–1869','Monet - The Magpie.jpg','Musée d’Orsay','A winter scene where colored shadows show that “white” snow contains many subtle hues.')
  ]
 },
 {
  slug:'vincent-van-gogh',name:'Vincent van Gogh',dates:'1853–1890',region:'Netherlands · Post-Impressionism',tag:'ARTIST STORY 03',
  image:commonsImage('Vincent van Gogh Starry Night.jpg'),imageNote:'The Starry Night · Public domain source via Wikimedia Commons.',accent:'#efdfbb',
  intro:'Van Gogh made brush direction and color part of the emotional structure of a painting, so the marks themselves help tell us how a scene feels.',
  signature:'Brushwork · rhythm · expressive color',
  why:['Visible strokes create movement and surface texture.','Color is often intensified for expression rather than strict realism.','Repeated directional marks can connect sky, land, buildings and figures.'],
  artworks:[
   artwork('The Starry Night','Vincent van Gogh','1889','Vincent van Gogh Starry Night.jpg','Museum of Modern Art','Large flowing rhythms connect sky, village and cypress.'),
   artwork('Sunflowers','Vincent van Gogh','1888','Sunflowers National Gallery.jpg','National Gallery, London','A narrow palette becomes rich through variation in hue, brushwork and texture.'),
   artwork('Bedroom in Arles','Vincent van Gogh','1888','VanGogh Bedroom Arles1.jpg','Van Gogh Museum','Flattened perspective and strong color simplify a real room into a memorable design.'),
   artwork('Self-Portrait','Vincent van Gogh','1889','Self-portrait of Vincent Van Gogh.jpg','Musée d’Orsay','Short directional strokes describe face, clothing and background while keeping the whole image unified.')
  ]
 },
 {
  slug:'fan-kuan',name:'Fan Kuan',dates:'c. 950–c. 1032',region:'China · Northern Song',tag:'ARTIST STORY 04',
  image:commonsImage('Fan Kuan - Travelers Among Mountains and Streams - Google Art Project.jpg'),imageNote:'Travelers Among Mountains and Streams · Public domain source via Wikimedia Commons.',accent:'#dce4d9',
  intro:'Fan Kuan is associated with monumental Northern Song landscape painting, where vast mountains make human figures feel small within nature.',
  signature:'Monumental mountains · ink texture · scale',
  why:['Large central mountain masses create a sense of physical weight.','Dense texture strokes give rock and forest distinct surfaces.','Tiny travelers help the viewer feel the scale of the landscape.'],
  worksNote:'Only a small number of surviving paintings are securely connected with Fan Kuan. The second example below is traditionally attributed to him but is now considered later and “in the Fan Kuan style.”',
  artworks:[
   artwork('Travelers Among Mountains and Streams','Fan Kuan','c. 1000','Fan Kuan - Travelers Among Mountains and Streams - Google Art Project.jpg','National Palace Museum, Taipei','The best-known surviving work associated with Fan Kuan: an immense central mountain towers over tiny travelers.'),
   artwork('Sitting Alone by a Stream','Traditionally attributed to Fan Kuan','11th–12th century','Fan Kuan-Sitting Alone by a Stream.jpg','National Palace Museum, Taipei','The museum notes that the painting follows Fan Kuan’s style but was probably made somewhat later.')
  ]
 }
];

export const moreArtists=[
 {name:'Michelangelo',about:'Human anatomy, sculpture and Renaissance frescoes.',url:'https://www.vatican.va/various/cappelle/sistina_vr/index.html'},
 {name:'Pablo Picasso',about:'A central figure in the development of Cubism; explore museum collections.',url:'https://www.moma.org/artists/4609'},
 {name:'Berthe Morisot',about:'An important Impressionist who often portrayed everyday life.',url:'https://www.nga.gov/artists/1723-berthe-morisot'},
 {name:'Bùi Xuân Phái',about:'Hanoi’s old streets through a distinctive painting language.',url:'https://en.wikipedia.org/wiki/B%C3%B9i_Xu%C3%A2n_Ph%C3%A1i'}
];
