import React from 'react';
import { useApp } from '../context/AppContext';
import { CAFE_LOCATIONS } from '../data/mockData';
import { MapPin, Clock, Phone, Navigation, Sparkles, Calendar, ArrowRight, Mail } from 'lucide-react';

export const Locations: React.FC = () => {
  const { setActiveLocation, setReservationModalOpen, addToast, t } = useApp();

  return (
    <section id="locations" className="reveal-on-scroll py-12 sm:py-16 bg-[#F5F2EC] text-[#171411] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#9E472A] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#B9824A]" />
            <span>{t.locations.tag}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171411] uppercase leading-[1.05]">
            {t.locations.titleLine1} <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
              {t.locations.titleLine2}
            </span>
          </h2>
          <p className="font-editorial italic text-lg sm:text-2xl text-stone-600 mt-2">
            {t.locations.quote}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-600">
            <a href="tel:0916323701" className="flex items-center gap-1.5 font-bold text-stone-800 hover:text-[#9E472A] font-mono">
              <Phone className="w-3.5 h-3.5 text-[#9E472A]" />
              {t.locations.hotlineLabel} 0916 323 701
            </a>
            <span>•</span>
            <a href="mailto:phamvantuyenuit2006@gmail.com" className="flex items-center gap-1.5 text-stone-700 hover:text-[#9E472A]">
              <Mail className="w-3.5 h-3.5 text-[#9E472A]" />
              phamvantuyenuit2006@gmail.com
            </a>
          </div>
        </div>

        {/* 3 Locations Cards with Double-Bezel Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAFE_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className="group relative bg-white border border-stone-200/90 rounded-[2rem] p-5 flex flex-col justify-between cursor-pointer hover:border-[#9E472A]/40 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-5 bg-stone-100">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#171411]/90 backdrop-blur-md text-emerald-400 font-bold text-[10px] uppercase tracking-wider border border-white/10 shadow-sm">
                    {loc.status}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E472A] block">
                  {loc.district}
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#9E472A] transition-colors mt-1">
                  {loc.name}
                </h3>

                <div className="space-y-2 mt-4 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#9E472A] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D49B5B] shrink-0" />
                    <span>{loc.hours} ({loc.openDays})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#9E472A] shrink-0" />
                    <a href="tel:0916323701" className="font-mono font-bold text-stone-800 hover:text-[#9E472A]">
                      0916 323 701
                    </a>
                  </div>
                </div>

                {/* Features tags */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-stone-100">
                  {loc.features.slice(0, 2).map((feat, i) => (
                    <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-stone-200 text-stone-600">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setReservationModalOpen(true);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#171411] hover:bg-[#9E472A] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D49B5B]" />
                  <span>{t.locations.bookTableBtn}</span>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToast('Bản đồ chỉ đường', `Đang mở bản đồ chỉ đường đến ${loc.name}.`, 'info');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors flex items-center gap-1 border border-stone-200"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.locations.directionsBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
