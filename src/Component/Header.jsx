import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide Header on Scroll
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

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-2 left-0 right-0 z-50 transition-transform duration-300
      ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-8xl px-4 md:px-8">

        {/* NAVBAR */}
        <nav className="relative overflow-hidden rounded-full border border border-white/20 dark:border-white/10  bg-white/70 dark:bg-black/70 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-purple-500/10" />

          <div className="relative flex items-center justify-between px-6 py-4">

            {/* LOGO */}
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              {/* AS Logo */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-300 to-cyan-200 shadow-lg shadow-cyan-500/20">

                <span>
                  <img src="./ASlogo.png" alt="AS" className="w-12 h-12" />
                </span>

                
              </div>

              {/* Name */}
              <div className="sm:block">
                <h2 className="text-black dark:text-white font-bold text-lg leading-none">
                  Adarsh Sharma
                </h2>

                <p className="text-black/40 dark:text-white/40 text-xs mt-1">
                  Full Stack Developer
                </p>
              </div>
            </motion.a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 rounded-full text-sm font-medium text-black/70 dark:text-white/70 transition-all duration-300 hover:text-black dark:hover:text-white hover:bg-white/10 group overflow-hidden"
                >
                  <span className="relative z-10">
                    {link.name}
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 transition-transform duration-300 group-hover:scale-100" />
                </a>
              ))}
              <div className="flex items-center gap-3">

              {/* CV BUTTON */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-2 rounded-full  bg-blue-600  px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40"
              >
                <Download size={16} />
                Download CV
              </motion.a>

              {/* MOBILE MENU BUTTON */}
              
            </div>
            </div>

            {/* RIGHT SIDE */}
            <button
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                {isMobileMenuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl"
            >
              <div className="flex flex-col p-4">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-4 text-white/80 font-medium transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}

                {/* MOBILE CV BUTTON */}
                <a
                  href="./Adarsh_Sharma_CV.pdf"
                  download
                  className="mt-3 flex items-center justify-center gap-2 rounded-2xl  bg-blue-600  px-4 py-4 font-semibold text-white"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};