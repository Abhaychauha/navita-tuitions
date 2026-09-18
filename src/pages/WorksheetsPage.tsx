import React, { useState, useMemo } from 'react';
import { worksheetsData } from '../data/worksheets';
import { WorksheetCard } from '../components/worksheets/WorksheetCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { Search, Filter, Sparkles, BookOpen, Layers, Lock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { Link } from 'react-router-dom';
import { authService } from '../services/authService';

export const WorksheetsPage: React.FC = () => {
  const currentUser = authService.getCurrentUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedBoard, setSelectedBoard] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedAccess, setSelectedAccess] = useState<'all' | 'free' | 'premium'>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'newest' | 'pages'>('recommended');

  const filteredWorksheets = useMemo(() => {
    return worksheetsData.filter((ws) => {
      // Search
      const searchMatch = !searchTerm || 
        ws.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ws.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ws.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ws.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

      // Grade
      const gradeMatch = selectedGrade === 'all' || ws.grade.toString() === selectedGrade;

      // Board
      const boardMatch = selectedBoard === 'all' || ws.board.toLowerCase().includes(selectedBoard.toLowerCase());

      // Subject
      const subjectMatch = selectedSubject === 'all' || ws.subject.toLowerCase().includes(selectedSubject.toLowerCase());

      // Access
      const accessMatch = 
        selectedAccess === 'all' || 
        (selectedAccess === 'free' && ws.isFree) || 
        (selectedAccess === 'premium' && !ws.isFree);

      return searchMatch && gradeMatch && boardMatch && subjectMatch && accessMatch;
    }).sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sortBy === 'pages') return b.pages - a.pages;
      // Recommended: free first, then by date
      if (a.isFree && !b.isFree) return -1;
      if (!a.isFree && b.isFree) return 1;
      return 0;
    });
  }, [searchTerm, selectedGrade, selectedBoard, selectedSubject, selectedAccess, sortBy]);

  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          badge="Educational Resource Marketplace"
          badgeVariant="amber"
          title="Worksheet Library"
          subtitle="Explore authentic practice papers across Grades 1–10. Download free question papers or unlock the complete library."
        />

        {/* Pricing Ribbon for Unpaid Users */}
        {(!currentUser || currentUser.accessStatus !== 'paid') && (
          <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-brand-950 via-brand-900 to-indigo-950 text-white shadow-elevated border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="badge-amber">Special Offer</span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-white">
                Unlock All Worksheets for Just {siteConfig.worksheetPrice.displayPrice}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                One-time purchase • Unlimited PDF downloads • Mathematics, Science, English, EVS & Computer Applications
              </p>
            </div>
            <Link
              to={currentUser ? "/checkout" : "/login"}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-brand-950 font-extrabold text-sm shadow-md hover:scale-105 transition-all whitespace-nowrap"
            >
              {currentUser ? "Unlock All Worksheets" : "Login & Unlock Library"}
            </Link>
          </div>
        )}

        {/* Search & Filters Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-blue-200/80 mb-10 space-y-4">
          {/* Top Row: Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by subject, topic (e.g. Science, Fractions, Direct Variation, EVS, Tenses)..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-blue-50/50 border border-blue-200 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Grade</label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-semibold focus:outline-none"
              >
                <option value="all">All Grades (1–11)</option>
                <option value="1">Grade 1 (EVS)</option>
                <option value="5">Grade 5 (English/Math)</option>
                <option value="6">Grade 6 (Math CBSE)</option>
                <option value="7">Grade 7 (Math ICSE)</option>
                <option value="8">Grade 8 (Math ICSE)</option>
                <option value="10">Grade 10 (Science / BlueJ)</option>
                <option value="11">Grade 11 (Math)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Board</label>
              <select
                value={selectedBoard}
                onChange={(e) => setSelectedBoard(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-semibold focus:outline-none"
              >
                <option value="all">All Boards</option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
                <option value="state">Karnataka State Board</option>
                <option value="nios">NIOS</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-semibold focus:outline-none"
              >
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="science">Science</option>
                <option value="english">English Grammar</option>
                <option value="evs">EVS</option>
                <option value="computer">Computer Applications</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Access</label>
              <select
                value={selectedAccess}
                onChange={(e) => setSelectedAccess(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-semibold focus:outline-none"
              >
                <option value="all">All Access</option>
                <option value="free">Free Samples Only</option>
                <option value="premium">Premium Only</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-semibold focus:outline-none"
              >
                <option value="recommended">Recommended</option>
                <option value="newest">Newest Added</option>
                <option value="pages">Most Pages</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count & Grid */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-bold text-slate-600">
            Showing <span className="text-brand-900 font-extrabold">{filteredWorksheets.length}</span> worksheets & question papers
          </p>
          {(searchTerm || selectedGrade !== 'all' || selectedBoard !== 'all' || selectedSubject !== 'all' || selectedAccess !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedGrade('all');
                setSelectedBoard('all');
                setSelectedSubject('all');
                setSelectedAccess('all');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredWorksheets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredWorksheets.map((ws) => (
              <WorksheetCard key={ws.id} worksheet={ws} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center shadow-card border border-blue-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-brand-900 mb-1">No worksheets found</h4>
            <p className="text-slate-500 text-xs sm:text-sm">Try resetting your search or adjusting the filters.</p>
          </div>
        )}

      </div>
    </div>
  );
};
