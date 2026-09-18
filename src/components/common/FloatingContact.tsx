import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FloatingContact: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      {/* Desktop Floating WhatsApp Button with Radar Pulse and Tooltip */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <div className="relative flex items-center">
          {/* Tooltip */}
          {tooltipVisible && (
            <div className="absolute right-full mr-3 bg-brand-950 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-elevated whitespace-nowrap border border-slate-700 animate-in fade-in slide-in-from-right-2 duration-150">
              💬 Chat with Navita Tuitions
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-brand-950" />
            </div>
          )}

          {/* Pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-3.5 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 active:scale-95 border border-emerald-400/40"
            aria-label="Chat with Navita Tuitions on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
            <span className="font-extrabold text-sm tracking-wide pr-1">
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 px-3 py-2 shadow-2xl flex items-center gap-2">
        <a
          href={siteConfig.phoneTel}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-900 active:bg-brand-950 text-white rounded-xl font-bold text-xs shadow-sm"
          aria-label={`Call Navita Tuitions at ${siteConfig.phone}`}
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call {siteConfig.phone}</span>
        </a>

        <a
          href={siteConfig.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 active:from-emerald-700 text-white rounded-xl font-bold text-xs shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
