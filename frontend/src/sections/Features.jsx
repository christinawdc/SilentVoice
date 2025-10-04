import React from 'react';
import SectionTitle from './components/SectionTitle';
import SubTitle from '../components/SubTitle';
import { Eye, Brain, Home } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: 'Blink-to-Speech Conversion',
      desc: 'Enables users to communicate using eye movements. Blinks are translated into meaningful speech output.',
    },
    {
      icon: <Brain className="h-8 w-8 text-green-400" />,
      title: 'Adapted Communication Profiles',
      desc: 'Personalized for each user’s abilities and needs, making SilentVoice truly inclusive and flexible.',
    },
    {
      icon: <Home className="h-8 w-8 text-purple-400" />,
      title: 'Smart Room Automation',
      desc: 'Control lights, fans, and other devices with blink-based or silent commands, empowering independence at home.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 text-center">
      <SectionTitle>Features</SectionTitle>
      <SubTitle>SilentVoice brings powerful AI-driven communication to your fingertips.</SubTitle>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-gray-800 shadow-lg hover:shadow-teal-500/30 transition duration-300"
          >
            <div className="mb-6 flex justify-center">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-white">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
