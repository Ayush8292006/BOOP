import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Sparkles, Star, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { navigateToShopWithFilter, setActiveTab } = useShop();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFAF4] via-[#FDF6ED] to-[#FFFAF4] pt-8 sm:pt-16 pb-20 sm:pb-28 border-b border-[#E8DBC9]">
      
      {/* Dynamic ambient lighting halos */}
      <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-caramel/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-sage/15 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Large Asymmetrical Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Conversion Elements (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Fine Overline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8DBC9] shadow-subtle backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-caramel animate-pulse" />
              <span className="text-[11px] uppercase tracking-ultra font-bold text-chocolate">
                A Brand by Volga Life Biosciences
              </span>
              <span className="text-chocolate/30 font-light">&bull;</span>
              <span className="text-[10px] uppercase tracking-wider text-caramel font-semibold">
                Est. 2026
              </span>
            </div>

            {/* Main Headline with sculpted editorial typography */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-chocolate leading-[1.05] tracking-tight">
              Everything <br />
              <span className="bg-gradient-to-r from-chocolate via-caramel-dark to-chocolate bg-clip-text text-transparent">
                Your Pets Love,
              </span> <br />
              <span className="font-serif italic font-normal text-caramel">All in One Place.</span>
            </h1>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg md:text-xl text-chocolate/80 max-w-xl font-light leading-relaxed">
              Premium veterinary diets, everyday essentials, behavioral toys, and specialized aquatic ecosystems for your beloved companions.
            </p>

            {/* CTAs with Glow and Micro-Interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px -10px rgba(53, 21, 14, 0.35)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#F5E9D8] bg-chocolate hover:bg-chocolate-hover shadow-luxury transition-all duration-300"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4 text-caramel group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-chocolate bg-white/80 hover:bg-white border border-[#E8DBC9] hover:border-caramel transition-all shadow-subtle"
              >
                Our Brand Heritage
              </motion.button>
            </div>

            {/* Live Trust Metrics Strip */}
            <div className="pt-6 border-t border-[#E8DBC9]/70 grid grid-cols-3 gap-4 text-chocolate">
              <div>
                <p className="font-display font-black text-xl sm:text-2xl text-chocolate">
                  50+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-chocolate/60 font-medium">
                  Verified Global Brands
                </p>
              </div>

              <div>
                <p className="font-display font-black text-xl sm:text-2xl text-chocolate">
                  19,000+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-chocolate/60 font-medium">
                  Pan-India Pincodes
                </p>
              </div>

              <div>
                <p className="font-display font-black text-xl sm:text-2xl text-caramel">
                  100%
                </p>
                <p className="text-[11px] uppercase tracking-wider text-chocolate/60 font-medium">
                  Authentic Guarantee
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Commercial Photography & Floating Glass Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Luxury Elevation */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(53,21,14,0.25)] border-2 border-white bg-white group">
                <img
                  src="/images/hero-pets.jpg"
                  alt="Golden Retriever puppy and companion cat with warm studio lighting"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-98 contrast-105"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Pill 1: Top Right */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/60 shadow-luxury flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-caramel/20 flex items-center justify-center text-caramel">
                    <Award className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-widest text-chocolate/50">Quality Certified</p>
                    <p className="text-xs font-bold text-chocolate">Volga Life Guaranteed</p>
                  </div>
                </motion.div>

                {/* Floating Glass Pill 2: Bottom Overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#29100B]/90 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white flex items-center justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center gap-1 text-caramel mb-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                    <p className="text-xs font-bold text-white tracking-wide">
                      A Little Boop &amp; Lot of Love ❤️
                    </p>
                    <p className="text-[10px] text-[#F5E9D8]/70 font-light mt-0.5">
                      From everyday nutrition to aquatic mastery
                    </p>
                  </div>

                  <button
                    onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                    className="w-8 h-8 rounded-full bg-[#B77A45] hover:bg-white text-white hover:text-chocolate flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Decorative layered glow behind photo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-caramel/30 via-sage/20 to-transparent rounded-[2.8rem] -z-10 blur-xl" />

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
