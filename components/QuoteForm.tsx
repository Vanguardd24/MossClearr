
import React, { useState } from 'react';
import { ServiceType } from '../types';

const QuoteForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-24 bg-emerald-600 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-black mb-4">Request Received!</h3>
          <p className="text-emerald-100 text-lg mb-8">
            Liam or Sean will review your photos and call you back within 24 hours to discuss your quote.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors"
          >
            Submit Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-24 bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Get a Free Quote</h2>
            <h3 className="text-4xl font-extrabold text-white mb-6">Let’s Start Your Transformation.</h3>
            <p className="text-indigo-200 text-lg mb-10">
              Upload a photo of your driveway or garden, and we'll give you a preliminary estimate over the phone. No pressure, no obligations.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Fully Insured & Certified</h4>
                  <p className="text-indigo-300">Full public liability coverage for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">24-Hour Callback</h4>
                  <p className="text-indigo-300">We respond fast, because your time is valuable.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
                <span className="text-white font-bold text-sm">Dublin Trade Guild</span>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
                <span className="text-white font-bold text-sm">SafePass Certified</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1em]">
                  <option>{ServiceType.PAVING}</option>
                  <option>{ServiceType.SOFTWASH}</option>
                  <option>{ServiceType.GARDEN}</option>
                  <option>{ServiceType.MAINTENANCE}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Postcode / Area</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="D02, Blackrock, etc." />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Upload Photo (Optional but Recommended)</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                  />
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center group-hover:border-emerald-400 group-hover:bg-emerald-50 transition-all">
                    <svg className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-emerald-600">Click to upload or drag & drop</p>
                    <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Get My Quote'}
              </button>
              <p className="text-center text-xs text-slate-400">By submitting, you agree to our privacy policy and a follow-up call/email.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
