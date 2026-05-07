import React from "react";
import { ArrowRight, Download } from "lucide-react";


export const Hero = () => {
  return (
    <section className="relative min-h-screen p-20 flex items-center justify-center overflow-hidden transition-colors duration-500 px-6">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        
        <div className="relative z-10 space-y-8 animate-fade-in-up max-w-2xl">
          
          <div className="space-y-4">
            <h1 className="font-['Dancing_Script',_cursive] capitalize text-lg md:text-xl font-medium tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
              👋 Hello, I'M
            </h1>
            
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Adarsh <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-900 to-blue-500">Sharma</span>
            </h2>

            <h3 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack <span className="relative inline-block">
                <span className="relative z-10">Web Developer</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900/40 -z-10"></span>
              </span>
            </h3>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg border-l-4 border-blue-600 pl-6 py-2">
            I build modern, responsive, and user-friendly web applications using 
            <span className="font-semibold text-gray-900 dark:text-white"> React, Tailwind CSS</span>, and backend technologies. 
            Passionate about creating clean UI and smooth user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap md:gap-5 gap-3 pt-4">
            <button className="group md:px-8 px-4 md:py-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 font-bold">
              View Projects 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="md:px-8 px-4 md:py-4 py-3 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-2xl hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 font-bold flex items-center">
              Download CV <Download size={18} className="ml-2" />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Modern Image Frame */}
          <div className="relative z-10 w-[320px] md:w-[450px] aspect-square rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
            <img
              src="/hero-image.png" 
              alt="Adarsh's Portfolio"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
          {/* Abstract Shape Behind Image[cite: 1] */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600/20 rounded-3xl -z-10 rotate-3" />
          <div className="absolute -top-6 -left-6 w-full h-full bg-purple-600/10 rounded-3xl -z-10 -rotate-3" />
        </div>

      </div>
    </section>
  );
};