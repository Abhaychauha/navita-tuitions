import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  Sparkles 
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-slate-300 pt-0 pb-12 border-t border-slate-800 relative">
      {/* Pre-Footer Vibrant CTA Strip */}
      <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 py-6 px-4 mb-14 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold font-display">Ready to Help Your Child Learn With Confidence?</h4>
            <p className="text-xs sm:text-sm text-sky-100">Admissions open for Grades 1–10 across ICSE, CBSE, State Board & NIOS in Padmanabhanagar.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/about#enquiry"
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-brand-950 font-extrabold text-xs sm:text-sm hover:bg-amber-300 transition-all shadow-md"
            >
              Enquire Now
            </Link>
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-white border border-blue-700">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-display">
                Navita Tuitions
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Personalised academic coaching for students from Grade 1 to Grade 10 across ICSE, CBSE, State Board, NIOS, and Grade 11 Mathematics in Padmanabhanagar, Bengaluru.
            </p>

            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tuition Modes Available
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-900/80 text-slate-300 text-xs border border-brand-800">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" /> Offline Classroom Classes
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-900/80 text-slate-300 text-xs border border-brand-800">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" /> Online Interactive Tuition
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide font-display">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/worksheets" className="text-slate-400 hover:text-amber-300 transition-colors">Worksheet Library</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">Courses & Curricula</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-300 transition-colors">About Us & Location</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-slate-400 hover:text-amber-300 transition-colors">Parent Reviews</Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-amber-300 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/about#enquiry" className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-1">
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses & Boards */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide font-display">
              Courses & Boards
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">Primary School (Grade 1–5)</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">Middle School (Grade 6–8)</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">Grade 9–10 Board Preparation</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">Mathematics Coaching</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">ICSE Computer Applications (BlueJ)</Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-amber-300 transition-colors">Grade 11 Mathematics</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base mb-4 tracking-wide font-display">
              Contact & Location
            </h3>
            
            <div className="space-y-3 text-sm">
              <a 
                href={siteConfig.phoneTel} 
                className="flex items-start gap-2.5 text-slate-300 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="font-bold">{siteConfig.phone}</span>
              </a>

              <a 
                href={siteConfig.getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-bold">WhatsApp: +91 88672 87115</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed">
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.line2},<br />
                  {siteConfig.address.landmark},<br />
                  {siteConfig.address.area},<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                </address>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-900 hover:bg-sky-800 text-white text-xs font-bold transition-colors border border-sky-700"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Navita Tuitions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-slate-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
