import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PetCategory } from '../../types';
import { motion } from 'framer-motion';

export const MobileStoryBar: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  const stories = [
    { name: 'Dogs', pet: 'Dogs' as PetCategory, image: '/images/pet-dog-hd.jpg' },
    { name: 'Cats', pet: 'Cats' as PetCategory, image: '/images/pet-cat-hd.jpg' },
    { name: 'Aquatics', pet: 'Aquatics' as PetCategory, image: '/images/aquatic-closeup.jpg', badge: 'Volga' },
    { name: 'Small Pets', pet: 'Small Pets' as PetCategory, image: '/images/pet-small-hd.jpg' },
    { name: 'Birds', pet: 'Birds' as PetCategory, image: '/images/pet-bird-hd.jpg' },
    { name: 'Reptiles', pet: 'Reptiles' as PetCategory, image: '/images/pet-reptile-hd.jpg' },
  ];

  return (
    <div className="lg:hidden w-full overflow-x-auto py-3 px-4 bg-[#FFFAF4] border-b border-[#E8DBC9]/50 scrollbar-none">
      <div className="flex items-center gap-3.5 w-max">
        {stories.map((item, idx) => (
          <motion.div
            key={idx}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateToShopWithFilter({ pet: item.pet })}
            className="flex flex-col items-center gap-1.5 cursor-pointer select-none"
          >
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#B77A45] via-[#E8DBC9] to-[#35150E]">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-[#F5E9D8]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.badge && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#031E2A] text-[#38BDF8] text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.2 rounded-full border border-white/50">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[11px] font-semibold text-chocolate uppercase tracking-wider">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
