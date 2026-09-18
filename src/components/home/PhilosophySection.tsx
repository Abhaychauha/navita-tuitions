import React from 'react';
import { 
  Lightbulb, 
  UserCheck, 
  ClipboardCheck, 
  PenTool, 
  HelpCircle, 
  RefreshCw, 
  GraduationCap, 
  TrendingUp, 
  MessagesSquare, 
  HeartHandshake,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Bento Philosophy"
          badgeVariant="purple"
          title="Teaching Built on Care, Rigor, and Consistency"
          subtitle="At Navita Tuitions, academic confidence comes from clarity of concepts, patient guidance, and steady daily practice."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Large Feature Card (7 cols) */}
          <div className="md:col-span-7 bg-gradient-to-br from-brand-950 via-brand-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-elevated border border-blue-500/20 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Individual Focus
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3 font-display text-white">
                Personalised Attention & Concept-Based Learning
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We identify each student's current academic level and explain the 'why' behind every mathematical formula, scientific principle, and grammatical rule rather than relying on memorisation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Zero Rote Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open Doubt Atmosphere</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Medium Card (5 cols) */}
          <div className="md:col-span-5 bg-white rounded-3xl p-7 shadow-card border border-slate-200/80 flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-200">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 font-display">
                Practice-Oriented Learning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Active problem solving, chapter-by-chapter worksheets, and formula retention notebooks that turn hesitation into speed and accuracy.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
              <span>Daily Practice Sets</span>
              <span>✓ Step-by-Step</span>
            </div>
          </div>

          {/* Bento Item 3: Medium Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-7 shadow-card border border-slate-200/80 flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 font-display">
                Regular Assessments
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Weekly topic evaluations to catch misconceptions early and ensure students stay prepared for school term exams.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700">
              Weekly Test Series
            </div>
          </div>

          {/* Bento Item 4: Medium Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-7 shadow-card border border-slate-200/80 flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-200">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 font-display">
                Structured Cyclic Revision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Planned cyclic reviews so previously learned chapters remain fresh and active in memory right up to final exams.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-bold text-purple-700">
              Long-term Retention
            </div>
          </div>

          {/* Bento Item 5: Medium Card (4 cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-7 shadow-card border border-slate-200/80 flex flex-col justify-between hover:shadow-card-hover transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-200">
                <MessagesSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2 font-display">
                Transparent Parent Updates
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Regular progress updates, attendance tracking, and actionable feedback so parents are always in the loop.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-bold text-blue-700">
              Parent Partnership
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
