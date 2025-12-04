import React from 'react';
import { ArrowRight, Activity, Users, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark pb-32">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl reveal active">
          <p className="text-neon font-heading uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-bold animate-pulse-slow">
            Personal Trainer • PureGym London Aldgate
          </p>
          <h1 className="text-7xl md:text-9xl font-heading font-black leading-[0.9] mb-8 text-white uppercase italic tracking-tighter">
            <span className="block glitch-text hover:text-neon transition-colors duration-300" data-text="Stronger">Stronger</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600 block">Every Day</span>
            <span className="text-neon relative inline-block">
              Fitter
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
              </svg>
            </span> Forever
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-body mb-10 max-w-lg leading-relaxed border-l-2 border-neon pl-6 reveal delay-200">
            Personal training for busy professionals. Train at PureGym London Aldgate before or after work without wasting hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 reveal delay-300">
            <a href="#contact" className="group bg-neon text-black font-heading font-bold text-xl px-10 py-5 uppercase tracking-wider hover:bg-white transition-all clip-path-slant-button flex items-center justify-center gap-3 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">Start Training <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
            </a>
            <a href="#process" className="group px-10 py-5 border border-gray-700 text-white font-heading font-bold text-xl uppercase tracking-wider hover:border-neon hover:text-neon transition-all flex items-center justify-center clip-path-slant-button relative overflow-hidden">
               <span className="relative z-10">How It Works</span>
               <div className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
            </a>
          </div>

          <div className="mt-16 flex items-center gap-12 reveal delay-500">
            <div className="flex flex-col group cursor-default">
              <div className="flex items-center gap-2 text-neon mb-1 group-hover:scale-110 transition-transform">
                 <Users className="w-5 h-5" />
                 <span className="text-3xl font-heading font-bold">1200+</span>
              </div>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-heading">Members</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <div className="flex items-center gap-2 text-neon mb-1 group-hover:scale-110 transition-transform">
                 <Trophy className="w-5 h-5" />
                 <span className="text-3xl font-heading font-bold">10+</span>
              </div>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-heading">Years Exp</span>
            </div>
            <div className="flex flex-col group cursor-default">
              <div className="flex items-center gap-2 text-neon mb-1 group-hover:scale-110 transition-transform">
                 <Activity className="w-5 h-5" />
                 <span className="text-3xl font-heading font-bold">100%</span>
              </div>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-heading">Results</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative hidden md:block h-[800px] reveal delay-200">
           {/* Neon Spiral Simulation using CSS Borders/SVG */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-neon/30 rounded-full animate-spin [animation-duration:10s]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-neon/20 rounded-full animate-spin [animation-duration:15s] direction-reverse"></div>
           
           <img 
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
            alt="Fitness Trainer" 
            className="relative z-10 w-full h-full object-cover object-center clip-path-slant-button mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
           />

           {/* Floating Badge */}
           <div className="absolute bottom-20 -left-10 bg-surface border border-gray-800 p-4 rounded-lg z-20 shadow-xl flex items-center gap-4 animate-bounce [animation-duration:3s]">
              <div className="w-12 h-12 bg-neon rounded-full flex items-center justify-center text-black font-bold">
                <Activity />
              </div>
              <div>
                <p className="text-white font-heading font-bold uppercase">Current Status</p>
                <p className="text-xs text-neon">Accepting New Clients</p>
              </div>
           </div>
        </div>
      </div>
      
      {/* Brand Strip - Fixed Visibility */}
      <div className="absolute bottom-[-10px] w-[110vw] -left-[5vw] bg-neon py-5 transform -skew-y-1 z-20 overflow-hidden shadow-[0_-10px_40px_rgba(204,255,0,0.1)]">
        <div className="flex gap-12 items-center font-heading font-black text-black uppercase text-2xl tracking-widest opacity-90 whitespace-nowrap animate-marquee">
           <span>Strength</span> • <span>Conditioning</span> • <span>Mindset</span> • <span>Nutrition</span> • <span>Recovery</span> • <span>Performance</span> • <span>Strength</span> • <span>Conditioning</span> • <span>Mindset</span> • <span>Nutrition</span> • <span>Recovery</span> • <span>Performance</span> • <span>Strength</span> • <span>Conditioning</span>
           <span>Strength</span> • <span>Conditioning</span> • <span>Mindset</span> • <span>Nutrition</span> • <span>Recovery</span> • <span>Performance</span> • <span>Strength</span> • <span>Conditioning</span> • <span>Mindset</span> • <span>Nutrition</span> • <span>Recovery</span> • <span>Performance</span> • <span>Strength</span> • <span>Conditioning</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;