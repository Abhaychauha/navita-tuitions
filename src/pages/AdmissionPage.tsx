import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { useSEO } from '../hooks/useSEO';
import { GraduationCap, CheckCircle2, Sparkles, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AdmissionPage: React.FC = () => {
  useSEO({
    title: "Admissions & Free Consultation | Navita Tuitions Padmanabhanagar",
    description: "Give your child the right academic support. Book a free consultation and explore admissions at Navita Tuitions, Padmanabhanagar, Bengaluru."
  });

  return (
    <div className="py-8 md:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Admissions & Consultation" }]} />

        {/* Hero */}
        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Admissions Open</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Give Your Child the Right Academic Support
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Personalised coaching for Grades 1–10 across ICSE, CBSE, State Board, NIOS, and Grade 11 Mathematics in Padmanabhanagar, Bengaluru.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12 items-start">
          
          {/* Left Explanation Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-soft border border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                How Our Admission & Consultation Process Works
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-900 font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-900 text-sm sm:text-base">Submit the Enquiry Form</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Share the student's name, grade, board, required subjects, and preferred mode (offline, online, or home tuition).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-900 text-sm sm:text-base">Free Academic Consultation</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      We discuss the child's academic strengths, school syllabus requirements, and schedule constraints.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-900 text-sm sm:text-base">Customised Learning Plan</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      We establish the study routine, weekly worksheet targets, and begin classes with structured support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Perks */}
              <div className="p-5 bg-brand-50 rounded-xl border border-brand-100 space-y-2">
                <h4 className="font-bold text-brand-900 text-sm font-display flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Why Book a Consultation?</span>
                </h4>
                <ul className="text-xs text-slate-700 space-y-1.5">
                  <li>• Understand the specific syllabus requirements for your child's board.</li>
                  <li>• Clarify math fundamentals or computer application needs.</li>
                  <li>• Determine whether offline, online, or home tuition is optimal.</li>
                </ul>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-amber-400 font-bold block uppercase">Prefer Direct Call?</span>
                <span className="text-base font-bold">{siteConfig.phone}</span>
              </div>
              <div className="flex gap-2">
                <a href={siteConfig.phoneTel} className="px-4 py-2 bg-white text-brand-900 rounded-xl text-xs font-bold hover:bg-slate-100">
                  Call Now
                </a>
                <a href={siteConfig.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column (6 cols) */}
          <div className="lg:col-span-6">
            <EnquiryForm
              title="Book a Free Consultation"
              subtitle="Fill in the details below. We will reach out to schedule a conversation."
            />
          </div>

        </div>
      </div>
    </div>
  );
};
