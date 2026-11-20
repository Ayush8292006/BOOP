import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Mail, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';

export const ContactModal: React.FC = () => {
  const { contactModalOpen, setContactModalOpen, showToast } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'product-enquiry',
    message: '',
  });

  if (!contactModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent to Volga Life Biosciences ❤️');
  };

  const handleClose = () => {
    setContactModalOpen(false);
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: 'product-enquiry', message: '' });
  };

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-xl w-full shadow-2xl border border-beige-border overflow-hidden z-10 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-caramel" />
            <h3 className="font-display font-bold text-base sm:text-lg text-chocolate">
              Queries &amp; Collaborations
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
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-3xl shadow-md">
                ✓
              </div>
              <h4 className="font-display font-bold text-xl text-chocolate">
                Thank You for Reaching Out!
              </h4>
              <p className="text-xs sm:text-sm text-chocolate/80 max-w-sm mx-auto leading-relaxed">
                Our pet care &amp; aquatic partnerships team at Volga Life Biosciences will get back to your email within 24 business hours.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2 rounded-full bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-chocolate/80 leading-relaxed">
                Reach out to us for product enquiries, business collaborations, or partnership opportunities.
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-beige-border rounded-xl p-2.5 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-beige-border rounded-xl p-2.5 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                    Subject / Enquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-beige-border rounded-xl p-2.5 text-chocolate focus:outline-none focus:border-caramel"
                  >
                    <option value="product-enquiry">Product Enquiry &amp; Availability</option>
                    <option value="business-collab">Business &amp; Brand Collaboration</option>
                    <option value="aquatic-specialty">Aquatic Systems &amp; Bulk Feeds</option>
                    <option value="general-care">Pet Care &amp; General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-chocolate/70 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you or collaborate?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-beige-border rounded-xl p-2.5 text-chocolate focus:outline-none focus:border-caramel resize-none"
                  />
                </div>
              </div>

              {/* Direct Mailto Fallback */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <a
                  href="mailto:care@boopstore.com?subject=Enquiry%20via%20BOOP%20STORE"
                  className="text-caramel hover:underline font-semibold flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>care@boopstore.com</span>
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-chocolate text-beige hover:bg-chocolate-light font-bold shadow-md transition-all"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 text-caramel-light" />
                </button>
              </div>
            </form>
          )}

          {/* Company attribution footer */}
          <div className="mt-6 pt-4 border-t border-beige-border flex items-center justify-between text-[11px] text-chocolate/60">
            <span>A Unit of Volga Life Biosciences LLP</span>
            <span>Pan-India Pet Parent Support</span>
          </div>

        </div>

      </div>
    </div>
  );
};
