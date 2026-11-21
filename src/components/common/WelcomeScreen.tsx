import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

export const WelcomeScreen: React.FC = () => {
  const { welcomeScreenVisible, setWelcomeScreenVisible } = useShop();
  const [progress, setProgress] = useState(0);
  const [isWipingUp, setIsWipingUp] = useState(false);

  useEffect(() => {
    if (!welcomeScreenVisible) return;

    setProgress(0);
    setIsWipingUp(false);

    // Fast, smooth loading 0 to 100 in ~1.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Slide up automatically once loaded
          setTimeout(() => {
            slideUp();
          }, 400);
          return 100;
        }
        return prev + 3;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [welcomeScreenVisible]);

  if (!welcomeScreenVisible) return null;

  const slideUp = () => {
    if (isWipingUp) return;
    setIsWipingUp(true);
    setTimeout(() => {
      setWelcomeScreenVisible(false);
      setIsWipingUp(false);
    }, 850);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="boop-welcome-curtain"
        initial={{ y: 0 }}
        animate={isWipingUp ? { y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } } : { y: 0 }}
        exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[99999] bg-[#2E120B] text-[#FFFAF4] select-none flex flex-col items-center justify-between py-12 px-6"
      >
        {/* Subtle Skip button at top right */}
        <div className="w-full max-w-2xl flex justify-end">
          <button
            onClick={slideUp}
            className="text-xs uppercase tracking-widest text-[#F5E9D8]/50 hover:text-white px-3 py-1 rounded-full transition-colors"
          >
            Skip &uarr;
          </button>
        </div>

        {/* Center: Clean, Minimal Brand Intro */}
        <div className="flex flex-col items-center text-center space-y-5 my-auto">
          {/* Mascot Logo */}
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src="/images/boop-logo-white.png"
            alt="BOOP STORE"
            className="h-28 sm:h-36 w-auto object-contain mx-auto drop-shadow-xl"
          />

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            BOOP STORE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-sm sm:text-base text-[#F5E9D8] font-medium"
          >
            A Little Boop &amp; Lot of Love ❤️
          </motion.p>

          {/* Company sub-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-[#F5E9D8]/60 pt-1"
          >
            A brand by Volga Life Biosciences
          </motion.p>

          {/* Minimalist Loading Bar */}
          <div className="w-56 sm:w-64 pt-6 space-y-2">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B77A45] rounded-full transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[11px] font-mono text-[#F5E9D8]/50 text-right">
              {progress}%
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="text-[10px] uppercase tracking-widest text-[#F5E9D8]/40">
          Entering Store...
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
