import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SPACE_PHOTOS } from '../data/mockData';
import { Sparkles, MapPin, Eye, Calendar, ArrowRight } from 'lucide-react';

export const OurSpace: React.FC = () => {
  const { setActiveSpaceItem, setReservationModalOpen, language, t } = useApp();
  const isEn = language === 'en';
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getSpaceTitle = (id: string, title: string) => {
    if (isEn) return title;
    const map: Record<string, string> = {
      'space-1': 'Quầy Bar Cà Phê Ngập Tràn Ánh Sáng',
      'space-2': 'Khu Vực Bàn Làm Việc Yên Tĩnh',
      'space-3': 'Sân Vườn Giếng Trời Nhiệt Đới',
      'space-4': 'Không Gian Buổi Tối Ấm Áp & Lãng Mạn',
      'space-5': 'Kiến Trúc Mặt Tiền Bauhaus Đương Đại',
      'space-6': 'Nghệ Thuật Chiết Xuất Chuẩn Barista SCA'
    };
    return map[id] || title;
  };

  const getSpaceCategory = (cat: string) => {
    if (isEn) return cat;
    if (cat === 'Coffee Bar') return 'Quầy Bar Cà Phê';
    if (cat === 'Workspace') return 'Góc Làm Việc';
    if (cat === 'Seating') return 'Chỗ Ngồi Thư Giãn';
    if (cat === 'Night Café') return 'Cà Phê Tối';
    if (cat === 'Exterior') return 'Kiến Trúc Ngoại Cảnh';
    if (cat === 'Barista Craft') return 'Nghệ Thuật Barista';
    return cat;
  };

  const categories: { key: string; label: string }[] = [
    { key: 'All', label: t.space.all },
    { key: 'Coffee Bar', label: t.space.coffeeBar },
    { key: 'Workspace', label: t.space.workspace },
    { key: 'Seating', label: t.space.seating },
    { key: 'Exterior', label: t.space.exterior }
  ];

  const filteredPhotos = SPACE_PHOTOS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="our-space" className="reveal-on-scroll py-12 sm:py-16 bg-[#FAF8F5] text-[#171411] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#9E472A] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B9824A]" />
              <span>{t.space.tag}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171411] uppercase leading-[1.05]">
              {t.space.titleLine1} <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
                {t.space.titleLine2}
              </span>
            </h2>
            <p className="font-editorial italic text-lg sm:text-2xl text-stone-600 mt-2">
              {t.space.quote}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#171411] text-white shadow-md'
                    : 'bg-white border border-stone-300/80 text-stone-700 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid with Double-Bezel Framing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const isLarge = index === 0 || index === 3;
            const displayTitle = getSpaceTitle(photo.id, photo.title);
            const displayCategory = getSpaceCategory(photo.category);

            return (
              <div
                key={photo.id}
                onClick={() => setActiveSpaceItem(photo)}
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-md bg-stone-100 border border-stone-200/90 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  isLarge ? 'md:col-span-2 aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <img
                  src={photo.image}
                  alt={displayTitle}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Location tag */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#D49B5B]" />
                  <span>{photo.location}</span>
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D49B5B] block">
                    {displayCategory}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">{displayTitle}</h4>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1 font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Space Reservation Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-[2rem] bg-white border border-stone-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E472A] block">
              {t.space.reservationCardTag}
            </span>
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              {t.space.reservationCardTitle}
            </h4>
            <p className="text-xs text-stone-600">{t.space.reservationCardDesc}</p>
          </div>

          <button
            onClick={() => setReservationModalOpen(true)}
            className="px-7 py-3.5 rounded-full bg-[#171411] hover:bg-[#9E472A] text-white font-bold text-xs uppercase tracking-widest transition-all shrink-0 shadow-lg flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#D49B5B]" />
            <span>{t.space.bookSpaceBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
