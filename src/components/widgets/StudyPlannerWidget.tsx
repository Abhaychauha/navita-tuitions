import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Download 
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Link } from 'react-router-dom';

export const StudyPlannerWidget: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<'primary' | 'middle' | 'secondary' | 'senior'>('secondary');
  const [studyHours, setStudyHours] = useState<number>(2);

  const routines = {
    primary: {
      title: "Foundational Routine (Grade 1–5)",
      recommendedHours: "1 to 1.5 hours daily",
      focus: "Reading fluency, basic arithmetic problem solving, and homework discipline.",
      slots: [
        { time: "Slot 1 (25 mins)", task: "Daily Mathematics Practice: Multiplication tables, arithmetic worksheets & word problems." },
        { time: "Slot 2 (20 mins)", task: "Language & Reading: English grammar rules, reading comprehension & vocabulary." },
        { time: "Slot 3 (20 mins)", task: "Science/EVS Concept Review & School Homework completion." },
        { time: "Weekend (45 mins)", task: "Weekly review worksheet & light puzzle challenge." }
      ]
    },
    middle: {
      title: "Concept-Building Routine (Grade 6–8)",
      recommendedHours: "2 to 2.5 hours daily",
      focus: "Pre-algebra mastery, scientific principles, formula notebooks, and regular unit test preparation.",
      slots: [
        { time: "Slot 1 (40 mins)", task: "Mathematics: Concept exercises in Algebra/Geometry & 10 daily practice questions." },
        { time: "Slot 2 (35 mins)", task: "Science: Physics numericals, Chemistry equations & Biology diagrams." },
        { time: "Slot 3 (25 mins)", task: "Social Studies & English revision notes." },
        { time: "Weekend (1.5 hrs)", task: "Weekly chapter revision & timed worksheet test." }
      ]
    },
    secondary: {
      title: "Board Examination Routine (Grade 9–10)",
      recommendedHours: "2.5 to 3.5 hours daily",
      focus: "Syllabus completion, Previous Years' Question Papers (PYQs), timed mock papers, and error analysis.",
      slots: [
        { time: "Slot 1 (50 mins)", task: "Math Deep Practice: Trigonometry, Coordinate Geometry & ICSE/CBSE textbook problems." },
        { time: "Slot 2 (45 mins)", task: "Science & Computer Applications: Physics laws, Chem reactions, or Java BlueJ coding." },
        { time: "Slot 3 (30 mins)", task: "Formula notebook updating, error correction from previous tests & school tasks." },
        { time: "Weekend (2.5 hrs)", task: "Full chapter mock test + detailed step-wise marking evaluation." }
      ]
    },
    senior: {
      title: "Grade 11 Mathematics Focused Routine",
      recommendedHours: "2 hours daily dedicated to Mathematics",
      focus: "Sets, Functions, Trigonometric Equations, Calculus fundamentals, and multi-step proofs.",
      slots: [
        { time: "Slot 1 (50 mins)", task: "Core Concept & Theorem Understanding with textbook reference problems." },
        { time: "Slot 2 (40 mins)", task: "Advanced problem solving & competitive bridge exercises." },
        { time: "Weekend (2 hrs)", task: "Cumulative revision & timed test on high-weightage topics." }
      ]
    }
  };

  const currentRoutine = routines[selectedGrade];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-slate-100">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Interactive Routine Builder
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-900 font-display">
          Personalise Your Child's Daily Study Blueprint
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          Select the student's grade level to view an effective, balanced study framework recommended by Navita Tuitions.
        </p>
      </div>

      {/* Grade Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 bg-slate-100 p-1.5 rounded-2xl">
        <button
          type="button"
          onClick={() => setSelectedGrade('primary')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedGrade === 'primary' 
              ? 'bg-white text-brand-900 shadow-sm' 
              : 'text-slate-600 hover:text-brand-900'
          }`}
        >
          Grade 1–5 (Primary)
        </button>
        <button
          type="button"
          onClick={() => setSelectedGrade('middle')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedGrade === 'middle' 
              ? 'bg-white text-brand-900 shadow-sm' 
              : 'text-slate-600 hover:text-brand-900'
          }`}
        >
          Grade 6–8 (Middle)
        </button>
        <button
          type="button"
          onClick={() => setSelectedGrade('secondary')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedGrade === 'secondary' 
              ? 'bg-white text-brand-900 shadow-sm' 
              : 'text-slate-600 hover:text-brand-900'
          }`}
        >
          Grade 9–10 (Board)
        </button>
        <button
          type="button"
          onClick={() => setSelectedGrade('senior')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedGrade === 'senior' 
              ? 'bg-white text-brand-900 shadow-sm' 
              : 'text-slate-600 hover:text-brand-900'
          }`}
        >
          Grade 11 (Math)
        </button>
      </div>

      {/* Selected Routine Display */}
      <div className="bg-brand-50/60 rounded-2xl p-6 sm:p-8 border border-brand-100 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-100">
          <div>
            <h4 className="text-xl font-bold text-brand-900 font-display">
              {currentRoutine.title}
            </h4>
            <p className="text-slate-600 text-sm mt-1">
              {currentRoutine.focus}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-brand-900 text-xs font-bold shadow-sm border border-brand-200 shrink-0">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Target: {currentRoutine.recommendedHours}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {currentRoutine.slots.map((slot, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-brand-100 shadow-soft">
              <span className="text-xs font-bold text-amber-700 block mb-1">
                {slot.time}
              </span>
              <p className="text-sm font-medium text-slate-800">
                {slot.task}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action within widget */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-gradient-to-r from-brand-900 to-brand-800 rounded-2xl text-white">
        <div>
          <h5 className="font-bold text-base text-white font-display">
            Need a Customized Study Plan for Your Child?
          </h5>
          <p className="text-xs sm:text-sm text-slate-300">
            We help analyze strengths, weaknesses, and exam dates to create an individual study timetable.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/admissions"
            className="px-5 py-2.5 rounded-xl bg-amber-400 text-brand-950 font-bold text-xs sm:text-sm hover:bg-amber-300 transition-colors shadow-sm"
          >
            Create a Study Plan
          </Link>
        </div>
      </div>
    </div>
  );
};
