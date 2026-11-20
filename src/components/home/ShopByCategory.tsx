import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCategory } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CategoryShowcaseItem {
  id: ProductCategory;
  name: string;
  image: string;
  count: string;
}

export const ShopByCategory: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  const categories: CategoryShowcaseItem[] = [
    {
      id: 'Food & Treats',
      name: 'Food & Treats',
      image: '/images/prod-royal-canin.jpg',
      count: '48 Products',
    },
    {
      id: 'Toys & Play',
      name: 'Toys & Play',
      image: '/images/prod-dog-toy.jpg',
      count: '32 Products',
    },
    {
      id: 'Collars & Leashes',
      name: 'Collars & Leashes',
      image: '/images/prod-collar.jpg',
      count: '26 Products',
    },
    {
      id: 'Grooming & Hygiene',
      name: 'Grooming & Hygiene',
      image: '/images/prod-grooming.jpg',
      count: '38 Products',
    },
    {
      id: 'Travel & Carriers',
      name: 'Travel & Carriers',
      image: '/images/pet-cat-hd.jpg',
      count: '18 Products',
    },
    {
      id: 'Beds & Comfort',
      name: 'Beds & Comfort',
      image: '/images/prod-bed.jpg',
      count: '22 Products',
    },
    {
      id: 'Health & Wellness',
      name: 'Health & Wellness',
      image: '/images/pet-reptile-hd.jpg',
      count: '29 Products',
    },
    {
      id: 'Enrichment & More',
      name: 'Enrichment & More',
      image: '/images/prod-bird-cage.jpg',
      count: '34 Products',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8DBC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 border-b border-[#E8DBC9] pb-6">
          <div>
            <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel block mb-2">
              Curated Essentials
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-chocolate/70 max-w-md font-light leading-relaxed">
            From precision veterinarian-approved nutrition to orthopedic memory-foam resting systems, explore our full product portfolio.
          </p>
        </div>

        {/* 8 Balanced Architectural Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigateToShopWithFilter({ category: cat.id })}
              className="group cursor-pointer bg-[#FFFAF4] rounded-2xl overflow-hidden border border-[#E8DBC9] hover:border-caramel transition-all duration-300 shadow-subtle hover:shadow-luxury flex flex-col"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5E9D8]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Text Meta */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-chocolate group-hover:text-caramel transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-chocolate/50 font-medium">
                    {cat.count}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white border border-[#E8DBC9] flex items-center justify-center text-chocolate group-hover:bg-chocolate group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
