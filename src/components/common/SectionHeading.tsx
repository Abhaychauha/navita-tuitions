import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'blue' | 'amber' | 'green' | 'purple' | 'cyan';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'blue',
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  const badgeClasses = {
    blue: 'badge-academic',
    amber: 'badge-amber',
    green: 'badge-green',
    purple: 'badge-purple',
    cyan: 'badge-cyan'
  };

  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="mb-3">
          <span className={badgeClasses[badgeVariant]}>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-brand-900 tracking-tight leading-tight font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
