import React from 'react';
import { MapPin, Phone, Clock, Instagram, Heart, ArrowUp } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface FooterProps {
  onOpenEnquiry: (type?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFE8DD] text-[#241812] border-t border-[#241812]/12 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#241812]/10">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#241812] block mb-2">
              KWALITY
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#2A4B37] block mb-4">
              CAFE & BAKERY · GURUGRAM
            </span>
            <p className="text-xs sm:text-sm text-[#64554B] leading-relaxed max-w-sm mb-6">
              A contemporary pure vegetarian bakery and neighborhood cafe in Sector 49, Gurugram.
              Crafting 100% eggless custom cakes, artisan breads, cafe savories, and warm moments daily.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white/70 px-3 py-1.5 rounded-full border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>100% Pure Vegetarian & Eggless Bakes</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#241812] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-[#64554B]">
              <li>
                <a href="#home" className="hover:text-[#2A4B37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#2A4B37] transition-colors">Interactive Menu</a>
              </li>
              <li>
                <a href="#bakery" className="hover:text-[#2A4B37] transition-colors">Daily Bakery</a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-[#2A4B37] transition-colors">Custom Cakes</a>
              </li>
              <li>
                <a href="#cafe" className="hover:text-[#2A4B37] transition-colors">Cafe Kitchen</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2A4B37] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#2A4B37] transition-colors">Visit Us</a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#241812] mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-[#64554B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2A4B37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {restaurantInfo.address.formatted}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2A4B37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[#241812] font-semibold block">
                    {restaurantInfo.timings.displayHours}
                  </span>
                  <span className="text-[11px]">Open all 7 days</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2A4B37] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${restaurantInfo.phones[0].number}`} className="hover:underline font-mono block">
                    {restaurantInfo.phones[0].display}
                  </a>
                  <a href={`tel:${restaurantInfo.phones[1].number}`} className="hover:underline font-mono block text-[#2A4B37] font-semibold">
                    {restaurantInfo.phones[1].display} (Orders)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Enquire CTA (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#241812] mb-4">
                Connect & Enquire
              </h4>
              <p className="text-xs text-[#64554B] mb-4">
                Follow our daily oven batches, new seasonal cake flavours, and neighborhood updates.
              </p>
              
              <div className="flex items-center gap-3 mb-5">
                <a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white text-xs font-medium text-[#241812] hover:text-[#2A4B37] border border-[#241812]/10 rounded-xs transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C86348]" />
                  <span>{restaurantInfo.social.instagramHandle}</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => onOpenEnquiry('General')}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] rounded-xs transition-colors shadow-xs"
            >
              SEND INQUIRY TO STORE
            </button>
          </div>

        </div>

        {/* Bottom Legal & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64554B]">
          <p>
            &copy; {new Date().getFullYear()} Kwality Cafe & Bakery · Eros City Square, Sector 49, Gurugram. All verified public rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#241812] hover:text-[#2A4B37] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
