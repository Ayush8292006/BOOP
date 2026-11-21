import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PromoBanners: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-8 sm:py-12 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Banner 1: Best Deals for Your Pets! */}
          <div className="relative rounded-3xl overflow-hidden bg-[#FAF2E6] border border-[#EADBCC] p-6 sm:p-8 lg:p-10 flex items-center justify-between shadow-sm min-h-[220px] sm:min-h-[240px]">
            
            {/* Left Content */}
            <div className="space-y-4 z-10 max-w-[240px] sm:max-w-[280px]">
              <div className="flex items-center gap-2.5">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#35150E] leading-tight">
                  Best Deals <br />for Your Pets!
                </h3>
                {/* Red Discount Badge */}
                <div className="w-13 h-13 rounded-full bg-[#E53E3E] text-white flex flex-col items-center justify-center text-[9px] font-bold uppercase leading-none shadow-sm flex-shrink-0">
                  <span>Up to</span>
                  <span className="text-sm font-black">30%</span>
                  <span>OFF</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] transition-all cursor-pointer shadow-sm"
              >
                <span>Shop Offers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Right Photo: Dog & Cat */}
            <div className="w-40 sm:w-48 lg:w-56 h-36 sm:h-44 lg:h-52 relative flex-shrink-0 rounded-2xl overflow-hidden bg-white/50">
              <img
                src="/images/promo-dog-cat-hd.jpg"
                alt="Happy dog and cat"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* Banner 2: New Arrivals */}
          <div className="relative rounded-3xl overflow-hidden bg-[#F4F6F8] border border-[#DCE4EC] p-6 sm:p-8 lg:p-10 flex items-center justify-between shadow-sm min-h-[220px] sm:min-h-[240px]">
            
            {/* Left Content */}
            <div className="space-y-4 z-10 max-w-[240px] sm:max-w-[280px]">
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E293B] leading-tight">
                  New Arrivals
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-normal">
                  Curated Just for Your Furry Friends!
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] transition-all cursor-pointer shadow-sm"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Right Photo: Playful Cat with Feather Toy - FIXED FILENAME */}
            <div className="w-40 sm:w-48 lg:w-56 h-36 sm:h-44 lg:h-52 relative flex-shrink-0 rounded-2xl overflow-hidden bg-white/50">
              <img
                src="/images/promo-playful-cat-hd.jpg"
                alt="Playful cat"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
