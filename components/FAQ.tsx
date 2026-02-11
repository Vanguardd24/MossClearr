
import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How much does it cost?",
      answer: "Every project is unique. We provide transparent, quote-based pricing that considers the area size, current state of moss/dirt, and specific paving materials. No hidden fees, just honest Dublin prices."
    },
    {
      question: "How long does the job take?",
      answer: "We focus on efficiency without rushing. A standard driveway cleaning usually takes 4-6 hours, while a full paving project can range from 2 to 5 days depending on complexity and weather."
    },
    {
      question: "How long does the cleaning last?",
      answer: "Our specialized soft-wash treatment doesn't just surface-clean; it sanitizes. We offer a 5-year guarantee against significant moss regrowth when paired with our seasonal maintenance sealant."
    },
    {
      question: "Are you fully insured?",
      answer: "Yes! We are trade certified and carry full public liability insurance up to €5 million. Your property is in safe, professional hands."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Your Questions</h2>
          <h3 className="text-3xl font-extrabold text-slate-900">What People Ask Most</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-emerald-600 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
