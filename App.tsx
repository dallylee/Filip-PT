import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import AiAssistant from './components/AiAssistant';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // We delay the observer slightly to ensure all child components are mounted
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
      
      // Cleanup
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-neon selection:text-black">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Programs />
      <AiAssistant />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;