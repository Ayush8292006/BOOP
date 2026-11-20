import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BRANDS } from '../../data/brands';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const ShopByBrands: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-t border-[#F5E9D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with paw icons */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 justify-center mb-2">
            <span className="text-xl">🐾</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-chocolate tracking-tight">
              Shop by Brands
            </h2>
            <span className="text-xl">🐾</span>
          </div>
          <p className="text-sm sm:text-base text-chocolate/70 max-w-lg mx-auto">
            We partner directly with leading veterinary nutritionists, global aquatic feed leaders, and trusted pet brands.
          </p>
        </div>

        {/* Brand Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => {
                if (brand.id !== 'and-more') {
                  navigateToShopWithFilter({ brand: brand.name });
                } else {
                  navigateToShopWithFilter({ brand: 'All' });
                }
              }}
              className="group cursor-pointer bg-white rounded-2xl p-3 sm:p-4 border border-beige-border hover:border-caramel/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[90px] text-center hover:-translate-y-1"
              title={`${brand.name} - ${brand.specialty}`}
            >
              <div className="w-full h-10 flex items-center justify-center overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-8 max-w-[90%] object-contain filter group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <span className="text-[10px] text-chocolate/50 font-medium mt-1 truncate max-w-full">
                {brand.specialty}
              </span>
            </div>
          ))}
        </div>

        {/* Explore All Brands CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => navigateToShopWithFilter({ brand: 'All' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-chocolate bg-beige hover:bg-beige-dark transition-all duration-200 border border-beige-border"
          >
            <span>Explore All 50+ Partner Brands</span>
            <ArrowRight className="w-4 h-4 text-caramel" />
          </button>
        </div>

      </div>
    </section>
  );
};
