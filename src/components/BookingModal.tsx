import React, { useState } from 'react';
import { X, Calendar, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Model Shoots');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (9:00 AM - 1:00 PM)');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !date) {
      setError('Please fill in your name, contact phone, and preferred date.');
      return;
    }
    setError('');
    const ref = `PH-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi PHOTO.HOUZ! I'm interested in booking a session:
- Name: ${fullName || 'Guest'}
- Phone: ${phone || 'Available on request'}
- Service: ${service}
- Preferred Date: ${date || 'Flexible'}
- Time Slot: ${timeSlot}`;
    window.open(`https://wa.me/919606960990?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-lg w-full border border-sand-200/90 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-sand-100 flex items-center justify-between bg-sand-50/50">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
              PHOTO.HOUZ · Creators Studio
            </span>
            <h3 className="font-serif text-2xl font-normal text-charcoal-900">
              Book a Studio Shoot
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-charcoal-700 hover:text-charcoal-900 rounded-full hover:bg-sand-100 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-1">
                Ref #{bookingRef}
              </div>
              <h4 className="font-serif text-2xl font-normal text-charcoal-900 mb-2">
                Enquiry Successfully Logged
              </h4>
              <p className="text-xs text-charcoal-700 font-light leading-relaxed mb-6">
                Thank you, <span className="font-medium text-charcoal-900">{fullName}</span>! Our studio manager will call <span className="font-medium text-charcoal-900">{phone}</span> to finalize your booking details.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp (+91 9606960990)</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full text-xs uppercase tracking-wider font-semibold text-charcoal-800 hover:text-gold-600 py-2.5 rounded-full cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-900 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-sand-50/70 border border-sand-200/90 px-3.5 py-2.5 rounded-xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-900 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9606960990"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-sand-50/70 border border-sand-200/90 px-3.5 py-2.5 rounded-xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-900 mb-1">
                    Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-sand-50/70 border border-sand-200/90 px-3 py-2.5 rounded-xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="35 to 40 Gathering Space">35-40 Gathering Space</option>
                    <option value="Studio Hire Only">Studio Hire Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-900 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-sand-50/70 border border-sand-200/90 px-3 py-2.5 rounded-xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-charcoal-900 mb-1">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-sand-50/70 border border-sand-200/90 px-3 py-2.5 rounded-xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500"
                >
                  <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                  <option value="Full Day (9:00 AM - 9:00 PM)">Full Day (9:00 AM - 9:00 PM)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-charcoal-900 hover:bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold py-3.5 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-xs hover:shadow-md"
                >
                  <Calendar className="w-4 h-4 text-gold-300" />
                  <span>Confirm Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-gold-600"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
                  <span>Or call directly: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
