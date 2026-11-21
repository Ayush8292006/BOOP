import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUp, ChevronRight } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { welcomeScreenVisible, setWelcomeScreenVisible } = useShop();
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isWipingUp, setIsWipingUp] = useState(false);

  useEffect(() => {
    if (!welcomeScreenVisible) return;

    // Smooth counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Accelerate smoothly
        const step = prev < 60 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(100, prev + step);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [welcomeScreenVisible]);

  // Auto trigger curtain wipe up after reaching 100% after a short pause
  useEffect(() => {
    if (isReady && !isWipingUp) {
      const autoTimer = setTimeout(() => {
        triggerCurtainWipe();
      }, 900);
      return () => clearTimeout(autoTimer);
    }
  }, [isReady]);

  if (!welcomeScreenVisible) return null;

  const triggerCurtainWipe = () => {
    try {
      localStorage.setItem('boop_welcome_seen', 'true');
    } catch {
      // ignore
    }
    setIsWipingUp(true);
    setTimeout(() => {
      setWelcomeScreenVisible(false);
      setIsWipingUp(false);
    }, 950);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="luxury-welcome-curtain"
        initial={{ y: 0 }}
        animate={isWipingUp ? { y: '-100%', transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } } : { y: 0 }}
        exit={{ y: '-100%', transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[99999] bg-[#29100B] text-[#FFFAF4] select-none flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Ambient atmospheric liquid glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#B77A45] blur-[150px]"
          />
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#F5E9D8 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        {/* Top Bar: Volga Life Biosciences identity & Skip */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B77A45]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F5E9D8]/80">
              A Brand by Volga Life Biosciences
            </span>
          </motion.div>

          <button
            onClick={triggerCurtainWipe}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F5E9D8]/60 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 transition-all"
          >
            Skip &uarr;
          </button>
        </div>

        {/* Center Stage: Logo, Tagline, Paragraph & Loading Bar */}
        <div className="relative z-10 max-w-xl w-full mx-auto px-6 text-center flex flex-col items-center my-auto space-y-6">
          
          {/* Official Mascot Logo with soft pulsing glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-[#B77A45]/20 rounded-full blur-3xl pointer-events-none" />
            <img
              src="/images/boop-logo-white.png"
              alt="BOOP STORE"
              className="h-24 sm:h-32 md:h-36 w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] relative z-10"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFAF4]">
              A Little Boop &amp; Lot of Love.
            </h1>
          </motion.div>

          {/* Underneath: One-line paragraph requested by user */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <p className="text-xs sm:text-sm text-[#F5E9D8]/80 uppercase tracking-widest font-light leading-relaxed">
              Thoughtfully Curated. Genuinely Trusted. Made for Every Pet.
            </p>
          </motion.div>

          {/* Preloader Counter & Glowing Progress Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full max-w-xs mx-auto pt-4 space-y-3"
          >
            {/* Progress Percentage Display */}
            <div className="flex items-center justify-between text-xs tracking-widest font-mono">
              <span className="text-[#F5E9D8]/60 uppercase text-[10px]">
                {progress < 40 ? 'Initializing Care...' : progress < 85 ? 'Curating Formulations...' : 'Welcome Aboard'}
              </span>
              <span className="text-caramel font-bold font-display text-sm">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>

            {/* Glowing Golden Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B77A45] via-[#F5E9D8] to-white rounded-full shadow-[0_0_12px_rgba(183,122,69,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Interactive "Open Store" CTA when ready */}
            {isReady && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={triggerCurtainWipe}
                className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#29100B] bg-[#F5E9D8] hover:bg-white shadow-[0_0_20px_rgba(245,233,216,0.6)] transition-all hover:scale-105 active:scale-95"
              >
                <span>Enter Store</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </motion.div>

        </div>

        {/* Bottom Curtain Wipe Hint */}
        <div className="relative z-10 w-full text-center pb-8 flex flex-col items-center gap-1.5 text-[10px] tracking-ultra uppercase text-[#F5E9D8]/40">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowUp className="w-4 h-4 text-caramel/70" />
          </motion.div>
          <span>Screen slides up to reveal homepage</span>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
