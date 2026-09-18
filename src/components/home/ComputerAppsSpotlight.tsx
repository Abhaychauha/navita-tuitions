import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, CheckCircle2, ArrowRight, Terminal } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const ComputerAppsSpotlight: React.FC = () => {
  const topics = [
    { title: "Java Fundamentals", desc: "Data types, operators, precedence, and standard input/output." },
    { title: "Programming Concepts", desc: "Conditionals, iterative loops (for, while, do-while) & nested iterations." },
    { title: "Problem Solving", desc: "Number manipulation, series generation, and pattern programming." },
    { title: "Practical Understanding", desc: "Writing, compiling, running, and debugging Java programs with BlueJ." },
    { title: "BlueJ-Based Learning", desc: "Understanding classes, objects, method overloading, and constructors visually." },
    { title: "Examination Preparation", desc: "Solving Section A theoretical dry-runs and Section B full-length coding problems." }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-elevated">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Terminal className="w-3.5 h-3.5" />
                ICSE Class 10 High-Scoring Subject
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
                ICSE Grade 10 Computer Applications (BlueJ)
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Computer Applications is one of the highest scoring subjects in ICSE when students master core Java programming logic and OOP principles. We provide structured coding practice and exam problem walkthroughs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {topics.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">{t.title}:</strong> {t.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/courses/computer-applications"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-brand-950 font-bold text-sm hover:bg-amber-300 transition-colors shadow-sm"
                >
                  <span>Enquire About Computer Applications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I want to enquire about ICSE Computer Applications (BlueJ) coaching.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
                >
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-500 font-sans">
                <span>Sample BlueJ Java Snippet</span>
                <span className="text-emerald-400 text-[10px]">ICSE Standard</span>
              </div>
              <p className="text-emerald-400">// Object-Oriented Concept Mastery</p>
              <p><span className="text-purple-400">public class</span> <span className="text-yellow-300">NumberProcessor</span> &#123;</p>
              <p className="pl-4"><span className="text-purple-400">public static void</span> <span className="text-blue-300">main</span>(String args[]) &#123;</p>
              <p className="pl-8 text-slate-400">// Clean syntax, dry runs & loop tracing</p>
              <p className="pl-8"><span className="text-purple-400">int</span> n = 153, sum = 0;</p>
              <p className="pl-8"><span className="text-purple-400">while</span>(n &gt; 0) &#123;</p>
              <p className="pl-12">sum += Math.pow(n % 10, 3);</p>
              <p className="pl-12">n /= 10;</p>
              <p className="pl-8">&#125;</p>
              <p className="pl-8 text-amber-300">System.out.println("Result verified!");</p>
              <p className="pl-4">&#125;</p>
              <p>&#125;</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
