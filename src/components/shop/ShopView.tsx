import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { BRANDS } from '../../data/brands';
import { ProductCard } from './ProductCard';
import { PetCategory, ProductCategory } from '../../types';
import {
  Filter,
  SlidersHorizontal,
  RotateCcw
} from 'lucide-react';

export const ShopView: React.FC = () => {
  const {
    selectedPetFilter,
    setSelectedPetFilter,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    selectedBrandFilter,
    setSelectedBrandFilter,
    searchQuery,
    setSearchQuery,
    setActiveTab,
  } = useShop();

  const [sortOption, setSortOption] = useState<'featured' | 'price-low' | 'price-high' | 'discount'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(5500);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  // Available Filter Options
  const petFilters: (PetCategory | 'All')[] = ['All', 'Dogs', 'Cats', 'Aquatics', 'Small Pets', 'Birds', 'Reptiles'];
  
  const productCategories: (ProductCategory | 'All')[] = [
    'All',
    'Food & Treats',
    'Toys & Play',
    'Collars & Leashes',
    'Grooming & Hygiene',
    'Travel & Carriers',
    'Beds & Comfort',
    'Health & Wellness',
    'Enrichment & More'
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedPetFilter !== 'All' && product.petCategory !== selectedPetFilter) {
        return false;
      }
      if (selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }
      if (selectedBrandFilter !== 'All' && product.brand !== selectedBrandFilter) {
        return false;
      }
      if (product.price > maxPrice) {
        return false;
      }
      if (inStockOnly && !product.inStock) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.title.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.petCategory.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'discount') return (b.discountPercentage || 0) - (a.discountPercentage || 0);
      return 0;
    });
  }, [selectedPetFilter, selectedCategoryFilter, selectedBrandFilter, maxPrice, inStockOnly, searchQuery, sortOption]);

  const resetFilters = () => {
    setSelectedPetFilter('All');
    setSelectedCategoryFilter('All');
    setSelectedBrandFilter('All');
    setMaxPrice(5500);
    setInStockOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedPetFilter !== 'All' ||
    selectedCategoryFilter !== 'All' ||
    selectedBrandFilter !== 'All' ||
    maxPrice < 5500 ||
    inStockOnly ||
    !!searchQuery;

  return (
    <div className="bg-[#FFFAF4] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Breadcrumbs & Page Header */}
        <div className="space-y-3">
          <nav className="text-[11px] uppercase tracking-wider text-chocolate/50 flex items-center gap-2 font-medium">
            <button onClick={() => setActiveTab('home')} className="hover:text-caramel">
              Home
            </button>
            <span>/</span>
            <span className="text-chocolate font-semibold">Pet Collection</span>
            {selectedPetFilter !== 'All' && (
              <>
                <span>/</span>
                <span className="text-caramel font-semibold">{selectedPetFilter}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8DBC9] pb-6">
            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
                {selectedPetFilter === 'All'
                  ? 'Shop The Complete Collection'
                  : `Curated for ${selectedPetFilter}`}
              </h1>
              <p className="text-xs sm:text-sm text-chocolate/70 font-light mt-1">
                Showing {filteredProducts.length} authentic products by premier international &amp; Indian brands
              </p>
            </div>

            {/* Mobile Filter Toggle & Sort selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-[#E8DBC9] text-xs font-bold text-chocolate uppercase tracking-wider shadow-subtle"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-caramel" />
                <span>Filters {hasActiveFilters && '•'}</span>
              </button>

              <div className="flex items-center gap-2 bg-white border border-[#E8DBC9] rounded-lg px-3 py-2 shadow-subtle text-xs text-chocolate">
                <span className="text-chocolate/50 font-medium uppercase text-[10px] tracking-wider">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="bg-transparent font-bold text-chocolate focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured Picks</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* Minimalist Pet Horizontal Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {petFilters.map((pet) => (
            <button
              key={pet}
              onClick={() => setSelectedPetFilter(pet)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedPetFilter === pet
                  ? 'bg-chocolate text-[#F5E9D8] shadow-subtle'
                  : 'bg-white border border-[#E8DBC9] text-chocolate hover:border-caramel'
              }`}
            >
              {pet === 'All' ? 'All Portals' : pet}
            </button>
          ))}
        </div>

        {/* Main Grid: Sidebar Filters (3 cols) + Product Grid (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Sidebar Filters */}
          <aside className={`lg:col-span-3 space-y-6 bg-white p-6 rounded-2xl border border-[#E8DBC9] shadow-subtle ${
            mobileFiltersOpen ? 'block' : 'hidden lg:block'
          }`}>
            
            {/* Header & Reset */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DBC9]">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-caramel" />
                <h3 className="font-display font-bold text-xs uppercase tracking-ultra text-chocolate">
                  Filters
                </h3>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-caramel hover:text-chocolate font-bold uppercase tracking-wider flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Filter by Product Category */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                Category
              </h4>
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                {productCategories.map((cat) => (
                  <label
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className="flex items-center gap-2 text-xs text-chocolate/80 hover:text-chocolate cursor-pointer py-0.5"
                  >
                    <input
                      type="radio"
                      name="prodCategory"
                      checked={selectedCategoryFilter === cat}
                      onChange={() => setSelectedCategoryFilter(cat)}
                      className="accent-chocolate"
                    />
                    <span className={selectedCategoryFilter === cat ? 'font-bold text-chocolate' : ''}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Brand */}
            <div className="space-y-2 pt-4 border-t border-[#E8DBC9]">
              <h4 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                Brand
              </h4>
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                <label
                  onClick={() => setSelectedBrandFilter('All')}
                  className="flex items-center gap-2 text-xs text-chocolate/80 hover:text-chocolate cursor-pointer py-0.5"
                >
                  <input
                    type="radio"
                    name="brandFilter"
                    checked={selectedBrandFilter === 'All'}
                    onChange={() => setSelectedBrandFilter('All')}
                    className="accent-chocolate"
                  />
                  <span className={selectedBrandFilter === 'All' ? 'font-bold text-chocolate' : ''}>
                    All Brands
                  </span>
                </label>
                {BRANDS.filter((b) => b.id !== 'and-more').map((brand) => (
                  <label
                    key={brand.id}
                    onClick={() => setSelectedBrandFilter(brand.name)}
                    className="flex items-center gap-2 text-xs text-chocolate/80 hover:text-chocolate cursor-pointer py-0.5"
                  >
                    <input
                      type="radio"
                      name="brandFilter"
                      checked={selectedBrandFilter === brand.name}
                      onChange={() => setSelectedBrandFilter(brand.name)}
                      className="accent-chocolate"
                    />
                    <span className={selectedBrandFilter === brand.name ? 'font-bold text-chocolate' : ''}>
                      {brand.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2 pt-4 border-t border-[#E8DBC9]">
              <div className="flex items-center justify-between text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                <span>Max Price</span>
                <span className="text-caramel font-display font-bold text-xs">₹{maxPrice.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="200"
                max="5500"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-chocolate cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-chocolate/40 font-medium">
                <span>₹200</span>
                <span>₹5,500</span>
              </div>
            </div>

            {/* In-stock toggle */}
            <div className="pt-4 border-t border-[#E8DBC9]">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold text-chocolate uppercase tracking-wider text-[11px]">In-Stock Only</span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-chocolate w-4 h-4"
                />
              </label>
            </div>

          </aside>

          {/* Product Grid Area (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="p-16 text-center bg-white rounded-2xl border border-[#E8DBC9] shadow-subtle space-y-4">
                <h3 className="font-display font-bold text-xl text-chocolate">
                  No products found for this selection
                </h3>
                <p className="text-xs sm:text-sm text-chocolate/70 max-w-sm mx-auto font-light">
                  Try adjusting your price range or clearing selected brand filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-wider hover:bg-chocolate-hover transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>

        </div>

      </div>
    </div>
  );
};
