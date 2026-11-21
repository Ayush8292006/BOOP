import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const TrustStrip: React.FC = () => {
  const { setPolicyModal, setContactModalOpen } = useShop();

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Genuine & Trusted Brands',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      onClick: () => setPolicyModal('returns'),
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      onClick: () => setContactModalOpen(true),
    },
    {
      icon: Heart,
      title: 'Made for Pet Parents',
    },
  ];

  return (
    <section className="bg-white border-y border-[#EADBCC] py-3 sm:py-3.5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={item.onClick}
                className={`flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#35150E] ${
                  item.onClick ? 'cursor-pointer hover:text-[#B77A45]' : ''
                } transition-colors`}
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF3EA] flex items-center justify-center text-[#35150E] flex-shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
