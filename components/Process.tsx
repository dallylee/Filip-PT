import React from 'react';

const steps = [
  {
    num: "01",
    title: "Application",
    desc: "Complete the form below. Tell me your goals, history, and schedule availability at PureGym Aldgate."
  },
  {
    num: "02",
    title: "Consultation",
    desc: "Free 30-min intro session. We check movement patterns, discuss nutrition, and see if we're a good fit."
  },
  {
    num: "03",
    title: "Execution",
    desc: "We lock in your slots, build your custom programme, and start tracking your progress from day one."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-dark border-t border-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <h2 className="text-neon font-heading text-lg uppercase tracking-widest font-bold mb-2">The Roadmap</h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase italic">
            How It Works
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-800 -z-0">
             <div className="w-full h-full bg-neon origin-left scale-x-0 animate-[grow-x_1.5s_ease-out_forwards] delay-500"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group reveal" style={{ transitionDelay: `${idx * 200}ms` }}>
              <div className="w-24 h-24 bg-card border-2 border-gray-800 rounded-full flex items-center justify-center mb-8 group-hover:border-neon group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.1)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-neon opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="text-4xl font-heading font-black text-white italic group-hover:text-neon transition-colors">{step.num}</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-white mb-4 uppercase tracking-wide group-hover:text-neon transition-colors">{step.title}</h4>
              <p className="text-gray-400 font-body leading-relaxed max-w-xs group-hover:text-gray-300 transition-colors">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;