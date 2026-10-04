import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { verifiedMenuItems, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface BakerySectionProps {
  onSelectItem: (item: MenuItem) => void;
  onExploreFullMenu: () => void;
}

export const BakerySection: React.FC<BakerySectionProps> = ({
  onSelectItem,
  onExploreFullMenu,
}) => {
  // Filter verified bakery items
  const bakeryItems = verifiedMenuItems.filter(
    (item) => item.category === 'bakery'
  );

  return (
    <section id="bakery" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
                DAILY OVEN SPECIALS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight">
              FRESH FROM<br />
              <span className="italic font-normal text-[#2A4B37]">THE BAKERY.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <span className="text-xs text-[#64554B]">
              100% Eggless & Pure Vegetarian
            </span>
            <button
              onClick={onExploreFullMenu}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2A4B37] hover:text-[#1F3829] transition-colors py-1 border-b border-[#2A4B37]"
            >
              <span>SEE FULL MENU</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bakeryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-[#241812]/10 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Slot */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#EFE8DD]">
                  <ImageWithFallback
                    src={
                      item.imageUrl ||
                      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={item.imageAlt || item.name}
                    fallbackCategory="bakery"
                    fallbackTitle={item.name}
                    containerClassName="w-full h-full"
                    className="img-zoom"
                  />

                  {/* Eggless / Veg Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 bg-white/95 backdrop-blur-xs rounded-full shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      Eggless
                    </span>
                  </div>

                  {item.badge && (
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#2A4B37] text-white text-[10px] font-semibold uppercase tracking-wider rounded-xs">
                      {item.badge}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {item.subCategory && (
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#64554B] block mb-1.5">
                      {item.subCategory}
                    </span>
                  )}

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812] mb-2 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#241812]/75 leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#241812]/8 flex items-center justify-between">
                <div>
                  {item.price ? (
                    <div className="text-base font-bold text-[#241812] font-mono tabular-nums">
                      ₹{item.price}
                    </div>
                  ) : (
                    <span className="text-[11px] text-[#64554B] font-medium italic">
                      Price available in-store
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectItem(item)}
                  className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2A4B37] hover:text-white hover:bg-[#2A4B37] border border-[#2A4B37]/30 hover:border-[#2A4B37] rounded-xs transition-colors"
                >
                  VIEW ITEM
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
