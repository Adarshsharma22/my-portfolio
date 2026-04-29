import React from 'react'
import { useTheme } from '../Context/ThemeContext'

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className=" bg-[#EFE3CA] dark:bg-[#262B4F] ">
      <div>
        LOGO
      </div>
      <nav>
        <a href='#Hero' className='text-black dark:text-white'>Home</a> 
        <a href='#About'>About</a> 
        <a href='#Project'>Project</a> 
        <a href='#Skills'>Skills</a> 
        <a href='#Experience'>Experience</a> 
        <a href='#Contact'>Contact</a> 
      </nav>
      <div>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  )
}
