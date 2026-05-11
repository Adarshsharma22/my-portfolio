import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from 'motion/react';


export const Hero = () => {
  return (
    <div className="relative bg-linear-to-b from-[#2626ff] to-black/20   backdrop-blur-2xl h-full overflow-hidden border-2 border-slate-500 hover:border hover:border-blue-600 rounded-3xl p-5 group ">
      <div className="relative flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-white/80 mb-2 "
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Open to Opportunities</span>
        </motion.div>

        <div>
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
            className="text-xl md:text-1xl font-medium text-blue-200 mb-2"
          >
            Full Stack Developer & AI Integrator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-white/80 max-w-lg mb-4"
          >
          <div className="flex gap-7">
            <div className="bg-blue-100 mt-2 mb-2 rounded-2xl w-3 "></div>
            I build scalable, real-world applications by combining robust full-stack 
            architecture with hands-on AI implementation to create intelligent, 
            user-focused solutions.
          </div>
          
          </motion.p>

          <motion.a
            href="https://github.com/adarshsharma22"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn flex items-center w-44 gap-1 px-6 py-3 bg-white text-purple-700 rounded-full font-medium hover:shadow-2xl transition-shadow"
          >
            View my work
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};