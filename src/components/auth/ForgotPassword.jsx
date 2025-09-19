import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useAuth } from '../../contexts/AuthContext';
import AuthLayout from './AuthLayout';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errors, setErrors] = useState({});

  const { resetPassword } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP form animations
    const formElements = formRef.current?.children;
    if (formElements) {
      gsap.fromTo(Array.from(formElements), 
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
    setEmail(e.target.value);
    
    // Clear error when user starts typing
    if (errors.email) {
      setErrors({});
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
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
      await resetPassword(email);
      setIsEmailSent(true);
      
      // Success animation
      gsap.to(buttonRef.current, {
        backgroundColor: '#10B981',
        duration: 0.3
      });
      
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

  if (isEmailSent) {
    return (
      <AuthLayout
        title="Check Your Email"
        subtitle="We've sent you a password reset link"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">
              Email Sent Successfully!
            </h3>
            <p className="text-white/70 leading-relaxed">
              We've sent a password reset link to <br />
              <span className="text-blue-400 font-medium">{email}</span>
            </p>
            <p className="text-white/60 text-sm">
              Please check your inbox and follow the instructions to reset your password. 
              Don't forget to check your spam folder.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <motion.button
              onClick={() => setIsEmailSent(false)}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
            >
              Send Again
            </motion.button>

            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </motion.div>
        </motion.div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your email to receive reset instructions"
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
              value={email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
              placeholder="Enter your email address"
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

        {/* Reset Button */}
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
              Sending Reset Link...
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" />
              Send Reset Link
            </>
          )}
        </motion.button>

        {/* Back to Login Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </motion.div>

        {/* Additional Help */}
        <motion.div
          className="text-center space-y-2 pt-4 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-white/60 text-sm">
            Didn't receive an email? Check your spam folder or
          </p>
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
          >
            Create a new account
          </Link>
        </motion.div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;