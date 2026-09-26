import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CoreFeaturesSection } from '../components/home/CoreFeaturesSection';
import { TrustSection } from '../components/home/TrustSection';
import { PopularWorksheetsSection } from '../components/home/PopularWorksheetsSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { LearningProcess } from '../components/home/LearningProcess';
import { MathSpotlight } from '../components/home/MathSpotlight';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CoreFeaturesSection />
      <TrustSection />
      <PopularWorksheetsSection />
      <CoursesSection />
      <PhilosophySection />
      <LearningProcess />
      <MathSpotlight />
      <ReviewsSection />

      {/* Central Consultation & Enquiry Form Section */}
      <section id="enquiry" className="py-16 md:py-24 bg-[#F0F5FA] scroll-mt-28 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm
            title="Book a Free Consultation or Send an Enquiry"
            subtitle="Fill in your details below and our team will get in touch with you promptly."
          />
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
};
