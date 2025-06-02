import Logo from './Logo';

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo with size control */}
        <div className="w-40 h-12 overflow-hidden flex items-center">
          <Logo />
        </div>

        {/* Navigation links */}
        <div className="flex items-center space-x-8">
          <a
            href="/team"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-bold"
          >
            Team
          </a>
          <a
            href="/support"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-bold"
          >
            Support
          </a>

          {/* Login button */}
          <a
           href="/login"
           className="bg-white text-black font-semibold px-4 py-2 rounded-4xl border border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-300"
       >
           Login
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
