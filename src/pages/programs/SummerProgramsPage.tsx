import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { programsData } from '../../data/programs';
import { ProgramCard } from '../../components/cards/ProgramCard';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { Sun, Sparkles, Calendar, BookOpen } from 'lucide-react';

export const SummerProgramsPage: React.FC = () => {
  useSEO({
    title: "Summer Programs & Camp in Padmanabhanagar, Bangalore | Creativia & Tutoring",
    description: "Creativia Summer Camp and Summer Tutoring programs at Navita Tuitions, Padmanabhanagar. Creative activities, math logic, English skills, and academic bridge batches."
  });

  return (
    <div className="py-8 md:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Summer Programs" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
              <Sun className="w-3.5 h-3.5 text-amber-200" />
              Vacation Learning
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Creativia Summer Camp & Academic Bridge
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Transform school vacation into an inspiring blend of creative skill development, mathematical logic, vocabulary building, and academic readiness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {programsData.map((prog) => (
            <ProgramCard key={prog.id} program={prog} />
          ))}
        </div>

        <div className="mt-12">
          <EnquiryForm
            title="Register or Enquire for Summer Programs"
            subtitle="Contact us for upcoming summer batch dates, timings, and age-group slots."
          />
        </div>
      </div>
    </div>
  );
};
