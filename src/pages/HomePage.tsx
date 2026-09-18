import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustSection } from '../components/home/TrustSection';
import { PopularWorksheetsSection } from '../components/home/PopularWorksheetsSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { LearningProcess } from '../components/home/LearningProcess';
import { MathSpotlight } from '../components/home/MathSpotlight';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustSection />
      <PopularWorksheetsSection />
      <CoursesSection />
      <PhilosophySection />
      <LearningProcess />
      <MathSpotlight />
      <ReviewsSection />
      <FinalCTASection />
    </div>
  );
};
