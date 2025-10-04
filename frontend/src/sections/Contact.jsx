import React from 'react';
import SectionTitle from './components/SectionTitle';
import SubTitle from '../components/SubTitle';
import Button from './components/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-center">
      <SectionTitle>Contact Us</SectionTitle>
      <SubTitle>Have questions? Reach out to our team.</SubTitle>

      <form className="max-w-3xl mx-auto bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-800">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full h-32 mb-6 p-4 rounded-lg bg-gray-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <Button primary={true}>Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
