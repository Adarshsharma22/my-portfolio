import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from 'motion/react';


export const Hero = () => {
  return (
    <div id="hero" className="relative  backdrop-blur-2xl h-full overflow-hidden border-2 bg-black/20  border-white/20 hover:border hover:border-blue-600/50 rounded-3xl p-3 group ">
      <div className="relative flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-blue-500 z-10 mb-2 "
        >
          <Sparkles className="w-4 h-4 " />
          <span className="text-sm font-medium">Open to Opportunities</span>
        </motion.div>

        <div>
        <div className="p-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-2"
          >
            Adarsh <span className="bg-gradient-to-r from-red-500 to-blue-300 bg-clip-text text-transparent">Sharma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center mb-4 text-xl md:text-1xl font-medium text-blue-200 mb-2"
          >
           <div className="w-4 h-0.5 bg-blue-600 mr-2"></div> Full Stack Developer & AI Integrator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-white/80 max-w-lg mb-4"
          >
          <div className="flex gap-7">
            <div className="bg-blue-400 mt-2 mb-2 rounded-2xl w-3 "></div>
            I build scalable, real-world applications by combining robust full-stack 
            architecture with hands-on AI implementation to create intelligent, 
            user-focused solutions.
          </div>
          
          </motion.p>
        </div>
          
          <div className="flex gap-4">
          <motion.a
            href="#projects"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn flex cursor-pointer z-10 items-center w-44 gap-1 px-6 py-3 border border-blue-600/20 hover:border-blue-600 bg-blue-600/10 backdrop-blur-xl text-blue-700 rounded-full font-medium hover:shadow-2xl transition-shadow"
          >
            View my work
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#projects"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn flex cursor-pointer z-10 items-center w-44 gap-1 px-6 py-3 bg-white/90 hover:bg-blue-700 backdrop-blur-xl text-blue-700 hover:text-white rounded-full font-medium hover:shadow-2xl transition-shadow"
          >
            Download CV
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
          </div>
          
          <div className="absolute -right-20 -bottom-30 h-100 w-100 rounded-full bg-blue-600/20 blur-[100px] transition-opacity group-hover:opacity-80" />
          <div className="absolute -left-20 -top-30 h-100 w-100 rounded-full bg-blue-600/20 blur-[100px] transition-opacity group-hover:opacity-80" />
          {/* FireFlies */}
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className={`
                absolute rounded-full bg-cyan-400
                shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee]
                animate-firefly
              `}
              style={{
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};