import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Handle background opacity change on scroll
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        
        setHidden(false);
        return;
      }

      setHidden(true); 

      clearTimeout(timeoutId); 
      timeoutId = setTimeout(() => {
        setHidden(false); 
      }, 250); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 p-3
                   backdrop-blur-md  
                  transition-transform duration-500 
                  ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >   


      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer relative">
  {/* Logo Container with Glass Effect */}
  <div className="relative w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-transparent border border-white/30 dark:border-white/10 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3">
    <div className="absolute inset-0 dark:bg-white " />
    
    <img 
      src="/ASlogo.png" 
      alt="Adarsh Sharma Logo" 
      className="w-10 h-10 object-contai relative z-10 p-1"
    />
  </div>

  {/* Name with Dynamic Underline */}
  <div className="flex flex-col">
    <span className="text-xl font-black tracking-tight text-[#262B4F] dark:text-white transition-colors duration-300 ">
      Adarsh Sharma
    </span>
    <div className="h-[2px] w-0 bg-gradient-to-r from-blue-600 to-teal-400 transition-all duration-500 group-hover:w-full" />
  </div>
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
