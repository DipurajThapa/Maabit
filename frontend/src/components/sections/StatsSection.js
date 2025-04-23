import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from '../ui/Section';

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successful digital solutions delivered',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Expert Developers',
    description: 'Skilled professionals in our team',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Solving complex challenges',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Based on client feedback',
  },
];

const CounterAnimation = ({ value, suffix = '', duration = 2000 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!nodeRef.current || !isInView) return;
    
    let start = 0;
    const end = parseInt(value);
    const incrementTime = Math.floor(duration / end);
    let timer;
    
    const run = () => {
      if (start < end) {
        start += 1;
        if (nodeRef.current) {
          nodeRef.current.textContent = start + suffix;
        }
        timer = setTimeout(run, incrementTime);
      } else {
        if (nodeRef.current) {
          nodeRef.current.textContent = end + suffix;
        }
        clearTimeout(timer);
      }
    };
    
    run();
    
    return () => {
      clearTimeout(timer);
    };
  }, [value, suffix, duration, isInView]);
  
  return <span ref={nodeRef}>0{suffix}</span>;
};

const StatsSection = () => {
  return (
    <Section background="white" className="relative z-10 -mt-16">
      <div className="glassmorphism bg-white/90 rounded-2xl shadow-intense p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-3">
                <CounterAnimation value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-dark-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;