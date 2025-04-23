import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { RiCheckLine, RiTimeLine, RiTeamLine, RiAwardLine } from 'react-icons/ri';

const AboutSection = () => {
  const advantages = [
    {
      title: 'Expert Developers',
      description: 'Our team consists of senior-level developers with extensive experience across various technologies and industries.',
      icon: <RiTeamLine className="text-2xl" />,
    },
    {
      title: 'Agile Methodology',
      description: 'We follow agile development practices to ensure flexibility, transparency, and continuous delivery throughout the project.',
      icon: <RiTimeLine className="text-2xl" />,
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure we deliver robust, bug-free solutions that exceed expectations.',
      icon: <RiCheckLine className="text-2xl" />,
    },
    {
      title: 'Industry Recognition',
      description: 'Award-winning solutions and services recognized for innovation, design excellence, and technical achievement.',
      icon: <RiAwardLine className="text-2xl" />,
    },
  ];

  return (
    <Section id="about" background="primary" className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <circle cx="200" cy="200" r="200" fill="white" />
            <circle cx="200" cy="200" r="150" fill="white" />
            <circle cx="200" cy="200" r="100" fill="white" />
            <circle cx="200" cy="200" r="50" fill="white" />
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-intense">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Our team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent"></div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between">
              <div className="text-white">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="text-white">
                <p className="text-4xl font-bold">200+</p>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="text-white">
                <p className="text-4xl font-bold">50+</p>
                <p className="text-sm">Tech Experts</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-500 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-full opacity-30 blur-xl"></div>
        </motion.div>
        
        {/* Content column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
            About Maabit
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark-900">
            Transforming Ideas Into <span className="text-primary-600">Powerful Digital</span> Solutions
          </h2>
          
          <p className="text-dark-600 mb-8 text-lg">
            Founded in 2013, Maabit has grown from a small development team to a comprehensive software agency serving clients worldwide. Our mission is to help businesses leverage technology to solve complex problems and achieve their goals.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{advantage.title}</h3>
                  <p className="text-dark-600 text-sm">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <Button to="/about" variant="primary" size="lg">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;