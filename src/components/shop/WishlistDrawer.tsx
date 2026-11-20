import React from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

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
      <div className="relative w-full max-w-md bg-[#FFFAF4] h-full shadow-elevation flex flex-col z-10 border-l border-[#E8DBC9] animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8DBC9] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Heart className="w-4 h-4 text-chocolate" />
            <h3 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
              Saved Wishlist
            </h3>
            <span className="text-xs bg-[#F5E9D8] px-2 py-0.5 rounded-full text-chocolate font-bold">
              {wishlistedProducts.length}
            </span>
          </div>

          <button
            onClick={() => setWishlistDrawerOpen(false)}
            className="p-1.5 text-chocolate hover:text-caramel transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F5E9D8]/50 flex items-center justify-center text-caramel">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
                Your wishlist is empty
              </h4>
              <p className="text-xs text-chocolate/70 max-w-xs font-light leading-relaxed">
                Save your pet's favorite formulations, accessories, and aquatic care products for quick re-ordering.
              </p>
              <button
                onClick={() => {
                  setWishlistDrawerOpen(false);
                  navigateToShopWithFilter({ pet: 'All' });
                }}
                className="px-6 py-2.5 rounded-full bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-widest hover:bg-chocolate-hover transition-colors shadow-subtle"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-3.5 bg-white rounded-xl border border-[#E8DBC9] flex gap-3 shadow-subtle"
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  onClick={() => {
                    setActiveProductModal(prod);
                    setWishlistDrawerOpen(false);
                  }}
                  className="w-16 h-16 object-cover rounded-lg bg-[#F5E9D8] flex-shrink-0 cursor-pointer"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-[10px] text-caramel font-bold uppercase tracking-widest">
                        {prod.brand}
                      </span>
                      <button
                        onClick={() => toggleWishlist(prod.id)}
                        className="text-chocolate/40 hover:text-red-600 transition-colors p-1"
                        title="Remove"
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
                    >
                      {prod.title}
                    </h5>

                    <p className="text-xs font-extrabold text-chocolate mt-0.5">
                      ₹{prod.price.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        addToCart(prod, 1);
                        toggleWishlist(prod.id);
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-chocolate text-[#F5E9D8] hover:bg-chocolate-hover text-[11px] uppercase tracking-wider font-bold transition-all shadow-subtle"
                    >
                      <ShoppingBag className="w-3 h-3 text-caramel" />
                      <span>Move to Bag</span>
                    </button>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-5 border-t border-[#E8DBC9] bg-white text-center">
            <button
              onClick={() => {
                wishlistedProducts.forEach((p) => addToCart(p, 1));
                setWishlistDrawerOpen(false);
              }}
              className="w-full py-3 rounded-full bg-caramel text-white hover:bg-caramel-dark font-bold text-xs uppercase tracking-widest transition-all shadow-subtle"
            >
              Add All to Shopping Bag
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
