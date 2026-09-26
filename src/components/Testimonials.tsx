import React from 'react';
import { useApp } from '../context/AppContext';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, Quote, Sparkles, MessageSquarePlus } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { setReviewModalOpen, userReviews, t } = useApp();

  const allReviews = [...userReviews, ...TESTIMONIALS];

  return (
    <section className="reveal-on-scroll py-12 sm:py-16 bg-[#FAF9F6] text-[#171411] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9824A]/10 border border-[#B9824A]/30 text-xs font-bold uppercase tracking-widest text-[#5A3E2B] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B9824A]" />
              <span>{t.testimonials.tag}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171411] uppercase leading-[1.05]">
              {t.testimonials.titleLine1} <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
                {t.testimonials.titleLine2}
              </span>
            </h2>

            <p className="font-editorial italic text-lg sm:text-2xl text-stone-600 mt-2">
              {t.testimonials.quote}
            </p>
          </div>

          <button
            onClick={() => setReviewModalOpen(true)}
            className="px-4 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-900 hover:text-[#9E472A] rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all self-start md:self-auto"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-[#B9824A]" />
            <span>{t.testimonials.writeReviewBtn}</span>
          </button>
        </div>

        {/* Testimonials 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allReviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="editorial-card relative p-7 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between hover:border-[#B9824A]/60 transition-colors"
            >
              <Quote className="w-8 h-8 text-stone-200 absolute top-6 right-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#B9824A]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B9824A]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-editorial italic text-base text-stone-800 leading-relaxed mb-6">
                  "{review.content}"
                </p>
              </div>

              {/* Author & Favorite */}
              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-3 mb-2.5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#B9824A]/40"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif font-bold text-sm text-stone-900">{review.name}</h4>
                      {review.verified && (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#B9824A]" />
                      )}
                    </div>
                    <span className="text-[11px] text-stone-500 block">{review.role}</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#5A3E2B] bg-[#F9F6F0] p-2.5 rounded-xl border border-stone-200 font-medium">
                  {t.testimonials.favOrderLabel} <strong>{review.favoriteOrder}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
