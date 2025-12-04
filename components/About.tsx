import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Visuals */}
          <div className="w-full md:w-1/2 relative reveal">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-neon z-0 animate-pulse-slow"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-neon z-0 animate-pulse-slow"></div>
             
             <div className="grid grid-cols-2 gap-4 relative z-10">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm hover:scale-[1.02]" alt="Gym" />
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm translate-y-8 hover:scale-[1.02]" alt="Training" />
             </div>
          </div>

          <div className="w-full md:w-1/2 reveal delay-200">
            <div className="flex items-center gap-3 mb-4">
               <span className="h-px w-12 bg-neon"></span>
               <h2 className="text-neon font-heading text-lg uppercase tracking-widest font-bold">About The Coach</h2>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 uppercase italic leading-none">
              Transform Your Body <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">Transform Your Life</span>
            </h3>
            
            <p className="text-gray-400 font-body mb-6 text-lg leading-relaxed">
              You work hard. You train when you can. You want to look stronger, leaner and actually see progress from the time you put in.
            </p>
            
            <p className="text-gray-400 font-body mb-10 text-lg leading-relaxed">
              I work with men and women in their 20s and 30s who already train or want to start at PureGym London Aldgate. No wellness fluff. Just clear plans, heavy weights done safely, and accountability.
            </p>

            <ul className="space-y-6">
              {[
                "City and Shoreditch professionals training around work hours.",
                "People wanting to drop 5-10kg and build visible muscle.",
                "Lifters wanting better technique and serious strength numbers."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-neon group-hover:bg-neon transition-colors">
                     <CheckCircle2 className="w-4 h-4 text-gray-400 group-hover:text-black" />
                  </div>
                  <span className="text-gray-300 font-body text-lg group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;