import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Search, CalendarDays, BookOpenCheck, PencilLine, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const LearningProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      name: "Understand",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      tagline: "Academic Diagnosis",
      desc: "Identify the student's current academic level, strengths, conceptual gaps, and required board topics.",
      details: ["Diagnostic review of key topics", "Syllabus mapping for ICSE/CBSE/State", "Identifying anxiety or hesitation points"]
    },
    {
      step: "02",
      name: "Plan",
      icon: <CalendarDays className="w-6 h-6 text-amber-500" />,
      tagline: "Structured Routine",
      desc: "Create a structured learning, revision, homework, and weekly worksheet target roadmap.",
      details: ["Daily study timetable", "Chapter-wise milestone dates", "Targeted practice problem sets"]
    },
    {
      step: "03",
      name: "Learn",
      icon: <BookOpenCheck className="w-6 h-6 text-indigo-600" />,
      tagline: "Concept Clarity",
      desc: "Teach concepts clearly using age-appropriate visual methods, step-by-step proofs, and interactive examples.",
      details: ["Zero rote memorisation", "Real-world examples & visual proofs", "Interactive problem walkthroughs"]
    },
    {
      step: "04",
      name: "Practice",
      icon: <PencilLine className="w-6 h-6 text-emerald-600" />,
      tagline: "Active Problem Solving",
      desc: "Reinforce understanding through regular worksheets, dry runs, formula notebooks, and textbook exercises.",
      details: ["Graduated difficulty questions", "Immediate error correction", "Formula revision notebooks"]
    },
    {
      step: "05",
      name: "Improve",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      tagline: "Continuous Mastery",
      desc: "Track progress through mock evaluations and provide ongoing doubt clarification until full mastery.",
      details: ["Weekly unit test series", "Board exam paper simulations", "Ongoing parent progress reviews"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Structured Roadmap"
          badgeVariant="blue"
          title="Our Interactive 5-Step Learning Journey"
          subtitle="A systematic workflow designed to turn hesitation into subject mastery and consistent academic excellence."
        />

        {/* Step Selector Pills on Desktop / Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                activeStep === idx
                  ? 'bg-gradient-to-br from-brand-900 to-indigo-900 text-white shadow-elevated border-blue-400/40 scale-105'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xl font-black font-display ${activeStep === idx ? 'text-amber-300' : 'text-slate-400'}`}>
                  {s.step}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeStep === idx ? 'bg-white/20 text-white' : 'bg-white text-brand-900 border border-slate-200'}`}>
                  {s.icon}
                </div>
              </div>
              <div className="font-bold text-sm sm:text-base font-display">{s.name}</div>
              <div className={`text-[11px] font-medium truncate ${activeStep === idx ? 'text-blue-200' : 'text-slate-500'}`}>
                {s.tagline}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40 rounded-3xl p-8 sm:p-10 border border-blue-200/80 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-blue-600 font-display">
                  Step {steps[activeStep].step}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-brand-900 font-display">
                  — {steps[activeStep].name}: {steps[activeStep].tagline}
                </span>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="space-y-2 pt-2">
                {steps[activeStep].details.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-soft text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-xs">
                {steps[activeStep].icon}
              </div>
              <h4 className="text-lg font-bold text-brand-900 font-display">
                Actionable Result in Step {steps[activeStep].step}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensures that every chapter is understood deeply, practiced exhaustively, and revised systematically before school tests.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
