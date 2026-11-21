import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion } from 'framer-motion';

export const ShopByBrands: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  const brandLogos = [
    { name: 'Royal Canin', img: '/images/brand-royal-canin.png' },
    { name: 'Pedigree', img: '/images/brand-pedigree.png' },
    { name: 'Whiskas', img: '/images/brand-whiskas.png' },
    { name: 'Drools', img: '/images/brand-drools.png' },
    { name: 'Farmina', img: '/images/brand-farmina.png' },
    { name: 'Himalaya', img: '/images/brand-himalaya.png' },
    { name: 'Hikari', img: '/images/brand-hikari.png' },
    { name: 'Teraa', img: '/images/brand-teraa.png' },
    { name: 'Okiko', img: '/images/brand-okiko.png' },
    { name: 'Promeal', img: '/images/brand-promeal.png' },
    { name: 'Hagen', img: '/images/brand-hagen.png' },
    { name: 'and More...', img: '/images/brand-and-more.png' },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading with Cute Paw Prints */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#35150E] flex items-center justify-center gap-2">
            <span>🐾</span>
            <span>Shop by Brands</span>
            <span>🐾</span>
          </h2>
        </div>

        {/* 12 Official Brand Logo Tiles from Reference Image 1 */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brandLogos.map((brand, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (brand.name !== 'and More...') {
                  navigateToShopWithFilter({ brand: brand.name });
                } else {
                  navigateToShopWithFilter({ brand: 'All' });
                }
              }}
              className="bg-white hover:bg-[#FAF3EA] border border-[#EADBCC] rounded-2xl p-3 flex items-center justify-center cursor-pointer shadow-xs transition-colors h-16 sm:h-20"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-h-10 sm:max-h-12 max-w-[85%] object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
