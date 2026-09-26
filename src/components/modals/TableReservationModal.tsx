import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles, Coffee, Heart, Phone, Mail } from 'lucide-react';
import { CAFE_LOCATIONS } from '../../data/mockData';
import { TableReservation } from '../../types';

export const TableReservationModal: React.FC = () => {
  const { reservationModalOpen, setReservationModalOpen, addToast, language } = useApp();
  const isEn = language === 'en';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [locationId, setLocationId] = useState('loc-d1');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [seatingArea, setSeatingArea] = useState<TableReservation['seatingArea']>('Courtyard Garden (Sân vườn giếng trời)');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!reservationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const selectedLoc = CAFE_LOCATIONS.find((l) => l.id === locationId) || CAFE_LOCATIONS[0];

    setTimeout(() => {
      setIsSubmitting(false);
      setReservationModalOpen(false);
      addToast(
        isEn ? 'Reservation Confirmed!' : 'Đặt bàn thành công!',
        isEn
          ? `Table for ${guestsCount} guest(s) at ${selectedLoc.name} at ${time} on ${date || 'today'} has been reserved. Our manager will contact you via 0916 323 701 within 10 minutes.`
          : `Bàn cho ${guestsCount} khách tại ${selectedLoc.name} vào lúc ${time} ngày ${date || 'hôm nay'} đã được giữ chỗ. Quản lý sẽ liên hệ theo hotline 0916 323 701 để xác nhận trong 10 phút.`,
        'success'
      );
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FAF8F5] text-[#171411] border border-stone-300 rounded-[2.5rem] shadow-2xl p-6 sm:p-8">
        {/* Close */}
        <button
          onClick={() => setReservationModalOpen(false)}
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 bg-stone-200/80 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9E472A]/10 border border-[#9E472A]/30 text-xs font-bold uppercase tracking-widest text-[#9E472A] mb-2">
            <Coffee className="w-3.5 h-3.5 text-[#9E472A]" />
            <span>{isEn ? 'Online Reservation & Private Events' : 'Dịch Vụ Đặt Chỗ Trực Tuyến & Sự Kiện'}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-black text-stone-900 uppercase">
            Reserve Your Table
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            {isEn 
              ? 'Choose your ideal spot for deep work, team syncs, or an intimate coffee date' 
              : 'Chọn không gian lý tưởng cho buổi làm việc sáng tạo, họp nhóm hoặc hẹn hò'}
          </p>

          {/* Direct Hotline Pill */}
          <div className="mt-3 inline-flex items-center gap-3 px-4 py-1.5 bg-white rounded-full border border-stone-300 shadow-sm text-xs font-medium">
            <span className="flex items-center gap-1 text-stone-700">
              <Phone className="w-3.5 h-3.5 text-[#9E472A]" />
              {isEn ? 'Direct Hotline:' : 'Hotline hỗ trợ nhanh:'} <a href="tel:0916323701" className="font-bold text-[#171411] font-mono hover:text-[#9E472A]">0916 323 701</a>
            </span>
            <span className="text-stone-300">|</span>
            <a href="mailto:phamvantuyenuit2006@gmail.com" className="text-stone-600 hover:text-[#9E472A] truncate">
              phamvantuyenuit2006@gmail.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Location & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {isEn ? 'NOIR Location *' : 'Chi nhánh NOIR *'}
              </label>
              <select
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:border-[#9E472A]"
              >
                {CAFE_LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} ({loc.district})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {isEn ? 'Number of Guests *' : 'Số lượng khách *'}
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuestsCount(num)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                      guestsCount === num
                        ? 'bg-[#171411] text-white border-[#171411] shadow-sm'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    {num === 8 ? (isEn ? '8+ guests' : '8+ người') : `${num} ${isEn ? 'guests' : 'người'}`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {isEn ? 'Reservation Date *' : 'Ngày đặt bàn *'}
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:border-[#9E472A]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {isEn ? 'Arrival Time Slot *' : 'Khung giờ đến *'}
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:border-[#9E472A]"
              >
                <option value="08:00 - 09:30">{isEn ? '08:00 - 09:30 (Morning Sun & Quiet)' : '08:00 - 09:30 (Sáng sớm ngập nắng & yên tĩnh)'}</option>
                <option value="09:30 - 11:30">{isEn ? '09:30 - 11:30 (Focus Deep Work)' : '09:30 - 11:30 (Giờ vàng làm việc sáng tạo)'}</option>
                <option value="11:30 - 13:30">{isEn ? '11:30 - 13:30 (Lunch & Artisan Brunch)' : '11:30 - 13:30 (Nghỉ trưa & Thưởng thức Brunch)'}</option>
                <option value="14:00 - 16:30">{isEn ? '14:00 - 16:30 (Afternoon Coffee & Pastry)' : '14:00 - 16:30 (Buổi chiều trà & bánh ngọt)'}</option>
                <option value="17:00 - 19:30">{isEn ? '17:00 - 19:30 (Sunset & Social Meetup)' : '17:00 - 19:30 (Hoàng hôn & Gặp gỡ bạn bè)'}</option>
                <option value="19:30 - 22:00">{isEn ? '19:30 - 22:00 (Intimate Evening Glow)' : '19:30 - 22:00 (Buổi tối lãng mạn & ấm cúng)'}</option>
              </select>
            </div>
          </div>

          {/* Seating Area */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              {isEn ? 'Preferred Seating Area' : 'Khu Vực Ngồi Mong Muốn'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { val: 'Courtyard Garden (Sân vườn giếng trời)', enVal: 'Courtyard Garden', desc: isEn ? 'Flooded with natural skylight & greenery' : 'Ngập tràn ánh sáng tự nhiên & cây xanh tươi mát' },
                { val: 'Quiet Workspace (Bàn làm việc yên tĩnh)', enVal: 'Quiet Workspace', desc: isEn ? 'Spacious desk, power outlets & high-speed Wi-Fi' : 'Bàn rộng, có ổ cắm điện riêng & wifi tốc độ cao' },
                { val: 'Bar Counter (Quầy bar ngắm Barista)', enVal: 'Bar Counter', desc: isEn ? 'Front-row seat to hand-brewing craft' : 'Trải nghiệm xem nghệ nhân pha chế thủ công' },
                { val: 'Private Lounge (Phòng họp nhỏ)', enVal: 'Private Lounge', desc: isEn ? 'Private sanctuary for 4-8 persons' : 'Không gian riêng tư cho nhóm 4-8 người' },
              ].map((area) => {
                const isSelected = seatingArea === area.val;
                return (
                  <button
                    key={area.val}
                    type="button"
                    onClick={() => setSeatingArea(area.val as any)}
                    className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                      isSelected
                        ? 'bg-[#9E472A]/15 border-[#9E472A] text-stone-900 font-bold shadow-sm'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    <span className="block font-serif text-sm">{isEn ? area.enVal : area.val.split(' (')[0]}</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">{area.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Customer contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                {isEn ? 'Full Name *' : 'Họ và Tên quý khách *'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isEn ? 'e.g. Alex Henderson' : 'VD: Nguyễn Văn Tuấn'}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E472A]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                {isEn ? 'Contact Phone Number *' : 'Số điện thoại liên hệ *'}
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={isEn ? 'e.g. 0908 xxx xxx' : 'VD: 0908 xxx xxx'}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E472A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              {isEn ? 'Special Requests (Optional)' : 'Ghi chú đặc biệt (Tùy chọn)'}
            </label>
            <input
              type="text"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder={isEn ? 'e.g. Birthday surprise, quiet corner...' : 'VD: Cần vị trí ngắm cảnh yên tĩnh, tổ chức sinh nhật...'}
              className="w-full px-3.5 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E472A]"
            />
          </div>

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-4">
            <span className="text-[11px] text-stone-600 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isEn ? 'Free booking • Hotline: 0916 323 701' : 'Miễn phí giữ chỗ • Hỗ trợ qua 0916 323 701'}</span>
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 bg-[#171411] hover:bg-[#9E472A] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (isEn ? 'Submitting...' : 'Đang gửi...') : (isEn ? 'Confirm Reservation' : 'Xác Nhận Giữ Chỗ Ngay')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
