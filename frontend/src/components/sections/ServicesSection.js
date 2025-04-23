import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { RiArrowRightLine, RiComputerLine, RiSmartphoneLine, RiCodeSSlashLine, RiBrainLine, RiCloudLine } from 'react-icons/ri';

const ServiceCard = ({ title, description, icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card card-hover group"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-5 w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center text-2xl">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-dark-600 mb-5 flex-grow">{description}</p>
        
        <Link to={link} className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors mt-auto">
          <span>Learn more</span>
          <RiArrowRightLine className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <RiCodeSSlashLine />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements, built with cutting-edge technologies.',
      link: '/services/custom-software-development',
    },
    {
      icon: <RiComputerLine />,
      title: 'Web Development',
      description: 'Responsive, high-performance websites and web applications that deliver exceptional user experiences.',
      link: '/services/web-development',
    },
    {
      icon: <RiSmartphoneLine />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      link: '/services/mobile-app-development',
    },
    {
      icon: <RiBrainLine />,
      title: 'AI Solutions',
      description: 'Intelligent solutions powered by machine learning and natural language processing to automate and optimize processes.',
      link: '/services/ai-solutions',
    },
    {
      icon: <RiCloudLine />,
      title: 'Cloud Solutions',
      description: 'Scalable, secure cloud infrastructure and migration services to enhance performance and reduce costs.',
      link: '/services/cloud-solutions',
    },
  ];

  return (
    <Section id="services" background="white" spacing="large">
      <SectionHeading
        eyebrow="Our Services"
        title="Comprehensive Digital Solutions"
        description="We offer a full spectrum of software development services to help businesses innovate, transform, and grow in the digital landscape."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-dark-900 text-white rounded-lg hover:bg-dark-800 transition-colors"
          >
            <span>View All Services</span>
            <RiArrowRightLine className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default ServicesSection;