import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUp, Heart, ShieldCheck } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { welcomeScreenVisible, setWelcomeScreenVisible } = useShop();
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isWipingUp, setIsWipingUp] = useState(false);

  // Reset and restart animation whenever welcomeScreenVisible becomes true
  useEffect(() => {
    if (!welcomeScreenVisible) return;

    setProgress(0);
    setIsReady(false);
    setIsWipingUp(false);

    // Smooth counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Organic acceleration
        const increment = prev < 50 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(100, prev + increment);
      });
    }, 38);

    return () => clearInterval(interval);
  }, [welcomeScreenVisible]);

  // Auto trigger curtain wipe up after reaching 100% after a comfortable deliberate pause
  useEffect(() => {
    if (isReady && !isWipingUp) {
      const autoTimer = setTimeout(() => {
        handleEnterStore();
      }, 1500);
      return () => clearTimeout(autoTimer);
    }
  }, [isReady]);

  if (!welcomeScreenVisible) return null;

  const handleEnterStore = () => {
    if (isWipingUp) return;
    setIsWipingUp(true);
    setTimeout(() => {
      setWelcomeScreenVisible(false);
      setIsWipingUp(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="boop-cinematic-curtain"
        initial={{ y: 0 }}
        animate={isWipingUp ? { y: '-100%', transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } } : { y: 0 }}
        exit={{ y: '-100%', transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[99999] bg-[#220D08] text-[#FFFAF4] select-none flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Subtle Ambient Radial Backlight */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#B77A45] blur-[160px]"
          />
          {/* Subtle noise/grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#F5E9D8 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Top Header: Company Association & Skip Button */}
        <header className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B77A45]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5E9D8]/90">
              A Brand by Volga Life Biosciences
            </span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={handleEnterStore}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F5E9D8]/70 hover:text-white px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md transition-all active:scale-95"
          >
            Skip &uarr;
          </motion.button>
        </header>

        {/* Center Hero Stage: Company Name, Logo, Tagline, Paragraph & Loading */}
        <div className="relative z-10 max-w-xl w-full mx-auto px-6 text-center flex flex-col items-center my-auto space-y-6 sm:space-y-8">
          
          {/* Official Mascot Logo (Dog & Cat Silhouette) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-[#B77A45]/25 rounded-full blur-3xl pointer-events-none" />
            <img
              src="/images/boop-logo-white.png"
              alt="BOOP STORE Official Mascot"
              className="h-24 sm:h-32 md:h-36 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] relative z-10 mx-auto"
            />
          </motion.div>

          {/* Company Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-caramel font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Flagship Destination</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#FFFAF4]">
              BOOP STORE
            </h1>
            <p className="text-base sm:text-xl font-display font-medium text-[#F5E9D8] flex items-center justify-center gap-1.5 pt-1">
              <span>A Little Boop &amp; Lot of Love</span>
              <Heart className="w-4 h-4 text-[#E25C5C] fill-[#E25C5C] inline animate-pulse" />
            </p>
          </motion.div>

          {/* Underneath One-line Paragraph Requested by User */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="max-w-md mx-auto"
          >
            <p className="text-xs sm:text-sm text-[#F5E9D8]/80 leading-relaxed font-light tracking-wide border-t border-b border-white/10 py-2.5">
              Thoughtfully curated pet nutrition, healthcare &amp; accessories — Powered by Volga Life Biosciences.
            </p>
          </motion.div>

          {/* Preloader Counter & Glowing Animated Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full max-w-xs mx-auto space-y-3"
          >
            {/* Status Text & Percentage */}
            <div className="flex items-center justify-between text-xs tracking-widest font-mono">
              <span className="text-[#F5E9D8]/60 uppercase text-[10px]">
                {progress < 40 ? 'Initializing Nutrition...' : progress < 85 ? 'Authenticating Brands...' : 'Opening Store...'}
              </span>
              <span className="text-caramel font-bold font-display text-base">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Glowing Golden Bar with Shimmer Beam */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0 relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B77A45] via-[#F5E9D8] to-white rounded-full shadow-[0_0_15px_rgba(245,233,216,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Action Button: Opens Homepage on click or auto after 1.5s */}
            <div className="pt-2 min-h-[48px] flex items-center justify-center">
              {isReady ? (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  onClick={handleEnterStore}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#220D08] bg-[#F5E9D8] hover:bg-white shadow-[0_0_25px_rgba(245,233,216,0.7)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Enter Boop Store</span>
                  <ArrowUp className="w-4 h-4 text-[#220D08]" />
                </motion.button>
              ) : (
                <span className="text-[10px] uppercase tracking-ultra text-[#F5E9D8]/40">
                  Loading Curated Experience
                </span>
              )}
            </div>
          </motion.div>

        </div>

        {/* Bottom Screen Reveal Indicator */}
        <footer className="relative z-10 w-full text-center pb-6 sm:pb-8 flex flex-col items-center gap-1.5 text-[10px] tracking-ultra uppercase text-[#F5E9D8]/50">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowUp className="w-4 h-4 text-caramel" />
          </motion.div>
          <span>Screen slides up to reveal homepage</span>
        </footer>

      </motion.div>
    </AnimatePresence>
  );
};
