import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BakerySection } from './components/BakerySection';
import { CakesSection } from './components/CakesSection';
import { CafeSection } from './components/CafeSection';
import { KwalityPicks } from './components/KwalityPicks';
import { MenuSection } from './components/MenuSection';
import { FullWidthStatement } from './components/FullWidthStatement';
import { MomentsSection } from './components/MomentsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { SocialSection } from './components/SocialSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { ItemModal } from './components/ItemModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState('General');
  const [prefilledItem, setPrefilledItem] = useState<string | undefined>(undefined);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleOpenEnquiry = (type = 'General', itemName?: string) => {
    setEnquiryType(type);
    setPrefilledItem(itemName);
    setEnquiryModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241812] selection:bg-[#EAE0D1] selection:text-[#241812] flex flex-col font-sans">
      
      {/* 1. Floating / Sticky Navbar */}
      <Navbar onOpenEnquiry={(type) => handleOpenEnquiry(type || 'General')} />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onVisitUs={() => scrollToSection('location')}
        />

        {/* 3. About / Editorial Split Section */}
        <AboutSection />

        {/* 4. Bakery Section */}
        <BakerySection
          onSelectItem={(item) => setSelectedItem(item)}
          onExploreFullMenu={() => scrollToSection('menu')}
        />

        {/* 5. Cakes Section */}
        <CakesSection
          onSelectItem={(item) => setSelectedItem(item)}
          onOpenCakeEnquiry={() => handleOpenEnquiry('Cake')}
          onExploreCakes={() => scrollToSection('menu')}
        />

        {/* 6. Cafe Section */}
        <CafeSection
          onSelectItem={(item) => setSelectedItem(item)}
          onExploreFullMenu={() => scrollToSection('menu')}
        />

        {/* 7. Interactive Menu Section */}
        <MenuSection onSelectItem={(item) => setSelectedItem(item)} />

        {/* 8. Kwality Picks (Customer Favourites Supported by Evidence) */}
        <KwalityPicks
          onSelectItem={(item) => setSelectedItem(item)}
          onOpenEnquiry={(type) => handleOpenEnquiry(type || 'General')}
        />

        {/* 9. Full-Width Visual Statement (BAKED. SERVED. SHARED.) */}
        <FullWidthStatement />

        {/* 10. Moments at Kwality (Editorial Timeline) */}
        <MomentsSection />

        {/* 11. Masonry Gallery with Full-Screen Lightbox */}
        <GallerySection />

        {/* 12. Verified Public Reviews */}
        <ReviewsSection />

        {/* 13. See What's Fresh (Instagram Link) */}
        <SocialSection />

        {/* 14. Location & Contact (COME SAY HELLO.) */}
        <LocationSection />

      </main>

      {/* 15. Warm Editorial Footer */}
      <Footer onOpenEnquiry={(type) => handleOpenEnquiry(type || 'General')} />

      {/* 16. Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialType={enquiryType}
        prefilledItemName={prefilledItem}
      />

      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onEnquireItem={(item) => handleOpenEnquiry(item.category === 'cakes' ? 'Cake' : 'General', item.name)}
      />

    </div>
  );
}
