import React, { useState } from 'react';
import { Cake, Coffee, Utensils, Wheat } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'cakes' | 'bakery' | 'cafe' | 'coffee' | 'ambience' | 'exterior' | 'interior';
  fallbackTitle?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackCategory = 'bakery',
  fallbackTitle,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getIcon = () => {
    switch (fallbackCategory) {
      case 'cakes':
        return <Cake className="w-8 h-8 text-[#C86348]/70" />;
      case 'coffee':
        return <Coffee className="w-8 h-8 text-[#241812]/60" />;
      case 'cafe':
        return <Utensils className="w-8 h-8 text-[#2A4B37]/70" />;
      default:
        return <Wheat className="w-8 h-8 text-[#2A4B37]/70" />;
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#F2ECE1] ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#EFE8DD] animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F5EEDB] to-[#EBE2D3]">
          <div className="w-14 h-14 rounded-full bg-white/70 shadow-xs flex items-center justify-center mb-3">
            {getIcon()}
          </div>
          <span className="text-xs uppercase tracking-widest text-[#2A4B37] font-semibold mb-1">
            Kwality {fallbackCategory}
          </span>
          <span className="text-sm font-serif text-[#241812] max-w-[200px]">
            {fallbackTitle || alt || 'Artisan Offering'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
