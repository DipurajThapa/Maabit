import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
  children,
  className = '',
  id,
  background = 'light',
  spacing = 'normal',
  containerClassName = '',
  divider = false,
  animate = true,
}) => {
  const backgrounds = {
    light: 'bg-light-50',
    white: 'bg-white',
    dark: 'bg-dark-950 text-white',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white',
    gradientDark: 'bg-gradient-to-r from-dark-900 to-dark-700 text-white',
    none: '',
  };

  const spacings = {
    small: 'py-8 md:py-12',
    normal: 'py-12 md:py-20 lg:py-24',
    large: 'py-16 md:py-24 lg:py-32',
    none: '',
  };

  const sectionClasses = `${backgrounds[background]} ${spacings[spacing]} ${divider ? 'border-b border-gray-200' : ''} ${className}`;

  const containerClasses = `container-custom relative z-10 ${containerClassName}`;

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      }
    }
  };

  return (
    <section id={id} className={sectionClasses}>
      {animate ? (
        <motion.div
          className={containerClasses}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
        >
          {children}
        </motion.div>
      ) : (
        <div className={containerClasses}>
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;