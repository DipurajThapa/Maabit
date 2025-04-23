import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import { RiStarFill, RiArrowLeftSLine, RiArrowRightSLine, RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO, TechVision Inc.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Working with Maabit has been transformative for our business. Their team delivered a custom software solution that streamlined our operations and reduced processing time by 40%. Their technical expertise and commitment to quality are unmatched.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, GrowthHub',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Maabit helped us develop a mobile app that exceeded our expectations. They took the time to understand our vision and translated it into a user-friendly solution that our customers love. Our user engagement has increased by 60% since launch.',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    position: 'Marketing Director, StyleCo',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'The web development project delivered by Maabit revolutionized our online presence. Their attention to design details and focus on user experience resulted in a 75% increase in conversions within the first three months. Highly recommended!',
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'CEO, InnovateX',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 5,
    text: 'The AI chatbot developed by Maabit has transformed our customer service. It handles over 70% of inquiries automatically, allowing our team to focus on complex issues. The ROI has been exceptional, and we continue to be impressed with their support.',
  },
  {
    id: 5,
    name: 'Jessica Patel',
    position: 'Product Manager, FinTech Solutions',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 5,
    text: 'Maabit delivered a robust financial application that meets all compliance requirements while providing an intuitive user experience. Their technical knowledge and project management approach ensured a smooth development process from start to finish.',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="h-full glassmorphism p-6 md:p-8 flex flex-col">
      <div className="text-primary-500 mb-4 text-2xl">
        <RiDoubleQuotesL />
      </div>
      
      <p className="text-dark-700 mb-6 flex-grow">{testimonial.text}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-dark-900">{testimonial.name}</h4>
            <p className="text-dark-500 text-sm">{testimonial.position}</p>
          </div>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <RiStarFill key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);
  const itemsPerView = width >= 1024 ? 2 : 1;
  const maxIndex = testimonials.length - itemsPerView;

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <Section id="testimonials" background="gradientDark" spacing="large" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary-500 rounded-full opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-secondary-500 rounded-full opacity-20 blur-[100px]"></div>
      </div>
      
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Clients Say"
        description="Discover how we've helped businesses across industries achieve their digital transformation goals and drive measurable results."
        titleClassName="text-white"
        eyebrowClassName="text-primary-300"
        descriptionClassName="text-light-300"
      />
      
      <div className="relative mt-12">
        <div className="overflow-hidden py-4" ref={carouselRef}>
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * (100 / itemsPerView) + '%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="min-w-full lg:min-w-[calc(50%-12px)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-8 gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <RiArrowLeftSLine className="text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next testimonial"
          >
            <RiArrowRightSLine className="text-2xl" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;