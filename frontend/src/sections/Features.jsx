import React from 'react';
import SectionTitle from './components/SectionTitle';
import SubTitle from '../components/SubTitle';
import { Cpu, ShieldCheck, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Cpu className="h-12 w-12 text-teal-400" />,
      title: 'AI-Powered',
      desc: 'Our advanced AI ensures your communication is seamless, natural, and lightning-fast.',
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-indigo-400" />,
      title: 'Secure & Private',
      desc: 'Your messages are encrypted and processed securely with zero data leaks.',
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-pink-400" />,
      title: 'Universal Compatibility',
      desc: 'Works across devices, platforms, and languages with real-time adaptability.',
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
