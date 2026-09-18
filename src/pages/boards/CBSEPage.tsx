import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { boardsData } from '../../data/boards';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, CheckCircle2, Target, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CBSEPage: React.FC = () => {
  const board = boardsData.find(b => b.id === 'cbse')!;

  useSEO({
    title: "CBSE Board Tuition in Padmanabhanagar, Bangalore | Grade 1–10 & 11 Math",
    description: "High-impact CBSE tuition in Padmanabhanagar, Bangalore. NCERT mastery, Exemplar problem solving, Class 10 board test series, and Grade 11 Mathematics coaching."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Boards", path: "/courses" }, { name: "CBSE Board Tuition" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">NCERT & Competency Framework</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              CBSE Board Tuition (Grade 1–10 & 11)
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Master NCERT textbooks, Exemplar questions, case-study analysis, and CBSE board examination blueprints with clarity and confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Conceptual Clarity for CBSE Students
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {board.overview}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                Key Highlights of Our CBSE Program
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {board.keyPillars.map((p, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-brand-900 text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade 11 Math Note */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-2">
              <h4 className="font-bold text-sm sm:text-base font-display flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-600" />
                <span>Includes Grade 11 CBSE Mathematics Coaching</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We bridge the critical gap between Class 10 and Senior Secondary CBSE mathematics, covering Sets, Relations, Functions, Coordinate Geometry, and Calculus fundamentals.
              </p>
            </div>

            {/* Subjects Covered */}
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100">
              <h3 className="text-lg font-bold text-brand-900 font-display mb-4">
                Subjects Offered for CBSE
              </h3>
              <div className="flex flex-wrap gap-2">
                {board.subjectsOffered.map((subj) => (
                  <span key={subj} className="px-3 py-1.5 rounded-lg bg-brand-50 text-brand-900 font-semibold text-xs border border-brand-100">
                    ✓ {subj}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form sidebar */}
          <div className="lg:col-span-5">
            <EnquiryForm
              defaultBoard="CBSE"
              title="Enquire About CBSE Tuition"
              subtitle="Ask about batch timings, subject combinations, or home tuition availability."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
