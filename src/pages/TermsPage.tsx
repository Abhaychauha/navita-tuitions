import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';
import { siteConfig } from '../config/siteConfig';

export const TermsPage: React.FC = () => {
  useSEO({
    title: "Terms & Conditions | Navita Tuitions",
    description: "Terms and conditions for tuition services and website usage at Navita Tuitions, Padmanabhanagar, Bengaluru."
  });

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Terms & Conditions" }]} />

        <div className="my-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-900 font-display mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mb-8">
            Last Updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
            <h2 className="text-xl font-bold text-brand-900 font-display">1. Academic Services</h2>
            <p>
              Navita Tuitions provides offline, online, and home academic coaching for school students. Batch schedules, frequency of classes, and subject syllabi are established upon mutual agreement during admission consultation.
            </p>

            <h2 className="text-xl font-bold text-brand-900 font-display">2. Home Tuition Availability</h2>
            <p>
              Home tuition services are subject to schedule availability and geographical location within Padmanabhanagar, Banashankari, and nearby areas.
            </p>

            <h2 className="text-xl font-bold text-brand-900 font-display">3. Attendance & Homework Discipline</h2>
            <p>
              Consistent student attendance and completion of assigned worksheets and revision tasks are essential for academic improvement.
            </p>

            <h2 className="text-xl font-bold text-brand-900 font-display">4. Contact Information</h2>
            <p>
              For any clarification regarding terms, contact Navita Tuitions at {siteConfig.phone} or visit our centre at {siteConfig.address.fullAddress}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
