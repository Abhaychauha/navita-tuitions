import React from 'react';
import { Program } from '../../types';
import { Sparkles, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-amber-100 flex flex-col justify-between card-hover-effect relative overflow-hidden">
      <div className="absolute top-0 right-0 w-28 h-28 bg-amber-100/40 rounded-full blur-2xl -mr-10 -mt-10" />

      <div>
        <div className="flex items-center justify-between mb-3">
          {program.badge && (
            <span className="badge-amber">{program.badge}</span>
          )}
          <span className="text-xs font-semibold text-slate-500">
            {program.targetAudience}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-brand-900 mb-1 font-display">
          {program.title}
        </h3>
        <p className="text-xs font-bold text-amber-700 mb-3 tracking-wide">
          {program.tagline}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {program.description}
        </p>

        <div className="space-y-2 mb-6">
          {program.activities.map((act, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{act}</span>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50/60 rounded-xl text-xs text-amber-900 border border-amber-100 flex items-start gap-2 mb-6">
          <Calendar className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>{program.scheduleNote}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to="/admissions"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-900 hover:text-amber-600 transition-colors"
        >
          <span>Register / Enquire</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={siteConfig.getWhatsAppUrl(`Hello Navita Tuitions, I would like to enquire about ${program.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
};
