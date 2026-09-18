import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { Building2, Laptop, Home as HomeIcon, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const TuitionModes: React.FC = () => {
  const modes = [
    {
      title: "Offline Tuition",
      subtitle: "Padmanabhanagar Centre",
      icon: <Building2 className="w-7 h-7 text-brand-900" />,
      desc: "Learn in a focused classroom environment at Navita Tuitions in Padmanabhanagar, with structured whiteboards, face-to-face doubts, and peer learning.",
      features: [
        "In-person teacher guidance and immediate notebook correction",
        "Quiet, distraction-free academic study setting",
        "Weekly physical tests and worksheet evaluations"
      ],
      path: "/contact",
      linkText: "Visit Centre"
    },
    {
      title: "Online Tuition",
      subtitle: "Interactive Virtual Classes",
      icon: <Laptop className="w-7 h-7 text-amber-600" />,
      desc: "Attend live classes remotely with structured academic support, digital whiteboards, screen sharing, and recorded doubt clarification materials.",
      features: [
        "Learn from the safety and convenience of home",
        "Digital question solving and shared online notes",
        "Flexible batch scheduling options"
      ],
      path: "/modes/online",
      linkText: "Explore Online Mode"
    },
    {
      title: "Home Tuition",
      subtitle: "Personalised In-Home Support",
      icon: <HomeIcon className="w-7 h-7 text-emerald-600" />,
      desc: "Personalised learning support at home, subject to teacher availability and location within Padmanabhanagar, Banashankari and nearby areas.",
      features: [
        "Dedicated one-on-one attention for the child",
        "Tailored entirely around the child's school pace",
        "Direct and frequent parent-teacher updates"
      ],
      path: "/modes/home",
      linkText: "Enquire Home Tuition"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Learning Flexibility"
          badgeVariant="blue"
          title="Choose the Learning Mode That Suits Your Child"
          subtitle="We provide three adaptable formats so every student receives the ideal academic support."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {modes.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-7 shadow-soft border border-slate-100 flex flex-col justify-between card-hover-effect">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {m.icon}
                </div>

                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  {m.subtitle}
                </span>

                <h3 className="text-xl font-bold text-brand-900 mb-3 font-display">
                  {m.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {m.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {m.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={m.path}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-900 hover:text-amber-600 transition-colors"
                >
                  <span>{m.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.getWhatsAppUrl(`Hello Navita Tuitions, I want to enquire about ${m.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-900 text-white font-bold text-sm hover:bg-brand-800 transition-all shadow-sm"
          >
            <span>Explore Tuition Options & Availability</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
