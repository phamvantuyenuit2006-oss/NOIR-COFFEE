import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, MapPin, Phone, Mail, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { addToast, t } = useApp();

  return (
    <footer className="relative bg-[#201814] text-stone-100 pt-10 pb-20 lg:pb-10 text-sm overflow-hidden border-t-2 border-[#D49B5B]/60 shadow-2xl">
      {/* Background Coffee Roastery Photographic Layer (Tông màu sáng ấm, rõ nét) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-soft-light pointer-events-none scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop')`
        }}
      />

      {/* Atmospheric Warm Caramel & Amber Glows (Tạo độ sáng và chiều sâu ấm áp) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E221C]/90 via-[#231A15]/95 to-[#1C1410] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[radial-gradient(ellipse_at_top,_rgba(212,155,91,0.35),_rgba(158,71,42,0.15)_50%,_transparent_75%)] pointer-events-none blur-2xl" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(212,155,91,0.2),_transparent_70%)] pointer-events-none blur-3xl" />

      {/* Top Gold Shimmer Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5B887] via-[#D49B5B] to-transparent shadow-[0_0_20px_rgba(229,184,135,0.8)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Trust Strip (Màu sáng, nổi bật, tinh gọn) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pb-8 mb-8 border-b border-[#D49B5B]/25">
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#2D211B]/90 backdrop-blur-md border border-[#D49B5B]/30 shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#9E472A]/40 text-[#E5B887] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <strong className="text-white text-xs sm:text-sm font-bold block">{t.footer.trust1Title}</strong>
              <span className="text-xs text-stone-300">{t.footer.trust1Desc}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#2D211B]/90 backdrop-blur-md border border-[#D49B5B]/30 shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#9E472A]/40 text-[#E5B887] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <strong className="text-white text-xs sm:text-sm font-bold block">{t.footer.trust2Title}</strong>
              <span className="text-xs text-stone-300">{t.footer.trust2Desc}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#2D211B]/90 backdrop-blur-md border border-[#D49B5B]/30 shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#9E472A]/40 text-[#E5B887] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <strong className="text-white text-xs sm:text-sm font-bold block">{t.footer.trust3Title}</strong>
              <span className="text-xs text-stone-300">{t.footer.trust3Desc}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#2D211B]/90 backdrop-blur-md border border-[#D49B5B]/30 shadow-md">
            <div className="w-8 h-8 rounded-lg bg-[#9E472A]/40 text-[#E5B887] flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <strong className="text-white text-xs sm:text-sm font-bold block">{t.footer.trust4Title}</strong>
              <span className="text-xs text-stone-300">{t.footer.trust4Desc}</span>
            </div>
          </div>
        </div>

        {/* Main Columns Grid (Sáng sủa, chữ to rõ ràng) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#D49B5B]/25">
          
          {/* Col 1: Brand & Contacts (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl sm:text-4xl font-black tracking-wider uppercase text-white drop-shadow-sm">
                NOIR
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5B887] animate-pulse" />
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-[#E5B887] ml-2">
                COFFEE ROASTERS
              </span>
            </div>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-md font-light">
              {t.footer.desc}
            </p>

            {/* Quick Interactive Contact Cards (Nền sáng ấm, viền ánh vàng) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="tel:0916323701"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#2D211B] hover:bg-[#3D2C24] border border-[#D49B5B]/40 hover:border-[#E5B887] transition-all duration-300 group shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#9E472A] to-[#D49B5B] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-[#E5B887] uppercase font-bold block">{t.footer.hotlineLabel}</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-[#E5B887] truncate block">0916 323 701</span>
                </div>
              </a>

              <a
                href="mailto:phamvantuyenuit2006@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#2D211B] hover:bg-[#3D2C24] border border-[#D49B5B]/40 hover:border-[#E5B887] transition-all duration-300 group shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#9E472A] to-[#D49B5B] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-[#E5B887] uppercase font-bold block">{t.footer.emailLabel}</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono group-hover:text-[#E5B887] truncate block">phamvantuyenuit2006@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider border-b border-[#D49B5B]/30 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5B887]" />
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-sm sm:text-base font-medium">
              <li><a href="#signature-menu" className="text-stone-200 hover:text-[#E5B887] transition-colors block">{t.nav.menu}</a></li>
              <li><a href="#coffee-beans" className="text-stone-200 hover:text-[#E5B887] transition-colors block">{t.nav.beans}</a></li>
              <li><a href="#our-space" className="text-stone-200 hover:text-[#E5B887] transition-colors block">{t.nav.space}</a></li>
              <li><a href="#locations" className="text-stone-200 hover:text-[#E5B887] transition-colors block">{t.nav.locations}</a></li>
              <li><a href="#membership" className="text-stone-200 hover:text-[#E5B887] transition-colors block">{t.membership.title}</a></li>
            </ul>
          </div>

          {/* Col 3: 3 Flagship Stores (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider border-b border-[#D49B5B]/30 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5B887]" />
              {t.footer.storesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="border-b border-white/10 pb-2">
                <strong className="text-white block text-sm sm:text-base font-bold">Quận 1 Heritage Lab</strong>
                <span className="text-stone-300 text-xs sm:text-sm block">48 Pasteur, Bến Nghé, Quận 1</span>
              </li>
              <li className="border-b border-white/10 pb-2">
                <strong className="text-white block text-sm sm:text-base font-bold">Thảo Điền Roastery</strong>
                <span className="text-stone-300 text-xs sm:text-sm block">12 Quốc Hương, Thảo Điền, Thủ Đức</span>
              </li>
              <li>
                <strong className="text-white block text-sm sm:text-base font-bold">Phú Nhuận Glasshouse</strong>
                <span className="text-stone-300 text-xs sm:text-sm block">86 Phan Xích Long, P.2, Phú Nhuận</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Actions & Hours (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base sm:text-lg text-white uppercase tracking-wider border-b border-[#D49B5B]/30 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5B887]" />
              {t.footer.servicesTitle}
            </h4>
            <div className="space-y-2.5 text-sm text-stone-200">
              <div className="p-3 rounded-xl bg-[#2D211B] border border-[#D49B5B]/30 shadow">
                <span className="text-xs text-[#E5B887] block font-bold uppercase">{t.footer.openHoursTitle}:</span>
                <strong className="text-white font-mono text-base block font-bold">{t.footer.openHoursValue}</strong>
                <span className="text-xs text-stone-300 block mt-0.5">{t.footer.openHoursDays}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#b2b" onClick={(e) => { e.preventDefault(); addToast('Wholesale', 'Email: phamvantuyenuit2006@gmail.com', 'info'); }} className="text-stone-200 hover:text-[#E5B887] transition-colors block font-medium">{t.footer.b2bWholesale}</a></li>
                <li><a href="#event" onClick={(e) => { e.preventDefault(); addToast('Event booking', 'Hotline 0916 323 701', 'info'); }} className="text-stone-200 hover:text-[#E5B887] transition-colors block font-medium">{t.footer.groupBooking}</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Hotline (Sáng sủa, chữ to đẹp) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-300 text-sm sm:text-base">
          <p className="font-medium">
            {t.footer.copyright} <a href="tel:0916323701" className="text-[#E5B887] font-bold hover:underline font-mono">0916 323 701</a>
          </p>
          <div className="flex items-center gap-3">
            <span>Email: <strong className="text-white font-mono">phamvantuyenuit2006@gmail.com</strong></span>
            <span>•</span>
            <span className="text-[#E5B887] font-bold">{t.footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
