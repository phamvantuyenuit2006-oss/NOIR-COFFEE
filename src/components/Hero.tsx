import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { SIGNATURE_DRINKS, COFFEE_BEANS } from '../data/mockData';
import { 
  ArrowRight, 
  Coffee, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Flame, 
  Scale, 
  Award, 
  Star, 
  Droplets,
  Heart,
  ShoppingBag,
  Zap,
  ChevronDown
} from 'lucide-react';
import { MenuItem } from '../types';

interface HeroProduct {
  id: string;
  name: string;
  tag: string;
  notes: string[];
  roastLevel: string;
  origin: string;
  temp: string;
  priceFormatted: string;
  price: number;
  image: string;
  badge: string;
  drinkId: string;
}

export const Hero: React.FC = () => {
  const { 
    addDrinkToCart, 
    setCartDrawerOpen, 
    setSelectedDrinkForCustomize, 
    setReservationModalOpen, 
    toggleWishlist, 
    isWishlisted,
    language,
    t
  } = useApp();

  const isEn = language === 'en';

  const heroProducts: HeroProduct[] = [
    {
      id: 'latte-art',
      name: isEn ? 'NOIR Velvet Iced Latte' : 'Cà Phê Latte Đá Nhung Mượt',
      tag: isEn ? 'Signature Best-Seller' : 'Món Bán Chạy Nhất',
      notes: isEn ? ['Chocolate Truffle', 'Roasted Hazelnut', 'Fresh Creamy Milk'] : ['Sô-cô-la Truffle', 'Hạt Phỉ Nướng', 'Sữa Tươi Thanh Béo'],
      roastLevel: isEn ? 'Medium Roast' : 'Rang Vừa',
      origin: isEn ? 'Cau Dat Heritage × Ethiopia' : 'Cầu Đất Heritage × Ethiopia',
      temp: isEn ? '4°C Chilled' : '4°C Mát Lạnh',
      price: 75000,
      priceFormatted: '75.000 ₫',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1400&q=95',
      badge: isEn ? '★ Top Best-Seller' : '★ Món Bán Chạy Nhất',
      drinkId: 'drink-iced-latte'
    },
    {
      id: 'dirty-coffee',
      name: isEn ? 'NOIR Cold Pour Dirty Coffee' : 'Cà Phê Dirty Rót Tầng',
      tag: isEn ? 'Hot & Cold Thermal Contrast' : 'Phân Tầng Nóng & Lạnh',
      notes: isEn ? ['Bold Hot Ristretto', 'Chilled Hokkaido Milk', 'Nutty Sweet'] : ['Ristretto Nóng Đậm', 'Sữa Lạnh Hokkaido', 'Ngọt Bùi Béo'],
      roastLevel: isEn ? 'Dark Roast' : 'Rang Đậm',
      origin: isEn ? 'Signature Blend 2026' : 'Phối Trộn Độc Bản 2026',
      temp: isEn ? 'Dual Thermal Layer' : '2 Tầng Nhiệt Độ',
      price: 82000,
      priceFormatted: '82.000 ₫',
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=1400&q=95',
      badge: isEn ? '✦ Must-Try Trending' : '✦ Xu Hướng Phải Thử',
      drinkId: 'drink-dirty-coffee'
    },
    {
      id: 'espresso-crema',
      name: isEn ? 'Single Origin Espresso Shot' : 'Espresso Nguyên Bản Single Origin',
      tag: isEn ? 'Premium SCA 88.5' : 'SCA 88.5 Cao Cấp',
      notes: isEn ? ['Orange Blossom', 'Dried Fig', 'Pure Cacao'] : ['Hoa Cam Tươi', 'Quả Sung Khô', 'Cacao Nguyên Bản'],
      roastLevel: isEn ? 'Light-Medium' : 'Rang Sáng Vừa',
      origin: isEn ? 'Ethiopia Yirgacheffe G1' : 'Ethiopia Yirgacheffe G1',
      temp: isEn ? '93.5°C 9-Bar Extraction' : 'Chiết Xuất 9 Bar 93.5°C',
      price: 65000,
      priceFormatted: '65.000 ₫',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1400&q=95',
      badge: isEn ? '🏆 Specialty SCA 88.5' : '🏆 Cà Phê Đặc Sản SCA 88.5',
      drinkId: 'drink-espresso'
    },
    {
      id: 'cold-brew',
      name: isEn ? '24H Slow Drip Cold Brew' : 'Cà Phê Ủ Lạnh 24 Giờ',
      tag: isEn ? '24H Artisanal Slow Drip' : 'Ủ Lạnh Thủ Công 24h',
      notes: isEn ? ['Wild Berries', 'Bergamot Tea', 'Cacao Nibs'] : ['Quả Mọng Rừng', 'Trà Bergamot', 'Hạt Cacao'],
      roastLevel: isEn ? 'Omni Roast' : 'Rang Mộc Cân Bằng',
      origin: isEn ? 'Colombia Huila Geisha' : 'Colombia Huila Geisha',
      temp: isEn ? '24H Cold Drip' : 'Ủ Lạnh 24 Tiếng',
      price: 79000,
      priceFormatted: '79.000 ₫',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1400&q=95',
      badge: isEn ? '🌿 100% Cau Dat Arabica' : '🌿 100% Arabica Cầu Đất',
      drinkId: 'drink-cold-brew'
    }
  ];
  
  const [selectedProduct, setSelectedProduct] = useState<HeroProduct>(heroProducts[0]);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-Cycle Hero drinks every 5 seconds (pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSelectedProduct((prev) => {
        const currentIndex = heroProducts.findIndex((p) => p.id === prev.id);
        const nextIndex = (currentIndex + 1) % heroProducts.length;
        return heroProducts[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, language]);

  // Keep selected product in sync with language toggle
  useEffect(() => {
    const updated = heroProducts.find(p => p.id === selectedProduct.id) || heroProducts[0];
    setSelectedProduct(updated);
  }, [language]);

  const handleInstantBuy = () => {
    const matchedDrink = SIGNATURE_DRINKS.find((d) => d.id === selectedProduct.drinkId) || SIGNATURE_DRINKS[0];
    addDrinkToCart(matchedDrink, {}, 1);
    setCartDrawerOpen(true);
  };

  const handleCustomizeDrink = () => {
    const matchedDrink = SIGNATURE_DRINKS.find((d) => d.id === selectedProduct.drinkId) || SIGNATURE_DRINKS[0];
    setSelectedDrinkForCustomize(matchedDrink);
  };

  const wishlisted = isWishlisted(selectedProduct.drinkId);

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 bg-[#FAF8F5] text-[#171411] overflow-hidden border-b border-stone-200">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[750px] h-[550px] bg-[#D49B5B]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-5 left-10 w-[600px] h-[450px] bg-[#9E472A]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Split: Crisp Headline & Instant Buy Station */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bold Headline & Action Triggers */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left space-y-5">
            
            {/* Stamp */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-stone-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#9E472A]" />
              <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#5A3E2B]">
                {t.hero.stamp}
              </span>
            </div>

            {/* Headline - To, Sang Trọng, Gọn Gàng */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#171411] uppercase leading-[1.02]">
              {t.hero.titleLine1} <br />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-5xl sm:text-7xl md:text-8xl block">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-stone-700 max-w-xl font-normal leading-relaxed">
              {t.hero.description}
            </p>

            {/* Direct Order Actions - Nhỏ Gọn, Cân Đối & Sang Trọng */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
              {/* Instant Buy Button */}
              <button
                onClick={handleInstantBuy}
                className="group inline-flex items-center justify-between gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#D49B5B] to-[#9E472A] hover:from-[#E0A868] hover:to-[#B55333] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#9E472A]/20 transition-all transform active:scale-95"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.hero.instantBuyPrefix} {selectedProduct.priceFormatted}</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              {/* Table Booking */}
              <button
                onClick={() => setReservationModalOpen(true)}
                className="px-5 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 font-bold text-xs uppercase tracking-wider border border-stone-300 shadow-sm flex items-center justify-center gap-1.5 transition-all hover:border-stone-400"
              >
                <Calendar className="w-3.5 h-3.5 text-[#9E472A]" />
                <span>{t.hero.bookTableBtn}</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex items-center gap-5 text-xs text-stone-600 font-medium pt-1">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> {t.hero.guaranteeFast}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> {t.hero.guaranteeFresh}</span>
            </div>

          </div>

          {/* Right Column: High-Impact Instant Buy Product Stage (Có Chuyển Động Sống Động & Nghệ Thuật) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full max-w-lg xl:max-w-xl bg-white p-3.5 sm:p-4 rounded-[2.5rem] shadow-2xl shadow-[#9E472A]/15 border border-[#D49B5B]/35 relative"
            >
              
              {/* Outer Floating Sensory Badge (Phải dưới) */}
              <div className="absolute -bottom-3 -right-3 z-20 animate-float-slow-reverse hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#9E472A] font-black text-[11px] shadow-xl border border-[#9E472A]/30">
                <Award className="w-3.5 h-3.5 text-[#B9824A]" />
                <span>🏆 {isEn ? 'SCA 88.5+ Certified' : 'Chuẩn SCA 88.5+'}</span>
              </div>

              <div className="relative rounded-[2rem] overflow-hidden bg-stone-900 text-white aspect-[4/4.8] sm:aspect-[4/4.5] min-h-[440px] sm:min-h-[500px] flex flex-col justify-between p-6 sm:p-7 group">
                
                {/* Product Photo with Smooth Ken Burns Breathing Animation & Smooth Transition */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    key={selectedProduct.id}
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-center animate-kenburns transition-opacity duration-700 opacity-95 group-hover:opacity-100"
                  />
                </div>
                
                {/* Ambient Depth Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/80 pointer-events-none" />

                {/* Top Live Progress Bar & Thermal Info & Wishlist */}
                <div className="relative z-10 space-y-3">
                  {/* Mini Step Carousel Indicators */}
                  <div className="flex items-center gap-1.5">
                    {heroProducts.map((p, idx) => (
                      <div
                        key={p.id}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          p.id === selectedProduct.id
                            ? 'w-8 bg-[#D49B5B]'
                            : 'w-2 bg-white/40'
                        }`}
                      />
                    ))}
                    <span className="text-[10px] font-mono text-white/70 ml-1">
                      {isHovered ? (isEn ? '⏸ Paused' : '⏸ Đang xem') : (isEn ? '▶ Auto' : '▶ Tự động')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-300 flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3.5 h-3.5 text-[#D49B5B]" />
                        {selectedProduct.badge}
                      </span>
                      <span className="px-2.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white/90">
                        {selectedProduct.temp}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleWishlist(selectedProduct.drinkId, selectedProduct.name)}
                      className="p-2.5 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all shadow-md shrink-0"
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                    </button>
                  </div>
                </div>

                {/* Bottom Product Details & 1-Click Buy Action */}
                <div className="relative z-10 space-y-3.5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono tracking-wider text-[#D49B5B] uppercase font-bold block">
                      {selectedProduct.tag} • {selectedProduct.origin}
                    </span>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {selectedProduct.name}
                      </h3>
                      <span className="font-serif text-2xl font-black text-[#D49B5B] font-mono shrink-0">
                        {selectedProduct.priceFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Flavor Notes Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.notes.map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/15"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* 2 Instant Buttons: Buy Now & Customize - Gọn Gàng */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={handleInstantBuy}
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-amber-50 text-[#171411] font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#9E472A]" />
                      <span>{t.hero.addToCart}</span>
                    </button>

                    <button
                      onClick={handleCustomizeDrink}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D49B5B] to-[#9E472A] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95"
                    >
                      <span>{t.hero.customizeAndOrder}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Discovery Attraction Prompt (Hiệu ứng cuộn xuống thu hút người dùng) */}
        <div className="pt-8 sm:pt-10 flex justify-center">
          <a
            href="#signature-menu"
            className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/95 hover:bg-[#171411] text-stone-800 hover:text-white border border-stone-300 shadow-lg hover:shadow-2xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#9E472A] group-hover:bg-[#D49B5B] animate-ping" />
            <span>{isEn ? 'Scroll down to explore 6 Signature Drinks' : 'Cuộn xuống khám phá thực đơn 6 món đặc sản'}</span>
            <ChevronDown className="w-4 h-4 text-[#9E472A] group-hover:text-[#D49B5B] group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
