import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RiArrowRightLine, RiFilter3Line } from 'react-icons/ri';

const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    industry: 'Retail',
    technology: ['React', 'Node.js', 'MongoDB'],
    description: 'A complete e-commerce solution with advanced product filtering, payment gateway integration, and inventory management.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    stats: {
      improvement: '150%',
      metric: 'Revenue Increase',
    },
    link: '/portfolio/e-commerce-platform',
  },
  {
    id: 'ai-customer-service-chatbot',
    title: 'AI Customer Service Chatbot',
    category: 'AI Solutions',
    industry: 'Technology',
    technology: ['Python', 'TensorFlow', 'Natural Language Processing'],
    description: 'An intelligent chatbot powered by natural language processing to handle customer inquiries and support requests.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
    stats: {
      improvement: '70%',
      metric: 'Support Cost Reduction',
    },
    link: '/portfolio/ai-customer-service-chatbot',
  },
  {
    id: 'real-estate-mobile-app',
    title: 'Real Estate Mobile App',
    category: 'Mobile App Development',
    industry: 'Real Estate',
    technology: ['React Native', 'Firebase', 'Google Maps API'],
    description: 'A feature-rich mobile application for property listings, virtual tours, and real-time messaging between agents and clients.',
    image: 'https://images.unsplash.com/photo-1612299065617-f883adb67bd1',
    stats: {
      improvement: '35%',
      metric: 'User Engagement',
    },
    link: '/portfolio/real-estate-mobile-app',
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    category: 'Custom Software Development',
    industry: 'Finance',
    technology: ['Angular', 'D3.js', 'Express'],
    description: 'An interactive financial dashboard with real-time data visualization, reporting, and analytics for investment firms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    stats: {
      improvement: '45%',
      metric: 'Decision Time Reduction',
    },
    link: '/portfolio/financial-dashboard',
  },
  {
    id: 'healthcare-management-system',
    title: 'Healthcare Management System',
    category: 'Custom Software Development',
    industry: 'Healthcare',
    technology: ['Java', 'Spring Boot', 'PostgreSQL'],
    description: 'A comprehensive healthcare management system for patient records, scheduling, billing, and telemedicine integration.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    stats: {
      improvement: '60%',
      metric: 'Administrative Efficiency',
    },
    link: '/portfolio/healthcare-management-system',
  },
  {
    id: 'supply-chain-optimization',
    title: 'Supply Chain Optimization',
    category: 'AI Solutions',
    industry: 'Manufacturing',
    technology: ['Python', 'Machine Learning', 'IoT'],
    description: 'An intelligent supply chain solution using AI to optimize inventory, predict demand, and streamline logistics operations.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    stats: {
      improvement: '28%',
      metric: 'Cost Reduction',
    },
    link: '/portfolio/supply-chain-optimization',
  },
];

// Unique categories for filtering
const categories = [...new Set(projects.map(project => project.category))];
const industries = [...new Set(projects.map(project => project.industry))];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          
          <div className="mb-3 flex flex-wrap gap-2">
            {project.technology.map((tech, i) => (
              <span key={i} className="text-xs bg-light-100 text-dark-600 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-dark-600 mb-5 flex-grow">
            {project.description}
          </p>
          
          <Link to={project.link} className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors mt-auto">
            <span>View case study</span>
            <RiArrowRightLine className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Portfolio | Maabit';
  }, []);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filters, setFilters] = useState({
    category: 'All',
    industry: 'All',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    let filtered = [...projects];
    
    if (newFilters.category !== 'All') {
      filtered = filtered.filter(project => project.category === newFilters.category);
    }
    
    if (newFilters.industry !== 'All') {
      filtered = filtered.filter(project => project.industry === newFilters.industry);
    }
    
    setFilteredProjects(filtered);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
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
            Our <span className="text-primary-400">Portfolio</span>
          </h1>
          
          <p className="text-light-300 text-lg mb-8 max-w-2xl mx-auto">
            Explore our case studies and discover how we've helped businesses across industries achieve their digital transformation goals.
          </p>
        </motion.div>
      </Section>

      {/* Portfolio Grid */}
      <Section background="light" spacing="large">
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Case Studies</h2>
              <p className="text-dark-600">Explore our recent success stories</p>
            </div>
            
            {/* Filter button (mobile) */}
            <button
              onClick={toggleFilter}
              className="md:hidden px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
            >
              <RiFilter3Line />
              <span>Filter Projects</span>
            </button>
            
            {/* Filters (desktop) */}
            <div className="hidden md:flex gap-4">
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-dark-600 mb-1">
                  Category
                </label>
                <select
                  id="category-filter"
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="industry-filter" className="block text-sm font-medium text-dark-600 mb-1">
                  Industry
                </label>
                <select
                  id="industry-filter"
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  value={filters.industry}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                >
                  <option value="All">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile filters */}
          {isFilterOpen && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-soft md:hidden space-y-4">
              <div>
                <label htmlFor="category-filter-mobile" className="block text-sm font-medium text-dark-600 mb-1">
                  Category
                </label>
                <select
                  id="category-filter-mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="industry-filter-mobile" className="block text-sm font-medium text-dark-600 mb-1">
                  Industry
                </label>
                <select
                  id="industry-filter-mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
                  value={filters.industry}
                  onChange={(e) => handleFilterChange('industry', e.target.value)}
                >
                  <option value="All">All Industries</option>
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={toggleFilter}
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          )}
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No projects match your filters</h3>
            <p className="text-dark-600 mb-6">Try adjusting your filter criteria to see more projects.</p>
            <Button 
              onClick={() => {
                setFilters({ category: 'All', industry: 'All' });
                setFilteredProjects(projects);
              }}
              variant="primary"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" spacing="normal">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Success Story?
          </h2>
          
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and join our portfolio of successful client partnerships.
          </p>
          
          <Button 
            to="/contact" 
            variant="light" 
            size="lg"
            className="text-primary-700"
          >
            Start Your Project
          </Button>
        </div>
      </Section>
    </motion.div>
  );
};

export default PortfolioPage;