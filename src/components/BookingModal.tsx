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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#14141c] max-w-lg w-full border border-amber-500/30 rounded-3xl shadow-2xl relative overflow-hidden text-white">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-stone-900/60">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#caa468] font-semibold">
              PHOTO.HOUZ · Creators Studio
            </span>
            <h3 className="font-serif text-2xl font-normal text-white">
              Book a Studio Shoot
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="text-[11px] uppercase tracking-wider text-[#caa468] font-semibold mb-1">
              Enquiry Logged · Ref #{bookingRef}
            </div>
            <h4 className="font-serif text-2xl text-white mb-2">
              We'll Be In Touch Soon!
            </h4>
            <p className="text-xs text-stone-300 font-light leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, {fullName}. Our studio coordinator will review availability for {service} on {date} and contact you at {phone}.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-stone-950 text-xs uppercase tracking-widest font-semibold py-3.5 rounded-full transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-stone-400 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {error && (
              <div className="p-3 bg-red-950/50 border border-red-500/30 rounded-xl text-red-300 text-xs">
                {error}
              </div>
            )}

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-stone-900 border border-white/10 px-4 py-2.5 rounded-2xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#caa468] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. 9606960990"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-stone-900 border border-white/10 px-4 py-2.5 rounded-2xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#caa468] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                  Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-stone-900 border border-white/10 px-3 py-2.5 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-stone-900 text-white">
                      {s.title}
                    </option>
                  ))}
                  <option value="35 to 40 Gathering Space" className="bg-stone-900 text-white">35 to 40 Gathering Space</option>
                  <option value="Studio Floor Only Hire" className="bg-stone-900 text-white">Studio Floor Only Hire</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-900 border border-white/10 px-3 py-2 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-300 mb-1">
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-stone-900 border border-white/10 px-4 py-2.5 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors"
              >
                <option value="Morning (9:00 AM - 1:00 PM)" className="bg-stone-900 text-white">Morning (9:00 AM - 1:00 PM)</option>
                <option value="Afternoon (1:00 PM - 5:00 PM)" className="bg-stone-900 text-white">Afternoon (1:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 9:00 PM)" className="bg-stone-900 text-white">Evening (5:00 PM - 9:00 PM)</option>
                <option value="Full Day (9:00 AM - 9:00 PM)" className="bg-stone-900 text-white">Full Day (9:00 AM - 9:00 PM)</option>
              </select>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] text-stone-950 text-xs uppercase tracking-widest font-semibold py-3.5 rounded-full transition-all shadow-md cursor-pointer hover:scale-[1.01]"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
