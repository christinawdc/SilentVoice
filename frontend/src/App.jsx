import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Demo from './sections/Demo';
import HowItWorks from './sections/HowItWorks';
import Roadmap from './sections/Roadmap';
import Contact from './sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

// to make scroll smooth
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // to track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'demo', 'how-it-works', 'roadmap', 'contact'];
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-gray-200 font-sans">
      <NavBar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <Demo />
      <HowItWorks />
      <Roadmap />
      <Contact />
      <footer className="py-6 text-center text-gray-500 bg-gray-950 border-t border-gray-800">
        © {new Date().getFullYear()} SilentVoice — Bridging Communication Gaps Through AI.
      </footer>
    </div>
  );
}

export default App
