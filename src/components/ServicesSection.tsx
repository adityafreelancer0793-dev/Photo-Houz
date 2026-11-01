import React, { useState } from 'react';
import { ArrowUpRight, Clock, X, MessageSquare, Check, Sparkles, Calendar } from 'lucide-react';
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
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-warm-beige border border-sand-200/80 mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
                Studio Specialties
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight">
              Our Signature Services
            </h2>
          </div>
          <p className="text-sm text-charcoal-700 font-light max-w-md leading-relaxed">
            From milestones to commercial productions, each service is hosted in our purpose-built studio with curated lighting setups, private makeover rooms, and in-house technical support.
          </p>
        </div>

        {/* 8-Card Editorial Grid with Smooth Rounded-3XL Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white border border-sand-200/90 rounded-3xl hover:border-gold-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 p-3"
            >
              <div>
                {/* Image Container with Rounded 2XL Corner */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Clean Rounded-Full Editorial Numbering */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-charcoal-900 text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full border border-sand-200/80 shadow-2xs">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-xl font-normal text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-charcoal-700 font-light leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-charcoal-700 pb-3 border-b border-sand-100">
                    <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with PhotoFocuz Rounded-Full Style */}
              <div className="p-4 sm:p-5 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold tracking-wider text-charcoal-800 hover:text-gold-600 inline-flex items-center gap-1 transition-colors cursor-pointer py-1.5"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="bg-sand-100 hover:bg-charcoal-900 hover:text-white text-charcoal-900 text-[11px] uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
                >
                  Book Shoot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Guarantee Strip with Rounded-3XL */}
        <div className="mt-14 p-6 sm:p-8 bg-warm-beige/70 border border-sand-200 rounded-3xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gold-600 border border-gold-200/80 shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg text-charcoal-900 font-medium">
                Custom Productions & Multi-Day Hire Available
              </h4>
              <p className="text-xs text-charcoal-700 font-light mt-0.5">
                Special arrangements for brand commercials, lookbooks, creator workshops, and photography masterclasses.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-800 hover:text-white hover:bg-emerald-600 bg-white px-5 py-2.5 rounded-full border border-emerald-200 transition-all shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-xs font-semibold tracking-wider uppercase text-charcoal-900 hover:text-gold-600 px-4 py-2 rounded-full border border-sand-200/80 bg-white transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal with Rounded 3XL Container */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sand-200 rounded-3xl shadow-2xl relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-sand-100 p-6 flex items-center justify-between z-10 rounded-t-3xl">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
                  PHOTO.HOUZ Service
                </span>
                <h3 className="font-serif text-2xl font-normal text-charcoal-900">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-charcoal-700 hover:text-charcoal-900 rounded-full hover:bg-sand-100 cursor-pointer"
                aria-label="Close service modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="aspect-16/9 overflow-hidden rounded-2xl bg-sand-100 mb-6 shadow-sm">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-charcoal-700 leading-relaxed mb-6 font-light">
                {selectedService.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200/80">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Standard Duration
                  </div>
                  <div className="font-serif text-base text-charcoal-900">
                    {selectedService.duration}
                  </div>
                </div>

                <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200/80">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-700 mb-1">
                    Deliverables
                  </div>
                  <div className="text-xs text-charcoal-900 font-medium">
                    {selectedService.deliverables}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-3">
                  Included In This Session:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-charcoal-800">
                      <div className="w-4 h-4 rounded-full bg-gold-50 flex items-center justify-center shrink-0 border border-gold-200">
                        <Check className="w-2.5 h-2.5 text-gold-700" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-sand-200">
                <button
                  onClick={() => handleEnquireService(selectedService)}
                  className="w-full sm:w-auto flex-1 bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-full transition-all duration-200 cursor-pointer text-center shadow-xs hover:shadow-md"
                >
                  Book This Shoot Now
                </button>
                <a
                  href={`https://wa.me/919606960990?text=Hello%20PHOTO.HOUZ%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(selectedService.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-emerald-600 text-emerald-800 hover:bg-emerald-50 text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-full transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
