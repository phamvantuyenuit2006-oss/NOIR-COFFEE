import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Tag, Sparkles, QrCode, CreditCard, Wallet, Banknote } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cartDrawerOpen, setCartDrawerOpen, cart, updateQuantity, removeFromCart, clearCart, cartSubtotal, cartCount, addToast, language } = useApp();
  const isEn = language === 'en';
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'vietqr' | 'momo' | 'card' | 'cod'>('vietqr');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!cartDrawerOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'NOIR2026' || promoCode.toUpperCase() === 'WELCOME10') {
      setDiscount(15);
      addToast(
        isEn ? 'Promo applied successfully!' : 'Áp dụng mã thành công!',
        isEn ? 'You received a 15% discount for your order.' : 'Bạn được giảm 15% cho đơn hàng cà phê hôm nay.',
        'success'
      );
    } else {
      addToast(
        isEn ? 'Invalid Promo Code' : 'Mã không khả dụng',
        isEn ? 'Try using code "NOIR2026" for 15% off.' : 'Hãy thử mã "NOIR2026" để nhận ưu đãi 15%.',
        'warning'
      );
    }
  };

  const discountAmount = (cartSubtotal * discount) / 100;
  const deliveryFee = cartSubtotal >= 150000 || cartSubtotal === 0 ? 0 : 25000;
  const finalTotal = cartSubtotal - discountAmount + deliveryFee;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      setCartDrawerOpen(false);
      addToast(
        isEn ? 'Order Placed Successfully!' : 'Đặt hàng thành công!',
        isEn
          ? `Order #NOIR-${Math.floor(1000 + Math.random() * 9000)}. Payment: ${paymentMethod.toUpperCase()}. Baristas are preparing your specialty coffee.`
          : `Mã đơn #NOIR-${Math.floor(1000 + Math.random() * 9000)}. Phương thức: ${paymentMethod.toUpperCase()}. Barista đang chuẩn bị cà phê cho bạn.`,
        'success'
      );
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full bg-[#FAF9F6] text-[#171411] border-l border-stone-300 p-6 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#B9824A]/15 text-[#5A3E2B] flex items-center justify-center border border-[#B9824A]/30">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 tracking-wide">
                {isEn ? 'Your Coffee Bag' : 'Túi Cà Phê Của Bạn'}
              </h3>
              <p className="text-xs text-stone-500">
                {isEn ? `${cartCount} items awaiting enjoyment` : `${cartCount} món đang chờ thưởng thức`}
              </p>
            </div>
          </div>

          <button
            onClick={() => setCartDrawerOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto py-5 space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-stone-400" />
              </div>
              <div>
                <p className="font-serif text-base text-stone-900 font-bold">
                  {isEn ? 'Your bag is currently empty' : 'Túi cà phê của bạn đang trống'}
                </p>
                <p className="text-xs mt-1 text-stone-500 max-w-[240px]">
                  {isEn 
                    ? 'Explore our signature crafted drinks or freshly roasted specialty bean lots.'
                    : 'Hãy chọn cho mình một ly Signature thơm ngon hoặc mẻ hạt rang mộc đặc sản.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setCartDrawerOpen(false);
                  document.getElementById('signature-menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full bg-[#171411] hover:bg-[#9E472A] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                {isEn ? 'Browse Signature Menu' : 'Khám Phá Menu Ngay'}
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cartId}
                className="flex gap-3 p-3.5 bg-white border border-stone-200 rounded-2xl hover:border-[#B9824A]/60 transition-colors shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl bg-stone-100 border border-stone-200 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#9E472A] uppercase tracking-wider block">
                    {item.type === 'drink' 
                      ? (isEn ? 'Specialty Drink' : 'Thức Uống') 
                      : item.type === 'pastry' 
                        ? (isEn ? 'Fresh Bakery' : 'Bánh Ngọt') 
                        : (isEn ? 'Whole Beans' : 'Hạt Đặc Sản')}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-stone-900 truncate">{item.name}</h4>
                  <p className="text-[11px] text-stone-500 truncate mt-0.5">{item.customizationSummary}</p>
                  <p className="text-xs font-bold text-[#171411] font-mono mt-1">
                    {(item.unitPrice * item.quantity).toLocaleString('vi-VN')} ₫
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-stone-400 hover:text-red-500 p-1 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1.5 bg-stone-100 border border-stone-200 rounded-lg p-0.5">
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                      className="p-1 hover:bg-stone-200 text-stone-600 rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-stone-900 px-1.5 font-mono">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                      className="p-1 hover:bg-stone-200 text-stone-600 rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-stone-200 space-y-4">
            {/* Promo */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-2.5 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={isEn ? 'Promo code (e.g. NOIR2026)' : 'Mã ưu đãi (VD: NOIR2026)'}
                  className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 uppercase placeholder-stone-400 focus:outline-none focus:border-[#B9824A]"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-xs font-semibold text-stone-800 rounded-xl transition-colors shrink-0"
              >
                {isEn ? 'Apply' : 'Áp dụng'}
              </button>
            </form>

            {/* Payment Method Selector */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1.5">
                {isEn ? 'Payment Method' : 'Phương Thức Thanh Toán'}
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: 'vietqr', label: 'VietQR', icon: QrCode },
                  { id: 'momo', label: 'MoMo', icon: Wallet },
                  { id: 'card', label: isEn ? 'Card' : 'Thẻ Visa', icon: CreditCard },
                  { id: 'cod', label: isEn ? 'Cash' : 'Tiền mặt', icon: Banknote },
                ].map((pm) => {
                  const Icon = pm.icon;
                  const isSelected = paymentMethod === pm.id;
                  return (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`p-2 rounded-xl border text-center flex flex-col items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#171411] text-white border-[#171411] shadow-sm'
                          : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 mb-0.5" />
                      <span className="text-[10px] font-bold">{pm.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex justify-between">
                <span>{isEn ? `Subtotal (${cartCount} items)` : `Tạm tính (${cartCount} món)`}</span>
                <span className="text-stone-900 font-semibold">{cartSubtotal.toLocaleString('vi-VN')} ₫</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>{isEn ? `Discount voucher (${discount}%)` : `Giảm giá voucher (${discount}%)`}</span>
                  <span>-{discountAmount.toLocaleString('vi-VN')} ₫</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>{isEn ? 'Delivery Fee' : 'Phí giao hàng'}</span>
                <span className={deliveryFee === 0 ? 'text-emerald-600 font-semibold' : 'text-stone-900 font-semibold'}>
                  {deliveryFee === 0 ? (isEn ? 'Free (> 150k)' : 'Miễn phí (Đơn > 150k)') : `${deliveryFee.toLocaleString('vi-VN')} ₫`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-100">
                <span className="font-serif">{isEn ? 'Total Payment' : 'Tổng thanh toán'}</span>
                <span className="text-base text-[#9E472A] font-mono">{finalTotal.toLocaleString('vi-VN')} ₫</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 bg-[#171411] hover:bg-[#B9824A] text-white hover:text-[#171411] font-bold text-xs uppercase tracking-widest rounded-full shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
            >
              {isCheckingOut ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{isEn ? 'Confirm & Pay' : 'Xác Nhận & Thanh Toán'} • {finalTotal.toLocaleString('vi-VN')} ₫</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
