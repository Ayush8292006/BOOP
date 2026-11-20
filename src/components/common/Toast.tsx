import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Heart, Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] max-w-sm bg-[#29150F] text-[#FFFAF4] px-4 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-slideUp">
      <div className="w-7 h-7 rounded-full bg-caramel/30 flex items-center justify-center flex-shrink-0 text-xs">
        🐾
      </div>
      <p className="text-xs sm:text-sm font-semibold tracking-wide">
        {toastMessage}
      </p>
    </div>
  );
};
