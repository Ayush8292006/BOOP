import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from './Logo';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from 'lucide-react';
import { PetCategory, ProductCategory } from '../../types';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
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

  // Nav pills directly matching Reference Image 1
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFAF4]/95 backdrop-blur-md shadow-subtle border-b border-[#E8DBC9]'
          : 'bg-[#FFFAF4] border-b border-[#E8DBC9]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-20 sm:h-22 gap-4 sm:gap-6">
          
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-chocolate hover:text-caramel transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

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

          {/* Center: Search Bar directly matching Reference Image 1 */}
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
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
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile search trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden p-2 text-chocolate hover:text-caramel transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <button
              onClick={() => setPetProfileModalOpen(true)}
              className="flex items-center gap-1.5 py-2 px-3 rounded-full text-chocolate hover:text-caramel transition-colors cursor-pointer"
              title="My Account"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wider">Account</span>
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
              <span className="hidden sm:inline text-xs font-semibold tracking-wider">Wishlist</span>
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
              <span className="hidden sm:inline text-xs font-semibold tracking-wider">Cart</span>
            </button>
          </div>

        </div>

        {/* Category Pill Navigation (Desktop) - Directly matching Reference Image 1 */}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Logo variant="light" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-chocolate"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 pt-4">
                {navCategories.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      item.action();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-bold text-chocolate hover:bg-[#FAF2E6] transition-colors"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DBC9] text-xs text-chocolate/60">
              <p>A Brand by Volga Life Biosciences</p>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
