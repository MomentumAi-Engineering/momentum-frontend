import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  LogOut,
  Home,
  BarChart3,
  Users,
  Calendar,
  Mail,
  Sparkles,
  Zap,
  Rocket,
  Shield
} from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // GSAP entrance animations
    const tl = gsap.timeline();
    
    tl.fromTo('.dashboard-header', 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
    )
    .fromTo('.dashboard-sidebar', 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3'
    )
    .fromTo('.dashboard-content', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign out');
    }
  };

  const sidebarItems = [
    { id: 'overview', icon: Home, label: 'Overview', color: 'text-blue-400' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics', color: 'text-green-400' },
    { id: 'team', icon: Users, label: 'Team', color: 'text-purple-400' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', color: 'text-orange-400' },
    { id: 'messages', icon: Mail, label: 'Messages', color: 'text-pink-400' },
    { id: 'settings', icon: Settings, label: 'Settings', color: 'text-gray-400' },
  ];

  const stats = [
    { label: 'Total Projects', value: '12', icon: Rocket, color: 'from-blue-500 to-cyan-500', change: '+12%' },
    { label: 'Active Users', value: '1,234', icon: Users, color: 'from-purple-500 to-pink-500', change: '+8%' },
    { label: 'Revenue', value: '$45.2k', icon: Zap, color: 'from-green-500 to-emerald-500', change: '+23%' },
    { label: 'Security Score', value: '98%', icon: Shield, color: 'from-orange-500 to-red-500', change: '+2%' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header */}
      <motion.header 
        className="dashboard-header bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors lg:hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </motion.button>
              
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
                <h1 className="text-xl font-bold text-white hidden sm:block">Dashboard</h1>
              </div>
            </div>

            {/* Center Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-12 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <motion.button
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>

              <div className="flex items-center gap-3 pl-3 border-l border-white/20">
                <div className="text-right hidden sm:block">
                  <p className="text-white font-medium text-sm">
                    {currentUser?.displayName || 'User'}
                  </p>
                  <p className="text-white/60 text-xs">
                    {currentUser?.email}
                  </p>
                </div>
                
                <motion.div
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  {currentUser?.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          <motion.aside
            ref={sidebarRef}
            className={`dashboard-sidebar fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-black/20 backdrop-blur-xl border-r border-white/10 z-30 ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            } transition-transform duration-300`}
            initial={{ x: -256 }}
            animate={{ x: isSidebarOpen || window.innerWidth >= 1024 ? 0 : -256 }}
          >
            <div className="p-6 space-y-2">
              {sidebarItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'bg-white/20 text-white shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}

              <motion.button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 mt-8"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Sign Out</span>
              </motion.button>
            </div>
          </motion.aside>
        </AnimatePresence>

        {/* Main Content */}
        <main className="dashboard-content flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome back, {currentUser?.displayName?.split(' ')[0] || 'User'}! 👋
              </h2>
              <p className="text-white/70">
                Here's what's happening with your account today.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Content Area */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center py-12">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Welcome to Your Dashboard!
                </h3>
                <p className="text-white/70 max-w-md mx-auto leading-relaxed">
                  This is your personalized dashboard. You can navigate through different sections 
                  using the sidebar to explore various features and analytics.
                </p>
                
                <motion.div
                  className="mt-8 flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300">
                    Get Started
                  </button>
                  <button className="px-6 py-2 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;