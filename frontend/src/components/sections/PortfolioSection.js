import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RiArrowRightLine } from 'react-icons/ri';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A complete e-commerce solution with advanced product filtering, payment gateway integration, and inventory management.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    stats: {
      improvement: '150%',
      metric: 'Revenue Increase',
    },
    link: '/portfolio/e-commerce-platform',
  },
  {
    id: 2,
    title: 'AI Customer Service Chatbot',
    category: 'AI Solutions',
    description: 'An intelligent chatbot powered by natural language processing to handle customer inquiries and support requests.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
    stats: {
      improvement: '70%',
      metric: 'Support Cost Reduction',
    },
    link: '/portfolio/ai-customer-service-chatbot',
  },
  {
    id: 3,
    title: 'Real Estate Mobile App',
    category: 'Mobile App Development',
    description: 'A feature-rich mobile application for property listings, virtual tours, and real-time messaging between agents and clients.',
    image: 'https://images.unsplash.com/photo-1612299065617-f883adb67bd1',
    stats: {
      improvement: '35%',
      metric: 'User Engagement',
    },
    link: '/portfolio/real-estate-mobile-app',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl shadow-card group-hover:shadow-intense transition-all duration-300 h-full flex flex-col">
        {/* Project image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className="absolute inset-0 bg-dark-800/60 z-10 group-hover:bg-dark-800/40 transition-all"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-dark-900">
            <div className="text-right">
              <p className="text-xs font-medium">{project.stats.metric}</p>
              <p className="text-lg font-bold text-primary-600">{project.stats.improvement}</p>
            </div>
          </div>
        </div>
        
        {/* Project content */}
        <div className="p-6 flex flex-col flex-grow bg-white">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-dark-600 mb-5 flex-grow">
            {project.description}
          </p>
          <Link to={project.link} className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
            <span>View case study</span>
            <RiArrowRightLine className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <Section id="portfolio" background="light" spacing="large">
      <SectionHeading
        eyebrow="Our Portfolio"
        title="Success Stories That Drive Results"
        description="Explore our recent projects that showcase our expertise, innovation, and the measurable impact we've delivered for our clients."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            to="/portfolio" 
            variant="outline" 
            size="lg"
            icon={<RiArrowRightLine />}
            iconPosition="right"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default PortfolioSection;