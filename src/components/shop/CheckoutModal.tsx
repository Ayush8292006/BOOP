import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ShieldCheck, Truck, ArrowRight, Check } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    checkoutModalOpen,
    setCheckoutModalOpen,
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
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-2xl w-full shadow-elevation border border-[#E8DBC9] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8DBC9] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-caramel" />
            <h3 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
              {step === 'details' ? 'Secure Checkout' : 'Order Placed'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded text-chocolate hover:text-caramel transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {step === 'details' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-caramel" />
                  <span>Delivery Details</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-white border border-[#E8DBC9] rounded-lg px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E8DBC9] rounded-lg px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-[#E8DBC9] rounded-lg px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-[#E8DBC9] rounded-lg px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-white border border-[#E8DBC9] rounded-lg px-3 py-2 text-chocolate focus:outline-none focus:border-caramel"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method simulation */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                  Payment Method
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'upi', label: 'UPI / QR' },
                    { id: 'card', label: 'Credit Card' },
                    { id: 'cod', label: 'Cash on Delivery' },
                  ].map((pm) => (
                    <label
                      key={pm.id}
                      className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                        formData.paymentMethod === pm.id
                          ? 'bg-chocolate text-[#F5E9D8] border-chocolate shadow-subtle'
                          : 'bg-white border-[#E8DBC9] text-chocolate hover:border-caramel'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        checked={formData.paymentMethod === pm.id}
                        onChange={() => setFormData({ ...formData, paymentMethod: pm.id })}
                        className="sr-only"
                      />
                      <div className="text-xs font-bold uppercase tracking-wider">{pm.label}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Total & Action */}
              <div className="pt-4 border-t border-[#E8DBC9] flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase font-bold text-chocolate/50 tracking-wider">Total Amount</p>
                  <p className="font-display font-black text-xl text-chocolate">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-chocolate text-[#F5E9D8] hover:bg-chocolate-hover font-bold text-xs uppercase tracking-widest shadow-luxury transition-all"
                >
                  <span>Confirm Order</span>
                  <ArrowRight className="w-4 h-4 text-caramel" />
                </button>
              </div>

            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F5E9D8] text-chocolate flex items-center justify-center mx-auto shadow-subtle">
                <Check className="w-7 h-7 text-caramel" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-chocolate">
                Order Confirmed
              </h3>

              <p className="text-sm text-chocolate/80 max-w-md mx-auto font-light leading-relaxed">
                Order <span className="font-bold text-chocolate">#BP-{Math.floor(100000 + Math.random() * 900000)}</span> has been placed. A confirmation email has been dispatched to {formData.email}.
              </p>

              <div className="p-4 bg-white rounded-xl border border-[#E8DBC9] max-w-md mx-auto text-left text-xs space-y-1.5 shadow-subtle">
                <p><strong className="text-chocolate">Recipient:</strong> {formData.fullName}</p>
                <p><strong className="text-chocolate">Destination:</strong> {formData.address}, {formData.city} - {formData.pincode}</p>
                <p><strong className="text-chocolate">Logistics:</strong> Volga Life Pan-India Delivery</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-wider hover:bg-chocolate-hover transition-colors shadow-subtle"
                >
                  Return to Store
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
