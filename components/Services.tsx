
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Driveway Paving",
      desc: "Expert installation of block paving, gravel, and natural stone designed for Irish weather.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      )
    },
    {
      title: "Soft-Wash Cleaning",
      desc: "Low-pressure chemical cleaning that kills moss at the root without damaging your stone.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Patio Restoration",
      desc: "Repairing, re-sanding, and sealing patios to bring back that 'just installed' look.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Eco-Lawn Care",
      desc: "Sustainable landscaping solutions for lush, green, and healthy Irish gardens.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">Master Craftsmanship, Modern Care</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Covering all of <span className="text-indigo-950 font-bold">Dublin, Wicklow, and Kildare</span>. We bring commercial-grade equipment to your residential property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-indigo-950 rounded-3xl relative overflow-hidden text-center text-white">
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-4">Don't see your area listed?</h4>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">We serve most of the Greater Dublin Area. Drop us a message and we'll see if we can get a team out to you.</p>
            <a href="#quote" className="inline-block bg-white text-indigo-950 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 hover:text-white transition-all">Check My Postcode</a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
