import React from 'react';
import { programsData } from '../../data/programs';
import { ProgramCard } from '../cards/ProgramCard';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, Sun } from 'lucide-react';

export const SummerTeaser: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Vacation Programs"
          badgeVariant="amber"
          title="Summer Programs: Creativia & Academic Bridge"
          subtitle="Keep young minds active, creative, and academically ready during school breaks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programsData.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
