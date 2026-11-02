import React from 'react';
import { Sparkles, Eye, Download, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

interface StudioPosterBannerProps {
  onOpenBooking: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const StudioPosterBanner: React.FC<StudioPosterBannerProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  return (
    <section id="official-poster" className="py-20 lg:py-28 bg-[#0c0c0f] relative overflow-hidden border-t border-amber-500/20">
      {/* Ambient warm lantern glow matching the poster lamp */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-600/15 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#caa468] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                Official Studio Poster · Creators Guide
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Our Studio at a Glance
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#caa468] mt-1 font-light">
              "Create. Capture. Cherish."
            </p>
          </div>

          <p className="text-sm text-stone-300 font-light max-w-md leading-relaxed">
            The complete guide to our facilities, lighting gear, celebration formats, and 35–40 guest gathering hall at Pumpwell, Mangalore.
          </p>
        </div>

        {/* Master Poster Presentation Card with Rounded Corners */}
        <div className="relative bg-gradient-to-b from-[#16161d] via-[#121217] to-[#0d0d10] border border-amber-500/30 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden group">
          {/* Subtle gold foil border shimmer */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-amber-500/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Full Uncropped Poster with Logo in the Down Right */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.8)] bg-black">
                {/* Full Uncropped Poster Image */}
                <img
                  src={STUDIO_IMAGES.darkPoster}
                  alt="PHOTO.HOUZ Creators Studio Official Poster - Your Story. Our Studio. Unforgettable Moments."
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />

                {/* 
                  DOWN RIGHT LOGO (as explicitly requested: 
                  "and in down right according to that not too big add logo given in the second image")
                */}
                <div className="absolute bottom-4 right-4 z-20 group/logo">
                  <div className="bg-white/95 backdrop-blur-md p-2 sm:p-2.5 rounded-xl border border-amber-500/40 shadow-2xl transition-all duration-300 hover:scale-105 w-24 sm:w-32">
                    <img
                      src={STUDIO_IMAGES.studioLogo}
                      alt="PHOTO.HOUZ Creators Studio Logo"
                      className="w-full h-auto object-contain block"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Quick Expand Button on Top-Right */}
                <button
                  onClick={() =>
                    onOpenLightbox(
                      STUDIO_IMAGES.darkPoster,
                      'PHOTO.HOUZ Official Creators Studio Poster',
                      'Your Story. Our Studio. Complete overview of services, facilities, and 35-40 gathering space at Pumpwell, Mangalore.'
                    )
                  }
                  className="absolute top-4 right-4 bg-stone-900/85 hover:bg-[#caa468] text-white hover:text-stone-950 p-2.5 rounded-full transition-all duration-200 border border-amber-500/40 shadow-lg cursor-pointer hover:scale-110 z-10"
                  title="Expand Full Resolution Poster"
                  aria-label="Expand poster"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Poster Blueprint Highlights & Action Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#caa468] font-semibold block mb-2">
                  Studio Architecture & Services
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                  Everything You Need in One Place.
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-light mb-6">
                  Designed around our signature philosophy: <strong className="text-[#caa468] font-medium">"Just Bring Yourself! We'll Handle The Rest."</strong> Our studio integrates lighting, styling, audio recording, and community gathering into a cohesive luxury setting.
                </p>

                {/* Quick Spec Highlights extracted from the poster */}
                <div className="space-y-3 pt-4 border-t border-amber-500/20 text-xs">
                  <div className="flex items-center gap-3 p-3 bg-stone-900/60 rounded-2xl border border-amber-500/20">
                    <span className="w-7 h-7 rounded-full bg-[#caa468]/15 text-[#caa468] flex items-center justify-center shrink-0 border border-[#caa468]/30">
                      ★
                    </span>
                    <div>
                      <span className="font-semibold text-white block">8 Specialized Shoot Formats</span>
                      <span className="text-stone-400">Model, Baby, Maternity, Bride & Groom, Pre-Wedding, Podcast, Brand</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-stone-900/60 rounded-2xl border border-amber-500/20">
                    <span className="w-7 h-7 rounded-full bg-[#caa468]/15 text-[#caa468] flex items-center justify-center shrink-0 border border-[#caa468]/30">
                      ★
                    </span>
                    <div>
                      <span className="font-semibold text-white block">7 High-End Studio Features</span>
                      <span className="text-stone-400">Multiple backdrops, makeover suite, full camera grip, projector & hi-fi sound</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-stone-900/60 rounded-2xl border border-amber-500/20">
                    <span className="w-7 h-7 rounded-full bg-[#caa468]/15 text-[#caa468] flex items-center justify-center shrink-0 border border-[#caa468]/30">
                      ★
                    </span>
                    <div>
                      <span className="font-semibold text-white block">35 to 40 Gathering Space</span>
                      <span className="text-stone-400">Host private celebrations, workshops, screenings, and bride-to-be dining</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Studio Time</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 border border-amber-500/30 hover:border-[#caa468] bg-stone-900/80 hover:bg-stone-850 text-white text-xs uppercase tracking-widest font-medium px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#caa468]" />
                  <span>{BUSINESS_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
