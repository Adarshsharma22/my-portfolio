import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
  // Default Dark Theme
  document.documentElement.classList.add("dark");
  }, []);
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
  if (theme === "dark") {
    document.documentElement.classList.remove("dark");
    setTheme("light");
  } else {
    document.documentElement.classList.add("dark");
    setTheme("dark");
  }
};

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 p-5 rounded-[20px] mx-19 m-2  bg-white/60 dark:bg-black/60
                   backdrop-blur-xl  
                  transition-transform duration-500 
                  ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >   


      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer relative">
  

  {/* Name with Dynamic Underline */}
  <div className="flex flex-col">
    <span className="text-xl font-black tracking-tight text-[#262B4F] dark:text-white transition-colors duration-300 ">
      Adarsh Sharma
    </span>
    <div className="h-[2px] w-0 bg-gradient-to-r from-blue-600 to-teal-400 transition-all duration-500 group-hover:w-full" />
  </div>
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-right space-x-8 text-sm font-medium">
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
        {/* <div className="flex items-center space-x-4">

          
          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div> */}
      </div>

      

      
      {/* {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 space-y-4 flex flex-col shadow-xl">
          {['Home','About','Project','Skills','Experience','Contact'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium text-gray-700 dark:text-gray-200">{item}</a>
          ))}
        </div>
      )} */}


    </header>
  );
};
