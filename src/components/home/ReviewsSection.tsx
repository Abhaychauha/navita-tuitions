import React, { useState, useEffect } from 'react';
import { reviewsData } from '../../data/reviews';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowRight, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Autoplay with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeReview = reviewsData[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Google Reviews"
          badgeVariant="green"
          title="What Parents & Students Say"
          subtitle="Genuine Google review statements from parents and students across Padmanabhanagar, Banashankari, and Bengaluru."
        />

        {/* Carousel Showcase Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40 rounded-3xl p-8 sm:p-12 shadow-elevated border border-blue-200/80 relative">
            <Quote className="w-16 h-16 text-blue-200/60 absolute top-6 right-6 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6 text-amber-400">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Review Quote */}
            <p className="text-xl sm:text-2xl font-bold text-brand-900 italic leading-relaxed mb-8 font-display">
              "{activeReview.reviewText}"
            </p>

            {/* Author details & navigation row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
              <div>
                <h4 className="font-extrabold text-brand-900 text-lg font-display">
                  {activeReview.author}
                </h4>
                {activeReview.location && (
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>{activeReview.location}</span>
                  </div>
                )}
              </div>

              {/* Carousel Next / Prev Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevReview}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-brand-900 border border-slate-200 shadow-xs transition-all active:scale-95"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {reviewsData.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextReview}
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-brand-900 border border-slate-200 shadow-xs transition-all active:scale-95"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-900 font-bold text-sm transition-colors border border-slate-200"
          >
            <span>Read All Verified Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I read your reviews and want to talk about admissions.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Talk to Navita Tuitions</span>
          </a>
        </div>
      </div>
    </section>
  );
};
