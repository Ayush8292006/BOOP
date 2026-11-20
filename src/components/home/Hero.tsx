import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateToShopWithFilter, setActiveTab } = useShop();

  return (
    <section className="relative overflow-hidden bg-[#FFFAF4] pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-[#E8DBC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Large Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Editorial Typography & Actions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Fine Overline */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-caramel" />
              <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel">
                A Brand by Volga Life Biosciences
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-chocolate leading-[1.08] tracking-tight">
              Everything Your Pets Love, <br />
              <span className="text-caramel font-serif italic font-normal">All in One Place.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-chocolate/75 max-w-xl font-light leading-relaxed">
              Premium food, everyday essentials, fun toys and accessories for your furry and scaly friends.
            </p>

            {/* Clean Architectural CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#F5E9D8] bg-chocolate hover:bg-chocolate-hover shadow-luxury transition-all duration-300"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-caramel group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-chocolate bg-white hover:bg-beige-light border border-[#E8DBC9] transition-colors"
              >
                The Brand Story
              </motion.button>
            </div>

            {/* Minimalist Trust Indicator Strip */}
            <div className="pt-6 border-t border-[#E8DBC9]/60 flex flex-wrap items-center gap-6 text-[11px] font-medium uppercase tracking-wider text-chocolate/60">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                <span>100% Genuine Certified Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                <span>Specialized Aquatic Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                <span>Pan India Insured Shipping</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Significant Commercial Art-Directed Photography (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto">
              
              {/* Main Image Frame with Architectural Sharpness and Fine Border */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevation border border-[#E8DBC9] bg-[#F5E9D8]/50 group">
                <img
                  src="/images/hero-pets.jpg"
                  alt="Golden Retriever and Companion Cat peacefully composed"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 contrast-105"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/50 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Caption Tag in Bottom Corner */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-subtle flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-caramel">
                      Care &amp; Nutrition
                    </p>
                    <p className="text-xs font-bold text-chocolate">
                      Authentic formulas for whole-body vitality
                    </p>
                  </div>
                  <span className="text-[10px] text-chocolate/50 uppercase font-semibold">
                    EST. 2026
                  </span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
