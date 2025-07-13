import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Aurora from '../mini-components/Aurora.jsx';
import Socials from '../mini-components/Socials.jsx';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 sm:px-10 md:px-20 pt-24 pb-40 overflow-hidden">
      {/* Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
        {/* Support */}
        <div>
          
          <Socials />
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
            <li>Service at your home</li>
            {/* <li>MomntumAI for hosts</li> */}
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>

        {/* MomentumAi */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-4">MomntumAi</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Emergency stays</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      {/* <div className="mb-10 text-sm sm:text-base text-gray-400">
        <h4 className="font-bold mb-2">Disclaimer</h4>
        <p>
          The MomntumAi Newsroom is aimed at journalists. All Homes and Experiences referenced are for inspiration only.
          MomntumAi does not endorse specific Home or Experience listings on the platform.
        </p>
      </div> */}

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-xs sm:text-sm text-gray-400">
        <p className="text-center md:text-left">
          © 2025 MomntumAi, Inc. All rights reserved · Privacy · Terms · Sitemap
        </p>
        {/* <div className="flex space-x-5 mt-4 md:mt-0 text-lg sm:text-xl">
          <FaXTwitter className="hover:text-white cursor-pointer transition" />
          <FaInstagram className="hover:text-white cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
          <FaFacebookF className="hover:text-white cursor-pointer transition" />
        </div> */}
      </div>

      {/* Aurora Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <Aurora amplitude={1.0} blend={0.5} />
      </div>
    </footer>
  );
};

export default Footer;
