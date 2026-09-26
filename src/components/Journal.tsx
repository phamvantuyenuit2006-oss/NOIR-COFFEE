import React from 'react';
import { useApp } from '../context/AppContext';
import { JOURNAL_POSTS } from '../data/mockData';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const Journal: React.FC = () => {
  const { setActiveArticle, language } = useApp();
  const isEn = language === 'en';

  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#FAF9F6] text-[#171411] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9824A]/10 border border-[#B9824A]/30 text-xs font-bold uppercase tracking-widest text-[#5A3E2B] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#B9824A]" />
              <span>{isEn ? 'The Coffee Journal' : 'Chuyên San Cà Phê'}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#171411] uppercase leading-[1.05]">
              The Coffee <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-4xl sm:text-6xl lg:text-7xl">
                journal & culture.
              </span>
            </h2>
            <p className="font-editorial italic text-lg sm:text-2xl text-stone-600 mt-2">
              {isEn 
                ? 'Explore extraction techniques, origin stories, and contemporary coffee culture.' 
                : 'Khám phá kỹ thuật chiết xuất, câu chuyện nguồn cội và văn hóa cà phê đương đại.'}
            </p>
          </div>

          <span className="text-xs text-stone-500 hidden md:inline">
            {isEn ? 'New articles published every Monday' : 'Cập nhật bài viết mới mỗi thứ Hai'}
          </span>
        </div>

        {/* Articles 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="editorial-card group relative bg-white border border-stone-200 rounded-3xl p-5 flex flex-col justify-between cursor-pointer hover:border-[#B9824A]/60 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#171411]/90 text-[#B9824A] font-bold text-[10px] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-stone-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#B9824A]" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B9824A]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#B9824A] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* Read button */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#B9824A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{isEn ? 'Read Article' : 'Đọc bài viết'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <span className="text-[11px] text-stone-400 font-medium">
                  {post.author.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
