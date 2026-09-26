import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Building2, 
  Calculator, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  BookOpen,
  Award
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { useCardTilt } from '../../hooks/useCardTilt';

interface FeatureCardProps {
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  ctaText: string;
  ctaLink: string;
  topLineGradient: string;
  cardGlow: string;
  decorativeElement?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  badge,
  badgeColor,
  title,
  subtitle,
  description,
  points,
  ctaText,
  ctaLink,
  topLineGradient,
  cardGlow,
  decorativeElement
}) => {
  const { cardRef, style, handleMouseMove, handleMouseLeave } = useCardTilt(4);

  return (
    <div
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative bg-white rounded-3xl p-8 sm:p-10 shadow-elevated border border-blue-200/90 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:shadow-2xl ${cardGlow}`}
    >
      {/* Top Colorful Gradient Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${topLineGradient}`} />

      {/* Background Decorative Element */}
      {decorativeElement}

      <div className="relative z-10">
        {/* Top Meta Row */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/80 border border-blue-200/80 flex items-center justify-center group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 shadow-md">
            {icon}
          </div>

          <span className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border shadow-xs ${badgeColor}`}>
            {badge}
          </span>
        </div>

        {/* Subtitle / Category */}
        <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider block mb-1">
          {subtitle}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-brand-900 group-hover:text-blue-700 transition-colors mb-3.5 font-display leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Bullet Key Points */}
        <div className="space-y-3 mb-8">
          {points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-brand-900 group-hover:text-blue-600 transition-colors"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
        </Link>

        <a
          href="/#enquiry"
          className="px-4 py-2 rounded-xl text-xs font-extrabold text-brand-950 bg-amber-400 hover:bg-amber-300 shadow-xs transition-all hover:scale-105 cursor-pointer"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
};

export const CoreFeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0F5FA] via-white to-[#F0F5FA] relative overflow-hidden border-b border-slate-100">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Core Offerings"
          badgeVariant="blue"
          title="Four Pillars of Academic Excellence"
          subtitle="Designed with structure, care, and proven teaching methods to help your child master concepts and achieve top results."
        />

        {/* 2x2 Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* 1. Online Tuition */}
          <FeatureCard
            icon={<Laptop className="w-8 h-8 text-blue-600" />}
            badge="Live Interactive Mode"
            badgeColor="bg-blue-50 text-blue-800 border-blue-200"
            subtitle="Virtual Classroom"
            title="Online Tuition"
            description="Attend interactive live classes from the safety and convenience of home, backed by dynamic digital whiteboards, screen sharing, and recorded doubt explanations."
            points={[
              "Live interactive sessions with real-time question solving",
              "Digital whiteboard demonstrations for complex derivations",
              "Curated PDF worksheet reviews & recorded recap summaries",
              "Flexible batch scheduling with regular parent progress updates"
            ]}
            ctaText="Explore Online Curriculum"
            ctaLink="/courses"
            topLineGradient="from-blue-600 via-sky-500 to-indigo-600"
            cardGlow="hover:border-blue-400"
            decorativeElement={
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-300/15 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
            }
          />

          {/* 2. Offline Tuition */}
          <FeatureCard
            icon={<Building2 className="w-8 h-8 text-indigo-700" />}
            badge="Padmanabhanagar Centre"
            badgeColor="bg-indigo-50 text-indigo-800 border-indigo-200"
            subtitle="In-Person Coaching"
            title="Offline Tuition"
            description="Focused classroom learning at our dedicated coaching centre in Padmanabhanagar, Bengaluru, featuring in-person teacher mentorship and peer collaboration."
            points={[
              "Distraction-free, structured classroom study environment",
              "Immediate in-person notebook checking and step correction",
              "Physical printed worksheets, practice drills & weekly tests",
              "Close teacher-student bonding with individual pace management"
            ]}
            ctaText="Visit Padmanabhanagar Centre"
            ctaLink="/about"
            topLineGradient="from-indigo-600 via-purple-600 to-brand-900"
            cardGlow="hover:border-indigo-400"
            decorativeElement={
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-300/15 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
            }
          />

          {/* 3. Daily Math Practice */}
          <FeatureCard
            icon={<Calculator className="w-8 h-8 text-amber-600" />}
            badge="Core Daily Habit"
            badgeColor="bg-amber-50 text-amber-800 border-amber-200"
            subtitle="Mastering Mathematics"
            title="Daily Math Practice"
            description="Deconstruct mathematical fear through visual formula proofs, speed arithmetic drills, and step-by-step logic sheets tailored for school and board examinations."
            points={[
              "Concept clarity with zero rote learning — understand 'why' formulas work",
              "Graduated difficulty worksheets from fundamental exercises to complex word problems",
              "Personalised formula retention notebooks and arithmetic shortcuts",
              "Previous years' board question papers & timed mock tests"
            ]}
            ctaText="Learn About Math Coaching"
            ctaLink="/courses"
            topLineGradient="from-amber-400 via-orange-500 to-amber-600"
            cardGlow="hover:border-amber-400"
            decorativeElement={
              <>
                {/* Floating Decorative Math Glyphs */}
                <div className="absolute top-4 right-6 text-2xl font-black text-amber-400/25 select-none font-mono pointer-events-none">
                  + − × ÷
                </div>
                <div className="absolute top-16 right-16 text-xl font-black text-amber-500/20 select-none font-mono pointer-events-none">
                  π √ x²
                </div>
                <div className="absolute bottom-20 right-8 text-3xl font-black text-amber-400/15 select-none font-mono pointer-events-none">
                  ∑ ∫ %
                </div>
              </>
            }
          />

          {/* 4. Personal Attention */}
          <FeatureCard
            icon={<UserCheck className="w-8 h-8 text-emerald-600" />}
            badge="Individual Focus"
            badgeColor="bg-emerald-50 text-emerald-800 border-emerald-200"
            subtitle="Dedicated Mentorship"
            title="Personal Attention"
            description="Every student learns differently. We tailor our teaching pace around your child's specific strengths, school curriculum, and areas that require extra support."
            points={[
              "One-on-one doubt clarification in a supportive, patient atmosphere",
              "Customized learning pace suited to the student's current school level",
              "Weekly evaluations to catch learning gaps before school term exams",
              "Regular, transparent feedback and consultations with parents"
            ]}
            ctaText="Discover Our Teaching Care"
            ctaLink="/about"
            topLineGradient="from-emerald-500 via-teal-500 to-cyan-600"
            cardGlow="hover:border-emerald-400"
            decorativeElement={
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-300/15 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
            }
          />

        </div>
      </div>
    </section>
  );
};
