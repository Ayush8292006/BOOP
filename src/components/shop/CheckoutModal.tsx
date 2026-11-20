import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, CheckCircle, Truck, ShieldCheck, ArrowRight, Heart } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    checkoutModalOpen,
    setCheckoutModalOpen,
    cart,
    clearCart,
    cartSubtotal,
    promoDiscount,
    freeShippingThreshold,
    userPets,
  } = useShop();

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: 'Rahul Sharma',
    phone: '+91 98765 43210',
    email: 'rahul.petparent@gmail.com',
    address: 'B-402, Green Glen Layout, Bellandur',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560103',
    petName: userPets[0]?.name || 'Simba',
    paymentMethod: 'upi',
  });

  if (!checkoutModalOpen) return null;

  const isFreeShipping = cartSubtotal >= freeShippingThreshold;
  const shippingFee = isFreeShipping ? 0 : 99;
  const finalTotal = Math.max(0, cartSubtotal - promoDiscount) + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  const handleClose = () => {
    setCheckoutModalOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Dialog */}
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-2xl w-full shadow-2xl border border-beige-border overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-caramel" />
            <h3 className="font-display font-bold text-base sm:text-lg text-chocolate">
              {step === 'details' ? 'Secure Checkout' : 'Order Placed with Love!'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-beige-light text-chocolate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 'details' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Pet Parent Delivery Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-chocolate uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-caramel" />
                  <span>1. Delivery Destination</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-beige-border rounded-xl px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-beige-border rounded-xl px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-beige-border rounded-xl px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-beige-border rounded-xl px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-white border border-beige-border rounded-xl px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                </div>
              </div>

              {/* Dedicated Pet Name Note */}
              <div className="p-3 bg-beige/50 rounded-2xl border border-beige-border flex items-center justify-between text-xs">
                <span className="text-chocolate font-medium">Ordering treats &amp; care for:</span>
                <span className="font-bold text-chocolate bg-white px-3 py-1 rounded-full shadow-sm">
                  🐾 {formData.petName}
                </span>
              </div>

              {/* Payment Method simulation */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-chocolate uppercase tracking-wider">
                  2. Select Payment Method (Mock Frontend)
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'upi', label: 'UPI / QR', icon: '📱' },
                    { id: 'card', label: 'Credit/Debit', icon: '💳' },
                    { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                  ].map((pm) => (
                    <label
                      key={pm.id}
                      className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
                        formData.paymentMethod === pm.id
                          ? 'bg-chocolate text-beige border-chocolate shadow-sm'
                          : 'bg-white border-beige-border text-chocolate hover:bg-beige-light'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        checked={formData.paymentMethod === pm.id}
                        onChange={() => setFormData({ ...formData, paymentMethod: pm.id })}
                        className="sr-only"
                      />
                      <div className="text-lg">{pm.icon}</div>
                      <div className="text-xs font-bold mt-1">{pm.label}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary and Complete */}
              <div className="pt-4 border-t border-beige-border flex items-center justify-between">
                <div>
                  <p className="text-xs text-chocolate/60">Grand Total to Pay</p>
                  <p className="font-display font-black text-xl text-chocolate">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-chocolate text-beige hover:bg-chocolate-light font-bold text-sm shadow-xl transition-all"
                >
                  <span>Place Mock Order</span>
                  <ArrowRight className="w-4 h-4 text-caramel-light" />
                </button>
              </div>

            </form>
          ) : (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-lg text-4xl">
                ❤️
              </div>

              <h3 className="font-display font-extrabold text-2xl text-chocolate">
                Thank You, Pet Parent!
              </h3>

              <p className="text-sm text-chocolate/80 max-w-md mx-auto leading-relaxed">
                Your mock order <span className="font-bold text-chocolate">#BOOP-{Math.floor(100000 + Math.random() * 900000)}</span> has been received with a little boop &amp; a lot of love!
              </p>

              <div className="p-4 bg-white rounded-2xl border border-beige-border max-w-md mx-auto text-left text-xs space-y-1.5 shadow-sm">
                <p><strong className="text-chocolate">Recipient:</strong> {formData.fullName}</p>
                <p><strong className="text-chocolate">Address:</strong> {formData.address}, {formData.city} - {formData.pincode}</p>
                <p><strong className="text-chocolate">Estimated Delivery:</strong> Within 2-3 Business Days (Pan India)</p>
                <p><strong className="text-chocolate">Dispatch Partner:</strong> Volga Life Logistics</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light transition-all shadow-md"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
