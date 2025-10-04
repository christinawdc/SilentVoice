import React from 'react';
import SectionTitle from './components/SectionTitle';
import SubTitle from '../components/SubTitle';
import { Brain, Mic, Volume2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Mic className="h-10 w-10 text-teal-400" />,
      title: 'Input',
      desc: 'Speak or type silently — the system captures your intent.',
    },
    {
      icon: <Brain className="h-10 w-10 text-indigo-400" />,
      title: 'AI Processing',
      desc: 'SilentVoice AI analyzes context and ensures clarity.',
    },
    {
      icon: <Volume2 className="h-10 w-10 text-pink-400" />,
      title: 'Output',
      desc: 'Your silent message is converted into clear speech or text instantly.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-900 text-center">
      <SectionTitle>How It Works</SectionTitle>
      <SubTitle>A simple 3-step process designed for speed and clarity.</SubTitle>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition">
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
