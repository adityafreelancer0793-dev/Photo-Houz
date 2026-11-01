import React from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Gathering Space', href: '#gathering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About Us', href: '#about' },
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
    <footer className="bg-white border-t border-sand-200/80 pt-16 pb-12 text-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-sand-200/80">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="font-display tracking-[0.22em] text-2xl font-bold text-charcoal-900 mb-1">
              {BUSINESS_INFO.name}
            </div>
            <div className="text-[10px] tracking-[0.28em] font-semibold text-gold-600 uppercase mb-4">
              {BUSINESS_INFO.subtitle}
            </div>

            <p className="font-serif italic text-lg text-charcoal-800 mb-4 max-w-sm">
              "{BUSINESS_INFO.closingLine}"
            </p>

            <p className="text-xs text-charcoal-700 font-light leading-relaxed max-w-sm mb-6">
              {BUSINESS_INFO.description} Offering calibrated lighting, multi-format shooting bays, and a dedicated 35 to 40 gathering space.
            </p>

            {/* Direct Contact Rounded Pills */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-warm-beige border border-sand-200/90 hover:border-gold-400 text-charcoal-900 text-xs px-4 py-2.5 rounded-full transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span className="font-medium">{BUSINESS_INFO.formattedPhone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-emerald-900 text-xs px-4 py-2.5 rounded-full transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal-900 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-charcoal-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-gold-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal-900 mb-4">
              Shoot Specialties
            </h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-charcoal-700">
              <span>Model Shoots</span>
              <span>Baby Shoots</span>
              <span>Maternity Shoots</span>
              <span>Bride-to-Be</span>
              <span>Groom-to-Be</span>
              <span>Pre-Wedding</span>
              <span>Podcast & Audio</span>
              <span>Fashion & Brands</span>
              <span className="col-span-2 text-gold-700 font-medium pt-1">
                35 to 40 Gathering Space
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-700">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name} – {BUSINESS_INFO.subtitle}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-serif italic text-gold-700 text-xs">
              {BUSINESS_INFO.tagline}
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-charcoal-700 hover:text-gold-600 bg-sand-50 hover:bg-sand-100 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer border border-sand-200/60"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
