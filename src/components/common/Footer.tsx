import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Logo } from './Logo';
import { Instagram, Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, navigateToShopWithFilter, setPolicyModal, setContactModalOpen, replayWelcomeScreen } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#29100B] text-[#F5E9D8] pt-16 sm:pt-20 pb-10 border-t border-[#35150E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-14 pb-14 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block cursor-pointer" onClick={() => setActiveTab('home')}>
              <Logo variant="dark" size="lg" />
            </div>

            <p className="font-display text-sm tracking-wide text-caramel uppercase font-semibold">
              A Little Boop &amp; Lot of Love ❤️
            </p>

            <p className="text-xs text-[#F5E9D8]/70 leading-relaxed font-light max-w-sm">
              A growing pet-care destination built on decades of aquatic excellence by Volga Life Biosciences. Dedicated to authentic nutrition, joyful playtime, and healthy companions.
            </p>

            <div className="pt-2">
              <button
                onClick={replayWelcomeScreen}
                className="text-[11px] uppercase tracking-ultra text-[#F5E9D8]/50 hover:text-white transition-colors"
              >
                &larr; Replay Brand Welcome Experience
              </button>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-ultra text-[#FFFAF4]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5E9D8]/80 font-medium">
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
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-ultra text-[#FFFAF4]">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5E9D8]/80 font-medium">
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
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-ultra text-[#FFFAF4]">
              Connect With Us
            </h4>
            
            {/* Minimalist Social Icons */}
            <div className="flex items-center gap-3">
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
                    className="w-8 h-8 rounded-full border border-white/10 hover:border-caramel text-[#F5E9D8] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 text-xs text-[#F5E9D8]/60 font-light">
              <p className="font-semibold text-white">A Unit of Volga Life Biosciences LLP</p>
              <p className="mt-1">Pioneers in high-integrity aquatic feeds &amp; comprehensive pet care.</p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F5E9D8]/50 uppercase tracking-widest font-light">
          <div>
            &copy; 2026 BOOP STORE. All rights reserved.
          </div>

          <div>
            A Unit of Volga Life Biosciences LLP
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
