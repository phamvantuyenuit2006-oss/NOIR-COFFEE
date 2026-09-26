import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SIGNATURE_DRINKS, COFFEE_BEANS } from '../data/mockData';
import { 
  Send, 
  X, 
  Sparkles, 
  Coffee, 
  Flame, 
  Calendar, 
  Phone, 
  ArrowRight, 
  Bot, 
  ShoppingBag,
  Minimize2,
  ChevronDown
} from 'lucide-react';
import { MenuItem, CoffeeBean } from '../types';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  suggestedProduct?: MenuItem | CoffeeBean;
  productType?: 'drink' | 'bean';
  quickActions?: { label: string; action: string }[];
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-welcome-1',
    sender: 'bot',
    text: 'Xin chào! Tôi là **NOIR Barista AI** — trợ lý tư vấn hương vị cà phê và chăm sóc khách hàng.',
    time: 'Vừa xong'
  },
  {
    id: 'msg-welcome-2',
    sender: 'bot',
    text: 'Bạn muốn tìm món thức uống theo gu vị nào, chọn hạt pha tại nhà hay đặt bàn trước?',
    time: 'Vừa xong',
    quickActions: [
      { label: '☕ Món bán chạy nhất', action: 'recommend_bestseller' },
      { label: '🌿 Hạt pha V60 / Pour Over', action: 'recommend_v60' },
      { label: '🪑 Đặt bàn giữ chỗ', action: 'open_reservation' },
      { label: '📞 Hotline 0916 323 701', action: 'call_hotline' }
    ]
  }
];

export const Chatbot: React.FC = () => {
  const { 
    addDrinkToCart, 
    setSelectedDrinkForCustomize, 
    setSelectedBeanForCustomize, 
    setReservationModalOpen, 
    setOrderModalOpen, 
    setCartDrawerOpen,
    addToast,
    language,
    t
  } = useApp();

  const isEn = language === 'en';

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg-welcome-1',
      sender: 'bot',
      text: t.chatbot.welcome1,
      time: isEn ? 'Just now' : 'Vừa xong'
    },
    {
      id: 'msg-welcome-2',
      sender: 'bot',
      text: t.chatbot.welcome2,
      time: isEn ? 'Just now' : 'Vừa xong',
      quickActions: [
        { label: t.chatbot.chipBestseller, action: 'recommend_bestseller' },
        { label: t.chatbot.chipV60, action: 'recommend_v60' },
        { label: t.chatbot.chipBooking, action: 'open_reservation' },
        { label: '📞 Hotline 0916 323 701', action: 'call_hotline' }
      ]
    }
  ]);

  // Update initial welcome messages when language switches if no user message yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 2 && prev.every(m => m.sender === 'bot')) {
        return [
          {
            id: 'msg-welcome-1',
            sender: 'bot',
            text: t.chatbot.welcome1,
            time: isEn ? 'Just now' : 'Vừa xong'
          },
          {
            id: 'msg-welcome-2',
            sender: 'bot',
            text: t.chatbot.welcome2,
            time: isEn ? 'Just now' : 'Vừa xong',
            quickActions: [
              { label: t.chatbot.chipBestseller, action: 'recommend_bestseller' },
              { label: t.chatbot.chipV60, action: 'recommend_v60' },
              { label: t.chatbot.chipBooking, action: 'open_reservation' },
              { label: '📞 Hotline 0916 323 701', action: 'call_hotline' }
            ]
          }
        ];
      }
      return prev;
    });
  }, [language, t]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      generateBotResponse(text);
      setIsTyping(false);
    }, 600);
  };

  const generateBotResponse = (query: string) => {
    const q = query.toLowerCase();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Best seller drink
    if (q.includes('bán chạy') || q.includes('best seller') || q.includes('ngon nhất') || q.includes('recommend_bestseller') || q.includes('best-seller') || q.includes('popular')) {
      const latte = SIGNATURE_DRINKS.find((d) => d.id === 'drink-iced-latte') || SIGNATURE_DRINKS[0];
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: isEn 
            ? `Our most-loved specialty drink is **${latte.name}** (${latte.priceFormatted}). Silky fresh milk infused with smooth hazelnut chocolate notes!`
            : `Món được yêu thích nhất là **${latte.name}** (${latte.priceFormatted}). Hương vị sô cô la hạt phỉ béo nhẹ và sữa tươi thanh mát!`,
          time: now,
          suggestedProduct: latte,
          productType: 'drink',
          quickActions: [
            { label: isEn ? 'Add to cart' : 'Thêm vào giỏ hàng', action: 'add_latte' },
            { label: isEn ? 'View Dirty Coffee' : 'Xem Dirty Coffee', action: 'show_dirty' },
            { label: isEn ? 'Full Menu' : 'Toàn bộ Menu', action: 'open_order' }
          ]
        }
      ]);
      return;
    }

    // 2. V60 or Beans
    if (q.includes('v60') || q.includes('hạt') || q.includes('bean') || q.includes('pour over') || q.includes('recommend_v60')) {
      const bean = COFFEE_BEANS.find((b) => b.id === 'bean-ethiopia') || COFFEE_BEANS[0];
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: isEn
            ? `For V60 or Cold Drip, we recommend **${bean.name}** (SCA 88+). Elegant jasmine florals, wild berries, and bergamot citrus notes!`
            : `Pha V60 hoặc Cold Drip nên chọn dòng **${bean.name}** (SCA 88+). Nốt hương hoa nhài, quả mọng dại và cam bergamot thanh tao!`,
          time: now,
          suggestedProduct: bean,
          productType: 'bean',
          quickActions: [
            { label: isEn ? 'Choose grind & Buy' : 'Chọn mức xay & Mua', action: 'customize_ethiopia' },
            { label: isEn ? 'Cau Dat Heritage' : 'Hạt Cầu Đất Heritage', action: 'show_dalat' }
          ]
        }
      ]);
      return;
    }

    // 3. Dirty Coffee
    if (q.includes('dirty') || q.includes('show_dirty')) {
      const dirty = SIGNATURE_DRINKS.find((d) => d.id === 'drink-dirty-coffee') || SIGNATURE_DRINKS[1];
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: isEn
            ? `**${dirty.name}** features a hot Ristretto shot poured directly over rich chilled Hokkaido milk. A thrilling thermal contrast!`
            : `**${dirty.name}** gồm shot Ristretto nóng rót trên bề mặt sữa lạnh béo ngậy Hokkaido. Trải nghiệm tầng nhiệt độ độc đáo!`,
          time: now,
          suggestedProduct: dirty,
          productType: 'drink',
          quickActions: [
            { label: isEn ? 'Customize & Order' : 'Tùy chỉnh & Đặt món', action: 'customize_dirty' }
          ]
        }
      ]);
      return;
    }

    // 4. Reservation
    if (q.includes('đặt bàn') || q.includes('chỗ') || q.includes('bàn') || q.includes('reserve') || q.includes('table') || q.includes('booking') || q.includes('open_reservation')) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: isEn
            ? 'NOIR operates 3 flagship roasteries with skylight courtyards and quiet work nooks in District 1, Thao Dien, and Phu Nhuan.'
            : 'NOIR có 3 chi nhánh với sân vườn giếng trời và bàn làm việc yên tĩnh tại Quận 1, Thảo Điền và Phú Nhuận.',
          time: now,
          quickActions: [
            { label: isEn ? '🪑 Open Booking Form' : '🪑 Mở Form Giữ Chỗ', action: 'trigger_reservation_modal' },
            { label: '📞 Hotline 0916 323 701', action: 'call_hotline' }
          ]
        }
      ]);
      return;
    }

    // 5. Delivery & Shipping
    if (q.includes('giao hàng') || q.includes('ship') || q.includes('thời gian') || q.includes('bao lâu') || q.includes('deliver') || q.includes('shipping') || q.includes('time')) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: isEn
            ? '⚡ **Express 25-minute delivery** across central HCMC. Drinks are insulated and packed with separate ice bags to guarantee taste!'
            : '⚡ **Giao hỏa tốc 25 phút** nội thành TP.HCM. Đồ uống được giữ lạnh bằng túi bảo ôn và đóng đá riêng biệt!',
          time: now,
          quickActions: [
            { label: isEn ? '🛒 Order for Delivery' : '🛒 Đặt Đồ Uống Giao Ngay', action: 'open_order' }
          ]
        }
      ]);
      return;
    }

    // 6. Contact / Hotline
    if (q.includes('hotline') || q.includes('sđt') || q.includes('liên hệ') || q.includes('call') || q.includes('email') || q.includes('contact') || q.includes('phone') || q.includes('call_hotline')) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: isEn
            ? '📞 **Hotline:** 0916 323 701 (07:00 – 22:30)\n✉️ **Email:** phamvantuyenuit2006@gmail.com\n📍 **Flagship:** 42 Dong Khoi, District 1, HCMC'
            : '📞 **Hotline:** 0916 323 701 (07:00 – 22:30)\n✉️ **Email:** phamvantuyenuit2006@gmail.com\n📍 **Flagship:** 42 Đồng Khởi, Quận 1',
          time: now,
          quickActions: [
            { label: isEn ? 'Call Hotline' : 'Bấm gọi ngay', action: 'direct_phone' },
            { label: isEn ? 'Send Email' : 'Gửi Email', action: 'direct_mail' }
          ]
        }
      ]);
      return;
    }

    // Fallback response
    setMessages((prev) => [
      ...prev,
      {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isEn
          ? 'I can assist you with beverage recommendations, whole bean selection, brewing guides, or table reservations.'
          : `Tôi có thể hỗ trợ bạn gợi ý món ngon, tư vấn hạt cà phê, hướng dẫn pha chế hoặc đặt bàn trước.`,
        time: now,
        quickActions: [
          { label: isEn ? '☕ View Menu' : '☕ Xem Menu Thức Uống', action: 'open_order' },
          { label: isEn ? '📦 Fresh Beans' : '📦 Xem Hạt Rang Mới', action: 'scroll_beans' },
          { label: '📞 Hotline 0916 323 701', action: 'call_hotline' }
        ]
      }
    ]);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'recommend_bestseller') {
      handleSendMessage(isEn ? 'Best-selling coffee drinks' : 'Món cà phê bán chạy nhất');
    } else if (action === 'recommend_v60') {
      handleSendMessage(isEn ? 'Recommend whole beans for V60' : 'Tư vấn hạt cà phê pha V60');
    } else if (action === 'open_reservation' || action === 'trigger_reservation_modal') {
      setIsOpen(false);
      setReservationModalOpen(true);
    } else if (action === 'call_hotline' || action === 'direct_phone') {
      window.location.href = 'tel:0916323701';
    } else if (action === 'direct_mail') {
      window.location.href = 'mailto:phamvantuyenuit2006@gmail.com';
    } else if (action === 'open_order') {
      setIsOpen(false);
      setOrderModalOpen(true);
    } else if (action === 'add_latte') {
      const latte = SIGNATURE_DRINKS.find((d) => d.id === 'drink-iced-latte') || SIGNATURE_DRINKS[0];
      addDrinkToCart(latte, {}, 1);
      setCartDrawerOpen(true);
    } else if (action === 'show_dirty') {
      handleSendMessage(isEn ? 'Tell me about Dirty Coffee' : 'Giới thiệu món Dirty Coffee');
    } else if (action === 'customize_dirty') {
      const dirty = SIGNATURE_DRINKS.find((d) => d.id === 'drink-dirty-coffee');
      if (dirty) {
        setIsOpen(false);
        setSelectedDrinkForCustomize(dirty);
      }
    } else if (action === 'customize_ethiopia') {
      const bean = COFFEE_BEANS.find((b) => b.id === 'bean-ethiopia');
      if (bean) {
        setIsOpen(false);
        setSelectedBeanForCustomize(bean);
      }
    } else if (action === 'show_dalat') {
      handleSendMessage(isEn ? 'Tell me about Cau Dat beans' : 'Giới thiệu hạt Cầu Đất');
    } else if (action === 'scroll_beans') {
      setIsOpen(false);
      document.getElementById('coffee-beans')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sleek Minimalist Trigger Pill Button */}
      <div className="fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2 px-3 py-2 rounded-full bg-[#171411]/95 hover:bg-[#171411] text-white shadow-xl shadow-stone-900/15 border border-stone-700/60 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:border-[#D49B5B]/50"
          >
            {/* Pulsing online status indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>

            <Coffee className="w-3.5 h-3.5 text-[#D49B5B]" />
            <span className="text-[11px] font-bold tracking-wide text-stone-100">
              {t.chatbot.triggerText}
            </span>

            {unreadCount > 0 && (
              <span className="w-3.5 h-3.5 rounded-full bg-[#9E472A] text-white text-[8px] font-bold flex items-center justify-center font-mono">
                {unreadCount}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Ultra-Compact & Elegant Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:right-5 z-50 w-[calc(100vw-2rem)] sm:w-[360px] h-[490px] max-h-[82vh] bg-[#FAF8F5] text-[#171411] rounded-[1.75rem] shadow-2xl shadow-stone-900/25 border border-stone-300/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-2xl">
          
          {/* Sleek Header */}
          <div className="bg-[#171411] text-white px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-7 h-7 rounded-full bg-[#D49B5B]/20 border border-[#D49B5B]/40 flex items-center justify-center">
                  <Coffee className="w-3.5 h-3.5 text-[#D49B5B]" />
                </div>
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-[#171411]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <h4 className="font-serif font-bold text-xs text-white">{t.chatbot.botName}</h4>
                  <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#D49B5B]/20 text-[#D49B5B] font-bold">
                    {t.chatbot.online}
                  </span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono mt-0.5 block">
                  {t.chatbot.hotline}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs scrollbar-thin">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-0.5`}
                >
                  <div className="flex items-center gap-1 text-[9px] text-stone-500 px-1">
                    <span>{isBot ? t.chatbot.triggerText : t.chatbot.you}</span>
                    <span>•</span>
                    <span>{msg.time}</span>
                  </div>

                  <div
                    className={`max-w-[88%] p-3 rounded-2xl ${
                      isBot
                        ? 'bg-white border border-stone-200/90 text-stone-800 shadow-sm rounded-tl-sm leading-relaxed'
                        : 'bg-[#171411] text-white shadow-sm rounded-tr-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line text-[11.5px] leading-relaxed">{msg.text}</p>

                    {/* Compact Product Card */}
                    {msg.suggestedProduct && (
                      <div className="mt-2.5 p-2 bg-[#FAF8F5] border border-stone-200 rounded-xl flex items-center gap-2.5">
                        <img
                          src={msg.suggestedProduct.image}
                          alt={msg.suggestedProduct.name}
                          className="w-10 h-10 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-serif font-bold text-[11px] text-stone-900 truncate">
                            {msg.suggestedProduct.name}
                          </h5>
                          <span className="font-bold text-[11px] text-[#9E472A] font-mono block">
                            {msg.suggestedProduct.priceFormatted}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Quick Action Chips inside bubble */}
                    {msg.quickActions && msg.quickActions.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-1">
                        {msg.quickActions.map((qa, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleQuickAction(qa.action)}
                            className="px-2 py-1 rounded-md bg-stone-100 hover:bg-[#171411] hover:text-white text-[10px] font-semibold text-stone-700 transition-colors border border-stone-200/80"
                          >
                            {qa.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-stone-500 text-[10px] px-1 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9E472A] animate-ping" />
                <span>{t.chatbot.typing}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips above input */}
          <div className="px-3 py-1.5 bg-stone-100/90 border-t border-stone-200 overflow-x-auto flex items-center gap-1.5 scrollbar-none shrink-0">
            <button
              onClick={() => handleSendMessage(isEn ? 'Best-selling coffee' : 'Món cà phê bán chạy nhất')}
              className="px-2 py-0.5 rounded-full bg-white border border-stone-300 text-[9.5px] font-medium text-stone-700 whitespace-nowrap hover:bg-[#171411] hover:text-white transition-colors shrink-0"
            >
              {t.chatbot.chipBestseller}
            </button>
            <button
              onClick={() => handleSendMessage(isEn ? 'Recommend whole beans for V60' : 'Tư vấn hạt pha V60')}
              className="px-2 py-0.5 rounded-full bg-white border border-stone-300 text-[9.5px] font-medium text-stone-700 whitespace-nowrap hover:bg-[#171411] hover:text-white transition-colors shrink-0"
            >
              {t.chatbot.chipV60}
            </button>
            <button
              onClick={() => handleSendMessage(isEn ? 'How long does delivery take?' : 'Giao hàng mất bao lâu?')}
              className="px-2 py-0.5 rounded-full bg-white border border-stone-300 text-[9.5px] font-medium text-stone-700 whitespace-nowrap hover:bg-[#171411] hover:text-white transition-colors shrink-0"
            >
              {t.chatbot.chipDelivery}
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-1.5 shrink-0"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t.chatbot.inputPlaceholder}
              className="flex-1 px-3 py-2 bg-[#FAF8F5] border border-stone-300/90 rounded-full text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#9E472A]"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-2 rounded-full bg-[#171411] hover:bg-[#9E472A] text-white disabled:opacity-40 transition-colors shadow-sm shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
