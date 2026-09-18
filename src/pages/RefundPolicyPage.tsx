import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteConfig } from '../config/siteConfig';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-200/80 space-y-6">
        <SectionHeading
          badge="Policy"
          title="Refund & Cancellation Policy"
          subtitle="Information on digital worksheet purchases and tuition fee policies at Navita Tuitions."
          centered={false}
        />

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <h3 className="font-bold text-brand-900 text-base">1. Digital Worksheet Library</h3>
          <p>
            Because our worksheet library grants immediate full digital access and downloadable PDF files, digital purchases are generally non-refundable once unlocked. If you experience technical difficulties or duplicate transactions, please contact us at {siteConfig.phone} or {siteConfig.email}.
          </p>

          <h3 className="font-bold text-brand-900 text-base">2. Tuition Class Fees</h3>
          <p>
            Tuition class fees for offline, online, and home coaching are structured on monthly or termly schedules. Refunds for tuition classes are subject to prior discussion and class attendance policies.
          </p>

          <h3 className="font-bold text-brand-900 text-base">3. Contact for Support</h3>
          <p>
            For any billing or payment support inquiries, reach out directly to Navita Tuitions, 23, 2nd Floor, Rajarajeshwari Complex, Padmanabhanagar, Bengaluru 560070.
          </p>
        </div>
      </div>
    </div>
  );
};
