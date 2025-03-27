import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile menu when clicking on a nav item
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Holiday", path: "/holiday" },
    { name: "Visa", path: "/visa" },
    { name: "City Tours", path: "/city-tours" },
    { name: "Offers", path: "/offers" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 py-4 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img
                src="/brand_logo.png"
                alt="Brand Logo"
                className="h-12 w-auto"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              aria-label="Search"
            >
              <FaSearch className="h-4 w-4" />
            </button>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 transition-colors font-medium flex items-center space-x-2"
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Search"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none p-2"
              aria-label="Menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, packages..."
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-800 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 transition-colors font-medium text-center flex items-center justify-center space-x-2"
              onClick={closeMobileMenu}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
