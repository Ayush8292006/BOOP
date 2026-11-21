import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const PromoBanners: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-6 sm:py-8 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Banner 1: Best Deals for Your Pets! */}
          <div className="relative rounded-2xl overflow-hidden bg-[#FBF1E4] border border-[#EADBCC] p-5 sm:p-6 flex items-center justify-between shadow-xs min-h-[170px] sm:min-h-[180px]">
            
            {/* Left Content */}
            <div className="space-y-3 z-10 max-w-[210px] sm:max-w-[240px]">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#35150E] leading-tight">
                  Best Deals <br />for Your Pets!
                </h3>
                {/* Red Discount Badge */}
                <div className="w-11 h-11 rounded-full bg-[#E53E3E] text-white flex flex-col items-center justify-center text-[8px] font-bold uppercase leading-none shadow-sm flex-shrink-0">
                  <span>Up to</span>
                  <span className="text-[11px] font-black">30%</span>
                  <span>OFF</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] transition-all cursor-pointer shadow-2xs"
              >
                <span>Shop Offers</span>
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </div>

            {/* Right Photo: Dog & Cat */}
            <div className="w-32 sm:w-40 h-28 sm:h-36 relative flex-shrink-0 rounded-xl overflow-hidden">
              <img
                src="/images/promo-dog-cat-hd.jpg"
                alt="Happy dog and cat"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>

          {/* Banner 2: New Arrivals */}
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F6F8] border border-[#DCE4EC] p-5 sm:p-6 flex items-center justify-between shadow-xs min-h-[170px] sm:min-h-[180px]">
            
            {/* Left Content */}
            <div className="space-y-3 z-10 max-w-[210px] sm:max-w-[240px]">
              <div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#1E293B] leading-tight">
                  New Arrivals
                </h3>
                <p className="text-xs text-[#64748B] mt-1 font-normal">
                  Curated Just for Your Furry Friends!
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#3B160D] hover:bg-[#29100B] transition-all cursor-pointer shadow-2xs"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </div>

            {/* Right Photo: Cat with Feather Toy */}
            <div className="w-32 sm:w-40 h-28 sm:h-36 relative flex-shrink-0 rounded-xl overflow-hidden">
              <img
                src="/images/promo-cat-play-hd.jpg"
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
