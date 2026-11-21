import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="pt-2 sm:pt-4 pb-3 sm:pb-5 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Sleek, Compact Banner - Blinkit & Zepto App Proportions */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FAF2E6] border border-[#EADBCC] shadow-xs">
          
          <div className="flex items-center justify-between min-h-[135px] sm:min-h-[175px] md:min-h-[210px] p-4 sm:p-6 md:p-8">
            
            {/* Left Column: Punchy Headline & Compact CTA */}
            <div className="space-y-2 sm:space-y-3 z-10 text-left max-w-[62%] sm:max-w-[55%]">
              
              {/* Cute Badge */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#B77A45] font-bold">
                <span>🐾</span>
                <span className="uppercase tracking-wider text-[9px] sm:text-[11px] text-[#35150E]/80 truncate">
                  Everything For Your Pets
                </span>
              </div>

              {/* Main Headline - Compact and Punchy */}
              <h1 className="font-display font-black text-base sm:text-2xl md:text-3xl lg:text-4xl text-[#35150E] leading-tight tracking-tight">
                Everything Your Pets Love, <br className="hidden sm:inline" />
                <span className="text-[#B77A45]">All in One Place.</span>
              </h1>

              {/* Subtitle - Short and Sweet */}
              <p className="text-[11px] sm:text-xs md:text-sm text-[#35150E]/75 font-normal leading-snug line-clamp-2 hidden xs:block">
                Premium food, everyday essentials, fun toys &amp; accessories.
              </p>

              {/* Pill Button */}
              <div className="pt-0.5 sm:pt-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] shadow-xs transition-all cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </motion.button>
              </div>

            </div>

            {/* Right Column: High-Res Puppy & Kitten Photo - Compact App-like Frame */}
            <div className="relative w-[36%] sm:w-[42%] max-w-[240px] sm:max-w-[320px] h-[115px] sm:h-[155px] md:h-[185px] flex items-center justify-end">
              
              {/* Floating cute heart */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-1 right-2 sm:right-4 z-20 pointer-events-none"
              >
                <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-[#B77A45]/80 fill-[#B77A45]/30 stroke-2" />
              </motion.div>

              {/* Puppy & Kitten snuggled photo */}
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xs bg-[#F5E9D8]">
                <img
                  src="/images/hero-pets.jpg"
                  alt="Golden puppy and cute tabby kitten"
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
