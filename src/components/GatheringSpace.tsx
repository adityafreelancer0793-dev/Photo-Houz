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
      icon: <Projector className="w-5 h-5 text-gold-600" />,
    },
    {
      title: 'Surround Sound & Wireless Mic',
      desc: 'Tuned acoustics with lapel and handheld wireless microphones for clear audio.',
      icon: <Volume2 className="w-5 h-5 text-gold-600" />,
    },
    {
      title: 'High-Speed Creator Wi-Fi',
      desc: 'Dedicated enterprise broadband for live streaming, team collaboration, and downloads.',
      icon: <Wifi className="w-5 h-5 text-gold-600" />,
    },
    {
      title: 'Comfort Lounge & Breakout Nook',
      desc: 'Mid-century armchairs, catering prep space, and sanitized washrooms.',
      icon: <Coffee className="w-5 h-5 text-gold-600" />,
    },
  ];

  return (
    <section id="gathering" className="py-20 lg:py-28 bg-white border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-50/70 border border-sand-200/90 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sand-200/80 mb-4 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
                    Community & Event Hall
                  </span>
                </div>

                {/* Big Visual Emphasis on 35 TO 40 Capacity */}
                <div className="mb-4">
                  <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal-900 tracking-tight">
                    35 <span className="text-gold-500 text-3xl sm:text-4xl">TO</span> 40
                  </div>
                  <div className="text-sm uppercase tracking-[0.3em] font-bold text-charcoal-900 mt-1">
                    Gathering Space
                  </div>
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-charcoal-800 mb-6 font-light">
                  "{BUSINESS_INFO.gatheringDescription}"
                </p>

                <p className="text-sm text-charcoal-700 font-light leading-relaxed mb-8">
                  Designed specifically to balance comfortable intimate social gatherings with high-tech production capabilities. Whether you are hosting an exclusive photography masterclass, client pitch, brand launch, team offsite, or private family celebration.
                </p>

                {/* 4 Key Amenities Grid with Rounded-2XL Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {perks.map((perk, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-sand-200/80 shadow-2xs">
                      <div className="w-10 h-10 rounded-xl bg-warm-beige flex items-center justify-center mb-3">
                        {perk.icon}
                      </div>
                      <div className="text-xs font-semibold text-charcoal-900 mb-1">
                        {perk.title}
                      </div>
                      <div className="text-[11px] text-charcoal-700 leading-normal font-light">
                        {perk.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip with Rounded-Full Buttons */}
              <div className="pt-6 border-t border-sand-200 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenBooking('Gathering Space (35-40 Capacity)')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4 text-gold-300" />
                  <span>Reserve Gathering Space</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/919606960990?text=Hello%20PHOTO.HOUZ%2C%20I%20am%20enquiring%20about%20booking%20the%2035-40%20gathering%20space%20for%20an%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center border border-sand-200 hover:border-gold-400 bg-white px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-charcoal-800 transition-colors shadow-2xs"
                >
                  WhatsApp Event Enquiry
                </a>
              </div>
            </div>

            {/* Right Visual Column with the Real Uploaded Gathering Space Photo */}
            <div className="lg:col-span-5 relative bg-sand-200 min-h-[400px] lg:min-h-full">
              <img
                src={STUDIO_IMAGES.gatheringWorkshop}
                alt="PHOTO.HOUZ 35 to 40 Gathering & Workshop Space Interior with Projector and Seating"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 bg-charcoal-900/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-gold-300 px-3.5 py-1.5 rounded-full mb-2.5 border border-gold-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Configured for 35 to 40 Guests</span>
                </div>
                <div className="font-serif text-xl sm:text-2xl font-normal leading-snug">
                  Auditorium, Workshop, or Creator Setup
                </div>
                <p className="text-xs text-white/85 font-light mt-1.5 leading-relaxed">
                  High-lumen motorized projector screen, ambient string illumination, wood slatted acoustics, and presentation audio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
