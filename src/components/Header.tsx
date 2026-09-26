import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { Language } from '../i18n/translations';
import { VietnamFlag, UKFlag } from './FlagIcons';

export const Header: React.FC = () => {
  const { 
    cartCount, 
    setCartDrawerOpen, 
    setSearchOpen, 
    setOrderModalOpen, 
    setReservationModalOpen,
    language,
    setLanguage,
    t,
    addToast
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.menu, href: '#signature-menu' },
    { label: t.nav.beans, href: '#coffee-beans' },
    { label: t.nav.space, href: '#our-space' },
    { label: t.nav.locations, href: '#locations' },
  ];

  const handleLanguageToggle = (newLang: Language) => {
    if (newLang === language) return;
    setLanguage(newLang);
    addToast(
      newLang === 'vi' ? 'Đã đổi sang Tiếng Việt' : 'Switched to English',
      newLang === 'vi' ? 'Giao diện đã cập nhật Tiếng Việt hoàn chỉnh.' : 'Language updated to English successfully.',
      'info'
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-xl py-3 shadow-lg shadow-stone-900/5 border-b border-stone-200'
            : 'bg-[#FAF8F5]/85 backdrop-blur-md py-4 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo - To, Rõ Nét & Sang Trọng */}
            <a href="#hero" className="group flex flex-col items-start select-none shrink-0">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl sm:text-4xl font-black tracking-widest uppercase text-[#171411] transition-colors group-hover:text-[#9E472A]">
                  NOIR
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#9E472A] animate-pulse" />
              </div>
              <span className="text-[10.5px] sm:text-[12px] font-sans font-extrabold tracking-[0.26em] uppercase text-stone-700 -mt-0.5">
                COFFEE ROASTERS
              </span>
            </a>

            {/* Desktop Navigation - Chữ To Rõ Ràng Hơn, Dễ Đọc & Đẹp Mắt */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base xl:text-[17px] font-bold text-stone-800 hover:text-[#9E472A] transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#9E472A] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Bar - Gọn Gàng, Chữ Số To Rõ */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Premium Language Switcher with Vector Flags */}
              <div className="flex items-center p-1 bg-white/90 backdrop-blur-md rounded-full border border-stone-300 shadow-sm">
                <button
                  onClick={() => handleLanguageToggle('vi')}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 text-[13px] ${
                    language === 'vi'
                      ? 'bg-[#171411] text-white shadow-md font-black ring-1 ring-stone-900/30'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-bold'
                  }`}
                  title="Tiếng Việt (Vietnamese)"
                >
                  <VietnamFlag size={18} />
                  <span className="tracking-wide">VI</span>
                </button>
                <button
                  onClick={() => handleLanguageToggle('en')}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 text-[13px] ${
                    language === 'en'
                      ? 'bg-[#171411] text-white shadow-md font-black ring-1 ring-stone-900/30'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-bold'
                  }`}
                  title="English (Tiếng Anh)"
                >
                  <UKFlag size={18} />
                  <span className="tracking-wide">EN</span>
                </button>
              </div>

              {/* Nút Tìm Kiếm Tinh Tế */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-white/95 hover:bg-[#FAF8F5] text-stone-800 hover:text-[#9E472A] border border-stone-300 hover:border-[#D49B5B]/80 transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center group"
                title={t.nav.searchPlaceholder}
                aria-label="Tìm kiếm"
              >
                <Search className="w-[18px] h-[18px] stroke-[2.2] transition-transform duration-200 group-hover:scale-110" />
              </button>

              {/* Nút Giỏ Hàng Nghệ Thuật với Badge Nổi Bật */}
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="relative w-10 h-10 rounded-full bg-white/95 hover:bg-[#FAF8F5] text-stone-800 hover:text-[#9E472A] border border-stone-300 hover:border-[#D49B5B]/80 transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center group"
                title={t.nav.cart}
                aria-label="Giỏ hàng"
              >
                <ShoppingBag className="w-[18px] h-[18px] stroke-[2.2] transition-transform duration-200 group-hover:scale-110" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-[#9E472A] text-white text-[11px] font-black flex items-center justify-center shadow-md ring-2 ring-white font-mono animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Nút Đặt Món Chính (Order Now) - Nhỏ Gọn & Chữ Rõ */}
              <button
                onClick={() => setOrderModalOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#171411] hover:bg-[#9E472A] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-md transition-all transform active:scale-95"
              >
                <span>{t.nav.orderNow}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D49B5B]" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-stone-900 bg-white border border-stone-200 shadow-sm"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden pt-20 pb-8 px-6 bg-[#FAF8F5]/98 backdrop-blur-2xl text-[#171411] flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E472A] block">
                Menu
              </span>
              
              {/* Mobile Language Switcher with Vector Flags */}
              <div className="flex items-center p-1 bg-white rounded-full border border-stone-300 text-xs font-bold shadow-sm">
                <button
                  onClick={() => handleLanguageToggle('vi')}
                  className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 ${
                    language === 'vi' ? 'bg-[#171411] text-white shadow-sm font-bold' : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  <VietnamFlag size={18} />
                  <span>Tiếng Việt</span>
                </button>
                <button
                  onClick={() => handleLanguageToggle('en')}
                  className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 ${
                    language === 'en' ? 'bg-[#171411] text-white shadow-sm font-bold' : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  <UKFlag size={18} />
                  <span>English</span>
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-stone-600 hover:text-stone-900 bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-serif text-2xl font-bold text-stone-900 hover:text-[#9E472A] py-2 border-b border-stone-200/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setReservationModalOpen(true);
              }}
              className="w-full py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm rounded-xl border border-stone-300"
            >
              {t.nav.bookTable}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setOrderModalOpen(true);
              }}
              className="w-full py-4 bg-[#171411] text-white font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{t.nav.orderNow}</span>
              <ArrowRight className="w-4 h-4 text-[#D49B5B]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
