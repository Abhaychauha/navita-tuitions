import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Home, Compass, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const NotFoundPage: React.FC = () => {
  useSEO({
    title: "Page Not Found (404) | Navita Tuitions",
    description: "Looks like you've taken a wrong turn. Let's get you back to Navita Tuitions."
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-slate-100">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <Compass className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">Error 404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-900 font-display">
            Looks like you've taken a wrong turn.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Let's get you back to Navita Tuitions.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-900 text-white font-bold text-sm hover:bg-brand-800 transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
