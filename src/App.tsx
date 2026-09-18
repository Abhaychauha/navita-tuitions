import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingContact } from './components/common/FloatingContact';

// 7 Core Public Pages
import { HomePage } from './pages/HomePage';
import { WorksheetsPage } from './pages/WorksheetsPage';
import { WorksheetDetailPage } from './pages/WorksheetDetailPage';
import { CoursesPage } from './pages/CoursesPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';

// Auth & Payment Pages
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AccountPage } from './pages/AccountPage';
import { CheckoutPage } from './pages/CheckoutPage';

// Legal & Extra
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F5FA] text-slate-800 selection:bg-amber-200 selection:text-brand-950">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Core Navigation Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/worksheets" element={<WorksheetsPage />} />
          <Route path="/worksheets/:id" element={<WorksheetDetailPage />} />
          
          {/* All Courses, Grades, Boards, Modes, Programs routes point to CoursesPage */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CoursesPage />} />
          <Route path="/grades/:slug" element={<CoursesPage />} />
          <Route path="/boards/:slug" element={<CoursesPage />} />
          <Route path="/modes/:slug" element={<CoursesPage />} />
          <Route path="/programs" element={<CoursesPage />} />
          <Route path="/programs/:slug" element={<CoursesPage />} />
          <Route path="/study-plans" element={<CoursesPage />} />
          
          {/* About, Contact & Admissions */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<AboutPage />} />
          <Route path="/admissions" element={<AboutPage />} />
          <Route path="/location" element={<AboutPage />} />
          
          {/* Reviews & FAQ */}
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/testimonials" element={<ReviewsPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Authentication & User Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/my-worksheets" element={<AccountPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
