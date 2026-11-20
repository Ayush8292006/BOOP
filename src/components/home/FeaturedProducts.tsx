import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../shop/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProducts: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  // Pick top 6 best-seller / new arrival products
  const featured = PRODUCTS.filter((p) => p.isBestSeller || p.isNewArrival).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFAF4] border-b border-[#E8DBC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 border-b border-[#E8DBC9] pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra font-semibold text-caramel mb-2">
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>Flagship Curations</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
              Trending &amp; Best Sellers
            </h2>
          </div>
          <div className="flex items-center justify-between md:justify-end gap-4">
            <button
              onClick={() => navigateToShopWithFilter({ pet: 'All' })}
              className="text-xs font-bold uppercase tracking-wider text-caramel hover:text-chocolate transition-colors flex items-center gap-1.5"
            >
              <span>View All 24+ Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            {/* Mobile swipe hint */}
            <span className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-caramel">
              Swipe &rarr;
            </span>
          </div>
        </motion.div>

        {/* Responsive Grid/Carousel:
            On Mobile: Smooth Horizontal Snap Carousel (overflow-x-auto snap-x)
            On Desktop: Balanced 3-column / 6-item Grid
        */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {featured.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="snap-center flex-shrink-0 w-[78vw] sm:w-[280px] lg:w-auto"
            >
              <ProductCard product={prod} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
