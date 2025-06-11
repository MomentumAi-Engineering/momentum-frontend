import Logo from './Logo';

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex items-center justify-between py-4 px-6">
        {/* Logo with size control */}
        <div className="w-40 h-12 overflow-hidden flex items-center">
          <Logo />
        </div>

        {/* Navigation links */}
        <div className="flex items-center space-x-8">
          <a
            href="/team"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            TEAM
          </a>
          <a
            href="/pricing"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            PRICING
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            GET IN TOUCH
          </a>

          {/* Login button */}
          {/* <a
            href="/signup"
            className="bg-white text-black font-medium mx-15 px-4 py-2 rounded-4xl border border-transparent hover:bg-black hover:text-white hover:border-white transition-colors duration-300"
          >
            SignUp
          </a> */}
           <a
            href="/signin"
            className="bg-black text-white font-medium mx-5 px-4 py-2 rounded-4xl border border-transparent   border-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
