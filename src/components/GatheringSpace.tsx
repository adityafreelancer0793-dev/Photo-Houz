import React from 'react';
import { Projector, Volume2, Wifi, Coffee, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

interface GatheringSpaceProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GatheringSpace: React.FC<GatheringSpaceProps> = ({ onOpenBooking }) => {
  const perks = [
    {
      title: 'Ultra-HD Conference Projector',
      desc: 'Motorized high-lumen projection screen with direct HDMI & wireless screen cast.',
      icon: <Projector className="w-5 h-5 text-[#caa468]" />,
    },
    {
      title: 'Surround Sound & Wireless Mic',
      desc: 'Tuned acoustics with lapel and handheld wireless microphones for clear audio.',
      icon: <Volume2 className="w-5 h-5 text-[#caa468]" />,
    },
    {
      title: 'High-Speed Creator Wi-Fi',
      desc: 'Dedicated enterprise broadband for live streaming, team collaboration, and downloads.',
      icon: <Wifi className="w-5 h-5 text-[#caa468]" />,
    },
    {
      title: 'Comfort Lounge & Breakout Nook',
      desc: 'Mid-century armchairs, catering prep space, and sanitized washrooms.',
      icon: <Coffee className="w-5 h-5 text-[#caa468]" />,
    },
  ];

  return (
    <section id="gathering" className="py-20 lg:py-28 bg-[#0c0c0f] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#181822] via-[#131319] to-[#0e0e13] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#caa468]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                    Community & Event Hall
                  </span>
                </div>

                {/* Big Visual Emphasis on 35 TO 40 Capacity matching the poster */}
                <div className="mb-4">
                  <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight">
                    35 <span className="text-[#caa468] text-3xl sm:text-4xl">TO</span> 40
                  </div>
                  <div className="text-sm uppercase tracking-[0.3em] font-bold text-[#caa468] mt-1">
                    GATHERING SPACE
                  </div>
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-stone-200 mb-6 font-light">
                  "{BUSINESS_INFO.gatheringDescription}"
                </p>

                <p className="text-sm text-stone-300 font-light leading-relaxed mb-8">
                  Host creative masterclasses, photography workshops, corporate strategy offsites, screenings, and private Bride-to-Be celebrations in a modern space at Pumpwell, Mangalore.
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {perks.map((perk, i) => (
                    <div
                      key={i}
                      className="p-4 bg-stone-900/80 rounded-2xl border border-amber-500/20"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        {perk.icon}
                        <h4 className="text-xs font-semibold text-white tracking-wide">
                          {perk.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-stone-400 font-light leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenBooking('35 to 40 Gathering Space Hire')}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#caa468] to-[#e0c793] text-stone-950 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire for Space Hire</span>
                </button>

                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#caa468]" />
                  <span>Catering & tea breaks permitted</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full p-4 lg:p-6 flex items-center justify-center">
              <div className="w-full h-full relative rounded-2xl overflow-hidden border border-amber-500/25 bg-black">
                <img
                  src={STUDIO_IMAGES.gatheringWorkshop}
                  alt="PHOTO.HOUZ 35 to 40 Gathering Space Hall with Projector Screen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[10px] uppercase tracking-widest text-[#caa468] font-semibold mb-1">
                    Pumpwell · Mangalore
                  </div>
                  <div className="font-serif text-lg font-light">
                    The Gathering & Projection Hall
                  </div>
                  <div className="text-xs text-stone-300 font-light mt-0.5">
                    Equipped with motorized screen & wireless mics
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
