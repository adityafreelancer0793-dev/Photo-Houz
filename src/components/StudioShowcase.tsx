import React, { useState } from 'react';
import { Check, ArrowRight, Eye } from 'lucide-react';
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
    <section id="studio" className="py-20 lg:py-28 bg-[#0e0e13] border-t border-amber-500/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#caa468]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
              The Physical Studio
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
            A Crafted Creative Environment
          </h2>
          <p className="text-base text-stone-300 font-light leading-relaxed">
            Explore the authentic spaces inside PHOTO.HOUZ. Featuring acoustic wood slat backdrops, motorized seamless paper rolls, dedicated podcast staging, and a 35 to 40 gathering event space.
          </p>
        </div>

        {/* Featured Showcase Stage: Rounded-3XL Master Card */}
        <div className="bg-[#14141a] border border-amber-500/25 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Active Big Photo with Rounded 2XL Framing */}
            <div className="lg:col-span-7 relative group overflow-hidden bg-black/80 rounded-2xl shadow-sm min-h-[380px] sm:min-h-[460px] flex items-center justify-center p-2 border border-amber-500/20">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[460px] w-auto max-w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-2xl" />

              <div className="absolute top-4 left-4 z-10">
                <span className="bg-stone-900/90 backdrop-blur-md text-[#caa468] text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-xs">
                  {activeItem.tag}
                </span>
              </div>

              <button
                onClick={() => onOpenLightbox(activeItem.imageUrl, activeItem.title, activeItem.description)}
                className="absolute bottom-4 right-4 z-10 bg-stone-900/90 hover:bg-[#caa468] text-white hover:text-stone-950 p-3 rounded-full transition-all duration-200 border border-amber-500/30 shadow-md cursor-pointer hover:scale-110"
                title="View Full Resolution"
                aria-label="Expand photo"
              >
                <Eye className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-20 text-white z-10">
                <div className="text-[11px] uppercase tracking-widest text-[#caa468] font-semibold mb-1">
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
                <div className="text-xs uppercase tracking-widest text-[#caa468] font-semibold mb-2">
                  Facility Specifications
                </div>
                <h3 className="font-serif text-2xl font-normal text-white mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                  {activeItem.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-amber-500/20 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-stone-300">
                    <div className="w-4 h-4 rounded-full bg-[#caa468]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#caa468]/40">
                      <Check className="w-2.5 h-2.5 text-[#caa468]" />
                    </div>
                    <span>Calibrated strobe & continuous softbox lighting setups</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-300">
                    <div className="w-4 h-4 rounded-full bg-[#caa468]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#caa468]/40">
                      <Check className="w-2.5 h-2.5 text-[#caa468]" />
                    </div>
                    <span>Curated mid-century armchairs, bouclé seating, and props</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-300">
                    <div className="w-4 h-4 rounded-full bg-[#caa468]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#caa468]/40">
                      <Check className="w-2.5 h-2.5 text-[#caa468]" />
                    </div>
                    <span>Acoustically tuned environment for crystal clear podcast recording</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-300">
                    <div className="w-4 h-4 rounded-full bg-[#caa468]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#caa468]/40">
                      <Check className="w-2.5 h-2.5 text-[#caa468]" />
                    </div>
                    <span>High-ceiling spacious floor with seamless roll backdrop system</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-amber-500/20">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer hover:scale-[1.02]"
                >
                  <span>Reserve This Space</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-[#caa468] underline underline-offset-4"
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
                    ? 'bg-[#1e1e28] border-[#caa468] shadow-lg ring-2 ring-[#caa468]/40 scale-102'
                    : 'bg-[#141419]/90 border-white/10 hover:border-amber-500/40 hover:bg-[#181820]'
                }`}
              >
                <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-black mb-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#caa468] truncate px-1">
                  {item.tag}
                </div>
                <div className="text-[11px] font-medium text-stone-200 truncate px-1">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
