import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from './Logo';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { welcomeScreenVisible, setWelcomeScreenVisible } = useShop();
  const [animStage, setAnimStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!welcomeScreenVisible) return;

    // Sequence stages
    const timer1 = setTimeout(() => setAnimStage(1), 150);  // Bg + Logo
    const timer2 = setTimeout(() => setAnimStage(2), 500);  // Tagline
    const timer3 = setTimeout(() => setAnimStage(3), 850);  // Pet photography
    const timer4 = setTimeout(() => setAnimStage(4), 1200); // Welcome text + CTA

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [welcomeScreenVisible]);

  if (!welcomeScreenVisible) return null;

  const handleDismiss = () => {
    try {
      localStorage.setItem('boop_welcome_seen', 'true');
    } catch {
      // ignore
    }
    setIsExiting(true);
    setTimeout(() => {
      setWelcomeScreenVisible(false);
      setIsExiting(false);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to BOOP STORE"
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto px-4 py-8 bg-[#29150F] text-[#FFFAF4] transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: `radial-gradient(circle at 50% 30%, rgba(183, 122, 69, 0.18) 0%, rgba(41, 21, 15, 0.98) 70%)`
      }}
    >
      {/* Skip button top right */}
      <button
        onClick={handleDismiss}
        className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#F5E9D8] bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-200 border border-white/15"
      >
        Skip to Store &rarr;
      </button>

      {/* Background ambient warm glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B77A45]/20 blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#A6AD8A]/15 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center justify-center">
        
        {/* Stage 1: Brand Logo */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            animStage >= 1
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-90'
          }`}
        >
          <div className="p-3 inline-block rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl mb-4">
            <Logo variant="dark" size="xl" />
          </div>
        </div>

        {/* Stage 2: Tagline */}
        <div
          className={`transition-all duration-700 delay-100 ease-out transform ${
            animStage >= 2
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B77A45]/30 border border-[#B77A45]/40 text-[#F5E9D8] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F5E9D8]" />
            A Brand by Volga Life Biosciences
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#FFFAF4] tracking-tight leading-tight">
            A Little Boop &amp; Lot of Love <span className="text-red-400 inline-block animate-bounce">❤️</span>
          </h1>
        </div>

        {/* Stage 3: Beautiful realistic pet photography */}
        <div
          className={`w-full max-w-md mx-auto my-6 sm:my-8 transition-all duration-700 ease-out transform ${
            animStage >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-95'
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
            <img
              src="/images/welcome-pets.jpg"
              alt="Adorable Golden Retriever and Kitten welcoming you to BOOP STORE"
              className="w-full h-48 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29150F]/80 via-transparent to-transparent flex items-end p-4">
              <div className="flex items-center gap-2 text-xs text-[#F5E9D8] font-medium">
                <Heart className="w-4 h-4 text-[#B77A45] fill-current" />
                <span>Dedicated to every wag, purr, chirp &amp; swim.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stage 4: Welcome message & CTA */}
        <div
          className={`space-y-6 max-w-lg transition-all duration-700 ease-out transform ${
            animStage >= 4
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm sm:text-base text-[#F5E9D8]/90 font-light leading-relaxed">
            Welcome to India's growing pet-care haven. Grounded in decades of aquatic expertise, now thoughtfully curated for all your beloved companions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleDismiss}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-bold text-[#29150F] bg-gradient-to-r from-[#F5E9D8] via-[#FFFAF4] to-[#F5E9D8] hover:from-white hover:to-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Explore Store</span>
              <ArrowRight className="w-5 h-5 text-[#3B160D]" />
            </button>

            <button
              onClick={handleDismiss}
              className="w-full sm:w-auto px-5 py-3 rounded-full text-sm font-medium text-[#F5E9D8]/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              Browse Catalog
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
