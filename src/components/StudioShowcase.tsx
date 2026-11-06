import React, { useState } from 'react';
import { Check, ArrowRight, Eye, Sparkles, Layers, Sliders, Camera } from 'lucide-react';
import { STUDIO_SHOWCASE, BUSINESS_INFO } from '../data/studioData';
import { StudioShowcaseItem } from '../types';

interface StudioShowcaseProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenLightbox: (imageUrl: string, title: string, caption: string) => void;
}

export const StudioShowcase: React.FC<StudioShowcaseProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [activeItem, setActiveItem] = useState<StudioShowcaseItem>(STUDIO_SHOWCASE[0]);

  return (
    <section id="studio" className="py-20 lg:py-28 bg-[#0e0e13] border-t border-amber-500/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#caa468]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
              Studio Environments · 3 Authentic Setups
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-3">
            Real Physical Staging at PHOTO.HOUZ
          </h2>
          <p className="text-base text-stone-300 font-light leading-relaxed">
            Authentic creators suites inside our Pumpwell, Mangalore studio. Each environment is ready-to-shoot with calibrated overhead boom lighting, curated seating, and specialized acoustics.
          </p>
        </div>

        {/* 
          Main Showcase Card:
          Clean uncropped photo presentation with descriptions strictly written down 
          (NO text or gradients covering on top of the image).
        */}
        <div className="bg-[#14141a] border border-amber-500/25 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* 
              Photo Container:
              100% clean and unobstructed. 
              NO gradients, NO overlay text on top of the photo.
            */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative group overflow-hidden bg-black rounded-2xl border border-amber-500/30 shadow-xl flex items-center justify-center p-1 sm:p-2">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[650px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01] block"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Expand button in corner */}
                <button
                  onClick={() => onOpenLightbox(activeItem.imageUrl, activeItem.title, activeItem.description)}
                  className="absolute bottom-4 right-4 bg-stone-900/90 hover:bg-[#caa468] text-white hover:text-stone-950 p-3 rounded-full transition-all duration-200 border border-amber-500/40 shadow-lg cursor-pointer hover:scale-110 z-10"
                  title="View Full Resolution Photo"
                  aria-label="Expand photo"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Tag and Quick Badge below the photo */}
              <div className="flex items-center justify-between pt-3 px-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#caa468] bg-stone-900/90 px-3 py-1 rounded-full border border-amber-500/30">
                  {activeItem.tag}
                </span>
                <span className="text-xs text-stone-400 font-light">
                  Actual Studio Staging · Pumpwell, Mangalore
                </span>
              </div>
            </div>

            {/* 
              Details & Specifications:
              Written down clearly beside/below the image according to what is in that photo.
            */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#caa468] font-semibold mb-1.5">
                  {activeItem.subtitle}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4 leading-snug">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-light mb-6">
                  {activeItem.description}
                </p>

                {/* Specific Staging & Lighting Features */}
                {activeItem.features && (
                  <div className="space-y-3 pt-4 border-t border-amber-500/20 mb-6">
                    <div className="text-xs uppercase tracking-wider text-[#caa468] font-semibold mb-2">
                      Staging & Equipment in this Setup
                    </div>
                    {activeItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                        <div className="w-4 h-4 rounded-full bg-[#caa468]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#caa468]/40">
                          <Check className="w-2.5 h-2.5 text-[#caa468]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Equipment Highlights */}
                {activeItem.equipment && (
                  <div className="pt-4 border-t border-white/10 mb-6">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2.5">
                      Included Gear & Props
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.equipment.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-stone-900 text-[11px] text-stone-300 rounded-full border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Booking CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-amber-500/20">
                <button
                  onClick={() => onOpenBooking(activeItem.title)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 text-xs uppercase tracking-widest font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer hover:scale-[1.02]"
                >
                  <span>Reserve This Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-[#caa468] underline underline-offset-4"
                >
                  Call {BUSINESS_INFO.formattedPhone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 
          3 Authentic Stage Selector Cards:
          All 3 setups displayed with their thumbnail on top and their description written down below.
        */}
        <div>
          <div className="text-xs uppercase tracking-widest text-[#caa468] font-semibold mb-4 px-1">
            Select a Studio Stage to View Details
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STUDIO_SHOWCASE.map((item, index) => {
              const isSelected = activeItem.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`text-left p-4 rounded-3xl transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1a1a24] border-[#caa468] shadow-2xl ring-2 ring-[#caa468]/50 scale-[1.015]'
                      : 'bg-[#141419] border-white/10 hover:border-amber-500/40 hover:bg-[#181822]'
                  }`}
                >
                  {/* Thumbnail Image - 100% Full Uncropped View (never half cut) */}
                  <div className="h-44 sm:h-52 w-full overflow-hidden rounded-2xl bg-black/95 mb-3 border border-white/10 flex items-center justify-center p-2 group-hover:border-amber-500/40">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Description written down below the image */}
                  <div className="px-1 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#caa468] bg-stone-900 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                          Setup 0{index + 1} · {item.tag}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] text-emerald-400 font-medium">
                            Viewing Active ✓
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-base font-normal text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-400 font-light line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#caa468]">
                      <span>Click to inspect setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
