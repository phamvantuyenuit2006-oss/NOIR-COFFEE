import React from 'react';
import { useApp } from '../context/AppContext';
import { FEATURED_BLEND } from '../data/mockData';
import { Sparkles, ShoppingBag, ArrowRight, Check, Flame, Mountain, Award, Droplets, ShieldCheck, Heart, Star } from 'lucide-react';

export const FeaturedProduct: React.FC = () => {
  const { addBeanToCart, setCartDrawerOpen, toggleWishlist, isWishlisted, language } = useApp();
  const isEn = language === 'en';

  const handleQuickAdd = () => {
    addBeanToCart({
      id: FEATURED_BLEND.id,
      name: FEATURED_BLEND.name,
      region: 'Cầu Đất & Buôn Ma Thuột',
      origin: 'Vietnam',
      altitude: FEATURED_BLEND.altitude,
      process: FEATURED_BLEND.process,
      roast: 'Medium Roast',
      tastingNotes: FEATURED_BLEND.tastingNotes,
      price: FEATURED_BLEND.price,
      priceFormatted: FEATURED_BLEND.priceFormatted,
      weightOptions: ['250g', '500g', '1000g (1kg)'],
      description: FEATURED_BLEND.description,
      image: FEATURED_BLEND.image,
    });
    setCartDrawerOpen(true);
  };

  const wishlisted = isWishlisted(FEATURED_BLEND.id);

  return (
    <section className="py-28 sm:py-36 bg-[#12100E] text-[#FAF8F5] relative overflow-hidden border-b border-stone-800">
      {/* Warm Cinematic Radial Glows */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-[#D49B5B]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#9E472A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols): Double-Bezel Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="p-3 bg-white/5 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                <img
                  src={FEATURED_BLEND.image}
                  alt={FEATURED_BLEND.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D49B5B] to-[#9E472A] text-white font-bold text-xs uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Master Blend 2026
                  </span>

                  <button
                    onClick={() => toggleWishlist(FEATURED_BLEND.id, FEATURED_BLEND.name)}
                    className="p-2.5 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all"
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                  </button>
                </div>

                {/* Floating Sensory Breakdown Inside Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-stone-300">
                    <span className="text-[#D49B5B] font-bold uppercase tracking-wider">Tasting Notes Matrix</span>
                    <span className="font-mono text-stone-400">LOT-NOIR2026</span>
                  </div>
                  <p className="font-editorial italic text-lg text-white font-light">
                    “{isEn ? 'Dark Chocolate • Toasted Hazelnut • Wild Honeycomb' : FEATURED_BLEND.subtitle}”
                  </p>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
                    <span>{isEn ? 'Sweetness: ★★★★★' : 'Độ ngọt: ★★★★★'}</span>
                    <span>{isEn ? 'Aroma: ★★★★★' : 'Hương thơm: ★★★★★'}</span>
                    <span>{isEn ? 'Acidity: ★★☆☆☆' : 'Độ chua thanh: ★★☆☆☆'}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Product Storytelling, Specs & CTA */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D49B5B]/15 border border-[#D49B5B]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#D49B5B]">
              <Award className="w-3.5 h-3.5" />
              <span>{isEn ? 'Signature Flagship Blend of the Year' : 'Dòng Hạt Độc Bản Chủ Lực Của Năm'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[1.08]">
              {FEATURED_BLEND.name}
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-light">
              {isEn
                ? 'An artisanal blend harmonizing sweet Cau Dat Bourbon Arabica (1,600m) with fine natural Robusta from Buon Ma Thuot. Dark chocolate warmth, roasted hazelnuts, and a silky honeycomb crema.'
                : FEATURED_BLEND.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 border-y border-white/10 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1">
                <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">{isEn ? 'Roast Level' : 'Mức Độ Rang'}</span>
                <span className="font-serif font-bold text-white text-base block">{isEn ? 'Medium Roast' : 'Rang Vừa (Medium)'}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1">
                <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">{isEn ? 'Origin' : 'Nguồn Gốc'}</span>
                <span className="font-serif font-bold text-[#D49B5B] text-base block">Cầu Đất 1.600m</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider block">{isEn ? 'Freshness' : 'Độ Tươi'}</span>
                <span className="font-serif font-bold text-emerald-400 text-base block">{isEn ? 'Roasted <48h' : 'Rang mới 48h'}</span>
              </div>
            </div>

            {/* Price & Actions Row with Button-in-Button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] text-stone-400 uppercase tracking-widest block">{isEn ? 'Retail Price (250g Valve Bag)' : 'Giá Niêm Yết (Túi 250g Van 1 Chiều)'}</span>
                <span className="font-serif text-3xl sm:text-4xl font-black text-[#D49B5B] font-mono mt-1 block">
                  {FEATURED_BLEND.priceFormatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleQuickAdd}
                  className="group relative inline-flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#D49B5B] to-[#9E472A] hover:from-[#E0A868] hover:to-[#B55333] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all transform active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Order Now' : 'Mua Ngay'}</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>

                <a
                  href="#coffee-beans"
                  className="px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-stone-300 hover:text-white transition-colors"
                >
                  {isEn ? 'All Beans' : 'Xem Tất Cả Hạt'}
                </a>
              </div>
            </div>

            {/* Mini Trust marker */}
            <div className="flex items-center gap-4 text-xs text-stone-400 pt-1">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> {isEn ? '100% Satisfaction or Taste Replacement' : 'Đổi trả 100% nếu không hợp gu'}</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {isEn ? '98% Customer Repurchase Rate' : '98% Khách hàng mua lại'}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
