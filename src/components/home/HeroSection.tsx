import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  Code2, 
  ArrowRight,
  Star,
  Trophy,
  Lightbulb,
  Compass,
  Layers
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { useMouseGlow } from '../../hooks/useMouseGlow';

export const HeroSection: React.FC = () => {
  const { containerRef, position, handleMouseMove, handleMouseLeave } = useMouseGlow();

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-sky-100/60 via-sky-50/50 to-[#F0F5FA]"
    >
      {/* Interactive Desktop Mouse Glow Ambient Follower */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 hidden md:block"
        style={{
          opacity: position.opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.04), transparent 80%)`
        }}
      />

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-amber-300/20 via-orange-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Location Badge with Pulsing Glow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-brand-900 text-xs sm:text-sm font-bold shadow-soft">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Padmanabhanagar, Bengaluru • Academic Session 2026</span>
            </div>

            {/* Redesigned Gradient Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-brand-900 tracking-tight leading-[1.12] font-display">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Strong Foundations.</span> <br />
              Achieve <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">Better Results.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Personalised tuition for students from Grade 1 to Grade 10 across ICSE, CBSE, State Board and NIOS — with focused academic support, regular practice and exam preparation.
            </p>

            {/* Quick Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 text-xs font-bold shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Personal Attention
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 text-xs font-bold shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Daily Math Practice
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200 text-slate-700 text-xs font-bold shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-purple-600" /> Offline • Online Tuition
              </span>
            </div>

            {/* 3 Redesigned Action CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              {/* Primary Consultation CTA */}
              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-extrabold text-brand-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md hover:shadow-glow-amber transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Sparkles className="w-5 h-5 text-amber-900 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-brand-950 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary WhatsApp CTA */}
              <a
                href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I would like to chat about tuition for my child.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Third Call CTA */}
              <a
                href={siteConfig.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-brand-900 bg-white/90 hover:bg-slate-50 border border-slate-200/90 shadow-xs transition-all hover:scale-102"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Education Composition (5 cols) */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
              
              {/* Central Isometric Education Showcase Card */}
              <div className="relative z-20 w-[90%] bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-elevated border border-slate-200/80 transform hover:rotate-1 transition-transform duration-500">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-900 to-blue-700 flex items-center justify-center text-white shadow-glow-blue">
                      <GraduationCap className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-brand-900 font-display leading-tight">Navita Tuitions</h4>
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Padmanabhanagar</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Grade 1–10 & 11
                  </span>
                </div>

                {/* Subject Cards inside visual */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/60 border border-blue-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        🧮
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-900">Mathematics Special</div>
                        <div className="text-[10px] text-slate-500">Concept clarity & daily worksheets</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">Grades 1–11</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-50/90 to-pink-50/60 border border-purple-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        💻
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-900">ICSE Computer Applications</div>
                        <div className="text-[10px] text-slate-500">BlueJ Java & OOP Concepts</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">ICSE 10th</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-50/90 to-orange-50/60 border border-amber-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        📚
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-900">Board Preparation</div>
                        <div className="text-[10px] text-slate-500">ICSE • CBSE • State • NIOS</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">Mock Tests</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>📍 Rajarajeshwari Complex</span>
                  <span className="text-emerald-600 font-bold">✓ Daily Doubts</span>
                </div>
              </div>

              {/* Floating Badge 1: Mathematics (Top Left) */}
              <div className="absolute -top-3 -left-4 z-30 animate-float-slow hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-blue-200">
                <span className="text-lg">📐</span>
                <div>
                  <div className="text-xs font-extrabold text-brand-900">Mathematics</div>
                  <div className="text-[10px] text-blue-600 font-semibold">Concept-First Teaching</div>
                </div>
              </div>

              {/* Floating Badge 2: Daily Practice (Top Right) */}
              <div className="absolute -top-4 -right-4 z-30 animate-float-reverse hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-emerald-200">
                <span className="text-lg">✓</span>
                <div>
                  <div className="text-xs font-extrabold text-brand-900">Daily Practice</div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Structured Revision</div>
                </div>
              </div>

              {/* Floating Badge 3: Exam Prep (Bottom Left) */}
              <div className="absolute -bottom-4 -left-6 z-30 animate-float-reverse hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-purple-200">
                <span className="text-lg">🎯</span>
                <div>
                  <div className="text-xs font-extrabold text-brand-900">Exam Preparation</div>
                  <div className="text-[10px] text-purple-600 font-semibold">Mock Tests & PYQs</div>
                </div>
              </div>

              {/* Floating Badge 4: Personal Attention (Bottom Right) */}
              <div className="absolute -bottom-3 -right-4 z-30 animate-float-slow hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-elevated border border-amber-200">
                <span className="text-lg">⭐</span>
                <div>
                  <div className="text-xs font-extrabold text-brand-900">Personal Attention</div>
                  <div className="text-[10px] text-amber-600 font-semibold">Individual Pace</div>
                </div>
              </div>

              {/* Background 3D Depth Rings */}
              <div className="absolute inset-0 rounded-full border border-blue-300/30 -z-10 scale-105 animate-pulse-glow" />
              <div className="absolute inset-0 rounded-full border border-purple-300/20 -z-10 scale-125" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
