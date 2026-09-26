export type Language = 'vi' | 'en';

export interface Translations {
  // Navigation & Global
  nav: {
    menu: string;
    beans: string;
    space: string;
    locations: string;
    story: string;
    orderNow: string;
    hotline: string;
    searchPlaceholder: string;
    cart: string;
    bookTable: string;
    language: string;
  };

  // Hero Section
  hero: {
    stamp: string;
    todayServed: string;
    specialtyCups: string;
    readyAt3Stores: string;
    voucherBanner: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    tastePrompt: string;
    instantBuyPrefix: string;
    bookTableBtn: string;
    guaranteeFast: string;
    guaranteeFresh: string;
    addToCart: string;
    customizeAndOrder: string;
  };

  // Introduction Story
  intro: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    desc1: string;
    desc2: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    visitSpaceBtn: string;
    openLightBadge: string;
    quote: string;
  };

  // Signature Menu
  menu: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    searchPlaceholder: string;
    sortRecommended: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    all: string;
    signatures: string;
    espresso: string;
    icedCoffee: string;
    coldBrew: string;
    teaMatcha: string;
    pastries: string;
    addPastry: string;
    customizeAndOrder: string;
    comboTag: string;
    comboTitle: string;
    comboDesc: string;
    viewBakeryBtn: string;
  };

  // Coffee Beans
  beans: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    roastAll: string;
    roastLight: string;
    roastMedium: string;
    roastDark: string;
    brewCalcBtn: string;
    packSize: string;
    chooseBuy: string;
    roastDateLabel: string;
    bagsLeft: string;
    freeGrindNotice: string;
    oneWayValve: string;
  };

  // Our Space
  space: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    all: string;
    coffeeBar: string;
    workspace: string;
    seating: string;
    exterior: string;
    reservationCardTag: string;
    reservationCardTitle: string;
    reservationCardDesc: string;
    bookSpaceBtn: string;
  };

  // Locations
  locations: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    hotlineLabel: string;
    bookTableBtn: string;
    directionsBtn: string;
  };

  // Membership
  membership: {
    tag: string;
    title: string;
    quote: string;
    desc: string;
    perk1: string;
    perk2: string;
    perk3: string;
    perk4: string;
    perk5: string;
    cardTag: string;
    cardTitle: string;
    cardDesc: string;
    registerBtn: string;
  };

  // Testimonials
  testimonials: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    quote: string;
    writeReviewBtn: string;
    favOrderLabel: string;
  };

  // Footer
  footer: {
    quote: string;
    desc: string;
    hotlineLabel: string;
    emailLabel: string;
    openHoursTitle: string;
    openHoursValue: string;
    openHoursDays: string;
    exploreTitle: string;
    storesTitle: string;
    servicesTitle: string;
    b2bWholesale: string;
    groupBooking: string;
    trust1Title: string;
    trust1Desc: string;
    trust2Title: string;
    trust2Desc: string;
    trust3Title: string;
    trust3Desc: string;
    trust4Title: string;
    trust4Desc: string;
    copyright: string;
    tagline: string;
  };

  // Chatbot
  chatbot: {
    triggerText: string;
    botName: string;
    online: string;
    hotline: string;
    welcome1: string;
    welcome2: string;
    chipBestseller: string;
    chipV60: string;
    chipBooking: string;
    chipDelivery: string;
    inputPlaceholder: string;
    typing: string;
    you: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  vi: {
    nav: {
      menu: 'Thực Đơn',
      beans: 'Hạt Cà Phê',
      space: 'Không Gian Quán',
      locations: 'Hệ Thống Chi Nhánh',
      story: 'Câu Chuyện',
      orderNow: 'Đặt Món Ngay',
      hotline: '0916 323 701',
      searchPlaceholder: 'Tìm kiếm món & hạt cà phê (⌘K)',
      cart: 'Giỏ hàng',
      bookTable: 'Đặt bàn trước',
      language: 'Ngôn ngữ'
    },
    hero: {
      stamp: 'XƯỞNG RANG CÀ PHÊ ĐẶC SẢN NOIR • SPECIALTY CAFÉ',
      todayServed: 'Hôm nay đã phục vụ:',
      specialtyCups: '850+ ly Cà Phê Đặc Sản',
      readyAt3Stores: 'Sẵn sàng phục vụ tại 3 chi nhánh',
      voucherBanner: 'Giảm 10% đơn đầu tiên • Mã: NOIR2026',
      titleLine1: 'Cà Phê,',
      titleLine2: 'tạo tác khác biệt.',
      description: 'Cà phê Arabica Cầu Đất SCA 85+ rang mộc thủ công mẻ nhỏ. Chiết xuất chuẩn xác, giao hỏa tốc 25 phút giữ nguyên lớp bọt sữa béo mịn.',
      tastePrompt: '✦ Chọn Nốt Hương Để Thử Ngay:',
      instantBuyPrefix: 'Mua Ngay Ly Này •',
      bookTableBtn: 'Đặt Bàn Giữ Chỗ',
      guaranteeFast: 'Giao 25 phút kèm đá riêng',
      guaranteeFresh: '100% Cà phê mộc nguyên chất',
      addToCart: 'Thêm Vào Túi',
      customizeAndOrder: 'Tùy Chỉnh & Đặt Món'
    },
    intro: {
      tag: 'Triết Lý Thủ Công & Phong Cách Sống',
      titleLine1: 'Hơn Cả',
      titleLine2: 'một tách cà phê.',
      desc1: 'Tại NOIR COFFEE ROASTERS, chúng tôi tin rằng một tách specialty coffee không chỉ đơn thuần là thức uống nạp năng lượng. Đó là khoảng lặng tinh tế để khởi đầu ngày mới, khơi nguồn cảm hứng nghệ thuật, hay những buổi trò chuyện tâm đắc trong không gian tràn ngập ánh sáng tự nhiên.',
      desc2: 'Từ những ngọn đồi Cầu Đất quanh năm sương phủ ở độ cao 1.600m đến vùng đất Yirgacheffe huyền thoại tại Ethiopia, mỗi hạt cà phê đều được kiểm định SCA 85+, rang mộc thủ công mẻ nhỏ bằng máy Giesen và chiết xuất ở áp suất chuẩn mực.',
      stat1Number: '03+',
      stat1Label: 'Không Gian Flagship',
      stat2Number: '100%',
      stat2Label: 'Hạt Arabica Mộc',
      stat3Number: '24 Giờ',
      stat3Label: 'Ủ Lạnh Cold Brew',
      visitSpaceBtn: 'Ghé Thăm Không Gian Quán & Đặt Chỗ Ngồi View Đẹp',
      openLightBadge: 'Không gian mở ngập tràn ánh sáng',
      quote: '“Tạo tác cho từng khoảnh khắc đáng nhớ.”'
    },
    menu: {
      tag: 'Thực Đơn Specialty & Bánh Nướng Thủ Công',
      titleLine1: 'Món Đặc Trưng',
      titleLine2: 'cà phê & bánh nướng.',
      quote: '“Mỗi ly cà phê là một tác phẩm được pha chế với tất cả sự tận tâm.”',
      searchPlaceholder: 'Tìm món, hương vị (vd: Hạnh nhân, Yến mạch)...',
      sortRecommended: 'Sắp xếp: Khuyên dùng',
      sortPriceAsc: 'Giá: Thấp → Cao',
      sortPriceDesc: 'Giá: Cao → Thấp',
      all: 'Tất cả món',
      signatures: 'Món Đặc Trưng',
      espresso: 'Espresso Chuẩn Vị',
      icedCoffee: 'Cà Phê Đá Sài Gòn',
      coldBrew: 'Specialty Cold Brew',
      teaMatcha: 'Trà & Matcha Nhật',
      pastries: '🥐 Bánh Ngọt & Bakery',
      addPastry: '+ Thêm vào túi',
      customizeAndOrder: 'Tùy chỉnh & Đặt món →',
      comboTag: '✦ Combo Thưởng Thức Buổi Sáng',
      comboTitle: 'Cà Phê Specialty & Bánh Croissant Bơ Pháp Nóng Giòn',
      comboDesc: 'Giảm 15.000₫ khi gọi combo bất kỳ vào khung giờ 07:00 – 11:00 sáng mỗi ngày.',
      viewBakeryBtn: 'Xem Menu Bánh Ngọt'
    },
    beans: {
      tag: 'Hạt Cà Phê Đặc Sản Nguyên Bản (SCA 85+)',
      titleLine1: 'Hạt Đặc Sản',
      titleLine2: 'từ nông trại đến tách cà phê.',
      quote: 'Tuyển chọn từ những nông trại cao nguyên trên 1.400m, cam kết rang mới và ủ resting chuẩn vị.',
      roastAll: 'Tất cả độ rang',
      roastLight: 'Rang Sáng (Light Roast)',
      roastMedium: 'Rang Vừa (Medium Roast)',
      roastDark: 'Rang Đậm (Dark Roast)',
      brewCalcBtn: 'Máy tính tỉ lệ pha',
      packSize: 'Túi 250g',
      chooseBuy: 'Chọn mua',
      roastDateLabel: 'Ngày rang:',
      bagsLeft: 'Còn lại',
      freeGrindNotice: 'Xay mịn theo mọi dụng cụ pha miễn phí: V60, Phin Việt Nam, Aeropress, Cold Brew, Espresso.',
      oneWayValve: 'Đóng gói van khí 1 chiều bảo toàn hương hoa'
    },
    space: {
      tag: 'Kiến Trúc & Không Gian Thưởng Thức',
      titleLine1: 'Không Gian Quán',
      titleLine2: 'chốn dừng chân mỗi ngày.',
      quote: 'Sự giao thoa hoàn hảo giữa phong cách đương đại tối giản, ánh sáng giếng trời và cây xanh nhiệt đới.',
      all: 'Tất cả không gian',
      coffeeBar: 'Quầy Bar Cà Phê',
      workspace: 'Góc Làm Việc Yên Tĩnh',
      seating: 'Chỗ Ngồi Thư Giãn',
      exterior: 'Sân Vườn & Ngoại Cảnh',
      reservationCardTag: '✦ Trải Nghiệm Không Gian Thực Tế',
      reservationCardTitle: 'Bạn muốn giữ bàn view sân vườn hay phòng họp nhóm yên tĩnh?',
      reservationCardDesc: 'Miễn phí đặt chỗ trước và hỗ trợ sắp xếp bàn làm việc có ổ cắm riêng.',
      bookSpaceBtn: 'Đặt Chỗ Ngay'
    },
    locations: {
      tag: 'Hệ Thống 3 Cửa Hàng Flagship',
      titleLine1: 'Hệ Thống',
      titleLine2: 'chi nhánh flagship.',
      quote: 'Mỗi chi nhánh mang một phong cách kiến trúc độc bản nhưng giữ trọn chất lượng hạt Specialty nguyên chất.',
      hotlineLabel: 'Hotline Đặt Bàn:',
      bookTableBtn: 'Đặt bàn trước',
      directionsBtn: 'Chỉ đường'
    },
    membership: {
      tag: 'Đặc Quyền Thành Viên NOIR',
      title: 'Câu Lạc Bộ Cà Phê NOIR',
      quote: '“Cà phê tuyệt hảo đi cùng những đặc quyền xứng tầm.”',
      desc: 'Gia nhập cộng đồng người sành cà phê NOIR để tích điểm thưởng, nhận vé mời tham gia workshop rang xay và hưởng ưu đãi độc quyền 10% trọn đời.',
      perk1: 'Thưởng thức trước các món theo mùa & thư mời tham dự Workshop Cupping',
      perk2: 'Giảm trực tiếp 10% cho toàn bộ các gói hạt cà phê rang Specialty',
      perk3: 'Quà tặng sinh nhật cá nhân hóa & 01 ly Signature Drink miễn phí',
      perk4: 'Early access thử nghiệm các mẻ rang Reserve số lượng giới hạn',
      perk5: 'Miễn phí nâng cấp sữa yến mạch (Oat Milk) & sữa hạnh nhân',
      cardTag: 'THẺ HỘI VIÊN NOIR BLACK • VIP',
      cardTitle: 'Thẻ Hội Viên Đặc Quyền',
      cardDesc: 'Đăng ký hoàn toàn miễn phí trong 30 giây • Tặng voucher 10% ngay',
      registerBtn: 'Đăng Ký Hội Viên Ngay'
    },
    testimonials: {
      tag: 'Đánh Giá Từ Cộng Đồng Khách Hàng',
      titleLine1: 'Được Yêu Thích',
      titleLine2: 'bởi người sành cà phê.',
      quote: 'Những chia sẻ chân thực từ khách hàng thân thiết và những người yêu cà phê mỗi ngày.',
      writeReviewBtn: 'Viết đánh giá (Nhận voucher 10%)',
      favOrderLabel: '☕ Thức uống yêu thích:'
    },
    footer: {
      quote: '“Tạo tác cho từng khoảnh khắc đáng nhớ.”',
      desc: 'Thương hiệu specialty coffee và xưởng rang mẻ nhỏ đương đại. Kết nối những hạt cà phê hảo hạng Việt Nam và thế giới đến từng không gian sống.',
      hotlineLabel: 'Hotline & Zalo Đặt Bàn',
      emailLabel: 'Email Liên Hệ & Hợp Tác',
      openHoursTitle: 'Giờ Mở Cửa',
      openHoursValue: '07:00 – 22:30',
      openHoursDays: 'Tất cả các ngày trong tuần',
      exploreTitle: 'Khám Phá',
      storesTitle: '3 Cửa Hàng',
      servicesTitle: 'Thời Gian & Dịch Vụ',
      b2bWholesale: '• Báo Giá Sỉ Cho Quán',
      groupBooking: '• Đặt Chỗ Nhóm / Sự Kiện',
      trust1Title: 'SCA 85+ Specialty',
      trust1Desc: '100% Arabica mộc',
      trust2Title: 'Giao Hỏa Tốc 25P',
      trust2Desc: 'Đá riêng giữ vị chuẩn',
      trust3Title: 'Rang Mộc Tươi Mới',
      trust3Desc: 'Degas 7-14 ngày chuẩn',
      trust4Title: '0916 323 701',
      trust4Desc: 'Hotline tư vấn 24/7',
      copyright: '© 2026 NOIR Coffee Roasters • Hotline:',
      tagline: 'Cà Phê Đặc Sản'
    },
    chatbot: {
      triggerText: 'Barista AI',
      botName: 'NOIR Barista AI',
      online: 'Trực Tuyến',
      hotline: 'Hotline: 0916 323 701',
      welcome1: 'Xin chào! Tôi là NOIR Barista AI — trợ lý tư vấn hương vị cà phê và chăm sóc khách hàng.',
      welcome2: 'Bạn muốn tìm món thức uống theo gu vị nào, chọn hạt pha tại nhà hay đặt bàn trước?',
      chipBestseller: '☕ Món bán chạy',
      chipV60: '🔥 Hạt pha V60',
      chipBooking: '🪑 Đặt bàn giữ chỗ',
      chipDelivery: '⚡ Giao 25 phút',
      inputPlaceholder: 'Nhập câu hỏi hoặc yêu cầu...',
      typing: 'Barista AI đang trả lời...',
      you: 'Bạn'
    }
  },
  en: {
    nav: {
      menu: 'Menu',
      beans: 'Whole Beans',
      space: 'Our Space',
      locations: 'Stores',
      story: 'Our Story',
      orderNow: 'Order Now',
      hotline: '0916 323 701',
      searchPlaceholder: 'Search drinks & beans (⌘K)',
      cart: 'Cart',
      bookTable: 'Reserve a Table',
      language: 'Language'
    },
    hero: {
      stamp: 'NOIR COFFEE ROASTERS • SPECIALTY CAFÉ & LAB',
      todayServed: 'Today served:',
      specialtyCups: '850+ Specialty Cups',
      readyAt3Stores: 'Freshly brewed across 3 flagship stores',
      voucherBanner: '10% off your first order • Code: NOIR2026',
      titleLine1: 'Coffee,',
      titleLine2: 'crafted differently.',
      description: 'Small-batch artisanal Arabica from Cau Dat highland (SCA 85+). Precision extraction, 25-minute express delivery preserving silky microfoam.',
      tastePrompt: '✦ Select Flavor Notes to Explore:',
      instantBuyPrefix: 'Buy This Cup •',
      bookTableBtn: 'Reserve a Table',
      guaranteeFast: '25-min delivery with separate ice',
      guaranteeFresh: '100% pure specialty coffee',
      addToCart: 'Add to Cart',
      customizeAndOrder: 'Customize & Order'
    },
    intro: {
      tag: 'Artisanal Philosophy & Lifestyle',
      titleLine1: 'More Than',
      titleLine2: 'just a cup of coffee.',
      desc1: 'At NOIR COFFEE ROASTERS, we believe a cup of specialty coffee is far more than mere fuel. It is an intentional pause to begin your day, spark artistic creativity, or share intimate conversations surrounded by natural light.',
      desc2: 'From the mist-covered Cau Dat hills at 1,600m altitude to legendary Yirgacheffe terroir in Ethiopia, each lot is rigorously SCA 85+ certified, small-batch roasted on Giesen machines, and precision-extracted.',
      stat1Number: '03+',
      stat1Label: 'Flagship Spaces',
      stat2Number: '100%',
      stat2Label: 'Pure Arabica',
      stat3Number: '24 Hours',
      stat3Label: 'Slow Drip Cold Brew',
      visitSpaceBtn: 'Explore Our Spaces & Reserve Prime Seating',
      openLightBadge: 'Sun-drenched architectural glasshouse',
      quote: '“Brewed for the moments that matter.”'
    },
    menu: {
      tag: 'Specialty Menu & Artisanal Bakery',
      titleLine1: 'Signature',
      titleLine2: 'drinks & bakery.',
      quote: '“Every single cup is a handcrafted piece of art made with devotion.”',
      searchPlaceholder: 'Search drinks, notes (e.g. Hazelnut, Oat milk)...',
      sortRecommended: 'Sort: Recommended',
      sortPriceAsc: 'Price: Low → High',
      sortPriceDesc: 'Price: High → Low',
      all: 'All',
      signatures: 'Signatures',
      espresso: 'Espresso',
      icedCoffee: 'Iced Coffee',
      coldBrew: 'Specialty Cold Brew',
      teaMatcha: 'Tea & Matchas',
      pastries: '🥐 Fresh Pastries & Bakery',
      addPastry: '+ Add to Bag',
      customizeAndOrder: 'Customize & Order →',
      comboTag: '✦ Morning Specialty Pairing',
      comboTitle: 'Specialty Coffee & Fresh French Butter Croissant',
      comboDesc: 'Save 15,000₫ on any coffee + bakery combo from 07:00 – 11:00 daily.',
      viewBakeryBtn: 'View Bakery Menu'
    },
    beans: {
      tag: 'Single-Origin Specialty Beans (SCA 85+)',
      titleLine1: 'Specialty Beans',
      titleLine2: 'from bean to cup.',
      quote: 'Curated from high-altitude micro-lots above 1,400m, roasted fresh and degassed to perfection.',
      roastAll: 'All Roasts',
      roastLight: 'Light Roast',
      roastMedium: 'Medium Roast',
      roastDark: 'Dark Roast',
      brewCalcBtn: 'Brew Ratio Calculator',
      packSize: '250g Bag',
      chooseBuy: 'Select & Buy',
      roastDateLabel: 'Roasted:',
      bagsLeft: 'Remaining',
      freeGrindNotice: 'Free custom grind for all methods: V60, Phin, Aeropress, Cold Brew, Espresso.',
      oneWayValve: 'Sealed with 1-way degassing valve'
    },
    space: {
      tag: 'Architecture & Café Atmosphere',
      titleLine1: 'Our Space',
      titleLine2: 'everyday escape.',
      quote: 'The harmonious union of minimalist modern lines, central skylights, and lush tropical greenery.',
      all: 'All Spaces',
      coffeeBar: 'Coffee Bar',
      workspace: 'Workspace',
      seating: 'Seating',
      exterior: 'Exterior',
      reservationCardTag: '✦ Experience the Real Atmosphere',
      reservationCardTitle: 'Looking for a garden-view seat or a quiet meeting nook?',
      reservationCardDesc: 'Complimentary advance booking with dedicated high-speed power outlets.',
      bookSpaceBtn: 'Reserve Now'
    },
    locations: {
      tag: '3 Flagship Roastery Locations',
      titleLine1: 'Find Your',
      titleLine2: 'flagship space.',
      quote: 'Each venue features unique architectural design while upholding identical SCA specialty standards.',
      hotlineLabel: 'Booking Hotline:',
      bookTableBtn: 'Reserve Table',
      directionsBtn: 'Get Directions'
    },
    membership: {
      tag: 'Exclusive NOIR Membership',
      title: 'The Coffee Club',
      quote: '“Exceptional coffee paired with privileges tailored to your taste.”',
      desc: 'Join the discerning NOIR coffee community to accumulate reward points, receive exclusive cupping workshop invitations, and enjoy lifetime 10% member benefits.',
      perk1: 'Early tasting of seasonal releases & private cupping workshop invites',
      perk2: 'Direct 10% discount on all specialty roasted coffee bean bags',
      perk3: 'Personalized birthday gift & 01 complimentary Signature Drink',
      perk4: 'Exclusive early access to limited-edition Reserve roast batches',
      perk5: 'Complimentary Oat Milk & Almond Milk dairy-free upgrades',
      cardTag: 'NOIR BLACK CARD • VIP',
      cardTitle: 'Coffee Club Pass',
      cardDesc: 'Free 30-second signup • Instant 10% welcome voucher',
      registerBtn: 'Join Club VIP Now'
    },
    testimonials: {
      tag: 'Verified Community Reviews',
      titleLine1: 'Loved by',
      titleLine2: 'coffee people.',
      quote: 'Authentic feedback from daily regulars and passionate specialty coffee lovers.',
      writeReviewBtn: 'Write a Review (Get 10% Voucher)',
      favOrderLabel: '☕ Favorite order:'
    },
    footer: {
      quote: '“Brewed for the moments that matter.”',
      desc: 'Contemporary specialty coffee brand and small-batch roastery. Bringing world-class beans from Vietnam and beyond to everyday life.',
      hotlineLabel: 'Hotline & Zalo Table Booking',
      emailLabel: 'Contact & Wholesale Inquiries',
      openHoursTitle: 'Opening Hours',
      openHoursValue: '07:00 – 22:30',
      openHoursDays: 'Open daily Monday to Sunday',
      exploreTitle: 'Explore',
      storesTitle: '3 Flagships',
      servicesTitle: 'Hours & Services',
      b2bWholesale: '• Wholesale Bean Catalog',
      groupBooking: '• Group / Event Booking',
      trust1Title: 'SCA 85+ Specialty',
      trust1Desc: '100% Pure Arabica',
      trust2Title: '25-Min Fast Delivery',
      trust2Desc: 'Separate ice pack included',
      trust3Title: 'Fresh Micro-Batch',
      trust3Desc: '7-14 Day Degas Peak',
      trust4Title: '0916 323 701',
      trust4Desc: '24/7 Dedicated Hotline',
      copyright: '© 2026 NOIR Coffee Roasters • Hotline:',
      tagline: 'Specialty Coffee'
    },
    chatbot: {
      triggerText: 'Barista AI',
      botName: 'NOIR Barista AI',
      online: 'Online',
      hotline: 'Hotline: 0916 323 701',
      welcome1: 'Hello! I am NOIR Barista AI — your specialty coffee concierge.',
      welcome2: 'How can I assist you today? Looking for flavor recommendations, whole beans, or table booking?',
      chipBestseller: '☕ Best-sellers',
      chipV60: '🔥 V60 Beans',
      chipBooking: '🪑 Table booking',
      chipDelivery: '⚡ 25-Min Delivery',
      inputPlaceholder: 'Type a question or order request...',
      typing: 'Barista AI is replying...',
      you: 'You'
    }
  }
};
