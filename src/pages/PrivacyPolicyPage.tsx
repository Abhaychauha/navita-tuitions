import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useSEO } from '../hooks/useSEO';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  useSEO({
    title: "Privacy Policy | Navita Tuitions",
    description: "Privacy policy and data protection commitments for Navita Tuitions, Padmanabhanagar, Bengaluru."
  });

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Privacy Policy" }]} />

        <div className="my-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-900 font-display mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mb-8">
            Last Updated: January 2026
          </p>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-6 text-slate-700">
            <p>
              Navita Tuitions ("we", "our", or "the tuition centre") respects your privacy and is committed to protecting the personal information you share with us when browsing our website or submitting an admission enquiry.
            </p>

            <h2 className="text-xl font-bold text-brand-900 font-display">1. Information We Collect</h2>
            <p>
              When you submit an enquiry form or contact us via WhatsApp/Phone, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Parent / Student Name</li>
              <li>Phone Number / Mobile Contact</li>
              <li>Email Address (if provided)</li>
              <li>Student Grade, Curriculum Board, and Subjects required</li>
              <li>Preferred tuition mode (Offline, Online, or Home Tuition)</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-900 font-display">2. How We Use Your Information</h2>
            <p>
              The information you provide is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your academic enquiries and provide details about courses and schedules.</li>
              <li>Schedule consultations and coordinate trial or regular tuition classes.</li>
              <li>Communicate student progress updates to parents.</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-900 font-display">3. Information Protection</h2>
            <p>
              We do not sell, rent, trade, or distribute your personal contact information to any third-party marketing companies. Your details are kept confidential.
            </p>

            <h2 className="text-xl font-bold text-brand-900 font-display">4. Contact Us</h2>
            <p>
              For questions regarding our privacy practices, you may contact us at:
            </p>
            <p className="font-semibold text-brand-900">
              Navita Tuitions<br />
              {siteConfig.address.fullAddress}<br />
              Phone: {siteConfig.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
