import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CollabBanner: React.FC = () => {
  const { setContactModalOpen } = useShop();

  return (
    <section className="py-8 sm:py-12 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Soft Sky Blue Banner - Inspired directly by Reference Image 1 */}
        <div className="relative rounded-3xl overflow-hidden bg-[#E2F4FA] border border-[#C5E6F2] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          
          {/* Left: Cute Puppy & Text */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl select-none">🐶</span>
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#164E63] leading-tight">
                For Queries &amp; Collaborations
              </h3>
              <p className="text-xs sm:text-sm text-[#0E7490] mt-1.5 font-normal max-w-xl">
                Reach out to us for product enquiries, business collaborations, or partnership opportunities.
              </p>
            </div>
          </div>

          {/* Right: Drop us an Email Button & Cat */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#3B160D] hover:bg-[#29100B] shadow-sm transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Drop us an Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center hidden sm:flex">
              <span className="text-4xl sm:text-5xl select-none">🐱</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
