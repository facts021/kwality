import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F4EFE6] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
              VISIT OUR CAFE & BAKERY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight mb-4">
            COME SAY HELLO.
          </h2>

          <p className="text-sm sm:text-base text-[#241812]/80 leading-relaxed">
            Conveniently located on the ground floor of Eros City Square Mall on Vikas Marg,
            Sector 49, Gurugram. Easy parking and spacious seating available.
          </p>
        </div>

        {/* 2-Column Grid: Left Verified Details, Right Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#241812]/10 rounded-xs p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2A4B37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#2A4B37]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64554B] block mb-1">
                    Verified Address
                  </span>
                  <p className="text-sm font-semibold text-[#241812] leading-snug">
                    {restaurantInfo.address.formatted}
                  </p>
                  <p className="text-xs text-[#64554B] mt-1">
                    Ground Floor Retail Concourse, near Rosewood City.
                  </p>
                </div>
              </div>

              {/* Verified Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2A4B37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#2A4B37]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64554B] block mb-1">
                    Operating Hours (Verified)
                  </span>
                  <p className="text-sm font-semibold text-[#241812] font-mono tabular-nums">
                    {restaurantInfo.timings.displayHours}
                  </p>
                  <p className="text-xs text-[#64554B] mt-0.5">
                    {restaurantInfo.timings.days}
                  </p>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2A4B37]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#2A4B37]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64554B] block mb-1">
                    Direct Phone Lines
                  </span>
                  <div className="space-y-1">
                    {restaurantInfo.phones.map((phone) => (
                      <div key={phone.number} className="flex items-center gap-2">
                        <a
                          href={`tel:${phone.number}`}
                          className="text-sm font-mono font-semibold text-[#2A4B37] hover:underline"
                        >
                          {phone.display}
                        </a>
                        <span className="text-[10px] text-[#64554B]">({phone.label})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-4 border-t border-[#241812]/8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64554B] block mb-2">
                  Verified Store Features:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#241812]/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4B37]" />
                    <span>Pure Vegetarian</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4B37]" />
                    <span>Dine-in & Takeaway</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4B37]" />
                    <span>Eggless Custom Cakes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2A4B37]" />
                    <span>Free Wi-Fi</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#241812]/8 flex flex-col sm:flex-row gap-3">
              <a
                href={restaurantInfo.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] rounded-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${restaurantInfo.primaryPhone}`}
                className="flex-1 py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-[#241812] bg-[#FAF7F2] hover:bg-[#EAE0D1] border border-[#241812]/15 rounded-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#2A4B37]" />
                <span>CALL NOW</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Maps Iframe (7 cols) */}
          <div className="lg:col-span-7 min-h-[360px] lg:min-h-full rounded-xs overflow-hidden border border-[#241812]/10 shadow-xs bg-[#EFE8DD] relative">
            <iframe
              title="Kwality Cafe & Bakery Location at Eros City Square, Gurugram"
              src={restaurantInfo.googleMaps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Quick floating map badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xs shadow-md border border-[#241812]/10 pointer-events-none">
              <span className="text-xs font-serif font-bold text-[#241812] block">
                Eros City Square Mall
              </span>
              <span className="text-[10px] text-[#64554B]">
                Shop 85, Sector 49, Gurugram
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
