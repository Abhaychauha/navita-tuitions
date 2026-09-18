import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { useSEO } from '../../hooks/useSEO';
import { Home as HomeIcon, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const HomeTuitionPage: React.FC = () => {
  useSEO({
    title: "Home Tuition in Padmanabhanagar & Banashankari, Bangalore | Navita Tuitions",
    description: "One-on-one personalized home tuition in Padmanabhanagar, Banashankari, Kumaraswamy Layout, and Uttarahalli. Subject to slot and teacher availability."
  });

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Tuition Modes", path: "/courses" }, { name: "Home Tuition" }]} />

        <div className="my-6 p-8 sm:p-12 rounded-3xl bg-brand-900 text-white shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="badge-amber">Personalised In-Home Support</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Home Tuition Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              One-on-one personalized learning support at your residence in and around Padmanabhanagar, Bengaluru, subject to schedule availability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-4">
              <h2 className="text-2xl font-bold text-brand-900 font-display">
                Dedicated One-on-One Attention at Home
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Home tuition provides completely customized academic focus for students who need individual pacing, intensive math remedial support, or a distraction-free home study environment.
              </p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950">
                <strong>Note on Availability:</strong> Home tuition slots are limited and scheduled based on teacher availability and geographical proximity within South Bengaluru.
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-soft border border-slate-100 space-y-3">
              <h3 className="font-bold text-brand-900 text-base font-display">
                Service Areas for Home Tuition:
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.neighbourhoods.map((area) => (
                  <span key={area} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EnquiryForm
              title="Enquire About Home Tuition"
              subtitle="Let us know your area and preferred days/timings."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
