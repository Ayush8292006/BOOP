import React from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted, setActiveProductModal } = useShop();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative bg-white rounded-2xl p-2.5 sm:p-3.5 border border-[#E8DBC9] hover:border-caramel transition-all duration-300 shadow-subtle hover:shadow-luxury flex flex-col justify-between overflow-hidden h-full">
      
      {/* Top Image Frame */}
      <div 
        className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F5E9D8]/40 mb-2 sm:mb-3 cursor-pointer"
        onClick={() => setActiveProductModal(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-98"
          loading="lazy"
        />

        {/* Discount Badge */}
        {product.discountPercentage && (
          <div className="absolute top-2 left-2 bg-chocolate text-[#F5E9D8] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm">
            {product.discountPercentage}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
            wishlisted
              ? 'bg-chocolate text-white'
              : 'bg-white/90 text-chocolate hover:text-caramel hover:bg-white shadow-subtle'
          }`}
          title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Hover (Desktop only) */}
        <div className="hidden sm:block absolute inset-x-0 bottom-2 px-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveProductModal(product);
            }}
            className="w-full py-1.5 rounded-lg bg-white/95 text-chocolate text-[10px] font-bold uppercase tracking-wider shadow-luxury hover:bg-chocolate hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3 h-3" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-caramel">
            <span className="truncate max-w-[65%]">{product.brand}</span>
            <span className="text-chocolate/40 font-normal">{product.petCategory}</span>
          </div>

          {/* Title */}
          <h4
            onClick={() => setActiveProductModal(product)}
            className="font-display font-semibold text-xs sm:text-sm text-chocolate group-hover:text-caramel transition-colors line-clamp-2 cursor-pointer mt-0.5 leading-snug min-h-[2rem]"
            title={product.title}
          >
            {product.title}
          </h4>
        </div>

        {/* Price & Add to Cart button - Snug fit without any overflow */}
        <div className="pt-2 flex items-center justify-between gap-1 border-t border-[#E8DBC9]/50">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-1">
              <span className="font-display font-bold text-xs sm:text-sm text-chocolate truncate">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] text-chocolate/40 line-through truncate hidden xs:inline">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.weight && (
              <span className="text-[9px] sm:text-[10px] text-chocolate/50 block truncate">{product.weight}</span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="flex-shrink-0 inline-flex items-center justify-center gap-1 bg-[#3B160D] text-white hover:bg-[#29100B] px-2 sm:px-2.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
            title="Add to Cart"
          >
            <ShoppingBag className="w-3 h-3 text-[#F5E9D8]" />
            <span>ADD</span>
          </button>
        </div>

      </div>

    </div>
  );
};
