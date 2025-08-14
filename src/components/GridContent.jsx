import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ArrowRight, CheckCircle } from 'lucide-react';

const GrokGrid = () => {
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 },
    }),
    hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(168, 85, 247, 0.2)' },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-8 p-6 border border-purple-500/20 rounded-3xl relative bg-gray-900/50 backdrop-blur-md">
        {/* Vertical divider */}
        <motion.div
          className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Horizontal divider */}
        <motion.div
          className="hidden sm:block absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Top-left (Main Product Pitch) */}
        <motion.div
          className="flex items-center justify-center p-8 text-white text-center sm:text-left"
          custom={0}
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              SnapFix – Transform Visual Inputs
            </h2>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              SnapFix by <span className="text-purple-400 font-semibold">MomntumAI</span> converts photos and brief descriptions into intelligent, structured reports for infrastructure, safety, and environmental issues.
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Minimize effort, maximize clarity. SnapFix auto-routes cases to the right agency or contractor for swift, accurate resolutions. <span className="italic">One snap. One line. Complete action.</span>
            </p>
            <motion.button
              className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white border border-purple-500/30 hover:border-purple-500/50 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              EXPERIENCE SNAPFIX
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Top-right (Fast Routing Feature) */}
        <motion.div
          className="flex items-center justify-center p-8 text-white"
          custom={1}
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/20 p-6 rounded-2xl max-w-sm text-center sm:text-left border border-purple-500/20 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
              </motion.div>
              <p className="text-green-400 text-sm font-semibold">Intelligent Routing</p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              SnapFix instantly identifies the right authority or contractor, automating the handoff process to minimize delays and ensure rapid resolution.
            </p>
          </div>
        </motion.div>

        {/* Bottom-left (Ease of Use) */}
        <motion.div
          className="flex items-center justify-center p-8 text-white text-center sm:text-left"
          custom={2}
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zero Complexity, Maximum Clarity
            </h2>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Submit a photo and a brief note—SnapFix handles the rest. No forms, no hassle. Generate clean, actionable reports in seconds with AI-driven precision.
            </p>
            <motion.button
              className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white border border-purple-500/30 hover:border-purple-500/50 transition-all"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              GET STARTED
              <Camera className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom-right (Impact Focus) */}
        <motion.div
          className="flex items-center justify-center p-8 text-white"
          custom={3}
          variants={gridItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/20 p-6 rounded-2xl max-w-sm text-center sm:text-left border border-purple-500/20 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
              </motion.div>
              <p className="text-green-400 text-sm font-semibold">Real-World Impact</p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              From broken sidewalks to environmental hazards, SnapFix transforms community concerns into data-driven action plans with measurable, lasting impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GrokGrid;