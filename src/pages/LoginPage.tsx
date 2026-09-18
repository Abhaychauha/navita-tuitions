import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { GraduationCap, Lock, Mail, Sparkles, ArrowRight, Loader2 } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }

    setIsLoading(true);
    setError('');
    const res = await authService.login(email, password);
    setIsLoading(false);

    if (res.success) {
      navigate('/account');
    } else {
      setError(res.message);
    }
  };

  const handleDemoLogin = async (demoEmail: string) => {
    setIsLoading(true);
    setError('');
    const res = await authService.login(demoEmail, 'password123');
    setIsLoading(false);
    if (res.success) {
      navigate('/account');
    }
  };

  return (
    <div className="min-h-[85vh] py-12 flex items-center justify-center bg-[#F0F5FA] px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-elevated border border-slate-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Side: 3D Education Artwork */}
        <div className="md:col-span-5 bg-gradient-to-br from-brand-950 via-brand-900 to-indigo-950 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-900 flex items-center justify-center text-amber-400 border border-blue-700 shadow-glow-blue">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black font-display leading-snug">
              Welcome Back to Navita Tuitions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Access your saved worksheets, printable test papers, and personalized account dashboard.
            </p>
          </div>

          {/* Quick Demo Login Box for Evaluators */}
          <div className="relative z-10 pt-6 border-t border-slate-800 space-y-2">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
              1-Click Demo Login:
            </span>
            <button
              type="button"
              onClick={() => handleDemoLogin('free_user@example.com')}
              className="w-full text-left p-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 transition-all flex items-center justify-between"
            >
              <span>Demo Free User</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('paid_user@example.com')}
              className="w-full text-left p-2 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-xs font-bold text-amber-300 transition-all flex items-center justify-between border border-amber-400/30"
            >
              <span>Demo Paid Member (Unlocked)</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Clean Modern Form */}
        <div className="md:col-span-7 p-8 sm:p-10 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-brand-900 font-display">Log In to Your Account</h2>
            <p className="text-xs text-slate-500 mt-1">Enter your registered email to continue.</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-md hover:scale-102 active:scale-95 transition-all"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Log In</span>}
            </button>
          </form>

          <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-bold hover:underline">
              Create an Account
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
