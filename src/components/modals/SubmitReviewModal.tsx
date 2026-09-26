import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Star, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { SIGNATURE_DRINKS } from '../../data/mockData';

export const SubmitReviewModal: React.FC = () => {
  const { reviewModalOpen, setReviewModalOpen, addNewReview, language } = useApp();
  const isEn = language === 'en';

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [content, setContent] = useState('');
  const [favoriteOrder, setFavoriteOrder] = useState('NOIR Velvet Iced Latte');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!reviewModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      addNewReview({
        name,
        role: role || (isEn ? 'Coffee Lover & Customer' : 'Khách Hàng Thân Thiết'),
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating,
        content,
        favoriteOrder
      });
      setReviewModalOpen(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF9F6] text-[#171411] border border-stone-200 rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Close */}
        <button
          onClick={() => setReviewModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 bg-stone-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9824A]/10 border border-[#B9824A]/30 text-xs font-bold uppercase tracking-widest text-[#5A3E2B] mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#B9824A]" />
            <span>{isEn ? 'Share Your Experience' : 'Chia Sẻ Trải Nghiệm'}</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-stone-900">
            {isEn ? 'Write a Review' : 'Gửi Đánh Giá Trải Nghiệm'}
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            {isEn ? 'Submit your review to receive a 10% discount voucher for your next order.' : 'Gửi đánh giá để nhận ngay voucher giảm 10% cho đơn hàng tiếp theo'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating */}
          <div className="text-center pb-2">
            <span className="text-xs font-bold text-stone-700 uppercase block mb-2">
              {isEn ? 'Satisfaction Level' : 'Mức Độ Hài Lòng'}
            </span>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 text-2xl transition-transform hover:scale-125"
                >
                  <Star className={`w-7 h-7 ${star <= rating ? 'fill-[#B9824A] text-[#B9824A]' : 'text-stone-300'}`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              {isEn ? 'Full Name *' : 'Họ và Tên *'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isEn ? 'John Doe' : 'Nguyễn Văn A'}
              className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              {isEn ? 'Profession / Role' : 'Nghề nghiệp / Vị trí'}
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder={isEn ? 'e.g. Freelancer / Architect / Designer...' : 'VD: Freelancer / Kiến trúc sư / Sinh viên...'}
              className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              {isEn ? 'Favorite Coffee / Drink' : 'Món cà phê hoặc bánh yêu thích nhất'}
            </label>
            <select
              value={favoriteOrder}
              onChange={(e) => setFavoriteOrder(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#B9824A]"
            >
              {SIGNATURE_DRINKS.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
              {isEn ? 'Your Review *' : 'Nội dung đánh giá *'}
            </label>
            <textarea
              rows={3}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={isEn ? 'Your thoughts on the coffee flavor, cafe atmosphere, and barista service...' : 'Cảm nhận của bạn về hương vị cà phê, không gian quán và sự phục vụ của Barista...'}
              className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#B9824A]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#171411] hover:bg-[#B9824A] text-white hover:text-[#171411] font-bold text-xs uppercase tracking-widest rounded-full shadow-lg transition-all active:scale-95 disabled:opacity-50"
          >
            {isSubmitting 
              ? (isEn ? 'Submitting...' : 'Đang gửi...') 
              : (isEn ? 'Submit Review & Receive 10% Voucher' : 'Gửi Đánh Giá & Nhận Voucher 10%')}
          </button>
        </form>
      </div>
    </div>
  );
};
