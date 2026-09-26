import React from 'react';
import { useApp } from '../context/AppContext';
import { Crown, Check, Gift, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';

const PERKS = [
  'Thưởng thức trước các món theo mùa & thư mời tham dự Workshop Cupping',
  'Giảm trực tiếp 10% cho toàn bộ các gói hạt cà phê rang Specialty',
  'Quà tặng sinh nhật cá nhân hóa & 01 ly Signature Drink miễn phí',
  'Early access thử nghiệm các mẻ rang Reserve số lượng giới hạn',
  'Miễn phí nâng cấp sữa yến mạch (Oat Milk) & sữa hạnh nhân'
];

export const Membership: React.FC = () => {
  const { setMembershipModalOpen, t } = useApp();

  const perks = [
    t.membership.perk1,
    t.membership.perk2,
    t.membership.perk3,
    t.membership.perk4,
    t.membership.perk5,
  ];

  return (
    <section className="reveal-on-scroll py-12 sm:py-16 bg-[#F8F5F0] text-[#171411] relative border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-white border border-stone-200/90 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10 shadow-xl">
          
          {/* Left info */}
          <div className="max-w-xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E472A]/10 border border-[#9E472A]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#9E472A]">
              <Crown className="w-3.5 h-3.5 text-[#9E472A]" />
              <span>{t.membership.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-[#171411] uppercase">
              {t.membership.title}
            </h2>

            <p className="font-editorial italic text-lg sm:text-2xl text-stone-600">
              {t.membership.quote}
            </p>

            <p className="text-base text-stone-600 leading-relaxed font-light">
              {t.membership.desc}
            </p>

            <div className="space-y-3 pt-2">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-stone-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#9E472A]/15 text-[#9E472A] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card / CTA with Metallic Luxury Design */}
          <div className="lg:w-[400px] p-8 sm:p-10 rounded-[2rem] bg-gradient-to-br from-[#171411] via-[#241E19] to-[#12100E] text-[#FAF8F5] border border-amber-900/30 shadow-2xl flex flex-col justify-between text-center space-y-6 relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D49B5B]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#D49B5B] to-[#9E472A] text-white flex items-center justify-center mx-auto shadow-xl shadow-[#D49B5B]/25">
              <Crown className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D49B5B] block">
                {t.membership.cardTag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">{t.membership.cardTitle}</h3>
              <p className="text-xs text-stone-400 mt-1">{t.membership.cardDesc}</p>
            </div>

            <button
              onClick={() => setMembershipModalOpen(true)}
              className="w-full py-3 bg-gradient-to-r from-[#D49B5B] to-[#9E472A] hover:from-[#E0A868] hover:to-[#B55333] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <span>{t.membership.registerBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
