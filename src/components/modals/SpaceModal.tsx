import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, MapPin } from 'lucide-react';

export const SpaceModal: React.FC = () => {
  const { activeSpaceItem, setActiveSpaceItem } = useApp();

  if (!activeSpaceItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#171411] text-[#FAF9F6] border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={() => setActiveSpaceItem(null)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-300 hover:text-white bg-black/60 rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img src={activeSpaceItem.image} alt={activeSpaceItem.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-[#B9824A] text-[#171411] px-2.5 py-0.5 rounded-md">
                {activeSpaceItem.category}
              </span>
              <span className="text-xs text-stone-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B9824A]" />
                {activeSpaceItem.location}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">{activeSpaceItem.title}</h3>
            <p className="text-xs text-[#D5C9B7] mt-1">{activeSpaceItem.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
