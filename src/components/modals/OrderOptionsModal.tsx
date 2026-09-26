import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Coffee, Bike, Store, ArrowRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { CAFE_LOCATIONS } from '../../data/mockData';

export const OrderOptionsModal: React.FC = () => {
  const { orderModalOpen, setOrderModalOpen, addToast, language } = useApp();
  const isEn = language === 'en';
  const [orderType, setOrderType] = useState<'pickup' | 'delivery' | 'visit'>('delivery');
  const [selectedLocationId, setSelectedLocationId] = useState('loc-d1');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  if (!orderModalOpen) return null;

  const handleStartOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderModalOpen(false);

    let msg = isEn ? 'Delivery option selected.' : 'Đã chọn giao tận nơi.';
    if (orderType === 'pickup') msg = isEn ? 'Pickup at counter selected.' : 'Đã chọn hình thức lấy món tại quán.';
    if (orderType === 'visit') msg = isEn ? 'Dine-in table reserved.' : 'Đã đặt chỗ ghé thăm quán.';

    addToast(
      isEn ? 'Start Ordering' : 'Bắt đầu đặt món', 
      isEn ? `${msg} Please select your favorite items from the menu.` : `${msg} Mời bạn chọn các thức uống trong Menu.`, 
      'success'
    );
    
    // Smooth scroll to menu
    document.querySelector('#signature-menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#171411] text-[#FAF9F6] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close */}
        <button
          onClick={() => setOrderModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-black/40 rounded-full border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9824A] block mb-1">
            {isEn ? 'Online Ordering' : 'Đặt Hàng Trực Tuyến'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Your Coffee. Your Way.
          </h3>
          <p className="text-xs text-[#D5C9B7] mt-1">
            {isEn 
              ? 'Choose your preferred way to enjoy artisan specialty coffee today' 
              : 'Chọn phương thức thưởng thức cà phê phù hợp với bạn hôm nay'}
          </p>
        </div>

        {/* 3 Option Pills */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          {[
            { id: 'delivery', name: isEn ? 'Express Delivery' : 'Giao Hỏa Tốc', icon: Bike, desc: isEn ? '20-30 mins' : '20-30 phút' },
            { id: 'pickup', name: isEn ? 'Self Pickup' : 'Tự Lấy (Pickup)', icon: Coffee, desc: isEn ? 'Ready in 10m' : 'Sẵn sàng trong 10p' },
            { id: 'visit', name: isEn ? 'Dine In' : 'Ghé Thăm Quán', icon: Store, desc: isEn ? 'Reserve Table' : 'Đặt bàn trước' },
          ].map((type) => {
            const Icon = type.icon;
            const isSelected = orderType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setOrderType(type.id as any)}
                className={`p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-[#B9824A]/20 border-[#B9824A] text-white shadow-lg shadow-black/40'
                    : 'bg-white/[0.03] border-white/10 text-stone-400 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-[#B9824A]' : 'text-stone-400'}`} />
                <span className="text-xs font-bold block">{type.name}</span>
                <span className="text-[10px] opacity-70 mt-0.5">{type.desc}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Form fields */}
        <form onSubmit={handleStartOrder} className="space-y-4">
          {orderType === 'delivery' && (
            <div>
              <label className="block text-xs font-semibold text-[#D5C9B7] mb-1.5">
                {isEn ? 'Delivery Address' : 'Địa chỉ giao hàng chính xác'}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-stone-500" />
                <input
                  type="text"
                  required
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder={isEn ? 'Street address, ward, district...' : 'Số nhà, tên đường, phường, quận...'}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#B9824A]"
                />
              </div>
            </div>
          )}

          {(orderType === 'pickup' || orderType === 'visit') && (
            <div>
              <label className="block text-xs font-semibold text-[#D5C9B7] mb-1.5">
                {isEn ? 'Select Store Location' : 'Chọn chi nhánh gần bạn'}
              </label>
              <select
                value={selectedLocationId}
                onChange={(e) => setSelectedLocationId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#1F1B16] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#B9824A]"
              >
                {CAFE_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} ({loc.address})
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#D5C9B7] mb-1.5">
              {isEn ? 'Contact Phone Number' : 'Số điện thoại nhận hàng / xác nhận'}
            </label>
            <input
              type="tel"
              required
              value={guestPhone}
              onChange={(e) => setGuestPhone(e.target.value)}
              placeholder="0908 xxx xxx"
              className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#B9824A] to-[#8C5D30] hover:from-[#c89258] hover:to-[#9a6735] text-[#171411] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
          >
            <span>{isEn ? 'Proceed to Signature Menu' : 'Tiếp Tục Chọn Món Trong Menu'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

