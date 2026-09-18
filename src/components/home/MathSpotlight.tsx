import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const MathSpotlight: React.FC = () => {
  const mathFeatures = [
    { title: "Concept Building", desc: "Visual proofs and step-by-step logic behind every arithmetic and algebraic rule." },
    { title: "Problem Solving", desc: "Graduated worksheets from basic exercises to multi-step word problems." },
    { title: "Daily Math Practice", desc: "Short daily problem sets to build speed, accuracy, and mental agility." },
    { title: "Formula Retention Sheets", desc: "Personalized formula charts and quick algebraic verification techniques." },
    { title: "Individual Doubt Clearing", desc: "Dedicated attention to school textbook exercises and homework." },
    { title: "Board Exam Preparation", desc: "Previous years' questions, timed sections, and step-wise marking tips." }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-950 via-brand-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative Glowing Math Arcs */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Calculator className="w-4 h-4 text-amber-400" />
              Specialized Core Offering
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
              Make Mathematics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                Easier to Understand
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Mathematics often becomes a source of anxiety when fundamentals are skipped. At Navita Tuitions, we deconstruct math into clear, manageable steps so students build genuine analytical intuition and solve problems with confidence.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/courses/mathematics"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-brand-950 font-extrabold text-sm hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md hover:shadow-glow-amber"
              >
                <span>Enquire About Math Tuition</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I would like to enquire about Mathematics tuition classes.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Mathematics Composition */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-elevated relative">
              
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white font-display">
                  Comprehensive Mathematics Modules
                </h3>
                <span className="text-xs font-bold px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/30">
                  Grades 1–10 & 11
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mathFeatures.map((f, idx) => (
                  <div key={idx} className="bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{f.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Floating Equation Badges around card */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 bg-amber-400 text-brand-950 rounded-xl font-mono font-bold text-xs shadow-lg animate-float-slow hidden sm:block">
                x² + y² = r²
              </div>
              <div className="absolute -bottom-3 -left-3 px-3.5 py-1.5 bg-blue-500 text-white rounded-xl font-mono font-bold text-xs shadow-lg animate-float-reverse hidden sm:block">
                √25 = 5 • π ≈ 3.14
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
