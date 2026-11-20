import React from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { Heart, ShoppingBag, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted, setActiveProductModal } = useShop();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative bg-white rounded-3xl p-3.5 sm:p-4 border border-beige-border hover:border-caramel/50 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      
      {/* Top Media Area */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-beige-light/40 mb-3 cursor-pointer" onClick={() => setActiveProductModal(product)}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Discount Badge */}
        {product.discountPercentage && (
          <div className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
            {product.discountPercentage}% OFF
          </div>
        )}

        {/* Best Seller / New Arrival Badges */}
        {product.isBestSeller && !product.discountPercentage && (
          <div className="absolute top-2.5 left-2.5 bg-caramel text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Popular</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
            wishlisted
              ? 'bg-red-50 text-red-500 ring-2 ring-red-300'
              : 'bg-white/90 text-chocolate hover:text-red-500 hover:bg-white'
          }`}
          title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-0 bottom-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveProductModal(product);
            }}
            className="w-full py-1.5 rounded-xl bg-white/95 text-chocolate text-xs font-bold shadow-lg hover:bg-chocolate hover:text-beige transition-colors flex items-center justify-center gap-1.5 backdrop-blur-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-caramel uppercase tracking-wider">
            <span>{product.brand}</span>
            <span className="text-chocolate/40 font-normal capitalize">{product.petCategory}</span>
          </div>

          {/* Title */}
          <h4
            onClick={() => setActiveProductModal(product)}
            className="font-display font-bold text-xs sm:text-sm text-chocolate group-hover:text-caramel transition-colors line-clamp-2 cursor-pointer mt-1 leading-snug"
            title={product.title}
          >
            {product.title}
          </h4>
        </div>

        {/* Pricing & Add to Cart button */}
        <div className="pt-2 flex items-center justify-between gap-2 border-t border-beige-border/50 mt-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-sm sm:text-base text-chocolate">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-[11px] text-chocolate/50 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.weight && (
              <span className="text-[10px] text-chocolate/50">{product.weight}</span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center justify-center gap-1 bg-chocolate text-beige hover:bg-chocolate-light hover:text-white px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 flex-shrink-0"
            title="Add to Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-caramel-light" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </div>
  );
};
