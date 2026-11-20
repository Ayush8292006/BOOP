import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from './Logo';
import { Instagram, Facebook, Youtube, Linkedin, ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, navigateToShopWithFilter, setPolicyModal, setContactModalOpen, replayWelcomeScreen } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#29150F] text-[#F5E9D8] pt-14 pb-8 border-t-4 border-[#3B160D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left">
            <div className="inline-block cursor-pointer" onClick={() => setActiveTab('home')}>
              <Logo variant="dark" size="lg" />
            </div>

            <p className="font-handwriting text-caramel text-lg font-bold">
              A Little Boop &amp; Lot of Love ❤️
            </p>

            <p className="text-xs sm:text-sm text-[#F5E9D8]/70 leading-relaxed max-w-sm mx-auto md:mx-0">
              India's growing pet-care destination built on decades of aquatic excellence by Volga Life Biosciences. Dedicated to authentic nutrition, joyful playtime, and healthy companions.
            </p>

            <div className="pt-2">
              <button
                onClick={replayWelcomeScreen}
                className="inline-flex items-center gap-1.5 text-xs text-caramel hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full bg-white/5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Replay Brand Welcome Experience</span>
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-center md:text-left">
            <h4 className="font-display font-bold text-sm text-[#FFFAF4] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#F5E9D8]/80 font-medium">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-caramel transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToShopWithFilter({ pet: 'All' })}
                  className="hover:text-caramel transition-colors"
                >
                  Shop All
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-caramel transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => setContactModalOpen(true)}
                  className="hover:text-caramel transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-center md:text-left">
            <h4 className="font-display font-bold text-sm text-[#FFFAF4] uppercase tracking-wider">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#F5E9D8]/80 font-medium">
              <li>
                <button
                  onClick={() => setPolicyModal('shipping')}
                  className="hover:text-caramel transition-colors"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPolicyModal('returns')}
                  className="hover:text-caramel transition-colors"
                >
                  Return &amp; Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPolicyModal('privacy')}
                  className="hover:text-caramel transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPolicyModal('terms')}
                  className="hover:text-caramel transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Company (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="font-display font-bold text-sm text-[#FFFAF4] uppercase tracking-wider">
              Follow Volga Life Biosciences
            </h4>
            
            {/* Social Icons matching reference */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map((soc, sIdx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={sIdx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-caramel text-beige hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-[#F5E9D8]/70">
              <p className="font-semibold text-white">A Unit of Volga Life Biosciences LLP</p>
              <p className="mt-1">Pioneers in high-integrity aquatic feeds &amp; comprehensive pet care solutions.</p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5E9D8]/60">
          <div>
            &copy; 2026 BOOP STORE. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="text-caramel">🌱</span>
            <span>A Unit of Volga Life Biosciences LLP</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
