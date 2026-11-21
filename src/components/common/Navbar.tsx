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
  ChevronDown,
  ArrowRight
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
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

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

  const navCategories = [
    { label: 'Home', action: () => setActiveTab('home'), isHome: true },
    {
      label: 'Dogs',
      action: () => navigateToShopWithFilter({ pet: 'Dogs' }),
      mega: [
        { name: 'Puppy & Adult Nutrition', filter: { pet: 'Dogs' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Natural Chews & Biscuits', filter: { pet: 'Dogs' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Leather Collars & Leashes', filter: { pet: 'Dogs' as PetCategory, category: 'Collars & Leashes' as ProductCategory } },
        { name: 'Orthopedic Sleep Systems', filter: { pet: 'Dogs' as PetCategory, category: 'Beds & Comfort' as ProductCategory } },
        { name: 'Dermatological Shampoos', filter: { pet: 'Dogs' as PetCategory, category: 'Grooming & Hygiene' as ProductCategory } },
      ]
    },
    {
      label: 'Cats',
      action: () => navigateToShopWithFilter({ pet: 'Cats' }),
      mega: [
        { name: 'Gourmet Gravy & Wet Pouches', filter: { pet: 'Cats' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Grain-Free Ancestral Kibble', filter: { pet: 'Cats' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Feather Teasers & Agility', filter: { pet: 'Cats' as PetCategory, category: 'Toys & Play' as ProductCategory } },
        { name: 'Natural Sisal Scratchers', filter: { pet: 'Cats' as PetCategory, category: 'Beds & Comfort' as ProductCategory } },
        { name: 'Breathable Travel Capsules', filter: { pet: 'Cats' as PetCategory, category: 'Travel & Carriers' as ProductCategory } },
      ]
    },
    {
      label: 'Small Pets',
      action: () => navigateToShopWithFilter({ pet: 'Small Pets' }),
      mega: [
        { name: 'Sun-Cured Timothy Hay', filter: { pet: 'Small Pets' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Kiln-Dried Wood Tunnels', filter: { pet: 'Small Pets' as PetCategory, category: 'Enrichment & More' as ProductCategory } },
      ]
    },
    {
      label: 'Birds',
      action: () => navigateToShopWithFilter({ pet: 'Birds' }),
      mega: [
        { name: 'Triple-Cleaned Seed Blends', filter: { pet: 'Birds' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Natural Java Wood Perches', filter: { pet: 'Birds' as PetCategory, category: 'Enrichment & More' as ProductCategory } },
      ]
    },
    {
      label: 'Reptiles',
      action: () => navigateToShopWithFilter({ pet: 'Reptiles' }),
      mega: [
        { name: 'Freeze-Dried Insect Protein', filter: { pet: 'Reptiles' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Bioactive Calcium & D3', filter: { pet: 'Reptiles' as PetCategory, category: 'Health & Wellness' as ProductCategory } },
      ]
    },
    {
      label: 'Food & Treats',
      action: () => navigateToShopWithFilter({ category: 'Food & Treats' }),
    },
    {
      label: 'Accessories',
      action: () => navigateToShopWithFilter({ category: 'Collars & Leashes' }),
    },
    {
      label: 'Offers',
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4 sm:gap-6">
          
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-chocolate hover:text-caramel transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Left: Original Brand Logo with editorial micro-tagline */}
          <div className="flex items-center gap-4">
            <div
              onClick={() => setActiveTab('home')}
              className="cursor-pointer flex items-center group py-1"
            >
              <Logo variant="light" size="md" />
            </div>

            <div className="hidden xl:flex flex-col border-l border-[#E8DBC9] pl-4">
              <span className="font-display text-[12px] uppercase tracking-widest text-caramel font-semibold">
                A Little Boop &amp; Lot of Love
              </span>
              <span className="text-[10px] text-chocolate/50 font-medium tracking-wider uppercase mt-0.5">
                Volga Life Biosciences
              </span>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-lg mx-4 hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search food, accessories, toys and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => {
                  if (activeTab !== 'shop') setSearchModalOpen(true);
                }}
                className="w-full bg-[#FFFFFF] border border-[#E8DBC9] rounded-full py-2.5 pl-11 pr-24 text-xs font-medium text-chocolate placeholder:text-chocolate/40 focus:outline-none focus:border-caramel transition-all shadow-subtle"
              />
              <Search className="w-3.5 h-3.5 text-chocolate/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-chocolate text-[#F5E9D8] text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full hover:bg-chocolate-hover transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile search trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="md:hidden p-2 text-chocolate hover:text-caramel transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account / Pet Profile */}
            <button
              onClick={() => setPetProfileModalOpen(true)}
              className="flex items-center gap-2 py-2 px-3 rounded-full text-chocolate hover:text-caramel transition-colors group"
              title="My Account"
            >
              <User className="w-4 h-4 text-chocolate/80 group-hover:text-caramel" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">Account</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setWishlistDrawerOpen(true)}
              className="relative flex items-center gap-1.5 py-2 px-3 rounded-full text-chocolate hover:text-caramel transition-colors group"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 text-chocolate/80 group-hover:text-caramel" />
              {wishlist.length > 0 && (
                <span className="w-4 h-4 bg-caramel text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">Wishlist</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative flex items-center gap-2 bg-chocolate text-[#F5E9D8] hover:bg-chocolate-hover px-4 py-2.5 rounded-full shadow-subtle hover:shadow-luxury transition-all duration-300"
              title="View Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-caramel-light" />
              <span className="text-xs font-bold text-white tracking-wide">{cartCount}</span>
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider text-[#F5E9D8]/90">Bag</span>
            </button>
          </div>

        </div>

        {/* Category Horizontal Navigation (Desktop) */}
        <nav className="hidden lg:block border-t border-[#E8DBC9]/50 py-2.5">
          <ul className="flex items-center justify-between gap-1 text-xs font-medium text-chocolate uppercase tracking-wider">
            {navCategories.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => item.mega && setActiveMegaMenu(item.label)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  onClick={item.action}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                    item.isHome && activeTab === 'home'
                      ? 'text-chocolate font-bold border-b-2 border-chocolate rounded-none'
                      : item.highlight
                      ? 'text-caramel font-bold'
                      : 'hover:text-caramel'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.mega && (
                    <ChevronDown className="w-3 h-3 text-chocolate/40 group-hover:rotate-180 transition-transform" />
                  )}
                </button>

                {/* Refined Mega Menu Dropdown */}
                {item.mega && activeMegaMenu === item.label && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-luxury border border-[#E8DBC9] p-4 z-50 animate-fadeIn">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-caramel mb-2.5 pb-1 border-b border-[#E8DBC9]/60">
                      Curated For {item.label}
                    </div>
                    <div className="space-y-1.5">
                      {item.mega.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            navigateToShopWithFilter(sub.filter);
                            setActiveMegaMenu(null);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded text-xs text-chocolate/80 hover:text-caramel hover:bg-beige-light flex items-center justify-between group transition-colors"
                        >
                          <span>{sub.name}</span>
                          <ArrowRight className="w-3 h-3 text-chocolate/30 group-hover:text-caramel group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-[#E8DBC9]/60">
                      <button
                        onClick={() => {
                          item.action();
                          setActiveMegaMenu(null);
                        }}
                        className="text-[11px] font-bold tracking-wider text-caramel hover:text-chocolate uppercase flex items-center gap-1"
                      >
                        <span>View All {item.label} &rarr;</span>
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Aquatic Range Shortcut */}
            <li>
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' })}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#031E2A] text-[#38BDF8] text-xs font-semibold hover:bg-[#05293A] transition-colors"
              >
                <span>Aquatic Range</span>
              </button>
            </li>

            {/* About Us Link */}
            <li>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-3 py-1.5 transition-colors ${
                  activeTab === 'about'
                    ? 'text-chocolate font-bold border-b-2 border-chocolate'
                    : 'text-chocolate/70 hover:text-chocolate'
                }`}
              >
                Brand Story
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-4/5 max-w-sm bg-[#FFFAF4] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#E8DBC9] flex items-center justify-between bg-white">
              <Logo variant="light" size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded text-chocolate"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-[#E8DBC9]">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search pets, food, toys..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-[#E8DBC9] rounded-full py-2 pl-9 pr-4 text-xs text-chocolate"
                  />
                  <Search className="w-3.5 h-3.5 text-chocolate/50 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </form>
            </div>

            {/* Nav list */}
            <div className="p-5 space-y-1 flex-1">
              <div className="text-[10px] uppercase font-bold tracking-widest text-caramel mb-2">
                Shop By Pet
              </div>
              {[
                { name: 'Dogs', pet: 'Dogs' as PetCategory },
                { name: 'Cats', pet: 'Cats' as PetCategory },
                { name: 'Small Pets', pet: 'Small Pets' as PetCategory },
                { name: 'Birds', pet: 'Birds' as PetCategory },
                { name: 'Reptiles & Turtles', pet: 'Reptiles' as PetCategory },
                { name: 'Aquatic Range (Volga Heritage)', pet: 'Aquatics' as PetCategory, highlight: true },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigateToShopWithFilter({ pet: item.pet });
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-semibold transition-colors ${
                    item.highlight
                      ? 'bg-[#031E2A] text-[#38BDF8]'
                      : 'text-chocolate hover:bg-beige-light'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </button>
              ))}

              <div className="text-[10px] uppercase font-bold tracking-widest text-caramel mt-6 mb-2">
                Company &amp; Story
              </div>
              <button
                onClick={() => {
                  setActiveTab('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-chocolate hover:bg-beige-light"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateToShopWithFilter({ pet: 'All' });
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-chocolate hover:bg-beige-light"
              >
                Shop All Collection
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-chocolate hover:bg-beige-light"
              >
                About BOOP STORE
              </button>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#E8DBC9] bg-white text-center">
              <p className="text-[11px] text-chocolate/60">
                A Unit of Volga Life Biosciences LLP
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
