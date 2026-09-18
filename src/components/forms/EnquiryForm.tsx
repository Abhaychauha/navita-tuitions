import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  MessageCircle, 
  Loader2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { leadService } from '../../services/leadService';
import { siteConfig } from '../../config/siteConfig';
import { LeadEnquiry } from '../../types';

interface EnquiryFormProps {
  defaultGrade?: string;
  defaultBoard?: string;
  defaultSubject?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultGrade = '',
  defaultBoard = '',
  defaultSubject = '',
  title = "Enquire for Admissions",
  subtitle = "Fill in the details below. We will get back to you promptly.",
  className = ''
}) => {
  const [formData, setFormData] = useState<LeadEnquiry>({
    name: '',
    studentGrade: defaultGrade || 'Grade 9–10',
    board: defaultBoard || 'ICSE',
    subjects: defaultSubject || 'Mathematics',
    mode: 'Offline Tuition',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionMsg, setSubmissionMsg] = useState('');

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter parent or student name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    } else if (!leadService.validatePhone(formData.phone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 9876543210).';
    }

    if (formData.email && !leadService.validateEmail(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.studentGrade) {
      errs.studentGrade = 'Please select student grade.';
    }

    if (!formData.board) {
      errs.board = 'Please select curriculum board.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const result = await leadService.submitEnquiry(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setSubmissionMsg(result.message);
    } else {
      setErrors({ form: result.message });
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      studentGrade: 'Grade 9–10',
      board: 'ICSE',
      subjects: 'Mathematics',
      mode: 'Offline Tuition',
      phone: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-blue-300 text-center animate-in fade-in zoom-in-95 duration-200 ${className}`}>
        <div className="w-16 h-16 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-glow-blue">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-brand-900 mb-2 font-display">
          Enquiry Received!
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
          {submissionMsg}
        </p>

        <div className="p-4 bg-blue-50 rounded-2xl mb-6 text-left text-xs sm:text-sm space-y-1.5 text-slate-700 border border-blue-200">
          <div className="font-bold text-brand-900 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Enquiry Summary:</span>
          </div>
          <div><span className="font-bold">Student/Parent:</span> {formData.name}</div>
          <div><span className="font-bold">Grade & Board:</span> {formData.studentGrade} ({formData.board})</div>
          <div><span className="font-bold">Subjects:</span> {formData.subjects}</div>
          <div><span className="font-bold">Preferred Mode:</span> {formData.mode}</div>
          <div><span className="font-bold">Phone:</span> {formData.phone}</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <a
            href={siteConfig.getWhatsAppUrl(`Hello Navita Tuitions, I submitted an enquiry for ${formData.name} (${formData.studentGrade}, ${formData.board}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-900 text-white font-bold text-sm hover:bg-brand-800 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="text-xs font-bold text-blue-700 hover:text-blue-900 underline mt-2"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div id="enquiry" className={`bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-blue-200/90 relative overflow-hidden ${className}`}>
      {/* Decorative ambient top glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-sky-300/20 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

      <div className="mb-6 relative z-10">
        <h3 className="text-xl sm:text-2xl font-black text-brand-900 font-display">
          {title}
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          {subtitle}
        </p>
      </div>

      {errors.form && (
        <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Parent / Student Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Sharma"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
              errors.name ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/30' : 'border-blue-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30'
            }`}
          />
          {errors.name && <p className="text-rose-600 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Grade & Board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Student Grade <span className="text-rose-500">*</span>
            </label>
            <select
              value={formData.studentGrade}
              onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-blue-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30 font-medium"
            >
              <option value="Grade 1–5 (Primary)">Grade 1–5 (Primary School)</option>
              <option value="Grade 6–8 (Middle)">Grade 6–8 (Middle School)</option>
              <option value="Grade 9–10 (Board Prep)">Grade 9–10 (Board Prep)</option>
              <option value="Grade 11 (Mathematics)">Grade 11 (Mathematics)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Curriculum Board <span className="text-rose-500">*</span>
            </label>
            <select
              value={formData.board}
              onChange={(e) => setFormData({ ...formData, board: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-blue-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30 font-medium"
            >
              <option value="ICSE">ICSE</option>
              <option value="CBSE">CBSE</option>
              <option value="Karnataka State Board">Karnataka State Board (SSLC)</option>
              <option value="NIOS">NIOS</option>
              <option value="Other / General">Other / General</option>
            </select>
          </div>
        </div>

        {/* Subjects & Mode (Only Offline & Online) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Subjects Required <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.subjects}
              onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
              placeholder="e.g. Mathematics, Science, BlueJ"
              className="w-full px-4 py-2.5 rounded-xl border border-blue-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Tuition Mode
            </label>
            <select
              value={formData.mode}
              onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
              className="w-full px-4 py-2.5 rounded-xl border border-blue-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30 font-medium"
            >
              <option value="Offline Tuition">Offline Tuition (Padmanabhanagar)</option>
              <option value="Online Tuition">Online Tuition (Live Interactive)</option>
              <option value="Not Decided">Need Guidance</option>
            </select>
          </div>
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="10-digit mobile number"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                errors.phone ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/30' : 'border-blue-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30'
              }`}
            />
            {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
            </label>
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. parent@example.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all ${
                errors.email ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/30' : 'border-blue-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30'
              }`}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Specific Learning Needs or Questions <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
          </label>
          <textarea
            rows={3}
            value={formData.message || ''}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your child's current academic focus, school name, or topics needing support..."
            className="w-full px-4 py-2.5 rounded-xl border border-blue-200 text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-blue-50/30 resize-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 hover:from-sky-500 hover:to-indigo-600 active:scale-[0.99] transition-all shadow-md hover:shadow-glow-blue focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-75 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center pt-1">
          🔒 Your details are safe with us. We do not share your contact number with third parties.
        </p>
      </form>
    </div>
  );
};
