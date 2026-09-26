import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, Coffee, Sparkles, MapPin, BookOpen, ArrowRight } from 'lucide-react';
import { SIGNATURE_DRINKS, COFFEE_BEANS, CAFE_LOCATIONS, JOURNAL_POSTS } from '../../data/mockData';

export const SearchOverlay: React.FC = () => {
  const { searchOpen, setSearchOpen, setSelectedDrinkForCustomize, setSelectedBeanForCustomize, setActiveLocation, language } = useApp();
  const isEn = language === 'en';
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  if (!searchOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedDrinks = SIGNATURE_DRINKS.filter(
    (d) => d.name.toLowerCase().includes(q) || d.tastingNotes.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
  );

  const matchedBeans = COFFEE_BEANS.filter(
    (b) => b.name.toLowerCase().includes(q) || b.region.toLowerCase().includes(q) || b.tastingNotes.some((t) => t.toLowerCase().includes(q))
  );

  const matchedLocations = CAFE_LOCATIONS.filter(
    (l) => l.name.toLowerCase().includes(q) || l.district.toLowerCase().includes(q) || l.address.toLowerCase().includes(q)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-[#171411] text-[#FAF9F6] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Bar */}
        <div className="flex items-center px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <Search className="w-5 h-5 text-[#B9824A] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isEn ? "Search drinks, specialty beans, stores (e.g. Dirty, Cau Dat, V60)..." : "Tìm kiếm món, hạt cà phê, chi nhánh (VD: Dirty, Cầu Đất, V60)..."}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-stone-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-stone-400 hover:text-white mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setSearchOpen(false)}
            className="px-2.5 py-1 text-xs font-mono text-stone-400 hover:text-white bg-white/5 rounded-lg shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {query === '' ? (
            <div className="space-y-4 py-2">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                {isEn ? 'Trending Quick Searches' : 'Gợi ý tìm kiếm nhanh'}
              </span>
              <div className="flex flex-wrap gap-2">
                {(isEn ? ['NOIR Velvet Latte', 'Cau Dat Bourbon', 'Dirty Coffee', 'V60 Pour Over', 'Cold Brew', 'District 1 Store'] : ['NOIR Velvet Latte', 'Hạt Cầu Đất Bourbon', 'Dirty Coffee', 'Pha V60', 'Cold Brew', 'Chi nhánh Quận 1']).map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#B9824A]/40 text-xs font-medium text-stone-300 hover:text-white transition-colors"
                  >
                    ☕ {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Drinks */}
              {matchedDrinks.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B9824A] uppercase tracking-wider mb-2.5">
                    <Coffee className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Signature Drinks' : 'Thức Uống Đặc Trưng'} ({matchedDrinks.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchedDrinks.map((drink) => (
                      <div
                        key={drink.id}
                        onClick={() => {
                          setSelectedDrinkForCustomize(drink);
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between p-2.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#B9824A]/40 rounded-2xl cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img src={drink.image} alt={drink.name} className="w-12 h-12 object-cover rounded-xl" />
                          <div>
                            <h5 className="font-serif text-xs sm:text-sm font-bold text-white">{drink.name}</h5>
                            <span className="text-[11px] text-[#D5C9B7]">{drink.tastingNotes}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#B9824A] font-mono">{drink.priceFormatted}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coffee Beans */}
              {matchedBeans.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B9824A] uppercase tracking-wider mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isEn ? 'Specialty Whole Beans' : 'Hạt Cà Phê Đặc Sản'} ({matchedBeans.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchedBeans.map((bean) => (
                      <div
                        key={bean.id}
                        onClick={() => {
                          setSelectedBeanForCustomize(bean);
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between p-2.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#B9824A]/40 rounded-2xl cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <img src={bean.image} alt={bean.name} className="w-12 h-12 object-cover rounded-xl" />
                          <div>
                            <h5 className="font-serif text-xs sm:text-sm font-bold text-white">{bean.name}</h5>
                            <span className="text-[11px] text-[#D5C9B7]">{bean.roast} • {bean.region}</span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-[#B9824A] font-mono">{bean.priceFormatted}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Locations */}
              {matchedLocations.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-300 uppercase tracking-wider mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B9824A]" />
                    <span>{isEn ? 'Store Venues' : 'Cửa Hàng Flagship'} ({matchedLocations.length})</span>
                  </div>
                  <div className="space-y-2">
                    {matchedLocations.map((loc) => (
                      <div
                        key={loc.id}
                        onClick={() => {
                          setActiveLocation(loc);
                          setSearchOpen(false);
                        }}
                        className="flex items-center justify-between p-2.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 rounded-2xl cursor-pointer transition-all"
                      >
                        <div>
                          <h5 className="font-serif text-xs sm:text-sm font-bold text-white">{loc.name}</h5>
                          <span className="text-[11px] text-stone-400">{loc.address}</span>
                        </div>
                        <span className="text-[11px] text-emerald-400">{loc.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

