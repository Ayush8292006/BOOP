import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { BRANDS } from '../../data/brands';
import { ProductCard } from './ProductCard';
import { PetCategory, ProductCategory } from '../../types';
import {
  Filter,
  SlidersHorizontal,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Dog,
  Cat,
  Fish
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
      // Pet Filter
      if (selectedPetFilter !== 'All' && product.petCategory !== selectedPetFilter) {
        return false;
      }
      // Category Filter
      if (selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }
      // Brand Filter
      if (selectedBrandFilter !== 'All' && product.brand !== selectedBrandFilter) {
        return false;
      }
      // Max Price Filter
      if (product.price > maxPrice) {
        return false;
      }
      // In Stock
      if (inStockOnly && !product.inStock) {
        return false;
      }
      // Search Query
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
      return 0; // featured default
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
    <div className="bg-[#FFFAF4] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Breadcrumbs & Page Heading */}
        <div className="space-y-2">
          <nav className="text-xs text-chocolate/60 flex items-center gap-1.5 font-medium">
            <button onClick={() => setActiveTab('home')} className="hover:text-caramel">
              Home
            </button>
            <span>/</span>
            <span className="text-chocolate font-semibold">Pet Store Catalog</span>
            {selectedPetFilter !== 'All' && (
              <>
                <span>/</span>
                <span className="text-caramel font-semibold">{selectedPetFilter}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-chocolate tracking-tight">
                {selectedPetFilter === 'All'
                  ? 'Shop All Pet Essentials'
                  : `Curated for ${selectedPetFilter}`}
              </h1>
              <p className="text-xs sm:text-sm text-chocolate/70 mt-1">
                Showing {filteredProducts.length} authentic products by leading international &amp; Indian brands
              </p>
            </div>

            {/* Mobile Filter Toggle & Sort selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-beige-border text-xs font-bold text-chocolate shadow-sm"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-caramel" />
                <span>Filters {hasActiveFilters && '•'}</span>
              </button>

              <div className="flex items-center gap-2 bg-white border border-beige-border rounded-xl px-3 py-1.5 shadow-sm text-xs text-chocolate">
                <span className="text-chocolate/60 font-medium">Sort:</span>
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

        {/* Quick Pet Horizontal Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {petFilters.map((pet) => (
            <button
              key={pet}
              onClick={() => setSelectedPetFilter(pet)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                selectedPetFilter === pet
                  ? 'bg-chocolate text-beige shadow-md'
                  : 'bg-white border border-beige-border text-chocolate hover:bg-beige-light hover:border-caramel/40'
              }`}
            >
              {pet === 'All' ? '🐾 All Pets' : pet}
            </button>
          ))}
        </div>

        {/* Main Grid: Sidebar Filters (3 cols) + Product Grid (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Sidebar Filters */}
          <aside className={`lg:col-span-3 space-y-6 bg-white p-5 rounded-3xl border border-beige-border shadow-soft ${
            mobileFiltersOpen ? 'block' : 'hidden lg:block'
          }`}>
            
            {/* Header & Reset */}
            <div className="flex items-center justify-between pb-3 border-b border-beige-border">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-caramel" />
                <h3 className="font-display font-bold text-sm text-chocolate uppercase tracking-wider">
                  Filters
                </h3>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-caramel hover:text-caramel-dark font-semibold flex items-center gap-1 hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Filter by Product Category */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-chocolate uppercase tracking-wider">
                Category
              </h4>
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                {productCategories.map((cat) => (
                  <label
                    key={cat}
                    onClick={() => setSelectedCategoryFilter(cat)}
                    className="flex items-center gap-2 text-xs text-chocolate/80 hover:text-chocolate cursor-pointer py-1"
                  >
                    <input
                      type="radio"
                      name="prodCategory"
                      checked={selectedCategoryFilter === cat}
                      onChange={() => setSelectedCategoryFilter(cat)}
                      className="text-caramel focus:ring-caramel accent-chocolate"
                    />
                    <span className={selectedCategoryFilter === cat ? 'font-bold text-chocolate' : ''}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Brand */}
            <div className="space-y-2 pt-3 border-t border-beige-border">
              <h4 className="text-xs font-bold text-chocolate uppercase tracking-wider">
                Brand
              </h4>
              <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                <label
                  onClick={() => setSelectedBrandFilter('All')}
                  className="flex items-center gap-2 text-xs text-chocolate/80 hover:text-chocolate cursor-pointer py-1"
                >
                  <input
                    type="radio"
                    name="brandFilter"
                    checked={selectedBrandFilter === 'All'}
                    onChange={() => setSelectedBrandFilter('All')}
                    className="text-caramel focus:ring-caramel accent-chocolate"
                  />
                  <span className={selectedBrandFilter === 'All' ? 'font-bold text-chocolate' : ''}>
                    All Brands
                  </span>
                </label>
                {BRANDS.filter((b) => b.id !== 'and-more').map((brand) => (
                  <label
                    key={brand.id}
                    onClick={() => setSelectedBrandFilter(brand.name)}
                    className="flex items-center gap-2 text-xs text-chocolate/80 hover:text-chocolate cursor-pointer py-1"
                  >
                    <input
                      type="radio"
                      name="brandFilter"
                      checked={selectedBrandFilter === brand.name}
                      onChange={() => setSelectedBrandFilter(brand.name)}
                      className="text-caramel focus:ring-caramel accent-chocolate"
                    />
                    <span className={selectedBrandFilter === brand.name ? 'font-bold text-chocolate' : ''}>
                      {brand.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="space-y-2 pt-3 border-t border-beige-border">
              <div className="flex items-center justify-between text-xs font-bold text-chocolate uppercase tracking-wider">
                <span>Max Price</span>
                <span className="text-caramel">₹{maxPrice.toLocaleString('en-IN')}</span>
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
              <div className="flex justify-between text-[10px] text-chocolate/50 font-medium">
                <span>₹200</span>
                <span>₹5,500</span>
              </div>
            </div>

            {/* In-stock toggle */}
            <div className="pt-3 border-t border-beige-border">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold text-chocolate">In-Stock Only</span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-caramel focus:ring-caramel accent-chocolate w-4 h-4"
                />
              </label>
            </div>

          </aside>

          {/* Product Grid Area (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-beige-border shadow-soft space-y-4">
                <div className="text-4xl">🐾</div>
                <h3 className="font-display font-bold text-xl text-chocolate">
                  No products found for this filter
                </h3>
                <p className="text-xs sm:text-sm text-chocolate/70 max-w-sm mx-auto">
                  Try adjusting your price range, clearing brand selections, or exploring our other pet collections.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light transition-all shadow-md"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
