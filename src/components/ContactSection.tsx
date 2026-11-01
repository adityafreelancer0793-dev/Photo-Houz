import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, Users, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';
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
    <section id="contact" className="py-20 lg:py-28 bg-ivory/60 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Phone, WhatsApp & Studio Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sand-200/80 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-gold-700">
                  Connect & Reserve
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-normal tracking-tight mb-4">
                Let's Frame Your Next Project.
              </h2>

              <p className="text-sm text-charcoal-700 font-light leading-relaxed mb-8">
                Ready to book your session or schedule a walkthrough? Call our studio team directly or submit your preferred dates below for quick reservation assistance.
              </p>

              {/* Call Us Today Highlight Card with Rounded-3XL */}
              <div className="bg-white border border-sand-200/90 rounded-3xl p-6 sm:p-8 mb-6 shadow-sm">
                <div className="text-[11px] uppercase tracking-widest text-gold-600 font-semibold mb-1">
                  Immediate Assistance
                </div>
                <div className="text-sm font-medium text-charcoal-700 mb-2">
                  Call Us Today
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900 hover:text-gold-600 transition-colors tabular-nums"
                  >
                    {BUSINESS_INFO.phone}
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="bg-charcoal-900 hover:bg-gold-600 text-white p-3.5 rounded-full transition-all duration-200 shadow-xs hover:scale-105"
                      title="Direct Call"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="border border-sand-200 hover:border-gold-500 bg-sand-50 p-3.5 rounded-full text-charcoal-700 transition-colors cursor-pointer"
                      title="Copy Phone Number"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link with Rounded-2XL */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-emerald-50/80 hover:bg-emerald-50 border border-emerald-200/90 rounded-2xl text-emerald-900 transition-all duration-200 mb-8 shadow-2xs hover:shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
                      WhatsApp Quick Enquiry
                    </div>
                    <div className="text-xs text-emerald-700 font-light">
                      Chat directly with our studio coordinator
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Coordinates info */}
              <div className="space-y-3.5 text-xs text-charcoal-700 pt-6 border-t border-sand-200">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-sand-100 flex items-center justify-center text-gold-600 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-charcoal-900 block">Studio Hours</span>
                    <span>{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-sand-100 flex items-center justify-center text-gold-600 shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-charcoal-900 block">Capacity</span>
                    <span>{BUSINESS_INFO.gatheringCapacity} (Workshops, Meets, Shoots)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <span className="font-serif italic text-base text-gold-700">
                "{BUSINESS_INFO.closingLine}"
              </span>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form with Rounded-3XL Frame */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-sand-200/90 rounded-3xl shadow-lg">
            {submissionSuccess ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs uppercase tracking-widest text-gold-600 font-semibold mb-1">
                  Enquiry Received · Reference: {enquiryRef}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-3">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-charcoal-700 font-light max-w-md mx-auto leading-relaxed mb-6">
                  Your shoot enquiry for <span className="font-medium text-charcoal-900">{formData.service}</span> on <span className="font-medium text-charcoal-900">{formData.preferredDate}</span> has been logged. Our studio manager will call you at <span className="font-medium text-charcoal-900">{formData.phone}</span> to confirm slot availability.
                </p>

                <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200 text-left max-w-md mx-auto text-xs space-y-1 mb-8">
                  <div className="text-charcoal-700">
                    <strong className="text-charcoal-900">Requested Service:</strong> {formData.service}
                  </div>
                  <div className="text-charcoal-700">
                    <strong className="text-charcoal-900">Preferred Slot:</strong> {formData.preferredTime}
                  </div>
                  {formData.notes && (
                    <div className="text-charcoal-700">
                      <strong className="text-charcoal-900">Notes:</strong> {formData.notes}
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm"
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
                    className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold text-charcoal-800 hover:text-gold-600 py-3.5 px-5 rounded-full cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-charcoal-900 mb-1">
                    Book a Shoot or Studio Hire
                  </h3>
                  <p className="text-xs text-charcoal-700 font-light">
                    Fill in your details below and our team will contact you to confirm session availability.
                  </p>
                </div>

                {/* Form Fields with Rounded-xl styling */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                      Your Full Name <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full bg-sand-50/70 border ${
                        errors.fullName ? 'border-red-500' : 'border-sand-200/90'
                      } px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                      Phone Number <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9606960990"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full bg-sand-50/70 border ${
                        errors.phone ? 'border-red-500' : 'border-sand-200/90'
                      } px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                      Service Required <span className="text-gold-600">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-sand-50/70 border border-sand-200/90 px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="35 to 40 Gathering Space">35 to 40 Gathering Space</option>
                      <option value="Studio Floor Only Hire">Studio Floor Only Hire</option>
                      <option value="Custom Production / Multi-Day">Custom Production / Multi-Day</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                      Preferred Date <span className="text-gold-600">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full bg-sand-50/70 border ${
                        errors.preferredDate ? 'border-red-500' : 'border-sand-200/90'
                      } px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.preferredDate}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Time slot */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-sand-50/70 border border-sand-200/90 px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors"
                    >
                      <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                      <option value="Full Day (9:00 AM - 9:00 PM)">Full Day (9:00 AM - 9:00 PM)</option>
                    </select>
                  </div>

                  {/* Number of People */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                      Estimated Attendees
                    </label>
                    <select
                      value={formData.estimatedGuests}
                      onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                      className="w-full bg-sand-50/70 border border-sand-200/90 px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors"
                    >
                      <option value="1-3 People (Solo / Couple / Baby)">1-3 People (Solo / Couple / Baby)</option>
                      <option value="4-8 People (Small Team / Family)">4-8 People (Small Team / Family)</option>
                      <option value="10-25 People (Production / Workshop)">10-25 People (Production / Workshop)</option>
                      <option value="35-40 People (Full Gathering Space)">35-40 People (Full Gathering Space)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal-900 mb-1.5">
                    Creative Brief or Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your shoot concept, props needed, makeup artist requirements, or any questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-sand-50/70 border border-sand-200/90 px-4 py-3 rounded-2xl text-xs text-charcoal-900 focus:outline-hidden focus:border-gold-500 transition-colors"
                  />
                </div>

                {/* Submit button with Rounded-Full */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-charcoal-900 hover:bg-gold-600 disabled:bg-charcoal-700 text-white text-xs uppercase tracking-widest font-semibold py-4 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span>Logging Your Request...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-gold-300" />
                        <span>Submit Shoot Booking Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-charcoal-700 text-center mt-3 font-light">
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
