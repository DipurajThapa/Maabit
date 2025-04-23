import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { RiArrowLeftLine, RiHome3Line } from 'react-icons/ri';

const NotFoundPage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Page Not Found | Maabit';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-950 flex items-center justify-center px-4 py-32"
    >
      <div className="text-center max-w-xl">
        <div className="mb-8">
          <svg 
            viewBox="0 0 200 200" 
            className="w-32 h-32 mx-auto text-primary-500 opacity-75"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fill="currentColor" 
              d="M100,15c-47,0-85,38-85,85s38,85,85,85s85-38,85-85S147,15,100,15z M100,165c-35.9,0-65-29.1-65-65s29.1-65,65-65s65,29.1,65,65S135.9,165,100,165z M80,125c0,5.5-4.5,10-10,10s-10-4.5-10-10s4.5-10,10-10S80,119.5,80,125z M140,125c0,5.5-4.5,10-10,10s-10-4.5-10-10s4.5-10,10-10S140,119.5,140,125z M100,85c-22.1,0-40,17.9-40,40h-10c0-27.6,22.4-50,50-50c27.6,0,50,22.4,50,50h-10C140,102.9,122.1,85,100,85z" 
            />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Page Not Found</h2>
        
        <p className="text-light-300 mb-8 text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            icon={<RiArrowLeftLine />}
          >
            Go Back
          </Button>
          
          <Button 
            to="/" 
            variant="primary" 
            icon={<RiHome3Line />}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;