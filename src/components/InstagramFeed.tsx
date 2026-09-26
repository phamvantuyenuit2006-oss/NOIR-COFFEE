import React from 'react';
import { useApp } from '../context/AppContext';
import { INSTAGRAM_POSTS } from '../data/mockData';
import { Heart, ArrowUpRight } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const { addToast } = useApp();

  return (
    <section className="py-20 bg-[#F5F0E8] text-[#171411] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9E472A] block mb-1">
              Social Community
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#171411] uppercase leading-tight">
              Follow The <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-[#9E472A] lowercase tracking-normal text-3xl sm:text-5xl lg:text-6xl">
                daily ritual.
              </span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              addToast('Instagram @noircoffee', 'Chuyển hướng đến trang Instagram chính thức.', 'info');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-300 text-xs font-bold text-stone-900 hover:text-[#B9824A] hover:border-[#B9824A] transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-[#B9824A]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@noircoffee</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>

        {/* 6-Grid Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((item) => (
            <div
              key={item.id}
              onClick={() => addToast('Instagram Post', `Đã lưu khoảnh khắc "${item.tag}" của @noircoffee`, 'info')}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-stone-200 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.tag}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white p-2 text-center">
                <Heart className="w-4 h-4 fill-white text-white" />
                <span className="font-mono text-xs font-bold">{item.likes}</span>
                <span className="text-[9px] text-[#D5C9B7] uppercase tracking-wider">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
