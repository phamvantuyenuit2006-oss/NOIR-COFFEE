import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { addToast, language } = useApp();
  const isEn = language === 'en';
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (isEn) {
      addToast('Subscribed successfully!', `Thank you. We will send coffee tasting notes and updates to ${email}.`, 'success');
    } else {
      addToast('Đăng ký thành công!', `Cảm ơn bạn. Chúng tôi sẽ gửi các bản tin nếm thử cà phê đến ${email}.`, 'success');
    }
    setEmail('');
  };

  return (
    <section className="py-20 bg-[#171411] text-[#FAF9F6] relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9824A]/15 border border-[#B9824A]/30 text-xs font-bold uppercase tracking-widest text-[#B9824A] mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>{isEn ? 'Weekly Coffee Dispatch' : 'Bản Tin Cà Phê Hàng Tuần'}</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight">
          Stay in the <br className="hidden sm:inline" />
          <span className="font-editorial italic font-normal text-[#D49B5B] lowercase tracking-normal text-4xl sm:text-6xl">
            coffee loop.
          </span>
        </h2>

        <p className="mt-3 text-base sm:text-lg text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
          {isEn 
            ? 'Receive early updates on seasonal microlots, workshop invitations, and stories behind each artisan roast.' 
            : 'Nhận thông tin về coffee beans mới, thực đơn mùa lễ hội và những câu chuyện phía sau mỗi mẻ rang nghệ nhân.'}
        </p>

        {/* Subscription Form - Nhỏ Gọn */}
        <form onSubmit={handleSubmit} className="mt-7 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isEn ? 'Enter your email address...' : 'Nhập địa chỉ email của bạn...'}
            className="flex-1 px-4 py-2.5 bg-white/[0.06] border border-white/15 rounded-full text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-[#B9824A] transition-colors"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#B9824A] hover:bg-[#c89258] text-[#171411] font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95 shrink-0"
          >
            {isEn ? 'Subscribe' : 'Đăng Ký'}
          </button>
        </form>

        <span className="text-[11px] text-stone-500 block mt-3">
          {isEn ? 'No spam. You can unsubscribe at any time with one click.' : 'Không spam. Bạn có thể hủy đăng ký bất cứ lúc nào.'}
        </span>
      </div>
    </section>
  );
};
