import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { Code2, Terminal, CheckCircle2, Laptop, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const ComputerApplicationsPage: React.FC = () => {
  useSEO({
    title: "ICSE Grade 10 Computer Applications (BlueJ Java) Tuition in Bangalore",
    description: "Master ICSE Class 10 Computer Applications with Java in BlueJ at Navita Tuitions, Padmanabhanagar. OOP concepts, loops, arrays, strings, past board questions, and practicals."
  });

  const topics = [
    { title: "Object-Oriented Programming (OOP)", desc: "Clear understanding of Classes, Objects, Abstraction, Encapsulation, Inheritance, and Polymorphism." },
    { title: "Java Fundamentals & Data Types", desc: "Tokens, identifiers, literals, operators, type casting, Math library methods, and precedence." },
    { title: "Conditionals & Looping Constructs", desc: "Nested if-else, switch-case, for loops, while loops, do-while loops, and break/continue statements." },
    { title: "Constructors & Method Overloading", desc: "Default, non-parameterized, and parameterized constructors; static vs instance methods." },
    { title: "1D & 2D Arrays & Algorithms", desc: "Linear search, binary search, bubble sort, selection sort, and matrix manipulations." },
    { title: "String Handling & Character Class", desc: "String methods (charAt, substring, indexOf, toUpperCase), Character wrapper methods, and palindrome/piglatin programs." },
    { title: "Section A Theory & Output Tracing", desc: "Predicting outputs, loop iteration counting, finding syntax errors, and snippet evaluation." },
    { title: "ICSE Board Mock Examinations", desc: "Practicing previous 10 years board question papers and internal practical lab notebook support." }
  ];

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Courses", path: "/courses" }, { name: "ICSE Computer Applications" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-green">ICSE Grade 9 & 10 Specialty</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              ICSE Computer Applications with BlueJ
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Hands-on Java programming, Object-Oriented concept clarity, dry runs, and board examination preparation to help ICSE students score high.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Mastering Java Programming for ICSE Class 10
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Computer Applications is a high-scoring subject in ICSE when students have clarity on program structure, variables, and logic flow. Rather than memorizing Java syntax, we teach students how to think computationally and write bug-free code.
              </p>
            </div>

            {/* Syllabus Topics */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                Curriculum Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topics.map((t, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 text-brand-900 font-bold text-sm">
                      <Terminal className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{t.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5">
            <EnquiryForm
              defaultBoard="ICSE"
              defaultSubject="Computer Applications (BlueJ)"
              title="Enquire About BlueJ Java Classes"
              subtitle="Offline and interactive online options available."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
