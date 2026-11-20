import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';
import {
  X,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { activeProductModal, setActiveProductModal, addToCart, toggleWishlist, isWishlisted } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!activeProductModal) return null;

  const product = activeProductModal;
  const wishlisted = isWishlisted(product.id);
  const images = product.additionalImages && product.additionalImages.length > 0
    ? product.additionalImages
    : [product.image];

  // Related products from same pet or product category
  const related = PRODUCTS.filter(
    (p) => (p.petCategory === product.petCategory || p.category === product.category) && p.id !== product.id
  ).slice(0, 3);

  const handleClose = () => {
    setActiveProductModal(null);
    setQuantity(1);
    setActiveImageIndex(0);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-4xl w-full shadow-2xl border border-beige-border overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 text-chocolate hover:bg-chocolate hover:text-beige flex items-center justify-center transition-all shadow-md"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Image Gallery (5 cols) */}
            <div className="md:col-span-5 space-y-3">
              {/* Primary Image */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-beige-border shadow-inner relative flex items-center justify-center">
                <img
                  src={images[activeImageIndex] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                />
                {product.discountPercentage && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    {product.discountPercentage}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Selector */}
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-caramel ring-2 ring-caramel/30 scale-105'
                          : 'border-beige-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Meta & Purchase (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Brand, Pet Category & Badges */}
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-extrabold text-caramel tracking-wider bg-caramel/10 px-2.5 py-0.5 rounded-full">
                  {product.brand}
                </span>
                <span className="text-xs text-chocolate/50 font-medium">
                  • {product.petCategory} ({product.category})
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-chocolate leading-tight">
                {product.title}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 py-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-chocolate">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-chocolate/50 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                    Save ₹{(product.originalPrice! - product.price).toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-chocolate/80 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Key Features Bullet points */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold text-chocolate uppercase tracking-wider">
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-chocolate/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-dark flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector & Action Buttons */}
              <div className="pt-4 border-t border-beige-border space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-beige-border rounded-xl bg-white p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-chocolate hover:bg-beige-light transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-chocolate">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-chocolate hover:bg-beige-light transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={() => {
                      addToCart(product, quantity);
                      handleClose();
                    }}
                    className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-chocolate text-beige hover:bg-chocolate-light font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4 text-caramel-light" />
                    <span>Add to Cart • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                  </button>

                  {/* Wishlist Toggle */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                      wishlisted
                        ? 'bg-red-50 border-red-200 text-red-500'
                        : 'bg-white border-beige-border text-chocolate hover:text-red-500'
                    }`}
                    title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Service guarantees */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-chocolate/70">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-caramel" />
                    <span>Pan India Delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-caramel" />
                    <span>100% Authentic</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5 text-caramel" />
                    <span>Easy Returns</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Related Products Section */}
          {related.length > 0 && (
            <div className="pt-6 border-t border-beige-border space-y-4">
              <h3 className="font-display font-bold text-lg text-chocolate">
                You May Also Like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setActiveProductModal(rel);
                      setQuantity(1);
                      setActiveImageIndex(0);
                    }}
                    className="p-3 bg-white rounded-2xl border border-beige-border hover:border-caramel/40 cursor-pointer flex items-center gap-3 group transition-all"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-14 h-14 object-cover rounded-xl bg-beige-light group-hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-caramel font-semibold uppercase">{rel.brand}</p>
                      <h5 className="text-xs font-bold text-chocolate truncate">{rel.title}</h5>
                      <p className="text-xs font-bold text-chocolate mt-0.5">₹{rel.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
