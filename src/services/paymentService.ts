import { PaymentRecord } from '../types';
import { siteConfig } from '../config/siteConfig';
import { authService } from './authService';

const PAYMENTS_KEY = 'navita_payment_records';

export const paymentService = {
  // Create Order (Simulates secure server order endpoint)
  createOrder: async (userEmail: string) => {
    await new Promise(r => setTimeout(r, 400));
    return {
      orderId: 'order_' + Date.now().toString(36),
      amount: siteConfig.worksheetPrice.amount * 100, // paise
      currency: siteConfig.worksheetPrice.currency,
      keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder_key'
    };
  },

  // Verify and Process Payment (Simulates Server-side signature verification & account unlock)
  processPayment: async (paymentDetails: {
    razorpay_payment_id?: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
    userEmail: string;
  }): Promise<{ success: boolean; message: string; paymentRecord?: PaymentRecord }> => {
    await new Promise(r => setTimeout(r, 900));

    try {
      const user = authService.getCurrentUser();
      if (!user) {
        return { success: false, message: 'Please log in to complete purchase.' };
      }

      const paymentId = paymentDetails.razorpay_payment_id || 'pay_' + Date.now().toString(36).toUpperCase();

      const record: PaymentRecord = {
        paymentId,
        userId: user.id,
        userEmail: user.email,
        amount: siteConfig.worksheetPrice.amount,
        currency: siteConfig.worksheetPrice.currency,
        status: 'captured',
        purchaseDate: new Date().toISOString(),
        planName: siteConfig.worksheetPrice.title
      };

      // Store payment record
      try {
        const existingRaw = localStorage.getItem(PAYMENTS_KEY);
        const existing: PaymentRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
        existing.unshift(record);
        localStorage.setItem(PAYMENTS_KEY, JSON.stringify(existing));
      } catch (err) {
        console.warn('Payment record storage error:', err);
      }

      // Unlock all worksheets for the user
      authService.grantPaidAccess(paymentId);

      return {
        success: true,
        message: 'Payment verified successfully! All worksheets unlocked.',
        paymentRecord: record
      };
    } catch (e) {
      return {
        success: false,
        message: 'Payment verification failed. Please contact Navita Tuitions support.'
      };
    }
  }
};
