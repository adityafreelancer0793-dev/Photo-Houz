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
        return <Maximize2 className="w-5 h-5 text-gold-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-gold-600" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-gold-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-gold-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-gold-600" />;
      case 'Projector':
        return <Projector className="w-5 h-5 text-gold-600" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5 text-gold-600" />;
      default:
        return <Camera className="w-5 h-5 text-gold-600" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-ivory/60 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sand-200/80 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-gold-500" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
              Studio Infrastructure
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight mb-4">
            7 Premium Facilities Built for Creators
          </h2>
          <p className="text-sm text-charcoal-700 font-light leading-relaxed">
            Every feature at PHOTO.HOUZ is calibrated for seamless execution—giving photographers, videographers, corporate hosts, and families a comfortable production experience.
          </p>
        </div>

        {/* Feature Cards Grid (Smooth Rounded-3XL Cards with PhotoFocuz Soft Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className={`bg-white border border-sand-200/80 rounded-3xl p-7 hover:border-gold-400/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-white to-gold-50/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-ivory rounded-2xl border border-sand-200 flex items-center justify-center shadow-2xs">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-[11px] font-mono tabular-nums text-charcoal-700 px-3 py-1 rounded-full bg-sand-50 border border-sand-200/60">
                    FACILITY 0{idx + 1}
                  </span>
                </div>

                <div className="text-[10px] uppercase tracking-wider font-semibold text-gold-600 mb-1">
                  {feature.highlight}
                </div>

                <h3 className="font-serif text-xl font-normal text-charcoal-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-xs text-charcoal-700 font-light leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sand-100 flex items-center justify-between text-xs text-charcoal-700">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-gold-600" />
                  <span>Production Ready</span>
                </span>
                <span className="text-gold-600 font-medium text-[11px] tracking-wider uppercase">
                  PHOTO.HOUZ
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact / Visit Strip with Rounded-3XL */}
        <div className="mt-14 bg-white border border-sand-200/90 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-serif text-xl text-charcoal-900 font-normal">
              Schedule an In-Person Studio Walkthrough
            </h4>
            <p className="text-xs text-charcoal-700 font-light mt-1">
              Visit us to inspect our backgrounds, lighting modifiers, and meeting facilities before locking in your dates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto text-center border border-sand-200 hover:border-gold-400 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-charcoal-900 bg-sand-50 transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-gold-600 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02]"
            >
              <span>Book Studio Time</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
