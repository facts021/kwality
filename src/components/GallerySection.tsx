import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { restaurantImages, ImageRecord } from '../data/restaurantData';
import { ImageWithFallback } from './ImageWithFallback';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const categories = [
    'ALL',
    'BAKERY',
    'CAKES',
    'CAFE',
    'COFFEE',
    'INTERIOR',
    'EXTERIOR',
  ];

  const galleryItems = restaurantImages.gallery.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category.toUpperCase() === activeCategory;
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, galleryItems.length]);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#241812]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#2A4B37]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A4B37]">
                VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#241812] tracking-tight leading-tight">
              THE KWALITY GALLERY
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#64554B] max-w-sm">
            Authentic glimpses of our artisan bakery counter, custom cakes, cafe plates, and
            spacious ground-floor concourse at Eros City Square, Sector 49 Gurugram.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#2A4B37] text-white shadow-xs'
                  : 'bg-white border border-[#241812]/10 text-[#241812]/75 hover:text-[#241812] hover:bg-[#F4EFE6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xs bg-[#EFE8DD] shadow-xs aspect-4/3 sm:aspect-square"
            >
              <ImageWithFallback
                src={item.url}
                alt={item.alt}
                fallbackCategory={item.category}
                fallbackTitle={item.title}
                containerClassName="w-full h-full"
                className="img-zoom"
              />

              {/* Hover overlay with title & icon */}
              <div className="absolute inset-0 bg-[#241812]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5E3B5] block mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-white">
                    {item.title || item.alt}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox */}
      {selectedImageIndex !== null && galleryItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#241812]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden hidden sm:flex"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-hidden hidden sm:flex"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xs shadow-2xl bg-black">
              <img
                src={galleryItems[selectedImageIndex].url}
                alt={galleryItems[selectedImageIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            {/* Captions & count */}
            <div className="mt-4 text-center text-white max-w-lg">
              <div className="text-xs uppercase tracking-widest text-[#F5E3B5] font-semibold mb-1">
                {galleryItems[selectedImageIndex].category} · {selectedImageIndex + 1} of {galleryItems.length}
              </div>
              <h3 className="font-serif text-lg font-bold">
                {galleryItems[selectedImageIndex].title || galleryItems[selectedImageIndex].alt}
              </h3>
              <p className="text-xs text-white/60 mt-1">
                Source: {galleryItems[selectedImageIndex].source}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
