import React from 'react';
import {
  Maximize2,
  Layers,
  Camera,
  Sparkles,
  Video,
  Projector,
  Volume2,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { STUDIO_FEATURES, BUSINESS_INFO } from '../data/studioData';

interface StudioFeaturesProps {
  onOpenBooking: () => void;
}

export const StudioFeatures: React.FC<StudioFeaturesProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-[#caa468]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#caa468]" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-[#caa468]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#caa468]" />;
      case 'Video':
        return <Video className="w-5 h-5 text-[#caa468]" />;
      case 'Projector':
        return <Projector className="w-5 h-5 text-[#caa468]" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5 text-[#caa468]" />;
      default:
        return <Camera className="w-5 h-5 text-[#caa468]" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#0e0e13] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching the poster "STUDIO FEATURES" */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#caa468]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
              Studio Features · Built for Excellence
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
            7 Premium Facilities Built for Creators
          </h2>
          <p className="text-sm text-stone-300 font-light leading-relaxed">
            Every feature at PHOTO.HOUZ is calibrated for seamless execution—giving photographers, videographers, corporate hosts, and families a comfortable production experience.
          </p>
        </div>

        {/* Feature Cards Grid (Smooth Rounded-3XL Cards with Gold Border Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {STUDIO_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#14141a] border border-amber-500/20 rounded-3xl p-6 sm:p-7 hover:border-[#caa468] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-stone-900/90 flex items-center justify-center border border-amber-500/30 shadow-sm group-hover:scale-105 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#caa468] bg-stone-900 px-3 py-1 rounded-full border border-amber-500/20">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-white mb-2.5 group-hover:text-[#caa468] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
                <span>Facility ready on hire</span>
                <span className="text-[#caa468] font-medium">Included ✓</span>
              </div>
            </div>
          ))}

          {/* Special 8th Card: Safety & Hospitality */}
          <div className="bg-gradient-to-br from-[#1c1813] via-[#15151c] to-[#121217] border border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-900/90 flex items-center justify-center border border-amber-500/40 text-[#caa468] mb-5">
                <Shield className="w-5 h-5 text-[#caa468]" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#caa468] block mb-2">
                Hospitality & Hygiene
              </span>
              <h3 className="font-serif text-xl font-normal text-white mb-2.5">
                Private & Sanitized Comfort
              </h3>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Dedicated client changing area, full-length vanity mirrors, private restroom access, and climate-controlled environment at Pumpwell, Mangalore.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#caa468] hover:text-white transition-colors cursor-pointer"
            >
              <span>Schedule Studio Tour</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
