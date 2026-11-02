import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Instagram, Check, Copy } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

export const StudioLocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#0c0c0f] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#caa468]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                Pumpwell · Mangalore
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Visit Our Creators Studio
            </h2>
          </div>
          <p className="text-sm text-stone-300 font-light max-w-md leading-relaxed">
            Conveniently situated at Pumpwell, Mangalore near Indiana Hospital. Easy highway access with dedicated parking and private client elevator access.
          </p>
        </div>

        {/* 2-Column Map & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Coordinates & Instagram Badge Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address & Details Box */}
            <div className="bg-[#14141a] border border-amber-500/25 rounded-3xl p-7 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center text-[#caa468] border border-amber-500/30 shadow-sm shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-[#caa468] bg-stone-900 px-3.5 py-1.5 rounded-full border border-amber-500/30 shadow-sm transition-colors cursor-pointer"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#caa468]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] uppercase tracking-widest text-[#caa468] font-semibold mb-1">
                Studio Address
              </div>
              <h3 className="font-serif text-2xl font-normal text-white mb-2">
                PHOTO.HOUZ – Creators Studio
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed font-light mb-6">
                {BUSINESS_INFO.fullAddress}
              </p>

              <div className="space-y-3.5 pt-5 border-t border-white/10 text-xs text-stone-300">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] border border-amber-500/30 shrink-0">
                    <Navigation className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-medium text-white">Landmark: </span>
                    <span className="text-stone-300">Near Indiana Hospital, 2nd Floor Onex Building</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] border border-amber-500/30 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-medium text-white">Timings: </span>
                    <span className="text-stone-300">{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] border border-amber-500/30 shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <span className="font-medium text-white">Direct Contact: </span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#caa468] transition-colors text-stone-300">
                      {BUSINESS_INFO.formattedPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Maps CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.01]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Instagram Live Community Card from @photo.houz */}
            <div className="bg-[#14141c] border border-amber-500/25 rounded-3xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
                    <div className="w-full h-full bg-[#0c0c0f] rounded-full flex items-center justify-center overflow-hidden">
                      <span className="font-display text-[9px] font-bold text-[#caa468] tracking-tighter">
                        PHOTO.HOUZ
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-sm text-white">
                        photo.houz
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa468]" />
                    </div>
                    <div className="text-[11px] text-stone-400">
                      PHOTO HOUZ · Creators Studio
                    </div>
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-rose-600 hover:opacity-95 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md hover:scale-105"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Follow</span>
                </a>
              </div>

              <div className="text-xs text-stone-300 font-light leading-relaxed mb-4 bg-stone-900/80 p-3.5 rounded-2xl border border-white/10">
                <strong className="font-semibold text-[#caa468] block mb-1">
                  Just Bring Yourself! We'll Handle The Rest.
                </strong>
                Pre - Post wedding · Podcast · Any Celebrations · Bride to be Dining · Model · Kids · Maternity · Commercial 📍 Pumpwell Mangalore
              </div>

              <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="font-semibold text-white tabular-nums">59</span> posts
                  </div>
                  <div>
                    <span className="font-semibold text-white tabular-nums">750+</span> followers
                  </div>
                </div>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#caa468] hover:text-[#e0c793] underline underline-offset-4"
                >
                  View Reels & BTS →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Frame */}
          <div className="lg:col-span-7 relative min-h-[460px] lg:min-h-full rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
            {/* Embedded Google Map */}
            <iframe
              title="PHOTO.HOUZ Creators Studio Location Pumpwell Mangalore"
              src="https://maps.google.com/maps?q=Pumpwell%2C%20Mangalore%2C%20Karnataka%20Near%20Indiana%20Hospital&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[460px] lg:min-h-full border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Map Info Capsule */}
            <div className="absolute top-5 left-5 right-5 sm:right-auto sm:max-w-md bg-[#101016]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-500/30 shadow-2xl pointer-events-auto">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-semibold text-[#caa468] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#caa468] animate-ping" />
                <span>Active Studio Studio Location</span>
              </div>
              <h4 className="font-serif text-base font-normal text-white mb-1">
                PHOTO.HOUZ · Pumpwell Mangalore
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-light mb-3">
                Onex Building, 2nd Floor, Near Indiana Hospital
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#caa468] hover:text-[#e0c793] underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
