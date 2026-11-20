import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    wishlistDrawerOpen,
    setWishlistDrawerOpen,
    toggleWishlist,
    addToCart,
    setActiveProductModal,
    navigateToShopWithFilter,
  } = useShop();

  if (!wishlistDrawerOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setWishlistDrawerOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FFFAF4] h-full shadow-2xl flex flex-col z-10 border-l border-beige-border animate-slideLeft">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <h3 className="font-display font-bold text-base sm:text-lg text-chocolate">
              Saved Wishlist
            </h3>
            <span className="text-xs bg-beige px-2 py-0.5 rounded-full text-chocolate font-bold">
              {wishlistedProducts.length}
            </span>
          </div>

          <button
            onClick={() => setWishlistDrawerOpen(false)}
            className="p-1.5 rounded-full hover:bg-beige-light text-chocolate transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-3xl">
                ❤️
              </div>
              <h4 className="font-display font-bold text-lg text-chocolate">
                Your wishlist is waiting for love!
              </h4>
              <p className="text-xs sm:text-sm text-chocolate/70 max-w-xs leading-relaxed">
                Save your pet's favorite treats, toys, and essentials to track their availability anytime.
              </p>
              <button
                onClick={() => {
                  setWishlistDrawerOpen(false);
                  navigateToShopWithFilter({ pet: 'All' });
                }}
                className="px-6 py-2.5 rounded-full bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light transition-all shadow-md"
              >
                Explore Pet Catalog &rarr;
              </button>
            </div>
          ) : (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-3.5 bg-white rounded-2xl border border-beige-border flex gap-3 shadow-sm hover:border-caramel/40 transition-all"
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  onClick={() => {
                    setActiveProductModal(prod);
                    setWishlistDrawerOpen(false);
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-beige-light flex-shrink-0 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-[10px] text-caramel font-bold uppercase tracking-wider">
                        {prod.brand}
                      </span>
                      <button
                        onClick={() => toggleWishlist(prod.id)}
                        className="text-chocolate/40 hover:text-red-500 transition-colors p-1"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h5
                      onClick={() => {
                        setActiveProductModal(prod);
                        setWishlistDrawerOpen(false);
                      }}
                      className="text-xs font-bold text-chocolate truncate mt-0.5 cursor-pointer hover:text-caramel"
                      title={prod.title}
                    >
                      {prod.title}
                    </h5>

                    <p className="text-xs font-extrabold text-chocolate mt-0.5">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  {/* Move to Cart Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        addToCart(prod, 1);
                        toggleWishlist(prod.id);
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-chocolate text-beige hover:bg-chocolate-light text-xs font-semibold shadow-sm transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-caramel-light" />
                      <span>Move to Cart</span>
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-4 border-t border-beige-border bg-white text-center">
            <button
              onClick={() => {
                wishlistedProducts.forEach((p) => addToCart(p, 1));
                setWishlistDrawerOpen(false);
              }}
              className="w-full py-3 rounded-2xl bg-caramel text-white hover:bg-caramel-dark font-bold text-xs shadow-md transition-all"
            >
              Add All to Shopping Bag
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
