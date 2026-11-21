import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from './Logo';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    cartCount,
    wishlist,
    setCartDrawerOpen,
    setWishlistDrawerOpen,
    setSearchModalOpen,
    setPetProfileModalOpen,
    navigateToShopWithFilter,
    searchQuery,
    setSearchQuery,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveTab('shop');
      window.scrollTo({ top: 250, behavior: 'smooth' });
    } else {
      setSearchModalOpen(true);
    }
  };

  // Category navigation pills
  const navCategories = [
    { label: 'Home', icon: '🏠', action: () => setActiveTab('home'), isHome: true },
    { label: 'Dogs', icon: '🐾', action: () => navigateToShopWithFilter({ pet: 'Dogs' }) },
    { label: 'Cats', icon: '🐱', action: () => navigateToShopWithFilter({ pet: 'Cats' }) },
    { label: 'Small Pets', icon: '🐰', action: () => navigateToShopWithFilter({ pet: 'Small Pets' }) },
    { label: 'Birds', icon: '🦜', action: () => navigateToShopWithFilter({ pet: 'Birds' }) },
    { label: 'Reptiles', icon: '🐢', action: () => navigateToShopWithFilter({ pet: 'Reptiles' }) },
    { label: 'Food & Treats', icon: '🍲', action: () => navigateToShopWithFilter({ category: 'Food & Treats' }) },
    { label: 'Accessories', icon: '🎾', action: () => navigateToShopWithFilter({ category: 'Collars & Leashes' }) },
    {
      label: 'Offers',
      icon: '🏷️',
      highlight: true,
      action: () => {
        navigateToShopWithFilter({ pet: 'All' });
        window.scrollTo({ top: 350, behavior: 'smooth' });
      },
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#FFFAF4] ${
        isScrolled
          ? 'shadow-xs border-b border-[#E8DBC9]'
          : 'border-b border-[#E8DBC9]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* ========================================================= */}
        {/* MOBILE VIEW (Blinkit / Zepto App Style Header)           */}
        {/* ========================================================= */}
        <div className="md:hidden py-2.5 space-y-2">
          {/* Mobile Top Row: Logo + Delivery Subtitle + Profile */}
          <div className="flex items-center justify-between">
            <div
              onClick={() => setActiveTab('home')}
              className="cursor-pointer flex items-center gap-2"
            >
              <Logo variant="light" size="sm" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#3B160D] uppercase tracking-wider leading-none">
                  BOOP STORE
                </span>
                <span className="text-[9px] text-[#B77A45] font-medium tracking-tight mt-0.5">
                  Pan India Delivery 🐾
                </span>
              </div>
            </div>

            {/* Right: Just clean profile button */}
            <button
              onClick={() => setPetProfileModalOpen(true)}
              className="w-8 h-8 rounded-full bg-[#FAF2E6] border border-[#EADBCC] flex items-center justify-center text-[#3B160D] cursor-pointer shadow-2xs"
              title="My Account"
            >
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Row 2: Full-Width Clean Search Bar (Blinkit / Zepto style) */}
          <div>
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-full bg-white border border-[#E8DBC9] rounded-xl py-2 px-3.5 flex items-center justify-between text-xs text-[#35150E]/60 shadow-2xs cursor-pointer text-left"
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="w-3.5 h-3.5 text-[#B77A45] flex-shrink-0" />
                <span className="truncate">Search &quot;dog food, cat treats, toys...&quot;</span>
              </div>
              <span className="text-[10px] font-bold text-[#3B160D] uppercase tracking-wider flex-shrink-0 bg-[#FAF2E6] px-2 py-0.5 rounded">
                Search
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW                                              */}
        {/* ========================================================= */}
        <div className="hidden md:flex items-center justify-between h-20 gap-6">
          
          {/* Left: Original Brand Logo with tagline */}
          <div className="flex items-center gap-4">
            <div
              onClick={() => setActiveTab('home')}
              className="cursor-pointer flex items-center group py-1"
            >
              <Logo variant="light" size="md" />
            </div>

            <div className="hidden xl:flex flex-col border-l border-[#E8DBC9] pl-4">
              <span className="font-display text-[12px] uppercase tracking-widest text-[#B77A45] font-semibold">
                A Little Boop &amp; Lot of Love ❤️
              </span>
              <span className="text-[10px] text-chocolate/50 font-medium tracking-wider uppercase mt-0.5">
                Volga Life Biosciences
              </span>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search for food, accessories, toys and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => {
                  if (activeTab !== 'shop') setSearchModalOpen(true);
                }}
                className="w-full bg-[#FFFFFF] border border-[#E8DBC9] rounded-full py-2.5 pl-11 pr-24 text-xs font-medium text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:border-caramel transition-all shadow-subtle"
              />
              <Search className="w-4 h-4 text-chocolate/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#3B160D] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full hover:bg-[#29100B] transition-colors cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right: Actions (Account, Wishlist, Bag) */}
          <div className="flex items-center gap-4">
            {/* Account */}
            <button
              onClick={() => setPetProfileModalOpen(true)}
              className="flex items-center gap-1.5 py-2 px-3 rounded-full text-chocolate hover:text-caramel transition-colors cursor-pointer"
              title="My Account"
            >
              <User className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider">Account</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setWishlistDrawerOpen(true)}
              className="relative flex items-center gap-1.5 py-2 px-3 rounded-full text-chocolate hover:text-caramel transition-colors cursor-pointer"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="w-4 h-4 bg-[#B77A45] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              <span className="text-xs font-semibold tracking-wider">Wishlist</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative flex items-center gap-2 bg-[#3B160D] text-white hover:bg-[#29100B] px-4 py-2 rounded-full shadow-sm transition-all cursor-pointer"
              title="View Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#F5E9D8]" />
              <span className="text-xs font-bold text-white tracking-wide">{cartCount}</span>
              <span className="text-xs font-semibold tracking-wider">Cart</span>
            </button>
          </div>

        </div>

        {/* Category Pill Navigation (Desktop) */}
        <nav className="hidden lg:block border-t border-[#E8DBC9]/60 py-2.5">
          <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
            {navCategories.map((item, idx) => {
              const isActive = item.isHome && activeTab === 'home';
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#3B160D] text-white shadow-sm'
                      : 'text-[#35150E] hover:bg-[#FAF2E6] hover:text-[#3B160D]'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

      </div>
    </header>
  );
};
