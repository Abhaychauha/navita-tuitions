import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { worksheetService } from '../services/worksheetService';
import { WorksheetViewer } from '../components/worksheets/WorksheetViewer';
import { Sparkles, Lock, ArrowLeft, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { authService } from '../services/authService';

export const WorksheetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const worksheet = id ? worksheetService.getWorksheetById(id) : undefined;
  const currentUser = authService.getCurrentUser();

  if (!worksheet) {
    return <Navigate to="/worksheets" replace />;
  }

  const access = worksheetService.checkAccess(worksheet, currentUser);

  return (
    <div className="py-10 md:py-16 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation row */}
        <div className="flex items-center justify-between">
          <Link
            to="/worksheets"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-900 hover:text-blue-600 transition-colors bg-white px-3.5 py-2 rounded-xl shadow-xs border border-blue-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Worksheet Library</span>
          </Link>

          <div className="flex items-center gap-2">
            {worksheet.isFree ? (
              <span className="badge-green">✓ Free Access</span>
            ) : access.hasFullAccess ? (
              <span className="badge-academic">✓ Unlocked Member</span>
            ) : (
              <span className="badge-amber">🔒 Premium Resource</span>
            )}
          </div>
        </div>

        {/* Title and Metadata Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-blue-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
            <span className="px-2.5 py-0.5 rounded-md bg-sky-100 text-blue-900">Grade {worksheet.grade}</span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-800">{worksheet.board}</span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-800">{worksheet.subject}</span>
            <span>•</span>
            <span>{worksheet.pages} Total Pages</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-900 font-display">
            {worksheet.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {worksheet.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {worksheet.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-lg bg-blue-50 text-sky-800 text-xs font-semibold border border-sky-100">
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Document Viewer */}
        <WorksheetViewer worksheet={worksheet} />

      </div>
    </div>
  );
};
