import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Crown, Check, Sparkles, Gift, ArrowRight } from 'lucide-react';

export const MembershipModal: React.FC = () => {
  const { membershipModalOpen, setMembershipModalOpen, addToast, language } = useApp();
  const isEn = language === 'en';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!membershipModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setMembershipModalOpen(false);
      if (isEn) {
        addToast(
          'Welcome to the Coffee Club!',
          `Member ${name} has been assigned a VIP tier. You get 1 complimentary drink on your next visit.`,
          'success'
        );
      } else {
        addToast(
          'Chào mừng đến với Coffee Club!',
          `Thành viên ${name} đã được cấp mã hội viên VIP. Bạn được tặng 1 thức uống miễn phí trong lần ghé thăm tiếp theo.`,
          'success'
        );
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#171411] text-[#FAF9F6] border border-[#B9824A]/30 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B9824A]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={() => setMembershipModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-black/40 rounded-full border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#B9824A] to-[#E5A93C] text-[#171411] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#B9824A]/25">
            <Crown className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9824A] block mb-1">
            {isEn ? 'Exclusive Community' : 'Cộng Đồng Hội Viên Độc Quyền'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {isEn ? 'Join The Coffee Club' : 'Gia Nhập NOIR Coffee Club'}
          </h3>
          <p className="text-xs text-[#D5C9B7] mt-1.5">
            {isEn 
              ? '“Good coffee comes with good perks.” Become a member for exclusive artisan privileges.' 
              : '“Good coffee comes with good perks.” Trở thành hội viên để nhận đặc quyền riêng biệt.'}
          </p>
        </div>

        {/* Perks Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#D5C9B7]">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#B9824A] shrink-0" />
            <span>{isEn ? '1 Complimentary welcome drink' : 'Tặng 1 thức uống chào mừng'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#B9824A] shrink-0" />
            <span>{isEn ? '10% off specialty whole beans' : 'Giảm 10% hạt cà phê gói'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#B9824A] shrink-0" />
            <span>{isEn ? 'Free plant milk upgrade (Oat/Almond)' : 'Miễn phí đổi sữa hạt (Oat Milk)'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#B9824A] shrink-0" />
            <span>{isEn ? 'VIP Cupping workshop invitations' : 'Mời tham dự Cupping Workshop'}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-[#D5C9B7] mb-1">
              {isEn ? 'Full Name' : 'Họ và Tên'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isEn ? 'John Doe' : 'Nguyễn Văn A'}
              className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D5C9B7] mb-1">
              {isEn ? 'Phone Number' : 'Số điện thoại'}
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0988 xxx xxx"
              className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D5C9B7] mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@domain.com"
              className="w-full px-3.5 py-2.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#B9824A] to-[#8C5D30] hover:from-[#c89258] hover:to-[#9a6735] text-[#171411] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="inline-block w-4 h-4 border-2 border-[#171411] border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>{isEn ? 'Activate Membership Now' : 'Kích Hoạt Hội Viên Ngay'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
