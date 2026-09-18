import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, CheckCircle2, Sparkles, Heart } from 'lucide-react';

export const PrimaryTuitionPage: React.FC = () => {
  useSEO({
    title: "Primary School Tuition (Grade 1–5) in Padmanabhanagar, Bangalore",
    description: "Build strong fundamentals in mathematics, English grammar, and school subjects for Grade 1 to 5 students at Navita Tuitions, Padmanabhanagar."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Courses", path: "/courses" }, { name: "Primary Tuition (Grade 1–5)" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Foundational Learning</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Primary School Tuition (Grade 1–5)
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Build strong fundamentals in mathematics, English, and core school subjects through patient, concept-first teaching and disciplined homework routines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Nurturing Foundational Confidence Early On
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Early schooling years set the pattern for how a child views learning. When children struggle silently with arithmetic or reading, learning becomes stressful.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                At Navita Tuitions, we provide encouraging, patient support that makes numbers, words, and science concepts enjoyable and clear.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-brand-900 text-lg font-display">What Primary Students Learn With Us:</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mathematics:</strong> Number sense, addition/subtraction fluency, multiplication tables, mental math & word problems.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>English Language:</strong> Grammar basics, reading comprehension, spelling, and neat handwriting discipline.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Environmental Studies / Science:</strong> Basic scientific concepts, observation skills, and homework help.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EnquiryForm
              defaultGrade="Grade 1–5 (Primary)"
              title="Enquire for Primary Tuition"
              subtitle="Choose offline, online, or home tuition."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
