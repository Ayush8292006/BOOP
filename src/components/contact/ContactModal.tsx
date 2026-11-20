import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Mail, Send } from 'lucide-react';

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
    showToast('Your message has been dispatched to Volga Life Biosciences');
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

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-xl w-full shadow-elevation border border-[#E8DBC9] overflow-hidden z-10 flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8DBC9] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-caramel" />
            <h3 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
              Queries &amp; Collaborations
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
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <h4 className="font-display font-bold text-xl text-chocolate">
                Thank You for Reaching Out
              </h4>
              <p className="text-xs sm:text-sm text-chocolate/80 max-w-sm mx-auto font-light leading-relaxed">
                Our pet care &amp; aquatic partnerships team at Volga Life Biosciences will get back to your inquiry within 24 business hours.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-wider hover:bg-chocolate-hover transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-chocolate/75 leading-relaxed font-light">
                Reach out to us for product enquiries, business collaborations, or partnership opportunities.
              </p>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#E8DBC9] rounded-lg p-2.5 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#E8DBC9] rounded-lg p-2.5 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-[#E8DBC9] rounded-lg p-2.5 text-chocolate focus:outline-none focus:border-caramel cursor-pointer"
                  >
                    <option value="product-enquiry">Product Enquiry &amp; Availability</option>
                    <option value="business-collab">Business &amp; Brand Collaboration</option>
                    <option value="aquatic-specialty">Aquatic Systems &amp; Feeds</option>
                    <option value="general-care">General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you or collaborate?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#E8DBC9] rounded-lg p-2.5 text-chocolate focus:outline-none focus:border-caramel resize-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <a
                  href="mailto:care@boopstore.com"
                  className="text-caramel hover:underline font-semibold flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>care@boopstore.com</span>
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-chocolate text-[#F5E9D8] hover:bg-chocolate-hover text-xs font-bold uppercase tracking-wider shadow-subtle transition-all"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 text-caramel" />
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-[#E8DBC9] flex items-center justify-between text-[11px] text-chocolate/50 uppercase tracking-wider">
            <span>Volga Life Biosciences LLP</span>
            <span>Commercial Partnerships</span>
          </div>

        </div>

      </div>
    </div>
  );
};
