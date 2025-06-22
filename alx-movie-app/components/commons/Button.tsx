import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, onClick, className = '', disabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;