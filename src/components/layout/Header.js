import React, {  useEffect, useState } from 'react';
import { Link } from 'gatsby';

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex justify-between items-center p-[20px] md:px-[80px] md:py-[24px] text-white transition-all ${
      isFixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative' 
    }`}>      
      <div className="flex items-center">
        { logo ? <img src={logo} alt="Logo" className="h-8" /> : <Link to="/">Angie Spears</Link> }
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/resume" className="hover:text-gray-400">Resume</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Modal for mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">X</button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="hover:text-gray-800" onClick={toggleMenu}>About</Link>
              <Link to="/projects" className="hover:text-gray-800" onClick={toggleMenu}>Projects</Link>
              <Link to="/resume" className="hover:text-gray-800" onClick={toggleMenu}>Resume</Link>
              <Link to="/contact" className="hover:text-gray-800" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
