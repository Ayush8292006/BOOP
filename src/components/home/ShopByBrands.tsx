import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BRANDS } from '../../data/brands';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ShopByBrands: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8DBC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-2"
        >
          <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel">
            Global Veterinary &amp; Aquatic Partners
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
            Brands You Can Trust
          </h2>
          <p className="text-xs sm:text-sm text-chocolate/70 font-light leading-relaxed">
            We partner directly with leading veterinary nutritionists, Japanese aquatic feed leaders, and trusted international pet brands.
          </p>
        </motion.div>

        {/* Responsive Layout:
            On Mobile: Smooth Horizontal Snap Carousel
            On Desktop: Balanced 6-Column Grid
        */}
        <div className="flex lg:grid lg:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => {
                if (brand.id !== 'and-more') {
                  navigateToShopWithFilter({ brand: brand.name });
                } else {
                  navigateToShopWithFilter({ brand: 'All' });
                }
              }}
              className="snap-center flex-shrink-0 w-[42vw] sm:w-[160px] lg:w-auto group cursor-pointer bg-[#FFFAF4] rounded-2xl p-4 sm:p-5 border border-[#E8DBC9] hover:border-caramel transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] text-center hover:shadow-subtle"
              title={`${brand.name} - ${brand.specialty}`}
            >
              <div className="w-full h-10 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-8 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              <span className="text-[10px] uppercase tracking-wider text-chocolate/50 font-semibold mt-2 truncate max-w-full">
                {brand.specialty}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Explore All Brands CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => navigateToShopWithFilter({ brand: 'All' })}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-chocolate hover:text-caramel transition-colors border-b-2 border-chocolate hover:border-caramel pb-1"
          >
            <span>Explore All 50+ Partner Brands</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
