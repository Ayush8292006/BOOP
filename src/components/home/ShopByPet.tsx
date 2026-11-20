import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PET_CATEGORIES } from '../../data/categories';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ShopByPet: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section id="shop-by-pet-section" className="py-16 sm:py-24 bg-[#FFFAF4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 border-b border-[#E8DBC9] pb-6"
        >
          <div>
            <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel block mb-2">
              Species Portals
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-chocolate tracking-tight">
              Shop by Pet
            </h2>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-4">
            <p className="text-xs sm:text-sm text-chocolate/70 max-w-sm font-light leading-relaxed">
              Nutritional diets, behavioral enrichment, and specialized care essentials curated specifically for each species.
            </p>
            {/* Mobile swipe hint */}
            <span className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-caramel flex items-center gap-1">
              Swipe &rarr;
            </span>
          </div>
        </motion.div>

        {/* Responsive Layout:
            On Mobile: Smooth Horizontal Snap Carousel (overflow-x-auto snap-x)
            On Desktop: Balanced 5-Column Grid
        */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {PET_CATEGORIES.map((pet, idx) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => navigateToShopWithFilter({ pet: pet.id })}
              className="snap-center flex-shrink-0 w-[72vw] sm:w-[260px] lg:w-auto group cursor-pointer relative bg-white rounded-2xl overflow-hidden border border-[#E8DBC9] hover:border-caramel transition-all duration-300 shadow-subtle hover:shadow-elevation flex flex-col"
            >
              {/* Image Frame with Zoom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5E9D8]">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
                  loading="lazy"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                {/* Corner Hover Indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 text-chocolate opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-subtle">
                  <ArrowUpRight className="w-4 h-4 text-chocolate" />
                </div>

                {/* Overlay Text inside bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5E9D8]/70 block mb-1">
                    Portal 0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">
                    {pet.name}
                  </h3>
                  <p className="text-xs text-[#F5E9D8]/80 line-clamp-1 font-light mt-0.5">
                    {pet.description}
                  </p>
                </div>
              </div>

              {/* Bottom Minimal Action */}
              <div className="p-3.5 bg-white flex items-center justify-between text-xs uppercase tracking-wider font-bold text-caramel group-hover:text-chocolate transition-colors border-t border-[#E8DBC9]/50">
                <span>Explore Range</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
