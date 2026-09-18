import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  GraduationCap, 
  Sparkles,
  MapPin,
  User,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { authService } from '../../services/authService';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentUser = authService.getCurrentUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Worksheets", path: "/worksheets", badge: "New" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-slate-200/80' 
        : 'bg-white/95 backdrop-blur-sm border-b border-slate-100'
    }`}>
      {/* Top Banner Strip */}
      <div className="bg-gradient-to-r from-brand-950 via-brand-900 to-indigo-950 text-white text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Padmanabhanagar, Bengaluru • Admissions Open 2026
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 hidden md:inline">
              Grades 1–10 (ICSE • CBSE • State • NIOS) & Grade 11 Math
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a href={siteConfig.phoneTel} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-200">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={siteConfig.getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with 3D gradient badge */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-brand-950 via-blue-900 to-indigo-600 flex items-center justify-center text-white shadow-glow-blue group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 border border-blue-400/30">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-brand-900 tracking-tight block font-display leading-none">
                Navita <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tuitions</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-widest uppercase block mt-1">
                Padmanabhanagar • Bengaluru
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - 7 Core Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all relative ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/90 shadow-xs'
                      : 'text-slate-700 hover:text-brand-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-md text-[10px] font-black bg-amber-400 text-brand-950">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action CTAs: Auth + Enquire */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dynamic Auth Link */}
            {currentUser ? (
              <Link
                to="/account"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all"
              >
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>My Account {currentUser.accessStatus === 'paid' && '✓'}</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-brand-900 hover:bg-slate-100 border border-slate-200 transition-all"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login</span>
              </Link>
            )}

            {/* Glowing Gradient Enquire Now button */}
            <Link
              to="/about"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold text-brand-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md hover:shadow-glow-amber transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-amber-900 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Enquire Now</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.phoneTel}
              className="p-2.5 text-brand-900 bg-blue-50 rounded-xl"
              aria-label="Call Navita Tuitions"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-brand-900 rounded-xl bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <a
              href={siteConfig.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-brand-50 text-brand-900 rounded-xl font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>Call Centre</span>
            </a>
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-50 text-emerald-700 rounded-xl font-bold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-50">Home</Link>
            <Link to="/worksheets" className="flex items-center justify-between px-3 py-2 rounded-lg text-base font-bold text-amber-700 bg-amber-50/60">
              <span>Worksheet Library</span>
              <span className="text-[10px] bg-amber-400 text-brand-950 px-2 py-0.5 rounded-full font-black">Free Sample</span>
            </Link>
            <Link to="/courses" className="block px-3 py-2 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-50">Courses & Modes</Link>
            <Link to="/about" className="block px-3 py-2 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-50">About & Location</Link>
            <Link to="/reviews" className="block px-3 py-2 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-50">Parent Reviews</Link>
            <Link to="/faq" className="block px-3 py-2 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-50">FAQ</Link>
            
            {currentUser ? (
              <Link to="/account" className="block px-3 py-2 rounded-lg text-base font-bold text-blue-700 bg-blue-50/60">
                My Account ({currentUser.name})
              </Link>
            ) : (
              <Link to="/login" className="block px-3 py-2 rounded-lg text-base font-bold text-slate-700 hover:bg-slate-50">
                Log In / Register
              </Link>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/about"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-amber-400 to-amber-300 text-brand-950 rounded-xl font-extrabold text-center text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-900" />
              <span>Book a Free Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
