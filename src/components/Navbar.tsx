import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/studioData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Gathering Space', href: '#gathering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/[0.04] border border-sand-200/90 py-2.5 px-6'
            : 'bg-white/90 backdrop-blur-sm shadow-xs border border-sand-200/60 py-3 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark with subtle rounded identity */}
          <a
            href="#home"
            className="group flex flex-col items-start leading-none shrink-0"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="font-display tracking-[0.22em] text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
              PHOTO.HOUZ
            </span>
            <span className="text-[9px] tracking-[0.28em] font-medium text-gold-600 mt-1 uppercase">
              Creators Studio
            </span>
          </a>

          {/* Zone 2: Navigation Links with PhotoFocuz pill styling */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs tracking-wider uppercase font-medium text-charcoal-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap px-3.5 py-1.5 rounded-full hover:bg-warm-beige hover:text-charcoal-900 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone & Primary CTA */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-warm-beige/80 hover:bg-gold-50 text-charcoal-800 hover:text-gold-600 border border-sand-200/70 transition-colors"
              title="Follow @photo.houz on Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-charcoal-800 hover:text-gold-600 px-4 py-2 rounded-full bg-warm-beige/80 hover:bg-gold-50 transition-colors whitespace-nowrap border border-sand-200/70"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-gold-600 text-white text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-300" />
              <span>Book a Shoot</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden text-xs font-semibold bg-charcoal-900 text-white px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal-800 hover:text-gold-600 rounded-full hover:bg-sand-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with smooth 24px rounded corners */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-white/98 backdrop-blur-md border border-sand-200 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-widest uppercase font-medium text-charcoal-800 hover:text-gold-600 px-4 py-2.5 rounded-xl hover:bg-sand-50 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-sand-100 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-charcoal-900 bg-sand-50 border border-sand-200 py-3 rounded-2xl"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-gold-600 text-white text-xs font-semibold tracking-widest uppercase py-3.5 rounded-2xl shadow-sm"
              >
                <Calendar className="w-4 h-4 text-gold-300" />
                <span>Book a Shoot Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
