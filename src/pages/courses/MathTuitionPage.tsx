import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { Calculator, CheckCircle2, Sparkles, BookOpen, Layers, Star, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const MathTuitionPage: React.FC = () => {
  useSEO({
    title: "Mathematics Tuition Classes in Padmanabhanagar, Bangalore | Grade 1 to 10 & 11",
    description: "Make mathematics easier to understand at Navita Tuitions. Concept building, problem solving, formula mastery, daily practice worksheets, and school exam prep in Padmanabhanagar."
  });

  const highlights = [
    { title: "Visual & Step-by-Step Concept Building", desc: "Understanding the logic behind arithmetic operations, algebraic symbols, and geometric theorems." },
    { title: "Daily Math Practice Worksheets", desc: "Graduated worksheets designed to eliminate calculation errors and build speed." },
    { title: "Formula Retention Notebooks", desc: "Structured formula sheets, identity charts, and verification techniques." },
    { title: "Individual Doubt Clarification", desc: "Patience with school textbook exercises, word problems, and school assignments." },
    { title: "Timed Unit & Board Mock Tests", desc: "Simulated exam conditions to remove math test anxiety." },
    { title: "Support Across All Curricula", desc: "Aligned with ICSE, CBSE, Karnataka State Board, and NIOS math syllabi." }
  ];

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Courses", path: "/courses" }, { name: "Mathematics Classes" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Our Core Specialty</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Make Mathematics Easier to Understand
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Personalised mathematics coaching for students from Grade 1 to Grade 10 and Grade 11 — turning confusion into clarity through daily practice and concept mastery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Why Mathematics Requires a Step-by-Step Approach
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Mathematics is a sequential subject. When a student misses a fundamental concept in fractions, algebraic signs, or geometric properties, subsequent topics become difficult to follow.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                At Navita Tuitions, we diagnose where the student is experiencing hesitation, reconstruct their foundational understanding, and provide plenty of structured practice so they solve problems independently.
              </p>
            </div>

            {/* Program Highlights Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-900 font-display">
                Key Features of Our Math Tuition
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2 text-brand-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-6 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials snippet */}
            <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100 space-y-3">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <p className="italic text-sm text-slate-700 font-medium">
                "Exceptional math tuition for school children!"
              </p>
              <span className="text-xs font-bold text-brand-900 block">— Pratheek Jayanth (Google Review)</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5">
            <EnquiryForm
              defaultSubject="Mathematics"
              title="Enquire About Math Classes"
              subtitle="Let us know your child's current grade, school board, and specific math topics."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
