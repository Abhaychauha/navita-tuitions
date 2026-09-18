import { LeadEnquiry } from '../types';

const STORAGE_KEY = 'navita_tuitions_enquiries';

export interface SubmissionResult {
  success: boolean;
  message: string;
  enquiryId?: string;
}

export const leadService = {
  // Validate Indian Phone Number
  validatePhone: (phone: string): boolean => {
    const cleaned = phone.replace(/\D/g, '');
    // Standard 10 digit Indian mobile (starts with 6,7,8,9) or with 91 prefix (12 digits)
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

  // Submit an enquiry
  submitEnquiry: async (enquiry: LeadEnquiry): Promise<SubmissionResult> => {
    try {
      // Simulate network request latency
      await new Promise(resolve => setTimeout(resolve, 800));

      const newEnquiry: LeadEnquiry = {
        ...enquiry,
        id: 'ENQ-' + Date.now().toString(36).toUpperCase(),
        timestamp: new Date().toISOString(),
        status: 'new'
      };

      // Store in LocalStorage for local persistence & review
      try {
        const existingRaw = localStorage.getItem(STORAGE_KEY);
        const existing: LeadEnquiry[] = existingRaw ? JSON.parse(existingRaw) : [];
        existing.unshift(newEnquiry);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
      } catch (storageError) {
        console.warn('LocalStorage save error:', storageError);
      }

      // Check if external webhook / backend endpoint is configured via environment variable
      const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
      if (webhookUrl && typeof webhookUrl === 'string' && webhookUrl.startsWith('http')) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEnquiry)
          });
        } catch (fetchErr) {
          console.warn('Webhook forwarding non-blocking error:', fetchErr);
        }
      }

      return {
        success: true,
        message: 'Thank you for contacting Navita Tuitions. We have received your enquiry and will get back to you shortly.',
        enquiryId: newEnquiry.id
      };
    } catch (error) {
      console.error('Submission error:', error);
      return {
        success: false,
        message: 'Unable to submit enquiry. Please call us directly at 088672 87115 or message us on WhatsApp.'
      };
    }
  },

  // Retrieve saved enquiries (for testing / admin inspection)
  getSavedEnquiries: (): LeadEnquiry[] => {
    try {
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      return existingRaw ? JSON.parse(existingRaw) : [];
    } catch {
      return [];
    }
  }
};
