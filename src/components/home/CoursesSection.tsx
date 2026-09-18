import React from 'react';
import { coursesData } from '../../data/courses';
import { CourseCard } from '../cards/CourseCard';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const CoursesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Classes"
          badgeVariant="blue"
          title="Comprehensive Tuition Classes for Every Stage"
          subtitle="From foundational primary arithmetic to board examination mastery in Grade 10 and Grade 11 Mathematics."
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

          {/* Daily Math Practice Feature Card */}
          <div className="bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-2xl p-6 sm:p-7 shadow-card flex flex-col justify-between card-hover-effect">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
                Core Habit
              </span>
              <h3 className="text-xl font-bold text-white mb-2.5 font-display">
                Daily Math Practice
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Structured daily math problem sets, speed drills, and doubt-clearing sessions to build mathematical intuition and speed.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">✓ Graduated difficulty worksheets</li>
                <li className="flex items-center gap-2">✓ Step-wise calculation check</li>
                <li className="flex items-center gap-2">✓ Formula retention notebooks</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-800 flex items-center justify-between">
              <Link to="/courses/mathematics" className="text-xs sm:text-sm font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1">
                <span>Explore Math Program</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Study Plans & Practice Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-amber-100 flex flex-col justify-between card-hover-effect">
            <div>
              <span className="badge-amber mb-3">Routine Building</span>
              <h3 className="text-xl font-bold text-brand-900 mb-2.5 font-display">
                Study Plans & Practice
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Personalised study planning, revision timetables, and regular practice targets designed to keep students organized and stress-free.
              </p>
              <ul className="text-xs text-slate-700 space-y-2 mb-6">
                <li className="flex items-center gap-2">✓ Daily homework schedules</li>
                <li className="flex items-center gap-2">✓ Chapter-wise revision targets</li>
                <li className="flex items-center gap-2">✓ Pre-exam preparation roadmaps</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link to="/study-plans" className="text-xs sm:text-sm font-bold text-brand-900 hover:text-amber-600 flex items-center gap-1">
                <span>View Study Frameworks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section bottom CTA banner */}
        <div className="text-center pt-2">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-brand-900 font-bold text-sm border border-slate-200 shadow-sm transition-all"
          >
            <span>View All Courses & Grade Offerings</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>
      </div>
    </section>
  );
};
