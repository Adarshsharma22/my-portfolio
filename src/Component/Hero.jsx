import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from 'motion/react';


export const Hero = () => {
  return (
    <div className="relative bg-orange-400 h-full overflow-hidden rounded-3xl p-19 group ">
      <div className="relative z-10 h-full flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-white/80 mb-4"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Open to Opportunities</span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Adarsh
            <br />
            Sharma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-lg mb-6"
          >
            Full Stack Web Developer building scalable, real-world applications with
            hands-on AI experience to create efficient, user-focused solutions
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