
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-indigo-950">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <img src="https://picsum.photos/1920/1080?random=1" alt="Background" className="w-full h-full object-cover filter grayscale" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1.5 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              Dublin's Trusted Paving Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Breathe New Life Into Your <span className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-8">Property.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              From pristine patio paving to eco-friendly "No-Pressure" soft-wash cleaning. We don't just clean—we restore your home’s kerb appeal with a professional touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20">
                Book a Free Consultation
              </a>
              <a href="#services" className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-all">
                View Our Work
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-indigo-950" src={`https://picsum.photos/40/40?random=${i+10}`} alt="Customer" />
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-bold block">500+ Local Projects</span>
                Highly rated across Dublin
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="relative">
                  <img src="https://picsum.photos/600/800?random=50" alt="Before" className="w-full h-96 object-cover" />
                  <div className="absolute top-4 left-4 bg-red-600/90 text-white text-[10px] font-bold uppercase px-2 py-1 rounded">Before</div>
                </div>
                <div className="relative">
                  <img src="https://picsum.photos/600/800?random=51" alt="After" className="w-full h-96 object-cover" />
                  <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-[10px] font-bold uppercase px-2 py-1 rounded">After</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-medium">Real restoration results in Blackrock, Dublin.</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-600/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
