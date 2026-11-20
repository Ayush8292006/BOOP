import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCT_CATEGORIES } from '../../data/categories';
import { ProductCategory } from '../../types';

export const ShopByCategory: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-t border-b border-[#F5E9D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with paw icons */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 justify-center mb-2">
            <span className="text-xl">🐾</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-chocolate tracking-tight">
              Shop by Category
            </h2>
            <span className="text-xl">🐾</span>
          </div>
          <p className="text-sm sm:text-base text-chocolate/70 max-w-lg mx-auto">
            Everything your pets need for nourishment, cozy sleep, playful adventures, and vibrant health.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToShopWithFilter({ category: cat.id as ProductCategory })}
              className="group cursor-pointer bg-white rounded-2xl p-3 sm:p-4 border border-beige-border hover:border-caramel/50 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1.5"
            >
              {/* Category Icon / Thumbnail */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-beige-light flex items-center justify-center p-2 mb-2.5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <img
                  src={cat.iconImage}
                  alt={cat.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to emoji if needed
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xs sm:text-sm text-chocolate group-hover:text-caramel transition-colors leading-snug">
                {cat.name}
              </h3>

              <span className="text-[10px] text-chocolate/50 mt-1 font-medium">
                {cat.itemCount}+ Items
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
