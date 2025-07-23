import React from 'react';
import Aurora from '../mini-components/Aurora.jsx';
import Socials from '../mini-components/Socials.jsx';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 sm:px-10 md:px-20 pt-24 pb-40 overflow-hidden">
      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 items-start">
        {/* Socials */}
        <div>
          <Socials />
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-4">Product</h3>
          <ul className="space-y-2 text-xs sm:text-base text-gray-300">
            <li>Features</li>
            <li>
              Pricing (<span className="italic">Coming soon</span>)
            </li>
            <li>Early Access</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-xs sm:text-base text-gray-300">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* MomntumAi Info */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-4">MomntumAi</h3>
          <ul className="space-y-2 text-xs sm:text-base text-gray-300">
            <li>About Us</li>
            <li>Careers (<span className="italic">Open roles coming soon</span>)</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-xs sm:text-sm text-gray-400">
        <p className="text-center md:text-left">
          © 2025 MomntumAi, Inc. All rights reserved · Privacy · Terms · Sitemap
        </p>
      </div>

      {/* Aurora Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <Aurora amplitude={1.0} blend={0.5} />
      </div>
    </footer>
  );
};

export default Footer;
