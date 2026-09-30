import {media as rawMedia,movements as rawMovements,artists as rawArtists,moreArtists as rawMore} from '../data/discovery.mjs';
import {language} from './ui.mjs';
import {asset} from './content.mjs';
const mediaEn={
 graphite:'Build shapes with light and shade. Beautiful even without color.',
 'colored-pencil':'Explore pressure, layered pigments and subtle color transitions.',
 watercolor:'Transparent washes, blooms, water and white paper.',
 oil:'Brush marks, rich paint layers, color mixing and texture.',
 acrylic:'Quick-drying color for exploring layers and styles.',
 pastel:'Soft surfaces, direct color and expressive marks.',
 ink:'Brush strokes, diluted ink and the expressive space left on paper.',
 lacquer:'Vietnamese lacquer, layered paint, gold, silver, eggshell and polishing.',
 digital:'Brushes, layers, light and the freedom to experiment.'
};
const mediaViNames={acrylic:'Màu acrylic'};
const movementEn={
 renaissance:{name:'Renaissance',period:'Europe · 15th–16th centuries',summary:'Artists explored the human figure, space and the natural world with close observation.',clues:['Human proportions and anatomy became central to many works.','Perspective gives depth to a flat picture.','Light and gradual shading make forms feel solid.'],look:'Notice how soft shadows reveal a face and how lines lead your eye into a scene.',try:'Construct a face from simple forms and push the background back with value.',artists:['Leonardo da Vinci','Michelangelo','Raphael']},
 impressionism:{name:'Impressionism',period:'France · late 19th century',summary:'Capturing changing light and a fleeting moment instead of describing every detail.',clues:['Brush marks and adjacent color may remain visible.','Changing light is a major subject.','Everyday scenes and landscapes appear often.'],look:'Stand back, then come close: colors may blend in your eyes at a distance.',try:'Paint the same corner of a tree in morning and evening light.',artists:['Claude Monet','Pierre-Auguste Renoir','Berthe Morisot']},
 'post-impressionism':{name:'Post-Impressionism',period:'Europe · late 19th century',summary:'Several artists moved beyond Impressionism in different ways: expressive color, structure and brushwork.',clues:['Color may express feeling rather than copy life.','Brush marks create a strong rhythm.','There is no single fixed visual formula.'],look:'Look at Van Gogh: his strokes make the sky, trees and fields feel alive.',try:'Draw one row of trees with short flowing marks and a chosen palette.',artists:['Vincent van Gogh','Paul Cézanne','Paul Gauguin']},
 cubism:{name:'Cubism',period:'Europe · early 20th century',summary:'Seeing objects from multiple viewpoints and reorganizing their shapes on a flat surface.',clues:['Forms are often broken into geometric planes.','Several viewpoints may be suggested at once.','A single realistic perspective is not required.'],look:'Try finding an eye, nose, bottle or instrument among the scattered planes.',try:'Sketch a cup from two angles and combine them into one image.',artists:['Pablo Picasso','Georges Braque','Juan Gris']},
 'ink-wash':{name:'Chinese Ink Wash',period:'East Asian painting tradition · many eras',summary:'Ink, brush marks and empty space evoke mountains, trees, water, mist and our experience of nature.',clues:['Dark and diluted ink, dry and wet strokes suggest texture.','Untouched paper may suggest mist, clouds or water.','Tiny human figures emphasize the vast landscape.'],look:'In Fan Kuan’s landscape, find the tiny travelers under the immense mountains.',try:'Use only three ink values for distant mountains, close mountains and trees.',artists:['Fan Kuan','Guo Xi','Bada Shanren']}
};
const artistEn={
 'leonardo-da-vinci':{name:'Leonardo da Vinci',region:'Italy · Renaissance',tag:'ARTIST STORY 01',imageNote:'Mona Lisa · Public domain source via Wikimedia Commons.',intro:'He observed people and nature with the curiosity of both an artist and an investigator.',signature:'Observation · structure · soft shading',facts:[{name:'Look closely',detail:'His studies explored bodies, faces and movement.'},{name:'A sense of space',detail:'Proportion and perspective suggest a world behind a figure.'},{name:'Sfumato',detail:'Soft tonal transitions reduce hard edges between light and shadow.'}],workYear:'c. 1474–1478',try:'Use graphite to soften one cheek from light into shadow.'},
 'claude-monet':{name:'Claude Monet',region:'France · Impressionism',tag:'ARTIST STORY 02',imageNote:'Impression, Sunrise · Public domain source via Wikimedia Commons.',intro:'The same garden or pond can feel entirely different as the light changes.',signature:'Light · moments · color',facts:[{name:'One place, many times',detail:'Monet returned to familiar subjects to observe changing light.'},{name:'Colors side by side',detail:'Separate brush marks create a lively whole from a distance.'},{name:'Water and reflections',detail:'Water lilies and the pond became enduring subjects of his work.'}],try:'Paint the same leaf in warm sunlight and cool shade.'},
 'vincent-van-gogh':{name:'Vincent van Gogh',region:'Netherlands · Post-Impressionism',tag:'ARTIST STORY 03',imageNote:'Wheat Field with Cypresses (1889) · The Met, Public Domain.',intro:'Brush strokes and color can bring rhythm and emotion to a landscape.',signature:'Brushwork · rhythm · expressive color',facts:[{name:'Visible brushwork',detail:'The marks themselves suggest motion and texture.'},{name:'Expressive color',detail:'Color is not only used to copy the natural world.'},{name:'Rhythm in a landscape',detail:'The direction of marks connects trees, fields and sky.'}],try:'Use short repeated strokes to suggest a moving sky.'},
 'fan-kuan':{name:'Fan Kuan',region:'China · Northern Song',tag:'ARTIST STORY 04',imageNote:'Travelers Among Mountains and Streams · Public domain source via Wikimedia Commons.',intro:'Within a vast landscape, people are only a tiny part of nature.',signature:'Monumental mountains · ink · space',facts:[{name:'The mountain is central',detail:'Mountains dominate the composition while travelers are tiny.'},{name:'Dark, light and empty',detail:'Ink washes and open areas create a sense of depth and mist.'},{name:'Observe nature',detail:'Rocks, trees and mountains are built with rhythmic strokes.'}],workYear:'c. 1000',try:'Draw an enormous mountain and add two very small travelers to explore scale.'}
};
const moreEn={
 Michelangelo:'Human anatomy, sculpture and Renaissance frescoes.',
 'Pablo Picasso':'A central figure in the development of Cubism; explore museum collections.',
 'Berthe Morisot':'An important Impressionist who often portrayed everyday life.',
 'Bùi Xuân Phái':'Hanoi’s old streets through a distinctive painting language.'
};
const artistVi={
 'leonardo-da-vinci':{workYear:'khoảng 1474–1478',museum:'Phòng trưng bày Nghệ thuật Quốc gia · tác phẩm thuộc phạm vi công cộng'},
 'claude-monet':{museum:'Bảo tàng Nghệ thuật Metropolitan'},
 'vincent-van-gogh':{imageNote:'Wheat Field with Cypresses (1889) · Bảo tàng The Met, phạm vi công cộng.',museum:'Bảo tàng The Met · phạm vi công cộng'},
 'fan-kuan':{name:'Phạm Khoan (Fan Kuan)',workYear:'khoảng năm 1000',museum:'Bảo tàng Cố Cung, Đài Bắc'}
};
export const getMedia=(lang='en')=>rawMedia.map(m=>{
 const en=language(lang)==='en';
 return {...m,name:en?m.en:(mediaViNames[m.id]||m.name),label:en?m.en:(mediaViNames[m.id]||m.name),text:en?mediaEn[m.id]:m.text,image:asset(lang,m.image)};
});
export const getMovements=(lang='en')=>rawMovements.map(m=>{
 const en=language(lang)==='en';
 const localized={...m,...(en?movementEn[m.slug]:{en:m.name}),image:m.image.startsWith('https:')?m.image:asset(lang,m.image)};
 return {...localized,clues:localized.clues||localized.why};
});
export const getArtists=(lang='en')=>rawArtists.map(a=>{
 const en=language(lang)==='en';
 const localized={...a,...(en?artistEn[a.slug]:artistVi[a.slug]||{}),image:a.image.startsWith('https:')?a.image:asset(lang,a.image)};
 const facts=localized.facts||localized.why.map((detail,i)=>({name:en?`Key idea ${i+1}`:`Ý chính ${i+1}`,detail}));
 return {...localized,facts};
});
export const getMoreArtists=(lang='en')=>rawMore.map(a=>({...a,about:language(lang)==='en'?moreEn[a.name]:a.about}));
