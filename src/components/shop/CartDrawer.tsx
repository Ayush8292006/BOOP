import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle,
  Truck
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartDrawerOpen,
    setCartDrawerOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    freeShippingThreshold,
    freeShippingProgress,
    appliedPromo,
    promoDiscount,
    applyPromoCode,
    removePromoCode,
    setCheckoutModalOpen,
    navigateToShopWithFilter,
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success?: boolean; text?: string } | null>(null);

  if (!cartDrawerOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoFeedback({ success: res.success, text: res.message });
    if (res.success) setPromoInput('');
  };

  const finalTotal = Math.max(0, cartSubtotal - promoDiscount);
  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const remainingForFree = freeShippingThreshold - cartSubtotal;

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setCartDrawerOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FFFAF4] h-full shadow-2xl flex flex-col z-10 border-l border-beige-border animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-caramel" />
            <h3 className="font-display font-bold text-base sm:text-lg text-chocolate">
              Your Shopping Bag
            </h3>
            <span className="text-xs bg-beige px-2 py-0.5 rounded-full text-chocolate font-bold">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>

          <button
            onClick={() => setCartDrawerOpen(false)}
            className="p-1.5 rounded-full hover:bg-beige-light text-chocolate transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-[#F5E9D8]/60 border-b border-beige-border">
          <div className="flex items-center justify-between text-xs text-chocolate font-semibold mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-caramel" />
              {isFreeShipping ? (
                <span className="text-green-700 font-bold">You qualify for FREE Pan-India Delivery! 🎉</span>
              ) : (
                <span>Add ₹{remainingForFree.toLocaleString('en-IN')} more for FREE delivery</span>
              )}
            </span>
            <span className="text-[11px] text-chocolate/60">{freeShippingProgress}%</span>
          </div>
          <div className="w-full h-2 bg-beige rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                isFreeShipping ? 'bg-green-600' : 'bg-caramel'
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-beige/60 flex items-center justify-center text-3xl">
                🛍️
              </div>
              <h4 className="font-display font-bold text-lg text-chocolate">
                Your cart is feeling light!
              </h4>
              <p className="text-xs sm:text-sm text-chocolate/70 max-w-xs leading-relaxed">
                Explore nutritious pet foods, cozy orthopedic beds, and playful interactive toys for your companions.
              </p>
              <button
                onClick={() => {
                  setCartDrawerOpen(false);
                  navigateToShopWithFilter({ pet: 'All' });
                }}
                className="px-6 py-2.5 rounded-full bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light transition-all shadow-md"
              >
                Browse Pet Catalog &rarr;
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 bg-white rounded-2xl border border-beige-border flex gap-3 shadow-sm hover:border-caramel/30 transition-all"
              >
                {/* Thumbnail */}
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-beige-light flex-shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-[10px] text-caramel font-bold uppercase tracking-wider">
                        {item.product.brand}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-chocolate/40 hover:text-red-500 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h5 className="text-xs font-bold text-chocolate truncate mt-0.5" title={item.product.title}>
                      {item.product.title}
                    </h5>

                    <p className="text-xs font-extrabold text-chocolate mt-0.5">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-beige-border rounded-lg bg-beige-light/50 p-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-chocolate hover:bg-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-chocolate">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-chocolate hover:bg-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-bold text-chocolate">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with totals & checkout */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-beige-border bg-white space-y-3">
            
            {/* Promo Code Form */}
            <div>
              {appliedPromo ? (
                <div className="flex items-center justify-between p-2 rounded-xl bg-green-50 border border-green-200 text-xs">
                  <span className="flex items-center gap-1.5 text-green-800 font-semibold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Promo: {appliedPromo}</span>
                  </span>
                  <button
                    onClick={removePromoCode}
                    className="text-red-500 font-bold hover:underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter promo code (e.g. BOOP10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 bg-beige-light border border-beige-border rounded-xl px-3 py-1.5 text-xs text-chocolate uppercase placeholder:normal-case placeholder:text-chocolate/50 focus:outline-none focus:border-caramel"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-chocolate text-beige text-xs font-bold rounded-xl hover:bg-chocolate-light transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {promoFeedback && (
                <p className={`text-[11px] mt-1 ${promoFeedback.success ? 'text-green-600' : 'text-red-600'}`}>
                  {promoFeedback.text}
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-chocolate/80 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-chocolate">
                  ₹{cartSubtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {promoDiscount > 0 && (
                <div className="flex justify-between text-green-700 font-semibold">
                  <span>Discount</span>
                  <span>-₹{promoDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold">
                  {isFreeShipping ? (
                    <span className="text-green-700 font-bold">FREE</span>
                  ) : (
                    '₹99'
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm sm:text-base font-display font-extrabold text-chocolate pt-2 border-t border-beige-border">
                <span>Total Amount</span>
                <span>
                  ₹{(finalTotal + (isFreeShipping ? 0 : 99)).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={() => {
                setCartDrawerOpen(false);
                setCheckoutModalOpen(true);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-chocolate text-beige hover:bg-chocolate-light hover:text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-caramel-light" />
            </button>

            <p className="text-[10px] text-center text-chocolate/50">
              🔒 Safe &amp; Secure Checkout • 100% Genuine Volga Life Guarantee
            </p>

          </div>
        )}

      </div>
    </div>
  );
};
