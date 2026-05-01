import React from "react";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FBF0DF] dark:bg-[#262B4F] overflow-hidden transition-colors duration-500 px-6">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 animate-fade-in-up">
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white tracking-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
             <br></br> Adarsh
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200">
            Full Stack <span className="text-blue-600 dark:text-blue-400">Web Developer</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I build modern, responsive, and user-friendly web applications using 
            React, Tailwind CSS, and backend technologies. Passionate about creating 
            clean UI and smooth user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all transform hover:-translate-y-1 active:scale-95 font-bold">
              View Projects <ArrowRight size={20} />
            </button>

            <button className="px-8 py-4 bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-md text-gray-800 dark:text-white rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all transform hover:-translate-y-1 font-bold">
              Download CV <Download size={18} className="ml-2 inline" />
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