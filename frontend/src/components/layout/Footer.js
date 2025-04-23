import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { 
  RiLinkedinFill, 
  RiTwitterXFill, 
  RiFacebookFill, 
  RiInstagramFill, 
  RiGithubFill,
  RiMailLine,
  RiPhoneFill,
  RiMapPinLine
} from 'react-icons/ri';

const Footer = () => {
  const { openModal } = useModal();

  const services = [
    { name: 'Custom Software Development', href: '/services/custom-software-development' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/about/careers' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Free Assessments', href: '/free-assessments' },
    { name: 'Solution Comparisons', href: '/comparisons' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <RiLinkedinFill />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <RiTwitterXFill />, href: 'https://twitter.com' },
    { name: 'Facebook', icon: <RiFacebookFill />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <RiInstagramFill />, href: 'https://instagram.com' },
    { name: 'GitHub', icon: <RiGithubFill />, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-dark-950 text-white pt-20 pb-10">
      <div className="container-custom">
        {/* Pre-footer CTA */}
        <div className="glass bg-primary-900/50 rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900 to-secondary-900 opacity-50"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to transform your digital presence?
              </h3>
              <p className="text-white/80 max-w-2xl">
                Book a free consultation and discover how our custom solutions can drive growth for your business.
              </p>
            </div>
            <button
              onClick={openModal}
              className="whitespace-nowrap px-8 py-4 bg-white text-primary-700 hover:bg-white/90 transition-all duration-300 rounded-lg font-semibold shadow-lg"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-white">
                <span className="text-primary-400">Maa</span>bit
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              We craft innovative software, web, and mobile solutions that transform businesses and accelerate growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <RiMailLine className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@maabit.com">contact@maabit.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <RiPhoneFill className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+11234567890">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <RiMapPinLine className="w-5 h-5 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold text-white mb-6">Services</h5>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold text-white mb-6">Company</h5>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold text-white mb-6">Resources</h5>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-semibold text-white mb-6">Connect</h5>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 hover:bg-primary-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Maabit. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;