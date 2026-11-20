import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export const PromoBanners: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-12 sm:py-20 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Banner 1: Best Deals for Your Pets */}
          <div className="relative rounded-3xl overflow-hidden border border-[#E8DBC9] bg-[#29100B] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[360px] group shadow-elevation">
            {/* Background luxury photo */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/promo-dog-cat-hd.jpg"
                alt="Companionship promotional campaign"
                className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#29100B] via-[#29100B]/80 to-transparent" />
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 max-w-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded text-[10px] uppercase font-bold tracking-widest bg-white/10 border border-white/20 text-[#F5E9D8]">
                Up to 30% OFF
              </span>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Best Deals for Your Pets!
              </h3>

              <p className="text-xs sm:text-sm text-[#F5E9D8]/80 font-light leading-relaxed">
                Discover something special for your furry friends.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 pt-6">
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#29100B] bg-white hover:bg-caramel hover:text-white transition-all duration-300"
              >
                <span>Shop Offers</span>
                <ArrowRight className="w-4 h-4 text-[#29100B] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

          {/* Banner 2: New Arrivals */}
          <div className="relative rounded-3xl overflow-hidden border border-[#E8DBC9] bg-[#35150E] text-white p-8 sm:p-12 flex flex-col justify-between min-h-[360px] group shadow-elevation">
            {/* Background luxury photo */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/promo-playful-cat-hd.jpg"
                alt="Curated new arrivals"
                className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#35150E] via-[#35150E]/80 to-transparent" />
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 max-w-sm space-y-3">
              <span className="inline-block px-3 py-1 rounded text-[10px] uppercase font-bold tracking-widest bg-white/10 border border-white/20 text-[#F5E9D8]">
                Freshly Curated
              </span>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                New Arrivals
              </h3>

              <p className="text-xs sm:text-sm text-[#F5E9D8]/80 font-light leading-relaxed">
                Curated Just for Your Furry Friends!
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 pt-6">
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#35150E] bg-white hover:bg-caramel hover:text-white transition-all duration-300"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 text-[#35150E] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
