
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FAQ from './components/FAQ';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-white py-8 border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-40 grayscale pointer-events-none">
            <span className="font-bold text-xl uppercase tracking-tighter">Trade Certified</span>
            <span className="font-bold text-xl uppercase tracking-tighter">Fully Insured</span>
            <span className="font-bold text-xl uppercase tracking-tighter">Dublin Owned</span>
            <span className="font-bold text-xl uppercase tracking-tighter">5-Star Rated</span>
            <span className="font-bold text-xl uppercase tracking-tighter">Eco Friendly</span>
          </div>
        </div>

        <AboutUs />
        <Services />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
