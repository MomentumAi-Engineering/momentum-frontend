import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0f111580] border-b border-gray-700 shadow-md">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="w-40 h-12 overflow-hidden flex items-center">
          <Logo />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a
            href="/team"
            className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition-all text-sm font-medium"
          >
            Team
          </a>
          <a
            href="/pricing"
            className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition-all text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1 rounded-md transition-all text-sm font-medium"
          >
            Contact
          </a>

          {/* Sign In Button */}
          <a
            href="/signin"
            className="bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition-all border border-transparent"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
