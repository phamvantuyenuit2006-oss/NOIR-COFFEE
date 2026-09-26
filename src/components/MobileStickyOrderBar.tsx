import React from 'react';
import { useApp } from '../context/AppContext';
import { Coffee, ShoppingBag, ArrowRight } from 'lucide-react';

export const MobileStickyOrderBar: React.FC = () => {
  const { setOrderModalOpen, setCartDrawerOpen, cartCount, cartSubtotal, language, t } = useApp();
  const isEn = language === 'en';

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#171411]/95 backdrop-blur-xl border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2.5 shadow-2xl">
      {/* Cart button */}
      <button
        onClick={() => setCartDrawerOpen(true)}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white shrink-0 transition-colors"
      >
        <div className="relative">
          <ShoppingBag className="w-4 h-4 text-[#B9824A]" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#9E472A] text-white text-[8px] font-bold flex items-center justify-center font-mono">
              {cartCount}
            </span>
          )}
        </div>
        {cartCount > 0 && (
          <span className="text-[11px] font-bold text-[#D49B5B] font-mono">
            {cartSubtotal.toLocaleString('vi-VN')} ₫
          </span>
        )}
      </button>

      {/* Main Order CTA - Siêu Nhỏ Gọn */}
      <button
        onClick={() => setOrderModalOpen(true)}
        className="flex-1 py-1.5 px-3 bg-gradient-to-r from-[#D49B5B] to-[#9E472A] hover:from-[#E0A868] hover:to-[#B55333] text-white font-bold text-[11px] uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95"
      >
        <Coffee className="w-3.5 h-3.5" />
        <span>{isEn ? 'Order Now' : 'Đặt Món Ngay'}</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};
