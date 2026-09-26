import React from 'react';
import { useApp } from '../context/AppContext';
import { Coffee, Bike, Store, ArrowRight, Sparkles, Clock, ShieldCheck, Heart, Flame } from 'lucide-react';

export const OnlineOrder: React.FC = () => {
  const { setOrderModalOpen, setReservationModalOpen, language } = useApp();
  const isEn = language === 'en';

  return (
    <section className="py-28 sm:py-36 bg-[#12100E] text-[#FAF8F5] relative overflow-hidden border-b border-stone-800">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#D49B5B]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/15 p-8 sm:p-16 overflow-hidden shadow-2xl backdrop-blur-2xl">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D49B5B]/15 border border-[#D49B5B]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#D49B5B]">
              <Sparkles className="w-4 h-4 text-[#D49B5B]" />
              <span>{isEn ? 'Seamless Specialty Ordering & Service' : 'Dịch Vụ Đặt Món Tiện Lợi & Giao Tận Tay'}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Your Coffee. <br />
              <span className="font-editorial italic font-normal text-[#D49B5B] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
                your way.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-stone-300 font-light leading-relaxed">
              {isEn
                ? 'Enjoy your favorite artisan brews anytime, anywhere with 3 flexible, meticulously prepared dining options.'
                : 'Tận hưởng tách cà phê đặc sản yêu thích mọi lúc mọi nơi với 3 phương thức phục vụ linh hoạt, tiện lợi và chu đáo nhất.'}
            </p>

            {/* 3 Large, Friendly, High-Impact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* Delivery */}
              <div 
                onClick={() => setOrderModalOpen(true)}
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D49B5B]/50 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#D49B5B]/20 text-[#D49B5B] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Bike className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#D49B5B] transition-colors">
                    {isEn ? 'Express Delivery' : 'Giao Hỏa Tốc'}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {isEn ? 'Fast 25-minute delivery • Insulated bag & separate ice' : 'Giao nhanh 25 phút nội thành • Túi giữ nhiệt & đá riêng'}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#D49B5B] flex items-center gap-1">
                  {isEn ? 'Order Delivery →' : 'Đặt giao ngay →'}
                </span>
              </div>

              {/* Takeaway / Pickup */}
              <div 
                onClick={() => setOrderModalOpen(true)}
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#9E472A]/50 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#9E472A]/20 text-[#9E472A] flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Coffee className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#9E472A] transition-colors">
                    {isEn ? 'Counter Pickup' : 'Lấy Tại Quầy'}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {isEn ? 'Ready in 10 minutes • Skip the queue' : 'Đặt trước nhận ly sau 10 phút • Không cần chờ đợi'}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#9E472A] flex items-center gap-1">
                  {isEn ? 'Order for Pickup →' : 'Chọn món nhận ngay →'}
                </span>
              </div>

              {/* Dine-in Reservation */}
              <div 
                onClick={() => setReservationModalOpen(true)}
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                  <Store className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {isEn ? 'Dine-In Table' : 'Thưởng Thức Tại Quán'}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {isEn ? 'Reserve garden view tables • Quiet workspaces with outlets' : 'Giữ bàn view sân vườn • Bàn làm việc có ổ cắm riêng'}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  {isEn ? 'Book Table Free →' : 'Đặt chỗ miễn phí →'}
                </span>
              </div>

            </div>

            {/* CTA & Trust Marker */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="group inline-flex items-center justify-between gap-3 px-6 py-3 bg-gradient-to-r from-[#D49B5B] to-[#9E472A] hover:from-[#E0A868] hover:to-[#B55333] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xl transition-all transform active:scale-95"
              >
                <span>{isEn ? 'Explore Menu & Order Online' : 'Khám Phá Menu & Đặt Món Ngay'}</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>

              <div className="flex items-center gap-2 text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isEn ? '100% Specialty Single-Origin Guarantee' : 'Cam kết 100% Arabica Specialty nguyên chất'}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
