import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface NavbarProps {
  onOpenEnquiry: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'MENU', href: '#menu' },
    { label: 'BAKERY', href: '#bakery' },
    { label: 'CAKES', href: '#cakes' },
    { label: 'CAFE', href: '#cafe' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'VISIT US', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#241812]/10 py-3.5'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-[#241812]/5 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#home"
            className="flex items-baseline gap-2 group text-[#241812] focus:outline-hidden"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#241812] group-hover:text-[#2A4B37] transition-colors">
              KWALITY
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#2A4B37] hidden sm:inline">
              CAFE & BAKERY
            </span>
          </a>

          {/* Zone 2: Clean 4-7 text navigation links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wider text-[#241812]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#2A4B37] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#2A4B37] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${restaurantInfo.primaryPhone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#241812]/75 hover:text-[#2A4B37] transition-colors px-2 py-1.5"
              title="Call Kwality Cafe"
            >
              <Phone className="w-3.5 h-3.5 text-[#2A4B37]" />
              <span className="tabular-nums font-mono">{restaurantInfo.phones[1].display}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry('General')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] hover:bg-[#1F3829] active:scale-98 transition-all rounded-sm shadow-xs whitespace-nowrap"
            >
              ENQUIRE
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#241812] hover:text-[#2A4B37] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#241812]/10 px-6 pt-4 pb-6 shadow-md transition-all">
          <div className="flex flex-col space-y-3.5 text-sm font-semibold tracking-wider text-[#241812]/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#2A4B37] transition-colors border-b border-[#241812]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${restaurantInfo.primaryPhone}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-[#241812] py-1"
              >
                <Phone className="w-4 h-4 text-[#2A4B37]" />
                <span>Call Store: {restaurantInfo.phones[1].display}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry('General');
                }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#2A4B37] rounded-sm"
              >
                SEND AN ENQUIRY
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
