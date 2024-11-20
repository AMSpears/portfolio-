import React, {  useEffect, useState } from 'react';
import { Link } from 'gatsby';
import useScrollLock from '../../hooks/useScrollLock';

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

  useScrollLock(isOpen);

  return (
    <header className={`flex justify-between items-center py-[20px] px-[20px] md:px-[80px] md:py-[24px] text-white transition-all overflow-hidden ${
      isFixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative' 
    }`}>      
      <div className="flex items-center">
        { logo ? <img src={logo} alt="Logo" className="h-8" /> : <Link to="/" className="text-primary font-bold text-[16px]">Angie Spears</Link> }
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link to="/about" className="hover:underline underline-offset-2 cursor-pointer">About</Link>
        <Link to="/resume" className="hover:underline underline-offset-2 cursor-pointer">Resume</Link>
        <Link to="/contact" className="hover:underline underline-offset-2 cursor-pointer">Contact</Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-primary focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="currentColor"/>
        </svg>
        </button>
      </div>
      {/* Modal for mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden" onClick={toggleMenu}>
          <div className="bg-yellow w-full h-full">
            <div className="absolute top-[20px] right-[20px]">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col text-center text-black space-y-10 pt-[150px] text-6xl font-bold uppercase">
              <Link to="/" className="hover:underline underline-offset-2" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="hover:underline underline-offset-2" onClick={toggleMenu}>About</Link>
              <Link to="/resume" className="hover:underline underline-offset-2" onClick={toggleMenu}>Resume</Link>
              <Link to="/contact" className="hover:underline underline-offset-2" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
