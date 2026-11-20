import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Sparkles, Tag, Flame } from 'lucide-react';

export const PromoBanners: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-8 sm:py-12 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Banner 1: Best Deals for Your Pets */}
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-beige-border bg-gradient-to-br from-[#FFF5EA] via-[#FCEFD9] to-[#F5E2C7] p-6 sm:p-8 flex flex-col justify-between group hover:shadow-hover transition-all duration-300">
            {/* Top Row: Title & Discount Badge */}
            <div className="relative z-10 space-y-2 max-w-xs sm:max-w-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Limited Time Specials</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                Best Deals for Your Pets!
              </h3>

              <p className="text-xs sm:text-sm text-chocolate/80">
                Discover something special for your furry friends.
              </p>
            </div>

            {/* Discount Stamp Badge */}
            <div className="absolute top-6 right-6 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white flex flex-col items-center justify-center font-display font-extrabold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300 border-2 border-white">
              <span className="text-[10px] uppercase tracking-wider leading-none">Up to</span>
              <span className="text-sm sm:text-base leading-tight">30%</span>
              <span className="text-[9px] uppercase tracking-wider leading-none">OFF</span>
            </div>

            {/* Pet Photography inside banner */}
            <div className="relative z-0 my-4 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-inner border border-white/60">
              <img
                src="/images/promo-dog-cat-hd.jpg"
                alt="Happy dog and kitten friends enjoying treats"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent" />
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-2">
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-chocolate hover:bg-chocolate-light shadow-md hover:shadow-lg transition-all"
              >
                <span>Shop Offers</span>
                <ArrowRight className="w-4 h-4 text-beige" />
              </button>
            </div>
          </div>

          {/* Banner 2: New Arrivals */}
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-beige-border bg-gradient-to-br from-[#F5F8F2] via-[#EAF2E4] to-[#DFEDD6] p-6 sm:p-8 flex flex-col justify-between group hover:shadow-hover transition-all duration-300">
            {/* Top Row */}
            <div className="relative z-10 space-y-2 max-w-xs sm:max-w-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/20 border border-sage/40 text-chocolate text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-sage-dark fill-current" />
                <span>Fresh in Store</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                New Arrivals
              </h3>

              <p className="text-xs sm:text-sm text-chocolate/80">
                Curated Just for Your Furry Friends!
              </p>
            </div>

            {/* Pet Photography inside banner */}
            <div className="relative z-0 my-4 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-inner border border-white/60">
              <img
                src="/images/promo-playful-cat-hd.jpg"
                alt="Curated new arrivals for playful pets"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/30 via-transparent to-transparent" />
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-2">
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-chocolate bg-white hover:bg-beige-light border border-beige-border shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 text-caramel" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
