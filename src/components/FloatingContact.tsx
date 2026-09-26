import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Calendar, X, Sparkles, Coffee } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FloatingContact: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { setReservationModalOpen, setOrderModalOpen, addToast } = useApp();

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Menu */}
      {expanded && (
        <div className="bg-[#171411]/95 text-white p-4 rounded-3xl shadow-2xl border border-white/15 backdrop-blur-xl w-72 sm:w-80 animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D49B5B]">
                NOIR Concierge 24/7
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed">
            Hỗ trợ đặt bàn tiệc, đặt trước món mang đi hoặc tư vấn hạt cà phê Specialty trực tiếp cùng Barista Master:
          </p>

          <div className="space-y-2">
            {/* Phone Button */}
            <a
              href="tel:0916323701"
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/10 hover:bg-[#B9824A] text-white transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#D49B5B] text-[#171411] flex items-center justify-center font-bold shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left flex-1">
                <span className="text-[10px] text-stone-300 uppercase tracking-wider block">Hotline Trực Tiếp</span>
                <span className="text-xs font-bold text-white group-hover:text-white font-mono">0916 323 701</span>
              </div>
            </a>

            {/* Email Button */}
            <a
              href="mailto:phamvantuyenuit2006@gmail.com"
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/10 hover:bg-[#9E472A] text-white transition-all group"
            >
              <div className="w-8 h-8 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left flex-1 truncate">
                <span className="text-[10px] text-stone-300 uppercase tracking-wider block">Email Liên Hệ</span>
                <span className="text-xs font-bold text-white truncate block font-mono">phamvantuyenuit2006@gmail.com</span>
              </div>
            </a>

            {/* Quick Reserve Button */}
            <button
              onClick={() => {
                setExpanded(false);
                setReservationModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gradient-to-r from-[#D49B5B] to-[#9E472A] hover:from-[#E0A868] hover:to-[#B55333] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Đặt Bàn Giữ Chỗ View Đẹp</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button - Nhỏ Gọn & Thanh Lịch */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group relative flex items-center gap-2 px-3 py-2 rounded-full bg-[#171411]/95 hover:bg-[#171411] text-white shadow-xl border border-white/15 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <Phone className="w-3.5 h-3.5 text-[#D49B5B]" />
        <span className="text-[11px] font-bold font-mono text-white tracking-wider">
          0916 323 701
        </span>
        <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-widest text-[#D49B5B] pl-1 border-l border-white/20">
          Hỗ Trợ
        </span>
      </button>
    </div>
  );
};
