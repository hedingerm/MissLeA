import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'white';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-sans tracking-widest text-xs uppercase py-4 px-8 transition-all duration-500 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-charcoal text-sand hover:bg-terra hover:text-white",
    outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-sand",
    text: "border-b border-charcoal text-charcoal hover:text-terra hover:border-terra px-0 py-2",
    white: "bg-white text-charcoal hover:bg-terra hover:text-white shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};