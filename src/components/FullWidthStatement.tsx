import React from 'react';
import { restaurantImages } from '../data/restaurantData';

export const FullWidthStatement: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#241812] text-white">
      {/* Background Image with Dark Vignette Scrim */}
      <div className="absolute inset-0">
        <img
          src={restaurantImages.hero.url}
          alt="Artisan bakery counter at Kwality Cafe & Bakery"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#241812]/95 via-[#241812]/85 to-[#241812]/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-8 h-[1px] bg-[#F5E3B5]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#F5E3B5]">
            THE DAILY RITUAL
          </span>
          <span className="w-8 h-[1px] bg-[#F5E3B5]" />
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight leading-[1.08] mb-6 text-balance">
          BAKED.<br />
          <span className="text-[#F5E3B5] italic font-normal">SERVED.</span><br />
          SHARED.
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-light">
          Every loaf baked from scratch, every espresso pulled to order, every celebration cake crafted with pure vegetarian care at Eros City Square, Gurugram.
        </p>

        <div className="mt-8 text-xs uppercase tracking-widest text-[#F5E3B5]/80 font-mono">
          Sector 49 · Rosewood City · Gurugram 122018
        </div>
      </div>
    </section>
  );
};
