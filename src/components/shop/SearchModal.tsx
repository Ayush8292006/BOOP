import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { Search, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { PetCategory } from '../../types';

export const SearchModal: React.FC = () => {
  const {
    searchModalOpen,
    setSearchModalOpen,
    setActiveProductModal,
    navigateToShopWithFilter,
    addToCart,
  } = useShop();

  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.petCategory.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!searchModalOpen) return null;

  const quickPetTags: PetCategory[] = ['Dogs', 'Cats', 'Aquatics', 'Small Pets', 'Birds', 'Reptiles'];

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setSearchModalOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FFFAF4] rounded-2xl shadow-elevation border border-[#E8DBC9] overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Bar Input */}
        <div className="p-5 border-b border-[#E8DBC9] bg-white flex items-center gap-3">
          <Search className="w-4 h-4 text-caramel flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search food, accessories, toys, aquatics and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-chocolate placeholder:text-chocolate/40 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[11px] uppercase tracking-wider text-chocolate/50 hover:text-chocolate px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 rounded text-chocolate hover:text-caramel transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-3 bg-[#F5E9D8]/40 border-b border-[#E8DBC9] flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-bold text-chocolate/50 uppercase tracking-ultra">
            Curated:
          </span>
          {quickPetTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-[#E8DBC9] hover:border-caramel text-chocolate hover:text-caramel transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-5">
          {!query.trim() ? (
            <div className="py-10 text-center space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-caramel">
                Instant Catalogue Search
              </p>
              <p className="text-xs text-chocolate/60 max-w-sm mx-auto font-light">
                Search by brand (e.g. "Royal Canin", "Hikari", "Whiskas") or category ("Collar", "Kibble", "Aquatic").
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <h4 className="font-display font-bold text-base text-chocolate">
                No matching products found
              </h4>
              <p className="text-xs text-chocolate/60 max-w-sm mx-auto font-light">
                We couldn't find anything matching "{query}". Try another search term or browse our collection.
              </p>
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  navigateToShopWithFilter({ pet: 'All' });
                }}
                className="px-6 py-2 rounded-full bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-wider hover:bg-chocolate-hover transition-colors"
              >
                Browse All Products &rarr;
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-chocolate/50 uppercase tracking-ultra mb-2">
                Found {searchResults.length} Products
              </p>
              {searchResults.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setActiveProductModal(prod);
                    setSearchModalOpen(false);
                  }}
                  className="p-3 bg-white rounded-xl border border-[#E8DBC9] hover:border-caramel shadow-subtle cursor-pointer flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-12 h-12 object-cover rounded-lg bg-[#F5E9D8]"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] text-caramel font-bold uppercase tracking-wider">
                        {prod.brand} &bull; {prod.petCategory}
                      </p>
                      <h5 className="text-xs font-bold text-chocolate truncate group-hover:text-caramel transition-colors">
                        {prod.title}
                      </h5>
                      <span className="text-xs font-extrabold text-chocolate">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(prod, 1);
                      }}
                      className="p-2 rounded-lg bg-[#F5E9D8]/50 text-chocolate hover:bg-chocolate hover:text-white transition-colors"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <ArrowRight className="w-4 h-4 text-chocolate/30 group-hover:text-caramel group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
