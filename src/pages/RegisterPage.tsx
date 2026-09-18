import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { GraduationCap, UserCheck, Mail, Lock, Loader2, Sparkles } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('Grade 5');
  const [board, setBoard] = useState('CBSE');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in required fields.');
      return;
    }

    setIsLoading(true);
    setError('');
    const res = await authService.register({ name, email, grade, board, phone });
    setIsLoading(false);

    if (res.success) {
      navigate('/worksheets');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-[85vh] py-12 flex items-center justify-center bg-[#F0F5FA] px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-elevated border border-slate-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Side */}
        <div className="md:col-span-5 bg-gradient-to-br from-brand-950 via-brand-900 to-indigo-950 p-8 text-white flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 flex items-center justify-center text-amber-400 border border-blue-700 shadow-glow-blue">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black font-display leading-snug">
              Create Your Navita Account
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Join parents and students across Bengaluru accessing curated academic worksheets and tuition guidance.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Instant free sample worksheet download
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> High-res printable test papers
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-7 p-8 sm:p-10 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-brand-900 font-display">Student / Parent Sign Up</h2>
            <p className="text-xs text-slate-500 mt-1">Fill in the details to create your account.</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Parent or Student Name"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Student Grade
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none"
                >
                  <option value="Grade 1–5">Grade 1–5</option>
                  <option value="Grade 6–8">Grade 6–8</option>
                  <option value="Grade 9–10">Grade 9–10</option>
                  <option value="Grade 11">Grade 11 Math</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Board
                </label>
                <select
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none"
                >
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="Karnataka State Board">State Board</option>
                  <option value="NIOS">NIOS</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-md hover:scale-102 active:scale-95 transition-all"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Create Account</span>}
            </button>
          </form>

          <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-bold hover:underline">
              Log In
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
