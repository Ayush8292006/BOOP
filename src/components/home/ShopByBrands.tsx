import React from 'react';
import { useShop } from '../../context/ShopContext';
import { BRANDS } from '../../data/brands';
import { ArrowRight } from 'lucide-react';

export const ShopByBrands: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8DBC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel">
            Global Veterinary &amp; Aquatic Partners
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
            Brands You Can Trust
          </h2>
          <p className="text-xs sm:text-sm text-chocolate/70 font-light leading-relaxed">
            We partner directly with leading veterinary nutritionists, Japanese aquatic feed leaders, and trusted international pet brands.
          </p>
        </div>

        {/* Sophisticated Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
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
              className="group cursor-pointer bg-[#FFFAF4] rounded-2xl p-4 sm:p-5 border border-[#E8DBC9] hover:border-caramel transition-all duration-300 flex flex-col items-center justify-center min-h-[100px] text-center hover:shadow-subtle"
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
            </div>
          ))}
        </div>

        {/* Explore All Brands CTA */}
        <div className="mt-12 text-center">
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
