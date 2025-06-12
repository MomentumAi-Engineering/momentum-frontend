import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-600">
      <div className="w-full flex items-center justify-between py-4 px-6">
        {/* Logo with size control */}
        <div className="w-40 h-12 overflow-hidden flex items-center">
          <Logo />
        </div>

        {/* Navigation links */}
        <div className="flex items-center space-x-8">
          <a
            href="/team"
            className="text-gray-300 hover:text-gray-100 hover:bg-gray-800 px-3 py-1 rounded transition-colors duration-200 text-sm font-medium"
          >
            Team
          </a>
          <a
            href="/pricing"
            className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-1 rounded transition-colors duration-200 text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-1 rounded transition-colors duration-200 text-sm font-medium"
          >
            Contact
          </a>

          {/* Sign in button */}
          <a
            href="/signin"
            className="bg-black text-white font-medium mx-5 px-4 py-2 rounded-4xl border border-transparent border-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
