import React from 'react';
import { useShop } from '../../context/ShopContext';
import { motion } from 'framer-motion';

export const ShopByPet: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  const petCards = [
    {
      id: 'Dogs',
      name: 'Dogs',
      image: '/images/pet-dog-hd.jpg',
      bgColor: 'bg-[#DDF0F7]',
      textColor: 'text-[#1E3A4B]',
    },
    {
      id: 'Cats',
      name: 'Cats',
      image: '/images/pet-cat-hd.jpg',
      bgColor: 'bg-[#FBECE8]',
      textColor: 'text-[#4A2418]',
    },
    {
      id: 'Small Pets',
      name: 'Small Pets',
      image: '/images/pet-small-hd.jpg',
      bgColor: 'bg-[#FCF3DF]',
      textColor: 'text-[#4A3B18]',
    },
    {
      id: 'Birds',
      name: 'Birds',
      image: '/images/pet-bird-hd.jpg',
      bgColor: 'bg-[#EBF7E9]',
      textColor: 'text-[#1E4324]',
    },
    {
      id: 'Reptiles',
      name: 'Reptiles & Turtles',
      image: '/images/pet-reptile-hd.jpg',
      bgColor: 'bg-[#EDF2EB]',
      textColor: 'text-[#2D3F2D]',
    },
  ];

  return (
    <section id="shop-by-pet-section" className="py-8 sm:py-10 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading with Cute Paw Prints */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#35150E] flex items-center justify-center gap-2">
            <span>🐾</span>
            <span>Shop by Pet</span>
            <span>🐾</span>
          </h2>
        </div>

        {/* 5 Compact Friendly Pastel Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {petCards.map((pet, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigateToShopWithFilter({ pet: pet.id as any })}
              className={`${pet.bgColor} rounded-2xl p-3 sm:p-3.5 flex flex-col items-center justify-between text-center cursor-pointer shadow-sm hover:shadow transition-all border border-black/5`}
            >
              {/* Pet Image: Small & Compact */}
              <div className="w-full max-w-[120px] aspect-square rounded-xl overflow-hidden mb-2.5 bg-white/40">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Pet Title */}
              <h3 className={`font-display font-bold text-xs sm:text-sm ${pet.textColor}`}>
                {pet.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
