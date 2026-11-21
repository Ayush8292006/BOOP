import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion } from 'framer-motion';

export const ShopByCategory: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  const categories = [
    {
      id: 'Food & Treats',
      name: 'Food & Treats',
      image: '/images/prod-kibble.jpg',
    },
    {
      id: 'Toys & Play',
      name: 'Toys & Play',
      image: '/images/prod-cat-toy.jpg',
    },
    {
      id: 'Collars & Leashes',
      name: 'Collars & Leashes',
      image: '/images/prod-collar.jpg',
    },
    {
      id: 'Grooming & Hygiene',
      name: 'Grooming & Hygiene',
      image: '/images/prod-grooming.jpg',
    },
    {
      id: 'Travel & Carriers',
      name: 'Travel & Carriers',
      image: '/images/pet-cat-hd.jpg',
    },
    {
      id: 'Beds & Comfort',
      name: 'Beds & Comfort',
      image: '/images/prod-bed.jpg',
    },
    {
      id: 'Health & Wellness',
      name: 'Health & Wellness',
      image: '/images/pet-reptile-hd.jpg',
    },
    {
      id: 'Enrichment & More',
      name: 'Enrichment & More',
      image: '/images/prod-bird-cage.jpg',
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with Cute Paw Prints */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#35150E] flex items-center justify-center gap-2">
            <span>🐾</span>
            <span>Shop by Category</span>
            <span>🐾</span>
          </h2>
        </div>

        {/* 8 Compact Category Tiles (4 cols on mobile, 8 cols on desktop) */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigateToShopWithFilter({ category: cat.id as any })}
              className="bg-[#FAF3EA] hover:bg-[#F3E7D7] rounded-xl p-2.5 sm:p-3 flex flex-col items-center text-center cursor-pointer border border-[#EADBCC] shadow-xs transition-colors"
            >
              {/* Compact Image */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden mb-2 bg-white flex items-center justify-center shadow-2xs">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-[10px] sm:text-[11px] text-[#35150E] leading-tight line-clamp-2">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
