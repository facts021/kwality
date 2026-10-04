import React from 'react';
import { Clock, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { restaurantInfo, restaurantImages } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Real Business Photograph with Caption */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xs shadow-md aspect-4/3 bg-[#E4DDD0]">
                <ImageWithFallback
                  src={restaurantImages.interior.url}
                  alt={restaurantImages.interior.alt}
                  fallbackCategory="interior"
                  fallbackTitle="Kwality Cafe & Bakery Interior"
                  containerClassName="w-full h-full"
                  className="img-zoom"
                />
              </div>

              {/* Photo Caption with source preservation */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#64554B]">
                <span className="italic">
                  Ground floor seating space at Eros City Square, Gurugram
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#2A4B37] font-semibold">
                  Ambience Verified (4.2/5)
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
                THE KWALITY EXPERIENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight mb-6 text-balance">
              A LITTLE SOMETHING<br />
              <span className="italic font-normal text-[#C86348]">FOR EVERY MOMENT.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#241812]/85 leading-relaxed">
              <p>
                Situated at Shop No. 85, Eros City Square on Vikas Marg, Kwality Cafe & Bakery offers
                a welcoming culinary retreat in Gurugram’s Sector 49 & Rosewood City neighborhood.
              </p>

              <p>
                Our ovens fire early each morning to bring you 100% pure vegetarian bakes, handcrafted
                eggless custom cakes, freshly pulled espresso, and comforting cafe comfort food.
                Whether you’re picking up a custom birthday cake, meeting friends over white sauce pasta,
                or savoring a quiet cup of masala chai, every recipe is prepared fresh on-site.
              </p>

              <p>
                With spacious ground-floor seating and a menu crafted for all hours—from 8:15 AM
                morning bakes to late-evening desserts until 11:00 PM—we look forward to welcoming you.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="mt-8 pt-6 border-t border-[#241812]/10 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2A4B37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#241812]">
                    100% Pure Vegetarian
                  </h4>
                  <p className="text-xs text-[#64554B] mt-0.5">
                    Strictly eggless bakery counters and pure veg kitchen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#2A4B37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#241812]">
                    8:15 AM – 11:00 PM
                  </h4>
                  <p className="text-xs text-[#64554B] mt-0.5">
                    Open all 7 days for dine-in, takeaway, and celebrations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
