import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { LocationSection } from '../components/home/LocationSection';
import { useSEO } from '../hooks/useSEO';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ContactPage: React.FC = () => {
  useSEO({
    title: "Contact Navita Tuitions | Address, Phone & Location Map in Padmanabhanagar",
    description: "Contact Navita Tuitions in Padmanabhanagar, Bengaluru. Phone: 088672 87115, WhatsApp, address, and interactive Google Map directions."
  });

  return (
    <div className="py-8 md:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact Us" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Get In Touch</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Contact Navita Tuitions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We welcome parents and students to visit our centre in Padmanabhanagar, call, WhatsApp, or submit an enquiry form.
            </p>
          </div>
        </div>

        {/* Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-6">
              <h2 className="text-xl font-bold text-brand-900 font-display border-b border-slate-100 pb-3">
                Direct Contact Details
              </h2>

              <div className="space-y-4 text-sm">
                <a 
                  href={siteConfig.phoneTel}
                  className="flex items-start gap-3 text-slate-700 hover:text-brand-900 transition-colors p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">Phone Number</span>
                    <span className="font-bold text-brand-900 text-base">{siteConfig.phone}</span>
                    <span className="text-xs text-slate-500 block">Click to call directly on mobile</span>
                  </div>
                </a>

                <a 
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-700 hover:text-emerald-700 transition-colors p-3 rounded-xl hover:bg-emerald-50/50 border border-transparent hover:border-emerald-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">WhatsApp Direct</span>
                    <span className="font-bold text-emerald-700 text-base">+91 88672 87115</span>
                    <span className="text-xs text-slate-500 block">Instant enquiry & consultation</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-700 p-3 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-xl bg-white text-amber-600 flex items-center justify-center shrink-0 border border-slate-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">Centre Address</span>
                    <address className="not-italic text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {siteConfig.address.line1},<br />
                      {siteConfig.address.line2},<br />
                      {siteConfig.address.landmark},<br />
                      {siteConfig.address.area}, {siteConfig.address.city} 560070
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm
              title="Send Us a Direct Message"
              subtitle="Have questions regarding admissions, batch timings, or subject plans? Fill the form below."
            />
          </div>

        </div>

        {/* Location Section */}
        <LocationSection />
      </div>
    </div>
  );
};
