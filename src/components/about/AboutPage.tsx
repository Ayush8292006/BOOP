import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../common/Logo';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <div className="bg-[#FFFAF4] text-chocolate min-h-screen">
      
      {/* 1. Architectural Editorial Hero */}
      <section className="relative overflow-hidden bg-[#29100B] text-[#FFFAF4] py-24 sm:py-32 border-b border-[#E8DBC9]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/about-aquatics-heritage.jpg"
            alt="Volga Life Biosciences aquatic background"
            className="w-full h-full object-cover filter contrast-125"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-ultra text-[#F5E9D8]/70 font-semibold block">
            The Philosophy of BOOP STORE
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#FFFAF4] tracking-tight leading-tight">
            ABOUT BOOP STORE
          </h1>

          <p className="font-display text-lg sm:text-xl text-caramel uppercase tracking-widest font-semibold">
            A Little Boop &amp; Lot of Love ❤️
          </p>

          <p className="text-xs sm:text-sm text-[#F5E9D8]/75 max-w-2xl mx-auto font-light leading-relaxed">
            From our foundational roots in aquatic science to every corner of pet care, discover how Volga Life Biosciences is shaping an authentic, customer-first pet parenting destination.
          </p>
        </div>
      </section>

      {/* 2. Brand Introduction (Verbatim text) */}
      <section className="py-20 sm:py-28 border-b border-[#E8DBC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel block">
                Brand Introduction
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate leading-tight">
                "Every pet store promises quality, variety and great service. So, what makes BOOP STORE different?"
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-chocolate/80 leading-relaxed font-light">
                <p>
                  For us, it's not just about putting products on shelves. It's about understanding the needs of different pets, bringing together trusted brands, making informed product choices and creating a shopping experience that pet parents can rely on.
                </p>
                <p>
                  Our foundation comes from the aquatic industry, where, through <strong className="font-semibold text-chocolate">Volga Life Biosciences</strong>, we've built experience, industry relationships and a commitment to authentic products and dependable service.
                </p>
                <p>
                  Now, we're taking that same approach beyond aquatics and into the wider world of pet care.
                </p>
                <p>
                  From dogs and cats to birds, small pets and reptiles, we're expanding our horizons with one goal: to bring the same level of commitment, product integrity and customer care to every pet-loving household.
                </p>
              </div>
            </div>

            {/* Editorial Photography (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-elevation border border-[#E8DBC9] bg-[#F5E9D8] group">
                <img
                  src="/images/about-pet-care.jpg"
                  alt="Authentic pet care relationships"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Aquatic Industry Foundation (Image-left, Text-right) */}
      <section className="py-20 sm:py-28 bg-[#031E2A] text-white border-b border-[#E8DBC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Aquarium Image (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-elevation border border-[#0E7490]/40 group">
                <img
                  src="/images/about-aquatics-heritage.jpg"
                  alt="Precision aquatic ecosystem technology by Volga Life Biosciences"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                />
              </div>
            </div>

            {/* Aquatic Foundation Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-ultra font-semibold text-[#38BDF8] block">
                The Aquatic Foundation
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Rooted in Aquatic Precision, <br />
                Expanded to All Companions.
              </h2>

              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Aquatics demands the highest standards of biological purity, water chemistry precision, and nutritional integrity. A single flawed formula can compromise an entire ecosystem.
              </p>

              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                By applying that same uncompromising biological rigor to dogs, cats, small animals, birds, and reptiles, BOOP STORE ensures that every pet parent receives genuine, uncompromised product authenticity.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' })}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#031E2A] bg-[#38BDF8] hover:bg-white transition-all shadow-luxury"
                >
                  <span>Explore Our Aquatic Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#031E2A]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What Makes Us Different? (Verbatim text) */}
      <section className="py-20 sm:py-28 bg-[#FFFAF4] border-b border-[#E8DBC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-ultra font-semibold text-caramel block">
              Core Philosophy
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
              WHAT MAKES US DIFFERENT?
            </h2>
          </div>

          <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#E8DBC9] shadow-subtle space-y-6">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-chocolate leading-relaxed max-w-3xl mx-auto">
              "A foundation built on industry experience, a growing network of trusted brands, carefully curated products and a customer-first approach."
            </p>

            <div className="w-16 h-px bg-caramel mx-auto" />

            <p className="text-base sm:text-lg text-chocolate/75 font-light leading-relaxed max-w-2xl mx-auto">
              We believe the right product should come with the confidence of knowing where it comes from.
            </p>
          </div>

        </div>
      </section>

      {/* 5 & 6. Our Vision & Our Promise (Verbatim text) */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E8DBC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Vision Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFAF4] border border-[#E8DBC9] shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DBC9] flex items-center justify-center text-caramel">
                  <Compass className="w-5 h-5 text-caramel" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                  OUR VISION
                </h3>
                <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-light">
                  To become a trusted destination for pet parents across India, bringing diverse pet-care needs and quality products together under one roof.
                </p>
              </div>
            </div>

            {/* Promise Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFAF4] border border-[#E8DBC9] shadow-subtle flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DBC9] flex items-center justify-center text-caramel">
                  <ShieldCheck className="w-5 h-5 text-caramel" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                  OUR PROMISE
                </h3>
                <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-light">
                  The same commitment that shaped our journey in aquatics: authentic products, dependable service and a genuine passion for better pet care.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Final Brand Statement Banner (Verbatim text) */}
      <section className="py-20 sm:py-28 bg-[#29100B] text-[#FFFAF4] text-center border-t border-[#35150E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="inline-block mb-3">
            <Logo variant="dark" size="xl" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            BOOP STORE &mdash; A Little Boop &amp; Lot of Love ❤️
          </h2>

          <p className="text-lg sm:text-xl text-[#F5E9D8] font-medium tracking-wide">
            A brand by Volga Life Biosciences.
          </p>

          <p className="text-xs sm:text-sm text-[#F5E9D8]/70 max-w-lg mx-auto font-light leading-relaxed pt-2">
            Dedicated to bringing authentic products, dependable care, and lasting happiness to pet families across the country.
          </p>

          <div className="pt-6">
            <button
              onClick={() => navigateToShopWithFilter({ pet: 'All' })}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#29100B] bg-white hover:bg-[#F5E9D8] shadow-luxury transition-all"
            >
              <span>Explore The Store</span>
              <ArrowRight className="w-4 h-4 text-[#29100B]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
