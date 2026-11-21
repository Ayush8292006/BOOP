import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Hero Card Container - Directly Styled as Reference Image 1 */}
        <div className="relative rounded-3xl overflow-hidden bg-[#FAF2E6] border border-[#EADBCC] shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[380px] lg:min-h-[420px]">
            
            {/* Left Column: Heading, Subtitle & Action */}
            <div className="md:col-span-6 lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-5 z-10 text-left">
              
              {/* Cute Decorative Sparkle Accent */}
              <div className="flex items-center gap-1.5 text-xs text-[#B77A45] font-bold">
                <span>🐾</span>
                <span className="uppercase tracking-widest text-[11px] text-[#35150E]/80">
                  Everything For Your Loved Pets
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-[54px] text-[#35150E] leading-[1.12] tracking-tight">
                Everything <br />
                Your Pets Love, <br />
                All in One Place.
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#35150E]/80 max-w-md font-normal leading-relaxed">
                Premium food, everyday essentials, fun toys and accessories for your furry &amp; scaly friends.
              </p>

              {/* Pill Button & Dots */}
              <div className="space-y-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#3B160D] hover:bg-[#29100B] shadow-md transition-all cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Slider Pagination Dots */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B160D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B160D]/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B160D]/25" />
                </div>
              </div>

            </div>

            {/* Right Column: High-Res Puppy & Kitten Photo */}
            <div className="md:col-span-6 lg:col-span-6 relative h-[280px] sm:h-[360px] lg:h-[420px] flex items-center justify-center p-4 sm:p-8">
              
              {/* Floating cute heart doodle */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-6 right-10 z-20 pointer-events-none"
              >
                <Heart className="w-9 h-9 text-[#B77A45]/80 fill-[#B77A45]/30 stroke-2" />
              </motion.div>

              {/* Puppy & Kitten snuggled photo - Real Verified Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm bg-[#F5E9D8]">
                <img
                  src="/images/hero-pets.jpg"
                  alt="Golden puppy and cute tabby kitten snuggled together"
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
