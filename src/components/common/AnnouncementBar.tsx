import React from 'react';
import { Truck, ShieldCheck, RotateCcw, PhoneCall } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const AnnouncementBar: React.FC = () => {
  const { setPolicyModal, replayWelcomeScreen } = useShop();

  return (
    <div className="bg-[#29100B] text-[#F5E9D8] text-[11px] font-medium tracking-wider uppercase border-b border-[#35150E]/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-y-1">
        
        {/* Core Guarantees with minimalist line dividers */}
        <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8">
          <div className="flex items-center gap-2 text-[#F5E9D8]/80 hover:text-white transition-colors">
            <Truck className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
            <span>Pan India Delivery</span>
          </div>

          <span className="hidden sm:inline text-white/10 font-light">|</span>

          <div className="flex items-center gap-2 text-[#F5E9D8]/80 hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
            <span>100% Authentic Products</span>
          </div>

          <span className="hidden sm:inline text-white/10 font-light">|</span>

          <button
            onClick={() => setPolicyModal('returns')}
            className="flex items-center gap-2 text-[#F5E9D8]/80 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
            <span>Easy Returns</span>
          </button>
        </div>

        {/* Brand Replay & Helpline */}
        <div className="flex items-center gap-6 text-[#F5E9D8]/70">
          <button
            onClick={replayWelcomeScreen}
            className="inline-flex items-center gap-1.5 text-[10px] tracking-widest text-[#B77A45] hover:text-[#F5E9D8] transition-colors uppercase font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10"
            title="Replay cinematic welcome screen curtain"
          >
            <span>✨ Welcome Intro</span>
          </button>

          <span className="text-white/10 font-light">|</span>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-caramel flex-shrink-0" />
            <span>Need Help?</span>
            <span className="text-[#F5E9D8]/40 ml-1 hidden sm:inline">+91 98765 43210</span>
          </a>
        </div>

      </div>
    </div>
  );
};
