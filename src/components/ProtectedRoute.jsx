import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
    <motion.div
      className="text-center space-y-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Logo */}
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity }
        }}
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-white/70">Checking authentication</p>
      </motion.div>

      {/* Loading Dots */}
      <div className="flex justify-center space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-white/60 rounded-full"
            animate={{
              y: [-4, 4, -4],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  </div>
);

const ProtectedRoute = ({ children, requireAuth = true, requireUnauth = false }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  // Redirect to login if authentication is required but user is not authenticated
  if (requireAuth && !currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect to dashboard if user is authenticated but trying to access auth pages
  if (requireUnauth && currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  // Check if email is verified for authenticated routes
  if (requireAuth && currentUser && !currentUser.emailVerified) {
    // Allow access to dashboard but show verification notice
    // You can customize this behavior based on your requirements
  }

  return children;
};

export default ProtectedRoute;