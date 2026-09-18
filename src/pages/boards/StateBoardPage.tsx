import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { boardsData } from '../../data/boards';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookCheck, CheckCircle2, Award } from 'lucide-react';

export const StateBoardPage: React.FC = () => {
  const board = boardsData.find(b => b.id === 'state-board')!;

  useSEO({
    title: "Karnataka State Board Tuition & SSLC Coaching | Padmanabhanagar, Bangalore",
    description: "Karnataka State Board & SSLC tuition in Padmanabhanagar, Bengaluru. Complete textbook syllabus, question blueprint mastery, model papers, and passing/scoring packages."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Boards", path: "/courses" }, { name: "Karnataka State Board" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">KSEEB / KSEAB Syllabus Aligned</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Karnataka State Board & SSLC Tuition
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Dedicated textbook coaching, blueprint-based model paper solving, and systematic SSLC board preparation in Padmanabhanagar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                State Board Excellence in South Bengaluru
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {board.overview}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                State Board Coaching Pillars
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

            {/* Subjects Covered */}
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100">
              <h3 className="text-lg font-bold text-brand-900 font-display mb-4">
                Subjects Offered for Karnataka State Board
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
              defaultBoard="Karnataka State Board"
              title="Enquire About State Board Classes"
              subtitle="Get guidance for school exams and Class 10 SSLC preparation."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
