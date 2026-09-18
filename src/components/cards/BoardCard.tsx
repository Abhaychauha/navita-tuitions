import React from 'react';
import { Link } from 'react-router-dom';
import { BoardInfo } from '../../types';
import { ArrowRight, BookCheck, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { useCardTilt } from '../../hooks/useCardTilt';

interface BoardCardProps {
  board: BoardInfo;
}

export const BoardCard: React.FC<BoardCardProps> = ({ board }) => {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = useCardTilt(5);

  const getBoardTheme = () => {
    switch (board.id) {
      case 'icse':
        return {
          gradient: 'from-purple-600 via-indigo-600 to-brand-900',
          badge: 'bg-purple-100 text-purple-900 border-purple-200',
          accentColor: 'text-purple-600',
          lightBg: 'bg-purple-50/50',
          hoverBorder: 'hover:border-purple-300'
        };
      case 'cbse':
        return {
          gradient: 'from-blue-600 via-indigo-500 to-cyan-600',
          badge: 'bg-blue-100 text-blue-900 border-blue-200',
          accentColor: 'text-blue-600',
          lightBg: 'bg-blue-50/50',
          hoverBorder: 'hover:border-blue-300'
        };
      case 'state-board':
        return {
          gradient: 'from-amber-500 via-orange-500 to-rose-600',
          badge: 'bg-amber-100 text-amber-900 border-amber-200',
          accentColor: 'text-amber-600',
          lightBg: 'bg-amber-50/50',
          hoverBorder: 'hover:border-amber-300'
        };
      case 'nios':
        return {
          gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
          badge: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          accentColor: 'text-emerald-600',
          lightBg: 'bg-emerald-50/50',
          hoverBorder: 'hover:border-emerald-300'
        };
      default:
        return {
          gradient: 'from-brand-900 to-blue-700',
          badge: 'bg-slate-100 text-slate-800 border-slate-200',
          accentColor: 'text-brand-900',
          lightBg: 'bg-slate-50',
          hoverBorder: 'hover:border-brand-300'
        };
    }
  };

  const theme = getBoardTheme();

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 ${theme.hoverBorder} flex flex-col justify-between group overflow-hidden transition-all duration-300`}
    >
      <div>
        {/* Header with Board Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
            <BookCheck className={`w-6 h-6 ${theme.accentColor}`} />
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${theme.badge}`}>
            {board.name.split(' ')[0]}
          </span>
        </div>

        <h3 className="text-xl font-black text-brand-900 group-hover:text-blue-700 transition-colors mb-2.5 font-display">
          <Link to={board.path}>{board.name}</Link>
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {board.shortDescription}
        </p>

        {/* Pillars */}
        <div className="space-y-2.5 mb-6">
          {board.keyPillars.slice(0, 3).map((pillar, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <span className="font-bold text-brand-900 block mb-0.5">{pillar.title}</span>
              <span className="text-slate-600">{pillar.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={board.path}
          className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-900 group-hover:text-blue-600 transition-colors"
        >
          <span>Explore Curriculum</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
};
