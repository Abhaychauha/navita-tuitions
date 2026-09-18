import React from 'react';
import { boardsData } from '../../data/boards';
import { BoardCard } from '../cards/BoardCard';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BoardsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Alignment"
          badgeVariant="blue"
          title="Tuition for Your Board"
          subtitle="Every board has unique textbooks, examination blueprints, and question structures. Our teaching is closely aligned with your child's school curriculum."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {boardsData.map((board) => (
            <BoardCard key={board.id} board={board} />
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-brand-50 rounded-2xl p-6 sm:p-8 border border-brand-100 text-center max-w-3xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold text-brand-900 mb-2 font-display">
            Need Guidance on the Right Curriculum Approach?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-5 max-w-xl mx-auto">
            Whether your child is preparing for ICSE 10th boards, mastering CBSE NCERT concepts, or following State Board & NIOS, we tailor the support accordingly.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-900 text-white text-sm font-bold hover:bg-brand-800 transition-all shadow-sm"
          >
            <span>Find the Right Tuition for Your Child</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
