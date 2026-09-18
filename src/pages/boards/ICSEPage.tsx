import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { boardsData } from '../../data/boards';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, CheckCircle2, Award, Terminal, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

export const ICSEPage: React.FC = () => {
  const board = boardsData.find(b => b.id === 'icse')!;
  
  useSEO({
    title: "ICSE Board Tuition in Padmanabhanagar, Bangalore | Grade 1–10",
    description: "Specialized ICSE board tuition in Padmanabhanagar, Bangalore. In-depth CISCE syllabus coverage, Mathematics coaching, and ICSE Class 10 Computer Applications with BlueJ."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Boards", path: "/courses" }, { name: "ICSE Board Tuition" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">CISCE Curriculum Alignment</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              ICSE Board Tuition (Grade 1–10)
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Master the depth and analytical rigor of the ICSE curriculum with structured concept building, textbook exercises, and board exam answer-writing strategies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Main Info (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                About Our ICSE Coaching Approach
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {board.overview}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                Four Pillars of Our ICSE Preparation
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

            {/* Special Highlight: Computer Applications with BlueJ */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-brand-950 text-white space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Code2 className="w-5 h-5" />
                <span>Specialized ICSE Grade 10 Computer Applications (BlueJ)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comprehensive training in Java fundamentals, OOP concepts, methods, nested loops, 1D/2D arrays, string algorithms, and past 10 years ICSE specimen papers.
              </p>
              <Link to="/courses/computer-applications" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200">
                <span>View Computer Applications Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Subjects Covered */}
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100">
              <h3 className="text-lg font-bold text-brand-900 font-display mb-4">
                Subjects Offered for ICSE
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

          {/* Form sidebar (5 cols) */}
          <div className="lg:col-span-5">
            <EnquiryForm
              defaultBoard="ICSE"
              title="Enquire About ICSE Tuition"
              subtitle="Get details on timings, syllabus planning, and batch availability."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
