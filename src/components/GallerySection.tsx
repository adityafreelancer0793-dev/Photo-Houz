import React, { useState } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/studioData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Works' },
    { key: 'model', label: 'Model & Portraits' },
    { key: 'studio', label: 'Studio & Setups' },
    { key: 'podcast', label: 'Podcast & Audio' },
    { key: 'maternity', label: 'Maternity' },
    { key: 'baby', label: 'Baby Shoots' },
    { key: 'prewedding', label: 'Pre-Wedding' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => {
          if (activeCategory === 'podcast') {
            return p.category === 'podcast' || p.category === 'studio';
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
                Visual Showcase
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight">
              Moments Captured at PHOTO.HOUZ
            </h2>
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

        {/* Masonry / Dynamic Editorial Grid with Rounded-3XL Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => {
            const isWide = index % 5 === 0;
            return (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden bg-sand-100 rounded-3xl border border-sand-200/90 cursor-pointer transition-all duration-300 hover:border-gold-400 hover:shadow-xl hover:-translate-y-1 ${
                  isWide ? 'sm:col-span-2 aspect-16/10' : 'aspect-4/5'
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim and hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-md text-charcoal-900 p-2.5 rounded-full shadow-md">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest text-gold-300 font-semibold mb-2 border border-white/20">
                    {photo.categoryLabel}
                  </span>
                  <h4 className="font-serif text-lg font-light leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-white/85 font-light mt-1 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA with Rounded-Full Button */}
        <div className="mt-14 text-center">
          <p className="text-xs text-charcoal-700 font-light mb-4">
            Looking for a specific backdrop, lighting style, or shoot format not shown above?
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 border border-sand-200 hover:border-gold-400 bg-sand-50 hover:bg-white text-charcoal-900 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md"
          >
            <Calendar className="w-4 h-4 text-gold-600" />
            <span>Consult Our In-House Creative Team</span>
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
            className="max-w-4xl w-full max-h-[85vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center max-h-[65vh]">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-w-full max-h-[65vh] object-contain"
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
                <p className="text-xs text-charcoal-700 font-light mt-1">
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
                  className="bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
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
