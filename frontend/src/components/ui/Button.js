import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  icon,
  iconPosition = 'right',
  animate = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'border-2 border-dark-300 text-dark-800 hover:bg-dark-100 focus:ring-dark-200',
    dark: 'bg-dark-900 text-white hover:bg-dark-800 focus:ring-dark-700',
    light: 'bg-light-100 text-dark-800 hover:bg-light-200 focus:ring-light-300',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  const buttonContent = animate ? (
    <motion.span 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center"
    >
      {content}
    </motion.span>
  ) : content;

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled} {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;