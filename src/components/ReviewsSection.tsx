import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { verifiedReviews, restaurantInfo } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
                AUTHENTIC PUBLIC FEEDBACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight">
              COMMUNITY WORDS
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3 bg-white px-4 py-2.5 rounded-xs border border-[#241812]/10 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold font-mono text-[#241812]">
              {restaurantInfo.metrics.rating} / 5.0
            </span>
            <span className="text-xs text-[#64554B]">
              ({restaurantInfo.metrics.totalReviews} verified ratings)
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#241812]/10 rounded-xs p-6 shadow-xs hover:border-[#2A4B37]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Rating & Source Tag */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#241812]/8">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(Math.floor(rev.rating))].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                    {rev.rating % 1 !== 0 && (
                      <span className="text-xs font-mono font-bold text-amber-600 ml-1">
                        {rev.rating}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64554B] bg-[#FAF7F2] px-2 py-0.5 rounded-xs border border-[#241812]/5">
                    {rev.source}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#241812]/85 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Highlight Item */}
              <div className="pt-3 border-t border-[#241812]/8 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-[#241812]">
                      {rev.author}
                    </h4>
                    <CheckCircle2 className="w-3 h-3 text-[#2A4B37]" />
                  </div>
                  <span className="text-[10px] text-[#64554B]">
                    {rev.sourceLabel}
                  </span>
                </div>

                {rev.highlightItem && (
                  <span className="text-[10px] text-[#2A4B37] font-semibold max-w-[120px] text-right truncate">
                    {rev.highlightItem}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Source transparency note */}
        <div className="mt-8 text-center text-[11px] text-[#64554B]">
          Verified from public listings on Justdial (Sector 49), District Gurugram, and LBB. No fictional testimonials used.
        </div>

      </div>
    </section>
  );
};
