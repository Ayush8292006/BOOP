import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AquaticSection: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-4 sm:py-6 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Sleek Aquatic Strip - Inspired directly by Reference Image 1 */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#031E2A] via-[#053A52] to-[#032230] border border-[#0E7490]/40 shadow-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          
          {/* Left: Pill Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' as any })}
            className="flex items-center gap-2.5 bg-white text-[#031E2A] hover:bg-[#F5E9D8] px-5 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all flex-shrink-0 cursor-pointer"
          >
            <span>Explore Our Aquatic Range</span>
            <div className="w-4 h-4 rounded-full bg-[#031E2A] text-white flex items-center justify-center">
              <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </motion.button>

          {/* Center: Tagline */}
          <div className="text-xs sm:text-sm text-[#E0F2FE] font-medium tracking-wide text-center">
            <span>Beautiful Fish</span>
            <span className="mx-3 text-[#38BDF8]/60">|</span>
            <span>Premium Products</span>
            <span className="mx-3 text-[#38BDF8]/60">|</span>
            <span>Healthy Ecosystems</span>
          </div>

          {/* Right: Glowing Neon Fish Graphic */}
          <div className="w-16 h-12 sm:w-20 sm:h-14 relative flex-shrink-0 overflow-hidden rounded-xl">
            <img
              src="/images/aquatic-closeup.jpg"
              alt="Aquatic Fish"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
