export const showcase = [
  { id: 'portrait', label: 'PENCIL PORTRAIT', title: 'The beauty of graphite', description: 'Một nét chì, một chút ánh sáng, và một câu chuyện hiện ra trên giấy.', category: 'Pencil Art', images: [
    { src: 'showcase/pencil-portrait.svg', alt: 'Minh họa chân dung bằng nét chì', title: 'A quiet portrait' },
    { src: 'showcase/pencil-portrait-2.svg', alt: 'Minh họa nghiên cứu chân dung thứ hai', title: 'Lines and light' }
  ]},
  { id: 'landscape', label: 'PENCIL LANDSCAPE', title: 'A place to wander', description: 'Núi, hồ, phố nhỏ và những khoảng lặng được giữ lại bằng nét vẽ.', category: 'Pencil Art', images: [
    { src: 'showcase/pencil-landscape.svg', alt: 'Minh họa phong cảnh núi hồ bằng chì', title: 'Mountains in pencil' },
    { src: 'showcase/pencil-landscape-2.svg', alt: 'Minh họa phác thảo phố bằng chì', title: 'The streets we remember' }
  ]},
  { id: 'watercolor', label: 'WATERCOLOR', title: 'Let the colors wander', description: 'Một chút nước, một lớp màu trong, và những điều bất ngờ thật dịu dàng.', category: 'Watercolor', images: [
    { src: 'showcase/watercolor.svg', alt: 'Minh họa hoa màu nước hồng', title: 'A flower in bloom' },
    { src: 'showcase/watercolor-2.svg', alt: 'Minh họa lá cây màu nước xanh', title: 'Leaves in the afternoon' }
  ]},
  { id: 'character', label: 'CHARACTER ART', title: 'Draw a little world', description: 'Một nhân vật, một biểu cảm, đôi khi là cả thế giới tưởng tượng của riêng mình.', category: 'Character Art', images: [
    { src: 'showcase/character.svg', alt: 'Minh họa nhân vật truyện tranh nữ', title: 'Character studies' },
    { src: 'showcase/character-2.svg', alt: 'Minh họa nhân vật truyện tranh nam', title: 'Another character, another story' }
  ]},
  { id: 'digital', label: 'DIGITAL ART', title: 'Dream in color', description: 'Những ý tưởng lớn lên cùng cọ vẽ số, ánh sáng và trí tưởng tượng.', category: 'Digital Art', images: [
    { src: 'showcase/digital.svg', alt: 'Minh họa phong cảnh kỹ thuật số lúc hoàng hôn', title: 'Dreamscape I' },
    { src: 'showcase/digital-2.svg', alt: 'Minh họa phong cảnh kỹ thuật số lúc chiều tối', title: 'Dreamscape II' }
  ]}
];
export const collections = [
  { id: 'pencil', number:'01', title:'Pencil Art', subtitle:'Vẽ chì', description:'Chân dung, hình người và phong cảnh. Những câu chuyện được kể bằng đậm nhạt.', image:'showcase/pencil-portrait.svg', link:'guides/#pencil' },
  { id: 'character', number:'02', title:'Character Art', subtitle:'Vẽ nhân vật', description:'Manga, manhwa, manhua và cartoon – cùng khám phá nhiều cách dựng một nhân vật.', image:'showcase/character.svg', link:'guides/#character' },
  { id: 'watercolor', number:'03', title:'Watercolor', subtitle:'Màu nước', description:'Lớp màu trong, vệt loang mềm và những khoảnh khắc rất đỗi tự nhiên.', image:'showcase/watercolor.svg', link:'guides/#watercolor' },
  { id: 'digital', number:'04', title:'Digital Art', subtitle:'Vẽ trên ứng dụng', description:'Brush, layer, tô màu và những phong cảnh, nhân vật được vẽ trên màn hình.', image:'showcase/digital.svg', link:'guides/#digital' },
  { id: 'landscape', number:'05', title:'Landscape', subtitle:'Phong cảnh', description:'Núi rừng, sông hồ, phố xá, phối cảnh và những nơi bạn muốn nhớ.', image:'showcase/pencil-landscape.svg', link:'guides/#landscape' }
];
export const guides = [
  { slug:'draw-a-pencil-portrait', category:'pencil', tag:'PENCIL ART', difficulty:'Bắt đầu', time:'25–40 phút', title:'Một khuôn mặt từ những nét chì', description:'Từ hình khối lớn đến tỉ lệ khuôn mặt và ba sắc độ đầu tiên.', image:'showcase/pencil-portrait.svg', supplies:'Giấy, bút chì HB/2B, tẩy mềm', steps:[
    {title:'Quan sát hình lớn', body:'Nhìn tỉ lệ cao–rộng của đầu; phác nhẹ hình bầu dục và đường trục mặt.'},
    {title:'Xác định mốc chính', body:'Đặt đường mắt, đáy mũi, miệng. So sánh khoảng cách trước khi vẽ chi tiết.'},
    {title:'Dựng mắt, mũi, môi', body:'Dùng các hình đơn giản và nét nhẹ. Tránh làm một mắt thật hoàn chỉnh khi mắt kia còn chưa có vị trí.'},
    {title:'Đặt ba sắc độ', body:'Chia sáng – trung gian – tối. Bắt đầu ở vùng tóc và bóng lớn, giữ giấy trắng ở vùng sáng nhất.'},
    {title:'Hoàn thiện có chọn lọc', body:'Làm sắc nét điểm nhấn, làm mềm mép bóng ở vùng chuyển khối, rồi nhìn lại tổng thể.'}
  ]},
  { slug:'draw-a-pencil-landscape', category:'landscape', tag:'PENCIL LANDSCAPE', difficulty:'Bắt đầu', time:'20–35 phút', title:'Một ngọn núi và mặt hồ', description:'Tạo chiều sâu không gian chỉ với đường nét và sắc độ.', image:'showcase/pencil-landscape.svg', supplies:'Giấy, bút HB/2B/4B, tẩy', steps:[
    {title:'Chọn đường chân trời', body:'Vẽ thật nhẹ ranh giới giữa nước và đất. Dành không gian cho bầu trời.'},
    {title:'Dựng mảng núi', body:'Đi từ hình lớn nhất, tránh vẽ vụn từng tảng đá ngay lập tức.'},
    {title:'Phân lớp xa gần', body:'Dãy núi xa nhẹ và ít tương phản; cây và bờ gần đậm, sắc nét hơn.'},
    {title:'Tạo phản chiếu', body:'Dùng các nét ngang ngắn theo mặt nước, không vẽ bản sao đối xứng cứng nhắc.'},
    {title:'Đặt điểm nhấn', body:'Giữ một vùng sáng trên hồ và tăng tương phản tại khu vực muốn người xem chú ý.'}
  ]},
  { slug:'draw-a-manga-face', category:'character', tag:'CHARACTER ART', difficulty:'Bắt đầu', time:'20–30 phút', title:'Vẽ một khuôn mặt manga', description:'Một cách dựng đầu linh hoạt để bắt đầu thiết kế nhân vật của riêng mình.', image:'showcase/character.svg', supplies:'Giấy và bút chì, hoặc ứng dụng vẽ bất kỳ', steps:[
    {title:'Khối đầu và trục mặt', body:'Bắt đầu bằng hình cầu, xác định cằm và hướng quay của khuôn mặt.'},
    {title:'Đường mắt và tỉ lệ', body:'Đặt mắt, mũi, miệng theo tạo hình bạn chọn. Không có một tỉ lệ duy nhất cho mọi manga.'},
    {title:'Nhóm tóc thành mảng', body:'Xác định đường chân tóc, hướng tóc và các cụm lớn trước khi thêm sợi nhỏ.'},
    {title:'Biểu cảm', body:'Thử thay đổi hình mắt, lông mày và miệng mà vẫn giữ cấu trúc đầu.'},
    {title:'Nét hoàn chỉnh', body:'Tăng độ dày ở nét viền chính, giữ nét phụ nhẹ hơn để khuôn mặt dễ đọc.'}
  ]},
  { slug:'watercolor-first-flower', category:'watercolor', tag:'WATERCOLOR', difficulty:'Bắt đầu', time:'20–30 phút', title:'Bông hoa màu nước đầu tiên', description:'Thử nước, độ trong và lớp màu mà không cần kiểm soát mọi vệt loang.', image:'showcase/watercolor.svg', supplies:'Giấy màu nước, màu nước, cọ tròn, hai cốc nước', steps:[
    {title:'Thử màu trên giấy nháp', body:'Pha màu nhạt và đậm của cùng một sắc, quan sát lượng nước.'},
    {title:'Phác một hình hoa đơn giản', body:'Giữ nét chì nhẹ để không cản trở lớp màu trong.'},
    {title:'Tô lớp đầu', body:'Dùng lớp wash mỏng; chừa giấy ở vùng sáng nhất.'},
    {title:'Đợi khô rồi chồng lớp', body:'Glazing giúp tăng chiều sâu mà vẫn thấy sắc màu bên dưới.'},
    {title:'Thêm thân và lá', body:'Dùng ít nét, ưu tiên nhịp điệu tổng thể thay vì cố vẽ đều từng chiếc lá.'}
  ]},
  { slug:'digital-color-layers', category:'digital', tag:'DIGITAL ART', difficulty:'Cơ bản', time:'15–25 phút', title:'Tô màu với những lớp riêng biệt', description:'Hiểu vì sao người vẽ chia sketch, màu nền, bóng và ánh sáng thành các layer.', image:'showcase/digital.svg', supplies:'Ứng dụng vẽ có layer (Procreate, Krita, ibisPaint...)', steps:[
    {title:'Sketch', body:'Tạo lớp phác thảo và giảm opacity để làm hướng dẫn.'},
    {title:'Base colors', body:'Đặt các mảng màu nền da, tóc, quần áo trên những lớp riêng khi cần.'},
    {title:'Shadows', body:'Tạo lớp bóng phía trên màu nền; thử clipping để không tô tràn mảng.'},
    {title:'Highlights', body:'Dùng lớp mới cho điểm sáng. Hạn chế đặt ánh sáng khắp nơi như nhau.'},
    {title:'Điều chỉnh tổng thể', body:'Tắt/bật từng layer để thấy vai trò của chúng; giữ số lớp vừa đủ cho mình.'}
  ]}
];
