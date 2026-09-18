import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { siteConfig } from '../config/siteConfig';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="badge-academic">About Navita Tuitions</span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-900 font-display leading-tight">
              A Dedicated Education Centre in Padmanabhanagar, Bengaluru
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Navita Tuitions is a premier coaching centre established in Padmanabhanagar to help school students build lasting confidence, master fundamental concepts, and excel in board examinations.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We cater to students from Grade 1 to Grade 10 across ICSE, CBSE, Karnataka State Board, and NIOS, with a specialized focus on Mathematics Coaching, Science, English, and ICSE Grade 10 Computer Applications (Java BlueJ).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-900 text-sm">Concept Clarity</h4>
                  <p className="text-xs text-slate-500">Deconstructing difficult subjects into easy steps.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-900 text-sm">Personal Attention</h4>
                  <p className="text-xs text-slate-500">Individual pacing tailored to each student's needs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-brand-950 to-indigo-950 text-white rounded-3xl p-8 shadow-elevated border border-blue-400/20 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-900/80 flex items-center justify-center text-amber-400 border border-blue-700">
              <GraduationCap className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black font-display text-white">Our Teaching Core</h3>
            
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Zero Rote Learning — Focus on Proofs & 'Why'</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Structured Revision & Daily Worksheets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Weekly Assessments & Parent Communication</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Support for Offline and Online Tuition</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Location, Contact Info & Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact & Address Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 space-y-6">
            <h3 className="text-2xl font-black text-brand-900 font-display">
              Visit or Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-900">Centre Address:</div>
                  <address className="not-italic text-slate-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                    {siteConfig.address.fullAddress}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-900">Direct Phone:</div>
                  <a href={siteConfig.phoneTel} className="text-blue-700 font-bold hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-brand-900">WhatsApp Assistance:</div>
                  <a
                    href={siteConfig.getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    +91 88672 87115
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs border border-blue-200 transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-900 text-white font-bold text-xs hover:bg-brand-800 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 shadow-card border border-slate-200/80 overflow-hidden h-[380px]">
            <iframe
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.25rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Navita Tuitions Location Map"
            />
          </div>
        </div>

        {/* Integrated Contact & Admissions Form */}
        <div className="max-w-3xl mx-auto pt-6">
          <EnquiryForm
            title="Book a Free Consultation or Send an Enquiry"
            subtitle="Fill in your details below and our team will get in touch with you promptly."
          />
        </div>

      </div>
    </div>
  );
};
