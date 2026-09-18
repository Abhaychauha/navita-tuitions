import React from 'react';
import { StudyPlannerWidget } from '../widgets/StudyPlannerWidget';
import { SectionHeading } from '../common/SectionHeading';

export const StudyPlanTeaser: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Routine"
          badgeVariant="blue"
          title="Every Student Needs a Plan"
          subtitle="Navita Tuitions helps students establish daily study routines, revision schedules, practice targets, exam preparation plans, and subject-wise priorities."
        />

        <StudyPlannerWidget />
      </div>
    </section>
  );
};
