import React from 'react';
import { Sparkles, Cake, CheckCircle2 } from 'lucide-react';
import { verifiedMenuItems, MenuItem } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface CakesSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenCakeEnquiry: () => void;
  onExploreCakes: () => void;
}

export const CakesSection: React.FC<CakesSectionProps> = ({
  onSelectItem,
  onOpenCakeEnquiry,
  onExploreCakes,
}) => {
  // Filter verified cakes
  const cakeItems = verifiedMenuItems.filter((item) => item.category === 'cakes');

  return (
    <section id="cakes" className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C86348]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C86348]">
              100% EGGLESS CUSTOM CREATIONS
            </span>
            <span className="w-5 h-[1.5px] bg-[#C86348]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-[1.12] mb-4 text-balance">
            MADE FOR<br />
            <span className="italic font-normal text-[#C86348]">THE MOMENTS THAT MATTER.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#241812]/80 leading-relaxed">
            Every celebration deserves an exceptional centerpiece. We handcraft custom celebration cakes,
            rich chocolate truffles, and delicate fresh fruit sponges right here in Sector 49, Gurugram.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <button
              onClick={onExploreCakes}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] active:scale-98 transition-all rounded-xs shadow-xs"
            >
              EXPLORE CAKES
            </button>
            <button
              onClick={onOpenCakeEnquiry}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#241812] bg-[#FAF7F2] hover:bg-[#EAE0D1] border border-[#241812]/15 active:scale-98 transition-all rounded-xs"
            >
              CAKE ENQUIRY
            </button>
          </div>
        </div>

        {/* Cake Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakeItems.map((cake) => (
            <div
              key={cake.id}
              className="group bg-white border border-[#241812]/10 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-[#ECE4D6]">
                  <ImageWithFallback
                    src={
                      cake.imageUrl ||
                      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={cake.imageAlt || cake.name}
                    fallbackCategory="cakes"
                    fallbackTitle={cake.name}
                    containerClassName="w-full h-full"
                    className="img-zoom"
                  />

                  {/* 100% Eggless stamp */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/95 backdrop-blur-xs rounded-full shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                      100% Eggless
                    </span>
                  </div>

                  {cake.badge && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#C86348] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs">
                      {cake.badge}
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#241812] mb-1.5 leading-snug">
                    {cake.name}
                  </h3>
                  <p className="text-xs text-[#241812]/75 leading-relaxed line-clamp-2">
                    {cake.description}
                  </p>
                </div>
              </div>

              <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#241812]/8 flex items-center justify-between">
                <span className="text-[11px] text-[#64554B] italic">
                  Custom sizes on order
                </span>
                <button
                  onClick={() => onSelectItem(cake)}
                  className="text-xs font-bold uppercase tracking-wider text-[#C86348] hover:text-[#A74D36] transition-colors py-1"
                >
                  DETAILS &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Order Callout Strip */}
        <div className="mt-12 p-6 bg-[#FAF7F2] border border-[#241812]/10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C86348]/10 flex items-center justify-center shrink-0">
              <Cake className="w-5 h-5 text-[#C86348]" />
            </div>
            <div>
              <h4 className="text-sm font-serif font-bold text-[#241812]">
                Planning a Birthday, Anniversary, or Corporate Event?
              </h4>
              <p className="text-xs text-[#64554B]">
                Tell us your preferred flavour, weight, and delivery time. Pure vegetarian guarantee.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCakeEnquiry}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C86348] hover:bg-[#A74D36] transition-colors rounded-xs shadow-xs whitespace-nowrap"
          >
            ORDER CUSTOM CAKE
          </button>
        </div>

      </div>
    </section>
  );
};
