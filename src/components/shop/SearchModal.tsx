import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { Search, X, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
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

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FFFAF4] rounded-3xl shadow-2xl border border-beige-border overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center gap-3">
          <Search className="w-5 h-5 text-caramel flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search food, accessories, toys, aquatics and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-chocolate placeholder:text-chocolate/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-chocolate/50 hover:text-chocolate px-2 py-1 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 rounded-full hover:bg-beige-light text-chocolate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-3 bg-[#F5E9D8]/50 border-b border-beige-border flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold text-chocolate/60 uppercase tracking-wider">
            Popular:
          </span>
          {quickPetTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setQuery(tag);
              }}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-beige-border hover:border-caramel/50 text-chocolate hover:text-caramel transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {!query.trim() ? (
            <div className="py-8 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-caramel mx-auto opacity-70" />
              <p className="text-sm font-semibold text-chocolate">
                What can we help your pet with today?
              </p>
              <p className="text-xs text-chocolate/60 max-w-sm mx-auto">
                Type brand names like "Royal Canin", "Hikari", "Whiskas", or pet essentials like "Collar", "Kibble", "Aquarium".
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="text-4xl">🐾</div>
              <h4 className="font-display font-bold text-base text-chocolate">
                No matching pet products found
              </h4>
              <p className="text-xs text-chocolate/60 max-w-sm mx-auto">
                We couldn't find anything matching "{query}". Try checking the spelling or browse our full collection.
              </p>
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  navigateToShopWithFilter({ pet: 'All' });
                }}
                className="px-5 py-2 rounded-full bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light transition-all"
              >
                Browse All Products &rarr;
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-bold text-chocolate/60 uppercase tracking-wider mb-2">
                Found {searchResults.length} Products
              </p>
              {searchResults.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setActiveProductModal(prod);
                    setSearchModalOpen(false);
                  }}
                  className="p-3 bg-white rounded-2xl border border-beige-border hover:border-caramel/50 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-12 h-12 object-cover rounded-xl bg-beige-light group-hover:scale-105 transition-transform"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] text-caramel font-bold uppercase tracking-wider">
                        {prod.brand} • {prod.petCategory}
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
                      className="p-2 rounded-xl bg-beige-light text-chocolate hover:bg-chocolate hover:text-beige transition-colors"
                      title="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <ArrowRight className="w-4 h-4 text-chocolate/40 group-hover:text-caramel group-hover:translate-x-0.5 transition-all" />
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
