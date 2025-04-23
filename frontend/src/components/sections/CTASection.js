import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useModal } from '../../context/ModalContext';
import { RiCalendarLine, RiArrowRightLine } from 'react-icons/ri';

const CTASection = () => {
  const { openModal } = useModal();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4" 
          alt="Technology background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/90"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Book a free consultation with our experts to discuss your project requirements and explore how we can help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="light" 
                size="lg" 
                onClick={openModal}
                icon={<RiCalendarLine />}
                className="text-primary-700"
                animate={true}
              >
                Schedule Free Consultation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
                className="border-white/30 text-white hover:bg-white/10"
                icon={<RiArrowRightLine />}
                iconPosition="right"
                animate={true}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-500 rounded-full opacity-30 blur-[50px]"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary-500 rounded-full opacity-30 blur-[50px]"></div>
    </section>
  );
};

export default CTASection;