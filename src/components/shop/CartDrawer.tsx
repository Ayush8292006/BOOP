import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Tag,
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
      <div className="relative w-full max-w-md bg-[#FFFAF4] h-full shadow-elevation flex flex-col z-10 border-l border-[#E8DBC9] animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8DBC9] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-caramel" />
            <h3 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
              Shopping Bag
            </h3>
            <span className="text-xs bg-[#F5E9D8] px-2 py-0.5 rounded-full text-chocolate font-bold">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>

          <button
            onClick={() => setCartDrawerOpen(false)}
            className="p-1.5 text-chocolate hover:text-caramel transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-6 py-3.5 bg-white border-b border-[#E8DBC9]">
          <div className="flex items-center justify-between text-xs text-chocolate font-semibold mb-2">
            <span className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-caramel" />
              {isFreeShipping ? (
                <span className="text-chocolate font-bold">Complimentary Pan-India Delivery Unlocked</span>
              ) : (
                <span>Add ₹{remainingForFree.toLocaleString('en-IN')} more for free delivery</span>
              )}
            </span>
            <span className="text-[10px] text-chocolate/50 font-bold">{freeShippingProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#F5E9D8] rounded-full overflow-hidden">
            <div
              className="h-full bg-caramel transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F5E9D8]/50 flex items-center justify-center text-caramel">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
                Your shopping bag is empty
              </h4>
              <p className="text-xs text-chocolate/70 max-w-xs font-light leading-relaxed">
                Discover nutritious pet diets, authentic formulations, and everyday essentials curated for your companion.
              </p>
              <button
                onClick={() => {
                  setCartDrawerOpen(false);
                  navigateToShopWithFilter({ pet: 'All' });
                }}
                className="px-6 py-2.5 rounded-full bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-widest hover:bg-chocolate-hover transition-colors shadow-subtle"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 bg-white rounded-xl border border-[#E8DBC9] flex gap-3 shadow-subtle"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 object-cover rounded-lg bg-[#F5E9D8] flex-shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-[10px] text-caramel font-bold uppercase tracking-widest">
                        {item.product.brand}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-chocolate/40 hover:text-red-600 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h5 className="text-xs font-bold text-chocolate truncate mt-0.5">
                      {item.product.title}
                    </h5>

                    <p className="text-xs font-extrabold text-chocolate mt-0.5">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#E8DBC9] rounded bg-[#FFFAF4] p-0.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-chocolate hover:bg-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-chocolate">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-5 h-5 rounded flex items-center justify-center text-chocolate hover:bg-white"
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

        {/* Footer with checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8DBC9] bg-white space-y-4">
            
            {/* Promo Code Form */}
            <div>
              {appliedPromo ? (
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5E9D8]/50 border border-[#E8DBC9] text-xs">
                  <span className="flex items-center gap-1.5 text-chocolate font-semibold">
                    <Tag className="w-3.5 h-3.5 text-caramel" />
                    <span>Applied: {appliedPromo}</span>
                  </span>
                  <button
                    onClick={removePromoCode}
                    className="text-red-700 font-bold hover:underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Promo code (BOOP10 or LOVEPETS)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 bg-[#FFFAF4] border border-[#E8DBC9] rounded-lg px-3 py-1.5 text-xs text-chocolate uppercase placeholder:normal-case placeholder:text-chocolate/40 focus:outline-none focus:border-caramel"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-chocolate-hover transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {promoFeedback && (
                <p className={`text-[11px] mt-1 ${promoFeedback.success ? 'text-green-700 font-medium' : 'text-red-700'}`}>
                  {promoFeedback.text}
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-chocolate/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-chocolate">
                  ₹{cartSubtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {promoDiscount > 0 && (
                <div className="flex justify-between text-caramel font-semibold">
                  <span>Privilege Discount</span>
                  <span>-₹{promoDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">
                  {isFreeShipping ? (
                    <span className="text-caramel font-bold">COMPLIMENTARY</span>
                  ) : (
                    '₹99'
                  )}
                </span>
              </div>

              <div className="flex justify-between text-base font-display font-extrabold text-chocolate pt-2 border-t border-[#E8DBC9]">
                <span>Total</span>
                <span>
                  ₹{(finalTotal + (isFreeShipping ? 0 : 99)).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                setCartDrawerOpen(false);
                setCheckoutModalOpen(true);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-chocolate text-[#F5E9D8] hover:bg-chocolate-hover hover:text-white font-bold text-xs uppercase tracking-widest shadow-luxury transition-all duration-200"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-caramel" />
            </button>

            <p className="text-[10px] text-center text-chocolate/50 uppercase tracking-wider">
              Encrypted Checkout &bull; Volga Life Biosciences Guarantee
            </p>

          </div>
        )}

      </div>
    </div>
  );
};
