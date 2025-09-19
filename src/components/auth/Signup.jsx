import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from './AuthLayout';
import GoogleButton from 'react-google-button';
import { Eye, EyeOff, Mail, Lock, User, Sparkles, Check, X } from 'lucide-react';
import toast from 'react-hot-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: []
  });

  const { signup, signInWithGoogle } = useAuth();
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

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    const checks = [
      { test: password.length >= 8, message: 'At least 8 characters' },
      { test: /[a-z]/.test(password), message: 'Lowercase letter' },
      { test: /[A-Z]/.test(password), message: 'Uppercase letter' },
      { test: /\d/.test(password), message: 'Number' },
      { test: /[!@#$%^&*(),.?":{}|<>]/.test(password), message: 'Special character' }
    ];

    const passedChecks = checks.filter(check => check.test);
    const score = (passedChecks.length / checks.length) * 100;

    setPasswordStrength({
      score,
      feedback: checks
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    } else if (formData.displayName.trim().length < 2) {
      newErrors.displayName = 'Display name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (passwordStrength.score < 60) {
      newErrors.password = 'Password is too weak';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      await signup(formData.email, formData.password, formData.displayName);
      
      // Success animation
      gsap.to(buttonRef.current, {
        backgroundColor: '#10B981',
        duration: 0.3
      });
      
      toast.success('Account created! Please check your email to verify your account.');
      navigate('/login');
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

  const getPasswordStrengthColor = () => {
    if (passwordStrength.score < 30) return 'bg-red-500';
    if (passwordStrength.score < 60) return 'bg-yellow-500';
    if (passwordStrength.score < 80) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength.score < 30) return 'Weak';
    if (passwordStrength.score < 60) return 'Fair';
    if (passwordStrength.score < 80) return 'Good';
    return 'Strong';
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join us and start your journey"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Display Name Input */}
        <motion.div variants={inputVariants} className="relative">
          <label className="block text-sm font-medium text-white/80 mb-2">
            Display Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <motion.input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              placeholder="Enter your display name"
              whileFocus="focus"
              initial="blur"
              animate={errors.displayName ? "error" : "blur"}
            />
          </div>
          <AnimatePresence>
            {errors.displayName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.displayName}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

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
              placeholder="Create a password"
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
          
          {/* Password Strength Indicator */}
          {formData.password && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 bg-white/10 rounded-full h-2">
                  <motion.div
                    className={`h-full rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${passwordStrength.score}%` }}
                  />
                </div>
                <span className={`text-xs font-medium ${passwordStrength.score >= 60 ? 'text-green-400' : 'text-yellow-400'}`}>
                  {getPasswordStrengthText()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-1 text-xs">
                {passwordStrength.feedback.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-1 ${item.test ? 'text-green-400' : 'text-white/50'}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.test ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                    <span>{item.message}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
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

        {/* Confirm Password Input */}
        <motion.div variants={inputVariants} className="relative">
          <label className="block text-sm font-medium text-white/80 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <motion.input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              placeholder="Confirm your password"
              whileFocus="focus"
              initial="blur"
              animate={errors.confirmPassword ? "error" : "blur"}
            />
            <motion.button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </motion.button>
          </div>
          <AnimatePresence>
            {errors.confirmPassword && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.confirmPassword}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Sign Up Button */}
        <motion.button
          ref={buttonRef}
          type="submit"
          disabled={isLoading}
          variants={buttonVariants}
          initial="initial"
          whileHover={!isLoading ? "hover" : "initial"}
          whileTap={!isLoading ? "tap" : "initial"}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Creating Account...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Create Account
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

        {/* Sign In Link */}
        <motion.p 
          className="text-center text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Sign in
          </Link>
        </motion.p>
      </form>
    </AuthLayout>
  );
};

export default Signup;