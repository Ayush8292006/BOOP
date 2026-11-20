import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from '../common/Logo';
import { Sparkles, Heart, ArrowRight, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateToShopWithFilter } = useShop();

  return (
    <div className="bg-[#FFFAF4] text-chocolate min-h-screen">
      
      {/* 1. Premium About Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#29150F] via-[#3B160D] to-[#29150F] text-[#FFFAF4] py-20 sm:py-28 border-b-4 border-caramel">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/about-aquatics-heritage.jpg"
            alt="Volga Life Biosciences aquatic research backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5E9D8] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The Story of BOOP STORE</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#FFFAF4] tracking-tight leading-tight">
            ABOUT BOOP STORE
          </h1>

          <p className="font-handwriting text-2xl sm:text-3xl text-beige font-bold tracking-wide">
            A Little Boop &amp; Lot of Love ❤️
          </p>

          <p className="text-sm sm:text-base text-beige/80 max-w-2xl mx-auto font-light leading-relaxed">
            From our foundational roots in aquatic science to every corner of pet care, discover how Volga Life Biosciences is shaping a more authentic pet parenting experience.
          </p>
        </div>
      </section>

      {/* 2. Brand Introduction (Text-left, Image-right) */}
      <section className="py-16 sm:py-24 border-b border-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-bold text-caramel tracking-widest">
                Our Philosophy
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/images/about-pet-care.jpg"
                  alt="Compassionate pet care and authentic relationships"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-sm">
                    <p className="font-handwriting text-xl text-beige">Care that pets can feel.</p>
                    <p className="text-xs text-white/80">Every pet matters to our family.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Aquatic Industry Foundation (Image-left, Text-right) */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#031E2A] via-[#063A4F] to-[#042838] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Aquarium Image (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0E7490]/50 group">
                <img
                  src="/images/about-aquatics-heritage.jpg"
                  alt="Precision aquatic ecosystem technology by Volga Life Biosciences"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#031E2A]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-xs text-[#E0F2FE]">
                  <p className="font-bold text-[#38BDF8] uppercase tracking-wider mb-1">Volga Life Biosciences Heritage</p>
                  <p>Decades of mastery in specialized freshwater &amp; marine ecosystem nutrition.</p>
                </div>
              </div>
            </div>

            {/* Aquatic Foundation Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7490]/40 border border-[#06B6D4]/50 text-[#38BDF8] text-xs font-semibold uppercase tracking-widest">
                <span>The Aquatics Legacy</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Rooted in Aquatic Precision, <br />
                Expanded to All Companions.
              </h2>

              <p className="text-base sm:text-lg text-[#E0F2FE]/90 font-light leading-relaxed">
                Aquatics demands the highest standards of biological purity, water chemistry precision, and nutritional integrity. A single flawed formula can compromise an entire ecosystem.
              </p>

              <p className="text-base sm:text-lg text-[#E0F2FE]/90 font-light leading-relaxed">
                By applying that same uncompromising biological rigor to dogs, cats, small animals, birds, and reptiles, BOOP STORE ensures that every pet parent receives genuine, uncompromised product authenticity.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigateToShopWithFilter({ pet: 'Aquatics' })}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#031E2A] bg-[#38BDF8] hover:bg-white transition-all shadow-lg"
                >
                  <span>Explore Our Aquatic Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#031E2A]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What Makes Us Different? (Card highlight) */}
      <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-beige-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs uppercase font-bold text-caramel tracking-widest">
              Core Distinction
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-chocolate tracking-tight">
              WHAT MAKES US DIFFERENT?
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F5E9D8] via-[#FAF3EA] to-[#F5E9D8] border border-beige-border shadow-soft relative overflow-hidden">
            <div className="absolute top-4 left-6 text-6xl text-caramel/20 font-serif">“</div>
            
            <p className="relative z-10 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-chocolate leading-relaxed max-w-3xl mx-auto">
              A foundation built on industry experience, a growing network of trusted brands, carefully curated products and a customer-first approach.
            </p>

            <div className="my-6 w-20 h-0.5 bg-caramel/50 mx-auto" />

            <p className="relative z-10 text-base sm:text-lg text-chocolate/80 font-normal leading-relaxed max-w-2xl mx-auto">
              We believe the right product should come with the confidence of knowing where it comes from.
            </p>
          </div>

        </div>
      </section>

      {/* 5 & 6. Our Vision & Our Promise (Side-by-side editorial composition) */}
      <section className="py-16 sm:py-24 bg-[#FFFAF4] border-b border-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-beige-border shadow-card flex flex-col justify-between space-y-6 hover:shadow-hover transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-caramel/15 flex items-center justify-center text-caramel">
                  <Compass className="w-6 h-6 text-caramel" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                  OUR VISION
                </h3>
                <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-light">
                  To become a trusted destination for pet parents across India, bringing diverse pet-care needs and quality products together under one roof.
                </p>
              </div>

              <div className="pt-4 border-t border-beige-border/60 flex items-center gap-2 text-xs font-semibold text-caramel">
                <CheckCircle2 className="w-4 h-4" />
                <span>Pan-India Pet Parenting Trust</span>
              </div>
            </div>

            {/* Promise Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-beige-border shadow-card flex flex-col justify-between space-y-6 hover:shadow-hover transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sage/20 flex items-center justify-center text-sage-dark">
                  <ShieldCheck className="w-6 h-6 text-sage-dark" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-chocolate tracking-tight">
                  OUR PROMISE
                </h3>
                <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-light">
                  The same commitment that shaped our journey in aquatics: authentic products, dependable service and a genuine passion for better pet care.
                </p>
              </div>

              <div className="pt-4 border-t border-beige-border/60 flex items-center gap-2 text-xs font-semibold text-sage-dark">
                <CheckCircle2 className="w-4 h-4" />
                <span>Dependable Service &amp; Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Final Brand Statement Banner */}
      <section className="py-20 sm:py-28 bg-[#29150F] text-[#FFFAF4] text-center relative overflow-hidden">
        {/* Ambient warm glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-caramel/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="p-3 inline-block rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl mb-2">
            <Logo variant="dark" size="xl" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            BOOP STORE — A Little Boop &amp; Lot of Love ❤️
          </h2>

          <p className="text-lg sm:text-xl text-beige font-medium tracking-wide">
            A brand by Volga Life Biosciences.
          </p>

          <p className="text-sm text-beige/70 max-w-lg mx-auto font-light leading-relaxed pt-2">
            Dedicated to bringing authentic products, dependable care, and lasting happiness to pet families across the country.
          </p>

          <div className="pt-6">
            <button
              onClick={() => navigateToShopWithFilter({ pet: 'All' })}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-chocolate bg-gradient-to-r from-beige via-white to-beige hover:from-white hover:to-white shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore The Store</span>
              <ArrowRight className="w-5 h-5 text-chocolate" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
