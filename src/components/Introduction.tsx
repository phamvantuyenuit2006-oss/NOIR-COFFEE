import React from 'react';
import { ArrowRight, Sparkles, Heart, Coffee, ShieldCheck, SunMedium, Flame } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Introduction: React.FC = () => {
  const { setReservationModalOpen, t } = useApp();

  return (
    <section id="introduction" className="py-28 sm:py-36 bg-[#F5F2EC] text-[#171411] relative overflow-hidden border-b border-stone-200/80">
      {/* Subtle Ambient Noise & Light Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#B9824A]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 Cols): High-End Editorial Storytelling */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 shadow-sm text-xs font-bold uppercase tracking-[0.2em] text-[#9E472A]">
              <Sparkles className="w-3.5 h-3.5 text-[#B9824A]" />
              <span>{t.intro.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171411] leading-[1.08] uppercase">
              {t.intro.titleLine1} <br />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl block">
                {t.intro.titleLine2}
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-stone-700 font-normal leading-relaxed">
              <p>{t.intro.desc1}</p>
              <p className="text-sm sm:text-base text-stone-600">{t.intro.desc2}</p>
            </div>

            {/* 3 Pillars Counter with Friendly Icons */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-stone-300">
              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center sm:items-start">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#B9824A] flex items-center justify-center mb-1.5 font-bold">
                  <Coffee className="w-4 h-4 text-[#B9824A]" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-black text-[#171411] block">{t.intro.stat1Number}</span>
                <span className="text-[10px] sm:text-xs font-bold text-stone-600 uppercase tracking-wider block mt-0.5">{t.intro.stat1Label}</span>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center sm:items-start">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-[#9E472A] flex items-center justify-center mb-1.5 font-bold">
                  <Flame className="w-4 h-4 text-[#9E472A]" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-black text-[#9E472A] block">{t.intro.stat2Number}</span>
                <span className="text-[10px] sm:text-xs font-bold text-stone-600 uppercase tracking-wider block mt-0.5">{t.intro.stat2Label}</span>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center sm:items-start">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-1.5 font-bold">
                  <SunMedium className="w-4 h-4 text-amber-500" />
                </div>
                <span className="font-serif text-2xl sm:text-3xl font-black text-[#171411] block">{t.intro.stat3Number}</span>
                <span className="text-[10px] sm:text-xs font-bold text-stone-600 uppercase tracking-wider block mt-0.5">{t.intro.stat3Label}</span>
              </div>
            </div>

            {/* Link to Space Reservation */}
            <div className="pt-2">
              <button
                onClick={() => setReservationModalOpen(true)}
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#171411] hover:text-[#9E472A] transition-colors group"
              >
                <span>{t.intro.visitSpaceBtn}</span>
                <div className="w-7 h-7 rounded-full bg-stone-200 group-hover:bg-[#9E472A] text-stone-800 group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>

          </div>

          {/* Right Column (6 Cols): Double-Bezel Visual Gallery */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white/90 p-3 rounded-[2.5rem] shadow-2xl shadow-stone-900/10 border border-stone-200/90">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
                  alt="Barista Handcrafting Latte Art at NOIR"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5">
                    <SunMedium className="w-3.5 h-3.5 text-amber-400" />
                    {t.intro.openLightBadge}
                  </span>
                </div>

                {/* Floating Editorial Quote Card */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#FAF8F5]/98 backdrop-blur-xl border border-stone-300/80 shadow-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-editorial italic text-lg sm:text-xl text-stone-900 leading-snug">
                        {t.intro.quote}
                      </p>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#9E472A] block mt-1.5">
                        NOIR COFFEE ROASTERS • EST. 2026
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#171411] text-[#B9824A] flex items-center justify-center font-serif text-sm font-black shrink-0 shadow-md">
                      N
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
