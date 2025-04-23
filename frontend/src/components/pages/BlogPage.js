import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { RiSearchLine, RiFilter3Line, RiArrowRightLine } from 'react-icons/ri';

// Sample blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Custom Software Development for Enterprise Businesses',
    excerpt: 'Discover how tailored software solutions can streamline operations, improve efficiency, and boost your company\'s competitive edge in today\'s digital landscape.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    author: {
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    date: '2023-04-15',
    categories: ['Custom Software', 'Enterprise Solutions'],
    readTime: '6 min read',
    slug: 'benefits-custom-software-development-enterprise'
  },
  {
    id: 2,
    title: 'Web Development Trends to Watch in 2023',
    excerpt: 'Explore the cutting-edge technologies and design approaches that are shaping the web development landscape this year, from AI integration to enhanced user experiences.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    author: {
      name: 'Emily Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    date: '2023-03-28',
    categories: ['Web Development', 'Technology Trends'],
    readTime: '8 min read',
    slug: 'web-development-trends-2023'
  },
  {
    id: 3,
    title: 'How AI is Transforming Mobile App Development',
    excerpt: 'Learn how artificial intelligence and machine learning capabilities are revolutionizing mobile applications, enhancing personalization and creating smarter user experiences.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6',
    author: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    date: '2023-03-10',
    categories: ['Mobile Development', 'AI'],
    readTime: '5 min read',
    slug: 'ai-transforming-mobile-app-development'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Choosing a Cloud Solution Provider',
    excerpt: 'Navigate the complex world of cloud services with our comprehensive guide to evaluating providers, understanding service models, and selecting the right solution for your needs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    author: {
      name: 'Sarah Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    date: '2023-02-15',
    categories: ['Cloud Solutions', 'IT Infrastructure'],
    readTime: '10 min read',
    slug: 'guide-choosing-cloud-solution-provider'
  },
  {
    id: 5,
    title: 'Building Secure Web Applications: Best Practices and Common Pitfalls',
    excerpt: 'Security should be a top priority in web development. Explore essential strategies for protecting your applications from common vulnerabilities and cyber threats.',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28',
    author: {
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    date: '2023-01-22',
    categories: ['Web Development', 'Security'],
    readTime: '7 min read',
    slug: 'building-secure-web-applications'
  },
  {
    id: 6,
    title: 'The Role of UI/UX Design in Software Development Success',
    excerpt: 'Discover why thoughtful user interface and experience design is crucial for software adoption, user satisfaction, and the overall success of your digital products.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    author: {
      name: 'Jessica Patel',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    date: '2023-01-05',
    categories: ['UI/UX Design', 'Software Development'],
    readTime: '6 min read',
    slug: 'role-ui-ux-design-software-development'
  },
];

const categories = [
  'All Categories',
  'Custom Software',
  'Web Development',
  'Mobile Development',
  'AI',
  'Cloud Solutions',
  'UI/UX Design',
  'Security',
  'Technology Trends',
  'Enterprise Solutions',
];

const BlogPostCard = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-intense transition-all duration-300 h-full flex flex-col"
    >
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative">
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {post.readTime}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          {post.categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-block mr-2 mb-2 text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full hover:bg-primary-100 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-dark-600 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          
          <span className="text-sm text-dark-500">
            {new Date(post.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric' 
            })}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const FeaturedPost = ({ post }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-card hover:shadow-intense transition-all duration-300"
    >
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative">
        <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {post.readTime}
        </div>
      </Link>
      
      <div className="p-6 md:p-8 flex flex-col justify-center">
        <div className="mb-3">
          {post.categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-block mr-2 mb-2 text-xs font-medium text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full hover:bg-primary-100 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block group">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-dark-600 mb-6 text-lg">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span className="block font-medium">{post.author.name}</span>
              <span className="text-sm text-dark-500">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>
          
          <Link 
            to={`/blog/${post.slug}`} 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <span>Read Article</span>
            <RiArrowRightLine className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const BlogPage = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Blog | Maabit';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // Filter posts based on search term and category
  useEffect(() => {
    let filtered = [...blogPosts];
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory && selectedCategory !== 'All Categories') {
      filtered = filtered.filter(post => 
        post.categories.some(category => category === selectedCategory)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPost = blogPosts[0];

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
            Our <span className="text-primary-400">Blog</span>
          </h1>
          
          <p className="text-light-300 text-lg mb-8 max-w-2xl mx-auto">
            Insights, guides, and industry expertise to help you navigate the digital landscape and make informed technology decisions.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-4 pr-12 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <RiSearchLine className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60" />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Blog Content */}
      <Section background="white" spacing="large">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-light-100 rounded-lg"
              >
                <RiFilter3Line />
                <span>Filter</span>
              </button>
              
              <div className="hidden md:block">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile filters */}
          {showMobileFilter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mb-6 p-4 bg-light-50 rounded-lg"
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Filter by Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={() => setShowMobileFilter(false)}
                className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Apply Filters
              </button>
            </motion.div>
          )}
        </div>
        
        {/* Featured Post */}
        <div className="mb-16">
          <FeaturedPost post={featuredPost} />
        </div>
        
        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-dark-600 mb-6">Try adjusting your search or category filter to find more articles.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Categories');
              }}
              variant="primary"
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center">
            <span className="sr-only">Previous page</span>
            <RiArrowRightLine className="rotate-180" />
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center">
            1
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-light-100 transition-colors">
            2
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-light-100 transition-colors">
            3
          </button>
          
          <span className="px-2">...</span>
          
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-light-100 transition-colors">
            10
          </button>
          
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center hover:bg-light-100 transition-colors">
            <span className="sr-only">Next page</span>
            <RiArrowRightLine />
          </button>
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section background="primary" spacing="normal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Stay updated with the latest industry insights, technology trends, and expert advice delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <Button variant="light" className="whitespace-nowrap text-primary-700">
              Subscribe
            </Button>
          </div>
          
          <p className="text-primary-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlogPage;