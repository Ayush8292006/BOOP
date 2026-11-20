import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, ArrowRight, MessageSquareQuote } from 'lucide-react';

export const CollabBanner: React.FC = () => {
  const { setContactModalOpen } = useShop();

  return (
    <section className="py-8 sm:py-12 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Sky/soft cyan tinted banner matching reference with cute dog and cat line art */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#EBF5FB] via-[#F0F8FF] to-[#E8F4F8] border border-[#D0E5F2] p-6 sm:p-10 shadow-sm">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Left cute dog sketch / avatar */}
            <div className="hidden lg:flex flex-col items-center flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-white/80 border border-[#D0E5F2] flex items-center justify-center text-4xl shadow-sm transform -rotate-6">
                🐶
              </div>
              <span className="font-handwriting text-caramel text-xs font-bold mt-1">Hello Pet Friend!</span>
            </div>

            {/* Center Content */}
            <div className="text-center md:text-left space-y-2 max-w-xl">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                For Queries &amp; Collaborations
              </h3>
              <p className="text-xs sm:text-sm text-chocolate/80 leading-relaxed">
                Reach out to us for product enquiries, business collaborations, or partnership opportunities.
              </p>
            </div>

            {/* Right Action & Cat sketch */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-chocolate hover:bg-chocolate-light shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="w-4 h-4 text-beige" />
                <span>Drop Us an Email</span>
                <ArrowRight className="w-4 h-4 text-caramel" />
              </button>

              <div className="hidden lg:flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white/80 border border-[#D0E5F2] flex items-center justify-center text-4xl shadow-sm transform rotate-6">
                  🐱
                </div>
                <span className="font-handwriting text-caramel text-xs font-bold mt-1">Meow &amp; Welcome!</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
