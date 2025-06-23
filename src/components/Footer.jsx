import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Aurora from '../mini-components/Aurora.jsx';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-6 md:px-20 pt-32 pb-48 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Support */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>

        {/* Hosting */}
        <div>
          <h3 className="font-bold mb-4">Hosting</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Service at your home</li>
            <li>MomentumAI for hosts</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>

        {/* MomentumAi */}
        <div>
          <h3 className="font-bold mb-4">MomentumAi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mb-8 text-sm text-gray-400">
        <h4 className="font-bold mb-2">Disclaimer</h4>
        <p>
          The MomentumAi Newsroom is aimed at journalists. All Homes and Experiences referenced on the Momentum Newsroom are
          intended purely to inspire and illustrate. MomentumAi does not recommend or endorse specific Home or Experience
          listings on the MomentumAi platform.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400">
        <p>© 2025 MomentumAi, Inc. All rights reserved · Privacy · Terms · Sitemap</p>
        <div className="flex space-x-5 mt-4 md:mt-0 text-xl">
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Aurora Effect */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <Aurora amplitude={1.0} blend={0.5} />
      </div>
    </footer>
  );
};

export default Footer;
