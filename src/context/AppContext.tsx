import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem, CoffeeBean, CartItem, DrinkCustomization, BeanCustomization, ToastMessage, JournalPost, CafeLocation, SpaceGalleryItem, TableReservation, Testimonial } from '../types';
import { Language, Translations, TRANSLATIONS } from '../i18n/translations';

interface AppContextType {
  // Language / i18n
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;

  // Cart
  cart: CartItem[];
  addDrinkToCart: (drink: MenuItem, customization?: Partial<DrinkCustomization>, qty?: number) => void;
  addBeanToCart: (bean: CoffeeBean, customization?: Partial<BeanCustomization>, qty?: number) => void;
  addPastryToCart: (pastry: MenuItem, qty?: number) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  cartSubtotal: number;
  cartCount: number;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (id: string, name?: string) => void;
  isWishlisted: (id: string) => boolean;

  // Modals & Drawers
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  orderModalOpen: boolean;
  setOrderModalOpen: (open: boolean) => void;
  membershipModalOpen: boolean;
  setMembershipModalOpen: (open: boolean) => void;
  reservationModalOpen: boolean;
  setReservationModalOpen: (open: boolean) => void;
  brewCalculatorOpen: boolean;
  setBrewCalculatorOpen: (open: boolean) => void;
  reviewModalOpen: boolean;
  setReviewModalOpen: (open: boolean) => void;
  
  // Customization modals
  selectedDrinkForCustomize: MenuItem | null;
  setSelectedDrinkForCustomize: (drink: MenuItem | null) => void;
  selectedBeanForCustomize: CoffeeBean | null;
  setSelectedBeanForCustomize: (bean: CoffeeBean | null) => void;

  // Detail viewers
  activeArticle: JournalPost | null;
  setActiveArticle: (article: JournalPost | null) => void;
  activeLocation: CafeLocation | null;
  setActiveLocation: (loc: CafeLocation | null) => void;
  activeSpaceItem: SpaceGalleryItem | null;
  setActiveSpaceItem: (item: SpaceGalleryItem | null) => void;

  // User submitted reviews list
  userReviews: Testimonial[];
  addNewReview: (review: Omit<Testimonial, 'id' | 'verified' | 'date'>) => void;

  // Toasts
  toasts: ToastMessage[];
  addToast: (title: string, description?: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('noir_lang');
    return (saved === 'en' || saved === 'vi') ? saved : 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('noir_lang', lang);
  };

  const t = TRANSLATIONS[language];

  const [cart, setCart] = useState<CartItem[]>([
    {
      cartId: 'cart-init-1',
      productId: 'drink-iced-latte',
      name: 'NOIR Velvet Iced Latte',
      type: 'drink',
      unitPrice: 75000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      customizationSummary: 'Regular (350ml) · Whole Milk · 70% Less Sweet',
      drinkCustomization: {
        size: 'Regular (350ml)',
        milk: 'Whole Milk',
        sweetness: '70% Less Sweet',
        ice: 'Regular Ice',
        extraShot: false
      }
    }
  ]);

  const [wishlist, setWishlist] = useState<string[]>(['drink-dirty-coffee', 'bean-dalat']);

  // UI state
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [brewCalculatorOpen, setBrewCalculatorOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const [selectedDrinkForCustomize, setSelectedDrinkForCustomize] = useState<MenuItem | null>(null);
  const [selectedBeanForCustomize, setSelectedBeanForCustomize] = useState<CoffeeBean | null>(null);
  const [activeArticle, setActiveArticle] = useState<JournalPost | null>(null);
  const [activeLocation, setActiveLocation] = useState<CafeLocation | null>(null);
  const [activeSpaceItem, setActiveSpaceItem] = useState<SpaceGalleryItem | null>(null);

  // User submitted reviews state
  const [userReviews, setUserReviews] = useState<Testimonial[]>([]);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleWishlist = (id: string, name?: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        addToast('Đã gỡ khỏi yêu thích', name ? `Đã bỏ "${name}" khỏi danh sách lưu.` : 'Đã gỡ.', 'info');
        return prev.filter((item) => item !== id);
      } else {
        addToast('Đã lưu vào yêu thích', name ? `Đã lưu "${name}" vào mục yêu thích.` : 'Đã lưu.', 'success');
        return [...prev, id];
      }
    });
  };

  const isWishlisted = (id: string) => wishlist.includes(id);

  // Add Drink
  const addDrinkToCart = (drink: MenuItem, custom?: Partial<DrinkCustomization>, qty: number = 1) => {
    const fullCustom: DrinkCustomization = {
      size: custom?.size || 'Regular (350ml)',
      milk: custom?.milk || 'Whole Milk',
      sweetness: custom?.sweetness || '100% Normal',
      ice: custom?.ice || 'Regular Ice',
      extraShot: custom?.extraShot || false,
      notes: custom?.notes
    };

    let price = drink.price;
    if (fullCustom.size.includes('Large')) price += 10000;
    if (fullCustom.milk.includes('+15k')) price += 15000;
    if (fullCustom.extraShot) price += 15000;

    const summaryParts: string[] = [fullCustom.size, fullCustom.milk, fullCustom.sweetness, fullCustom.ice];
    if (fullCustom.extraShot) summaryParts.push('+Extra Shot');

    const newItem: CartItem = {
      cartId: `drink-${drink.id}-${Date.now()}`,
      productId: drink.id,
      name: drink.name,
      type: 'drink',
      unitPrice: price,
      quantity: qty,
      image: drink.image,
      customizationSummary: summaryParts.join(' · '),
      drinkCustomization: fullCustom
    };

    setCart((prev) => [...prev, newItem]);
    addToast('Đã thêm vào giỏ hàng', `${drink.name} (${qty} món) đã được thêm thành công.`, 'success');
  };

  // Add Bean
  const addBeanToCart = (bean: CoffeeBean, custom?: Partial<BeanCustomization>, qty: number = 1) => {
    const fullCustom: BeanCustomization = {
      weight: custom?.weight || '250g',
      grind: custom?.grind || 'Whole Bean (Hạt nguyên bản)'
    };

    let multiplier = 1;
    if (fullCustom.weight === '500g') multiplier = 1.9;
    if (fullCustom.weight.includes('1kg')) multiplier = 3.6;

    const price = Math.round(bean.price * multiplier);

    const newItem: CartItem = {
      cartId: `bean-${bean.id}-${Date.now()}`,
      productId: bean.id,
      name: bean.name,
      type: 'bean',
      unitPrice: price,
      quantity: qty,
      image: bean.image,
      customizationSummary: `${fullCustom.weight} · ${fullCustom.grind}`,
      beanCustomization: fullCustom
    };

    setCart((prev) => [...prev, newItem]);
    addToast('Đã thêm hạt cà phê', `${bean.name} (${fullCustom.weight}) đã có trong giỏ hàng.`, 'success');
  };

  // Add Pastry
  const addPastryToCart = (pastry: MenuItem, qty: number = 1) => {
    const newItem: CartItem = {
      cartId: `pastry-${pastry.id}-${Date.now()}`,
      productId: pastry.id,
      name: pastry.name,
      type: 'pastry',
      unitPrice: pastry.price,
      quantity: qty,
      image: pastry.image,
      customizationSummary: 'Bánh nướng nóng giòn mỗi sáng',
    };
    setCart((prev) => [...prev, newItem]);
    addToast('Đã thêm bánh ngọt', `${pastry.name} (${qty} cái) đã có trong túi cà phê.`, 'success');
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
    addToast('Đã xóa món', 'Sản phẩm đã được xóa khỏi giỏ hàng.', 'info');
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const addNewReview = (reviewData: Omit<Testimonial, 'id' | 'verified' | 'date'>) => {
    const newRev: Testimonial = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      verified: true,
      date: 'Hôm nay'
    };
    setUserReviews((prev) => [newRev, ...prev]);
    addToast('Cảm ơn bạn đã đánh giá!', 'Đánh giá 5 sao của bạn đã được đăng tải và mã voucher 10% đã gửi vào tài khoản.', 'success');
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        cart,
        addDrinkToCart,
        addBeanToCart,
        addPastryToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartCount,
        wishlist,
        toggleWishlist,
        isWishlisted,
        cartDrawerOpen,
        setCartDrawerOpen,
        searchOpen,
        setSearchOpen,
        orderModalOpen,
        setOrderModalOpen,
        membershipModalOpen,
        setMembershipModalOpen,
        reservationModalOpen,
        setReservationModalOpen,
        brewCalculatorOpen,
        setBrewCalculatorOpen,
        reviewModalOpen,
        setReviewModalOpen,
        selectedDrinkForCustomize,
        setSelectedDrinkForCustomize,
        selectedBeanForCustomize,
        setSelectedBeanForCustomize,
        activeArticle,
        setActiveArticle,
        activeLocation,
        setActiveLocation,
        activeSpaceItem,
        setActiveSpaceItem,
        userReviews,
        addNewReview,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
