import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BRANDS } from '../../data/brands';
import { motion } from 'framer-motion';

export const ShopByBrands: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-8 sm:py-10 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with Cute Paw Prints */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#35150E] flex items-center justify-center gap-2">
            <span>🐾</span>
            <span>Shop by Brands</span>
            <span>🐾</span>
          </h2>
        </div>

        {/* 12 Compact Brand Pill Tiles (3 cols on mobile, 6 cols on desktop) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (brand.id !== 'and-more') {
                  navigateToShopWithFilter({ brand: brand.name });
                } else {
                  navigateToShopWithFilter({ brand: 'All' });
                }
              }}
              className="bg-white hover:bg-[#FAF3EA] border border-[#EADBCC] rounded-xl px-2 py-2 sm:py-2.5 flex items-center justify-center text-center cursor-pointer shadow-2xs transition-colors h-12 sm:h-14"
            >
              {brand.id !== 'and-more' ? (
                <span className="font-display font-bold text-xs sm:text-sm text-[#35150E] truncate px-1">
                  {brand.name}
                </span>
              ) : (
                <span className="text-[11px] font-semibold text-[#B77A45]">
                  and More...
                </span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
