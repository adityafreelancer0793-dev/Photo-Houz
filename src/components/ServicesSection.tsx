import React, { useState } from 'react';
import { ArrowUpRight, Clock, X, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/studioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleEnquireService = (service: ServiceItem) => {
    setSelectedService(null);
    onOpenBooking(service.title);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0c0c0f] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching the poster "OUR SERVICES" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#caa468]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                Our Services · Studio Offerings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Curated Shoot Formats
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#caa468] mt-1 font-light">
              "Every session is staged with purpose, artistry, and passion."
            </p>
          </div>
          <p className="text-sm text-stone-300 font-light max-w-md leading-relaxed">
            From intimate bridal and newborn portraits to high-impact commercial campaigns and video podcast recordings.
          </p>
        </div>

        {/* 8-Card Editorial Grid with Smooth Rounded-3XL Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-[#14141a] border border-amber-500/20 rounded-3xl hover:border-[#caa468] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 p-3"
            >
              <div>
                {/* Image Container with Rounded 2XL Corner - Full Picture View */}
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-black border border-white/5">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />

                  {/* Clean Rounded-Full Editorial Numbering */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md text-[#caa468] text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full border border-amber-500/30 shadow-xs z-10">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-xl font-normal text-white mb-2 group-hover:text-[#caa468] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-stone-400 pb-3 border-b border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#caa468] shrink-0" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 sm:p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold tracking-wider text-stone-300 hover:text-[#caa468] inline-flex items-center gap-1 transition-colors cursor-pointer py-1.5"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#caa468]" />
                </button>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="bg-stone-900 hover:bg-[#caa468] text-[#caa468] hover:text-stone-950 border border-amber-500/30 hover:border-transparent text-[11px] uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-xs hover:scale-105"
                >
                  Book Shoot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Guarantee Strip with Rounded-3XL */}
        <div className="mt-14 p-6 sm:p-8 bg-[#15151d] border border-amber-500/30 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center text-[#caa468] border border-amber-500/30 shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                Custom Productions & Multi-Day Hire Available
              </h4>
              <p className="text-xs text-stone-300 font-light mt-0.5">
                Special arrangements for brand commercials, lookbooks, creator workshops, and photography masterclasses.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 hover:text-stone-950 hover:bg-emerald-400 bg-stone-900 px-5 py-2.5 rounded-full border border-emerald-500/40 transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-xs font-semibold tracking-wider uppercase text-white hover:text-[#caa468] px-4 py-2 rounded-full border border-white/10 bg-stone-900/90 transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal with Rounded 3XL Container */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#14141c] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-500/30 rounded-3xl shadow-2xl relative text-white">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#14141c]/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10 rounded-t-3xl">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#caa468] font-semibold">
                  PHOTO.HOUZ Service
                </span>
                <h3 className="font-serif text-2xl font-normal text-white">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 cursor-pointer"
                aria-label="Close service modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="overflow-hidden rounded-2xl bg-black mb-6 shadow-sm border border-white/10 p-2 sm:p-3 flex items-center justify-center">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="max-h-[50vh] w-auto max-w-full object-contain rounded-xl shadow-xs"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-stone-300 leading-relaxed mb-6 font-light">
                {selectedService.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-stone-900 rounded-2xl border border-white/10">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 mb-1">
                    Standard Duration
                  </div>
                  <div className="font-serif text-base text-white">
                    {selectedService.duration}
                  </div>
                </div>

                <div className="p-4 bg-stone-900 rounded-2xl border border-white/10">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 mb-1">
                    Deliverables
                  </div>
                  <div className="font-serif text-base text-[#caa468]">
                    {selectedService.deliverables}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#caa468] mb-3">
                  Included Amenities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-stone-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#caa468]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action in Modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="text-xs text-stone-400">
                  Location: <span className="text-white font-medium">Pumpwell, Mangalore</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleEnquireService(selectedService)}
                    className="flex-1 sm:flex-initial bg-gradient-to-r from-[#caa468] to-[#e0c793] text-stone-950 text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer hover:scale-105"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
