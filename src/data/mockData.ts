import { MenuItem, CoffeeBean, CafeLocation, SpaceGalleryItem, JournalPost, Testimonial, BrewGuide } from '../types';

export const SIGNATURE_DRINKS: MenuItem[] = [
  {
    id: 'drink-espresso',
    name: 'Single Origin Espresso',
    category: 'Espresso',
    description: 'Chiết xuất 9 bar áp suất từ hạt Arabica Cầu Đất nguyên bản, lớp crema vàng óng sánh mịn, hương cam chanh và mật ong.',
    tastingNotes: 'Rich · Bold · Balanced',
    price: 55000,
    priceFormatted: '55.000 ₫',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    badge: 'POPULAR',
    temperature: 'Hot',
    caffeineLevel: 'High',
    calories: '5 kcal',
    originInfo: '100% Arabica Cầu Đất 1.650m',
    allergens: []
  },
  {
    id: 'drink-iced-latte',
    name: 'NOIR Velvet Iced Latte',
    category: 'Iced Coffee',
    description: 'Sự hòa quyện giữa Double Shot Espresso đậm đà và sữa tươi thanh trùng béo ngậy được rót tầng nghệ thuật.',
    tastingNotes: 'Smooth · Creamy · Cold',
    price: 75000,
    priceFormatted: '75.000 ₫',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    badge: 'SIGNATURE',
    temperature: 'Iced',
    caffeineLevel: 'Medium',
    calories: '160 kcal',
    originInfo: 'Espresso Blend + Dalat Milk',
    allergens: ['Lactose (Có thể đổi sữa hạt)']
  },
  {
    id: 'drink-coconut-coffee',
    name: 'Toasted Coconut Coffee',
    category: 'Signatures',
    description: 'Cà phê Robusta Buôn Ma Thuột đặc sản kết hợp cùng cốt dừa Bến Tre xay tuyết bông mềm mịn và dừa sấy giòn.',
    tastingNotes: 'Vietnamese Coffee · Coconut · Ice',
    price: 85000,
    priceFormatted: '85.000 ₫',
    image: 'https://images.unsplash.com/photo-1572442388796-11668ba69e53?auto=format&fit=crop&w=800&q=80',
    badge: 'POPULAR',
    temperature: 'Iced',
    caffeineLevel: 'High',
    calories: '240 kcal',
    originInfo: 'Fine Robusta Đắk Lắk + Cốt dừa Bến Tre',
    allergens: ['Dừa']
  },
  {
    id: 'drink-dirty-coffee',
    name: 'NOIR Dirty Glass',
    category: 'Signatures',
    description: 'Rót trực tiếp shot Espresso nóng hổi lên lớp sữa tươi ướp lạnh -4°C tạo nên cảm giác phân tầng nhiệt độ độc bản.',
    tastingNotes: 'Espresso · Fresh Milk · Velvet',
    price: 79000,
    priceFormatted: '79.000 ₫',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=90',
    badge: 'SIGNATURE',
    temperature: 'Both',
    caffeineLevel: 'High',
    calories: '140 kcal',
    originInfo: 'Ristretto Shot kép + Sữa béo',
    allergens: ['Lactose']
  },
  {
    id: 'drink-matcha-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'Tea & Matchas',
    description: 'Bột trà xanh hữu cơ Uji Kyoto nghiền cối đá truyền thống kết hợp cùng sữa hạt yến mạch thơm lành thanh mát.',
    tastingNotes: 'Ceremonial Matcha · Milk · Umami',
    price: 82000,
    priceFormatted: '82.000 ₫',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    temperature: 'Both',
    caffeineLevel: 'Medium',
    calories: '130 kcal',
    originInfo: 'Kyoto Uji 1st Harvest',
    allergens: []
  },
  {
    id: 'drink-cold-brew',
    name: 'Amber Citrus Cold Brew',
    category: 'Specialty Cold Brew',
    description: 'Ủ lạnh chậm suốt 24 giờ cùng vỏ cam vàng hữu cơ và hoa nhài, mang lại hậu vị thanh khiết, chua dịu và sảng khoái.',
    tastingNotes: 'Slow Brewed · Smooth · Refreshing',
    price: 79000,
    priceFormatted: '79.000 ₫',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    badge: 'CHEF PICK',
    temperature: 'Iced',
    caffeineLevel: 'High',
    calories: '15 kcal',
    originInfo: 'Arabica Ethiopia & Đà Lạt',
    allergens: []
  },
  // Pastries & Bakery Pairing
  {
    id: 'pastry-croissant',
    name: 'French Butter Croissant AOP',
    category: 'Pastries & Brunch',
    description: 'Bánh sừng bò nướng mới mỗi sáng với bơ Pháp vùng Isigny Sainte-Mère, ngàn lớp giòn tan và ruột mềm xốp thơm lừng.',
    tastingNotes: 'Flaky · Buttery · Golden Crust',
    price: 45000,
    priceFormatted: '45.000 ₫',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    badge: 'FRESH BAKED',
    temperature: 'Hot',
    caffeineLevel: 'None',
    calories: '280 kcal',
    allergens: ['Gluten', 'Bơ sữa'],
    isPastry: true
  },
  {
    id: 'pastry-tiramisu',
    name: 'Classic Espresso Tiramisu',
    category: 'Pastries & Brunch',
    description: 'Bánh Tiramisu Ý truyền thống ngâm đẫm cà phê NOIR Signature Espresso, phô mai Mascarpone béo mịn rắc bột cacao nguyên chất.',
    tastingNotes: 'Espresso · Mascarpone · Cocoa',
    price: 65000,
    priceFormatted: '65.000 ₫',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    badge: 'CHEF PICK',
    temperature: 'Both',
    caffeineLevel: 'Medium',
    calories: '320 kcal',
    allergens: ['Trứng', 'Sữa', 'Gluten'],
    isPastry: true
  },
  {
    id: 'pastry-lemon-tart',
    name: 'Artisan Lemon Meringue Tart',
    category: 'Pastries & Brunch',
    description: 'Đế bánh tart giòn rụm với nhân kem chanh vàng chua thanh mát lạnh, phủ lớp kem trứng meringue nướng xém thơm bùi.',
    tastingNotes: 'Zesty Citrus · Sweet Meringue · Crisp',
    price: 59000,
    priceFormatted: '59.000 ₫',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    badge: 'NEW',
    temperature: 'Both',
    caffeineLevel: 'None',
    calories: '260 kcal',
    allergens: ['Trứng', 'Bơ sữa', 'Gluten'],
    isPastry: true
  }
];

export const FEATURED_BLEND = {
  id: 'bean-signature-blend',
  name: 'NOIR SIGNATURE BLEND',
  subtitle: 'Dark Chocolate · Caramel · Roasted Almond',
  price: 89000,
  priceFormatted: '89.000 ₫',
  roast: 'Medium Roast',
  origin: 'Cầu Đất & Buôn Ma Thuột, Vietnam',
  altitude: '1.450m - 1.650m',
  process: 'Honey & Washed Process',
  tastingNotes: ['Dark Chocolate', 'Caramel', 'Roasted Almond', 'Brown Sugar'],
  description: 'Dòng cà phê signature được nghiên cứu tỉ mỉ suốt 3 năm, kết hợp giữa 70% Arabica Cầu Đất hương hoa quả và 30% Fine Robusta Buôn Ma Thuột đậm đà, mang đến cấu trúc tròn vị hoàn hảo cho Espresso & Latte.',
  image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1200&q=80',
  weight: '250g',
  batchNumber: 'LOT-2609A',
  roastDate: '24/09/2026',
  bagsRemaining: 38
};

export const COFFEE_BEANS: CoffeeBean[] = [
  {
    id: 'bean-dalat',
    name: 'Cầu Đất Bourbon Heritage',
    region: 'Đà Lạt, Lâm Đồng',
    origin: 'Vietnam',
    altitude: '1.650m',
    process: 'Fully Washed',
    roast: 'Light Roast',
    tastingNotes: ['Floral', 'Citrus', 'Honey', 'Bergamot'],
    price: 185000,
    priceFormatted: '185.000 ₫',
    weightOptions: ['250g', '500g', '1000g (1kg)'],
    description: 'Giống Arabica Cầu Đất nguyên bản trồng trên sườn núi lửa bazan cổ, hậu vị thanh tao như trà hoa nhài kết hợp mật ong rừng.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    badge: 'VIETNAMESE SPECIALTY',
    batchNumber: 'LOT-CD2601',
    roastDate: '25/09/2026',
    bagsRemaining: 42
  },
  {
    id: 'bean-bmt',
    name: 'Đắk Lắk Fine Robusta',
    region: 'Buôn Ma Thuột',
    origin: 'Vietnam',
    altitude: '800m',
    process: 'Natural Anaerobic 72h',
    roast: 'Dark Roast',
    tastingNotes: ['Chocolate', 'Nutty', 'Caramel', 'Tobacco'],
    price: 155000,
    priceFormatted: '155.000 ₫',
    weightOptions: ['250g', '500g', '1000g (1kg)'],
    description: 'Fine Robusta tuyển chọn 100% trái chín đỏ, lên men kỵ khí 72 giờ cho crema dày mịn và hương sô-cô-la đen đậm chất Tây Nguyên.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    badge: 'BEST SELLER',
    batchNumber: 'LOT-BM2603',
    roastDate: '23/09/2026',
    bagsRemaining: 29
  },
  {
    id: 'bean-ethiopia',
    name: 'Yirgacheffe G1 Natural',
    region: 'Yirgacheffe',
    origin: 'Ethiopia',
    altitude: '2.100m',
    process: 'Natural Sundried',
    roast: 'Light Roast',
    tastingNotes: ['Berry', 'Jasmine', 'Citrus', 'Peach'],
    price: 245000,
    priceFormatted: '245.000 ₫',
    weightOptions: ['250g', '500g', '1000g (1kg)'],
    description: 'Hạt cà phê di sản từ cái nôi Ethiopia, ngát hương hoa nhài và vị ngọt mọng nước của quả mọng hoang dã.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&w=800&q=80',
    badge: 'DIRECT TRADE',
    batchNumber: 'LOT-ETH2607',
    roastDate: '22/09/2026',
    bagsRemaining: 19
  },
  {
    id: 'bean-colombia',
    name: 'Huila Supremo Geisha',
    region: 'Huila Valley',
    origin: 'Colombia',
    altitude: '1.850m',
    process: 'Washed Extended Fermentation',
    roast: 'Medium Roast',
    tastingNotes: ['Sweet', 'Fruity', 'Chocolate', 'Apricot'],
    price: 235000,
    priceFormatted: '235.000 ₫',
    weightOptions: ['250g', '500g', '1000g (1kg)'],
    description: 'Vùng cao nguyên Huila trứ danh với vị ngọt ngào của caramel, trái cây nhiệt đới chín mọng và cấu trúc tròn trịa.',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    badge: 'LIMITED RESERVE',
    batchNumber: 'LOT-COL2609',
    roastDate: '24/09/2026',
    bagsRemaining: 25
  }
];

export const BEAN_TO_CUP_STEPS = [
  {
    number: '01',
    title: 'Sourcing',
    subtitle: 'Tìm Kiếm & Tuyển Chọn Tận Nông Trại',
    description: 'Chúng tôi làm việc trực tiếp với các nông hộ tâm huyết tại Cầu Đất, Buôn Ma Thuột và Yirgacheffe, chỉ thu hái 100% quả cà phê chín mọng bằng tay ở độ cao trên 1.400m.',
    image: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
    quote: 'Chất lượng bắt đầu từ sự tôn trọng đối với đất mẹ và người nông dân.'
  },
  {
    number: '02',
    title: 'Roasting',
    subtitle: 'Nghệ Thuật Rang Mẻ Nhỏ Nghệ Nhân',
    description: 'Sử dụng máy rang Giesen hàng đầu từ Hà Lan, mỗi mẻ rang đều được Barista Master theo dõi đường cong nhiệt độ chuẩn xác từng giây để đánh thức hương thơm tự nhiên tiềm ẩn.',
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=800&q=80',
    quote: 'Rang cà phê là khoa học của nhiệt độ và trực giác của người nghệ nhân.'
  },
  {
    number: '03',
    title: 'Brewing',
    subtitle: 'Chiết Xuất Tinh Chuẩn Xác',
    description: 'Nguồn nước lọc khoáng 3 cấp độ, kiểm soát nhiệt độ 93°C và tỷ lệ chiết xuất vàng 1:2. Dù là Espresso 9 bar hay V60 nhỏ giọt, mỗi tách cà phê đều đạt độ cân bằng tuyệt hảo.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    quote: 'Mỗi chi tiết nhỏ đều quyết định cảm xúc đầu tiên khi bạn nhấp ngụm cà phê.'
  },
  {
    number: '04',
    title: 'Enjoying',
    subtitle: 'Khoảnh Khắc Của Riêng Bạn',
    description: 'Thưởng thức trong không gian kiến trúc tối giản, ánh sáng dịu nhẹ và âm nhạc thư giãn. Một tách cà phê thơm ngon chính là nghi thức tuyệt vời để mở đầu hoặc lắng đọng một ngày.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    quote: 'Brewed for the moments that matter.'
  }
];

export const SPACE_PHOTOS: SpaceGalleryItem[] = [
  {
    id: 'space-1',
    title: 'Sunlit Minimalist Coffee Bar',
    location: 'NOIR District 1 (Đồng Khởi)',
    category: 'Coffee Bar',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    caption: 'Quầy bar mở ngập tràn ánh sáng tự nhiên với máy pha Slayer Espresso thủ công.'
  },
  {
    id: 'space-2',
    title: 'Quiet Workspace Lounge',
    location: 'NOIR Thao Dien (Xuân Thủy)',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    caption: 'Bàn dài gỗ sồi tự nhiên với ổ cắm điện tích hợp, ánh sáng tự nhiên lý tưởng cho sáng tạo.'
  },
  {
    id: 'space-3',
    title: 'Courtyard Garden Seating',
    location: 'NOIR Phu Nhuan (Phan Xích Long)',
    category: 'Seating',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    caption: 'Khoảng giếng trời ngập tràn cây xanh nhiệt đới mang lại cảm giác bình yên giữa lòng phố thị.'
  },
  {
    id: 'space-4',
    title: 'Warm Evening Atmosphere',
    location: 'NOIR District 1',
    category: 'Night Café',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Ánh đèn vàng ấm 2700K chuyển tiếp nhẹ nhàng cho những buổi hẹn tối lãng mạn.'
  },
  {
    id: 'space-5',
    title: 'Architectural Bauhaus Facade',
    location: 'NOIR Thao Dien',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    caption: 'Mặt tiền kính cong và bê tông thô mộc mang tinh thần kiến trúc Bauhaus hiện đại.'
  },
  {
    id: 'space-6',
    title: 'Craft & Precision Barista',
    location: 'All Locations',
    category: 'Barista Craft',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
    caption: 'Đội ngũ Barista được đào tạo chuyên sâu bởi Hiệp hội Cà phê Đặc sản Quốc tế (SCA).'
  }
];

export const CAFE_LOCATIONS: CafeLocation[] = [
  {
    id: 'loc-d1',
    name: 'NOIR — Flagship District 1',
    district: 'Quận 1, TP. Hồ Chí Minh',
    address: '42 Đồng Khởi, Phường Bến Nghé',
    hours: '07:30 — 22:30',
    openDays: 'Mở cửa tất cả các ngày (T2 - CN)',
    phone: '0916 323 701',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    features: ['Specialty Coffee Bar', 'Bánh nướng Isigny mỗi sáng', 'Wifi 500Mbps', 'Chỗ đỗ xe ô tô'],
    googleMapsUrl: 'https://maps.google.com',
    status: 'Open Now'
  },
  {
    id: 'loc-thaodien',
    name: 'NOIR — Garden Thao Dien',
    district: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    address: '68 Xuân Thủy, Phường Thảo Điền',
    hours: '07:00 — 23:00',
    openDays: 'Mở cửa tất cả các ngày (T2 - CN)',
    phone: '0916 323 701',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    features: ['Sân vườn giếng trời ngập nắng', 'Pet-Friendly', 'Workshop Cupping cuối tuần', 'Cold Brew On Tap'],
    googleMapsUrl: 'https://maps.google.com',
    status: 'Open Now'
  },
  {
    id: 'loc-phunhuan',
    name: 'NOIR — Atelier Phu Nhuan',
    district: 'Phú Nhuận, TP. Hồ Chí Minh',
    address: '128 Phan Xích Long, Phường 2',
    hours: '07:30 — 22:30',
    openDays: 'Mở cửa tất cả các ngày (T2 - CN)',
    phone: '0916 323 701',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    features: ['Không gian làm việc yên tĩnh', 'Bàn họp nhóm nhỏ 6-8 người', 'Trưng bày hạt cà phê rang', 'Take-away Express'],
    googleMapsUrl: 'https://maps.google.com',
    status: 'Open Now'
  }
];

export const BREW_GUIDES: BrewGuide[] = [
  {
    id: 'brew-v60',
    name: 'V60 Pour Over',
    ratio: '1 : 15 (15g cà phê : 225ml nước)',
    waterTemp: '92°C - 94°C',
    grindSize: 'Vừa (Medium - Kích cỡ hạt muối biển)',
    brewTime: '2 phút 30 giây - 3 phút',
    steps: [
      'Gấp và tráng ướt giấy lọc bằng nước sôi để khử mùi giấy và làm ấm bình chứa.',
      'Cho 15g cà phê xay vào phễu, tạo một hốc nhỏ ở giữa và rót 45ml nước ủ (Bloom) trong 40 giây.',
      'Rót tiếp theo vòng tròn xoắn ốc từ trong ra ngoài đến 150ml, nghỉ 15 giây rồi rót tiếp đến 225ml.',
      'Lắc nhẹ bình server và thưởng thức tách cà phê ngát hương hoa quả.'
    ]
  },
  {
    id: 'brew-frenchpress',
    name: 'French Press (Bình Nén)',
    ratio: '1 : 14 (20g cà phê : 280ml nước)',
    waterTemp: '93°C',
    grindSize: 'Thô (Coarse)',
    brewTime: '4 phút',
    steps: [
      'Cho 20g cà phê xay thô vào bình thủy tinh French Press.',
      'Rót toàn bộ 280ml nước sôi 93°C, khuấy nhẹ 3 vòng để cà phê thấm đều.',
      'Đậy nắp bình nhưng chưa ép pít-tông xuống, để ngâm chiết xuất trong 4 phút.',
      'Nhấn pít-tông nhẹ nhàng đều tay và rót ra ly ngay lập tức để tránh cà phê bị đắng chát.'
    ]
  },
  {
    id: 'brew-phin',
    name: 'Phin Nhôm Truyền Thống Đương Đại',
    ratio: '1 : 4 (25g cà phê : 100ml nước)',
    waterTemp: '96°C',
    grindSize: 'Vừa mịn (Medium-Fine)',
    brewTime: '4 - 5 phút',
    steps: [
      'Tráng phin qua nước sôi. Cho 25g cà phê vào phin, lắc phẳng mặt và cài gài nhẹ.',
      'Rót 30ml nước sôi vào đáy nắp và thân phin để ủ trong 2 phút.',
      'Rót tiếp 70ml nước sôi lên trên, đậy nắp và chờ từng giọt cà phê sánh đặc nhỏ xuống.',
      'Thưởng thức đen đá hoặc thêm 25ml sữa đặc thơm béo.'
    ]
  }
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'post-1',
    title: 'Nghệ Thuật Pha Cà Phê V60 Tại Nhà Chuẩn Barista',
    category: 'Brewing Guide',
    date: '20 Th09, 2026',
    readTime: '5 phút đọc',
    excerpt: 'Khám phá bí quyết kiểm soát nhiệt độ nước 92°C, kích thước hạt xay và kỹ thuật rót nước xoắn ốc để có tách Pour Over thơm ngát hoa quả.',
    content: [
      'Pha cà phê bằng phễu V60 không đơn thuần là một phương pháp chiết xuất, mà là một nghi thức buổi sáng giúp bạn tĩnh tâm và bắt đầu ngày mới một cách trọn vẹn.',
      'Để bắt đầu, hãy đảm bảo bạn sử dụng nước khoáng tinh khiết có TDS khoảng 100-150ppm, nhiệt độ lý tưởng dao động từ 91°C đến 94°C tùy vào độ rang của hạt cà phê.'
    ],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Nguyễn Hải Nam',
      role: 'Head of Quality & Roasting',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 'post-2',
    title: 'Hành Trình Tái Sinh Hạt Arabica Cầu Đất Trên Độ Cao 1.650m',
    category: 'Origin & Farm',
    date: '12 Th09, 2026',
    readTime: '7 phút đọc',
    excerpt: 'Những câu chuyện đằng sau các nông hộ Đà Lạt, nơi khí hậu sương mù quanh năm tạo nên hương vị Arabica mượt mà đẳng cấp thế giới.',
    content: [
      'Cầu Đất được thiên nhiên ban tặng khí hậu ôn đới quanh năm và thổ nhưỡng đất đỏ bazan màu mỡ. Đây chính là thánh địa sản sinh ra những hạt Arabica thơm ngon nhất Việt Nam.'
    ],
    image: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Trần Thảo My',
      role: 'Green Bean Buyer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 'post-3',
    title: 'Hiểu Về Specialty Coffee: Từ Điểm Nếm Đến Trải Nghiệm Thưởng Thức',
    category: 'Culture',
    date: '05 Th09, 2026',
    readTime: '6 phút đọc',
    excerpt: 'Tại sao cà phê đặc sản cần đạt từ 80 điểm trở lên theo chuẩn SCA và sự khác biệt rõ rệt giữa cà phê thương mại và Specialty Coffee.',
    content: [
      'Specialty Coffee là thuật ngữ dùng để chỉ những mẻ cà phê được chăm sóc tỉ mỉ từ nông trại đến lúc thưởng thức, không có hạt lỗi và mang hương vị nguyên bản phong phú.'
    ],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Lê Minh Quân',
      role: 'Q-Grader Certified',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  }
];

export const INSTAGRAM_POSTS = [
  { id: 'ig-1', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80', likes: '1.4k', tag: 'Morning Ritual' },
  { id: 'ig-2', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', likes: '2.1k', tag: 'Space & Light' },
  { id: 'ig-3', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80', likes: '980', tag: 'Double Shot' },
  { id: 'ig-4', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80', likes: '1.8k', tag: 'Slow Weekend' },
  { id: 'ig-5', image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80', likes: '1.2k', tag: 'Fresh Roast' },
  { id: 'ig-6', image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80', likes: '3.4k', tag: 'Barista Soul' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Hoàng Lan Anh',
    role: 'Creative Director & Freelance Architect',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    content: 'Không gian cực kỳ đẹp, ánh sáng tự nhiên và âm nhạc jazz nhẹ nhàng rất thích hợp để làm việc cả ngày. Món Dirty Coffee và Velvet Latte ở đây chuẩn vị và khác biệt hoàn toàn với các quán thông thường.',
    favoriteOrder: 'NOIR Dirty Glass + Croissant bơ Pháp AOP',
    verified: true,
    date: '15/09/2026'
  },
  {
    id: 't-2',
    name: 'Đặng Tuấn Kiệt',
    role: 'Software Engineer & Specialty Coffee Lover',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    content: 'Mình đặt gói cà phê hạt Cầu Đất Bourbon về tự pha V60 tại nhà mỗi sáng. Hạt rang mới trong vòng 7 ngày, hương hoa quả bùng nổ và hậu vị ngọt thanh rất sâu.',
    favoriteOrder: 'Hạt Cầu Đất Bourbon Heritage (250g)',
    verified: true,
    date: '08/09/2026'
  },
  {
    id: 't-3',
    name: 'Nguyễn Phương Thảo',
    role: 'Brand Manager',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    content: 'Dịch vụ giao hàng tận nơi đóng gói chỉn chu, ly giữ nhiệt tốt và cà phê vẫn giữ trọn lớp bọt sữa mềm mại. Rất ấn tượng với sự chuyên nghiệp và phong cách thương hiệu.',
    favoriteOrder: 'Toasted Coconut Coffee & Lemon Tart',
    verified: true,
    date: '02/09/2026'
  }
];
