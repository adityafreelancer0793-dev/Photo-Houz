import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory/60 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Brand Statement */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sand-200/80 mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
                About PHOTO.HOUZ
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight mb-4 leading-tight">
              A Creators Studio Crafted for Pure Expression.
            </h2>

            <div className="p-5 bg-white rounded-2xl border border-sand-200/80 mb-6 shadow-2xs">
              <p className="font-serif italic text-lg sm:text-xl text-charcoal-800">
                "{BUSINESS_INFO.tagline} {BUSINESS_INFO.supportingTagline}"
              </p>
            </div>

            <p className="text-base text-charcoal-700 font-light leading-relaxed mb-6">
              {BUSINESS_INFO.aboutDetailed}
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold-700" />
                </div>
                <div className="text-xs sm:text-sm text-charcoal-800">
                  <strong className="font-medium text-charcoal-900">Versatile Creative Facilities:</strong> Motorized seamless backdrops, textured acoustic wood walls, cyclorama, and high ceilings.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold-700" />
                </div>
                <div className="text-xs sm:text-sm text-charcoal-800">
                  <strong className="font-medium text-charcoal-900">Hospitality & Comfort:</strong> Dedicated private makeover dressing room, bouclé client lounge, and sanitized nursery corner.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold-700" />
                </div>
                <div className="text-xs sm:text-sm text-charcoal-800">
                  <strong className="font-medium text-charcoal-900">Community Gathering:</strong> Dedicated 35 to 40 gathering space with 4K conference projector and hi-fi sound system.
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-sand-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gold-600 font-semibold block mb-0.5">
                  Studio Creed
                </span>
                <span className="font-serif italic text-lg text-charcoal-900">
                  {BUSINESS_INFO.closingLine}
                </span>
              </div>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02]"
              >
                <span>Plan Your Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Rounded-3XL Composition with Uploaded Client Lounge Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Outer decorative halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-gold-200/30 to-warm-beige/30 rounded-[36px] blur-xs pointer-events-none" />

              <div className="relative bg-white p-3.5 rounded-3xl border border-sand-200/90 shadow-xl">
                <div className="aspect-4/3 overflow-hidden rounded-2xl bg-sand-100">
                  <img
                    src={STUDIO_IMAGES.loungeConsultation}
                    alt="PHOTO.HOUZ Client Consultation & Styling Lounge"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 sm:p-5 bg-white flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
                      PHOTO.HOUZ – Creators Studio
                    </div>
                    <div className="font-serif text-sm sm:text-base text-charcoal-900">
                      Crafting Unforgettable Moments
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-charcoal-700 font-medium">
                      Inquiries
                    </div>
                    <div className="text-xs font-semibold text-charcoal-900">
                      {BUSINESS_INFO.phone}
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
