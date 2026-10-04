import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { restaurantInfo, restaurantImages } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const SocialSection: React.FC = () => {
  // Real verified social feed imagery from our gallery
  const socialFeed = [
    restaurantImages.cakes[0],
    restaurantImages.food[0],
    restaurantImages.cakes[1],
    restaurantImages.gallery[2], // Coffee
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF7F2] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <Instagram className="w-4 h-4 text-[#C86348]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C86348]">
                {restaurantInfo.social.instagramHandle}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight">
              SEE WHAT'S FRESH
            </h2>
          </div>

          <a
            href={restaurantInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] rounded-xs transition-colors shadow-xs"
          >
            <span>FOLLOW KWALITY</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Image Grid from our verified bakery collection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialFeed.map((img) => (
            <a
              key={img.id}
              href={restaurantInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xs bg-[#EFE8DD] shadow-xs"
            >
              <ImageWithFallback
                src={img.url}
                alt={img.alt}
                fallbackCategory={img.category}
                containerClassName="w-full h-full"
                className="img-zoom"
              />

              <div className="absolute inset-0 bg-[#241812]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#64554B]">
          Official Instagram: <span className="font-semibold text-[#241812]">{restaurantInfo.social.instagramHandle}</span> · Connect with our bakery team at Eros City Square
        </p>

      </div>
    </section>
  );
};
