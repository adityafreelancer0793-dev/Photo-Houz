import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Instagram } from 'lucide-react';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/studioData';

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
            ? 'bg-[#0f0f14]/95 backdrop-blur-md shadow-2xl shadow-black/80 border border-amber-500/25 py-2.5 px-6'
            : 'bg-[#121218]/85 backdrop-blur-sm shadow-xl border border-white/10 py-3 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Official Logo in Header */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 shrink-0"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="PHOTO.HOUZ Home"
          >
            <div className="bg-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl border border-amber-500/40 shadow-sm flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[#caa468]/20">
              <img
                src={STUDIO_IMAGES.studioLogo}
                alt="PHOTO.HOUZ Creators Studio"
                className="h-6 sm:h-7 w-auto object-contain block"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Zone 2: Navigation Links in Dark Luxury Typography */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs tracking-wider uppercase font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full hover:bg-stone-850 hover:text-[#caa468] transition-all duration-200"
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
              className="p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-[#caa468] border border-white/10 transition-colors"
              title="Follow @photo.houz on Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-stone-200 hover:text-[#caa468] px-3.5 py-2 rounded-full bg-stone-900/80 hover:bg-stone-800 transition-colors whitespace-nowrap border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#caa468]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#caa468] to-[#e2be78] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Shoot</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-stone-200 hover:text-[#caa468] hover:bg-stone-900 transition-colors cursor-pointer border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Obsidian Styling */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-[#101016]/95 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          {/* Logo badge in mobile menu */}
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-white/10">
            <div className="bg-white px-3 py-1.5 rounded-xl border border-amber-500/40 shadow-sm inline-flex items-center">
              <img
                src={STUDIO_IMAGES.studioLogo}
                alt="PHOTO.HOUZ Creators Studio"
                className="h-6 w-auto object-contain block"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#caa468] font-semibold">
              Pumpwell · Mangalore
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-widest uppercase font-medium text-stone-200 hover:text-[#caa468] py-2 px-3 rounded-xl hover:bg-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-200 py-3 rounded-full bg-stone-900 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#caa468]" />
                <span>Call {BUSINESS_INFO.formattedPhone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#caa468] to-[#e2be78] text-stone-950 text-xs uppercase tracking-widest font-semibold py-3.5 rounded-full shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Shoot</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
