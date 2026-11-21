import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const AquaticSection: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-3 sm:py-4 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Slim, Sleek Aquatic Strip - Directly matching Reference Image 1 */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#031E2A] via-[#053246] to-[#042838] border border-[#0E7490]/40 shadow-sm px-4 sm:px-6 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
          
          {/* Left: Pill Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' as any })}
            className="flex items-center gap-2 bg-white text-[#031E2A] hover:bg-[#F5E9D8] px-4 py-2 rounded-full text-xs font-bold shadow-sm transition-all flex-shrink-0"
          >
            <span>Explore Our Aquatic Range</span>
            <div className="w-4 h-4 rounded-full bg-[#031E2A] text-white flex items-center justify-center">
              <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </motion.button>

          {/* Center: Tagline */}
          <div className="text-[11px] sm:text-xs text-[#E0F2FE] font-medium tracking-wide text-center sm:text-left">
            <span>Beautiful Fish</span>
            <span className="mx-2 text-[#38BDF8]/60">|</span>
            <span>Premium Products</span>
            <span className="mx-2 text-[#38BDF8]/60">|</span>
            <span>Healthy Ecosystems</span>
          </div>

          {/* Right: Small swimming fish graphic */}
          <div className="w-12 h-10 sm:w-16 sm:h-12 relative flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src="/images/aquatic-closeup.jpg"
              alt="Aquatic Fish"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
