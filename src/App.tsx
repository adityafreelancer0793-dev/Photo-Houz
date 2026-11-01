/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioShowcase } from './components/StudioShowcase';
import { ServicesSection } from './components/ServicesSection';
import { StudioFeatures } from './components/StudioFeatures';
import { GatheringSpace } from './components/GatheringSpace';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { MessageSquare, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from './data/studioData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setBookingOpen(true);
  };

  const handleOpenLightbox = (imageUrl: string, title: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToStudio = () => {
    const el = document.querySelector('#studio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-charcoal-900 font-sans selection:bg-gold-200 selection:text-charcoal-900 antialiased">
      {/* 1. PhotoFocuz-Inspired Rounded Pill Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 2. Hero Section with Real Studio Photograph */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreStudio={scrollToStudio}
        />

        {/* 3. Studio Showcase Section with Uploaded Assets */}
        <StudioShowcase
          onOpenBooking={() => handleOpenBooking('Studio Space Hire')}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 4. Our Services Section (All 8 Services in Rounded Cards) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 5. Studio Features (7 Facilities in Rounded-3XL Cards) */}
        <StudioFeatures onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Gathering Space (The Real 35-40 Capacity Photo & Venue) */}
        <GatheringSpace onOpenBooking={handleOpenBooking} />

        {/* 7. Gallery Section (Editorial Photography & Lightbox) */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 8. About PHOTO.HOUZ Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Contact & Booking Section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Booking Quick Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedService}
      />

      {/* Global Image Lightbox Modal with Rounded-3XL Frame */}
      {lightboxState.isOpen && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 z-50 cursor-pointer transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <div className="bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={lightboxState.imageUrl}
                alt={lightboxState.title}
                className="max-w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 sm:p-7 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-sand-200">
              <div>
                <h3 className="font-serif text-xl font-normal text-charcoal-900">
                  {lightboxState.title}
                </h3>
                <p className="text-xs text-charcoal-700 font-light mt-1">
                  {lightboxState.caption}
                </p>
              </div>
              <button
                onClick={() => {
                  handleCloseLightbox();
                  handleOpenBooking(lightboxState.title);
                }}
                className="bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded-full transition-all duration-200 cursor-pointer shrink-0 shadow-xs hover:shadow-md"
              >
                Book This Setup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Quick Contact Widget with Smooth Rounded-Full Icons */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="bg-white hover:bg-gold-50 text-charcoal-900 p-3.5 rounded-full shadow-lg border border-sand-200/90 transition-transform duration-200 hover:scale-110 flex items-center justify-center"
          title="Call PHOTO.HOUZ"
          aria-label="Call studio"
        >
          <Phone className="w-4 h-4 text-gold-600" />
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
          aria-label="WhatsApp chat"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
