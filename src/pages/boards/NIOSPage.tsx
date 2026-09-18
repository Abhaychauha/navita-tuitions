import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { boardsData } from '../../data/boards';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookOpenCheck, CheckCircle2, Clock } from 'lucide-react';

export const NIOSPage: React.FC = () => {
  const board = boardsData.find(b => b.id === 'nios')!;

  useSEO({
    title: "NIOS Tuition & Academic Coaching in Bangalore | Secondary & Foundation",
    description: "Personalized NIOS (National Institute of Open Schooling) tuition in Padmanabhanagar, Bangalore. TMA assignment guidance, study material breakdown, and exam prep."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Boards", path: "/courses" }, { name: "NIOS Board Tuition" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Flexible Open Schooling Support</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              NIOS Tuition & Academic Support
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Structured study roadmaps, Tutor Marked Assignment (TMA) guidance, and focused preparation for NIOS secondary public and on-demand examinations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Tailored Support for NIOS Students
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {board.overview}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                Key Components of NIOS Coaching
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
                Supported NIOS Subjects
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
              defaultBoard="NIOS"
              title="Enquire About NIOS Support"
              subtitle="Tell us about your target examination block and required subjects."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
