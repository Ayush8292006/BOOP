import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CollabBanner: React.FC = () => {
  const { setContactModalOpen } = useShop();

  return (
    <section className="py-6 sm:py-8 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Soft Sky Blue Rounded Banner - Directly Matching Reference Image 1 */}
        <div className="relative rounded-2xl overflow-hidden bg-[#E2F4FA] border border-[#C5E6F2] p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          
          {/* Left: Cute Puppy Icon & Heading */}
          <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
            <span className="text-3xl sm:text-4xl hidden sm:inline select-none">🐶</span>
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-[#164E63] leading-tight">
                For Queries &amp; Collaborations
              </h3>
              <p className="text-xs text-[#0E7490] mt-1 font-normal max-w-md">
                Reach out to us for product enquiries, business collaborations, or partnership opportunities.
              </p>
            </div>
          </div>

          {/* Right: Drop us an Email Button & Cat */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] shadow-2xs transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Drop us an Email</span>
              <ArrowRight className="w-3 h-3" />
            </motion.button>
            <span className="text-3xl sm:text-4xl hidden sm:inline select-none">🐱</span>
          </div>

        </div>

      </div>
    </section>
  );
};
