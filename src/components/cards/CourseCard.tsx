import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../types';
import { CheckCircle2, ArrowRight, BookOpen, Calculator, Code2, Sparkles, Layers, GraduationCap } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useCardTilt } from '../../hooks/useCardTilt';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = useCardTilt(5);

  const getCourseTheme = () => {
    switch (course.category) {
      case 'primary':
        return {
          icon: <BookOpen className="w-6 h-6 text-coral-500" />,
          accentBg: 'bg-rose-50 border-rose-200 text-rose-800',
          gradientHover: 'from-rose-500/10 via-amber-500/5 to-transparent',
          topBorder: 'from-rose-500 via-orange-400 to-amber-400'
        };
      case 'middle':
        return {
          icon: <Layers className="w-6 h-6 text-blue-600" />,
          accentBg: 'bg-blue-50 border-blue-200 text-blue-800',
          gradientHover: 'from-blue-500/10 via-cyan-500/5 to-transparent',
          topBorder: 'from-blue-500 via-indigo-500 to-cyan-400'
        };
      case 'secondary':
        return {
          icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
          accentBg: 'bg-purple-50 border-purple-200 text-purple-800',
          gradientHover: 'from-purple-500/10 via-pink-500/5 to-transparent',
          topBorder: 'from-purple-500 via-indigo-600 to-pink-500'
        };
      case 'specialized':
        if (course.id.includes('computer')) {
          return {
            icon: <Code2 className="w-6 h-6 text-emerald-600" />,
            accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
            gradientHover: 'from-emerald-500/10 via-teal-500/5 to-transparent',
            topBorder: 'from-emerald-500 via-teal-500 to-cyan-500'
          };
        }
        return {
          icon: <Calculator className="w-6 h-6 text-amber-600" />,
          accentBg: 'bg-amber-50 border-amber-200 text-amber-800',
          gradientHover: 'from-amber-500/10 via-orange-500/5 to-transparent',
          topBorder: 'from-amber-500 via-orange-500 to-yellow-400'
        };
      case 'senior':
        return {
          icon: <Calculator className="w-6 h-6 text-indigo-600" />,
          accentBg: 'bg-indigo-50 border-indigo-200 text-indigo-800',
          gradientHover: 'from-indigo-500/10 via-purple-500/5 to-transparent',
          topBorder: 'from-indigo-600 via-purple-600 to-blue-500'
        };
      default:
        return {
          icon: <Sparkles className="w-6 h-6 text-blue-600" />,
          accentBg: 'bg-blue-50 border-blue-200 text-blue-800',
          gradientHover: 'from-blue-500/10 to-transparent',
          topBorder: 'from-blue-500 to-indigo-500'
        };
    }
  };

  const theme = getCourseTheme();

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 flex flex-col justify-between group overflow-hidden transition-shadow duration-300"
    >
      {/* Top Colorful Gradient Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.topBorder}`} />

      {/* Subtle Hover Gradient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 shadow-xs">
            {theme.icon}
          </div>

          <div className="flex items-center gap-1.5">
            {course.badge && (
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${theme.accentBg}`}>
                {course.badge}
              </span>
            )}
          </div>
        </div>

        <span className="text-xs font-bold text-slate-500 block mb-1">
          {course.gradeRange}
        </span>

        <h3 className="text-xl font-bold text-brand-900 group-hover:text-blue-700 transition-colors mb-2.5 font-display leading-snug">
          <Link to={course.path}>{course.title}</Link>
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {course.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {course.keyHighlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Board pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {course.boards.map((b) => (
            <span key={b} className="px-2.5 py-0.5 rounded-lg bg-slate-100/90 text-slate-700 text-[11px] font-semibold">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
        <Link
          to={course.path}
          className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-900 group-hover:text-blue-600 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
        </Link>

        <a
          href={siteConfig.getWhatsAppUrl(`Hello Navita Tuitions, I want to enquire about ${course.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors"
        >
          Enquire
        </a>
      </div>
    </div>
  );
};
