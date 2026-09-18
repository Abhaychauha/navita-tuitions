import React from 'react';
import { 
  UserCheck, 
  Sparkles, 
  Repeat, 
  FileCheck, 
  LayoutGrid, 
  BookMarked 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { useCardTilt } from '../../hooks/useCardTilt';

const TrustCardItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientBadge: string;
  topLine: string;
}> = ({ icon, title, description, gradientBadge, topLine }) => {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = useCardTilt(4);

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 flex flex-col justify-between group overflow-hidden transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${topLine}`} />
      
      <div>
        <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shadow-xs">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-brand-900 group-hover:text-blue-700 transition-colors mb-2 font-display">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
        <span>Navita Advantage</span>
        <span className="text-blue-600">✓ Verified Pillar</span>
      </div>
    </div>
  );
};

export const TrustSection: React.FC = () => {
  const trustCards = [
    {
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      title: "Personalised Attention",
      description: "Focused teaching designed around each student's specific learning pace and understanding.",
      gradientBadge: "from-blue-500 to-indigo-600",
      topLine: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Strong Academic Foundation",
      description: "Build deep, clear concepts instead of relying only on rote memorisation.",
      gradientBadge: "from-amber-400 to-orange-500",
      topLine: "from-amber-400 to-orange-500"
    },
    {
      icon: <Repeat className="w-6 h-6 text-indigo-600" />,
      title: "Regular Practice",
      description: "Daily practice, structured revision schedules, and consistent study support.",
      gradientBadge: "from-indigo-500 to-purple-600",
      topLine: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
      title: "Exam-Focused Preparation",
      description: "Systematic preparation, previous question papers, and mock exams for school and board success.",
      gradientBadge: "from-emerald-500 to-teal-500",
      topLine: "from-emerald-500 to-teal-500"
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-purple-600" />,
      title: "Multiple Learning Options",
      description: "Flexible offline classroom learning and interactive online tuition options.",
      gradientBadge: "from-purple-500 to-pink-500",
      topLine: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookMarked className="w-6 h-6 text-cyan-600" />,
      title: "Multiple Boards Supported",
      description: "Customized curriculum alignment for ICSE, CBSE, Karnataka State Board, and NIOS students.",
      gradientBadge: "from-cyan-500 to-blue-500",
      topLine: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Parents Trust Us"
          badgeVariant="blue"
          title="Why Parents Choose Navita Tuitions"
          subtitle="A disciplined, caring environment dedicated to building your child's confidence, academic fluency, and long-term learning habits."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustCards.map((card, idx) => (
            <TrustCardItem key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
