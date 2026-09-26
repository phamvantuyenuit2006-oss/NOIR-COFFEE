import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, MapPin, Clock, Phone, Navigation, Check, Coffee } from 'lucide-react';

export const LocationModal: React.FC = () => {
  const { activeLocation, setActiveLocation, setOrderModalOpen, addToast } = useApp();

  if (!activeLocation) return null;

  const handleDirections = () => {
    addToast('Mở Google Maps...', `Đang dẫn đường đến ${activeLocation.name} (${activeLocation.address}).`, 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#171411] text-[#FAF9F6] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={() => setActiveLocation(null)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-white bg-black/40 rounded-full border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-video overflow-hidden">
          <img src={activeLocation.image} alt={activeLocation.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-transparent to-black/30" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/90 text-black font-bold text-xs">
            {activeLocation.status}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9824A] block">
              {activeLocation.district}
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">{activeLocation.name}</h3>
          </div>

          <div className="space-y-2.5 text-xs text-[#D5C9B7] bg-white/[0.03] p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B9824A] shrink-0" />
              <span className="text-white font-medium">{activeLocation.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B9824A] shrink-0" />
              <span>{activeLocation.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#B9824A] shrink-0" />
              <span>{activeLocation.phone}</span>
            </div>
          </div>

          {/* Features */}
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Tiện ích không gian</span>
            <div className="grid grid-cols-2 gap-2">
              {activeLocation.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#D5C9B7]">
                  <Check className="w-3.5 h-3.5 text-[#B9824A] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <button
              onClick={handleDirections}
              className="flex-1 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#B9824A]" />
              <span>Chỉ Đường (Maps)</span>
            </button>

            <button
              onClick={() => {
                setActiveLocation(null);
                setOrderModalOpen(true);
              }}
              className="flex-1 py-3 bg-gradient-to-r from-[#B9824A] to-[#8C5D30] text-[#171411] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Coffee className="w-4 h-4" />
              <span>Đặt Món / Giữ Chỗ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
