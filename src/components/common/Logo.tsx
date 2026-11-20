import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (navbar), 'dark' is for dark backgrounds (footer, welcome screen)
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = false,
  className = '',
  onClick,
}) => {
  const sizeMap = {
    sm: { img: 'h-8 sm:h-9', text: 'text-xs' },
    md: { img: 'h-10 sm:h-12', text: 'text-xs sm:text-sm' },
    lg: { img: 'h-14 sm:h-16', text: 'text-sm sm:text-base' },
    xl: { img: 'h-20 sm:h-24', text: 'text-base sm:text-lg' },
  };

  const imageSrc = variant === 'dark' ? '/images/boop-logo-white.png' : '/images/boop-logo-light.png';

  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center select-none group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img
          src={imageSrc}
          alt="BOOP STORE — A Little Boop & Lot of Love"
          className={`${sizeMap[size].img} w-auto object-contain drop-shadow-sm`}
          loading="eager"
        />
      </div>

      {showTagline && (
        <span
          className={`font-display uppercase tracking-widest font-semibold mt-1.5 ${sizeMap[size].text} ${
            variant === 'dark' ? 'text-beige' : 'text-caramel'
          }`}
        >
          A Little Boop &amp; Lot of Love
        </span>
      )}
    </div>
  );
};
