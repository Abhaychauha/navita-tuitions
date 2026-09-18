import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/authService';
import { paymentService } from '../services/paymentService';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, CheckCircle2, Sparkles, Lock, Loader2, ArrowRight } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!currentUser) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-900 font-display">Please log in to unlock worksheets</h2>
        <Link to="/login" className="btn-primary">Log In to Continue</Link>
      </div>
    );
  }

  const handlePay = async () => {
    setIsProcessing(true);
    setError('');

    // Simulate Razorpay checkout integration
    const res = await paymentService.processPayment({
      userEmail: currentUser.email,
      razorpay_payment_id: 'pay_rzp_' + Math.random().toString(36).substring(2, 9).toUpperCase()
    });

    setIsProcessing(false);

    if (res.success) {
      setPaymentSuccess(true);
    } else {
      setError(res.message);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-[75vh] py-16 flex items-center justify-center bg-[#F0F5FA] px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-elevated border border-emerald-200 text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto text-white shadow-glow-amber">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div>
            <span className="badge-green mb-2">Payment Confirmed</span>
            <h2 className="text-2xl font-black text-brand-900 font-display">You're All Set! 🎉</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Your worksheet library is now unlocked for {currentUser.email}.
            </p>
          </div>
          <Link
            to="/account"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-sm shadow-md hover:scale-102 transition-all"
          >
            <span>Go to My Worksheets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] py-12 flex items-center justify-center bg-[#F0F5FA] px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-10 shadow-elevated border border-slate-200/80 space-y-6">
        <div>
          <span className="badge-amber mb-2">Secure Checkout</span>
          <h1 className="text-2xl sm:text-3xl font-black text-brand-900 font-display">
            Unlock Complete Worksheet Library
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Account: <span className="font-bold text-slate-800">{currentUser.email}</span>
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
            {error}
          </div>
        )}

        {/* Plan Details */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-slate-200">
            <div>
              <h4 className="font-extrabold text-brand-900 text-base">{siteConfig.worksheetPrice.title}</h4>
              <p className="text-xs text-slate-500">{siteConfig.worksheetPrice.period}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-brand-900 font-display">{siteConfig.worksheetPrice.displayPrice}</span>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-700">
            {siteConfig.worksheetPrice.benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Razorpay Pay Button */}
        <button
          type="button"
          onClick={handlePay}
          disabled={isProcessing}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-brand-950 font-black text-base shadow-md hover:scale-102 active:scale-95 transition-all cursor-pointer"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verifying Payment...</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-5 h-5 text-amber-900" />
              <span>Pay {siteConfig.worksheetPrice.displayPrice} & Unlock All</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center">
          🔒 Secure 256-bit encrypted transaction via Razorpay • Instant account activation
        </p>
      </div>
    </div>
  );
};
