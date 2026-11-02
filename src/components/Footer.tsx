import React from 'react';
import { Phone, MessageSquare, ArrowUp, Instagram, MapPin } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Studio', href: '#studio' },
    { label: 'Poster', href: '#official-poster' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Gathering Space', href: '#gathering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08080b] border-t border-amber-500/20 pt-16 pb-12 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#caa468] to-[#e0c793] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0c0c0f] rounded-full flex items-center justify-center">
                  <span className="font-serif text-xs font-bold text-[#caa468]">PH</span>
                </div>
              </div>
              <div>
                <div className="font-display tracking-[0.22em] text-2xl font-bold text-white leading-none">
                  {BUSINESS_INFO.name}
                </div>
                <div className="text-[10px] tracking-[0.28em] font-semibold text-[#caa468] uppercase mt-1">
                  {BUSINESS_INFO.subtitle} · {BUSINESS_INFO.locality}
                </div>
              </div>
            </div>

            <p className="text-xs uppercase tracking-wider font-semibold text-[#caa468] mb-2">
              "{BUSINESS_INFO.catchphrase}"
            </p>

            <p className="font-script text-2xl text-white mb-4">
              Create. Capture. Cherish.
            </p>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm mb-6">
              {BUSINESS_INFO.fullAddress}
            </p>

            {/* Direct Contact & Social Rounded Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-rose-600 hover:opacity-90 text-white text-xs px-3.5 py-2 rounded-full transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-1.5 bg-stone-900 border border-white/10 hover:border-[#caa468] text-white text-xs px-3.5 py-2 rounded-full transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#caa468]" />
                <span>{BUSINESS_INFO.formattedPhone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs px-3.5 py-2 rounded-full transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#caa468] font-semibold mb-4">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#caa468] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Services Summary Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#caa468] font-semibold mb-4">
              Creative Specialties
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {BUSINESS_INFO.bioServices.map((service, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-stone-900 text-[11px] text-stone-300 rounded-full border border-white/10"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="p-4 bg-stone-900/90 rounded-2xl border border-amber-500/20 text-xs">
              <span className="font-semibold text-white block mb-0.5">
                Working Hours
              </span>
              <span className="text-stone-400 font-light block">
                {BUSINESS_INFO.workingHours}
              </span>
              <span className="text-stone-400 font-light block mt-1">
                {BUSINESS_INFO.landmark}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} PHOTO.HOUZ Creators Studio. All rights reserved. Pumpwell, Mangalore.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-[#caa468] cursor-pointer transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
