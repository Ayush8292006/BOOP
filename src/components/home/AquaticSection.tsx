import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Sparkles, Droplets, ShieldCheck } from 'lucide-react';

export const AquaticSection: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Banner container with deep aquatic colors */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#031E2A] via-[#063A4F] to-[#042838] border border-[#0E7490]/40 group">
          
          {/* Background image overlay with blend */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/aquatic-banner-hd.jpg"
              alt="Lush planted tropical aquarium ecosystem"
              className="w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031E2A] via-[#031E2A]/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left text block */}
            <div className="max-w-xl text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7490]/30 border border-[#06B6D4]/40 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
                <Droplets className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Our Heritage Foundation • Volga Life Biosciences</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                Explore Our Aquatic Range
              </h2>

              <p className="text-sm sm:text-base text-[#E0F2FE] font-medium tracking-wide">
                Beautiful Fish <span className="text-[#38BDF8]">•</span> Premium Products <span className="text-[#38BDF8]">•</span> Healthy Ecosystems
              </p>

              <p className="text-xs sm:text-sm text-white/70 max-w-lg leading-relaxed pt-1">
                From specialized Hikari Japanese feeds and Teraa active substrates to natural water conditioners, discover aquarium care curated by seasoned marine and freshwater specialists.
              </p>
            </div>

            {/* Right side CTA & Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <div className="hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#0E7490]/40 flex items-center justify-center text-xl">
                  🐠
                </div>
                <div>
                  <p className="text-[11px] text-[#38BDF8] font-bold uppercase">100% Genuine</p>
                  <p className="text-xs text-white font-medium">Global Aquatic Brands</p>
                </div>
              </div>

              <button
                onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' })}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-[#031E2A] bg-gradient-to-r from-[#38BDF8] to-[#06B6D4] hover:from-white hover:to-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Shop Aquatic Range</span>
                <ArrowRight className="w-4 h-4 text-[#031E2A]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
