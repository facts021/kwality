import React from 'react';
import { ArrowDown, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { restaurantInfo, restaurantImages } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onVisitUs }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 sm:pt-28 pb-16 flex items-center bg-[#FAF7F2] border-b border-[#241812]/8 overflow-hidden"
    >
      {/* Subtle organic warm background ambient shape */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] rounded-full bg-[#F5EADB]/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Editorial Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#2A4B37]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#2A4B37]">
                KWALITY CAFE & BAKERY
              </span>
            </div>

            {/* Large Heading with Balanced Wrap & Editorial Serif */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-[#241812] tracking-tight leading-[1.08] mb-6 text-balance">
              BAKED FOR<br />
              <span className="italic font-normal text-[#2A4B37]">YOUR DAY.</span>
            </h1>

            {/* Supporting Copy based on verified business facts */}
            <p className="text-base sm:text-lg text-[#241812]/80 leading-relaxed max-w-xl mb-8">
              A pure vegetarian bakery & cafe located on the ground floor of Eros City Square,
              Sector 49, Gurugram. From 100% eggless custom celebration cakes to artisan garlic loaves,
              freshly simmered pastas, and our signature slow-brewed masala chai.
            </p>

            {/* Verified Trust Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-9 pt-2 border-t border-[#241812]/10 max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2A4B37] shrink-0" />
                <span className="text-xs font-semibold text-[#241812]/85">100% Pure Veg</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2A4B37] shrink-0" />
                <span className="text-xs font-semibold text-[#241812]/85">Eggless Custom Cakes</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#2A4B37] shrink-0" />
                <span className="text-xs font-semibold text-[#241812]/85">Open 8:15 AM – 11 PM</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] active:scale-98 transition-all rounded-xs shadow-xs"
              >
                EXPLORE MENU
              </button>

              <button
                onClick={onVisitUs}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#241812] bg-[#F2ECE1] hover:bg-[#EAE0D1] border border-[#241812]/15 active:scale-98 transition-all rounded-xs"
              >
                VISIT US
              </button>
            </div>
          </div>

          {/* RIGHT: Large Verified Image with Location Badge (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Outer decorative subtle frame */}
              <div className="absolute -inset-2 rounded-xs bg-[#EFE8DC] -rotate-1 transition-transform group-hover:rotate-0 duration-500 -z-10" />

              <div className="relative overflow-hidden rounded-xs shadow-lg aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 bg-[#E8E0D2]">
                <ImageWithFallback
                  src={restaurantImages.hero.url}
                  alt={restaurantImages.hero.alt}
                  fallbackCategory="bakery"
                  fallbackTitle="Artisan Bakery Counter"
                  containerClassName="w-full h-full"
                  className="img-zoom"
                />

                {/* Scrim overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241812]/70 via-[#241812]/10 to-transparent pointer-events-none" />

                {/* Location Badge (Bottom Overlay) */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-[#F5E3B5] mb-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F5E3B5]" />
                      <span>{restaurantInfo.address.shortBadge}</span>
                    </div>
                    <p className="text-xs text-white/90 font-medium">
                      Eros City Square · Ground Floor
                    </p>
                  </div>
                  <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                    Pure Veg
                  </span>
                </div>
              </div>

              {/* Verified Source attribution tag */}
              <div className="mt-2 text-right">
                <span className="text-[10px] text-[#64554B] tracking-wide">
                  Verified Bakery Showcase · Shop 85, Eros City Square
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
