import React from 'react';
import { Instagram, Mail, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-20 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
           <div>
              <h2 className="text-4xl font-heading font-black text-white uppercase italic tracking-tighter">
                Filip Levitsky <span className="text-neon">PT</span>
              </h2>
           </div>
           
           <div className="flex gap-6">
             <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-neon hover:text-black hover:border-neon transition-all">
                <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-neon hover:text-black hover:border-neon transition-all">
                <Mail className="w-5 h-5" />
             </a>
             <a href="#" className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-neon hover:text-black hover:border-neon transition-all">
                <Dumbbell className="w-5 h-5" />
             </a>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
           <div>
              <h4 className="text-white font-heading font-bold uppercase mb-4">Location</h4>
              <p className="text-gray-500 font-body">PureGym London Aldgate<br/>205-209 Whitechapel Rd<br/>London E1 1DE</p>
           </div>
           <div>
              <h4 className="text-white font-heading font-bold uppercase mb-4">Contact</h4>
              <p className="text-gray-500 font-body">filip@filiplevitskypt.com<br/>+44 7700 900000</p>
           </div>
           <div>
              <h4 className="text-white font-heading font-bold uppercase mb-4">Legal</h4>
              <div className="flex flex-col gap-2 text-gray-500 font-body">
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </div>
           </div>
        </div>
        
        <div className="text-center mt-16 text-gray-700 text-sm font-body uppercase tracking-widest">
           &copy; {new Date().getFullYear()} Filip Levitsky Personal Training. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;