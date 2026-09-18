import React from 'react';
import { authService } from '../services/authService';
import { worksheetsData } from '../data/worksheets';
import { WorksheetCard } from '../components/worksheets/WorksheetCard';
import { Link, useNavigate } from 'react-router-dom';
import { UserCheck, Sparkles, Lock, Download, LogOut, BookOpen, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  if (!currentUser) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-900 font-display">Please log in to view your account</h2>
        <Link to="/login" className="btn-primary">Log In</Link>
      </div>
    );
  }

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  const unlockedWorksheets = worksheetsData.filter(
    ws => ws.isFree || currentUser.accessStatus === 'paid' || currentUser.unlockedWorksheetIds.includes(ws.id)
  );

  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-900 to-indigo-700 text-white flex items-center justify-center text-xl font-bold shadow-glow-blue">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-brand-900 font-display">{currentUser.name}</h1>
                {currentUser.accessStatus === 'paid' ? (
                  <span className="badge-green">All Worksheets Unlocked ✓</span>
                ) : (
                  <span className="badge-academic">Free Tier</span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{currentUser.email}</p>
              {currentUser.grade && (
                <p className="text-xs font-bold text-blue-700 mt-1">
                  {currentUser.grade} • {currentUser.board}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {currentUser.accessStatus !== 'paid' && (
              <Link
                to="/checkout"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-brand-950 font-extrabold text-xs shadow-md hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-900" />
                <span>Unlock All Worksheets ({siteConfig.worksheetPrice.displayPrice})</span>
              </Link>
            )}

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* My Worksheets Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-brand-900 font-display">My Worksheet Library</h2>
              <p className="text-xs text-slate-500">Access and download your available learning resources.</p>
            </div>
            <Link to="/worksheets" className="text-xs font-bold text-blue-600 hover:underline">
              Browse All Worksheets →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unlockedWorksheets.map((ws) => (
              <WorksheetCard key={ws.id} worksheet={ws} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
