import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sparkles, Scale, Droplets, Thermometer, Timer, Check, ArrowRight } from 'lucide-react';
import { BREW_GUIDES } from '../../data/mockData';

export const BrewCalculatorModal: React.FC = () => {
  const { brewCalculatorOpen, setBrewCalculatorOpen, addToast, language } = useApp();
  const isEn = language === 'en';
  const [selectedMethodId, setSelectedMethodId] = useState('brew-v60');
  const [coffeeGrams, setCoffeeGrams] = useState<number>(15);
  const [ratio, setRatio] = useState<number>(15);

  if (!brewCalculatorOpen) return null;

  const currentGuide = BREW_GUIDES.find((g) => g.id === selectedMethodId) || BREW_GUIDES[0];
  const waterGrams = coffeeGrams * ratio;
  const yieldCups = Math.round((waterGrams / 150) * 10) / 10;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] text-[#171411] border border-stone-200 rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Close */}
        <button
          onClick={() => setBrewCalculatorOpen(false)}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 bg-stone-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9824A]/10 border border-[#B9824A]/30 text-xs font-bold uppercase tracking-widest text-[#5A3E2B] mb-2">
            <Scale className="w-3.5 h-3.5 text-[#B9824A]" />
            <span>{isEn ? 'Interactive Brew Master Tool' : 'Công Cụ Tính Tỷ Lệ Pha Barista'}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            {isEn ? 'Brew Ratio Calculator' : 'Bảng Tính Tỷ Lệ Pha Cà Phê Chuẩn'}
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            {isEn 
              ? 'Calculate precise water volume, temperature and extraction ratio for barista-grade home brewing.' 
              : 'Tính toán lượng nước, nhiệt độ và tỷ lệ chiết xuất chuẩn Barista tại nhà'}
          </p>
        </div>

        {/* Method Selector */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {BREW_GUIDES.map((method) => {
            const isSelected = selectedMethodId === method.id;
            return (
              <button
                key={method.id}
                type="button"
                onClick={() => {
                  setSelectedMethodId(method.id);
                  if (method.id === 'brew-v60') setRatio(15);
                  if (method.id === 'brew-frenchpress') setRatio(14);
                  if (method.id === 'brew-phin') setRatio(4);
                }}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? 'bg-[#171411] text-white border-[#171411] shadow-md'
                    : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
              >
                <span className="font-serif font-bold text-xs sm:text-sm block">{method.name}</span>
                <span className="text-[10px] opacity-70 block mt-0.5">{method.ratio}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Controls & Live Output */}
        <div className="p-5 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-5 mb-6">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-stone-700 uppercase mb-2">
              <span>{isEn ? 'Ground Coffee Dose:' : 'Lượng Cà Phê Bột:'} <strong className="text-[#B9824A] font-mono text-base">{coffeeGrams}g</strong></span>
              <span className="text-stone-500 font-normal">{isEn ? `Est. ~${yieldCups} cups` : `Ước tính ~${yieldCups} tách`}</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="1"
              value={coffeeGrams}
              onChange={(e) => setCoffeeGrams(parseInt(e.target.value))}
              className="w-full accent-[#B9824A] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
              <span>10g ({isEn ? 'Single Cup' : '1 ly đơn'})</span>
              <span>25g ({isEn ? 'Server Pot' : 'Bình đôi'})</span>
              <span>50g ({isEn ? 'Family Pitcher' : 'Gia đình'})</span>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FAF9F6] border border-stone-200 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] font-bold uppercase text-stone-500 mb-1">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                <span>{isEn ? 'Water Needed' : 'Nước Cần Dùng'}</span>
              </div>
              <span className="font-serif font-black text-xl sm:text-2xl text-stone-900 font-mono">{waterGrams} ml</span>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] font-bold uppercase text-stone-500 mb-1">
                <Thermometer className="w-3.5 h-3.5 text-red-500" />
                <span>{isEn ? 'Water Temp' : 'Nhiệt Độ'}</span>
              </div>
              <span className="font-serif font-bold text-base sm:text-xl text-stone-900 font-mono">{currentGuide.waterTemp}</span>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] font-bold uppercase text-stone-500 mb-1">
                <Timer className="w-3.5 h-3.5 text-[#B9824A]" />
                <span>{isEn ? 'Total Brew Time' : 'Thời Gian'}</span>
              </div>
              <span className="font-serif font-bold text-xs sm:text-sm text-stone-900 mt-1 block">{currentGuide.brewTime}</span>
            </div>
          </div>
        </div>

        {/* Step by step guide */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wider">
            {isEn ? `Step-by-step extraction guide for ${currentGuide.name}` : `Các Bước Chiết Xuất Chuẩn Cho ${currentGuide.name}`}
          </h4>
          <div className="space-y-2">
            {currentGuide.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-stone-200/80 text-xs text-stone-700">
                <span className="w-5 h-5 rounded-full bg-[#B9824A] text-[#171411] font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={() => {
              setBrewCalculatorOpen(false);
              if (isEn) {
                addToast('Brew recipe saved', `Ratio: ${coffeeGrams}g coffee to ${waterGrams}ml water for ${currentGuide.name}.`, 'success');
              } else {
                addToast('Đã lưu thông số pha', `Tỷ lệ ${coffeeGrams}g cà phê : ${waterGrams}ml nước cho ${currentGuide.name}.`, 'success');
              }
            }}
            className="px-6 py-2.5 bg-[#171411] hover:bg-[#B9824A] text-white hover:text-[#171411] text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
          >
            {isEn ? 'Close & Apply' : 'Đóng & Áp Dụng'}
          </button>
        </div>
      </div>
    </div>
  );
};
