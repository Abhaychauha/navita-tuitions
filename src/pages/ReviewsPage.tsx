import React from 'react';
import { reviewsData } from '../data/reviews';
import { SectionHeading } from '../components/common/SectionHeading';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { Star, MessageCircle, MapPin, Quote } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <SectionHeading
          badge="Verified Parent Feedback"
          badgeVariant="green"
          title="Reviews & Testimonials"
          subtitle="Read real experiences from parents and students across Padmanabhanagar, Banashankari, and Bengaluru."
        />

        {/* Main Interactive Carousel */}
        <ReviewsSection />

        {/* All Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-7 shadow-card border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-extrabold text-brand-900 text-sm font-display">{rev.author}</h4>
                {rev.location && (
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-blue-600" />
                    <span>{rev.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
