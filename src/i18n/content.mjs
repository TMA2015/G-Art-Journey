import { showcase as rawShowcase,collections as rawCollections,guides as rawGuides } from '../data/content.mjs';
import { language } from './ui.mjs';
export const asset=(lang,path)=>{
 if(language(lang)==='vi' && path.startsWith('showcase/')) return path.replace('showcase/','showcase/vi/');
 if(language(lang)==='vi' && path.startsWith('infographics/')) return path.replace(/\.svg$/, '-vi.svg');
 return path;
};
const showcaseVi={
 portrait:{label:'CHÂN DUNG CHÌ',title:'Vẻ đẹp của nét chì',description:'Một nét chì, một chút ánh sáng, và câu chuyện hiện ra trên giấy.',images:[{title:'Chân dung tĩnh lặng',alt:'Minh họa chân dung vẽ chì'},{title:'Đường nét và ánh sáng',alt:'Minh họa nghiên cứu chân dung thứ hai'}]},
 landscape:{label:'PHONG CẢNH CHÌ',title:'Một nơi để dạo chơi',description:'Núi, hồ, phố nhỏ và những khoảng lặng được giữ lại bằng nét vẽ.',images:[{title:'Núi trong nét chì',alt:'Minh họa núi và hồ bằng chì'},{title:'Những con phố trong ký ức',alt:'Minh họa phác thảo phố bằng chì'}]},
 watercolor:{label:'MÀU NƯỚC',title:'Để màu sắc tự rong chơi',description:'Một chút nước, một lớp màu trong, và những điều bất ngờ dịu dàng.',images:[{title:'Một bông hoa nở',alt:'Minh họa bông hoa màu nước'},{title:'Lá trong buổi chiều',alt:'Minh họa lá cây màu nước'}]},
 character:{label:'VẼ NHÂN VẬT',title:'Vẽ một thế giới nhỏ',description:'Một nhân vật, một biểu cảm, đôi khi là cả thế giới tưởng tượng của riêng mình.',images:[{title:'Nghiên cứu nhân vật',alt:'Minh họa nhân vật truyện tranh nữ'},{title:'Một nhân vật, một câu chuyện',alt:'Minh họa nhân vật truyện tranh nam'}]},
 digital:{label:'VẼ KỸ THUẬT SỐ',title:'Mơ bằng màu sắc',description:'Ý tưởng lớn lên cùng cọ vẽ số, ánh sáng và trí tưởng tượng.',images:[{title:'Phong cảnh mơ mộng I',alt:'Minh họa phong cảnh số lúc hoàng hôn'},{title:'Phong cảnh mơ mộng II',alt:'Minh họa phong cảnh số lúc chiều tối'}]}
};
const showcaseEn={
 portrait:{label:'PENCIL PORTRAIT',title:'The beauty of graphite',description:'A single pencil line, a little light, and a story unfolding on paper.',images:[{title:'A quiet portrait',alt:'Illustrated graphite portrait'},{title:'Lines and light',alt:'Second illustrated pencil portrait study'}]},
 landscape:{label:'PENCIL LANDSCAPE',title:'A place to wander',description:'Mountains, lakes and quiet streets remembered in pencil.',images:[{title:'Mountains in pencil',alt:'Illustrated pencil mountain and lake'},{title:'Streets we remember',alt:'Illustrated pencil street sketch'}]},
 watercolor:{label:'WATERCOLOR',title:'Let the colors wander',description:'A little water, a transparent wash and a few gentle surprises.',images:[{title:'A flower in bloom',alt:'Watercolor flower illustration'},{title:'Leaves in the afternoon',alt:'Watercolor leaves illustration'}]},
 character:{label:'CHARACTER ART',title:'Draw a little world',description:'One character, one expression, sometimes an entire world of imagination.',images:[{title:'Character studies',alt:'Illustrated female comics character'},{title:'Another character, another story',alt:'Illustrated male comics character'}]},
 digital:{label:'DIGITAL ART',title:'Dream in color',description:'Ideas growing through digital brushes, light and imagination.',images:[{title:'Dreamscape I',alt:'Illustrated digital sunset landscape'},{title:'Dreamscape II',alt:'Illustrated digital evening landscape'}]}
};
const collectionVi={
 pencil:{title:'Vẽ chì',subtitle:'Nét chì',description:'Chân dung, hình người và phong cảnh. Những câu chuyện kể bằng đậm nhạt.'},
 character:{title:'Vẽ nhân vật',subtitle:'Nhân vật',description:'Manga, manhwa, manhua và hoạt hình: nhiều cách tạo nên một nhân vật.'},
 watercolor:{title:'Màu nước',subtitle:'Màu nước',description:'Lớp màu trong, vệt loang mềm và những khoảnh khắc tự nhiên.'},
 digital:{title:'Vẽ kỹ thuật số',subtitle:'Ứng dụng vẽ',description:'Cọ vẽ, lớp màu, ánh sáng và thế giới trên màn hình.'},
 landscape:{title:'Phong cảnh',subtitle:'Phong cảnh',description:'Núi rừng, sông hồ, phố xá, phối cảnh và những nơi bạn muốn nhớ.'}
};
const collectionEn={
 pencil:{title:'Pencil Art',subtitle:'Graphite',description:'Portraits, figures and landscapes. Stories told through light and shade.'},
 character:{title:'Character Art',subtitle:'Characters',description:'Manga, manhwa, manhua and cartoons: many ways to create a character.'},
 watercolor:{title:'Watercolor',subtitle:'Watercolor',description:'Transparent washes, gentle blooms and natural little moments.'},
 digital:{title:'Digital Art',subtitle:'Drawing apps',description:'Brushes, layers, light and worlds made on screen.'},
 landscape:{title:'Landscape',subtitle:'Landscape',description:'Mountains, lakes, streets, perspective and places worth remembering.'}
};
const guideVi={
 'draw-a-pencil-portrait':{tag:'VẼ CHÌ',title:'Một khuôn mặt từ những nét chì',difficulty:'Bắt đầu'},
 'draw-a-pencil-landscape':{tag:'PHONG CẢNH CHÌ',title:'Một ngọn núi và mặt hồ',difficulty:'Bắt đầu'},
 'draw-a-manga-face':{tag:'VẼ NHÂN VẬT',title:'Vẽ một khuôn mặt manga',difficulty:'Bắt đầu'},
 'watercolor-first-flower':{tag:'MÀU NƯỚC',title:'Bông hoa màu nước đầu tiên',difficulty:'Bắt đầu'},
 'digital-color-layers':{tag:'VẼ KỸ THUẬT SỐ',title:'Tô màu với những lớp riêng biệt',difficulty:'Cơ bản',description:'Hiểu vì sao người vẽ chia phác thảo, màu nền, bóng và ánh sáng thành các lớp.',supplies:'Ứng dụng vẽ có lớp (Procreate, Krita, ibisPaint...)',steps:[
 {title:'Phác thảo',body:'Tạo lớp phác thảo rồi giảm độ mờ để dùng làm hướng dẫn.'},
 {title:'Màu nền',body:'Đặt các mảng màu da, tóc và quần áo trên lớp riêng khi cần.'},
 {title:'Bóng',body:'Tạo lớp bóng phía trên màu nền; dùng mặt nạ cắt để không tô tràn.'},
 {title:'Điểm sáng',body:'Thêm điểm sáng trên lớp mới. Đừng đặt ánh sáng ở mọi nơi như nhau.'},
 {title:'Điều chỉnh tổng thể',body:'Bật hoặc tắt từng lớp để thấy vai trò của chúng; chỉ giữ số lớp cần thiết.'}
 ]}
};
const guideEn={
 'draw-a-pencil-portrait':{tag:'PENCIL ART',difficulty:'Beginner',time:'25–40 min',title:'A portrait from pencil lines',description:'From large shapes to facial proportions and the first three values.',supplies:'Paper, HB/2B pencils and a soft eraser',steps:[
 {title:'Observe the big shape',body:'Compare head height and width. Lightly sketch an oval and the facial centerline.'},
 {title:'Place the main landmarks',body:'Mark the eyes, base of nose and mouth. Check their spacing before adding detail.'},
 {title:'Build eyes, nose and lips',body:'Work with simple shapes and light lines. Avoid finishing one eye before locating the other.'},
 {title:'Set three values',body:'Separate light, middle and dark. Start with major hair and shadow masses; keep paper white for the lightest areas.'},
 {title:'Finish selectively',body:'Sharpen the focal lines and soften shadow edges where forms turn; then step back to view the whole portrait.'}
 ]},
 'draw-a-pencil-landscape':{tag:'PENCIL LANDSCAPE',difficulty:'Beginner',time:'20–35 min',title:'A mountain and its lake',description:'Create a sense of depth with line and value alone.',supplies:'Paper, HB/2B/4B pencils and an eraser',steps:[
 {title:'Choose the horizon',body:'Lightly separate land and water, leaving space for the sky.'},
 {title:'Block in the mountains',body:'Start from the largest shapes rather than individual rocks.'},
 {title:'Separate near and far',body:'Make distant ridges lighter and lower-contrast; foreground trees and shore darker and sharper.'},
 {title:'Suggest reflections',body:'Use short horizontal marks on the water rather than a rigid mirrored copy.'},
 {title:'Set a focal point',body:'Keep a patch of light on the lake and raise contrast where you want the eye to rest.'}
 ]},
 'draw-a-manga-face':{tag:'CHARACTER ART',difficulty:'Beginner',time:'20–30 min',title:'Draw a manga face',description:'A flexible head construction for designing a character of your own.',supplies:'Paper and pencil, or any drawing app',steps:[
 {title:'Head mass and centerline',body:'Start with a sphere, then place the chin and direction of the face.'},
 {title:'Eye line and proportions',body:'Place the eyes, nose and mouth for your chosen design; no single proportion defines every manga style.'},
 {title:'Group hair into shapes',body:'Find the hairline, flow and big clumps before drawing small strands.'},
 {title:'Add expression',body:'Experiment with eyes, brows and mouth without losing the head structure.'},
 {title:'Refine the linework',body:'Vary main outlines and keep secondary lines lighter so the face reads clearly.'}
 ]},
 'watercolor-first-flower':{tag:'WATERCOLOR',difficulty:'Beginner',time:'20–30 min',title:'Your first watercolor flower',description:'Explore water, transparency and layering without controlling every bloom.',supplies:'Watercolor paper, paint, round brush and two cups of water',steps:[
 {title:'Test color first',body:'Mix lighter and darker versions of one color, noticing the water ratio.'},
 {title:'Lightly sketch a flower',body:'Keep pencil lines faint beneath transparent washes.'},
 {title:'Paint the first wash',body:'Begin with a thin wash and reserve white paper for the brightest spots.'},
 {title:'Let it dry, then layer',body:'Glazing deepens color while leaving the earlier wash visible.'},
 {title:'Add stem and leaves',body:'Use a few considered marks; prefer an overall rhythm to making every leaf identical.'}
 ]},
 'digital-color-layers':{tag:'DIGITAL ART',difficulty:'Basics',time:'15–25 min',title:'Painting with separate layers',description:'Why digital artists separate sketch, base colors, shadows and light.',supplies:'A drawing app with layers (Procreate, Krita, ibisPaint...)',steps:[
 {title:'Sketch',body:'Create a sketch layer and lower its opacity to use as a guide.'},
 {title:'Base colors',body:'Put skin, hair and clothing shapes on separate layers when useful.'},
 {title:'Shadows',body:'Add a shadow layer above the base; try clipping to keep paint inside its shape.'},
 {title:'Highlights',body:'Add highlights on another layer, but avoid making every area equally bright.'},
 {title:'Review the whole image',body:'Toggle layers to see their purpose; keep only as many as you need.'}
 ]}
};
export const getShowcase=(lang='vi')=>rawShowcase.map(s=>{
 const copy=(language(lang)==='en'?showcaseEn:showcaseVi)[s.id];
 return {...s,...copy,images:s.images.map((image,i)=>({...image,...copy.images[i],src:asset(lang,image.src)}))};
});
export const getCollections=(lang='vi')=>rawCollections.map(c=>({...c,...(language(lang)==='en'?collectionEn:collectionVi)[c.id],image:asset(lang,c.image)}));
export const getGuides=(lang='vi')=>rawGuides.map(g=>({...g,...(language(lang)==='en'?guideEn:guideVi)[g.slug],image:asset(lang,g.image)}));
