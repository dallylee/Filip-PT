import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    title: "8 Week Shred",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    desc: "Drop body fat, keep strength, feel sharper.",
    features: ["Fat Loss Focus", "Nutritional Strategy", "Metabolic Conditioning"]
  },
  {
    title: "Strength & Muscle",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    desc: "Build numbers on the bar and size on your frame.",
    features: ["Hypertrophy", "Powerlifting Tech", "Progressive Overload"]
  },
  {
    title: "Gym Confidence",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
    desc: "Stop feeling lost on the gym floor.",
    features: ["Technique Mastery", "Routine Building", "Safety First"]
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-32 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
          <div>
            <h2 className="text-neon font-heading text-lg uppercase tracking-widest font-bold mb-2">Training Options</h2>
            <h3 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase italic">
              Choose Your Path
            </h3>
          </div>
          <p className="text-gray-400 font-body max-w-md pb-2">
            Specialized programmes designed for results. Whether you want to cut, build, or learn, we have a protocol for you.
          </p>
        </div>

        {/* Group for spotlight hover effect */}
        <div className="grid md:grid-cols-3 gap-8 group/list">
          {programs.map((prog, idx) => (
            <div key={idx} className={`group relative h-[500px] overflow-hidden bg-black border border-gray-800 rounded-sm reveal transition-all duration-500 hover:!opacity-100 group-hover/list:opacity-40 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] hover:border-neon`} style={{transitionDelay: `${idx * 100}ms`}}>
              
              {/* Background Image */}
              <img 
                src={prog.image} 
                alt={prog.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-heading font-bold text-white uppercase mb-2 italic glitch-text" data-text={prog.title}>{prog.title}</h4>
                  <div className="w-12 h-1 bg-neon mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-gray-300 font-body mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {prog.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {prog.features.map((f, i) => (
                      <span key={i} className="text-xs font-bold uppercase tracking-wider text-neon border border-neon/30 px-2 py-1 rounded-sm bg-neon/10">{f}</span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className="flex items-center justify-between w-full bg-surface/50 backdrop-blur-sm border border-gray-700 text-white p-4 font-heading uppercase font-bold tracking-wider hover:bg-neon hover:text-black hover:border-neon transition-colors group-hover:translate-y-0 translate-y-2">
                  Select Plan
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;