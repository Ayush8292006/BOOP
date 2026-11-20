import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Heart } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const TrustStrip: React.FC = () => {
  const { setPolicyModal, setContactModalOpen } = useShop();

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Genuine & Trusted Brands',
      subtitle: '100% verified authentic products',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      subtitle: 'Insured, temperature-safe transit',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      subtitle: 'Seamless 7-day return policy',
      onClick: () => setPolicyModal('returns'),
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      subtitle: 'Dedicated pet care advisory',
      onClick: () => setContactModalOpen(true),
    },
    {
      icon: Heart,
      title: 'Made for Pet Parents',
      subtitle: 'A Little Boop & Lot of Love',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E8DBC9] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E8DBC9]/60">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            const isClickable = !!item.onClick;

            return (
              <div
                key={idx}
                onClick={item.onClick}
                className={`pt-4 lg:pt-0 lg:px-6 flex items-start gap-3.5 transition-opacity ${
                  isClickable ? 'cursor-pointer hover:opacity-75' : ''
                } ${idx === 4 ? 'col-span-2 lg:col-span-1 justify-center lg:justify-start' : ''}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#F5E9D8]/50 flex items-center justify-center flex-shrink-0 text-caramel">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-chocolate tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-chocolate/60 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
