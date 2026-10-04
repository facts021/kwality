import React from 'react';
import { Clock, Sun, Sunset, Moon } from 'lucide-react';
import { bakeryTimelineMoments } from '../data/restaurantData';

export const MomentsSection: React.FC = () => {
  const getSlotIcon = (slot: string) => {
    switch (slot) {
      case 'MORNING':
        return <Sun className="w-5 h-5 text-[#C86348]" />;
      case 'AFTERNOON':
        return <Clock className="w-5 h-5 text-[#2A4B37]" />;
      case 'EVENING':
        return <Sunset className="w-5 h-5 text-[#241812]" />;
      default:
        return <Sun className="w-5 h-5 text-[#C86348]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
              DAILY RHYTHM
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight mb-4">
            MOMENTS AT KWALITY
          </h2>

          <p className="text-sm sm:text-base text-[#241812]/80 leading-relaxed">
            From first morning ovens at 8:15 AM until late-evening dessert cravings at 11:00 PM,
            here is how your day unfolds at Eros City Square.
          </p>
        </div>

        {/* 3-Column Editorial Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {bakeryTimelineMoments.map((moment, index) => (
            <div
              key={moment.timeSlot}
              className="bg-[#FAF7F2] border border-[#241812]/10 rounded-xs p-6 sm:p-8 flex flex-col justify-between relative shadow-xs hover:border-[#2A4B37]/40 transition-colors"
            >
              <div>
                {/* Timeline Tag */}
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-[#241812]/8">
                  <div className="flex items-center gap-2">
                    {getSlotIcon(moment.timeSlot)}
                    <span className="text-xs font-bold uppercase tracking-widest text-[#241812]">
                      {moment.timeSlot}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#64554B] tabular-nums font-medium">
                    {moment.hours}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-[#C86348] block mb-1">
                  {moment.subtitle}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#241812] mb-3">
                  {moment.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#241812]/80 leading-relaxed mb-6">
                  {moment.description}
                </p>
              </div>

              {/* Offerings list */}
              <div className="pt-4 border-t border-[#241812]/8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64554B] block mb-2">
                  Featured Daily Offerings:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {moment.offerings.map((offering) => (
                    <span
                      key={offering}
                      className="text-xs px-2.5 py-1 bg-white border border-[#241812]/8 rounded-xs text-[#241812]/90 font-medium"
                    >
                      {offering}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
