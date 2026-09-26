import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { activeArticle, setActiveArticle, addToast } = useApp();

  if (!activeArticle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] text-[#171411] rounded-3xl shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={() => setActiveArticle(null)}
          className="absolute top-4 right-4 z-10 p-2 text-stone-300 hover:text-white bg-black/60 rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-black">
          <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#B9824A] text-[#171411] px-2.5 py-1 rounded-md mb-2 inline-block">
              {activeArticle.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {activeArticle.title}
            </h2>
          </div>
        </div>

        {/* Article Meta */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 text-xs text-stone-500">
            <div className="flex items-center gap-3">
              <img src={activeArticle.author.avatar} alt={activeArticle.author.name} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <span className="font-bold text-stone-900 block">{activeArticle.author.name}</span>
                <span className="text-[11px]">{activeArticle.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#B9824A]" />
                <span>{activeArticle.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B9824A]" />
                <span>{activeArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
            <p className="font-editorial text-lg sm:text-xl text-stone-900 font-medium italic border-l-2 border-[#B9824A] pl-4">
              "{activeArticle.excerpt}"
            </p>
            {activeArticle.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            <p>
              Tại NOIR, chúng tôi tin rằng việc hiểu rõ nguồn gốc hạt cà phê và phương pháp pha chế sẽ giúp bạn trân quý từng giọt hương vị được kết tinh từ đất trời và bàn tay người làm nông. Hãy ghé các workshop nếm thử cà phê cuối tuần của chúng tôi để cùng khám phá thế giới phong phú này.
            </p>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                addToast('Đã sao chép liên kết', 'Bạn có thể chia sẻ bài viết này cho bạn bè.', 'info');
              }}
              className="flex items-center gap-2 text-xs font-bold text-stone-700 hover:text-[#B9824A] transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Chia sẻ bài viết</span>
            </button>

            <button
              onClick={() => setActiveArticle(null)}
              className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors"
            >
              Đóng bài viết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
