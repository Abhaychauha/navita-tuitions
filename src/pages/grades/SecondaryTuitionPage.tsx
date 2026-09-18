import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, CheckCircle2, Award, Target } from 'lucide-react';

export const SecondaryTuitionPage: React.FC = () => {
  useSEO({
    title: "Grade 9–10 Board Preparation in Padmanabhanagar, Bangalore | ICSE, CBSE & State",
    description: "Intensive Class 9 & 10 board exam preparation at Navita Tuitions, Padmanabhanagar. Mathematics, Science, BlueJ Computer Applications, past board question papers, and mock exams."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Courses", path: "/courses" }, { name: "Grade 9–10 Board Prep" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Board Exam Intensive</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Grade 9–10 Board Examination Preparation
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Focused academic support, rigorous practice, past years' board papers, and personalized doubt clearing for Class 10 success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Strategic Preparation for Class 10 Board Examinations
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Grade 9 establishes the base concepts, while Grade 10 requires strategic answer presentation, speed, accuracy, and thorough revision of past board question papers.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We provide intensive coaching for ICSE, CBSE, Karnataka SSLC, and NIOS, with specific focus on Mathematics, Science, and Computer Applications.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-brand-900 text-lg font-display">Our Board Preparation Package Includes:</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>PYQs Breakdown:</strong> Solving previous 10 years' questions organized chapter-wise.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Timed Mock Exams:</strong> Strict simulation of board exam conditions and marking rubrics.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Answer Presentation Tips:</strong> Step-wise working, highlighting keywords, and neat diagrams.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EnquiryForm
              defaultGrade="Grade 9–10 (Board Prep)"
              title="Enquire for Board Prep"
              subtitle="Offline centre, online, and home tuition options."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
