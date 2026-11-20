import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PET_CATEGORIES } from '../../data/categories';
import { ArrowUpRight } from 'lucide-react';

export const ShopByPet: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-16 sm:py-24 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-[#E8DBC9] pb-6">
          <div>
            <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel block mb-2">
              Tailored Portals
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
              Shop by Pet
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-chocolate/70 max-w-md font-light leading-relaxed">
            Nutritional diets, behavioral enrichment, and specialized care essentials curated specifically for each species.
          </p>
        </div>

        {/* 5 Architectural Category Compositions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {PET_CATEGORIES.map((pet) => (
            <div
              key={pet.id}
              onClick={() => navigateToShopWithFilter({ pet: pet.id })}
              className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden border border-[#E8DBC9] hover:border-caramel transition-all duration-500 shadow-subtle hover:shadow-luxury flex flex-col"
            >
              {/* Image Frame with Zoom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5E9D8]">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Corner Hover Indicator */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-chocolate opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-subtle">
                  <ArrowUpRight className="w-3.5 h-3.5 text-chocolate" />
                </div>

                {/* Overlay Text inside bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
                    {pet.name}
                  </h3>
                  <p className="text-[11px] text-[#F5E9D8]/80 line-clamp-1 font-light mt-0.5">
                    {pet.description}
                  </p>
                </div>
              </div>

              {/* Bottom Minimal Action */}
              <div className="p-3 bg-white flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-caramel group-hover:text-chocolate transition-colors border-t border-[#E8DBC9]/50">
                <span>Explore Range</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
