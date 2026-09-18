import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-950 via-brand-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-amber-400 shadow-glow-amber">
          <GraduationCap className="w-9 h-9" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
          Help Your Child Learn With Confidence
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore personalised tuition and academic support at Navita Tuitions, Padmanabhanagar. Book a free consultation to discuss your child's learning roadmap.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/admissions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold text-brand-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg hover:shadow-glow-amber transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-amber-900" />
            <span>Enquire Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I am ready to enquire about classes for my child.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={siteConfig.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-102"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
