import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from './AuthLayout';
import GoogleButton from 'react-google-button';
import { Eye, EyeOff, Mail, Lock, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { signin, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP form animations
    const inputs = formRef.current?.querySelectorAll('input');
    if (inputs) {
      gsap.fromTo(inputs, 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          delay: 0.8,
          ease: 'back.out(1.7)'
        }
      );
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Button animation
    gsap.to(buttonRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    try {
      await signin(formData.email, formData.password);
      
      // Success animation
      gsap.to(buttonRef.current, {
        backgroundColor: '#10B981',
        duration: 0.3
      });
      
      navigate('/dashboard');
    } catch (error) {
      // Error animation
      gsap.to(formRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: 'power2.out'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error('Google sign-in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    blur: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your journey"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <motion.div variants={inputVariants} className="relative">
          <label className="block text-sm font-medium text-white/80 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              placeholder="Enter your email"
              whileFocus="focus"
              initial="blur"
              animate={errors.email ? "error" : "blur"}
            />
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Password Input */}
        <motion.div variants={inputVariants} className="relative">
          <label className="block text-sm font-medium text-white/80 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <motion.input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              placeholder="Enter your password"
              whileFocus="focus"
              initial="blur"
              animate={errors.password ? "error" : "blur"}
            />
            <motion.button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </motion.button>
          </div>
          <AnimatePresence>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.password}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Forgot Password Link */}
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign In Button */}
        <motion.button
          ref={buttonRef}
          type="submit"
          disabled={isLoading}
          variants={buttonVariants}
          initial="initial"
          whileHover={!isLoading ? "hover" : "initial"}
          whileTap={!isLoading ? "tap" : "initial"}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Signing In...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Sign In
            </>
          )}
        </motion.button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-white/60">Or continue with</span>
          </div>
        </div>

        {/* Google Sign In Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <GoogleButton
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            style={{
              width: '100%',
              borderRadius: '12px',
              fontWeight: '500',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          />
        </motion.div>

        {/* Sign Up Link */}
        <motion.p 
          className="text-center text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Sign up
          </Link>
        </motion.p>
      </form>
    </AuthLayout>
  );
};

export default Login;