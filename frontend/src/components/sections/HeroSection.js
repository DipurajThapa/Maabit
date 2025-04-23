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

            {/* Client logos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-10 border-t border-white/10"
            >
              <p className="text-sm text-light-400 mb-6">Trusted by industry leaders:</p>
              <div className="flex flex-wrap items-center gap-8">
                {/* Add logos with appropriate styling */}
                <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                  <svg className="h-full w-auto" viewBox="0 0 124 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.5 10.5C23.5 10.5 21 11.5 19 13.7C17 16 16 18.7 16 22C16 25.2 17 28 19 30.2C21 32.4 23.5 33.5 26.5 33.5C29.6 33.5 32.1 32.4 34.1 30.2C36.1 28 37.1 25.3 37.1 22C37.1 18.7 36.1 16 34.1 13.7C32.1 11.5 29.6 10.5 26.5 10.5ZM30.7 26.8C29.5 28 28.1 28.6 26.5 28.6C24.9 28.6 23.6 28 22.4 26.8C21.2 25.6 20.6 24 20.6 22C20.6 20 21.2 18.4 22.4 17.2C23.6 16 24.9 15.4 26.5 15.4C28.1 15.4 29.5 16 30.7 17.2C31.9 18.4 32.5 20 32.5 22C32.5 24 31.9 25.6 30.7 26.8Z" fill="white"/>
                    <path d="M57.4 11H53.2L45.6 18.8V0.9H41V33H45.6V25.5L48.5 22.5L54.5 33H60.2L51.7 18.7L57.4 11Z" fill="white"/>
                    <path d="M60.7 26.6C60.7 28.1 61.2 29.3 62.3 30.2C63.4 31.1 64.6 31.5 66.1 31.5C68.2 31.5 69.8 30.7 71 29L74.1 31.9C72 33.6 69.2 34.5 65.8 34.5C62.8 34.5 60.3 33.5 58.4 31.6C56.5 29.7 55.6 27.2 55.6 24.2C55.6 21.2 56.5 18.7 58.4 16.8C60.3 14.9 62.6 13.9 65.4 13.9C68.2 13.9 70.5 14.9 72.3 16.8C74.1 18.7 75 21.2 75 24.1C75 24.5 75 25 74.9 26.6H60.7ZM60.6 23.2H70.6C70.4 21.8 69.8 20.7 68.8 19.8C67.8 19 66.7 18.5 65.3 18.5C63.8 18.5 62.5 19 61.5 19.9C60.6 20.9 60.1 21.9 60.6 23.2Z" fill="white"/>
                    <path d="M92.9 15.4L89.1 16.6C88.6 15.5 87.7 14.9 86.4 14.9C85.8 14.9 85.3 15.1 84.9 15.4C84.5 15.8 84.3 16.2 84.3 16.7C84.3 17.7 85.1 18.4 86.8 18.7L89.3 19.3C95 20.5 96 23.7 96 24.7C96 26.7 95.1 28.4 93.3 29.7C91.5 31 89.3 31.6 86.8 31.6C81.9 31.6 78.9 29.3 77.9 24.8L82 23.6C82.4 25.8 84 26.9 86.8 26.9C89.3 26.9 90.5 26 90.5 24.2C90.5 23.4 90 22.7 89 22.4L86.1 21.7C84.2 21.3 82.8 20.6 81.9 19.5C81 18.5 80.6 17.3 80.6 16C80.6 14.2 81.3 12.7 82.8 11.5C84.3 10.3 86 9.7 88.1 9.7C91.4 9.8 92.4 13.1 92.9 15.4Z" fill="white"/>
                    <path d="M103 0.8H97.1V33H103V0.8Z" fill="white"/>
                    <path d="M124 25.2C124 27.4 123.2 29.2 121.5 30.6C119.8 32 117.7 32.7 115.1 32.7C112 32.7 109.6 31.8 107.6 30L110.3 25.7C111.7 27 113.3 27.6 115.1 27.6C117.5 27.6 118.6 26.7 118.6 24.8V24.7C118.6 23.1 117.3 22.3 114.3 22.3H111.8V17.8H114.1C116.4 17.8 117.9 16.8 117.9 15.1V15C117.9 13.4 116.8 12.5 114.8 12.5C113.1 12.5 111.6 13.1 110.2 14.3L107.5 10.1C109.7 8.1 112.5 7.2 115.9 7.2C118.3 7.2 120.2 7.7 121.7 8.8C123.2 9.9 124 11.4 124 13.5V13.6C124 16.4 122.3 18.1 120.3 18.9C122.8 19.6 124 21.3 124 24.1V25.2Z" fill="white"/>
                    <path d="M7.5 11H0V33H5.6V24.1H7.5C12 24.1 15.5 21.3 15.5 17.5V17.4C15.5 13.8 12.2 11 7.5 11ZM9.9 17.8C9.9 19.2 8.8 20.1 7 20.1H5.6V15.1H6.9C8.7 15.1 9.9 15.9 9.9 17.4V17.8Z" fill="white"/>
                  </svg>
                </div>
                <div className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity">
                  <svg className="h-full w-auto" viewBox="0 0 124 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9172 0.3338C58.5472 0.3338 55.8172 1.60047 53.8506 4.1338H53.6839V0.991133H47.4839V30.8411H54.1006V20.2678H54.2672C56.0672 22.6345 58.6339 23.8178 61.9172 23.8178C65.2006 23.8178 67.9306 22.5512 70.1006 20.0178C72.3006 17.4645 73.4006 14.2111 73.4006 10.2745C73.4006 6.4245 72.3006 3.19117 70.1006 0.657799C67.9306 1.10454 65.2006 0.3338 61.9172 0.3338ZM60.3339 6.7845C62.2339 6.7845 63.7506 7.4245 64.8839 8.72117C66.0172 9.99784 66.5839 11.8411 66.5839 14.2111C66.5839 16.5812 66.0172 18.4245 64.8839 19.7145C63.7506 20.9845 62.2339 21.6245 60.3339 21.6245C58.4506 21.6245 56.9339 20.9845 55.8006 19.7145C54.6672 18.4245 54.1006 16.5812 54.1006 14.2111C54.1006 11.8411 54.6672 9.99784 55.8006 8.72117C56.9339 7.4245 58.4506 6.7845 60.3339 6.7845Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M87.2347 0.3338C83.8647 0.3338 81.1347 1.60047 79.1681 4.1338H79.0014V0.991133H72.8014V30.8411H79.4181V20.2678H79.5847C81.3847 22.6345 83.9514 23.8178 87.2347 23.8178C90.5181 23.8178 93.2481 22.5512 95.4181 20.0178C97.6181 17.4645 98.7181 14.2111 98.7181 10.2745C98.7181 6.4245 97.6181 3.19117 95.4181 0.657799C93.2481 1.10454 90.5181 0.3338 87.2347 0.3338ZM85.6514 6.7845C87.5514 6.7845 89.0681 7.4245 90.2014 8.72117C91.3347 9.99784 91.9014 11.8411 91.9014 14.2111C91.9014 16.5812 91.3347 18.4245 90.2014 19.7145C89.0681 20.9845 87.5514 21.6245 85.6514 21.6245C83.7681 21.6245 82.2514 20.9845 81.1181 19.7145C79.9847 18.4245 79.4181 16.5812 79.4181 14.2111C79.4181 11.8411 79.9847 9.99784 81.1181 8.72117C82.2514 7.4245 83.7681 6.7845 85.6514 6.7845Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M123.369 12.4328V0.991138H116.753V12.1528C116.753 15.0661 115.519 16.5361 113.053 16.5361C110.603 16.5361 109.369 15.0661 109.369 12.1528V0.991138H102.753V12.4328C102.753 15.9495 103.669 18.6561 105.519 20.5695C107.353 22.4828 109.953 23.4328 113.286 23.4328C116.603 23.4328 119.203 22.4828 121.053 20.5695C122.886 18.6561 123.369 15.9495 123.369 12.4328Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.25146 1.85617L18.6848 1.85617L18.6848 19.9362C18.6848 21.3896 18.3515 22.5229 17.6848 23.3495C17.0381 24.1762 16.0848 24.5895 14.8348 24.5895C13.6048 24.5895 12.6348 24.1762 11.9515 23.3495C11.2848 22.5229 10.9515 21.3896 10.9515 19.9362L10.9515 11.9095H4.58479L4.58479 20.1229C4.58479 23.9362 5.63479 26.8495 7.73479 28.8495C9.83479 30.8495 12.6048 31.8495 16.0515 31.8495C19.3982 31.8495 22.0515 30.8495 24.0515 28.8495C26.0315 26.8495 27.0315 23.9362 27.0315 20.1229L27.0315 1.85617L36.4648 1.85617V31.2029H30.4648V28.0595H30.2982C28.5382 30.5862 25.9515 31.8495 22.5382 31.8495C19.8848 31.8495 17.6848 31.1829 15.9515 29.8462C14.2348 28.5095 12.9115 26.6662 12.0315 24.3162H11.8648C11.2181 26.5329 10.0315 28.3362 8.30146 29.7095C6.58479 31.0695 4.55146 31.7495 2.20146 31.7495C1.59626 31.7495 1.00618 31.6981 0.434967 31.5962L0.434967 24.6962C0.714967 24.7495 1.00585 24.7762 1.29918 24.7762C3.99918 24.7762 5.34918 23.1895 5.34918 20.0162L5.34918 9.3362H0.518301V1.85617L9.25146 1.85617Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M38.2506 0.991138H44.6106V31.3378H38.2506V0.991138Z" fill="white"/>
                  </svg>
                </div>
                <div className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity">
                  <svg className="h-full w-auto" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6 11.6H32V21.8H34.2V18.3H36.6C39 18.3 40.7 16.8 40.7 14.9C40.8 13 39.1 11.6 36.6 11.6ZM36.5 16.3H34.3V13.6H36.5C37.8 13.6 38.5 14.2 38.5 14.9C38.5 15.7 37.7 16.3 36.5 16.3Z" fill="white"/>
                    <path d="M44.3 21.8L45.7 18.7H50.9L52.3 21.8H54.8L49.6 11.3H47.1L41.9 21.8H44.3ZM46.5 16.7L48.2 13.2H48.3L50 16.7H46.5Z" fill="white"/>
                    <path d="M67.2 21.8V11.6H65V18.2L59.3 11.6H57.1V21.8H59.3V15.2L65 21.8H67.2Z" fill="white"/>
                    <path d="M70.6 21.8H79.4V19.8H72.8V17.5H78.6V15.5H72.8V13.6H79.2V11.6H70.6V21.8Z" fill="white"/>
                    <path d="M87.3 11.6H82.7V21.8H84.9V18.3H87.3C89.7 18.3 91.4 16.8 91.4 14.9C91.5 13 89.8 11.6 87.3 11.6ZM87.2 16.3H85V13.6H87.2C88.5 13.6 89.2 14.2 89.2 14.9C89.2 15.7 88.5 16.3 87.2 16.3Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.6 10.4C27.5 7.8 24.8 6 21.8 6C17.7 6 14.4 9.3 14.4 13.4C14.4 14.1 14.5 14.8 14.7 15.4C13.3 15.5 12.2 15.3 11.3 14.8C10.1 14.2 9.5 13.1 9.5 11.7C9.5 10.7 9.8 9.7 10.3 8.8C10.8 8 11.5 7.2 12.3 6.6L12.4 6.5L11.1 4.2L10.9 4.3C9.9 5 9 5.9 8.3 7C7.5 8.1 7.1 9.5 7.1 11C7.1 13.2 8 14.7 9.9 15.8C11.2 16.5 12.7 16.8 14.3 16.8C14.4 16.8 14.5 16.8 14.6 16.8C15.8 18.8 18 20.2 20.5 20.2C20.8 20.2 21.2 20.2 21.4 20.1C22.4 22.1 24.5 23.4 26.9 23.4C31 23.4 34.3 20.1 34.3 16C34.3 13.6 32.4 11.4 29.9 10.7C29.4 10.5 28.9 10.4 28.6 10.4ZM26.9 21C25.1 21 23.3 20 22.6 18.3C22.3 17.6 22.5 16.8 23.1 16.3C23.4 16.1 23.7 16 24.1 16C24.5 16 25 16.1 25.3 16.3C25.9 16.7 26.2 17.2 26.2 17.9C26.2 18.1 26.1 18.4 26 18.7C25.8 19.2 25.3 19.5 24.8 19.5H24.7C24.4 19.5 24.1 19.4 23.9 19.2L23.7 19.1L23.1 20.5L23.3 20.6C23.7 20.9 24.2 21 24.7 21H24.9C26.1 21 27.1 20.2 27.5 19.1C27.7 18.5 27.8 18 27.8 17.4C27.8 16.6 27.5 15.6 26.8 14.8C26.5 14.4 26.1 14 25.7 13.8C26.1 13.7 26.6 13.6 27 13.6C28.8 13.6 30.4 14.7 31 16.4C31.2 17 31.3 17.6 31.3 18.2C31.2 19.8 29.2 21 26.9 21ZM21.8 8.4C23.6 8.4 25.1 9.9 25.1 11.7C25.1 13.5 23.6 15 21.8 15C20 15 18.5 13.5 18.5 11.7C18.5 9.9 20 8.4 21.8 8.4Z" fill="white"/>
                  </svg>
                </div>
                <div className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity">
                  <svg className="h-full w-auto" viewBox="0 0 124 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 14C25.5 20.9 19.9 26.5 13 26.5C6.1 26.5 0.5 20.9 0.5 14C0.5 7.1 6.1 1.5 13 1.5C19.9 1.5 25.5 7.1 25.5 14Z" fill="#FF5F00"/>
                    <path d="M13 1.5C8.2 1.5 4 4.1 1.7 8C6.1 13.8 13.4 16.5 20.7 14.8C28 13 33.3 7.2 34.3 0C31 0.5 27.8 1.5 25 3.2C21.5 5.4 17 1.5 13 1.5Z" fill="white"/>
                    <path d="M121.7 12.4V18.6H119.4V7.3H123.8C125.4 7.3 126.5 8.4 126.5 9.9C126.5 11.4 125.3 12.4 123.8 12.4H121.7ZM123.6 10.5C123.6 10.5 123.7 10.5 123.7 10.5C124.2 10.5 124.5 10.2 124.5 9.8C124.5 9.4 124.2 9.1 123.7 9.1C123.7 9.1 123.6 9.1 123.6 9.1H121.7V10.5H123.6Z" fill="white"/>
                    <path d="M108.8 7.3H111.8L115.6 18.6H113.3L112.6 16.7H108L107.2 18.6H105L108.8 7.3ZM112 14.7L110.3 9.8L108.7 14.7H112Z" fill="white"/>
                    <path d="M99.9 7.3H102.1V16.8H106.4V18.7H99.9V7.3Z" fill="white"/>
                    <path d="M94.6 7.3H96.8V18.6H94.6V7.3Z" fill="white"/>
                    <path d="M85.4 15.5L83.1 7.3H80.9V18.6H83.1V10.3L85.4 18.6H87.7L90 10.3V18.6H92.2V7.3H90L87.7 15.5H85.4Z" fill="white"/>
                    <path d="M72.8 7.3H80.2V9.2H76.7V11.7H80.1V13.6H76.7V16.7H80.2V18.6H72.8V7.3Z" fill="white"/>
                    <path d="M62.5 7.3H69.9V9.2H66.4V11.7H69.8V13.6H66.4V16.7H69.9V18.6H62.5V7.3Z" fill="white"/>
                    <path d="M54.3 7.3H56.5V16.8H60.8V18.7H54.3V7.3Z" fill="white"/>
                    <path d="M44.9 7.3H47.9L51.7 18.6H49.4L48.7 16.7H44.1L43.3 18.6H41.1L44.9 7.3ZM48.1 14.7L46.4 9.8L44.8 14.7H48.1Z" fill="white"/>
                    <path d="M40.2 12.4V18.6H37.9V7.3H42.3C43.9 7.3 45 8.4 45 9.9C45 11.4 43.8 12.4 42.3 12.4H40.2ZM42.1 10.5C42.1 10.5 42.2 10.5 42.2 10.5C42.7 10.5 43 10.2 43 9.8C43 9.4 42.7 9.1 42.2 9.1C42.2 9.1 42.1 9.1 42.1 9.1H40.2V10.5H42.1Z" fill="white"/>
                  </svg>
                </div>
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