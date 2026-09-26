import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Sparkles, Coffee, Flame, Plus, Minus, Check } from 'lucide-react';
import { DrinkCustomization } from '../../types';

export const CustomizeDrinkModal: React.FC = () => {
  const { selectedDrinkForCustomize, setSelectedDrinkForCustomize, addDrinkToCart, setCartDrawerOpen, language } = useApp();
  const isEn = language === 'en';

  const [size, setSize] = useState<DrinkCustomization['size']>('Regular (350ml)');
  const [milk, setMilk] = useState<DrinkCustomization['milk']>('Whole Milk');
  const [sweetness, setSweetness] = useState<DrinkCustomization['sweetness']>('70% Less Sweet');
  const [ice, setIce] = useState<DrinkCustomization['ice']>('Regular Ice');
  const [extraShot, setExtraShot] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');

  if (!selectedDrinkForCustomize) return null;

  let basePrice = selectedDrinkForCustomize.price;
  if (size.includes('Large')) basePrice += 10000;
  if (milk.includes('+15k')) basePrice += 15000;
  if (extraShot) basePrice += 15000;
  const totalPrice = basePrice * quantity;

  const handleAdd = () => {
    addDrinkToCart(
      selectedDrinkForCustomize,
      { size, milk, sweetness, ice, extraShot, notes },
      quantity
    );
    setSelectedDrinkForCustomize(null);
    setCartDrawerOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#171411] text-[#FAF9F6] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Close */}
        <button
          onClick={() => setSelectedDrinkForCustomize(null)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-white bg-black/40 rounded-full border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Drink Header */}
        <div className="flex gap-4 items-start pb-5 border-b border-white/10">
          <img
            src={selectedDrinkForCustomize.image}
            alt={selectedDrinkForCustomize.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border border-white/10 shrink-0"
          />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B9824A] block">
              {isEn ? selectedDrinkForCustomize.category : 'Món Đặc Trưng'}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
              {selectedDrinkForCustomize.name}
            </h3>
            <p className="text-xs text-[#D5C9B7] mt-1 line-clamp-2">
              {selectedDrinkForCustomize.description}
            </p>
            <span className="text-sm font-bold text-[#B9824A] font-mono mt-1.5 block">
              {selectedDrinkForCustomize.priceFormatted}
            </span>
          </div>
        </div>

        {/* Customization Options */}
        <div className="py-5 space-y-5">
          {/* Size */}
          <div>
            <label className="block text-xs font-bold text-[#D5C9B7] uppercase tracking-wider mb-2">
              {isEn ? 'Cup Size' : 'Kích Cỡ Ly'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { val: 'Regular (350ml)', label: isEn ? 'Regular (350ml)' : 'Ly Vừa • Regular (350ml)', extra: '+0₫' },
                { val: 'Large (480ml)', label: isEn ? 'Large (480ml)' : 'Ly Lớn • Large (480ml)', extra: '+10.000₫' },
              ].map((opt) => {
                const isSelected = size === opt.val;
                return (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setSize(opt.val as any)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#B9824A]/20 border-[#B9824A] text-[#FAF9F6]'
                        : 'bg-white/[0.03] border-white/10 text-stone-300 hover:border-white/20'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className="text-[11px] text-[#B9824A] font-mono">{opt.extra}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Milk Choice */}
          <div>
            <label className="block text-xs font-bold text-[#D5C9B7] uppercase tracking-wider mb-2">
              {isEn ? 'Milk Option' : 'Lựa Chọn Sữa'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { val: 'Whole Milk', label: isEn ? 'Fresh Whole Milk' : 'Sữa Tươi Thanh Trùng', extra: '+0₫' },
                { val: 'Oat Milk (+15k)', label: isEn ? 'Oat Milk' : 'Sữa Yến Mạch Oat', extra: '+15.000₫' },
                { val: 'Almond Milk (+15k)', label: isEn ? 'Almond Milk' : 'Sữa Hạnh Nhân', extra: '+15.000₫' },
                { val: 'None / Black', label: isEn ? 'None / Black Coffee' : 'Không Sữa / Đen Đá', extra: '+0₫' },
              ].map((opt) => {
                const isSelected = milk === opt.val;
                return (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setMilk(opt.val as any)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-[#B9824A]/20 border-[#B9824A] text-[#FAF9F6] font-bold'
                        : 'bg-white/[0.03] border-white/10 text-stone-300 hover:border-white/20'
                    }`}
                  >
                    <span className="truncate">{opt.label}</span>
                    <span className="text-[10px] text-[#B9824A] font-mono shrink-0 ml-1">{opt.extra}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sweetness */}
          <div>
            <label className="block text-xs font-bold text-[#D5C9B7] uppercase tracking-wider mb-2">
              {isEn ? 'Sweetness Level' : 'Độ Ngọt'}
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { val: '100% Normal', label: isEn ? '100% Standard' : '100% Chuẩn' },
                { val: '70% Less Sweet', label: isEn ? '70% Light' : '70% Ngọt Nhẹ' },
                { val: '30% Light', label: isEn ? '30% Low' : '30% Ít Ngọt' },
                { val: '0% No Sugar', label: isEn ? '0% No Sugar' : '0% Không Đường' }
              ].map((lvl) => (
                <button
                  key={lvl.val}
                  type="button"
                  onClick={() => setSweetness(lvl.val as any)}
                  className={`py-2 px-1 text-center rounded-xl border text-[10.5px] font-semibold transition-all ${
                    sweetness === lvl.val
                      ? 'bg-[#B9824A]/20 border-[#B9824A] text-[#FAF9F6]'
                      : 'bg-white/[0.03] border-white/10 text-stone-300'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Ice / Temperature */}
          <div>
            <label className="block text-xs font-bold text-[#D5C9B7] uppercase tracking-wider mb-2">
              {isEn ? 'Ice Level / Temperature' : 'Lượng Đá / Nhiệt Độ'}
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { val: 'Regular Ice', label: isEn ? 'Regular Ice' : 'Đá Chuẩn' },
                { val: 'Less Ice', label: isEn ? 'Less Ice' : 'Ít Đá' },
                { val: 'No Ice', label: isEn ? 'No Ice' : 'Không Đá' },
                { val: 'Hot Drink', label: isEn ? 'Hot Drink' : 'Uống Nóng' }
              ].map((lvl) => (
                <button
                  key={lvl.val}
                  type="button"
                  onClick={() => setIce(lvl.val as any)}
                  className={`py-2 px-1 text-center rounded-xl border text-[10.5px] font-semibold transition-all ${
                    ice === lvl.val
                      ? 'bg-[#B9824A]/20 border-[#B9824A] text-[#FAF9F6]'
                      : 'bg-white/[0.03] border-white/10 text-stone-300'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Extra Shot & Notes */}
          <div className="pt-2 space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#B9824A]" />
                <span className="text-xs font-semibold text-white">
                  {isEn ? 'Add 1 Extra Espresso Shot (+15,000₫)' : 'Thêm 1 Shot Espresso Đậm Đà (+15.000₫)'}
                </span>
              </div>
              <input
                type="checkbox"
                checked={extraShot}
                onChange={(e) => setExtraShot(e.target.checked)}
                className="w-4 h-4 accent-[#B9824A] rounded"
              />
            </label>

            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isEn ? 'Special requests for Barista (e.g. ceramic mug, takeaway)...' : 'Ghi chú đặc biệt cho Barista (VD: Dùng ly sứ, mang về...)'}
              className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#B9824A]"
            />
          </div>
        </div>

        {/* Footer: Quantity & Submit */}
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
