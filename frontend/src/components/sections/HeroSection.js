import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useModal } from '../../context/ModalContext';
import { RiArrowRightLine, RiCalendarLine } from 'react-icons/ri';

const HeroSection = () => {
  const { openModal } = useModal();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Apply subtle parallax effect to the background elements
      const elements = container.querySelectorAll('.parallax-element');
      elements.forEach(el => {
        const speed = el.dataset.speed || 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        el.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-dark-950 text-white overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary-700 rounded-full filter blur-[120px] mix-blend-multiply parallax-element" data-speed="30"></div>
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-secondary-700 rounded-full filter blur-[120px] mix-blend-multiply parallax-element" data-speed="20"></div>
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-accent-700 rounded-full filter blur-[100px] mix-blend-multiply parallax-element" data-speed="40"></div>
      </div>

      {/* Hero background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3" 
          alt="Code background" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-dark-950 z-0"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptLTQtMzJoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary-300 text-sm font-medium mb-6">
                Ultimate Software Development Agency
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Transform Your <span className="text-primary-400">Digital Vision</span> Into Reality
              </h1>
              
              <p className="text-lg md:text-xl text-light-300 mb-8 max-w-xl">
                We craft innovative software, web, mobile, and AI solutions that help businesses grow, scale, and thrive in the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={openModal}
                  icon={<RiCalendarLine />}
                  animate={true}
                >
                  Book a Discovery Call
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  to="/services"
                  className="border-white/20 text-white hover:bg-white/10"
                  icon={<RiArrowRightLine />}
                  iconPosition="right"
                  animate={true}
                >
                  Explore Services
                </Button>
              </div>
            </motion.div>


          </div>

          {/* Hero image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-2xl"></div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="glassmorphism p-4 md:p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"></div>
                <img 
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3" 
                  alt="Software Development" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary-500/30 rounded-full filter blur-xl"></div>
                <div className="absolute top-4 right-4 text-xs bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/80">
                  Modern Software Solutions
                </div>
              </div>
              
              {/* Stats */}
              <div className="absolute -bottom-6 -right-6 glassmorphism p-4 rounded-xl shadow-glass max-w-[180px] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">Client Satisfaction</p>
                    <p className="text-white text-xl font-bold">98%</p>
                  </div>
                </div>
              </div>
              
              {/* Tech badge */}
              <div className="absolute -top-4 -left-4 glassmorphism p-3 rounded-xl shadow-glass hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/20 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs">Modern Tech Stack</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,122.7C672,128,768,160,864,160C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;