
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Moss<span className="text-emerald-600">Clear</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Services</a>
            <a href="#faq" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">FAQ</a>
            <div className="flex flex-col items-end">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Call Now</span>
              <a href="tel:011234567" className="text-indigo-950 font-bold text-lg hover:text-emerald-600 transition-colors">01 123 4567</a>
            </div>
            <a
              href="#quote"
              className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200"
            >
              Get Quote
            </a>
          </div>

          <div className="md:hidden">
            <a href="tel:011234567" className="p-2 text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
