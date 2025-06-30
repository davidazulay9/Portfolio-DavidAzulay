import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-2xl shadow-lg font-medium transition-transform transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 