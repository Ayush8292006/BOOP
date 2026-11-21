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
    <section className="py-8 sm:py-10 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">🐾</span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#35150E]">
              Featured Products
            </h2>
          </div>
          
          <button
            onClick={() => navigateToShopWithFilter({ pet: 'All' })}
            className="text-xs font-bold text-[#B77A45] hover:text-[#35150E] transition-colors flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4-Column Compact Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {featured.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -3 }}
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
