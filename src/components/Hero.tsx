import React from 'react';
import { ArrowRight, Calendar, Sparkles, Phone, Compass, Users, MapPin } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreStudio }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0c0c0f] overflow-hidden">
      {/* 
        Ambient Studio Spotlight Effect 
        Replicating the iconic warm spherical paper lantern glow from the official poster
      */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-amber-500/15 via-[#caa468]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Brand & Dark Luxury Typography (Restored to exact previous style per user screenshot) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Brand Kicker with Rounded Gold Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#caa468] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                {BUSINESS_INFO.name} · {BUSINESS_INFO.locality}
              </span>
            </div>

            {/* Main Headline matching the poster */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white tracking-tight leading-[1.08] mb-3 text-balance">
              YOUR STORY.{' '}
              <span className="text-stone-300 font-light block sm:inline">OUR STUDIO.</span>
            </h1>

            {/* Script Italic Calligraphy matching the poster */}
            <div className="mb-4">
              <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#caa468] tracking-wide block">
                Unforgettable Moments.
              </span>
            </div>

            {/* Slogan & Catchphrase */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-200/90 mb-3">
              "{BUSINESS_INFO.catchphrase}"
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed max-w-xl mb-8">
              A creative space where ideas come to life and memories are made. Pre-post wedding, podcast studio, bride-to-be dining, model portfolios, kids, maternity, and commercial productions at Pumpwell, Mangalore.
            </p>

            {/* Rounded CTA Buttons in Dark Gold Palette */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-stone-950" />
                <span>Book a Shoot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreStudio}
                className="inline-flex items-center justify-center gap-2 border border-amber-500/30 hover:border-[#caa468] bg-stone-900/80 hover:bg-stone-850 text-white px-7 py-4 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#caa468]" />
                <span>Explore Our Studio</span>
              </button>
            </div>

            {/* Trust Anchors with Obsidian Badges */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-xs text-stone-300 pt-6 border-t border-amber-500/20">
              <div className="flex items-center gap-2 bg-stone-900/90 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                <Users className="w-3.5 h-3.5 text-[#caa468]" />
                <span className="font-semibold text-white">35 to 40</span>
                <span>Gathering Space</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/90 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5 text-[#caa468]" />
                <span>8 Signature Formats</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 font-medium text-stone-200 hover:text-[#caa468] transition-colors bg-stone-900/90 px-3.5 py-1.5 rounded-full border border-amber-500/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#caa468]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Studio Photograph (Full, bold, not small, not half) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Warm Golden Halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/30 via-gold-500/10 to-transparent rounded-[36px] blur-md pointer-events-none" />

              <div className="relative bg-[#141419] rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 p-2 sm:p-2.5">
                {/* 100% Full Aspect Ratio View (Full frame, 2:3 matching native photo) */}
                <div className="relative overflow-hidden rounded-2xl bg-black aspect-2/3 w-full">
                  <img
                    src={STUDIO_IMAGES.heroStudio}
                    alt="PHOTO.HOUZ Creators Studio Royal Heritage Bridal Shoot at Pumpwell, Mangalore"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 block"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Description written DOWN below the image (not on top of it) */}
                <div className="pt-3 pb-1 px-3 flex items-center justify-between text-white">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#caa468] font-semibold">
                      PHOTO.HOUZ Signature Suite
                    </div>
                    <div className="font-serif text-base font-normal text-white">
                      Royal Heritage Terracotta Stage
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-stone-400 font-light flex items-center gap-1 justify-end">
                      <MapPin className="w-3 h-3 text-[#caa468]" />
                      <span>Pumpwell</span>
                    </div>
                    <div className="text-[11px] text-stone-300 font-medium">
                      Mangalore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
