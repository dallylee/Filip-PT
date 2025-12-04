import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface skew-x-12 translate-x-1/4 opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3 reveal">
             <h2 className="text-neon font-heading text-lg uppercase tracking-widest font-bold mb-2">Join The Team</h2>
             <h3 className="text-5xl md:text-6xl font-heading font-bold text-white uppercase italic mb-8">
                Ready To Start?
             </h3>
             <p className="text-gray-400 font-body text-lg mb-8">
               Slots at PureGym London Aldgate are limited. Fill out the application to secure your consultation.
             </p>
             <div className="p-6 bg-surface border-l-4 border-neon hover:border-l-8 transition-all duration-300">
                <p className="text-white font-heading text-xl uppercase italic mb-2">"The only bad workout is the one that didn't happen."</p>
                <p className="text-gray-500 font-body text-sm">- Filip Levitsky</p>
             </div>
          </div>

          <div className="lg:w-2/3 reveal delay-200">
            <form className="bg-card p-8 md:p-12 border border-gray-800 shadow-2xl relative group hover:border-gray-700 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-transparent"></div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col gap-2 group/input">
                  <label className="text-gray-500 font-heading uppercase tracking-wide text-sm group-focus-within/input:text-neon transition-colors">Name *</label>
                  <input type="text" className="bg-black border-b-2 border-gray-700 text-white py-4 focus:outline-none focus:border-neon transition-colors font-body text-lg" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col gap-2 group/input">
                  <label className="text-gray-500 font-heading uppercase tracking-wide text-sm group-focus-within/input:text-neon transition-colors">Email *</label>
                  <input type="email" className="bg-black border-b-2 border-gray-700 text-white py-4 focus:outline-none focus:border-neon transition-colors font-body text-lg" placeholder="Enter your email" />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8 group/input">
                 <label className="text-gray-500 font-heading uppercase tracking-wide text-sm group-focus-within/input:text-neon transition-colors">Phone Number</label>
                 <input type="tel" className="bg-black border-b-2 border-gray-700 text-white py-4 focus:outline-none focus:border-neon transition-colors font-body text-lg" placeholder="Enter your number" />
              </div>

              <div className="flex flex-col gap-2 mb-8 group/input">
                 <label className="text-gray-500 font-heading uppercase tracking-wide text-sm group-focus-within/input:text-neon transition-colors">What are your main goals?</label>
                 <textarea rows={3} className="bg-black border-b-2 border-gray-700 text-white py-4 focus:outline-none focus:border-neon transition-colors font-body text-lg resize-none" placeholder="Muscle gain, fat loss, strength..."></textarea>
              </div>

              <button type="submit" className="w-full bg-neon text-black font-heading font-black text-2xl py-6 uppercase tracking-wider hover:bg-white transition-all hover:scale-[1.01] shadow-[0_4px_0_rgb(0,0,0)] clip-path-slant-button relative overflow-hidden group/btn">
                <span className="relative z-10">Submit Application</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 z-0 opacity-50"></div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;