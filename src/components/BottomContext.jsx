import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Layers, TrendingUp } from 'lucide-react';

const GraphSection = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const chartData = [
    { x: 0, y: 160, value: '10%'},
    { x: 90, y: 145, value: '25%'},
    { x: 160, y: 120, value: '50%'},
    { x: 230, y: 95, value: '75%'},
    { x: 280, y: 70, value: '90%'},
    { x: 325, y: 45, value: '100%'},
  ];

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0 8px 24px rgba(168, 85, 247, 0.3)' },
  };

  const chartVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        pathLength: { duration: 1.5, ease: 'easeInOut' },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <motion.div 
          className="flex-1 text-white max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight">
            The <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Snapfix</span> revolutionizes business automation
          </h1>

          <div className="mt-8 space-y-6 text-gray-200 font-light text-base leading-relaxed">
            <p>
              We don't just build AI. <span className="text-purple-400 font-medium">We create an ecosystem</span> — where intelligent
              systems work in harmony, replacing inefficiency with seamless automation.
            </p>
            <p>
              Beyond AI—it's a powerhouse of automation, decision-making, and optimization designed for effortless scalability and impact.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <motion.div 
              className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-purple-900/20 shadow-xl space-y-3"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Zap className="w-6 h-6 text-purple-400" />
                </motion.div>
                <h3 className="text-purple-400 font-semibold text-xl">Autonomous</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI that anticipates, decides, and acts to resolve challenges proactively.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-purple-900/20 shadow-xl space-y-3"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <Layers className="w-6 h-6 text-purple-400" />
                </motion.div>
                <h3 className="text-purple-400 font-semibold text-xl">Scalable</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                From startups to global enterprises, our AI grows seamlessly with your needs.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Chart */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/90 p-8 rounded-3xl border border-purple-500/20 shadow-2xl w-[360px] sm:w-[420px]">
            <h2 className="text-white text-xl font-medium mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Scaling Potential into Performance
            </h2>

            <div className="relative h-64 w-full">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`h-${i}`}
                    className="absolute w-full border-t border-gray-700/50"
                    style={{ top: `${i * 25}%` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`v-${i}`}
                    className="absolute h-full border-l border-gray-700/50"
                    style={{ left: `${i * 25}%` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
              </div>

              {/* Chart */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 350 256">
                  {/* Gradient-filled area */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 25 224 Q 90 209 160 184 Q 230 159 280 134 Q 320 119 325 109"
                    fill="url(#chartGradient)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M 25 224 Q 90 209 160 184 Q 230 159 280 134 Q 320 119 325 109"
                    stroke="url(#chartGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="drop-shadow"
                    variants={chartVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  {/* Data points */}
                  <AnimatePresence>
                    {chartData.map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#a855f7"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.2 }}
                        onMouseEnter={() => setHoveredPoint(i)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    ))}
                  </AnimatePresence>
                </svg>
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredPoint !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute bg-purple-600/90 text-white text-xs rounded-lg px-3 py-2 shadow-lg"
                    style={{
                      left: chartData[hoveredPoint].x,
                      top: chartData[hoveredPoint].y - 30,
                    }}
                  >
                    Performance: {chartData[hoveredPoint].value}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Chart Labels */}
            <div className="flex justify-between mt-4 text-gray-400 text-xs">
              <span>Start</span>
              <span>Progress</span>
              <span>Peak Performance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GraphSection;