import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements through in-depth consultations.',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive user interfaces and interactive prototypes that align with your brand identity and user needs.',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Our expert developers build your solution using cutting-edge technologies, with continuous testing to ensure quality.',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution, provide comprehensive training, and offer ongoing maintenance and support services.',
    },
  ];

  return (
    <Section id="process" background="light" spacing="large">
      <SectionHeading
        eyebrow="Our Process"
        title="How We Bring Your Vision to Life"
        description="Our proven development methodology ensures transparent communication, efficient execution, and exceptional results for every project."
      />
      
      <div className="relative mt-16">
        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-card h-full relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xl font-bold mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-dark-600">{step.description}</p>
              </div>
              
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2 z-0 pl-6 pr-6">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-primary-400"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-primary-100 hidden lg:block"></div>
      </div>
      
      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      >
        <div className="bg-primary-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-2 text-primary-700">Transparent Communication</h4>
          <p className="text-dark-600">Regular updates and clear communication throughout the project lifecycle.</p>
        </div>
        <div className="bg-primary-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-2 text-primary-700">Flexible Methodology</h4>
          <p className="text-dark-600">Agile approach that adapts to changing requirements and priorities.</p>
        </div>
        <div className="bg-primary-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-2 text-primary-700">Quality Assurance</h4>
          <p className="text-dark-600">Rigorous testing protocols to ensure reliable, high-performance solutions.</p>
        </div>
      </motion.div>
    </Section>
  );
};

export default ProcessSection;