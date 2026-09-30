// Explore Art editorial data.
// Historical artwork images are loaded from sources that explicitly mark the file Public Domain,
// CC0, or another open license. Source links remain visible on every artwork card.

const commonsImage=(file,width=760)=>`https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}?width=${width}`;
const commonsSource=file=>`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;
const artwork=(title,artist,year,file,museum,note,rights='Public domain')=>({
 title,artist,year,image:commonsImage(file),source:commonsSource(file),museum,note,rights
});

export const media = [
 {id:'graphite',name:'Vẽ chì',en:'Graphite & Pencil',emoji:'✎',image:'showcase/pencil-portrait.svg',text:'Dựng hình, đậm nhạt, ánh sáng. Đẹp ngay cả khi không có màu.',start:'guides/#pencil'},
 {id:'colored-pencil',name:'Chì màu',en:'Colored Pencil',emoji:'✿',image:'showcase/character.svg',text:'Điều khiển lực tay, lớp màu và các chuyển sắc tinh tế.',start:'guides/#character'},
 {id:'watercolor',name:'Màu nước',en:'Watercolor',emoji:'◌',image:'showcase/watercolor.svg',text:'Màu trong, vệt loang, nước và khoảng giấy trắng.',start:'guides/#watercolor'},
 {id:'oil',name:'Sơn dầu',en:'Oil Painting',emoji:'✦',image:'showcase/digital.svg',text:'Nét cọ, lớp sơn, trộn màu và chất liệu bề mặt.',start:'explore/#movements'},
 {id:'acrylic',name:'Acrylic',en:'Acrylic Painting',emoji:'◇',image:'showcase/watercolor-2.svg',text:'Màu nhanh khô, dễ thử nhiều lớp và phong cách.',start:'guides/#watercolor'},
 {id:'pastel',name:'Sáp & phấn màu',en:'Crayon & Pastel',emoji:'✺',image:'showcase/character-2.svg',text:'Bề mặt mềm, những vệt màu trực tiếp và giàu cảm giác.',start:'guides/#character'},
 {id:'ink',name:'Mực & thủy mặc',en:'Ink & Wash',emoji:'〰',image:'showcase/pencil-landscape.svg',text:'Nét bút, sắc mực loãng–đậm và khoảng trống của giấy.',start:'movement/ink-wash/'},
 {id:'lacquer',name:'Sơn mài Việt Nam',en:'Vietnamese Lacquer',emoji:'✧',image:'showcase/digital-2.svg',text:'Sơn ta, lớp màu, vàng bạc, vỏ trứng và kỹ thuật mài.',start:'explore/#movements'},
 {id:'digital',name:'Vẽ trên máy',en:'Digital Painting',emoji:'◈',image:'showcase/digital.svg',text:'Brush, layer, ánh sáng và khả năng thử nghiệm không giới hạn.',start:'guides/#digital'}
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
