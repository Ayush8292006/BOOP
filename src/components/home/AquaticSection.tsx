import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export const AquaticSection: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-12 sm:py-20 bg-[#FFFAF4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Full-width Architectural Banner Container with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-elevation bg-[#031E2A] border border-[#0E7490]/40 group"
        >
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/aquatic-banner-hd.jpg"
              alt="Lush planted tropical aquarium ecosystem"
              className="w-full h-full object-cover object-center opacity-45 group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-110"
              loading="lazy"
            />
            {/* Deep elegant navy-to-transparent gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031E2A] via-[#031E2A]/90 to-transparent" />
          </div>

          {/* Shimmering aquatic wave aura */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.15, 1],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#06B6D4] blur-[120px] pointer-events-none"
          />

          {/* Editorial Content */}
          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            {/* Left Narrative Block */}
            <div className="max-w-xl text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7490]/30 border border-[#06B6D4]/40 text-[#38BDF8] text-[10px] font-bold uppercase tracking-widest">
                <Droplets className="w-3 h-3 text-[#38BDF8]" />
                <span>Volga Life Biosciences Heritage</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Explore Our Aquatic Range
              </h2>

              <p className="font-display text-sm sm:text-base text-[#38BDF8] font-medium tracking-wide">
                Beautiful Fish &nbsp;|&nbsp; Premium Products &nbsp;|&nbsp; Healthy Ecosystems
              </p>

              <p className="text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed font-light">
                From world-renowned Hikari Japanese feeds and Teraa bioactive plant substrates to specialized mineral buffers, experience aquatic care backed by professional marine biologists.
              </p>
            </div>

            {/* Right Action Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' })}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#031E2A] bg-white hover:bg-[#38BDF8] shadow-luxury transition-all duration-300"
              >
                <span>Shop Aquatic Range</span>
                <ArrowRight className="w-4 h-4 text-[#031E2A] group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
