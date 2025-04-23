import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { RiArrowLeftLine, RiArrowRightLine, RiDownloadLine } from 'react-icons/ri';

const servicesData = {
  'custom-software-development': {
    title: 'Custom Software Development',
    subtitle: 'Tailored Software Solutions for Your Business',
    description: 'We create bespoke software applications designed to address your specific business challenges, optimize processes, and drive growth.',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
    benefits: [
      'Solutions tailored to your exact requirements',
      'Streamlined business processes and improved efficiency',
      'Enhanced data security and compliance',
      'Scalable architecture for future growth',
      'Ongoing support and maintenance',
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'Angular', 'AWS', 'Azure', '.NET'],
    process: [
      { title: 'Requirements Analysis', description: 'We work closely with you to understand your business needs and define detailed requirements.' },
      { title: 'Solution Design', description: 'Our architects design a robust solution that addresses your needs and leverages appropriate technologies.' },
      { title: 'Development', description: 'Our skilled developers build your solution following industry best practices and quality standards.' },
      { title: 'Testing & QA', description: 'Rigorous testing ensures your software is reliable, secure, and performs optimally.' },
      { title: 'Deployment', description: 'We deploy your solution and provide comprehensive training for your team.' },
      { title: 'Maintenance & Support', description: 'Ongoing support and maintenance ensures your software continues to deliver value.' },
    ],
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Creating Powerful Web Experiences',
    description: 'We design and develop responsive, high-performance websites and web applications that deliver exceptional user experiences and drive business results.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    benefits: [
      'Responsive design that works across all devices',
      'Optimized for search engines and conversions',
      'Fast-loading pages and smooth performance',
      'Secure, scalable architecture',
      'Content management system integration',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'WordPress', 'Shopify', 'HTML5/CSS3', 'JavaScript'],
    process: [
      { title: 'Discovery', description: 'We analyze your business goals, target audience, and competitive landscape.' },
      { title: 'UX/UI Design', description: 'Our designers create intuitive, engaging user interfaces that align with your brand.' },
      { title: 'Development', description: 'We build your website or web application using modern technologies and best practices.' },
      { title: 'Testing', description: 'Comprehensive testing across devices and browsers ensures a flawless user experience.' },
      { title: 'Launch', description: 'We deploy your website and optimize for performance and security.' },
      { title: 'Ongoing Support', description: 'Continuous monitoring and updates keep your web presence current and secure.' },
    ],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    subtitle: 'Native & Cross-Platform Mobile Solutions',
    description: 'We create engaging, high-performance mobile applications for iOS and Android that help you connect with your audience and achieve your business objectives.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6',
    benefits: [
      'Native experience on iOS and Android platforms',
      'Intuitive, user-friendly interfaces',
      'Offline functionality and reliable performance',
      'Secure data handling and storage',
      'Integration with device features (camera, GPS, etc.)',
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase', 'iOS SDK', 'Android SDK'],
    process: [
      { title: 'Strategy & Planning', description: 'We define your app's objectives, target users, and core functionality.' },
      { title: 'UX/UI Design', description: 'Our designers create intuitive, engaging mobile interfaces following platform guidelines.' },
      { title: 'Development', description: 'We build your app using the most appropriate technology for your needs.' },
      { title: 'Testing', description: 'Rigorous testing on real devices ensures optimal performance and reliability.' },
      { title: 'Deployment', description: 'We handle the app store submission process and optimize for discoverability.' },
      { title: 'Monitoring & Updates', description: 'Ongoing support, analytics, and updates keep your app competitive.' },
    ],
  },
  'ai-solutions': {
    title: 'AI Solutions',
    subtitle: 'Intelligent Automation & Decision Support',
    description: 'We develop AI-powered solutions that automate processes, enhance decision-making, and unlock insights from your data to drive business growth and innovation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    benefits: [
      'Automation of repetitive tasks and processes',
      'Enhanced customer experiences through personalization',
      'Data-driven insights for better decision making',
      'Improved operational efficiency',
      'Competitive advantage through innovation',
    ],
    technologies: ['Machine Learning', 'Natural Language Processing', 'Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Chatbot Frameworks'],
    process: [
      { title: 'Problem Definition', description: 'We work with you to identify opportunities where AI can add value to your business.' },
      { title: 'Data Assessment', description: 'We evaluate your data sources and requirements for AI implementation.' },
      { title: 'Algorithm Selection', description: 'Our experts select the most appropriate AI approaches and algorithms for your needs.' },
      { title: 'Development & Training', description: 'We develop and train AI models using your data or appropriate datasets.' },
      { title: 'Integration', description: 'We integrate AI solutions into your existing systems and workflows.' },
      { title: 'Monitoring & Refinement', description: 'Continuous monitoring and refinement ensure optimal AI performance over time.' },
    ],
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Secure, Scalable Cloud Infrastructure',
    description: 'We help businesses design, implement, and manage cloud infrastructure that enhances performance, reduces costs, and provides the flexibility to scale as your needs evolve.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    benefits: [
      'Reduced infrastructure costs and maintenance',
      'Enhanced scalability and flexibility',
      'Improved reliability and disaster recovery',
      'Automated deployment and management',
      'Enhanced security and compliance',
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
    process: [
      { title: 'Assessment', description: 'We evaluate your current infrastructure and define cloud migration objectives.' },
      { title: 'Strategy & Architecture', description: 'Our architects design a cloud solution that meets your requirements and optimizes costs.' },
      { title: 'Migration Planning', description: 'We develop a comprehensive plan for migrating your systems to the cloud.' },
      { title: 'Implementation', description: 'Our team executes the migration with minimal disruption to your operations.' },
      { title: 'Optimization', description: 'We optimize your cloud resources for performance, security, and cost-efficiency.' },
      { title: 'Ongoing Management', description: 'Continuous monitoring and management ensure optimal cloud operations.' },
    ],
  },
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  
  // Set document title
  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Maabit`;
    } else {
      document.title = 'Service Not Found | Maabit';
    }
  }, [service]);

  if (!service) {
    return (
      <Section background="white" spacing="large" className="pt-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Button to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Section background="dark" spacing="large" className="pt-32">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center text-light-300 hover:text-primary-400 mb-8 transition-colors">
            <RiArrowLeftLine className="mr-2" />
            <span>Back to Services</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {service.title}
              </h1>
              
              <h2 className="text-xl md:text-2xl text-primary-400 mb-6">
                {service.subtitle}
              </h2>
              
              <p className="text-light-300 text-lg mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Request a Consultation
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  href="#" 
                  className="border-white/20 text-white hover:bg-white/10"
                  icon={<RiDownloadLine />}
                >
                  Download Brochure
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glassmorphism p-4 md:p-6 rounded-2xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section background="white" spacing="normal">
        <SectionHeading
          eyebrow="Benefits"
          title={`Why Choose Our ${service.title}`}
          description="Our solutions are designed to deliver measurable business value and address your specific challenges."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-light-50 rounded-xl p-6 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg">{benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Technologies Section */}
      <Section background="light" spacing="normal">
        <SectionHeading
          eyebrow="Technologies"
          title="Technologies We Use"
          description={`Our ${service.title} leverages modern technologies to deliver robust, scalable solutions.`}
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {service.technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white px-6 py-3 rounded-lg shadow-soft"
            >
              <span className="font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Process Section */}
      <Section background="white" spacing="normal">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
          description={`Our structured approach to ${service.title} ensures efficient delivery and exceptional results.`}
        />
        
        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-100 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:pr-12 lg:pr-24' : 'md:flex-row-reverse md:pl-12 lg:pl-24'}`}>
                  <div className="md:w-1/2 relative z-10">
                    <div className="bg-white rounded-xl p-6 shadow-card h-full">
                      <div className="mb-4">
                        <span className="inline-block w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-dark-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                  
                  <div className="absolute left-1/2 top-8 w-6 h-6 rounded-full bg-primary-500 transform -translate-x-1/2 z-20 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" spacing="normal">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your {service.title} requirements and discover how we can help you achieve your business goals.
          </p>
          
          <Button 
            to="/contact" 
            variant="light" 
            size="lg"
            icon={<RiArrowRightLine />}
            iconPosition="right"
            className="text-primary-700"
          >
            Schedule a Consultation
          </Button>
        </div>
      </Section>
      
      {/* Related Services */}
      <Section background="white" spacing="normal">
        <SectionHeading
          eyebrow="Explore More"
          title="Related Services"
          description="Discover our other services that complement our solutions and help you achieve comprehensive digital transformation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {Object.entries(servicesData)
            .filter(([id]) => id !== serviceId)
            .slice(0, 3)
            .map(([id, relatedService], index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card card-hover group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  {relatedService.title}
                </h3>
                
                <p className="text-dark-600 mb-5">
                  {relatedService.description.substring(0, 120)}...
                </p>
                
                <Link to={`/services/${id}`} className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                  <span>Learn more</span>
                  <RiArrowRightLine className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default ServiceDetailPage;