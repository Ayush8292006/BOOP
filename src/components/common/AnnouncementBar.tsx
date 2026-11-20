import React from 'react';
import { Truck, ShieldCheck, RotateCcw, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const AnnouncementBar: React.FC = () => {
  const { setPolicyModal, replayWelcomeScreen } = useShop();

  return (
    <div className="bg-[#29150F] text-[#F5E9D8] text-[11px] sm:text-xs font-medium border-b border-[#3B160D]">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-y-1.5">
        
        {/* Left / Center benefits */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1">
          <div className="flex items-center gap-1.5 text-beige hover:text-white transition-colors">
            <Truck className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
            <span>Pan India Delivery</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-1.5 text-beige hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
            <span>100% Authentic Products</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <button
            onClick={() => setPolicyModal('returns')}
            className="flex items-center gap-1.5 text-beige hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
            <span>Easy Returns</span>
          </button>
        </div>

        {/* Right side contact & welcome re-watch */}
        <div className="flex items-center gap-4 text-beige">
          <button
            onClick={replayWelcomeScreen}
            className="hidden md:flex items-center gap-1 text-[11px] text-caramel hover:text-white transition-colors"
            title="Replay Brand Intro"
          >
            <Sparkles className="w-3 h-3" />
            <span>Brand Intro</span>
          </button>

          <span className="hidden md:inline text-white/20">•</span>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-caramel flex-shrink-0" />
            <span>Need Help?</span>
            <span className="text-white/60 text-[11px] hidden sm:inline">+91 98765 43210</span>
          </a>
        </div>

      </div>
    </div>
  );
};
