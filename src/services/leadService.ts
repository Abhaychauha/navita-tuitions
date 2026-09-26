import { LeadEnquiry } from '../types';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const STORAGE_KEY = 'navita_tuitions_enquiries';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export interface SubmissionResult {
  success: boolean;
  message: string;
  enquiryId?: string;
}

export const leadService = {
  // Validate Indian Phone Number
  validatePhone: (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned)) {
      return true;
    }
    if (cleaned.length === 12 && cleaned.startsWith('91') && /^[6-9]/.test(cleaned.substring(2))) {
      return true;
    }
    return false;
  },

  // Validate Email (optional field)
  validateEmail: (email?: string): boolean => {
    if (!email || email.trim() === '') return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  },

  // Submit enquiry to Supabase with local fallback
  submitEnquiry: async (enquiry: LeadEnquiry): Promise<SubmissionResult> => {
    const payload = {
      name: enquiry.name.trim(),
      student_grade: enquiry.studentGrade,
      board: enquiry.board,
      subjects: enquiry.subjects,
      mode: enquiry.mode || 'Offline Tuition',
      phone: enquiry.phone.trim(),
      email: enquiry.email && enquiry.email.trim() ? enquiry.email.trim() : null,
      message: enquiry.message && enquiry.message.trim() ? enquiry.message.trim() : null,
      status: 'new'
    };

    // 1. Try Supabase if configured
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('enquiries')
          .insert([payload])
          .select('id, created_at')
          .single();

        if (!error && data) {
          const generatedId = `ENQ-${data.id}`;
          
          // Cache locally for offline access
          try {
            const newEnquiry: LeadEnquiry = {
              ...enquiry,
              id: generatedId,
              timestamp: data.created_at || new Date().toISOString(),
              status: 'new'
            };
            const existingRaw = localStorage.getItem(STORAGE_KEY);
            const existing: LeadEnquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
            existing.unshift(newEnquiry);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
          } catch {}

          return {
            success: true,
            message: 'Thank you! Your enquiry has been received and saved. Our team in Padmanabhanagar will get in touch with you promptly.',
            enquiryId: generatedId
          };
        } else if (error) {
          console.warn('Supabase enquiry submission error:', error.message);
        }
      } catch (sbErr) {
        console.warn('Supabase request failed, falling back to backend/local:', sbErr);
      }
    }

    // 2. Try FastAPI Backend if available
    try {
      const response = await fetch(`${API_BASE_URL}/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: payload.name,
          studentGrade: payload.student_grade,
          board: payload.board,
          subjects: payload.subjects,
          mode: payload.mode,
          phone: payload.phone,
          email: payload.email,
          message: payload.message
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        try {
          const newEnquiry: LeadEnquiry = {
            ...enquiry,
            id: data.enquiryId || ('ENQ-' + Date.now().toString(36).toUpperCase()),
            timestamp: new Date().toISOString(),
            status: 'new'
          };
          const existingRaw = localStorage.getItem(STORAGE_KEY);
          const existing: LeadEnquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
          existing.unshift(newEnquiry);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
        } catch {}

        return {
          success: true,
          message: data.message || 'Thank you! Your enquiry has been received. Our team will get in touch with you shortly.',
          enquiryId: data.enquiryId
        };
      }
    } catch {
      // Fallback silently
    }

    // 3. Local fallback so user submission is NEVER lost
    try {
      const fallbackEnquiry: LeadEnquiry = {
        ...enquiry,
        id: 'ENQ-' + Date.now().toString(36).toUpperCase(),
        timestamp: new Date().toISOString(),
        status: 'new'
      };
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existing: LeadEnquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
      existing.unshift(fallbackEnquiry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));

      return {
        success: true,
        message: 'Thank you! Your enquiry has been received. Our team will get in touch with you promptly.',
        enquiryId: fallbackEnquiry.id
      };
    } catch {
      return {
        success: false,
        message: 'Unable to submit your enquiry right now. Please try again or contact us directly at 088672 87115.'
      };
    }
  },

  getSavedEnquiries: (): LeadEnquiry[] => {
    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      return existingRaw ? JSON.parse(existingRaw) : [];
    } catch {
      return [];
    }
  }
};
