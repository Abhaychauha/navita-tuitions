import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export const Grade11MathPage: React.FC = () => {
  useSEO({
    title: "Grade 11 Mathematics Coaching in Padmanabhanagar, Bangalore",
    description: "Bridge the transition to high school mathematics. Dedicated Grade 11 Math tuition in Sets, Relations, Functions, Coordinate Geometry, and Calculus fundamentals at Navita Tuitions."
  });

  const topics = [
    "Sets, Relations & Functions",
    "Trigonometric Functions & Identities",
    "Principle of Mathematical Induction & Complex Numbers",
    "Linear Inequalities & Permutations & Combinations",
    "Binomial Theorem & Sequences & Series",
    "Straight Lines, Conic Sections & 3D Geometry",
    "Limits & Derivatives (Calculus Fundamentals)",
    "Statistics & Probability"
  ];

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Courses", path: "/courses" }, { name: "Grade 11 Mathematics" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Senior Secondary Coaching</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Grade 11 Mathematics Coaching
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Bridge the conceptual gap between Class 10 and Senior Secondary. Deep understanding of Sets, Relations, Functions, and Calculus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Overcoming the Grade 11 Mathematics Transition
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                The shift from Class 10 to Class 11 mathematics introduces abstract concepts and multi-step derivations. Students often face an initial drop in confidence unless guided with rigor and patience.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We break down complex proofs, provide regular problem-solving assignments, and conduct weekly unit evaluations to ensure students build mastery for Class 11 school exams and Class 12 board readiness.
              </p>
            </div>

            {/* Topics Covered */}
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                Key Topics Covered
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topics.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5">
            <EnquiryForm
              defaultGrade="Grade 11 (Mathematics)"
              defaultSubject="Grade 11 Mathematics"
              title="Enquire for Grade 11 Math"
              subtitle="Offline and online batches available."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
