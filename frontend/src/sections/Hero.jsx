import React from 'react';
import Button from './components/Button';
import { Zap, ArrowRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="py-24 md:py-32 text-center bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fadeIn">
          Communicate <span className="text-teal-400">Silently</span>.
          <br className="hidden sm:block" /> Be Heard <span className="text-indigo-400">Clearly</span>.
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto">
          SilentVoice uses cutting-edge AI to instantly translate your silent thoughts and input into clear, structured, and understandable messages in real-time.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => scrollToSection('demo')}>
            Start Free Demo <ArrowRight className="inline ml-2 h-5 w-5" />
          </Button>
          <Button primary={false} onClick={() => scrollToSection('features')}>
            Explore Features
          </Button>
        </div>

        <div className="mt-16 relative">
          <div className="h-64 md:h-96 w-full bg-gray-900 rounded-3xl border-2 border-teal-600/50 p-6 overflow-hidden shadow-2xl shadow-teal-500/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-5xl text-teal-400 animate-pulse">
                <Zap className="h-16 w-16 mx-auto mb-2" />
                <p className="text-xl font-mono">AI CORE ONLINE</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-indigo-700 rounded-full text-sm font-medium shadow-xl">
            Real-Time Processing & Secure
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
