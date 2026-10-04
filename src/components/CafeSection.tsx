import React from 'react';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';
import { restaurantImages, verifiedMenuItems, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface CafeSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onExploreFullMenu: () => void;
}

export const CafeSection: React.FC<CafeSectionProps> = ({
  onSelectItem,
  onExploreFullMenu,
}) => {
  // Cafe favorites
  const cafeBites = verifiedMenuItems.filter(
    (item) => item.category === 'cafe' || item.category === 'pizza_pasta'
  ).slice(0, 4);

  return (
    <section id="cafe" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
              GOURMET CAFE KITCHEN
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight mb-4">
            SLOW DOWN.<br />
            <span className="italic font-normal text-[#2A4B37]">HAVE A BITE.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#241812]/80 leading-relaxed max-w-xl">
            Beyond the bakery cases, Kwality Cafe serves a full menu of freshly prepared hot bites,
            stone-baked pizzas, aromatic pastas, and signature appetizers in a relaxed atmosphere at Eros City Square.
          </p>
        </div>

        {/* Visual Collage: Large Image + Smaller Supporting Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-center">
          
          {/* Main Large Image (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden rounded-xs shadow-md aspect-16/10 bg-[#E8E0D4]">
              <ImageWithFallback
                src={restaurantImages.food[1].url}
                alt={restaurantImages.food[1].alt}
                fallbackCategory="cafe"
                fallbackTitle="White Sauce Penne Pasta"
                containerClassName="w-full h-full"
                className="img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5E3B5] block mb-1">
                  Artisan Pastas
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  Creamy White Sauce Penne with Sautéed Veggies
                </h3>
                <p className="text-xs text-white/80 max-w-md mt-1 hidden sm:block">
                  Prepared with fresh cream, Italian herbs, mushrooms, and served hot with garlic toast.
                </p>
              </div>
            </div>
          </div>

          {/* 2 Smaller Supporting Images (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            
            {/* Supporting Image 1: Garlic Bread */}
            <div className="relative group overflow-hidden rounded-xs shadow-xs aspect-16/10 bg-[#E8E0D4]">
              <ImageWithFallback
                src={restaurantImages.food[0].url}
                alt={restaurantImages.food[0].alt}
                fallbackCategory="cafe"
                fallbackTitle="Garlic Bread with Cheese & Veggies"
                containerClassName="w-full h-full"
                className="img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5E3B5]">
                  Best Seller · ₹240
                </span>
                <h4 className="font-serif text-xs sm:text-sm font-semibold truncate">
                  Garlic Bread with Cheese & Veggies
                </h4>
              </div>
            </div>

            {/* Supporting Image 2: Spring Rolls or Pizza */}
            <div className="relative group overflow-hidden rounded-xs shadow-xs aspect-16/10 bg-[#E8E0D4]">
              <ImageWithFallback
                src={restaurantImages.food[2].url}
                alt={restaurantImages.food[2].alt}
                fallbackCategory="cafe"
                fallbackTitle="Stone-Baked Margherita Pizza"
                containerClassName="w-full h-full"
                className="img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5E3B5]">
                  Stone-Baked · ₹320
                </span>
                <h4 className="font-serif text-xs sm:text-sm font-semibold truncate">
                  Classic Margherita Pizza
                </h4>
              </div>
            </div>

          </div>

        </div>

        {/* Cafe Menu Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cafeBites.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#241812]/10 p-5 rounded-xs shadow-xs hover:border-[#2A4B37]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2A4B37]">
                    {item.subCategory || 'Cafe Special'}
                  </span>
                  {item.badge && (
                    <span className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 bg-[#FAF7F2] text-[#C86348] border border-[#C86348]/20 rounded-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-base font-bold text-[#241812] mb-1.5 leading-snug">
                  {item.name}
                </h4>

                <p className="text-xs text-[#241812]/75 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#241812]/8 flex items-center justify-between">
                <span className="text-sm font-bold font-mono text-[#241812]">
                  {item.price ? `₹${item.price}` : 'In-store price'}
                </span>
                <button
                  onClick={() => onSelectItem(item)}
                  className="text-xs font-semibold text-[#2A4B37] hover:text-[#1F3829] py-1"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-10">
          <button
            onClick={onExploreFullMenu}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] transition-all rounded-xs shadow-xs"
          >
            <span>BROWSE ALL CAFE OFFERINGS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
