import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PET_CATEGORIES } from '../../data/categories';
import { ArrowUpRight } from 'lucide-react';

export const ShopByPet: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-12 sm:py-16 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with Paw icons */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 justify-center mb-2">
            <span className="text-xl">🐾</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-chocolate tracking-tight">
              Shop by Pet
            </h2>
            <span className="text-xl">🐾</span>
          </div>
          <p className="text-sm sm:text-base text-chocolate/70 max-w-lg mx-auto">
            Discover tailored food, health care, and lifestyle essentials for every beloved family member.
          </p>
        </div>

        {/* 5 Pet Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {PET_CATEGORIES.map((pet) => (
            <div
              key={pet.id}
              onClick={() => navigateToShopWithFilter({ pet: pet.id })}
              className="group cursor-pointer relative bg-white rounded-3xl p-3 sm:p-4 border border-beige-border hover:border-caramel/40 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1.5"
            >
              {/* Pet Photo with soft pastel backdrop */}
              <div className={`w-full aspect-square rounded-2xl bg-gradient-to-b ${pet.bgGradient} overflow-hidden mb-3 relative flex items-center justify-center p-2`}>
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500 ease-out shadow-sm"
                  loading="lazy"
                />

                {/* Hover Arrow Badge */}
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 text-chocolate opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-chocolate" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-base sm:text-lg text-chocolate group-hover:text-caramel transition-colors">
                {pet.name}
              </h3>
              
              <p className="text-[11px] text-chocolate/60 line-clamp-1 mt-0.5">
                {pet.description}
              </p>

              <span className="text-[11px] font-bold text-caramel mt-2 inline-flex items-center gap-1 group-hover:underline">
                Explore Collection &rarr;
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
