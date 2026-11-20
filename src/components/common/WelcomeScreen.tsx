import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { welcomeScreenVisible, setWelcomeScreenVisible } = useShop();
  const [isExiting, setIsExiting] = useState(false);

  // Check if reduced motion or already seen
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
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between items-center px-4 sm:px-8 py-6 sm:py-10 bg-[#29100B] text-[#FFFAF4] select-none overflow-y-auto"
        >
          {/* Ambient Lighting & Luxury Atmospheric Mesh */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.15, 0.25, 0.15],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#B77A45] blur-[140px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.2, 0.1],
                x: [0, -40, 0],
                y: [0, 30, 0]
              }}
              transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#35150E] blur-[150px]"
            />
            <div 
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#F5E9D8 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}
            />
          </div>

          {/* Top Bar: Brand Association & Skip button */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#F5E9D8]/70 text-[10px] sm:text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[#B77A45]" />
              <span>A Brand by Volga Life Biosciences</span>
            </div>

            <button
              onClick={handleDismiss}
              className="text-[10px] sm:text-xs uppercase tracking-widest text-[#F5E9D8]/70 hover:text-white transition-all py-1.5 px-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md"
            >
              Skip Intro &rarr;
            </button>
          </motion.div>

          {/* Center Cinematic Stage */}
          <div className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center my-auto py-6 sm:py-8">
            
            {/* Logo with Soft Halo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="absolute -inset-6 bg-[#B77A45]/20 rounded-full blur-3xl pointer-events-none" />
              <img
                src="/images/boop-logo-white.png"
                alt="BOOP STORE"
                className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] relative z-10"
              />
            </motion.div>

            {/* Hairline Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="w-16 h-px bg-gradient-to-r from-transparent via-[#B77A45] to-transparent my-2"
            />

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FFFAF4]">
                A Little Boop &amp; Lot of Love.
              </h1>
            </motion.div>

            {/* Supporting Statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-3"
            >
              <p className="text-xs sm:text-sm text-[#F5E9D8]/80 uppercase tracking-widest font-light max-w-md mx-auto leading-relaxed">
                Thoughtfully Curated. Genuinely Trusted. Made for Every Pet.
              </p>
            </motion.div>

            {/* High-Fashion Editorial Photography Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg mx-auto my-6 sm:my-8 rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#35150E]">
                <img
                  src="/images/hero-pets.jpg"
                  alt="Golden Retriever and Companion Cat"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29100B]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-left">
                  <span className="text-[11px] font-semibold text-[#F5E9D8] tracking-wider uppercase">
                    Companionship &bull; Nutrition &bull; Aquatics
                  </span>
                  <span className="text-[10px] text-white/60 tracking-widest uppercase">
                    EST. 2026
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="w-full max-w-xs"
            >
              <button
                onClick={handleDismiss}
                className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-ultra font-bold text-[#29100B] bg-gradient-to-r from-[#F5E9D8] via-white to-[#F5E9D8] hover:from-white hover:to-white shadow-[0_10px_30px_rgba(183,122,69,0.35)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Explore The Collection</span>
                <ArrowRight className="w-4 h-4 text-[#29100B] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>

          </div>

          {/* Bottom subtle assurance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="relative z-10 text-[10px] uppercase tracking-widest text-[#F5E9D8]/50 pb-2"
          >
            PAN-INDIA DELIVERY &bull; 100% GENUINE BRANDS &bull; VOLGA LIFE SCIENTIFIC CARE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
