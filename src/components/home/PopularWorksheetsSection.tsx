import React from 'react';
import { worksheetsData } from '../../data/worksheets';
import { WorksheetCard } from '../worksheets/WorksheetCard';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpenCheck } from 'lucide-react';

export const PopularWorksheetsSection: React.FC = () => {
  // Show 4 featured worksheets: Free Grade 5 English Grammar + 3 top premiums
  const featuredWorksheets = worksheetsData.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0F5FA] via-white to-[#F0F5FA] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Worksheet Library"
          badgeVariant="amber"
          title="Practice. Improve. Grow."
          subtitle="High-quality worksheets designed to help students practise concepts, strengthen fundamentals and prepare with confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {featuredWorksheets.map((ws) => (
            <WorksheetCard key={ws.id} worksheet={ws} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/worksheets"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-md hover:shadow-glow-purple transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <BookOpenCheck className="w-5 h-5" />
            <span>Explore All Worksheets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
