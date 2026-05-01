import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle background opacity change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b 
      ${isScrolled 
        ? 'py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-gray-200 dark:border-gray-800 shadow-sm' 
        : 'py-5 bg-transparent border-transparent'}`}
    >   


      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Logo Image */}
          <div className="relative w-10 h-10 overflow-hidden ">
            <img 
              src="/ASlogo.png" 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#262B4F] ">
            Adarsh Sharma
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {['Home','About','Project','Skills','Experience','Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 space-y-4 flex flex-col shadow-xl">
          {['Home','About','Project','Skills','Experience','Contact'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-700 dark:text-gray-200">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};
