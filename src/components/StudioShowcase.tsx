import React, { useState } from 'react';
import { Check, ArrowRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { STUDIO_SHOWCASE, BUSINESS_INFO } from '../data/studioData';
import { StudioShowcaseItem } from '../types';

interface StudioShowcaseProps {
  onOpenBooking: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const StudioShowcase: React.FC<StudioShowcaseProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [activeItem, setActiveItem] = useState<StudioShowcaseItem>(STUDIO_SHOWCASE[0]);

  return (
    <section id="studio" className="py-20 lg:py-28 bg-ivory/60 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sand-200/80 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-gold-500" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
              The Physical Studio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight mb-4">
            A Crafted Creative Environment
          </h2>
          <p className="text-base text-charcoal-700 font-light leading-relaxed">
            Explore the authentic spaces inside PHOTO.HOUZ. Featuring acoustic wood slat backdrops, motorized seamless paper rolls, dedicated podcast staging, and a 35 to 40 gathering event space.
          </p>
        </div>

        {/* Featured Showcase Stage: Rounded-3XL Master Card */}
        <div className="bg-white border border-sand-200/80 rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Active Big Photo with Rounded 2XL Framing */}
            <div className="lg:col-span-7 relative group overflow-hidden bg-stone-900 rounded-2xl shadow-sm min-h-[380px] sm:min-h-[460px] flex items-center justify-center p-2">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[460px] w-auto max-w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent pointer-events-none rounded-2xl" />

              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/95 backdrop-blur-md text-charcoal-900 text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-sand-200 shadow-xs">
                  {activeItem.tag}
                </span>
              </div>

              <button
                onClick={() => onOpenLightbox(activeItem.imageUrl, activeItem.title, activeItem.description)}
                className="absolute bottom-4 right-4 z-10 bg-white/95 hover:bg-gold-500 text-charcoal-900 hover:text-white p-3 rounded-full transition-all duration-200 shadow-md cursor-pointer hover:scale-110"
                title="View Full Resolution"
                aria-label="Expand photo"
              >
                <Eye className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-20 text-white z-10">
                <div className="text-[11px] uppercase tracking-widest text-gold-300 font-semibold mb-1">
                  {activeItem.subtitle}
                </div>
                <div className="font-serif text-xl sm:text-2xl font-light leading-snug">
                  {activeItem.title}
                </div>
              </div>
            </div>

            {/* Active Details & Key Specifications */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-2">
                  Facility Specifications
                </div>
                <h3 className="font-serif text-2xl font-normal text-charcoal-900 mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-6 font-light">
                  {activeItem.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-sand-100 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-charcoal-800">
                    <div className="w-4 h-4 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5 border border-gold-200">
                      <Check className="w-2.5 h-2.5 text-gold-700" />
                    </div>
                    <span>Calibrated strobe & continuous softbox lighting setups</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-charcoal-800">
                    <div className="w-4 h-4 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5 border border-gold-200">
                      <Check className="w-2.5 h-2.5 text-gold-700" />
                    </div>
                    <span>Curated mid-century armchairs, bouclé seating, and stools</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-charcoal-800">
                    <div className="w-4 h-4 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5 border border-gold-200">
                      <Check className="w-2.5 h-2.5 text-gold-700" />
                    </div>
                    <span>Acoustically tuned environment for crystal clear podcast recording</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-charcoal-800">
                    <div className="w-4 h-4 rounded-full bg-gold-50 flex items-center justify-center shrink-0 mt-0.5 border border-gold-200">
                      <Check className="w-2.5 h-2.5 text-gold-700" />
                    </div>
                    <span>High-ceiling spacious floor with seamless roll backdrop system</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-sand-100">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer hover:scale-[1.02]"
                >
                  <span>Reserve This Space</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-gold-600 underline underline-offset-4"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rounded-2XL Thumbnail Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {STUDIO_SHOWCASE.map((item) => {
            const isSelected = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`text-left p-2 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-gold-500 shadow-md ring-2 ring-gold-400/40 scale-102'
                    : 'bg-white/80 border-sand-200 hover:bg-white hover:border-gold-300 shadow-2xs'
                }`}
              >
                <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-sand-100 mb-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-gold-700 truncate px-1">
                  {item.tag}
                </div>
                <div className="text-[11px] font-medium text-charcoal-900 truncate px-1">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Studio Ambience Guarantee Banner with Rounded 3XL Framing */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-sand-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-600 border border-gold-200 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-charcoal-900 font-medium">
                Production-Ready Studio Environment
              </h4>
              <p className="text-xs text-charcoal-700 font-light mt-0.5">
                Every reservation includes power distribution, grip stands, client lounge access, and dedicated dressing room support.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                const el = document.querySelector('#features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-charcoal-900 hover:text-white hover:bg-charcoal-900 bg-sand-100 border border-sand-200 transition-all cursor-pointer"
            >
              View 7 Studio Features →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
