import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from './Logo';
import { ArrowRight } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { welcomeScreenVisible, setWelcomeScreenVisible } = useShop();
  const [animStage, setAnimStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!welcomeScreenVisible) return;

    // Cinematic choreographed timing sequence
    const t1 = setTimeout(() => setAnimStage(1), 200);  // Subtle warm ambient light & logo reveal
    const t2 = setTimeout(() => setAnimStage(2), 700);  // Tagline reveal
    const t3 = setTimeout(() => setAnimStage(3), 1100); // Supporting statement & photo composition
    const t4 = setTimeout(() => setAnimStage(4), 1500); // CTA entrance

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
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
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to BOOP STORE"
      className={`fixed inset-0 z-[9999] flex flex-col justify-between items-center px-6 py-8 sm:py-12 bg-[#29100B] text-[#FFFAF4] transition-opacity duration-700 ease-out select-none overflow-hidden ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Very subtle warm cinematic radial illumination */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(183, 122, 69, 0.12) 0%, rgba(41, 16, 11, 0.98) 75%)'
        }}
      />

      {/* Subtle luxury hairline texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#F5E9D8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Header: Brand Association & Skip Action */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between">
        <span 
          className={`text-[11px] uppercase tracking-ultra text-[#F5E9D8]/60 font-medium transition-all duration-700 ${
            animStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          A Brand by Volga Life Biosciences
        </span>

        <button
          onClick={handleDismiss}
          className={`text-[11px] uppercase tracking-widest text-[#F5E9D8]/60 hover:text-white transition-all duration-300 py-1.5 px-3 rounded border border-white/10 hover:border-white/30 backdrop-blur-sm ${
            animStage >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Skip Intro
        </button>
      </div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-xl w-full mx-auto text-center flex flex-col items-center my-auto py-8">
        
        {/* Stage 1 & 2: Original BOOP STORE Logo with subtle light halo */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            animStage >= 1
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <div className="relative mb-6">
            <div className="absolute -inset-4 bg-[#B77A45]/15 rounded-full blur-2xl pointer-events-none" />
            <img
              src="/images/boop-logo-white.png"
              alt="BOOP STORE"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Stage 3: Fine hairline divider */}
        <div
          className={`w-12 h-px bg-[#B77A45]/40 my-3 transition-all duration-700 ${
            animStage >= 2 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Tagline */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            animStage >= 2
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FFFAF4]">
            A Little Boop &amp; Lot of Love.
          </h1>
        </div>

        {/* Supporting statement */}
        <div
          className={`transition-all duration-700 delay-100 ease-out transform mt-3 ${
            animStage >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="text-xs sm:text-sm text-[#F5E9D8]/75 font-body tracking-wider uppercase font-light max-w-md mx-auto leading-relaxed">
            Thoughtfully Curated. Genuinely Trusted. Made for Every Pet.
          </p>
        </div>

        {/* High-fashion, luxury editorial pet photography campaign preview */}
        <div
          className={`w-full max-w-md mx-auto my-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 ease-out transform ${
            animStage >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-6 scale-98'
          }`}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#35150E]">
            <img
              src="/images/hero-pets.jpg"
              alt="Curated companionship"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29100B] via-transparent to-transparent opacity-80" />
          </div>
        </div>

      </div>

      {/* Bottom Minimalist Luxury CTA */}
      <div 
        className={`relative z-10 w-full text-center pb-2 transition-all duration-700 ease-out transform ${
          animStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button
          onClick={handleDismiss}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs uppercase tracking-ultra font-semibold text-[#FFFAF4] bg-white/5 hover:bg-[#B77A45] border border-white/15 hover:border-[#B77A45] shadow-luxury transition-all duration-300"
        >
          <span>Explore The Collection</span>
          <ArrowRight className="w-4 h-4 text-[#F5E9D8] group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

    </div>
  );
};
