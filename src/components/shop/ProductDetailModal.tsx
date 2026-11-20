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
  RotateCcw
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
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-4xl w-full shadow-elevation border border-[#E8DBC9] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-chocolate hover:bg-chocolate hover:text-white flex items-center justify-center transition-all shadow-subtle"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Image Gallery (5 cols) */}
            <div className="md:col-span-5 space-y-3">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-[#E8DBC9] shadow-subtle relative flex items-center justify-center">
                <img
                  src={images[activeImageIndex] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center filter brightness-98"
                />
                {product.discountPercentage && (
                  <div className="absolute top-3 left-3 bg-chocolate text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                    {product.discountPercentage}% OFF
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border transition-all ${
                        activeImageIndex === idx
                          ? 'border-chocolate ring-2 ring-chocolate/20'
                          : 'border-[#E8DBC9] opacity-70 hover:opacity-100'
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
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-caramel tracking-ultra">
                  {product.brand}
                </span>
                <span className="text-xs text-chocolate/40 font-medium">
                  &bull; {product.petCategory} ({product.category})
                </span>
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-chocolate leading-tight">
                {product.title}
              </h2>

              <div className="flex items-baseline gap-3 py-1">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-chocolate/40 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="text-sm text-chocolate/80 leading-relaxed font-light">
                {product.description}
              </p>

              {product.features && product.features.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                    Key Specifications:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-chocolate/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-caramel flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Purchase Bar */}
              <div className="pt-4 border-t border-[#E8DBC9] space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center border border-[#E8DBC9] rounded-lg bg-white p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-7 h-7 rounded flex items-center justify-center text-chocolate hover:bg-beige-light transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-chocolate">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-7 h-7 rounded flex items-center justify-center text-chocolate hover:bg-beige-light transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, quantity);
                      handleClose();
                    }}
                    className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-chocolate text-[#F5E9D8] hover:bg-chocolate-hover font-bold text-xs uppercase tracking-wider shadow-luxury transition-all active:scale-98"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-caramel" />
                    <span>Add to Bag &bull; ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                      wishlisted
                        ? 'bg-chocolate text-white border-chocolate'
                        : 'bg-white border-[#E8DBC9] text-chocolate hover:text-caramel'
                    }`}
                    title={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-chocolate/70 uppercase tracking-wider font-medium">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-caramel" />
                    <span>Pan India</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-caramel" />
                    <span>100% Genuine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5 text-caramel" />
                    <span>Easy Returns</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="pt-6 border-t border-[#E8DBC9] space-y-4">
              <h3 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
                Complementary Curations
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
                    className="p-3 bg-white rounded-xl border border-[#E8DBC9] hover:border-caramel cursor-pointer flex items-center gap-3 transition-colors"
                  >
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-12 h-12 object-cover rounded-lg bg-[#F5E9D8]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-caramel font-bold uppercase">{rel.brand}</p>
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
