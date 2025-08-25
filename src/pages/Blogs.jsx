// pages/Blogs.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";


const Blogs = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [showReadingList, setShowReadingList] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [darkMode, setDarkMode] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef(null);
  
  // Advanced futuristic color palette with light/dark variants
  const colors = {
    dark: {
      background: '#0a0e1a',
      card: '#111827',
      primary: '#00d4ff',
      secondary: '#ff00ff',
      accent: '#00ff88',
      text: '#e2e8f0',
      textSecondary: '#94a3b8',
      border: '#1e293b',
      glow: '#00d4ff40',
      success: '#00ff8840',
      danger: '#ff006640',
    },
    light: {
      background: '#f8fafc',
      card: '#ffffff',
      primary: '#0077cc',
      secondary: '#cc00cc',
      accent: '#00aa55',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      glow: '#0077cc20',
      success: '#00aa5520',
      danger: '#cc000020',
    }
  };

  const theme = darkMode ? colors.dark : colors.light;

  // Enhanced blog content with more metadata
  const featuredBlog = {
    id: 'featured',
    title: "Why Ethical AI Will Define the Future of Business",
    excerpt: "Artificial Intelligence is no longer optional—it's at the core of how companies innovate. But without ethics, AI risks trust and adoption. At MomntumAi, we believe the future belongs to businesses that innovate responsibly.",
    content: "Full article content would go here...",
    author: "Dr. Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
    authorBio: "AI Ethics Researcher with 10+ years of experience in responsible technology development",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    link: "/blog/ethical-ai-future",
    readTime: "8 min read",
    views: 2450,
    likes: 342,
    shares: 128,
    comments: 56,
    tags: ["AI Ethics", "Business Strategy", "Future Tech"],
    category: "Ethical AI",
    difficulty: "Intermediate"
  };

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Ways AI Can Help Small Businesses Grow Responsibly",
      excerpt: "Discover how ethical AI implementation can drive sustainable growth for small businesses without compromising values.",
      content: "Full article content would go here...",
      author: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      authorBio: "Small Business Technology Consultant",
      date: "April 28, 2023",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-small-business",
      category: "AI in Business",
      readTime: "6 min read",
      views: 1820,
      likes: 215,
      shares: 87,
      comments: 32,
      tags: ["Small Business", "Growth", "Automation"],
      difficulty: "Beginner",
      updated: "April 30, 2023"
    },
    {
      id: 2,
      title: "AI Automation vs. Human Work — Finding the Right Balance",
      excerpt: "Exploring the symbiotic relationship between AI automation and human creativity in modern workplaces.",
      content: "Full article content would go here...",
      author: "Elena Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      authorBio: "Workplace Innovation Specialist",
      date: "April 20, 2023",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-vs-human",
      category: "Innovation",
      readTime: "7 min read",
      views: 2150,
      likes: 287,
      shares: 102,
      comments: 45,
      tags: ["Automation", "Future of Work", "Productivity"],
      difficulty: "Intermediate",
      updated: "April 22, 2023"
    },
    {
      id: 3,
      title: "Case Study: How Ethical AI Transformed Productivity in Healthcare",
      excerpt: "Real-world examples of responsible AI implementation improving patient outcomes while protecting privacy.",
      content: "Full article content would go here...",
      author: "Dr. James Wilson",
      authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
      authorBio: "Healthcare Technology Researcher",
      date: "April 12, 2023",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-healthcare",
      category: "Case Studies",
      readTime: "10 min read",
      views: 3240,
      likes: 421,
      shares: 156,
      comments: 78,
      tags: ["Healthcare", "Case Study", "Privacy"],
      difficulty: "Advanced",
      updated: "April 15, 2023"
    },
    {
      id: 4,
      title: "The Future of AI Regulation and Why It Matters for Startups",
      excerpt: "Navigating the evolving landscape of AI regulations and preparing your startup for compliance challenges.",
      content: "Full article content would go here...",
      author: "Sophia Kim",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      authorBio: "Technology Policy Analyst",
      date: "April 5, 2023",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-regulation",
      category: "Ethical AI",
      readTime: "9 min read",
      views: 1980,
      likes: 256,
      shares: 94,
      comments: 41,
      tags: ["Regulation", "Startups", "Compliance"],
      difficulty: "Intermediate",
      updated: "April 8, 2023"
    },
    {
      id: 5,
      title: "Building Trust: Transparency in AI Decision-Making",
      excerpt: "How explainable AI is becoming crucial for building user trust and ensuring ethical outcomes.",
      content: "Full article content would go here...",
      author: "Alex Morgan",
      authorImage: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=200&q=80",
      authorBio: "AI Transparency Advocate",
      date: "March 28, 2023",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-transparency",
      category: "Ethical AI",
      readTime: "7 min read",
      views: 2750,
      likes: 312,
      shares: 118,
      comments: 52,
      tags: ["Transparency", "Explainable AI", "Trust"],
      difficulty: "Intermediate",
      updated: "March 30, 2023"
    },
    {
      id: 6,
      title: "Sustainable AI: Reducing the Environmental Impact",
      excerpt: "Exploring how the AI industry can innovate while minimizing its carbon footprint and energy consumption.",
      content: "Full article content would go here...",
      author: "Dr. Priya Sharma",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
      authorBio: "Environmental AI Researcher",
      date: "March 20, 2023",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      link: "/blog/sustainable-ai",
      category: "Innovation",
      readTime: "8 min read",
      views: 1890,
      likes: 203,
      shares: 76,
      comments: 34,
      tags: ["Sustainability", "Environment", "Green Tech"],
      difficulty: "Intermediate",
      updated: "March 22, 2023"
    },
    {
      id: 7,
      title: "Ethical AI in Finance: Balancing Innovation and Regulation",
      excerpt: "How financial institutions are implementing AI responsibly while navigating complex regulatory environments.",
      content: "Full article content would go here...",
      author: "Robert Thompson",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      authorBio: "FinTech Innovation Lead",
      date: "March 12, 2023",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-finance",
      category: "Case Studies",
      readTime: "9 min read",
      views: 2340,
      likes: 298,
      shares: 112,
      comments: 48,
      tags: ["Finance", "FinTech", "Banking"],
      difficulty: "Advanced",
      updated: "March 15, 2023"
    },
    {
      id: 8,
      title: "The Human Element: Why AI Needs Human Oversight",
      excerpt: "Understanding the critical role of human judgment in AI systems and how to implement effective oversight mechanisms.",
      content: "Full article content would go here...",
      author: "Dr. Lisa Chen",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      authorBio: "Human-AI Interaction Specialist",
      date: "March 5, 2023",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      link: "/blog/human-ai-oversight",
      category: "Ethical AI",
      readTime: "7 min read",
      views: 2100,
      likes: 267,
      shares: 98,
      comments: 43,
      tags: ["Human Oversight", "Governance", "Accountability"],
      difficulty: "Intermediate",
      updated: "March 8, 2023"
    },
    {
      id: 9,
      title: "AI in Education: Personalized Learning with Privacy Protection",
      excerpt: "How educational institutions are leveraging AI for personalized learning experiences while safeguarding student data.",
      content: "Full article content would go here...",
      author: "Jennifer Park",
      authorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      authorBio: "EdTech Innovation Director",
      date: "February 28, 2023",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-education",
      category: "AI in Business",
      readTime: "8 min read",
      views: 1950,
      likes: 234,
      shares: 86,
      comments: 37,
      tags: ["Education", "EdTech", "Personalization"],
      difficulty: "Beginner",
      updated: "March 2, 2023"
    },
    {
      id: 10,
      title: "Bias Detection and Mitigation in Machine Learning Models",
      excerpt: "Practical approaches to identifying and addressing bias in AI systems to ensure fair outcomes.",
      content: "Full article content would go here...",
      author: "David Martinez",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      authorBio: "Algorithm Fairness Researcher",
      date: "February 20, 2023",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-bias-mitigation",
      category: "Ethical AI",
      readTime: "11 min read",
      views: 2650,
      likes: 321,
      shares: 124,
      comments: 59,
      tags: ["Bias", "Fairness", "Algorithmic Justice"],
      difficulty: "Advanced",
      updated: "February 23, 2023"
    },
    {
      id: 11,
      title: "The Economics of Ethical AI: Costs, Benefits and ROI",
      excerpt: "Analyzing the financial implications of implementing ethical AI practices in organizations of all sizes.",
      content: "Full article content would go here...",
      author: "Amanda Williams",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      authorBio: "Technology Economics Analyst",
      date: "February 15, 2023",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-economics",
      category: "AI in Business",
      readTime: "9 min read",
      views: 2280,
      likes: 278,
      shares: 103,
      comments: 47,
      tags: ["Economics", "ROI", "Business Value"],
      difficulty: "Intermediate",
      updated: "February 18, 2023"
    },
    {
      id: 12,
      title: "Implementing AI Ethics Committees: A Practical Guide",
      excerpt: "Step-by-step guidance for establishing effective AI ethics governance structures within organizations.",
      content: "Full article content would go here...",
      author: "Thomas Reynolds",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      authorBio: "Corporate Governance Specialist",
      date: "February 10, 2023",
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=600&q=80",
      link: "/blog/ai-ethics-committees",
      category: "Ethical AI",
      readTime: "10 min read",
      views: 1920,
      likes: 245,
      shares: 91,
      comments: 39,
      tags: ["Governance", "Committees", "Implementation"],
      difficulty: "Intermediate",
      updated: "February 13, 2023"
    }
  ];

  const categories = [
    "All", "AI in Business", "Ethical AI", "Case Studies", "Productivity", "Innovation"
  ];

  const difficultyLevels = ["Beginner", "Intermediate", "Advanced"];

  const testimonials = [
    {
      id: 1,
      quote: "AiserAI's approach to ethical AI has transformed how we think about technology in our business. Their insights are invaluable.",
      author: "Sarah Johnson",
      role: "CEO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      quote: "The case studies on ethical AI implementation provided practical guidance that we could immediately apply to our organization.",
      author: "Michael Chen",
      role: "CTO, InnovateCo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      quote: "The future of AI is ethical, and MatrixAi is leading the conversation. Their blog is a must-read for anyone in tech.",
      author: "Elena Rodriguez",
      role: "AI Research Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const authors = [...new Set(blogPosts.map(post => post.author))];

  // Initialize from localStorage
  useEffect(() => {
    const savedReadingList = localStorage.getItem('readingList');
    if (savedReadingList) {
      setReadingList(JSON.parse(savedReadingList));
    }
    
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save to localStorage when readingList changes
  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  // Save to localStorage when darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Set trending posts based on views
    const sortedByViews = [...blogPosts].sort((a, b) => b.views - a.views);
    setTrendingPosts(sortedByViews.slice(0, 3));
    
    // Initial filter
    filterAndSortPosts();
  }, []);

  useEffect(() => {
    filterAndSortPosts();
  }, [activeCategory, searchTerm, sortBy, sortOrder]);

  const filterAndSortPosts = () => {
    let result = [...blogPosts];
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Sort posts
    result.sort((a, b) => {
      let aValue, bValue;
      
      switch(sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'likes':
          aValue = a.likes;
          bValue = b.likes;
          break;
        case 'readTime':
          aValue = parseInt(a.readTime);
          bValue = parseInt(b.readTime);
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          aValue = new Date(a.date);
          bValue = new Date(b.date);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    
    setFilteredPosts(result);
    setVisiblePosts(6); // Reset visible posts when filters change
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const toggleReadingList = (post) => {
    if (readingList.some(item => item.id === post.id)) {
      setReadingList(readingList.filter(item => item.id !== post.id));
    } else {
      setReadingList([...readingList, post]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  // Mouse movement effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Calculate parallax offset based on mouse position
  const calculateParallax = (depth) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (mousePosition.x - centerX) * depth;
    const moveY = (mousePosition.y - centerY) * depth;
    
    return { x: moveX, y: moveY };
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden transition-colors duration-300" 
      style={{ backgroundColor: theme.background }}
    >
      <Helmet>
      <title>Momntum AI Blogs | Ethical AI Insights & Case Studies</title>
      <meta 
        name="description" 
        content="Explore Momntum AI blogs covering Ethical AI, automation, healthcare case studies, small business growth, and the future of work. Stay informed with responsible innovation." 
      />
      <link rel="canonical" href="https://momntumai.com/blogs" />

      <meta property="og:title" content="Momntum AI Blogs | Ethical AI Insights & Case Studies" />
      <meta property="og:description" content="Explore blogs on Ethical AI, automation, healthcare case studies, and responsible innovation shaping the future." />
      <meta property="og:image" content="https://momntumai.com/logo.png" />
      <meta property="og:url" content="https://momntumai.com/blogs" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Momntum AI" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Momntum AI Blogs | Ethical AI Insights & Case Studies" />
      <meta name="twitter:description" content="Read the latest blogs on Ethical AI and responsible business innovation." />
      <meta name="twitter:image" content="https://momntumai.com/logo.png" />
      <meta name="twitter:site" content="@Momntum_Ai" />
      <meta name="twitter:creator" content="@Momntum_Ai" />

      <meta name="keywords" content="Ethical AI blogs, AI case studies, AI in healthcare, AI automation, AI business growth, Momntum AI insights" />
      <meta name="author" content="Momntum AI" />
    </Helmet>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: theme.primary,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${theme.glow}`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Header with navigation and controls */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300" style={{ backgroundColor: `${theme.card}CC`, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold" style={{ color: theme.primary }}>
              MomntumAi Blog
            </Link>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20"
                style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              
              <button 
                onClick={() => setShowReadingList(!showReadingList)}
                className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20 relative"
                style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}
                aria-label="Reading list"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {readingList.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs rounded-full" 
                    style={{ backgroundColor: theme.secondary, color: theme.text }}>
                    {readingList.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Reading List Sidebar */}
      <AnimatePresence>
        {showReadingList && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 z-50 shadow-xl"
            style={{ backgroundColor: theme.card, borderLeft: `1px solid ${theme.border}` }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold" style={{ color: theme.text }}>Your Reading List</h2>
                <button 
                  onClick={() => setShowReadingList(false)}
                  className="p-1 rounded-full hover:bg-opacity-20 transition-colors"
                  style={{ color: theme.textSecondary }}
                  aria-label="Close reading list"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {readingList.length === 0 ? (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-center" style={{ color: theme.textSecondary }}>
                    Your reading list is empty. <br />
                    Click the bookmark icon on any article to save it here.
                  </p>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto">
                  {readingList.map((post) => (
                    <div key={post.id} className="mb-4 p-4 rounded-lg border" style={{ borderColor: theme.border, backgroundColor: theme.background }}>
                      <h3 className="font-bold mb-2" style={{ color: theme.text }}>{post.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm" style={{ color: theme.textSecondary }}>{post.readTime}</span>
                        <button 
                          onClick={() => toggleReadingList(post)}
                          className="p-1 rounded-full hover:bg-opacity-20 transition-colors"
                          style={{ color: theme.primary }}
                          aria-label="Remove from reading list"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="pt-4 border-t" style={{ borderColor: theme.border }}>
                <button 
                  onClick={() => setReadingList([])}
                  disabled={readingList.length === 0}
                  className="w-full py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
                  style={{ 
                    backgroundColor: readingList.length === 0 ? theme.border : theme.danger, 
                    color: theme.text 
                  }}
                >
                  Clear All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section with futuristic design */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Glowing orb effect */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{ backgroundColor: theme.primary }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute top-2/3 right-1/4 w-80 h-80 rounded-full filter blur-3xl opacity-20"
          style={{ backgroundColor: theme.secondary }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ETHICAL AI
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              INSIGHTS
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-xl"
            style={{ color: theme.textSecondary }}
          >
            Explore the future of responsible AI innovation
          </motion.p>
          
          {/* Animated underline */}
          <motion.div 
            className="h-1 w-32 mx-auto mt-6 rounded-full"
            style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles, authors, or tags..."
                className="w-full px-6 py-4 rounded-full focus:outline-none focus:ring-2 backdrop-blur-sm"
                style={{ 
                  backgroundColor: `${theme.card}CC`,
                  color: theme.text,
                  border: `1px solid ${theme.border}`,
                }}
              />
              <svg 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6" 
                style={{ color: theme.textSecondary }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Blog with 3D tilt effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 relative"
      >
        <motion.div 
          whileHover={{ 
            y: -15,
            boxShadow: `0 20px 40px ${theme.glow}`
          }}
          className="rounded-2xl overflow-hidden border relative"
          style={{ 
            backgroundColor: theme.card,
            borderColor: theme.border,
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5)`
          }}
        >
          {/* Holographic effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="md:flex">
            <div className="md:w-2/5 relative overflow-hidden group">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${featuredBlog.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${theme.accent}20`,
                    color: theme.accent,
                    border: `1px solid ${theme.accent}`
                  }}
                >
                  FEATURED
                </span>
              </div>
            </div>
            <div className="p-8 md:w-3/5 relative z-10">
              <div className="flex items-center text-sm mb-4" style={{ color: theme.textSecondary }}>
                <span>{featuredBlog.date}</span>
                <span className="mx-2">•</span>
                <span>By {featuredBlog.author}</span>
                <span className="mx-2">•</span>
                <span>{featuredBlog.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: theme.text }}>{featuredBlog.title}</h2>
              <p className="mb-6" style={{ color: theme.textSecondary }}>{featuredBlog.excerpt}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredBlog.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 rounded-full" 
                    style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                    #{tag}
                  </span>
                ))}
              </div>
              
              {/* Engagement stats */}
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center" style={{ color: theme.textSecondary }}>
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {featuredBlog.views.toLocaleString()} views
                </div>
                <div className="flex items-center" style={{ color: theme.textSecondary }}>
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {featuredBlog.likes.toLocaleString()} likes
                </div>
                <div className="flex items-center" style={{ color: theme.textSecondary }}>
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {featuredBlog.shares.toLocaleString()} shares
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={featuredBlog.link}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white relative overflow-hidden group"
                    style={{ 
                      background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                      boxShadow: `0 4px 14px 0 ${theme.glow}`
                    }}
                  >
                    <span className="relative z-10">READ FULL ARTICLE</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </motion.div>
                
                <button 
                  onClick={() => toggleReadingList(featuredBlog)}
                  className="p-3 rounded-full transition-colors duration-300 hover:bg-opacity-20"
                  style={{ 
                    backgroundColor: readingList.some(item => item.id === featuredBlog.id) 
                      ? `${theme.accent}20` 
                      : `${theme.primary}20`,
                    color: readingList.some(item => item.id === featuredBlog.id) 
                      ? theme.accent 
                      : theme.primary
                  }}
                  aria-label={readingList.some(item => item.id === featuredBlog.id) ? "Remove from reading list" : "Add to reading list"}
                >
                  {readingList.some(item => item.id === featuredBlog.id) ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Filtering and Sorting Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>LATEST ARTICLES</h2>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-sm" style={{ color: theme.textSecondary }}>Sort by:</label>
              <select 
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 px-3 rounded-lg text-sm focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: theme.card,
                  color: theme.text,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <option value="date">Date</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
                <option value="readTime">Read Time</option>
                <option value="title">Title</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-order" className="text-sm" style={{ color: theme.textSecondary }}>Order:</label>
              <select 
                id="sort-order"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="py-2 px-3 rounded-lg text-sm focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: theme.card,
                  color: theme.text,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>TRENDING NOW</h2>
          <div className="h-1 w-24 rounded-full" style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="rounded-xl overflow-hidden border relative group"
              style={{ 
                backgroundColor: theme.card,
                borderColor: theme.border,
              }}
            >
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded-full mr-2"
                    style={{ 
                      backgroundColor: `${theme.primary}20`,
                      color: theme.primary,
                    }}
                  >
                    #{index + 1}
                  </span>
                  <span className="text-xs" style={{ color: theme.textSecondary }}>{post.views.toLocaleString()} views</span>
                </div>
                <h3 className="font-bold mb-2" style={{ color: theme.text }}>{post.title}</h3>
                <div className="flex items-center text-xs" style={{ color: theme.textSecondary }}>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Listing with holographic cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 z-10 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                boxShadow: `0 15px 35px ${theme.glow}`
              }}
              className="rounded-xl overflow-hidden transition-all duration-300 border relative group"
              style={{ 
                backgroundColor: theme.card,
                borderColor: theme.border,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500 pointer-events-none"></div>
              
              <div className="relative h-48 overflow-hidden z-10">
                <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${post.image})` }}></div>
                <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${theme.primary}20`,
                    color: theme.primary,
                    border: `1px solid ${theme.primary}`
                  }}
                >
                  {post.category}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm"
                    style={{ 
                      backgroundColor: `${theme.accent}20`,
                      color: theme.accent,
                    }}
                  >
                    {post.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-xs backdrop-blur-sm rounded-full px-2 py-1"
                  style={{ backgroundColor: `${theme.background}80`, color: theme.text }}
                >
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </div>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center text-sm mb-3" style={{ color: theme.textSecondary }}>
                  <span>{post.date}</span>
                  {post.updated && (
                    <>
                      <span className="mx-2">•</span>
                      <span title={`Updated on ${post.updated}`}>Updated</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.text }}>{post.title}</h3>
                <p className="mb-4" style={{ color: theme.textSecondary }}>{post.excerpt}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full" 
                      style={{ backgroundColor: `${theme.primary}10`, color: theme.textSecondary }}>
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full" 
                      style={{ backgroundColor: `${theme.primary}10`, color: theme.textSecondary }}>
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Engagement stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm" style={{ color: theme.textSecondary }}>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {post.views.toLocaleString()}
                    </div>
                    <div className="flex items-center text-sm" style={{ color: theme.textSecondary }}>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {post.likes.toLocaleString()}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => toggleReadingList(post)}
                    className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20"
                    style={{ 
                      backgroundColor: readingList.some(item => item.id === post.id) 
                        ? `${theme.accent}20` 
                        : `${theme.primary}20`,
                      color: readingList.some(item => item.id === post.id) 
                        ? theme.accent 
                        : theme.primary
                    }}
                    aria-label={readingList.some(item => item.id === post.id) ? "Remove from reading list" : "Add to reading list"}
                  >
                    {readingList.some(item => item.id === post.id) ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    )}
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium" style={{ color: theme.textSecondary }}>{post.author}</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={() => openModal(post)}
                      className="font-medium flex items-center text-sm"
                      style={{ color: theme.primary }}
                    >
                      QUICK VIEW
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${theme.primary}80`
              }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMorePosts}
              className="px-8 py-3 font-medium rounded-full transition-all duration-300 relative overflow-hidden group"
              style={{
                backgroundColor: theme.card,
                color: theme.primary,
                border: `1px solid ${theme.primary}`,
              }}
            >
              <span className="relative z-10">LOAD MORE ARTICLES</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>
        )}
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: theme.textSecondary }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium mb-2" style={{ color: theme.text }}>No articles found</h3>
            <p style={{ color: theme.textSecondary }}>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showModal && selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b backdrop-blur-sm"
                style={{ backgroundColor: `${theme.card}CC`, borderColor: theme.border }}>
                <h3 className="text-lg font-bold" style={{ color: theme.text }}>Quick Preview</h3>
                <button 
                  onClick={closeModal}
                  className="p-1 rounded-full hover:bg-opacity-20 transition-colors"
                  style={{ color: theme.textSecondary }}
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="h-48 w-full bg-cover bg-center rounded-lg mb-4" style={{ backgroundImage: `url(${selectedPost.image})` }}></div>
                  <div className="flex items-center text-sm mb-3" style={{ color: theme.textSecondary }}>
                    <span>{selectedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {selectedPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: theme.text }}>{selectedPost.title}</h3>
                  <p className="mb-4" style={{ color: theme.textSecondary }}>{selectedPost.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full" 
                        style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm" style={{ color: theme.textSecondary }}>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {selectedPost.views.toLocaleString()} views
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {selectedPost.likes.toLocaleString()} likes
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      {selectedPost.shares.toLocaleString()} shares
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Link
                      to={selectedPost.link}
                      className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white relative overflow-hidden group"
                      style={{ 
                        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                        boxShadow: `0 4px 14px 0 ${theme.glow}`
                      }}
                    >
                      <span className="relative z-10">READ FULL ARTICLE</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </motion.div>
                  
                  <button 
                    onClick={() => toggleReadingList(selectedPost)}
                    className="px-6 py-3 rounded-md border flex items-center justify-center transition-colors duration-300"
                    style={{ 
                      backgroundColor: readingList.some(item => item.id === selectedPost.id) 
                        ? `${theme.accent}20` 
                        : `${theme.primary}20`,
                      color: readingList.some(item => item.id === selectedPost.id) 
                        ? theme.accent 
                        : theme.primary,
                      borderColor: readingList.some(item => item.id === selectedPost.id) 
                        ? theme.accent 
                        : theme.primary,
                    }}
                  >
                    {readingList.some(item => item.id === selectedPost.id) ? (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        SAVED
                      </>
                    ) : (
                      <>
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        SAVE TO READING LIST
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>EXPLORE BY CATEGORY</h2>
          <div className="h-1 w-24 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`py-4 px-2 rounded-xl border transition-all duration-300 ${
                activeCategory === category ? 'font-bold' : ''
              }`}
              style={{
                backgroundColor: activeCategory === category ? theme.primary : theme.card,
                color: activeCategory === category ? theme.text : theme.textSecondary,
                borderColor: activeCategory === category ? theme.primary : theme.border,
                boxShadow: activeCategory === category ? `0 5px 15px ${theme.glow}` : 'none'
              }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ 
            backgroundColor: theme.card,
            border: `1px solid ${theme.border}`,
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full" style={{ backgroundColor: theme.primary }}></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full" style={{ backgroundColor: theme.secondary }}></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: theme.text }}>Stay Updated on Ethical AI</h2>
            <p className="mb-8" style={{ color: theme.textSecondary }}>
              Get the latest insights, case studies, and ethical AI trends delivered to your inbox
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: theme.background,
                  color: theme.text,
                  border: `1px solid ${theme.border}`,
                }}
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-medium text-white relative overflow-hidden group"
                style={{ 
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  boxShadow: `0 4px 14px 0 ${theme.glow}`
                }}
              >
                <span className="relative z-10">SUBSCRIBE</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
            </form>
            
            <AnimatePresence>
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-3 rounded-lg"
                  style={{ backgroundColor: `${theme.success}`, color: theme.text }}
                >
                  Thank you for subscribing! Check your email for confirmation.
                </motion.div>
              )}
            </AnimatePresence>
            
            <p className="text-sm mt-4" style={{ color: theme.textSecondary }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: theme.text }}>WHAT READERS SAY</h2>
          <div className="h-1 w-24 mx-auto rounded-full" style={{ background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` }}></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-6 rounded-xl border relative"
              style={{ 
                backgroundColor: theme.card,
                borderColor: theme.border,
              }}
            >
              <svg className="w-8 h-8 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24" style={{ color: theme.primary }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="mb-6 italic" style={{ color: theme.text }}>
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold" style={{ color: theme.text }}>{testimonial.author}</p>
                  <p className="text-sm" style={{ color: theme.textSecondary }}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t" style={{ backgroundColor: theme.background, borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{ color: theme.text }}>MomntumAi Blog</h3>
              <p className="text-sm" style={{ color: theme.textSecondary }}>
                Exploring the future of ethical artificial intelligence and responsible innovation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: theme.text }}>Categories</h4>
              <ul className="space-y-2">
                {categories.slice(1).map((category) => (
                  <li key={category}>
                    <button 
                      onClick={() => setActiveCategory(category)}
                      className="text-sm hover:underline"
                      style={{ color: theme.textSecondary }}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: theme.text }}>Authors</h4>
              <ul className="space-y-2">
                {authors.slice(0, 5).map((author) => (
                  <li key={author}>
                    <span className="text-sm" style={{ color: theme.textSecondary }}>{author}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: theme.text }}>Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full" style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full" style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-full" style={{ backgroundColor: `${theme.primary}20`, color: theme.primary }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: theme.border }}>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              © {new Date().getFullYear()} MomntumAi Blog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;