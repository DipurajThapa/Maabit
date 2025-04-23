import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { 
  RiArrowLeftLine, 
  RiShareLine, 
  RiTwitterXFill, 
  RiLinkedinFill, 
  RiFacebookFill,
  RiFileCopyLine,
  RiThumbUpLine,
  RiBookmarkLine,
  RiUser3Line,
  RiCalendarLine,
  RiTimeLine
} from 'react-icons/ri';

// Sample blog posts - in a real app, these would come from an API
const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Custom Software Development for Enterprise Businesses',
    content: `
      <p class="lead">In today's rapidly evolving digital landscape, off-the-shelf software solutions often fall short of addressing the unique challenges and requirements that enterprise businesses face. Custom software development offers a tailored approach that can transform operations, drive efficiency, and create significant competitive advantages.</p>
      
      <h2>Understanding Custom Software Development</h2>
      
      <p>Custom software development involves designing, creating, deploying, and maintaining software applications specifically built to address the unique needs and challenges of a particular organization. Unlike commercial off-the-shelf (COTS) solutions, custom software is developed from the ground up with the client's specific requirements in mind.</p>
      
      <p>Enterprise businesses often operate with complex workflows, unique business processes, and specialized needs that standardized software simply cannot accommodate effectively. Custom development provides the flexibility to create solutions that align perfectly with how your business operates.</p>
      
      <h2>Key Benefits for Enterprise Organizations</h2>
      
      <h3>1. Tailored to Your Exact Requirements</h3>
      
      <p>Perhaps the most significant advantage of custom software is that it's built specifically for your business requirements. Rather than adapting your processes to fit a generic solution, custom software conforms to your existing workflows and can be designed to address your specific pain points and challenges.</p>
      
      <p>This tailored approach ensures that you're not paying for unnecessary features while getting exactly what your business needs to operate efficiently.</p>
      
      <h3>2. Seamless Integration with Existing Systems</h3>
      
      <p>Enterprise environments typically involve multiple systems that need to work together cohesively. Custom software can be designed with integration capabilities from the start, ensuring smooth communication between new and legacy systems.</p>
      
      <p>This integration eliminates data silos, reduces manual data entry, and creates a more cohesive technology ecosystem within your organization.</p>
      
      <h3>3. Scalability and Future-Proofing</h3>
      
      <p>As your business grows and evolves, your software needs will change. Custom solutions are designed with scalability in mind, allowing for modifications and enhancements as your business requirements evolve.</p>
      
      <p>This scalability ensures that your software investment continues to deliver value over time, adapting to changing market conditions, business models, and technological advancements.</p>
      
      <h3>4. Enhanced Security and Compliance</h3>
      
      <p>Enterprise businesses often operate in regulated industries with specific compliance requirements. Custom software can be built with security at its core, incorporating the exact compliance features and security protocols your industry demands.</p>
      
      <p>Additionally, custom solutions typically present a smaller attack surface for potential security breaches compared to widely-used commercial software, whose vulnerabilities are well-known to potential attackers.</p>
      
      <h3>5. Competitive Advantage</h3>
      
      <p>When your competitors are using the same off-the-shelf solutions, they're limited by the same constraints. Custom software gives you the ability to implement unique features and capabilities that can differentiate your business in the marketplace.</p>
      
      <p>This advantage can manifest in various ways, from improved customer experiences to more efficient operations that reduce costs and increase profitability.</p>
      
      <h2>Real-World ROI of Custom Software</h2>
      
      <p>While the initial investment in custom software development may be higher than purchasing off-the-shelf alternatives, the long-term return on investment often makes it the more economical choice for enterprise businesses.</p>
      
      <p>Consider these tangible benefits:</p>
      
      <ul>
        <li>Increased operational efficiency through streamlined processes</li>
        <li>Reduced manual work and associated labor costs</li>
        <li>Elimination of licensing fees for features you don't need</li>
        <li>Lower training costs due to intuitive interfaces designed for your team</li>
        <li>Reduced downtime and maintenance issues</li>
      </ul>
      
      <p>Our clients have reported ROI timelines ranging from 6-18 months for their custom software investments, with ongoing benefits that continue to accrue well beyond the initial break-even point.</p>
      
      <h2>Strategic Approach to Custom Development</h2>
      
      <p>Successful custom software development requires a strategic approach that aligns technology solutions with business objectives. Key elements of this approach include:</p>
      
      <h3>Comprehensive Discovery Phase</h3>
      
      <p>Before any development begins, a thorough analysis of your business processes, pain points, and objectives is essential. This discovery phase ensures that the solution addresses actual needs rather than perceived ones.</p>
      
      <h3>Agile Development Methodology</h3>
      
      <p>An iterative, collaborative approach to development ensures that the solution evolves based on continuous feedback and changing requirements. This agility reduces risk and increases the likelihood of project success.</p>
      
      <h3>Change Management and Training</h3>
      
      <p>Even the best software will fail if users don't adopt it. A comprehensive change management and training strategy is crucial for ensuring that your team embraces and effectively utilizes the new solution.</p>
      
      <h2>Conclusion: Is Custom Software Right for Your Enterprise?</h2>
      
      <p>While not every situation calls for custom software development, enterprise businesses with complex requirements, unique processes, or industry-specific needs often find that the benefits far outweigh the costs.</p>
      
      <p>The key is to approach the decision strategically, considering not just the immediate needs but the long-term goals and growth trajectory of your organization.</p>
      
      <p>By investing in tailored solutions that align perfectly with your business objectives, you can drive efficiency, security, and competitive advantage in ways that off-the-shelf software simply cannot match.</p>
    `,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    author: {
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'John is a senior software consultant with over 15 years of experience in enterprise solutions. He specializes in custom software development and digital transformation strategies.',
    },
    date: '2023-04-15',
    categories: ['Custom Software', 'Enterprise Solutions'],
    readTime: '6 min read',
    tags: ['Enterprise', 'Software Development', 'ROI', 'Digital Transformation', 'Business Efficiency'],
    slug: 'benefits-custom-software-development-enterprise'
  },
  {
    id: 2,
    title: 'Web Development Trends to Watch in 2023',
    content: `
      <p class="lead">The web development landscape is constantly evolving, with new technologies, frameworks, and design approaches emerging regularly. Staying ahead of these trends is crucial for businesses looking to maintain a competitive edge in the digital space. Here's our analysis of the most important web development trends to watch in 2023.</p>
      
      <h2>Progressive Web Applications (PWAs) Going Mainstream</h2>
      
      <p>Progressive Web Applications continue to gain traction as they combine the best features of websites and native mobile applications. In 2023, we're seeing PWAs become the standard approach for many businesses rather than an innovative exception.</p>
      
      <p>The benefits are clear: PWAs load faster, work offline, and provide a more app-like experience without requiring users to visit an app store. With major platforms like Twitter, Starbucks, and Pinterest seeing significant engagement improvements after implementing PWAs, this trend is only accelerating.</p>
      
      <h2>AI-Driven Development and Interfaces</h2>
      
      <p>Artificial intelligence is revolutionizing web development in multiple ways. From AI-assisted coding tools that help developers write better code faster, to intelligent interfaces that adapt to user behavior, AI integration is becoming essential rather than optional.</p>
      
      <p>We're seeing a rise in AI-powered chatbots, personalized content delivery, and predictive user experience optimization. These technologies are becoming more sophisticated and accessible, allowing even smaller businesses to implement AI features that were previously available only to large enterprises.</p>
      
      <h2>WebAssembly Expanding Possibilities</h2>
      
      <p>WebAssembly (WASM) continues to gain momentum as a technology that allows high-performance code written in languages like C, C++, and Rust to run in browsers. This opens up possibilities for web applications that were previously impractical due to performance limitations.</p>
      
      <p>In 2023, we're seeing WASM enable more complex web applications, including advanced graphics processing, video editing, and games with near-native performance. This technology is bridging the gap between web and desktop applications in terms of capabilities and performance.</p>
      
      <h2>Serverless Architecture Adoption</h2>
      
      <p>Serverless architecture continues to grow in popularity as it allows developers to build and run applications without thinking about servers. This approach is changing how web applications are developed and deployed.</p>
      
      <p>The benefits of serverless include reduced operational costs (you only pay for what you use), automatic scaling, and decreased maintenance overhead. In 2023, we're seeing more sophisticated serverless applications and improved tooling that makes this approach accessible to a wider range of development teams.</p>
      
      <h2>Motion UI and Micro-Interactions</h2>
      
      <p>User interfaces are becoming more dynamic and engaging through the use of motion design and micro-interactions. These subtle animations and responses to user actions create a more intuitive and enjoyable user experience.</p>
      
      <p>Well-implemented motion design helps guide users through digital experiences, provides feedback on their actions, and adds personality to websites and applications. The key is to use motion purposefully to enhance rather than distract from the core user experience.</p>
      
      <h2>API-First Development</h2>
      
      <p>As digital ecosystems become more complex and interconnected, API-first development is becoming the standard approach for many projects. This methodology prioritizes the development of robust, well-documented APIs before implementing user interfaces.</p>
      
      <p>This approach facilitates better integration between systems, enables omnichannel experiences, and creates more flexibility for future development. In 2023, we're seeing improved tools for API design, testing, and management that streamline this process.</p>
      
      <h2>Enhanced Accessibility as Standard</h2>
      
      <p>Web accessibility is no longer an afterthought but a fundamental consideration in modern web development. This shift is driven by both legal requirements and the recognition that accessible websites reach wider audiences and provide better experiences for all users.</p>
      
      <p>Technologies and frameworks are increasingly incorporating accessibility features by default, and automated testing tools for accessibility are becoming more sophisticated. In 2023, we're seeing accessibility considerations integrated throughout the development process rather than addressed at the end.</p>
      
      <h2>JAMstack and Headless Architecture</h2>
      
      <p>The JAMstack (JavaScript, APIs, and Markup) approach continues to evolve, with more businesses adopting this architecture for its performance, security, and developer experience benefits. Coupled with headless CMS solutions, this approach is changing how content-driven websites are built.</p>
      
      <p>This architecture separates the front-end presentation layer from the back-end data, allowing for more flexibility in how content is displayed and managed. We're seeing improved tooling and more mature solutions in this space, making it accessible to a wider range of projects.</p>
      
      <h2>Real-Time Features and Collaborative Experiences</h2>
      
      <p>As users increasingly expect instant updates and collaborative capabilities, real-time features are becoming standard in many web applications. Technologies like WebSockets and technologies built on top of them are enabling more responsive, collaborative experiences.</p>
      
      <p>From collaborative document editing to live dashboards and interactive experiences, real-time features enhance engagement and productivity. In 2023, implementing these features is becoming more straightforward with improved frameworks and services.</p>
      
      <h2>Conclusion: Embracing Change While Maintaining Focus</h2>
      
      <p>While it's important to stay informed about these trends, not every trend will be relevant for every project. The key is to evaluate which technologies and approaches align with your specific business goals and user needs.</p>
      
      <p>At Maabit, we help our clients navigate these trends with a strategic approach, focusing on technologies that will deliver tangible business value rather than implementing the latest trend for its own sake.</p>
      
      <p>By combining innovative technologies with solid development practices and a user-centered approach, businesses can create web experiences that stand out in an increasingly competitive digital landscape.</p>
    `,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
    author: {
      name: 'Emily Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Emily is a front-end developer and UX specialist with a passion for creating beautiful, user-friendly web experiences. She has worked with clients across various industries to implement cutting-edge web technologies.',
    },
    date: '2023-03-28',
    categories: ['Web Development', 'Technology Trends'],
    readTime: '8 min read',
    tags: ['Web Development', '2023 Trends', 'PWA', 'AI', 'WebAssembly', 'Serverless', 'JAMstack'],
    slug: 'web-development-trends-2023'
  }
];

// Get blog post by slug
const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

// Get related posts (excluding current post)
const getRelatedPosts = (currentPost, count = 3) => {
  if (!currentPost) return [];
  
  // Find posts with matching categories
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.categories.some(category => 
        currentPost.categories.includes(category)
      )
    )
    .slice(0, count);
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Fetch post data
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchPost = () => {
      setIsLoading(true);
      
      setTimeout(() => {
        const foundPost = getBlogPostBySlug(slug);
        if (foundPost) {
          setPost(foundPost);
          setRelatedPosts(getRelatedPosts(foundPost));
          // Set document title
          document.title = `${foundPost.title} | Maabit Blog`;
        } else {
          // Post not found, redirect to blog
          navigate('/blog');
        }
        setIsLoading(false);
      }, 300);
    };
    
    fetchPost();
  }, [slug, navigate]);

  // Handle copy URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If loading
  if (isLoading) {
    return (
      <Section background="white" spacing="large" className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
            <div className="h-64 bg-gray-200 rounded-xl mb-8"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </Section>
    );
  }

  // If post not found
  if (!post) {
    return (
      <Section background="white" spacing="large" className="pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Button to="/blog" variant="primary">
            Back to Blog
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
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-light-300 hover:text-primary-400 mb-8 transition-colors">
            <RiArrowLeftLine className="mr-2" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            {post.categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block mr-2 mb-2 text-xs font-medium text-primary-300 bg-primary-900/50 px-2.5 py-1 rounded-full hover:bg-primary-800/60 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-light-300 mb-8">
            <div className="flex items-center gap-2">
              <RiUser3Line />
              <span>{post.author.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <RiCalendarLine />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric' 
                })}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <RiTimeLine />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Featured Image */}
      <div className="relative -mt-20 mb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-intense">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <Section background="white" spacing="none" className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              {/* Article */}
              <article className="prose prose-lg max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block text-sm text-dark-700 bg-light-100 px-3 py-1 rounded-full hover:bg-light-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-12">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      liked ? 'text-red-500 bg-red-50' : 'text-dark-500 hover:bg-light-100'
                    }`}
                  >
                    <RiThumbUpLine />
                    <span>{liked ? 'Liked' : 'Like'}</span>
                  </button>
                  
                  <button 
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      bookmarked ? 'text-primary-500 bg-primary-50' : 'text-dark-500 hover:bg-light-100'
                    }`}
                  >
                    <RiBookmarkLine />
                    <span>{bookmarked ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-dark-500">Share:</span>
                  
                  <button className="w-8 h-8 rounded-full bg-light-100 flex items-center justify-center text-dark-500 hover:bg-light-200 transition-colors">
                    <RiTwitterXFill />
                  </button>
                  
                  <button className="w-8 h-8 rounded-full bg-light-100 flex items-center justify-center text-dark-500 hover:bg-light-200 transition-colors">
                    <RiLinkedinFill />
                  </button>
                  
                  <button className="w-8 h-8 rounded-full bg-light-100 flex items-center justify-center text-dark-500 hover:bg-light-200 transition-colors">
                    <RiFacebookFill />
                  </button>
                  
                  <button 
                    onClick={handleCopyUrl}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      copied 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-light-100 text-dark-500 hover:bg-light-200'
                    }`}
                    title={copied ? 'Copied!' : 'Copy link'}
                  >
                    <RiFileCopyLine />
                  </button>
                </div>
              </div>
              
              {/* Author */}
              <div className="bg-light-50 rounded-xl p-6 mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{post.author.name}</h3>
                    <p className="text-dark-500">Author</p>
                  </div>
                </div>
                <p className="text-dark-600">{post.author.bio}</p>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4"
            >
              {/* Related Posts */}
              <div className="sticky top-32">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                
                <div className="space-y-6">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex gap-4">
                      <Link 
                        to={`/blog/${relatedPost.slug}`} 
                        className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden"
                      >
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      <div>
                        <h4 className="font-semibold mb-2 leading-tight">
                          <Link 
                            to={`/blog/${relatedPost.slug}`} 
                            className="hover:text-primary-600 transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </h4>
                        
                        <div className="flex items-center text-sm text-dark-500 gap-4">
                          <span>{relatedPost.readTime}</span>
                          <span>
                            {new Date(relatedPost.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-6">Categories</h3>
                  
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link 
                        key={index} 
                        to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 px-4 rounded-lg hover:bg-light-100 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-6">Subscribe</h3>
                  
                  <p className="text-dark-600 mb-4">
                    Get the latest articles and insights delivered directly to your inbox.
                  </p>
                  
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    
                    <Button variant="primary" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlogDetailPage;