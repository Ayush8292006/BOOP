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
  Sparkles,
  Dog,
  Cat,
  Fish,
  Tag,
  Flame,
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
    setSelectedPetFilter,
    setSelectedCategoryFilter,
    searchQuery,
    setSearchQuery,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

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
      window.scrollTo({ top: 300, behavior: 'smooth' });
    } else {
      setSearchModalOpen(true);
    }
  };

  const navCategories = [
    { label: 'Home', action: () => setActiveTab('home'), isHome: true },
    {
      label: 'Dogs',
      icon: Dog,
      action: () => navigateToShopWithFilter({ pet: 'Dogs' }),
      mega: [
        { name: 'Puppy & Adult Dry Food', filter: { pet: 'Dogs' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Treats & Chews', filter: { pet: 'Dogs' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Collars & Harnesses', filter: { pet: 'Dogs' as PetCategory, category: 'Collars & Leashes' as ProductCategory } },
        { name: 'Orthopedic Beds', filter: { pet: 'Dogs' as PetCategory, category: 'Beds & Comfort' as ProductCategory } },
        { name: 'Grooming & Shampoos', filter: { pet: 'Dogs' as PetCategory, category: 'Grooming & Hygiene' as ProductCategory } },
      ]
    },
    {
      label: 'Cats',
      icon: Cat,
      action: () => navigateToShopWithFilter({ pet: 'Cats' }),
      mega: [
        { name: 'Wet Pouches & Gravy', filter: { pet: 'Cats' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Grain-Free Kibble', filter: { pet: 'Cats' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Feather Toys & Lasers', filter: { pet: 'Cats' as PetCategory, category: 'Toys & Play' as ProductCategory } },
        { name: 'Scratchers & Trees', filter: { pet: 'Cats' as PetCategory, category: 'Beds & Comfort' as ProductCategory } },
        { name: 'Capsule Travel Carriers', filter: { pet: 'Cats' as PetCategory, category: 'Travel & Carriers' as ProductCategory } },
      ]
    },
    {
      label: 'Small Pets',
      action: () => navigateToShopWithFilter({ pet: 'Small Pets' }),
      mega: [
        { name: 'Timothy Hay & Pellets', filter: { pet: 'Small Pets' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Wooden Chews & Tunnels', filter: { pet: 'Small Pets' as PetCategory, category: 'Enrichment & More' as ProductCategory } },
      ]
    },
    {
      label: 'Birds',
      action: () => navigateToShopWithFilter({ pet: 'Birds' }),
      mega: [
        { name: 'Clean Seed Mixes', filter: { pet: 'Birds' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Natural Java Perches', filter: { pet: 'Birds' as PetCategory, category: 'Enrichment & More' as ProductCategory } },
      ]
    },
    {
      label: 'Reptiles',
      action: () => navigateToShopWithFilter({ pet: 'Reptiles' }),
      mega: [
        { name: 'ProMeal Freeze-Dried Worms', filter: { pet: 'Reptiles' as PetCategory, category: 'Food & Treats' as ProductCategory } },
        { name: 'Calcium & Vitamin D3', filter: { pet: 'Reptiles' as PetCategory, category: 'Health & Wellness' as ProductCategory } },
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
        window.scrollTo({ top: 400, behavior: 'smooth' });
      },
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFAF4]/95 backdrop-blur-md shadow-md border-b border-[#F5E9D8]'
          : 'bg-[#FFFAF4] border-b border-[#F5E9D8]/60'
      }`}
    >
      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
          
          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl text-chocolate hover:bg-beige-light transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Left: Official Brand Logo */}
          <div className="flex items-center gap-3">
            <div
              onClick={() => setActiveTab('home')}
              className="cursor-pointer flex items-center group py-1"
            >
              <Logo variant="light" size="md" />
            </div>

            <div className="hidden xl:flex flex-col border-l border-beige-border pl-3">
              <span className="font-handwriting text-caramel text-sm font-semibold tracking-wide leading-none">
                A Little Boop &amp; Lot of Love ❤️
              </span>
              <span className="text-[10px] text-chocolate/60 font-medium tracking-tight mt-0.5">
                By Volga Life Biosciences
              </span>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-xl mx-2 sm:mx-6 hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search food, accessories, toys and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => {
                  if (activeTab !== 'shop') setSearchModalOpen(true);
                }}
                className="w-full bg-[#FFFDF9] border border-beige-border rounded-full py-2.5 pl-11 pr-24 text-sm text-chocolate placeholder:text-chocolate/50 focus:outline-none focus:ring-2 focus:ring-caramel/50 focus:border-caramel transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-chocolate/50 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-chocolate text-beige text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-chocolate-light transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right: Account, Wishlist, Cart */}
          <div className="flex items-center gap-1 sm:gap-3">
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
              className="flex items-center gap-1.5 p-2 rounded-xl text-chocolate hover:bg-beige-light hover:text-caramel transition-all group"
              title="My Account &amp; Pet Profiles"
            >
              <div className="w-8 h-8 rounded-full bg-beige/60 flex items-center justify-center group-hover:bg-caramel/20 transition-colors">
                <User className="w-4 h-4 text-chocolate" />
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-chocolate">Account</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setWishlistDrawerOpen(true)}
              className="relative p-2 rounded-xl text-chocolate hover:bg-beige-light hover:text-caramel transition-all group"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <div className="w-8 h-8 rounded-full bg-beige/60 flex items-center justify-center group-hover:bg-caramel/20 transition-colors">
                <Heart className="w-4 h-4 text-chocolate" />
              </div>
              {wishlist.length > 0 && (
                <span className="absolute 1 top-1 right-1 w-4 h-4 bg-caramel text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-ivory">
                  {wishlist.length}
                </span>
              )}
              <span className="hidden sm:inline text-xs font-semibold text-chocolate ml-1">Wishlist</span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="relative flex items-center gap-1.5 bg-chocolate text-beige px-3.5 py-2 rounded-full hover:bg-chocolate-light shadow-md hover:shadow-lg transition-all"
              title="View Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 text-caramel-light" />
              <span className="text-xs font-bold text-[#FFFAF4]">{cartCount}</span>
              <span className="hidden sm:inline text-xs font-medium text-beige/80 ml-0.5">Cart</span>
            </button>
          </div>

        </div>

        {/* Category Navigation Bar (Desktop) */}
        <nav className="hidden lg:block border-t border-beige-border/50 py-2">
          <ul className="flex items-center justify-between gap-1 text-xs font-semibold text-chocolate">
            {navCategories.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => item.mega && setActiveMegaMenu(item.label)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button
                  onClick={item.action}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    item.isHome && activeTab === 'home'
                      ? 'bg-chocolate text-beige shadow-sm'
                      : item.highlight
                      ? 'bg-caramel/15 text-caramel hover:bg-caramel/25'
                      : 'hover:bg-beige/70 text-chocolate hover:text-chocolate-dark'
                  }`}
                >
                  {item.icon && <item.icon className="w-3.5 h-3.5 text-caramel" />}
                  <span>{item.label}</span>
                  {item.mega && (
                    <ChevronDown className="w-3 h-3 text-chocolate/40 group-hover:rotate-180 transition-transform" />
                  )}
                  {item.highlight && <Flame className="w-3 h-3 text-red-500 fill-current" />}
                </button>

                {/* Mega Menu Dropdown */}
                {item.mega && activeMegaMenu === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-[#FFFDF9] rounded-2xl shadow-xl border border-beige-border p-3 z-50 animate-fadeIn">
                    <div className="text-[10px] uppercase font-bold text-caramel tracking-wider mb-2 px-2">
                      Popular for {item.label}
                    </div>
                    <div className="space-y-1">
                      {item.mega.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => {
                            navigateToShopWithFilter(sub.filter);
                            setActiveMegaMenu(null);
                          }}
                          className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs text-chocolate hover:bg-beige/60 hover:text-caramel flex items-center justify-between group transition-colors"
                        >
                          <span>{sub.name}</span>
                          <ArrowRight className="w-3 h-3 text-chocolate/30 group-hover:text-caramel group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-beige-border px-2">
                      <button
                        onClick={() => {
                          item.action();
                          setActiveMegaMenu(null);
                        }}
                        className="text-[11px] font-bold text-caramel hover:underline flex items-center gap-1"
                      >
                        <span>View All {item.label} Products &rarr;</span>
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Aquatic Range Direct Link */}
            <li>
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' })}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-aquatic-dark text-[#38BDF8] hover:bg-aquatic-deep text-xs font-bold transition-all shadow-sm"
              >
                <Fish className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Aquatics</span>
              </button>
            </li>

            {/* About Us Link */}
            <li>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-3 py-1.5 rounded-full transition-all text-xs font-semibold ${
                  activeTab === 'about'
                    ? 'bg-chocolate text-beige'
                    : 'text-chocolate/70 hover:text-chocolate hover:bg-beige/60'
                }`}
              >
                About Us
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm bg-[#FFFAF4] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 border-b border-beige-border flex items-center justify-between bg-[#F5E9D8]/50">
              <Logo variant="light" size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-beige text-chocolate"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Search */}
            <div className="p-4 border-b border-beige-border/50">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search pets, food, toys..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-beige-border rounded-full py-2 pl-9 pr-4 text-xs text-chocolate"
                  />
                  <Search className="w-3.5 h-3.5 text-chocolate/50 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </form>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-1 flex-1">
              <div className="text-[10px] uppercase font-bold text-caramel tracking-wider mb-2">
                Shop By Pet
              </div>
              {[
                { name: 'Dogs', pet: 'Dogs' as PetCategory, icon: Dog },
                { name: 'Cats', pet: 'Cats' as PetCategory, icon: Cat },
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    item.highlight
                      ? 'bg-aquatic-dark text-[#38BDF8]'
                      : 'text-chocolate hover:bg-beige-light'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon && <item.icon className="w-4 h-4 text-caramel" />}
                    <span>{item.name}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </button>
              ))}

              <div className="text-[10px] uppercase font-bold text-caramel tracking-wider mt-6 mb-2">
                Quick Pages
              </div>
              <button
                onClick={() => {
                  setActiveTab('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-chocolate hover:bg-beige-light"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateToShopWithFilter({ pet: 'All' });
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-chocolate hover:bg-beige-light"
              >
                Shop All Products
              </button>
              <button
                onClick={() => {
                  setActiveTab('about');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-chocolate hover:bg-beige-light"
              >
                About BOOP STORE
              </button>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-beige-border bg-beige-light/40 space-y-2">
              <button
                onClick={() => {
                  setPetProfileModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-chocolate text-beige text-xs font-semibold"
              >
                <User className="w-3.5 h-3.5" />
                <span>My Pet Profile</span>
              </button>
              <p className="text-[11px] text-center text-chocolate/60">
                A Unit of Volga Life Biosciences LLP
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
