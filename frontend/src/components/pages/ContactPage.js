import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiCheckLine } from 'react-icons/ri';
import { useModal } from '../../context/ModalContext';

const ContactPage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Contact Us | Maabit';
  }, []);

  const { openModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
            Let's <span className="text-primary-400">Connect</span>
          </h1>
          
          <p className="text-light-300 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? Get in touch with our team to discuss your requirements and discover how we can help you achieve your goals.
          </p>
        </motion.div>
      </Section>

      {/* Contact Methods */}
      <Section background="white" spacing="normal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-light-50 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mx-auto mb-4">
              <RiPhoneLine />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-dark-600 mb-4">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+11234567890" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              +1 (123) 456-7890
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-light-50 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mx-auto mb-4">
              <RiMailLine />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-dark-600 mb-4">We'll respond within 24 hours</p>
            <a href="mailto:contact@maabit.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              contact@maabit.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-light-50 rounded-xl p-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl mx-auto mb-4">
              <RiMapPinLine />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-dark-600 mb-4">123 Tech Street, Suite 100</p>
            <p className="text-primary-600 font-medium">
              Silicon Valley, CA 94025
            </p>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={openModal} 
            variant="primary" 
            size="lg"
            icon={<RiTimeLine />}
          >
            Schedule a 15-Minute Call
          </Button>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="light" spacing="large">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            
            <p className="text-dark-600 mb-8">
              Fill out the form below to tell us about your project, and we'll get back to you as soon as possible.
            </p>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <RiCheckLine className="text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">Message Sent!</h3>
                </div>
                <p className="text-green-700">
                  Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-dark-700 font-medium mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-dark-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-dark-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-dark-700 font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-dark-700 font-medium mb-2">
                    Service of Interest*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                  >
                    <option value="">Select a Service</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark-700 font-medium mb-2">
                    Project Details*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-32">
              <div className="bg-dark-900 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">What is your typical project timeline?</h4>
                    <p className="text-light-300">
                      Project timelines vary based on scope and complexity. A typical web development project might take 8-12 weeks, while a complex software solution could take 4-6 months.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Do you offer maintenance services?</h4>
                    <p className="text-light-300">
                      Yes, we provide ongoing maintenance and support for all our solutions, ensuring they remain secure, up-to-date, and performing optimally.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">What is your pricing model?</h4>
                    <p className="text-light-300">
                      We offer flexible pricing models including fixed-price, time and materials, and retainer arrangements based on your project requirements and preferences.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">How do you ensure project quality?</h4>
                    <p className="text-light-300">
                      We follow industry best practices, conduct rigorous testing at each development stage, and maintain transparent communication throughout the project.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready for a Quick Chat?</h3>
                <p className="mb-6">
                  Schedule a free 15-minute consultation to discuss your project with one of our experts.
                </p>
                <Button 
                  onClick={openModal} 
                  variant="light" 
                  className="w-full text-primary-700"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Map Section */}
      <div className="h-96 w-full bg-gray-300 relative">
        {/* Map would be implemented with Google Maps or similar */}
        <div className="absolute inset-0 bg-dark-900/20 flex items-center justify-center">
          <div className="text-center p-4">
            <h3 className="text-2xl font-bold text-white mb-2">Google Maps Integration</h3>
            <p className="text-white/80">
              Here we would integrate an interactive map showing our office location.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;