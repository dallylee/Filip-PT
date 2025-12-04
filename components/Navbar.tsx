import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-dark/95 backdrop-blur-md border-gray-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-neon flex items-center justify-center">
             <span className="text-neon font-bold text-lg italic">F</span>
          </div>
          <div className="text-xl font-heading font-bold text-white uppercase tracking-wider">
            Filip Levitsky <span className="text-neon">PT</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-heading uppercase tracking-widest text-sm font-semibold">
          <a href="#about" className="text-white hover:text-neon transition-colors">About</a>
          <a href="#programs" className="text-white hover:text-neon transition-colors">Coaching</a>
          <a href="#process" className="text-white hover:text-neon transition-colors">How it works</a>
          <a href="#contact" className="bg-neon text-black px-6 py-2 clip-path-slant-button hover:bg-white transition-all transform hover:-translate-y-1">
            Register Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-neon transition-colors">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-t border-gray-800 p-8 flex flex-col gap-6 shadow-2xl h-screen">
           <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-neon font-heading uppercase font-bold">About</a>
           <a href="#programs" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-neon font-heading uppercase font-bold">Coaching</a>
           <a href="#process" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-neon font-heading uppercase font-bold">How it works</a>
           <a href="#contact" onClick={() => setIsOpen(false)} className="bg-neon text-black text-center py-4 font-heading uppercase text-xl font-bold clip-path-slant-button">Register Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;