import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export const About = () => {

  return (
    <section className="relative h-full overflow-hidden rounded-3xl p-6 bg-purple-500/50 transition-colors group">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              AS
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-foreground/70 leading-relaxed">
            A passionate Full Stack Web Developer dedicated to building scalable, real-world applications.
            I have hands-on experience with AI tools, enabling me to enhance development workflows and build
            smarter, more efficient solutions. Quick learner with strong motivation to develop user-focused
            digital solutions that make a meaningful impact.
          </p>
        </div>
        <div className="space-y-3 mt-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 text-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
              <MapPin className="w-4 h-4 text-foreground/60" />
            </div>
            <span className="text-foreground/80">Mumbai, Maharashtra</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 text-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-foreground/60" />
            </div>
            <span className="text-foreground/80">Full Stack Developer (Fresher)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 text-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-foreground/60" />
            </div>
            <span className="text-foreground/80">BSc IT, D.G. Ruparel College (2023-2026)</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};