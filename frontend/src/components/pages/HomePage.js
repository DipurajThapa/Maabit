import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import AboutSection from '../sections/AboutSection';
import PortfolioSection from '../sections/PortfolioSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ProcessSection from '../sections/ProcessSection';
import StatsSection from '../sections/StatsSection';
import CTASection from '../sections/CTASection';

const HomePage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Maabit - Ultimate Software Development Agency';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
};

export default HomePage;