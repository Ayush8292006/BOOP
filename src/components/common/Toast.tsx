import React from 'react';
import { useShop } from '../../context/ShopContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] max-w-sm bg-[#29100B] text-[#FFFAF4] px-5 py-3.5 rounded-xl shadow-elevation border border-white/10 flex items-center gap-3 animate-slideUp">
      <div className="w-2 h-2 rounded-full bg-caramel flex-shrink-0" />
      <p className="text-xs font-medium tracking-wide">
        {toastMessage}
      </p>
    </div>
  );
};
