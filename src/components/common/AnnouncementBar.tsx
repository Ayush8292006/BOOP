import React from 'react';
import { Truck, ShieldCheck, RotateCcw, PhoneCall } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const AnnouncementBar: React.FC = () => {
  const { setPolicyModal } = useShop();

  return (
    // Hidden on mobile to keep mobile header clean like Blinkit/Zepto
    <div className="hidden md:block bg-[#29100B] text-[#F5E9D8] text-[11px] font-medium uppercase tracking-wider border-b border-[#35150E]/60 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between whitespace-nowrap">
        
        {/* Core Guarantees - strictly single line without wrapping */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[#F5E9D8]/90">
            <Truck className="w-3.5 h-3.5 text-[#B77A45] flex-shrink-0" />
            <span>Pan India Delivery</span>
          </div>

          <span className="text-white/20">&bull;</span>

          <div className="flex items-center gap-1.5 text-[#F5E9D8]/90">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B77A45] flex-shrink-0" />
            <span>100% Authentic Products</span>
          </div>

          <span className="text-white/20">&bull;</span>

          <button
            onClick={() => setPolicyModal('returns')}
            className="flex items-center gap-1.5 text-[#F5E9D8]/90 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#B77A45] flex-shrink-0" />
            <span>Easy Returns</span>
          </button>
        </div>

        {/* Right: Quick Help */}
        <div className="flex items-center gap-2 text-[#F5E9D8]/80 flex-shrink-0">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#B77A45] flex-shrink-0" />
            <span>Need Help?</span>
            <span className="text-[#F5E9D8]/50 ml-1">+91 98765 43210</span>
          </a>
        </div>

      </div>
    </div>
  );
};
