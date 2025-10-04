import React from 'react';
import SectionTitle from './components/SectionTitle';
import SubTitle from '../components/SubTitle';
import Button from './components/Button';

const Demo = () => {
  return (
    <section id="demo" className="py-24 bg-gray-950 text-center">
      <SectionTitle>Live Demo</SectionTitle>
      <SubTitle>Try SilentVoice in action — type or speak and see instant AI conversion.</SubTitle>

      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-lg border border-teal-600/40">
        <textarea
          placeholder="Type your silent thought here..."
          className="w-full h-40 bg-gray-800 text-white rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6"
        />
        <Button primary={true}>Convert to Speech</Button>
      </div>
    </section>
  );
};

export default Demo;
