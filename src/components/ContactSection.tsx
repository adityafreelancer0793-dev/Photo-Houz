import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Users, CheckCircle2, ArrowRight, Copy, Check, MapPin, ExternalLink, Instagram } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/studioData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'Model Shoots',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    estimatedGuests: '1-3 People',
    notes: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [enquiryRef, setEnquiryRef] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `PH-${Math.floor(100000 + Math.random() * 900000)}`;
      setEnquiryRef(generatedRef);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello PHOTO.HOUZ! I would like to enquire about a studio shoot:
- Ref: ${enquiryRef || 'New Enquiry'}
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Service: ${formData.service}
- Preferred Date: ${formData.preferredDate}
- Time Slot: ${formData.preferredTime}
- Message: ${formData.notes || 'Looking forward to details'}`;
    return `https://wa.me/919606960990?text=${encodeURIComponent(text)}`;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0c0c0f] border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Phone, WhatsApp & Studio Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#caa468]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#caa468]">
                  Connect & Reserve
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
                Let's Frame Your Next Project.
              </h2>

              <p className="text-sm text-stone-300 font-light leading-relaxed mb-8">
                Ready to book your session or schedule a walkthrough? Call our studio team directly or submit your preferred dates below for quick reservation assistance.
              </p>

              {/* Call Us Today Highlight Card matching the poster */}
              <div className="bg-[#14141a] border border-amber-500/30 rounded-3xl p-6 sm:p-8 mb-6 shadow-xl">
                <div className="text-[11px] uppercase tracking-widest text-[#caa468] font-semibold mb-1">
                  Immediate Assistance
                </div>
                <div className="text-sm font-medium text-stone-400 mb-2">
                  Call Us Today
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-serif text-3xl sm:text-4xl font-light text-white hover:text-[#caa468] transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.phone}
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="bg-gradient-to-r from-[#caa468] to-[#e0c793] text-stone-950 p-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-105"
                      title="Direct Call"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="border border-white/10 hover:border-[#caa468] bg-stone-900 p-3.5 rounded-full text-stone-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy Phone Number"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-[#0f241a] hover:bg-[#133023] border border-emerald-500/30 rounded-2xl text-emerald-200 transition-all duration-200 mb-8 shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-emerald-500 text-stone-950 rounded-xl flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
                      WhatsApp Quick Enquiry
                    </div>
                    <div className="text-xs text-emerald-200/80 font-light">
                      Chat directly with our studio coordinator
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Coordinates & Location info */}
              <div className="space-y-3.5 text-xs text-stone-300 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] shrink-0 border border-amber-500/20">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-white block">Studio Address</span>
                    <span className="text-stone-300">{BUSINESS_INFO.fullAddress}</span>
                    <a
                      href={BUSINESS_INFO.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#caa468] hover:text-[#e0c793] mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] shrink-0 border border-amber-500/20">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-white block">Official Instagram</span>
                    <a
                      href={BUSINESS_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#caa468] hover:text-[#e0c793] font-medium"
                    >
                      {BUSINESS_INFO.instagramHandle} (59 posts · 750+ followers)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] shrink-0 border border-amber-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-white block">Studio Hours</span>
                    <span className="text-stone-300">{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center text-[#caa468] shrink-0 border border-amber-500/20">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-white block">Capacity</span>
                    <span className="text-stone-300">{BUSINESS_INFO.gatheringCapacity} (Bride to be dining, events, shoots)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <span className="font-script text-2xl text-[#caa468]">
                Create. Capture. Cherish.
              </span>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form with Dark Obsidian Styling */}
          <div className="lg:col-span-7 bg-[#14141a] p-8 sm:p-10 border border-amber-500/30 rounded-3xl shadow-2xl">
            {submissionSuccess ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs uppercase tracking-widest text-[#caa468] font-semibold mb-1">
                  Enquiry Received · Reference: {enquiryRef}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-3">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed mb-6">
                  Your shoot enquiry for <span className="font-medium text-white">{formData.service}</span> on <span className="font-medium text-white">{formData.preferredDate}</span> has been logged. Our studio manager will call you at <span className="font-medium text-white">{formData.phone}</span> to confirm slot availability.
                </p>

                <div className="p-4 bg-stone-900 rounded-2xl border border-white/10 text-left max-w-md mx-auto text-xs space-y-1 mb-8">
                  <div className="text-stone-300">
                    <strong className="text-white">Requested Service:</strong> {formData.service}
                  </div>
                  <div className="text-stone-300">
                    <strong className="text-white">Preferred Slot:</strong> {formData.preferredTime}
                  </div>
                  {formData.notes && (
                    <div className="text-stone-300">
                      <strong className="text-white">Notes:</strong> {formData.notes}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-stone-950 text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp to 9606960990</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        service: 'Model Shoots',
                        preferredDate: '',
                        preferredTime: 'Morning (9:00 AM - 1:00 PM)',
                        estimatedGuests: '1-3 People',
                        notes: '',
                      });
                    }}
                    className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold text-stone-300 hover:text-[#caa468] py-3.5 px-5 rounded-full cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-1">
                    Book a Shoot or Studio Hire
                  </h3>
                  <p className="text-xs text-stone-400 font-light">
                    Fill in your details below and our team will contact you to confirm session availability.
                  </p>
                </div>

                {/* Form Fields with Rounded-xl styling */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                      Your Full Name <span className="text-[#caa468]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full bg-stone-900 border ${
                        errors.fullName ? 'border-red-500' : 'border-white/10'
                      } px-4 py-3 rounded-2xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#caa468] transition-colors`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                      Phone Number <span className="text-[#caa468]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9606960990"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full bg-stone-900 border ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      } px-4 py-3 rounded-2xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#caa468] transition-colors`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                      Service Required <span className="text-[#caa468]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-stone-900 border border-white/10 px-4 py-3 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-stone-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="35 to 40 Gathering Space" className="bg-stone-900 text-white">35 to 40 Gathering Space</option>
                      <option value="Studio Floor Only Hire" className="bg-stone-900 text-white">Studio Floor Only Hire</option>
                      <option value="Custom Production / Multi-Day" className="bg-stone-900 text-white">Custom Production / Multi-Day</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                      Preferred Date <span className="text-[#caa468]">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full bg-stone-900 border ${
                        errors.preferredDate ? 'border-red-500' : 'border-white/10'
                      } px-4 py-3 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {errors.preferredDate}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Time slot */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-stone-900 border border-white/10 px-4 py-3 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors"
                    >
                      <option value="Morning (9:00 AM - 1:00 PM)" className="bg-stone-900 text-white">Morning (9:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)" className="bg-stone-900 text-white">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 9:00 PM)" className="bg-stone-900 text-white">Evening (5:00 PM - 9:00 PM)</option>
                      <option value="Full Day (9:00 AM - 9:00 PM)" className="bg-stone-900 text-white">Full Day (9:00 AM - 9:00 PM)</option>
                    </select>
                  </div>

                  {/* Number of People */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                      Estimated Attendees
                    </label>
                    <select
                      value={formData.estimatedGuests}
                      onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                      className="w-full bg-stone-900 border border-white/10 px-4 py-3 rounded-2xl text-xs text-white focus:outline-hidden focus:border-[#caa468] transition-colors"
                    >
                      <option value="1-3 People (Solo / Couple / Baby)" className="bg-stone-900 text-white">1-3 People (Solo / Couple / Baby)</option>
                      <option value="4-8 People (Small Team / Family)" className="bg-stone-900 text-white">4-8 People (Small Team / Family)</option>
                      <option value="10-25 People (Production / Workshop)" className="bg-stone-900 text-white">10-25 People (Production / Workshop)</option>
                      <option value="35-40 People (Full Gathering Space)" className="bg-stone-900 text-white">35-40 People (Full Gathering Space)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-200 mb-1.5">
                    Creative Brief or Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your shoot concept, props needed, makeup artist requirements, or any questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-stone-900 border border-white/10 px-4 py-3 rounded-2xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#caa468] transition-colors"
                  />
                </div>

                {/* Submit button with Rounded-Full */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#caa468] to-[#e0c793] hover:from-[#d8ad5e] hover:to-[#ebd08d] disabled:opacity-50 text-stone-950 text-xs uppercase tracking-widest font-semibold py-4 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span>Logging Your Request...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-stone-950" />
                        <span>Submit Shoot Booking Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-400 text-center mt-3 font-light">
                    No upfront payment charged online. Our studio manager verifies calendar availability and connects with you.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
