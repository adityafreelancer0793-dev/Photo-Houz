import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Calendar, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/studioData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: `All Works (${GALLERY_PHOTOS.length})` },
    { key: 'bride', label: 'Bride-to-Be & Dining' },
    { key: 'prewedding', label: 'Pre & Post Wedding' },
    { key: 'model', label: 'Model & Groom' },
    { key: 'kids', label: 'Kids & Milestones' },
    { key: 'studio', label: 'Creative Studio Sets' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => {
          if (activeCategory === 'bride') {
            return (
              p.categoryLabel.toLowerCase().includes('bride') ||
              p.categoryLabel.toLowerCase().includes('dining') ||
              p.categoryLabel.toLowerCase().includes('celebration')
            );
          }
          if (activeCategory === 'prewedding') {
            return (
              p.category === 'prewedding' ||
              p.categoryLabel.toLowerCase().includes('wedding') ||
              p.categoryLabel.toLowerCase().includes('couple')
            );
          }
          if (activeCategory === 'model') {
            return (
              p.categoryLabel.toLowerCase().includes('model') ||
              p.categoryLabel.toLowerCase().includes('groom') ||
              p.categoryLabel.toLowerCase().includes('fashion') ||
              p.categoryLabel.toLowerCase().includes('streetwear') ||
              p.categoryLabel.toLowerCase().includes('portrait')
            );
          }
          if (activeCategory === 'kids') {
            return (
              p.category === 'baby' ||
              p.category === 'maternity' ||
              p.categoryLabel.toLowerCase().includes('kid') ||
              p.categoryLabel.toLowerCase().includes('milestone')
            );
          }
          if (activeCategory === 'studio') {
            return (
              p.category === 'studio' ||
              p.category === 'podcast' ||
              p.categoryLabel.toLowerCase().includes('studio') ||
              p.categoryLabel.toLowerCase().includes('creator') ||
              p.categoryLabel.toLowerCase().includes('alcove') ||
              p.categoryLabel.toLowerCase().includes('canopy') ||
              p.categoryLabel.toLowerCase().includes('stage')
            );
          }
          return p.category === activeCategory;
        });

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0c0c0f] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#caa468]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                Official Portfolio · Full View
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Moments Captured at PHOTO.HOUZ
            </h2>
            <p className="text-xs text-stone-300 font-light mt-2 max-w-lg">
              Authentic studio sessions, bridal portraits, and creator shoots shown in their complete, original compositions without cropping.
            </p>
          </div>

          {/* Interactive Rounded-Full Filter Tabs in Dark Luxury Style */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-900/90 rounded-full border border-amber-500/30 shadow-md">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#caa468] text-stone-950 shadow-md font-semibold scale-102'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 
          UN-CROPPED TRUE MASONRY IN DARK LUXURY THEME:
          Uses CSS multi-columns with [column-fill:_balance]. 
          Each photo renders with w-full h-auto and is NEVER cut or cropped!
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 [column-fill:_balance]">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid mb-6 sm:mb-8 group bg-[#14141a] border border-amber-500/20 rounded-3xl p-3 sm:p-3.5 shadow-xl hover:shadow-2xl hover:border-[#caa468] transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame - 100% Full Uncut Original Ratio */}
              <div className="relative overflow-hidden rounded-2xl bg-black group/img">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#caa468] border border-amber-500/30 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#caa468]" />
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Floating View Full Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-stone-900/90 backdrop-blur-md text-[#caa468] p-2.5 rounded-full shadow-md border border-amber-500/30">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Descriptive Caption Container below image */}
              <div className="pt-3.5 pb-1 px-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-serif text-base sm:text-lg text-white font-normal leading-snug group-hover:text-[#caa468] transition-colors">
                    {photo.title}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-[#caa468] font-semibold shrink-0 pt-1">
                    Expand ↗
                  </span>
                </div>
                <p className="text-xs text-stone-300 font-light mt-1.5 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA with Rounded-Full Button */}
        <div className="mt-14 text-center">
          <p className="text-xs text-stone-400 font-light mb-4">
            Inspired by our bridal, pre-wedding, and commercial portfolio?
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 border border-amber-500/30 hover:border-[#caa468] bg-stone-900 hover:bg-[#caa468] text-[#caa468] hover:text-stone-950 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Personalized Shoot at PHOTO.HOUZ</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Rounded-3XL Frame in Dark Luxury */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-stone-300 hover:text-white p-3 rounded-full hover:bg-stone-800 z-50 cursor-pointer transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-stone-900/80 hover:bg-[#caa468] text-white hover:text-stone-950 p-3.5 rounded-full z-50 backdrop-blur-xs transition-all cursor-pointer shadow-md border border-amber-500/30"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-stone-900/80 hover:bg-[#caa468] text-white hover:text-stone-950 p-3.5 rounded-full z-50 backdrop-blur-xs transition-all cursor-pointer shadow-md border border-amber-500/30"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Container with Rounded-3XL */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[94vh] flex flex-col bg-[#14141c] rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30"
          >
            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center min-h-[50vh] max-h-[76vh] p-3 sm:p-4">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-w-full max-h-[74vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-7 bg-[#14141c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-amber-500/20">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#caa468] font-semibold">
                  PHOTO.HOUZ · {currentPhoto.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-normal text-white mt-0.5">
                  {currentPhoto.title}
                </h3>
                <p className="text-xs text-stone-300 font-light mt-1 max-w-xl">
                  {currentPhoto.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    const title = currentPhoto.title;
                    setLightboxIndex(null);
                    onOpenBooking(title);
                  }}
                  className="bg-gradient-to-r from-[#caa468] to-[#e0c793] text-stone-950 text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-md hover:scale-105"
                >
                  Book Similar Shoot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
