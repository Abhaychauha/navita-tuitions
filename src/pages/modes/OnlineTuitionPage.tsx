import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { Laptop, CheckCircle2, Video, FileText, Sparkles } from 'lucide-react';

export const OnlineTuitionPage: React.FC = () => {
  useSEO({
    title: "Online Tuition Classes in Bangalore | Navita Tuitions",
    description: "Attend interactive live online tuition with Navita Tuitions. Digital whiteboards, structured study notes, recorded doubt support, and personalized attention across ICSE, CBSE, and State Board."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Tuition Modes", path: "/courses" }, { name: "Online Tuition" }]} />

        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Flexible Remote Learning</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Interactive Online Tuition
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Attend live classes remotely with structured academic support, digital whiteboards, shared problem sets, and individual doubt clearing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                How Our Online Tuition Works
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Our online classes are interactive, engaging, and personal. We use high-resolution digital whiteboards for math and science problem solving, screen-sharing for BlueJ Java code demonstrations, and digital assignment checks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <Video className="w-6 h-6 text-brand-800 mb-2" />
                <h4 className="font-bold text-brand-900 text-sm mb-1">Live Interactive Sessions</h4>
                <p className="text-xs text-slate-600">Active two-way audio and video dialogue to clear every doubt instantly.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <FileText className="w-6 h-6 text-amber-600 mb-2" />
                <h4 className="font-bold text-brand-900 text-sm mb-1">Digital Worksheets</h4>
                <p className="text-xs text-slate-600">Chapter-wise PDF practice sets sent before each unit test.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EnquiryForm
              title="Enquire About Online Classes"
              subtitle="Schedule an online consultation to test our platform setup."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
