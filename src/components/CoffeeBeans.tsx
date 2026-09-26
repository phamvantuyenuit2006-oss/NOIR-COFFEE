import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COFFEE_BEANS } from '../data/mockData';
import { RoastLevel } from '../types';
import { Sparkles, ShoppingBag, Mountain, MapPin, Plus, Heart, Clock, ShieldCheck, Flame, Scale } from 'lucide-react';

export const CoffeeBeans: React.FC = () => {
  const { setSelectedBeanForCustomize, toggleWishlist, isWishlisted, setBrewCalculatorOpen, language, t } = useApp();
  const isEn = language === 'en';
  const [activeRoast, setActiveRoast] = useState<RoastLevel>('All');

  const getBeanName = (name: string) => {
    if (isEn) return name;
    const map: Record<string, string> = {
      'Cầu Đất Bourbon Heritage': 'Cầu Đất Bourbon Cổ Di Sản',
      'Đắk Lắk Fine Robusta': 'Đắk Lắk Fine Robusta Lên Men 72H',
      'Yirgacheffe G1 Natural': 'Ethiopia Yirgacheffe G1 Tự Nhiên',
      'Huila Supremo Geisha': 'Colombia Huila Supremo Geisha'
    };
    return map[name] || name;
  };

  const getBeanRoastText = (roast: string) => {
    if (isEn) return roast;
    if (roast === 'Light Roast') return 'Rang Sáng (Light)';
    if (roast === 'Medium Roast') return 'Rang Vừa (Medium)';
    if (roast === 'Dark Roast') return 'Rang Đậm (Dark)';
    return roast;
  };

  const getBeanNoteText = (note: string) => {
    if (isEn) return note;
    const map: Record<string, string> = {
      'Floral': 'Hương Hoa Nhài',
      'Citrus': 'Cam Chanh Tươi',
      'Honey': 'Mật Ong Rừng',
      'Bergamot': 'Trà Bergamot',
      'Chocolate': 'Sô-cô-la Đen',
      'Nutty': 'Hạt Phỉ Nướng',
      'Caramel': 'Caramel Béo',
      'Tobacco': 'Hậu Vị Gỗ Ấm',
      'Berry': 'Quả Mọng Rừng',
      'Jasmine': 'Hoa Nhài Trắng',
      'Peach': 'Đào Chín Mọng',
      'Sweet': 'Ngọt Dịu Sâu',
      'Fruity': 'Trái Cây Rừng',
      'Apricot': 'Mơ Vàng Khô'
    };
    return map[note] || note;
  };

  const getBeanBadge = (badge: string | undefined) => {
    if (!badge) return '';
    if (isEn) return badge;
    if (badge === 'VIETNAMESE SPECIALTY') return '🇻🇳 Đặc Sản Việt Nam';
    if (badge === 'BEST SELLER') return '★ Bán Chạy Nhất';
    if (badge === 'DIRECT TRADE') return '🌿 Thu Mua Trực Tiếp';
    if (badge === 'LIMITED RESERVE') return '🏆 Mẻ Rang Giới Hạn';
    return badge;
  };

  const roastOptions: { key: RoastLevel; label: string }[] = [
    { key: 'All', label: t.beans.roastAll },
    { key: 'Light Roast', label: t.beans.roastLight },
    { key: 'Medium Roast', label: t.beans.roastMedium },
    { key: 'Dark Roast', label: t.beans.roastDark }
  ];

  const filteredBeans = COFFEE_BEANS.filter((b) => {
    if (activeRoast === 'All') return true;
    return b.roast === activeRoast;
  });

  return (
    <section id="coffee-beans" className="reveal-on-scroll py-12 sm:py-16 bg-[#FAF8F5] text-[#171411] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#9E472A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B9824A]" />
              <span>{t.beans.tag}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171411] uppercase leading-[1.05]">
              {t.beans.titleLine1} <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
                {t.beans.titleLine2}
              </span>
            </h2>
            <p className="font-editorial italic text-lg sm:text-2xl text-stone-600 mt-2">
              {t.beans.quote}
            </p>
          </div>

          {/* Roast Filter Pills & Brew Calculator trigger */}
          <div className="flex flex-wrap items-center gap-2">
            {roastOptions.map((roast) => (
              <button
                key={roast.key}
                onClick={() => setActiveRoast(roast.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeRoast === roast.key
                    ? 'bg-[#171411] text-white shadow-md'
                    : 'bg-white border border-stone-300/80 text-stone-700 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {roast.label}
              </button>
            ))}

            <button
              onClick={() => setBrewCalculatorOpen(true)}
              className="px-4 py-2 rounded-full bg-[#9E472A]/10 hover:bg-[#9E472A]/20 text-[#9E472A] text-xs font-bold uppercase tracking-wider transition-all border border-[#9E472A]/30 flex items-center gap-1.5"
            >
              <Scale className="w-3.5 h-3.5 text-[#9E472A]" />
              <span>{t.beans.brewCalcBtn}</span>
            </button>
          </div>
        </div>

        {/* Bean Cards Grid with Double-Bezel Framing & Large Imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredBeans.map((bean) => {
            const wishlisted = isWishlisted(bean.id);
            const displayName = getBeanName(bean.name);
            const displayRoast = getBeanRoastText(bean.roast);
            const displayBadge = getBeanBadge(bean.badge);

            return (
              <div
                key={bean.id}
                onClick={() => setSelectedBeanForCustomize(bean)}
                className="group relative bg-white border border-stone-200 rounded-[2.25rem] p-5 flex flex-col justify-between cursor-pointer hover:border-[#9E472A]/50 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-[4/3] sm:aspect-square rounded-[1.75rem] overflow-hidden mb-4 bg-stone-100">
                    <img
                      src={bean.image}
                      alt={displayName}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {displayBadge && (
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#171411]/90 backdrop-blur-md text-[#D49B5B] font-extrabold text-[10px] uppercase tracking-wider border border-[#D49B5B]/30 shadow-md">
                        {displayBadge}
                      </span>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(bean.id, bean.name);
                      }}
                      className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-md backdrop-blur-md transition-colors"
                    >
                      <Heart className={`w-4.5 h-4.5 ${wishlisted ? 'fill-rose-500 text-rose-500' : 'text-stone-700'}`} />
                    </button>

                    <span className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-lg bg-white/95 text-stone-900 font-bold text-xs shadow-sm">
                      {displayRoast}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#9E472A] font-bold mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{bean.region} ({bean.altitude})</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#9E472A] transition-colors leading-snug line-clamp-1">
                    {displayName}
                  </h3>

                  {/* Tasting notes pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {bean.tastingNotes.slice(0, 3).map((note, i) => (
                      <span key={i} className="text-xs bg-[#FAF8F5] border border-stone-200 text-stone-700 px-2.5 py-1 rounded-lg font-medium">
                        {getBeanNoteText(note)}
                      </span>
                    ))}
                  </div>

                  {/* Freshness Batch info */}
                  <div className="mt-3.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B9824A]" />
                      <span>{t.beans.roastDateLabel} {bean.roastDate}</span>
                    </div>
                    <span className="font-mono text-emerald-600 font-bold">{t.beans.bagsLeft} {bean.bagsRemaining}</span>
                  </div>
                </div>

                {/* Price & Add to Cart button */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-400 block uppercase font-mono">{t.beans.packSize}</span>
                    <span className="font-serif text-xl font-black text-[#171411]">
                      {bean.priceFormatted}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBeanForCustomize(bean);
                    }}
                    className="px-3.5 py-2 bg-[#171411] hover:bg-[#9E472A] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{t.beans.chooseBuy}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Custom Grind Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.beans.freeGrindNotice}</span>
          </div>
          <span className="font-bold text-[#9E472A] font-mono">{t.beans.oneWayValve}</span>
        </div>

      </div>
    </section>
  );
};
