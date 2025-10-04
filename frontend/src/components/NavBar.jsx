import React from 'react';
import Button from './Button';

const NavBar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { name: 'Features', id: 'features' },
    { name: 'Demo', id: 'demo' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Roadmap', id: 'roadmap' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm shadow-xl shadow-gray-900/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-white tracking-widest cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Silent<span className="text-teal-400">Voice</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              className={`text-lg font-medium transition duration-200 hover:text-teal-400 ${activeSection === item.id ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-300'}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <Button primary={true} onClick={() => scrollToSection('demo')}>
          Try Demo
        </Button>
      </nav>
    </header>
  );
};

export default NavBar;
