import React from 'react';
import SectionTitle from './components/SectionTitle';
import SubTitle from '../components/SubTitle';

const Roadmap = () => {
  const milestones = [
    { phase: 'Phase 1', text: 'Prototype release with core AI translation.' },
    { phase: 'Phase 2', text: 'Cross-platform support and mobile integration.' },
    { phase: 'Phase 3', text: 'Multi-language support and advanced features.' },
    { phase: 'Phase 4', text: 'Enterprise-ready API and large-scale deployment.' },
  ];

  return (
    <section id="roadmap" className="py-24 bg-gray-950 text-center">
      <SectionTitle>Roadmap</SectionTitle>
      <SubTitle>Our journey to revolutionize communication — step by step.</SubTitle>
      <div className="max-w-4xl mx-auto space-y-8">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-md hover:shadow-teal-500/20 transition"
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-2">{m.phase}</h3>
            <p className="text-gray-300">{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
