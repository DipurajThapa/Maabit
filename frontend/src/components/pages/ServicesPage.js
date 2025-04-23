import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RiArrowRightLine, RiComputerLine, RiSmartphoneLine, RiCodeSSlashLine, RiBrainLine, RiCloudLine } from 'react-icons/ri';

const ServicesPage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Services | Maabit';
  }, []);

  const services = [
    {
      id: 'custom-software-development',
      icon: <RiCodeSSlashLine className="text-3xl" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements, built with cutting-edge technologies.',
      features: [
        'Custom business applications',
        'Enterprise software solutions',
        'Legacy system modernization',
        'Integration services',
        'Quality assurance & testing'
      ],
      link: '/services/custom-software-development',
    },
    {
      id: 'web-development',
      icon: <RiComputerLine className="text-3xl" />,
      title: 'Web Development',
      description: 'Responsive, high-performance websites and web applications that deliver exceptional user experiences.',
      features: [
        'Progressive web applications',
        'E-commerce solutions',
        'Content management systems',
        'Custom web portals',
        'API development & integration'
      ],
      link: '/services/web-development',
    },
    {
      id: 'mobile-app-development',
      icon: <RiSmartphoneLine className="text-3xl" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: [
        'iOS application development',
        'Android application development',
        'Cross-platform solutions',
        'Mobile app UI/UX design',
        'App maintenance & support'
      ],
      link: '/services/mobile-app-development',
    },
    {
      id: 'ai-solutions',
      icon: <RiBrainLine className="text-3xl" />,
      title: 'AI Solutions',
      description: 'Intelligent solutions powered by machine learning and natural language processing to automate and optimize processes.',
      features: [
        'Chatbot development',
        'Machine learning integration',
        'Natural language processing',
        'Data analysis & visualization',
        'Predictive analytics'
      ],
      link: '/services/ai-solutions',
    },
    {
      id: 'cloud-solutions',
      icon: <RiCloudLine className="text-3xl" />,
      title: 'Cloud Solutions',
      description: 'Scalable, secure cloud infrastructure and migration services to enhance performance and reduce costs.',
      features: [
        'Cloud migration strategy',
        'Infrastructure as code',
        'DevOps automation',
        'Microservices architecture',
        'Continuous integration/deployment'
      ],
      link: '/services/cloud-solutions',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Section background="dark" spacing="large" className="pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Our <span className="text-primary-400">Services</span>
          </h1>
          
          <p className="text-light-300 text-lg mb-8 max-w-2xl mx-auto">
            We deliver comprehensive software development services tailored to your unique business needs, helping you innovate and stay ahead in the digital landscape.
          </p>
        </motion.div>
      </Section>

      {/* Services List */}
      <Section background="white" spacing="large">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                </div>
                
                <p className="text-dark-600 text-lg mb-6">{service.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="mt-1 text-primary-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  to={service.link} 
                  variant="primary"
                  icon={<RiArrowRightLine />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </div>
              
              <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-2xl"></div>
                  <div className="glassmorphism p-4 md:p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"></div>
                    <img 
                      src={`https://images.unsplash.com/photo-151974214629${index}`} 
                      alt={service.title} 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default ServicesPage;