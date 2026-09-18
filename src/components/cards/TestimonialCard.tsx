import React from 'react';
import { Review } from '../../types';
import { Star, Quote, MapPin } from 'lucide-react';

interface TestimonialCardProps {
  review: Review;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-slate-100 flex flex-col justify-between card-hover-effect relative">
      <Quote className="w-10 h-10 text-brand-100 absolute top-4 right-4" />
      
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4 text-amber-400">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-slate-700 text-base sm:text-lg font-medium italic leading-relaxed mb-6">
          "{review.reviewText}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-brand-900 text-sm sm:text-base font-display">
            {review.author}
          </h4>
          {review.location && (
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{review.location}</span>
            </div>
          )}
        </div>

        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Verified Review
        </span>
      </div>
    </div>
  );
};
