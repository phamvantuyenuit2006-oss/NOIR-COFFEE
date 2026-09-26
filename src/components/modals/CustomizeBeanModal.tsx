import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sparkles, MapPin, Gauge, Mountain, Plus, Minus } from 'lucide-react';
import { BeanCustomization } from '../../types';

export const CustomizeBeanModal: React.FC = () => {
  const { selectedBeanForCustomize, setSelectedBeanForCustomize, addBeanToCart, setCartDrawerOpen, language } = useApp();
  const isEn = language === 'en';

  const [weight, setWeight] = useState<BeanCustomization['weight']>('250g');
  const [grind, setGrind] = useState<BeanCustomization['grind']>('Whole Bean (Hạt nguyên bản)');
  const [quantity, setQuantity] = useState<number>(1);

  if (!selectedBeanForCustomize) return null;

  let multiplier = 1;
  if (weight === '500g') multiplier = 1.9;
  if (weight.includes('1kg')) multiplier = 3.6;
  const unitPrice = Math.round(selectedBeanForCustomize.price * multiplier);
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    addBeanToCart(selectedBeanForCustomize, { weight, grind }, quantity);
    setSelectedBeanForCustomize(null);
    setCartDrawerOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#171411] text-[#FAF9F6] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Close */}
        <button
          onClick={() => setSelectedBeanForCustomize(null)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-white bg-black/40 rounded-full border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex gap-4 items-start pb-5 border-b border-white/10">
          <img
            src={selectedBeanForCustomize.image}
            alt={selectedBeanForCustomize.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border border-white/10 shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9824A]">
                {selectedBeanForCustomize.roast}
              </span>
              <span className="text-[10px] text-stone-400">• {selectedBeanForCustomize.origin}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
              {selectedBeanForCustomize.name}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {selectedBeanForCustomize.tastingNotes.map((note, idx) => (
                <span key={idx} className="text-[10px] bg-white/[0.05] border border-white/10 text-[#D5C9B7] px-2 py-0.5 rounded-md">
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specs breakdown */}
        <div className="grid grid-cols-2 gap-2.5 py-4 border-b border-white/10 text-xs">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] text-stone-400 block uppercase">
              {isEn ? 'Region & Altitude' : 'Vùng trồng & Độ cao'}
            </span>
            <span className="font-semibold text-white mt-0.5 block">{selectedBeanForCustomize.region} ({selectedBeanForCustomize.altitude})</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] text-stone-400 block uppercase">
              {isEn ? 'Process Method' : 'Phương pháp sơ chế'}
            </span>
            <span className="font-semibold text-white mt-0.5 block">{selectedBeanForCustomize.process}</span>
          </div>
        </div>

        {/* Options */}
        <div className="py-5 space-y-5">
          {/* Weight */}
          <div>
            <label className="block text-xs font-bold text-[#D5C9B7] uppercase tracking-wider mb-2">
              {isEn ? 'Package Size' : 'Trọng Lượng Đóng Gói'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: '250g', label: isEn ? '250g (Tasting Bag)' : '250g (Túi nhỏ trải nghiệm)' },
                { val: '500g', label: isEn ? '500g (Save 5%)' : '500g (Tiết kiệm 5%)' },
                { val: '1000g (1kg)', label: isEn ? '1kg (Save 10%)' : '1kg (Tiết kiệm 10%)' },
              ].map((w) => {
                const isSelected = weight === w.val;
                return (
                  <button
                    key={w.val}
                    type="button"
                    onClick={() => setWeight(w.val as any)}
                    className={`p-3 text-left rounded-xl border text-xs transition-all ${
                      isSelected
                        ? 'bg-[#B9824A]/20 border-[#B9824A] text-[#FAF9F6] font-bold'
                        : 'bg-white/[0.03] border-white/10 text-stone-300'
                    }`}
                  >
                    <span className="block font-mono text-sm">{w.val}</span>
                    <span className="text-[10px] opacity-70 block mt-0.5">{w.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grind Profile */}
          <div>
            <label className="block text-xs font-bold text-[#D5C9B7] uppercase tracking-wider mb-2">
              {isEn ? 'Custom Grind Profile' : 'Kích Cỡ Xay (Grind Profile)'}
            </label>
            <div className="space-y-2">
              {[
                { val: 'Whole Bean (Hạt nguyên bản)', enVal: 'Whole Bean', desc: isEn ? 'Recommended to preserve maximum aromatic freshness' : 'Khuyên dùng để giữ trọn hương thơm tối đa' },
                { val: 'Espresso (Mịn)', enVal: 'Fine (Espresso)', desc: isEn ? 'For Espresso machine or Staresso' : 'Dành cho máy pha Espresso hoặc Staresso' },
                { val: 'V60 / Pour Over (Vừa)', enVal: 'Medium (Pour Over / V60)', desc: isEn ? 'For V60, Kalita, Chemex filter papers' : 'Dành cho phễu lọc giấy V60, Kalita, Chemex' },
                { val: 'French Press / Cold Brew (Thô)', enVal: 'Coarse (French Press / Cold Brew)', desc: isEn ? 'For cold brew immersion & French Press' : 'Dành cho ngâm ủ lạnh Cold Brew & Bình nén' },
              ].map((g) => {
                const isSelected = grind === g.val;
                return (
                  <button
                    key={g.val}
                    type="button"
                    onClick={() => setGrind(g.val as any)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs text-left transition-all ${
                      isSelected
                        ? 'bg-[#B9824A]/20 border-[#B9824A] text-[#FAF9F6]'
                        : 'bg-white/[0.03] border-white/10 text-stone-300 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <span className="font-semibold block">{isEn ? g.enVal : g.val}</span>
                      <span className="text-[10px] text-stone-400">{g.desc}</span>
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#B9824A] text-black flex items-center justify-center shrink-0">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-bold text-white px-2 font-mono">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 py-3 bg-gradient-to-r from-[#B9824A] to-[#8C5D30] hover:from-[#c89258] hover:to-[#9a6735] text-[#171411] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
          >
            <span>{isEn ? 'Add to Bag • ' : 'Thêm Vào Túi • '}{totalPrice.toLocaleString('vi-VN')} ₫</span>
          </button>
        </div>
      </div>
    </div>
  );
};
