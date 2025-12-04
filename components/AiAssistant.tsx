import React, { useState } from 'react';
import { getFitnessAdvice } from '../services/geminiService';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const answer = await getFitnessAdvice(query);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden border-y border-gray-800">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-50"></div>
       
       <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon/10 border border-neon/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-neon" />
              <span className="text-neon text-xs font-bold uppercase tracking-wider">Powered by Gemini AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
              Not sure where to start? <br />
              <span className="text-gray-500">Ask the AI Coach</span>
            </h2>
            <p className="text-gray-400 font-body mb-8 text-lg">
              Have a quick question about nutrition, reps, or recovery? Get an instant, science-backed answer tailored to the Filip Levitsky training philosophy.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-card border border-gray-700 p-6 rounded-lg shadow-2xl shadow-neon/5">
              
              {response && (
                <div className="mb-6 p-4 bg-surface border-l-4 border-neon rounded-r-md animate-fade-in">
                  <p className="text-gray-200 font-body leading-relaxed">{response}</p>
                </div>
              )}

              <form onSubmit={handleAsk} className="relative">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="E.g., How many times should I squat per week?"
                  className="w-full bg-dark border border-gray-600 text-white p-4 pr-12 rounded-md focus:outline-none focus:border-neon transition-colors font-body"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 bg-neon text-black px-4 rounded-sm flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </form>
              <p className="text-gray-600 text-xs mt-3 text-center">AI can make mistakes. For personalized medical advice, consult a professional.</p>
            </div>
          </div>

        </div>
       </div>
    </section>
  );
};

export default AiAssistant;