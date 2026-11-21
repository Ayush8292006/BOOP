import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  // Top 4 curated best-sellers
  const featured = PRODUCTS.filter((p) => p.isBestSeller || p.isNewArrival).slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-[#FFFAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐾</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#35150E]">
              Featured Products
            </h2>
          </div>
          
          <button
            onClick={() => navigateToShopWithFilter({ pet: 'All' })}
            className="text-xs sm:text-sm font-bold text-[#B77A45] hover:text-[#35150E] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Column Balanced Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -4 }}
              className="flex flex-col"
            >
              <ProductCard product={prod} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
