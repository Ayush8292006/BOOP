import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Home, Compass, LayoutGrid, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const MobileBottomBar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    cartCount,
    wishlist,
    setCartDrawerOpen,
    setWishlistDrawerOpen,
    navigateToShopWithFilter,
  } = useShop();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#E8DBC9] shadow-[0_-5px_25px_rgba(53,21,14,0.08)] px-2 py-2">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center justify-around text-center">
        
        {/* 1. Home */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center py-1 relative transition-colors ${
            activeTab === 'home' ? 'text-chocolate' : 'text-chocolate/50 hover:text-chocolate'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Home</span>
          {activeTab === 'home' && (
            <motion.div
              layoutId="mobileActiveDot"
              className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-caramel"
            />
          )}
        </button>

        {/* 2. Shop Catalog */}
        <button
          onClick={() => navigateToShopWithFilter({ pet: 'All' })}
          className={`flex flex-col items-center justify-center py-1 relative transition-colors ${
            activeTab === 'shop' ? 'text-chocolate' : 'text-chocolate/50 hover:text-chocolate'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Shop</span>
          {activeTab === 'shop' && (
            <motion.div
              layoutId="mobileActiveDot"
              className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-caramel"
            />
          )}
        </button>

        {/* 3. Pets & Aquatics Portal */}
        <button
          onClick={() => {
            setActiveTab('home');
            setTimeout(() => {
              const el = document.getElementById('shop-by-pet-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="flex flex-col items-center justify-center py-1 relative text-chocolate/50 hover:text-chocolate"
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Portals</span>
        </button>

        {/* 4. Wishlist */}
        <button
          onClick={() => setWishlistDrawerOpen(true)}
          className="flex flex-col items-center justify-center py-1 relative text-chocolate/50 hover:text-chocolate"
        >
          <div className="relative">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-caramel text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Wishlist</span>
        </button>

        {/* 5. Bag / Cart */}
        <button
          onClick={() => setCartDrawerOpen(true)}
          className="flex flex-col items-center justify-center py-1 relative text-chocolate/50 hover:text-chocolate"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-chocolate" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-chocolate text-[#F5E9D8] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold tracking-wider uppercase mt-1 text-chocolate font-bold">Bag</span>
        </button>

      </div>
    </div>
  );
};
