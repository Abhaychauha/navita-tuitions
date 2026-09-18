import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const MiddleTuitionPage: React.FC = () => {
  useSEO({
    title: "Middle School Tuition (Grade 6–8) in Padmanabhanagar, Bangalore",
    description: "Strengthen concepts, analytical problem-solving, and study habits for Grade 6, 7 & 8 students across ICSE, CBSE and State Board at Navita Tuitions."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Courses", path: "/courses" }, { name: "Middle School (Grade 6–8)" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Concept Building Phase</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Middle School Tuition (Grade 6–8)
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Strengthen concepts, improve problem-solving, and develop consistent study habits as subjects become more demanding.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Navigating the Transition to Higher Subject Rigor
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Middle school is where general science divides into Physics, Chemistry, and Biology, and mathematics introduces Algebra, Geometry proofs, and negative numbers.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We guide students through this transition with clear visual explanations, structured chapter notes, and regular practice worksheets.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-brand-900 text-lg font-display">Key Focus Areas (Grades 6–8):</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Algebra & Geometry:</strong> Linear equations, exponents, angle theorems, mensuration & coordinate plotting.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Science Foundations:</strong> Physics laws, chemical formulas, atomic structure, and biological diagrams.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Study Discipline:</strong> Daily practice routines, revision notebooks, and school test readiness.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EnquiryForm
              defaultGrade="Grade 6–8 (Middle)"
              title="Enquire for Middle School"
              subtitle="Tell us your child's board and subjects needing focus."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
