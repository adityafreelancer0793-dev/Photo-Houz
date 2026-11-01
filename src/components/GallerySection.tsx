import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Calendar, Maximize2, Sparkles, SlidersHorizontal } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/studioData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Works (12)' },
    { key: 'bride', label: 'Bride-to-Be' },
    { key: 'prewedding', label: 'Pre-Wedding & Couples' },
    { key: 'model', label: 'Model & Portraits' },
    { key: 'creators', label: 'Creators & Events' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => {
          if (activeCategory === 'bride') {
            return p.categoryLabel.toLowerCase().includes('bride');
          }
          if (activeCategory === 'prewedding') {
            return p.category === 'prewedding' || p.categoryLabel.toLowerCase().includes('pre-wedding');
          }
          if (activeCategory === 'model') {
            return (
              p.categoryLabel.toLowerCase().includes('model') ||
              p.categoryLabel.toLowerCase().includes('groom')
            );
          }
          if (activeCategory === 'creators') {
            return (
              p.category === 'podcast' ||
              p.category === 'studio' ||
              p.categoryLabel.toLowerCase().includes('creators') ||
              p.categoryLabel.toLowerCase().includes('gathering')
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
    <section id="gallery" className="py-20 lg:py-28 bg-white border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-warm-beige border border-sand-200/80 mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
                Official Portfolio · Full View
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight">
              Moments Captured at PHOTO.HOUZ
            </h2>
            <p className="text-xs text-charcoal-700 font-light mt-2 max-w-lg">
              Authentic studio sessions, bridal portraits, and creator shoots shown in their complete, original compositions.
            </p>
          </div>

          {/* Interactive PhotoFocuz-Style Rounded-Full Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-sand-50 rounded-full border border-sand-200/90 shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-charcoal-900 text-white shadow-xs scale-102'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 
          UN-CROPPED TRUE MASONRY: 
          Uses CSS multi-columns with [column-fill:_balance]. 
          Each photo renders with w-full h-auto and is NEVER cut or cropped!
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 [column-fill:_balance]">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid mb-6 sm:mb-8 group bg-white border border-sand-200/90 rounded-3xl p-3 sm:p-3.5 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame - 100% Full Uncut Original Ratio */}
              <div className="relative overflow-hidden rounded-2xl bg-sand-50/90 group/img">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-charcoal-900 border border-sand-200/80 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Floating View Full Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 backdrop-blur-md text-charcoal-900 p-2.5 rounded-full shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-600" />
                </div>
              </div>

              {/* Descriptive Caption Container below image (never obscuring the photograph) */}
              <div className="pt-3.5 pb-1 px-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-serif text-base sm:text-lg text-charcoal-900 font-normal leading-snug group-hover:text-gold-600 transition-colors">
                    {photo.title}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-gold-700 font-semibold shrink-0 pt-1">
                    Expand ↗
                  </span>
                </div>
                <p className="text-xs text-charcoal-700 font-light mt-1.5 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA with Rounded-Full Button */}
        <div className="mt-14 text-center">
          <p className="text-xs text-charcoal-700 font-light mb-4">
            Inspired by our bridal, pre-wedding, and commercial portfolio?
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 border border-sand-200 hover:border-gold-400 bg-sand-50 hover:bg-white text-charcoal-900 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:scale-[1.02]"
          >
            <Calendar className="w-4 h-4 text-gold-600" />
            <span>Book Your Personalized Shoot at PHOTO.HOUZ</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal with Rounded-3XL Frame */}
      {currentPhoto && lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 z-50 cursor-pointer transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3.5 rounded-full z-50 backdrop-blur-xs transition-all cursor-pointer shadow-md"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3.5 rounded-full z-50 backdrop-blur-xs transition-all cursor-pointer shadow-md"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Container with Rounded-3XL */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[94vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <div className="relative flex-1 bg-stone-950 overflow-hidden flex items-center justify-center min-h-[50vh] max-h-[76vh] p-3 sm:p-4">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-w-full max-h-[74vh] w-auto h-auto object-contain rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-7 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-sand-200">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
                  PHOTO.HOUZ · {currentPhoto.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-normal text-charcoal-900 mt-0.5">
                  {currentPhoto.title}
                </h3>
                <p className="text-xs text-charcoal-700 font-light mt-1 max-w-xl">
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
                  className="bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold px-7 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
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
