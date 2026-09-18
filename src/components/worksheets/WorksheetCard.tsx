import React from 'react';
import { Link } from 'react-router-dom';
import { Worksheet } from '../../types';
import { Lock, FileText, CheckCircle2, ArrowRight, Sparkles, BookOpen, Layers, Calculator, Code2 } from 'lucide-react';
import { useCardTilt } from '../../hooks/useCardTilt';
import { authService } from '../../services/authService';
import { worksheetService } from '../../services/worksheetService';

interface WorksheetCardProps {
  worksheet: Worksheet;
}

export const WorksheetCard: React.FC<WorksheetCardProps> = ({ worksheet }) => {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = useCardTilt(4);
  const currentUser = authService.getCurrentUser();
  const access = worksheetService.checkAccess(worksheet, currentUser);

  const getSubjectTheme = () => {
    const s = worksheet.subject.toLowerCase();
    if (s.includes('english')) {
      return {
        icon: <BookOpen className="w-6 h-6 text-orange-500" />,
        badgeColor: 'bg-orange-50 text-orange-800 border-orange-200',
        topLine: 'from-orange-500 via-amber-400 to-rose-400'
      };
    }
    if (s.includes('math')) {
      return {
        icon: <Calculator className="w-6 h-6 text-blue-600" />,
        badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
        topLine: 'from-blue-600 via-indigo-500 to-purple-500'
      };
    }
    if (s.includes('science')) {
      return {
        icon: <Layers className="w-6 h-6 text-emerald-600" />,
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        topLine: 'from-emerald-500 via-teal-500 to-cyan-500'
      };
    }
    return {
      icon: <Code2 className="w-6 h-6 text-purple-600" />,
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      topLine: 'from-purple-600 via-indigo-600 to-blue-600'
    };
  };

  const theme = getSubjectTheme();

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 flex flex-col justify-between group overflow-hidden transition-all duration-300"
    >
      {/* Top Accent Gradient Line */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.topLine}`} />

      <div>
        {/* Badges row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
            {theme.icon}
          </div>

          <div className="flex items-center gap-2">
            {worksheet.isFree ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xs uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> FREE SAMPLE
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                <Lock className="w-3 h-3 text-amber-500" /> PREMIUM
              </span>
            )}
          </div>
        </div>

        {/* Grade & Board */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-1.5">
          <span>Grade {worksheet.grade}</span>
          <span>•</span>
          <span>{worksheet.board}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-600">
            <FileText className="w-3.5 h-3.5" /> {worksheet.pages} Pages
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-brand-900 group-hover:text-blue-700 transition-colors mb-2 font-display leading-snug">
          <Link to={`/worksheets/${worksheet.id}`}>{worksheet.title}</Link>
        </h3>

        {/* Topic */}
        <p className="text-xs font-bold text-blue-700 mb-3 line-clamp-1">
          Topic: {worksheet.topic}
        </p>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
          {worksheet.description}
        </p>
      </div>

      {/* Action footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/worksheets/${worksheet.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-900 group-hover:text-blue-600 transition-colors"
        >
          <span>{worksheet.isFree || access.hasFullAccess ? "View Worksheet" : "Preview & Unlock"}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        {worksheet.isFree ? (
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
            Full Free Access
          </span>
        ) : access.hasFullAccess ? (
          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
            Unlocked ✓
          </span>
        ) : (
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
            <Lock className="w-3 h-3 text-amber-600" /> Locked
          </span>
        )}
      </div>
    </div>
  );
};
