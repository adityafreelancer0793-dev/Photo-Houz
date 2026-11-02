/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioPosterBanner } from './components/StudioPosterBanner';
import { StudioShowcase } from './components/StudioShowcase';
import { ServicesSection } from './components/ServicesSection';
import { StudioFeatures } from './components/StudioFeatures';
import { GatheringSpace } from './components/GatheringSpace';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { StudioLocationMap } from './components/StudioLocationMap';
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
    <div className="min-h-screen bg-[#0c0c0f] text-[#f5f4f0] font-sans selection:bg-[#caa468] selection:text-[#0c0c0f] antialiased">
      {/* 1. Dark Luxury Rounded Pill Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 2. Hero Section with Real Studio Photograph & Warm Spotlight Glow */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreStudio={scrollToStudio}
        />

        {/* 3. Official Studio Poster Banner Showcase (Full Image with Down-Right Logo) */}
        <StudioPosterBanner
          onOpenBooking={() => handleOpenBooking('Studio Space Hire')}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 4. Studio Showcase Section with Uploaded Assets */}
        <StudioShowcase
          onOpenBooking={() => handleOpenBooking('Studio Space Hire')}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 5. Our Services Section (All 8 Services in Rounded Dark Cards) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 6. Studio Features (7 Facilities matching the poster with Gold Icons) */}
        <StudioFeatures onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Gathering Space (The Real 35-40 Capacity Photo & Venue) */}
        <GatheringSpace onOpenBooking={handleOpenBooking} />

        {/* 8. Gallery Section (Uncropped Photography & Lightbox) */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 9. About PHOTO.HOUZ Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Studio Location & Google Maps */}
        <StudioLocationMap />

        {/* 11. Contact & Booking Section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Booking Quick Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedService}
      />

      {/* Global Image Lightbox Modal with Rounded-3XL Dark Frame */}
      {lightboxState.isOpen && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 text-stone-300 hover:text-white p-3 rounded-full hover:bg-stone-800 z-50 cursor-pointer transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-[#14141c] rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30"
          >
            <div className="bg-black flex items-center justify-center max-h-[75vh] p-2">
              <img
                src={lightboxState.imageUrl}
                alt={lightboxState.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 sm:p-7 bg-[#14141c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-amber-500/20 text-white">
              <div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {lightboxState.title}
                </h3>
                <p className="text-xs text-stone-300 font-light mt-1">
                  {lightboxState.caption}
                </p>
              </div>
              <button
                onClick={() => {
                  handleCloseLightbox();
                  handleOpenBooking(lightboxState.title);
                }}
                className="bg-gradient-to-r from-[#caa468] to-[#e0c793] text-stone-950 text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded-full transition-all duration-200 cursor-pointer shrink-0 shadow-md hover:scale-105"
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
          className="bg-stone-900/90 hover:bg-stone-850 text-white p-3.5 rounded-full shadow-2xl border border-amber-500/40 transition-transform duration-200 hover:scale-110 flex items-center justify-center"
          title="Call PHOTO.HOUZ"
          aria-label="Call studio"
        >
          <Phone className="w-4 h-4 text-[#caa468]" />
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-stone-950 p-3.5 rounded-full shadow-2xl transition-transform duration-200 hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
          aria-label="WhatsApp chat"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
