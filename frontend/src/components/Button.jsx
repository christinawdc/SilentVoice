import React from 'react';

const Button = ({ children, primary = true, onClick = () => {}, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-8 py-3 rounded-full font-semibold text-lg transition duration-300
      shadow-lg transform hover:scale-[1.03] active:scale-[0.98]
      ${primary
        ? 'bg-teal-600 text-white hover:bg-teal-500 shadow-teal-500/50'
        : 'bg-transparent text-teal-400 border border-teal-600 hover:bg-teal-900 shadow-none'
      }
    `}
  >
    {children}
  </button>
);

export default Button;
