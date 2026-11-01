import React from 'react';
import { ArrowRight, Calendar, Sparkles, Phone, Compass, Users } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreStudio }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
      {/* Background Soft Glow & Geometry */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-gold-50/50 via-warm-beige/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Brand & Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Brand Kicker with Rounded Champagne Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-warm-beige border border-sand-200/80 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
                {BUSINESS_INFO.name} · {BUSINESS_INFO.locality}
              </span>
            </div>

            {/* Main Headline & Supporting Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-charcoal-900 tracking-tight leading-[1.08] mb-4 text-balance">
              Your Story.{' '}
              <span className="italic font-light text-charcoal-800">Our Studio.</span>
            </h1>

            <div className="mb-4 flex items-center gap-3">
              <span className="font-serif italic text-2xl sm:text-3xl text-gold-600 tracking-wide">
                {BUSINESS_INFO.supportingTagline}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-charcoal-800 mb-4">
              "{BUSINESS_INFO.catchphrase}"
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-700 font-light leading-relaxed max-w-xl mb-8">
              {BUSINESS_INFO.description} Pre-post wedding, podcast studio, bride-to-be dining, model portfolios, kids, maternity, and commercial productions at Pumpwell, Mangalore.
            </p>

            {/* Rounded CTA Buttons (PhotoFocuz style: rounded-full) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 bg-charcoal-900 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-gold-300 group-hover:text-white transition-colors" />
                <span>Book a Shoot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreStudio}
                className="inline-flex items-center justify-center gap-2 border border-sand-200 hover:border-gold-400 bg-warm-beige/60 hover:bg-white text-charcoal-900 px-7 py-4 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-200 cursor-pointer shadow-xs"
              >
                <Compass className="w-4 h-4 text-gold-600" />
                <span>Explore Our Studio</span>
              </button>
            </div>

            {/* Trust Anchors with Rounded Badges */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-charcoal-700 pt-6 border-t border-sand-200">
              <div className="flex items-center gap-2 bg-sand-50 px-3.5 py-1.5 rounded-full border border-sand-200/60">
                <Users className="w-4 h-4 text-gold-600" />
                <span className="font-medium text-charcoal-900">35 to 40</span>
                <span>Gathering Space</span>
              </div>
              <div className="flex items-center gap-2 bg-sand-50 px-3.5 py-1.5 rounded-full border border-sand-200/60">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>8 Signature Shoot Formats</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 font-medium text-charcoal-900 hover:text-gold-600 transition-colors bg-sand-50 px-3.5 py-1.5 rounded-full border border-sand-200/60"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Studio Photograph & Rounded 3XL Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Warm Halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold-200/40 via-sand-100/30 to-warm-beige/20 rounded-[32px] blur-xs pointer-events-none" />

              <div className="relative bg-warm-beige rounded-3xl overflow-hidden shadow-2xl border border-sand-200/80 aspect-4/5 sm:aspect-5/6">
                <img
                  src={STUDIO_IMAGES.heroStudio}
                  alt="PHOTO.HOUZ Creators Studio Interior with Professional Softbox & Armchair Setup"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('Screenshot_20261101_184154_WhatsApp_3659fc38.jpg')) {
                      target.src = STUDIO_IMAGES.originalPoster;
                    }
                  }}
                />

                {/* Editorial Vignette & Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-[0.22em] text-gold-300 font-medium mb-2 border border-white/20">
                    PHOTO.HOUZ Studio Floor
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-normal tracking-wide">
                    The Signature Creators Suite
                  </div>
                  <p className="text-xs text-white/85 font-light mt-1.5 leading-relaxed">
                    Mid-century armchair, spherical lantern softbox, wood slat acoustics, and polished studio floor.
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill with Rounded 2XL Frame */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sand-200 shadow-xl hidden sm:flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 font-serif text-lg font-bold border border-gold-200">
                  35+
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-charcoal-700 font-semibold">
                    Gathering Capacity
                  </div>
                  <div className="text-xs text-charcoal-900 font-medium">
                    Workshops, Meets & Shoots
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Metric Grid Strip with Rounded 2XL Cards */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-sand-200/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-sand-50/70 border border-sand-200/60 p-5 rounded-2xl">
            <div className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900 tabular-nums">
              35 – 40
            </div>
            <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold mt-1">
              Guest Gathering Space
            </div>
            <div className="text-xs text-charcoal-700 mt-1 font-light">
              Events, masterclasses, screenings
            </div>
          </div>

          <div className="bg-sand-50/70 border border-sand-200/60 p-5 rounded-2xl">
            <div className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900 tabular-nums">
              8+
            </div>
            <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold mt-1">
              Specialized Shoots
            </div>
            <div className="text-xs text-charcoal-700 mt-1 font-light">
              Portraits, maternity, brand, podcast
            </div>
          </div>

          <div className="bg-sand-50/70 border border-sand-200/60 p-5 rounded-2xl">
            <div className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900 tabular-nums">
              7 Key
            </div>
            <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold mt-1">
              Studio Facilities
            </div>
            <div className="text-xs text-charcoal-700 mt-1 font-light">
              Makeover room, projector, sound system
            </div>
          </div>

          <div className="bg-sand-50/70 border border-sand-200/60 p-5 rounded-2xl">
            <div className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900 tabular-nums">
              9606960990
            </div>
            <div className="text-xs uppercase tracking-wider text-gold-600 font-semibold mt-1">
              Instant Studio Enquiry
            </div>
            <div className="text-xs text-charcoal-700 mt-1 font-light">
              Call or WhatsApp available daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
