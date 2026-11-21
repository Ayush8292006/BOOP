import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="pt-3 sm:pt-4 pb-4 sm:pb-6 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Compact Hero Card Container - Perfectly Proportioned */}
        <div className="relative rounded-2xl overflow-hidden bg-[#FBF1E4] border border-[#EADBCC] shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Column: Heading, Subtitle & Action */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 space-y-3 sm:space-y-4 z-10 text-left">
              
              {/* Cute Decorative Sparkle Accent */}
              <div className="flex items-center gap-1.5 text-xs text-[#B77A45] font-bold">
                <span>🐾</span>
                <span className="uppercase tracking-wider text-[11px] text-[#35150E]/75">
                  Everything For Your Loved Pets
                </span>
              </div>

              {/* Main Headline - Compact and Readable */}
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#35150E] leading-tight tracking-tight">
                Everything <br className="hidden sm:inline" />
                Your Pets Love, <br className="hidden sm:inline" />
                All in One Place.
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#35150E]/75 max-w-sm font-normal leading-relaxed">
                Premium food, everyday essentials, fun toys and accessories for your furry &amp; scaly friends.
              </p>

              {/* Pill Button & Dots */}
              <div className="flex items-center gap-4 pt-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] shadow-sm transition-all cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>

                {/* Slider Pagination Dots */}
                <div className="flex items-center gap-1.5 pl-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B160D]" />
                  <span className="w-2 h-2 rounded-full bg-[#3B160D]/25" />
                  <span className="w-2 h-2 rounded-full bg-[#3B160D]/25" />
                </div>
              </div>

            </div>

            {/* Right Column: Compact Puppy & Kitten Photo */}
            <div className="md:col-span-5 relative flex items-center justify-center p-4 sm:p-6">
              
              {/* Floating cute heart doodle */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute top-4 right-6 sm:right-8 z-20 pointer-events-none"
              >
                <Heart className="w-6 h-6 text-[#B77A45]/80 fill-[#B77A45]/30 stroke-2" />
              </motion.div>

              {/* Puppy & Kitten snuggled photo - Controlled compact height */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[190px] sm:h-[230px] rounded-xl overflow-hidden shadow-sm">
                <img
                  src="/images/hero-puppy-kitten-warm.jpg"
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
