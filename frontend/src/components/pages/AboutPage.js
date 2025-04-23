import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RiTeamLine, RiAwardLine, RiHistoryLine, RiUserHeartLine } from 'react-icons/ri';

const AboutPage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'About Us | Maabit';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Section background="dark" spacing="large" className="pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                We're Building the <span className="text-primary-400">Digital Future</span>
              </h1>
              
              <p className="text-light-300 text-lg mb-8 max-w-lg">
                Founded in 2013, Maabit has grown from a small development team to a comprehensive software agency serving clients worldwide. Our mission is to help businesses leverage technology to solve complex problems and achieve their goals.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-primary-400">
                  <RiTeamLine className="text-xl" />
                  <span className="text-white">50+ Tech Experts</span>
                </div>
                <div className="flex items-center gap-2 text-primary-400">
                  <RiAwardLine className="text-xl" />
                  <span className="text-white">Award-winning Agency</span>
                </div>
                <div className="flex items-center gap-2 text-primary-400">
                  <RiHistoryLine className="text-xl" />
                  <span className="text-white">10+ Years Experience</span>
                </div>
              </div>
              
              <Button to="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-intense">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Content placeholders - would be expanded in a full implementation */}
      <Section background="white" spacing="large">
        <SectionHeading
          eyebrow="Our Story"
          title="The Journey of Innovation and Excellence"
          description="From our humble beginnings to becoming a leading software development agency, our journey has been defined by innovation, client success, and technical excellence."
        />
        
        <div className="mt-12 text-center">
          <p className="text-dark-600 text-lg mb-8">
            This page would include detailed information about company history, mission, values, team, and achievements.
            <br />
            <br />
            In a full implementation, this would be a comprehensive page with multiple sections highlighting the company's unique story and culture.
          </p>
        </div>
      </Section>
    </motion.div>
  );
};

export default AboutPage;