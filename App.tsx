import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import AiAssistant from './components/AiAssistant';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
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