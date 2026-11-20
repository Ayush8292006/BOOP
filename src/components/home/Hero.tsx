import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateToShopWithFilter, setActiveTab } = useShop();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFAF4] via-[#FDF5E9] to-[#FFFAF4] pt-6 pb-12 sm:pb-20 border-b border-[#F5E9D8]">
      {/* Decorative ambient background paw shapes and glows */}
      <div className="absolute top-10 left-8 w-72 h-72 rounded-full bg-caramel/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-10 w-96 h-96 rounded-full bg-sage/15 blur-3xl pointer-events-none" />

      {/* Decorative SVG paw prints in background */}
      <div className="absolute top-1/4 right-1/3 opacity-15 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#3B160D">
          <ellipse cx="8.5" cy="5" rx="2" ry="2.5" />
          <ellipse cx="15.5" cy="5" rx="2" ry="2.5" />
          <ellipse cx="5" cy="11" rx="2" ry="2.5" />
          <ellipse cx="19" cy="11" rx="2" ry="2.5" />
          <path d="M12 11c-3.5 0-6 2.5-6 6 0 2 2 3.5 6 3.5s6-1.5 6-3.5c0-3.5-2.5-6-6-6z" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-1/4 opacity-10 pointer-events-none transform -rotate-12">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#3B160D">
          <ellipse cx="8.5" cy="5" rx="2" ry="2.5" />
          <ellipse cx="15.5" cy="5" rx="2" ry="2.5" />
          <ellipse cx="5" cy="11" rx="2" ry="2.5" />
          <ellipse cx="19" cy="11" rx="2" ry="2.5" />
          <path d="M12 11c-3.5 0-6 2.5-6 6 0 2 2 3.5 6 3.5s6-1.5 6-3.5c0-3.5-2.5-6-6-6z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-2 lg:pt-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5E9D8] border border-[#E2CEB7] text-chocolate shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-caramel fill-current" />
              <span className="font-handwriting text-base font-bold text-chocolate tracking-wide">
                A Little Boop &amp; Lot of Love ❤️
              </span>
              <span className="hidden sm:inline text-chocolate/30">•</span>
              <span className="hidden sm:inline text-[11px] font-semibold uppercase tracking-wider text-caramel-dark">
                By Volga Life Biosciences
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-chocolate tracking-tight leading-[1.12]">
              Everything Your Pets Love, <br className="hidden sm:inline" />
              <span className="relative inline-block text-chocolate">
                All in One Place.
                {/* Curved underline flourish */}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-caramel/40 -z-10"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7C55 1.5 145 1.5 197.5 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-chocolate/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Premium food, everyday essentials, fun toys and accessories for your furry &amp; scaly friends.
            </p>

            {/* CTAs & Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-chocolate hover:bg-chocolate-light shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 text-beige group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-chocolate bg-white/70 hover:bg-white border border-beige-border hover:border-caramel/50 shadow-sm transition-all"
              >
                <span>Our Brand Story</span>
              </button>
            </div>

            {/* Micro proof line */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-chocolate/70 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-caramel" />
                <span>100% Genuine Brands</span>
              </div>
              <span className="text-chocolate/30">•</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-caramel fill-current" />
                <span>Aquatic &amp; Pet Nutrition Experts</span>
              </div>
              <span className="text-chocolate/30">•</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-caramel fill-current" />
                <span>Pan India Doorstep Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Pet Image with Organic Rounded Mask & Warm Aura */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-[#F5E9D8] to-white group">
                <img
                  src="/images/hero-pets.jpg"
                  alt="Golden Retriever puppy and cat cuddling peacefully - BOOP STORE"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill badge 1: 100% Authentic */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-beige-border flex items-center gap-2 animate-float">
                  <div className="w-6 h-6 rounded-full bg-caramel/20 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-caramel" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-chocolate/60 tracking-wider">Curated With</p>
                    <p className="text-xs font-bold text-chocolate">A Lot of Love ❤️</p>
                  </div>
                </div>

                {/* Floating pill badge 2: Aquatic Heritage */}
                <div className="absolute bottom-4 right-4 bg-[#29150F]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-aquatic-deep flex items-center justify-center text-white font-bold text-xs">
                    🐟
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-caramel font-semibold uppercase tracking-wider">Foundation In</p>
                    <p className="text-xs font-bold text-white">Aquatics &amp; Pet Care</p>
                  </div>
                </div>

              </div>

              {/* Decorative back card layer for layered depth */}
              <div className="absolute -inset-2 bg-gradient-to-r from-caramel/20 to-sage/20 rounded-[2.8rem] -z-10 blur-sm transform -rotate-1" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
