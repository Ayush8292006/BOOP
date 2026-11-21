import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion } from 'framer-motion';

export const ShopByCategory: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  const categories = [
    {
      id: 'Food & Treats',
      name: 'Food & Treats',
      image: '/images/cat-food-treats.png',
    },
    {
      id: 'Toys & Play',
      name: 'Toys & Play',
      image: '/images/cat-toys-play.png',
    },
    {
      id: 'Collars & Leashes',
      name: 'Collars & Leashes',
      image: '/images/cat-collars-leashes.png',
    },
    {
      id: 'Grooming & Hygiene',
      name: 'Grooming & Hygiene',
      image: '/images/cat-grooming-hygiene.png',
    },
    {
      id: 'Travel & Carriers',
      name: 'Travel & Carriers',
      image: '/images/cat-travel-carriers.png',
    },
    {
      id: 'Beds & Comfort',
      name: 'Beds & Comfort',
      image: '/images/cat-beds-comfort.png',
    },
    {
      id: 'Health & Wellness',
      name: 'Health & Wellness',
      image: '/images/cat-health-wellness.png',
    },
    {
      id: 'Enrichment & More',
      name: 'Enrichment & More',
      image: '/images/cat-enrichment-more.png',
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading with Cute Paw Prints */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#35150E] flex items-center justify-center gap-2">
            <span>🐾</span>
            <span>Shop by Category</span>
            <span>🐾</span>
          </h2>
        </div>

        {/* 8 Compact Category Tiles directly matching Reference Image 1 */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigateToShopWithFilter({ category: cat.id as any })}
              className="bg-[#FAF3EA] hover:bg-[#F3E7D7] rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center cursor-pointer border border-[#EADBCC] shadow-xs transition-colors"
            >
              {/* Category Icon from Reference */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden mb-2.5 bg-white flex items-center justify-center p-2 shadow-2xs">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xs sm:text-[13px] text-[#35150E] leading-tight">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
