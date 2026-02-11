
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://picsum.photos/800/1000?random=8" 
                alt="The Founders" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-white text-2xl font-bold">Liam & Sean O'Connor</h4>
                  <p className="text-emerald-400 font-medium">Founders & Lead Operators</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">The MossClear Brotherhood</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              A Personal Promise from Two Local Brothers.
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                MossClear isn't just a business—it's a family legacy. When you call us, you aren't talking to a call center; you're talking to Liam or Sean. We grew up in Dublin and understand the specific challenges our climate poses to stonework and driveways.
              </p>
              <p>
                We founded this company on three simple pillars: <span className="text-indigo-950 font-bold">Absolute Transparency</span>, <span className="text-indigo-950 font-bold">Eco-Conscious Methods</span>, and the kind of <span className="text-indigo-950 font-bold">Craftsmanship</span> we’d want for our own parents' homes.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-black text-emerald-600">15+</span>
                <span className="text-slate-500 font-medium">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-emerald-600">100%</span>
                <span className="text-slate-500 font-medium">Eco-Friendly Tech</span>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-xl border-l-4 border-emerald-600 italic text-slate-700">
              "We treat every driveway like it’s our own front door. That’s the MossClear guarantee."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
