import React, { useState } from 'react';
import { Worksheet } from '../../types';
import { Lock, Download, Printer, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/authService';
import { worksheetService } from '../../services/worksheetService';
import { siteConfig } from '../../config/siteConfig';

interface WorksheetViewerProps {
  worksheet: Worksheet;
}

export const WorksheetViewer: React.FC<WorksheetViewerProps> = ({ worksheet }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentUser = authService.getCurrentUser();
  const access = worksheetService.checkAccess(worksheet, currentUser);

  const handlePrint = () => {
    window.print();
  };

  // If worksheet is free, full 4 pages are available
  const pages = worksheet.pagesContent || [];

  return (
    <div className="space-y-6">
      {/* Top Controls Bar (Hidden during window.print) */}
      <div className="print:hidden bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Document View:
          </span>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {[1, 2, 3, 4].slice(0, worksheet.pages).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setCurrentPage(p)}
                className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all ${
                  currentPage === p
                    ? 'bg-brand-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-brand-900'
                }`}
              >
                Page {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-brand-900 rounded-xl text-xs font-bold transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>

          {worksheet.isFree || access.hasFullAccess ? (
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-xs font-extrabold shadow-sm hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          ) : (
            <Link
              to={currentUser ? "/checkout" : "/login"}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-400 to-amber-300 text-brand-950 rounded-xl text-xs font-extrabold shadow-sm hover:scale-105 transition-all"
            >
              <Lock className="w-4 h-4" />
              <span>Unlock Full PDF</span>
            </Link>
          )}
        </div>
      </div>

      {/* Main Worksheet Paper Simulation (White A4 style sheet) */}
      <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-elevated border border-slate-300/80 max-w-4xl mx-auto relative overflow-hidden font-sans text-slate-900">
        
        {/* Header Strip */}
        <div className="border-b-2 border-brand-900 pb-5 mb-8 text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-brand-900 uppercase font-display">
            {worksheet.title}
          </h2>
          <p className="text-sm font-semibold text-slate-600">
            Grade {worksheet.grade} {worksheet.board} • {worksheet.difficulty}
          </p>

          {/* Student Info Box */}
          <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700 text-left bg-slate-50/60 p-3 rounded-xl">
            <div>Name: _______________________</div>
            <div>Roll No: __________</div>
            <div>Date: ______________</div>
          </div>
        </div>

        {/* Free Worksheet: Renders Actual 4-Page Content */}
        {worksheet.isFree && pages.length > 0 ? (
          <div>
            {pages
              .filter(p => p.pageNumber === currentPage)
              .map((p) => (
                <div key={p.pageNumber} className="space-y-8 animate-in fade-in duration-200">
                  {p.sections.map((sec, secIdx) => (
                    <div key={secIdx} className="space-y-3">
                      <h3 className="font-extrabold text-sm sm:text-base text-brand-950 flex items-start gap-1.5">
                        <span>{sec.sectionNumber}.</span>
                        <span>{sec.title}</span>
                      </h3>
                      {sec.instructions && (
                        <p className="text-xs italic text-slate-600 pl-4 font-medium">
                          {sec.instructions}
                        </p>
                      )}
                      <div className="space-y-3.5 pl-4">
                        {sec.questions.map((q) => (
                          <div key={q.number} className="text-xs sm:text-sm text-slate-800 space-y-1">
                            <div className="flex items-start gap-2">
                              <span className="font-bold text-slate-600">{q.number}.</span>
                              <span className="leading-relaxed">{q.text}</span>
                            </div>
                            {q.subtext && (
                              <p className="text-xs italic text-slate-500 pl-4">{q.subtext}</p>
                            )}
                            {q.prompt && (
                              <div className="pl-4 pt-1 text-xs text-slate-400">
                                __________________________________________________________________________________
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="pt-8 border-t border-slate-200 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Page {p.pageNumber} of {worksheet.pages} • Navita Tuitions Padmanabhanagar
                  </div>
                </div>
              ))}
          </div>
        ) : (
          /* Premium Worksheet Simulation */
          <div className="relative">
            {/* Page 1 Preview (Visible with watermark) */}
            <div className="space-y-6 filter select-none">
              <div className="space-y-4">
                <h3 className="font-extrabold text-base text-brand-950">1. Section A: Foundational Exercises</h3>
                <div className="space-y-2.5 pl-4 text-sm text-slate-700">
                  <p>1. Solve the following conceptual problem set step-by-step...</p>
                  <p>2. Calculate the perimeter and area of the composite geometric structure...</p>
                  <p>3. Derive the quadratic relationship for given Cartesian points...</p>
                </div>
              </div>

              {/* Watermark */}
              <div className="py-12 text-center text-slate-300 font-extrabold text-3xl tracking-widest uppercase border-y border-dashed border-slate-200">
                PREVIEW ONLY • NAVITA TUITIONS
              </div>
            </div>

            {/* Lock Overlay for Unpaid Users */}
            {!access.hasFullAccess && (
              <div className="absolute inset-0 bg-white/85 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-4 z-20 border border-amber-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-brand-950 shadow-glow-amber">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="max-w-md space-y-2">
                  <span className="badge-amber">Premium Resource</span>
                  <h3 className="text-2xl font-black text-brand-900 font-display">
                    Unlock the Complete Worksheet Library
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Get unlimited printable PDF access to all worksheets across Grades 1–10 (ICSE, CBSE, State Board & NIOS) for a one-time fee of {siteConfig.worksheetPrice.displayPrice}.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={currentUser ? "/checkout" : "/login"}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-brand-950 font-extrabold text-sm shadow-md hover:scale-105 transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-amber-900" />
                    <span>{currentUser ? "Unlock All Worksheets" : "Login / Register to Unlock"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
