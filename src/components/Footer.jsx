import React from 'react';
import { motion } from 'framer-motion';
import Aurora from '../mini-components/Aurora.jsx';
import Socials from '../mini-components/Socials.jsx';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: {
      scale: 1.05,
      color: '#ffffff',
      transition: { duration: 0.2 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white px-6 sm:px-10 md:px-20 pt-24 pb-40 overflow-hidden">
      {/* Links Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Socials */}
        <motion.div variants={containerVariants}>
          <Socials />
        </motion.div>

        {/* Product */}
        <motion.div variants={containerVariants}>
          <h3 className="font-bold text-base sm:text-lg mb-4 text-teal-300">Product</h3>
<ul className="space-y-3 text-xs sm:text-base text-gray-300">
  {[
    { label: "Features", sectionId: "product-section" },
    { label: "Pricing", sectionId: null },
    { label: "Early Access", sectionId: null },
  ].map((item, index) => (
    <motion.li
      key={index}
      variants={itemVariants}
      whileHover="hover"
      className="cursor-pointer hover:text-teal-200 transition-colors duration-300"
      onClick={() => {
        if (item.sectionId) {
          const el = document.getElementById(item.sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {item.label === "Pricing" ? (
        <>
          {item.label}{" "}
          <span className="italic text-gray-400">(Coming soon)</span>
        </>
      ) : (
        item.label
      )}

      <motion.div
        className="h-0.5 bg-teal-500 rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.li>
  ))}
</ul>

        </motion.div>

        {/* Legal */}
        <motion.div variants={containerVariants}>
          <h3 className="font-bold text-base sm:text-lg mb-4 text-teal-300">Legal</h3>
          <ul className="space-y-3 text-xs sm:text-base text-gray-300">
            {[
              { label: 'Terms', href: '#' },
              { label: 'Privacy', href: '#' },
              { label: 'Cookie Policy', href: '#' }
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="cursor-pointer hover:text-teal-200 transition-colors duration-300"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
                <motion.div
                  className="h-0.5 bg-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* MomntumAi Info */}
        <motion.div variants={containerVariants}>
          <h3 className="font-bold text-base sm:text-lg mb-4 text-teal-300">MomntumAi</h3>
          <ul className="space-y-3 text-xs sm:text-base text-gray-300">
            {[
              { label: 'About Us', href: 'https://momntumai.com/team' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: 'https://momntumai.com/contact' },
              { label: 'Blogs', href: '/Blogs' }
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="cursor-pointer hover:text-teal-200 transition-colors duration-300"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label === 'Careers' ? (
                    <>
                      {item.label}{' '}
                      <span className="italic text-gray-400">(Open roles coming soon)</span>
                    </>
                  ) : (
                    item.label
                  )}
                </a>
                <motion.div
                  className="h-0.5 bg-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-xs sm:text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-center md:text-left">
          © 2025 MomntumAi, Inc. All rights reserved ·{' '}
          <a href="#" className="hover:text-teal-300 transition-colors duration-300">Privacy</a> ·{' '}
          <a href="#" className="hover:text-teal-300 transition-colors duration-300">Terms</a> ·{' '}
          <a href="#" className="hover:text-teal-300 transition-colors duration-300">Sitemap</a>
        </p>
      </motion.div>

      {/* Aurora Effect */}
      <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none">
        <Aurora amplitude={1.5} blend={0.7} animationSpeed={2} />
      </div>
    </footer>
  );
};

export default Footer;
