import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { CourseCard } from '../components/cards/CourseCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { BookOpen, Layers, GraduationCap, Calculator, Code2, Users, Laptop, Home } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const CoursesPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'all' | 'grades' | 'boards' | 'subjects' | 'modes'>('all');

  useEffect(() => {
    if (location.pathname.startsWith('/grades')) {
      setActiveTab('grades');
    } else if (location.pathname.startsWith('/boards')) {
      setActiveTab('boards');
    } else if (location.pathname.startsWith('/modes')) {
      setActiveTab('modes');
    } else if (location.pathname.includes('mathematics') || location.pathname.includes('computer')) {
      setActiveTab('subjects');
    }
  }, [location.pathname]);

  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Curriculum"
          badgeVariant="blue"
          title="All Courses & Tuition Programs"
          subtitle="Explore comprehensive coaching from Grade 1 to Grade 10 across ICSE, CBSE, State Board and NIOS, plus Grade 11 Mathematics."
        />

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === 'all'
                ? 'bg-brand-900 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            All Programs
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('grades')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === 'grades'
                ? 'bg-brand-900 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            By Grade (1–5 • 6–8 • 9–10 • 11)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('boards')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === 'boards'
                ? 'bg-brand-900 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            By Board (ICSE • CBSE • State • NIOS)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('subjects')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === 'subjects'
                ? 'bg-brand-900 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            Specialized Subjects (Math • BlueJ)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('modes')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all ${
              activeTab === 'modes'
                ? 'bg-brand-900 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200'
            }`}
          >
            Tuition Modes (Offline • Online)
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Tuition Modes Feature Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-blue-200/80">
          <h3 className="text-2xl font-black text-brand-900 font-display mb-2 text-center">
            Choose Your Preferred Learning Mode
          </h3>
          <p className="text-slate-600 text-sm text-center max-w-2xl mx-auto mb-8">
            Whether your child learns best in a disciplined offline classroom in Padmanabhanagar or from the comfort of home online, we provide the exact same quality of teaching.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-blue-50/80 border border-blue-300 text-center space-y-3 shadow-soft">
              <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center mx-auto shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-900 font-display">Offline Centre Tuition</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Disciplined classroom learning at our Padmanabhanagar coaching centre with in-person mentorship, daily physical worksheets, and immediate doubt clearing.</p>
              <div className="pt-2">
                <span className="badge-academic">Padmanabhanagar Centre</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/80 border border-blue-300 text-center space-y-3 shadow-soft">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md">
                <Laptop className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-900 font-display">Live Online Tuition</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Interactive live online classes with interactive digital whiteboards, digital worksheet reviews, and recorded recap sessions from the comfort of home.</p>
              <div className="pt-2">
                <span className="badge-academic">Live Interactive</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
