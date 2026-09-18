import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { SectionHeading } from '../components/common/SectionHeading';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Extended categorized FAQ list
  const allFaqs = [
    ...faqsData,
    {
      id: 'ws-free',
      question: 'How do I access the free sample worksheet?',
      answer: 'You can immediately view and download the Grade 5 CBSE English Grammar Worksheet for free from our Worksheet Library without creating an account or paying.',
      category: 'worksheets' as const
    },
    {
      id: 'ws-unlock',
      question: 'What is included in the Complete Worksheet Library access?',
      answer: 'Unlocking the worksheet library gives you access to all current and upcoming premium worksheets across Grades 1–10 (CBSE, ICSE, State Board) with unlimited printable PDF downloads for a one-time payment of ₹499.',
      category: 'worksheets' as const
    },
    {
      id: 'pay-modes',
      question: 'What payment methods are supported?',
      answer: 'We support UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, and Netbanking through our secure Razorpay payment gateway.',
      category: 'payments' as const
    }
  ];

  const filtered = activeCategory === 'all' 
    ? allFaqs 
    : allFaqs.filter(f => f.category === activeCategory);

  return (
    <div className="py-12 md:py-20 bg-[#F0F5FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <SectionHeading
          badge="Answers & Guidance"
          badgeVariant="purple"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about tuition classes, worksheet downloads, and payment access at Navita Tuitions."
        />

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {['all', 'tuition', 'worksheets', 'payments', 'contact'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                activeCategory === cat
                  ? 'bg-brand-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Questions' : cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-extrabold text-sm sm:text-base text-brand-900 font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 text-center space-y-3">
          <h4 className="font-bold text-brand-900 text-base">Have a specific question not listed here?</h4>
          <p className="text-xs sm:text-sm text-slate-600">Reach out to us directly for immediate assistance.</p>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href={siteConfig.getWhatsAppUrl("Hello Navita Tuitions, I have a question about admissions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-emerald-700"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-900 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-brand-800"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Centre</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
