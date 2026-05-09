import React from 'react'
import { motion } from 'motion/react';
import { Mail, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export const FloatingDock = ({ onThemeToggle, currentTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleThemeToggle = () => {
    onThemeToggle();
  };

  const GithubIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2.2c-3.25.71-3.93-1.39-3.93-1.39-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.72 1.27 3.39.97.1-.76.41-1.28.74-1.57-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.62.23 2.82.11 3.12.75.82 1.2 1.87 1.2 3.15 0 4.49-2.75 5.47-5.37 5.76.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 "
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.16h.05c.53-1 1.84-2.16 3.79-2.16 4.05 0 4.8 2.66 4.8 6.12V24h-4v-7.1c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
    </svg>
  );

  const XIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L5.9 22H2.8l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm10.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );

  const dockItems = [
    {icon: GithubIcon, href: 'https://github.com/Adarshsharma22',},
    {icon: LinkedinIcon, href: 'https://www.linkedin.com/in/adarsh-sharma-03974430a',},
    {icon: XIcon, href: 'https://twitter.com',},
    {icon: InstagramIcon, href: 'https://www.instagram.com/adarsh.sharma.22?igsh=MWJlZHlob2UyZWlybg==',},
    {icon: Mail, href: 'mailto:adarshsharma6222@gmail.com',},
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-black/60 bg-background/60 backdrop-blur-2xl border border-border shadow-2xl">
        
        {dockItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            whileHover={{ y: -8 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 17,
            }}
          >
            <div className="w-12 h-12 rounded-full text-white bg-white/30 hover:bg-accent flex items-center justify-center transition-colors">
              <item.icon className="w-5 h-5" />
            </div>
          </motion.a>
        ))}

        <div className="w-px h-8 bg-border mx-2" />

        <motion.button
            onClick={handleThemeToggle}
            whileHover={{ y: -8 }}
            transition={{
            type: 'spring',
            stiffness: 400,
            damping: 17,
            }}
            className="w-12 h-12 rounded-full text-white bg-white/30 hover:bg-accent flex items-center justify-center transition-colors"
        >
            {currentTheme === 'dark' ? (
            <Sun className="w-5 h-5" />
            ) : (
            <Moon className="w-5 h-5" />
            )}
        </motion.button>
      </div>
    </motion.div>
  );
}
