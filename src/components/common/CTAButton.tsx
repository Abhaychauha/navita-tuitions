import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface CTAButtonProps {
  variant?: 'primary' | 'accent' | 'whatsapp' | 'secondary' | 'outline' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: 'whatsapp' | 'phone' | 'arrow' | 'calendar' | 'sparkles' | 'none';
  customWhatsAppText?: string;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  to,
  href,
  onClick,
  icon = 'none',
  customWhatsAppText,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl',
    lg: 'px-7 py-3.5 text-base font-semibold rounded-xl'
  };

  const variantClasses = {
    primary: 'bg-brand-900 hover:bg-brand-800 text-white shadow-sm hover:shadow-md active:scale-[0.99]',
    accent: 'bg-amber-400 hover:bg-amber-300 text-brand-950 font-bold shadow-sm hover:shadow-md active:scale-[0.99]',
    whatsapp: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md active:scale-[0.99]',
    phone: 'bg-brand-50 hover:bg-brand-100 text-brand-900 border border-brand-200 active:scale-[0.99]',
    secondary: 'bg-white hover:bg-slate-50 text-brand-900 border border-slate-200 shadow-sm active:scale-[0.99]',
    outline: 'bg-transparent hover:bg-brand-50 text-brand-900 border border-brand-300 active:scale-[0.99]'
  };

  const renderIcon = () => {
    switch (icon) {
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4 shrink-0 text-emerald-100" />;
      case 'phone':
        return <Phone className="w-4 h-4 shrink-0 text-brand-600" />;
      case 'arrow':
        return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />;
      case 'calendar':
        return <Calendar className="w-4 h-4 shrink-0" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />;
      default:
        return null;
    }
  };

  const combinedClasses = `group inline-flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 select-none cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (variant === 'whatsapp') {
    const waUrl = siteConfig.getWhatsAppUrl(customWhatsAppText || (typeof children === 'string' ? children : undefined));
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 shrink-0 fill-current text-white" />
        <span>{children || "Chat on WhatsApp"}</span>
      </a>
    );
  }

  if (variant === 'phone' || href?.startsWith('tel:')) {
    return (
      <a
        href={href || siteConfig.phoneTel}
        className={combinedClasses}
        aria-label={`Call ${siteConfig.phone}`}
      >
        <Phone className="w-4 h-4 shrink-0 fill-current" />
        <span>{children || `Call ${siteConfig.phone}`}</span>
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {renderIcon()}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {renderIcon()}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {renderIcon()}
      <span>{children}</span>
    </button>
  );
};
