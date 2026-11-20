import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, HeartHandshake } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const TrustStrip: React.FC = () => {
  const { setPolicyModal, setContactModalOpen } = useShop();

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Genuine & Trusted Brands',
      subtitle: '100% verified authentic',
    },
    {
      icon: Truck,
      title: 'Pan India Delivery',
      subtitle: 'Fast, secure doorstep shipping',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      subtitle: 'Hassle-free 7-day policy',
      onClick: () => setPolicyModal('returns'),
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      subtitle: 'Friendly guidance for pets',
      onClick: () => setContactModalOpen(true),
    },
    {
      icon: HeartHandshake,
      title: 'Made for Pet Parents',
      subtitle: 'A little boop & lot of love',
    },
  ];

  return (
    <section className="bg-white border-b border-beige-border py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-beige-border/70">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            const isClickable = !!item.onClick;

            return (
              <div
                key={idx}
                onClick={item.onClick}
                className={`pt-3 md:pt-0 md:px-4 flex items-center gap-3 transition-all ${
                  isClickable ? 'cursor-pointer hover:opacity-80' : ''
                } ${idx === 4 ? 'col-span-2 md:col-span-1 justify-center md:justify-start' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-beige/60 flex items-center justify-center flex-shrink-0 text-chocolate group-hover:bg-caramel/20 transition-colors">
                  <Icon className="w-5 h-5 text-caramel" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-chocolate leading-tight">
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
