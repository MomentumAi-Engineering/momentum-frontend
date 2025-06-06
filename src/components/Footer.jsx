import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-32">
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
            <li>Airbnb your home</li>
            <li>AirCover for hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Airbnb-friendly apartments</li>
          </ul>
        </div>

        {/* Airbnb */}
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
          listings on the MometumAi platform.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400">
        <p>© 2025 MometumAi, Inc. All rights reserved · Privacy · Terms · Sitemap</p>
        <div className="flex space-x-5 mt-4 md:mt-0 text-xl">
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
