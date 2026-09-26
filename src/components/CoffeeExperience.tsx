import React from 'react';
import { useApp } from '../context/AppContext';
import { BEAN_TO_CUP_STEPS } from '../data/mockData';
import { Sparkles, Quote, CheckCircle2 } from 'lucide-react';

export const CoffeeExperience: React.FC = () => {
  const { language } = useApp();
  const isEn = language === 'en';

  return (
    <section id="coffee-story" className="py-28 sm:py-36 bg-[#12100E] text-[#FAF8F5] relative overflow-hidden border-b border-stone-800">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D49B5B]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#9E472A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D49B5B]/15 border border-[#D49B5B]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#D49B5B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? 'From Origin Farm to Artisanal Cup' : 'Hành Trình Tinh Tuyển Từ Nông Trại'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            Every cup has a story.
          </h2>

          <p className="font-editorial italic text-lg sm:text-2xl text-stone-300 mt-2">
            {isEn
              ? 'From the mist-shrouded hills of Cau Dat to the aromatic cup inspiring your morning.'
              : 'Từ những triền đồi sương phủ Cầu Đất đến tách cà phê thơm ngát mở đầu ngày mới của bạn.'}
          </p>
        </div>

        {/* 4-Step Editorial Timeline with Alternating Layouts */}
        <div className="space-y-20 lg:space-y-28">
          {BEAN_TO_CUP_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image (6 Cols) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="p-3 bg-white/5 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                    <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-5 left-5 font-mono font-black text-4xl sm:text-5xl text-[#D49B5B]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content (6 Cols) */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#D49B5B] uppercase tracking-[0.25em]">
                      {isEn ? `Stage ${step.number}` : `Giai Đoạn ${step.number}`}
                    </span>
                    <span className="w-12 h-px bg-[#D49B5B]/40" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {step.title} — {step.subtitle}
                  </h3>

                  <p className="text-base text-stone-300 leading-relaxed font-light">
                    {step.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border-l-4 border-[#D49B5B] border-y border-r border-white/5">
                    <p className="font-editorial italic text-base sm:text-lg text-white/95">
                      “{step.quote}”
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
