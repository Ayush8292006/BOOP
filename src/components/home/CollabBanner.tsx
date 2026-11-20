import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, ArrowRight } from 'lucide-react';

export const CollabBanner: React.FC = () => {
  const { setContactModalOpen } = useShop();

  return (
    <section className="py-12 sm:py-20 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Elegant Architectural Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E8DBC9] p-8 sm:p-14 shadow-luxury">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            
            {/* Left Content */}
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel block">
                Partnerships &amp; Inquiries
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-chocolate tracking-tight">
                For Queries &amp; Collaborations
              </h3>
              <p className="text-xs sm:text-sm text-chocolate/75 leading-relaxed font-light">
                Reach out to us for product enquiries, business collaborations, or partnership opportunities.
              </p>
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={() => setContactModalOpen(true)}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#F5E9D8] bg-chocolate hover:bg-chocolate-hover shadow-luxury transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-caramel" />
                <span>Drop Us an Email</span>
                <ArrowRight className="w-4 h-4 text-caramel group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
