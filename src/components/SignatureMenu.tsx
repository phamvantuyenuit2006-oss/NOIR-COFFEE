import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SIGNATURE_DRINKS } from '../data/mockData';
import { MenuCategory, MenuItem } from '../types';
import { Plus, Sparkles, Coffee, Heart, Search, ArrowUpDown, Check, Flame, SlidersHorizontal, ArrowRight, ShoppingBag } from 'lucide-react';

export const SignatureMenu: React.FC = () => {
  const { setSelectedDrinkForCustomize, addDrinkToCart, addPastryToCart, toggleWishlist, isWishlisted, language, t } = useApp();
  const isEn = language === 'en';
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const getDrinkName = (name: string) => {
    if (isEn) return name;
    const nameMap: Record<string, string> = {
      'Single Origin Espresso': 'Espresso Cầu Đất Single Origin',
      'NOIR Velvet Iced Latte': 'Cà Phê Latte Đá Nhung Mượt',
      'Toasted Coconut Coffee': 'Cà Phê Cốt Dừa Tuyết Bến Tre',
      'NOIR Dirty Glass': 'Cà Phê Dirty Rót Tầng Hokkaido',
      'Ceremonial Matcha Latte': 'Matcha Latte Uji Kyoto Thượng Hạng',
      'Amber Citrus Cold Brew': 'Cold Brew Cam Vàng & Hoa Nhài 24H',
      'French Butter Croissant AOP': 'Bánh Croissant Bơ Pháp AOP Nóng Giòn',
      'Classic Espresso Tiramisu': 'Bánh Tiramisu Espresso Ý Truyền Thống',
      'Artisan Lemon Meringue Tart': 'Bánh Tart Chanh Vàng Kem Meringue'
    };
    return nameMap[name] || name;
  };

  const getTranslatedTastingNotes = (notes: string) => {
    if (isEn) return notes;
    const map: Record<string, string> = {
      'Rich · Bold · Balanced': 'Đậm Đà · Cân Bằng · Thơm Nồng',
      'Smooth · Creamy · Cold': 'Nhung Mượt · Béo Nhẹ · Mát Lạnh',
      'Vietnamese Coffee · Coconut · Ice': 'Cà Phê Mộc · Cốt Dừa · Đá Xay',
      'Espresso · Fresh Milk · Velvet': 'Espresso Nóng · Sữa Tươi Lạnh · Tầng Vị',
      'Ceremonial Matcha · Milk · Umami': 'Matcha Uji Kyoto · Sữa Hạt · Hậu Vị Umami',
      'Slow Brewed · Smooth · Refreshing': 'Ủ Lạnh 24h · Thanh Khiết · Sảng Khoái',
      'Flaky · Buttery · Golden Crust': 'Ngàn Lớp Giòn Tan · Bơ Pháp AOP · Thơm Lừng',
      'Espresso · Mascarpone · Cocoa': 'Espresso Đậm · Phô Mai Mascarpone · Cacao',
      'Zesty Citrus · Sweet Meringue · Crisp': 'Chanh Vàng Tươi · Meringue Nướng · Tart Giòn'
    };
    return map[notes] || notes;
  };

  const getBadgeText = (badge: string | undefined) => {
    if (!badge) return '';
    if (isEn) return badge;
    if (badge === 'POPULAR') return '★ Yêu Thích';
    if (badge === 'SIGNATURE') return '✦ Món Đặc Trưng';
    if (badge === 'NEW') return '✦ Món Mới';
    if (badge === 'CHEF PICK') return '👑 Barista Khuyên Dùng';
    if (badge === 'FRESH BAKED') return '🥐 Nướng Mới Mỗi Sáng';
    return badge;
  };

  const getCategoryLabel = (cat: string) => {
    if (isEn) return cat;
    if (cat === 'Signatures') return 'Món Đặc Trưng';
    if (cat === 'Espresso') return 'Espresso';
    if (cat === 'Iced Coffee') return 'Cà Phê Đá';
    if (cat === 'Specialty Cold Brew') return 'Cold Brew';
    if (cat === 'Tea & Matchas') return 'Trà & Matcha';
    if (cat === 'Pastries & Brunch') return 'Bánh Ngọt';
    return cat;
  };

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'All', label: t.menu.all },
    { key: 'Signatures', label: t.menu.signatures },
    { key: 'Espresso', label: t.menu.espresso },
    { key: 'Iced Coffee', label: t.menu.icedCoffee },
    { key: 'Specialty Cold Brew', label: t.menu.coldBrew },
    { key: 'Tea & Matchas', label: t.menu.teaMatcha },
    { key: 'Pastries & Brunch', label: t.menu.pastries },
  ];

  let filteredDrinks = SIGNATURE_DRINKS.filter((d) => {
    const matchesCat = activeCategory === 'All' ? true : d.category === activeCategory;
    const matchesSearch = searchFilter === '' ? true : d.name.toLowerCase().includes(searchFilter.toLowerCase()) || d.tastingNotes.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (sortBy === 'price-asc') {
    filteredDrinks = [...filteredDrinks].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredDrinks = [...filteredDrinks].sort((a, b) => b.price - a.price);
  }

  return (
    <section id="signature-menu" className="reveal-on-scroll py-12 sm:py-16 bg-[#F8F5F0] text-[#171411] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-300 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#9E472A] mb-3">
              <Sparkles className="w-4 h-4 text-[#B9824A]" />
              <span>{t.menu.tag}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171411] uppercase leading-[1.05]">
              {t.menu.titleLine1} <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
                {t.menu.titleLine2}
              </span>
            </h2>
            <p className="font-editorial italic text-xl sm:text-3xl text-stone-600 mt-3">
              {t.menu.quote}
            </p>
          </div>

          {/* Quick Search & Sort Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={t.menu.searchPlaceholder}
                className="w-full pl-11 pr-4 py-3 bg-white border border-stone-300/90 rounded-full text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E472A] shadow-sm"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-5 py-3 bg-white border border-stone-300/90 rounded-full text-xs sm:text-sm font-bold text-stone-700 focus:outline-none focus:border-[#9E472A] shadow-sm appearance-none pr-9 cursor-pointer"
              >
                <option value="default">{t.menu.sortRecommended}</option>
                <option value="price-asc">{t.menu.sortPriceAsc}</option>
                <option value="price-desc">{t.menu.sortPriceDesc}</option>
              </select>
              <ArrowUpDown className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-[#171411] text-white shadow-xl shadow-stone-900/15 scale-105'
                  : 'bg-white border border-stone-300/80 text-stone-700 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-400 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Drink Cards Exactly 2 Rows (6 Items in 3-Cols Grid) - Đơn Giản, Thân Thiện & Đẹp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDrinks.slice(0, 6).map((item) => {
            const wishlisted = isWishlisted(item.id);
            const displayName = getDrinkName(item.name);
            const displayNotes = getTranslatedTastingNotes(item.tastingNotes);
            const displayBadge = getBadgeText(item.badge);
            const displayCategory = getCategoryLabel(item.category);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (item.isPastry) {
                    addPastryToCart(item, 1);
                  } else {
                    setSelectedDrinkForCustomize(item);
                  }
                }}
                className="group relative bg-white border border-stone-200 rounded-[2rem] p-4 sm:p-5 flex flex-col justify-between cursor-pointer shadow-md hover:shadow-xl hover:border-[#9E472A]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Clean Photo Stage */}
                <div>
                  <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-stone-100">
                    <img
                      src={item.image}
                      alt={displayName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />

                    {displayBadge && (
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#171411]/90 backdrop-blur-md text-[#D49B5B] font-bold text-[10px] uppercase tracking-wider border border-[#D49B5B]/30 shadow-sm">
                        {displayBadge}
                      </span>
                    )}

                    {/* Wishlist Heart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(item.id, item.name);
                      }}
                      className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-sm backdrop-blur-md transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? 'fill-rose-500 text-rose-500' : 'text-stone-700'}`} />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5 px-0.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[11px] font-bold text-[#9E472A] uppercase tracking-wider">
                        {displayCategory}
                      </span>
                      <span className="font-mono text-[11px] bg-stone-100 px-2 py-0.5 rounded text-stone-600 font-semibold">
                        {item.calories}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#9E472A] transition-colors leading-snug">
                      {displayName}
                    </h3>

                    <p className="font-editorial text-sm italic text-stone-600">
                      {displayNotes}
                    </p>

                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed pt-0.5 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Single Clean, Uncluttered Bottom Bar */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-serif text-xl font-black text-[#171411]">
                    {item.priceFormatted}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.isPastry) {
                        addPastryToCart(item, 1);
                      } else {
                        setSelectedDrinkForCustomize(item);
                      }
                    }}
                    className="px-3.5 py-1.5 bg-[#171411] group-hover:bg-[#9E472A] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                  >
                    <span>{item.isPastry ? (isEn ? 'Add to Cart' : 'Thêm Vào Giỏ') : (isEn ? 'Order Drink' : 'Đặt Món')}</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Coffee Pairing */}
        <div className="mt-16 p-8 sm:p-10 rounded-[2.5rem] bg-white border border-stone-200 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9E472A] block">
              {t.menu.comboTag}
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              {t.menu.comboTitle}
            </h4>
            <p className="text-sm text-stone-600">{t.menu.comboDesc}</p>
          </div>

          <button
            onClick={() => setActiveCategory('Pastries & Brunch')}
            className="px-8 py-4 rounded-full bg-[#171411] hover:bg-[#9E472A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shrink-0 shadow-xl"
          >
            {t.menu.viewBakeryBtn}
          </button>
        </div>
      </div>
    </section>
  );
};
