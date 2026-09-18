import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { StudyPlannerWidget } from '../components/widgets/StudyPlannerWidget';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { useSEO } from '../hooks/useSEO';
import { Calendar, Clock, CheckCircle2, BookMarked, ListOrdered, Target } from 'lucide-react';

export const StudyPlansPage: React.FC = () => {
  useSEO({
    title: "Study Plans & Daily Practice Routines | Navita Tuitions Padmanabhanagar",
    description: "Learn how Navita Tuitions helps students establish daily study routines, revision schedules, practice targets, and exam preparation plans in Bengaluru."
  });

  return (
    <div className="py-8 md:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Study Plans & Practice" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Academic Discipline</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Every Student Needs a Plan
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Consistent daily practice beats last-minute cramming every time. We help students establish structured routines, revision schedules, and practice targets.
            </p>
          </div>
        </div>

        {/* Interactive Routine Generator */}
        <div className="my-12">
          <StudyPlannerWidget />
        </div>

        {/* Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100">
            <Calendar className="w-8 h-8 text-amber-500 mb-3" />
            <h3 className="text-lg font-bold text-brand-900 mb-2 font-display">Daily Study Routines</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Setting fixed daily study hours for homework, math practice, and light revision to prevent schoolwork from piling up.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100">
            <Clock className="w-8 h-8 text-brand-600 mb-3" />
            <h3 className="text-lg font-bold text-brand-900 mb-2 font-display">Revision Schedules</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Planned cyclic reviews of previous chapters so formulas, theorems, and definitions remain fresh in memory.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100">
            <Target className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="text-lg font-bold text-brand-900 mb-2 font-display">Practice Targets</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Concrete weekly problem goals (e.g. 30 math problems, 2 science worksheets, 1 BlueJ Java program).
            </p>
          </div>
        </div>

        <div className="my-12">
          <EnquiryForm
            title="Get a Custom Study Plan for Your Child"
            subtitle="We will review your child's syllabus and create a manageable study timetable."
          />
        </div>
      </div>
    </div>
  );
};
