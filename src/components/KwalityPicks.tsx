import React from 'react';
import { Star, Award, Heart, Sparkles } from 'lucide-react';
import { verifiedMenuItems, MenuItem } from '../data/restaurantData';

interface KwalityPicksProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenEnquiry: (type?: string) => void;
}

export const KwalityPicks: React.FC<KwalityPicksProps> = ({ onSelectItem, onOpenEnquiry }) => {
  // Verified top 6 picks supported by public evidence
  const pickIds = [
    'item_cake_truffle',
    'item_cafe_garlic_bread_veg',
    'item_cafe_spring_rolls',
    'item_bev_chai',
    'item_bev_cold_coffee',
    'item_pizza_margherita',
  ];

  const picks = verifiedMenuItems.filter((item) => pickIds.includes(item.id));

  const getEvidenceNote = (id: string) => {
    switch (id) {
      case 'item_cake_truffle':
        return 'Top requested 100% eggless custom cake';
      case 'item_cafe_spring_rolls':
        return '4.5 / 5 rating on District Gurugram';
      case 'item_bev_chai':
        return 'Rated 5.0 / 5 by customer reviews';
      case 'item_cafe_garlic_bread_veg':
        return 'Customer favourite cafe bite';
      case 'item_bev_cold_coffee':
        return 'Praised in local coffee reviews';
      case 'item_pizza_margherita':
        return 'Stone-baked thin crust standard';
      default:
        return 'Verified customer favorite';
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C86348]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C86348]">
              CUSTOMER FAVOURITES
            </span>
            <span className="w-5 h-[1.5px] bg-[#C86348]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight mb-4">
            KWALITY PICKS
          </h2>

          <p className="text-sm sm:text-base text-[#241812]/80 leading-relaxed">
            Curated from our most beloved and consistently reviewed items across Google, District,
            and Swiggy diners in Gurugram.
          </p>
        </div>

        {/* 6 Picks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {picks.map((pick, idx) => (
            <div
              key={pick.id}
              className="bg-white border border-[#241812]/10 rounded-xs p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Index & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-[#64554B]">
                    0{idx + 1}.
                  </span>
                  {pick.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#2A4B37]/10 text-[#2A4B37] rounded-xs">
                      {pick.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241812] mb-2 leading-snug group-hover:text-[#2A4B37] transition-colors">
                  {pick.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#241812]/75 leading-relaxed mb-4">
                  {pick.description}
                </p>

                {/* Evidence Note */}
                <div className="p-2.5 bg-[#FAF7F2] rounded-xs border-l-2 border-[#2A4B37] text-[11px] text-[#64554B] mb-5">
                  <span className="font-medium text-[#241812]">Evidence: </span>
                  {getEvidenceNote(pick.id)}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-[#241812]/8 flex items-center justify-between">
                <div>
                  {pick.price ? (
                    <span className="text-base font-bold font-mono text-[#241812] tabular-nums">
                      ₹{pick.price}
                    </span>
                  ) : (
                    <span className="text-xs text-[#64554B] italic">In-store price</span>
                  )}
                </div>

                <button
                  onClick={() => onSelectItem(pick)}
                  className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2A4B37] hover:text-white hover:bg-[#2A4B37] border border-[#2A4B37]/30 rounded-xs transition-colors"
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
