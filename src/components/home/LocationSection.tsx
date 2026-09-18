import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Address & Contact Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="badge-academic mb-3">Centre Location</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-900 font-display">
                  Visit Navita Tuitions in Padmanabhanagar
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Conveniently situated in South Bengaluru, easily accessible from Banashankari, Kumaraswamy Layout, and Uttarahalli.
                </p>
              </div>

              {/* Address card */}
              <div className="p-5 rounded-2xl bg-brand-50/70 border border-brand-100 text-slate-800 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-800 shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-900 font-bold block text-sm font-display">
                      Navita Tuitions
                    </strong>
                    <address className="not-italic text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                      {siteConfig.address.line1},<br />
                      {siteConfig.address.line2},<br />
                      {siteConfig.address.landmark},<br />
                      {siteConfig.address.area},<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                    </address>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-900 hover:bg-brand-800 text-white rounded-xl font-bold text-xs shadow-sm transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={siteConfig.phoneTel}
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-white hover:bg-slate-50 text-brand-900 border border-slate-200 rounded-xl font-bold text-xs shadow-xs transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Call Centre</span>
                </a>

                <a
                  href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I want to know your centre address and schedule a visit.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-xs transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Nearby areas pill tags */}
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Serving Students Near:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {siteConfig.neighbourhoods.map((n) => (
                    <span key={n} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Map Embed (7 cols) */}
            <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
              <iframe
                title="Navita Tuitions Location Map"
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-brand-900 rounded-lg text-xs font-bold shadow-md hover:bg-white transition-colors"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
