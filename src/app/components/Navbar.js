"use client";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--foreground-rgb', '255, 255, 255');
      root.style.setProperty('--background-start-rgb', '33, 37, 41');
      root.style.setProperty('--background-end-rgb', '33, 37, 41');
    } else {
      root.style.setProperty('--foreground-rgb', '0, 0, 0');
      root.style.setProperty('--background-start-rgb', '214, 219, 220');
      root.style.setProperty('--background-end-rgb', '255, 255, 255');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-2 transition-colors duration-300 font-sans ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button onClick={toggleMenu} className="text-3xl md:hidden">
          <FaBars />
        </button>

        <div className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-[60px] md:top-0 left-0 w-full md:w-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} md:bg-transparent p-5 md:p-0 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          {/* Navigation Links */}
          <Link to="home" smooth={true} duration={500} className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition duration-300 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition duration-300 rounded-md" onClick={() => setIsMenuOpen(false)}>About Me</Link>
          <Link to="projects" smooth={true} duration={500} className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition duration-300 rounded-md" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition duration-300 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        
        <button
          onClick={toggleDarkMode}
          className="transform transition ease-in-out duration-300 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-lg flex items-center justify-center"
        >
          {isDarkMode ? <FaMoon className="text-gray-200 text-2xl" /> : <FaSun className="text-yellow-400 text-2xl" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
