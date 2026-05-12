import React from "react";
import { motion } from "motion/react";
import { MapPin, Briefcase, GraduationCap, Sparkles, ArrowUpRight } from 'lucide-react';

export const About = () => {

  return (
    <section id="about" className="group relative h-full overflow-hidden rounded-3xl border-2 border-white/10 bg-black/20 p-3 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.1)]">
      
      {/* Decorative Glow Background */}
      <div className="absolute -right-20 -top-20 h-100 w-100 rounded-full bg-blue-600/20 blur-[100px] transition-opacity group-hover:opacity-80" />
      
      <div className="relative z-10 flex h-full flex-col">
        {/* Header with Icon */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 border border-blue-500/20">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Bio</span>
          </div>
          <motion.div whileHover={{ rotate: 45 }} className="cursor-pointer">
             <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-blue-400 transition-colors" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="mb-3">
          <h2 className="mb-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white ">
            About <span className="text-blue-500 text-shadow-glow">Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-white/80">
            A passionate <span className="text-black dark:text-white font-medium">Full Stack Web Developer</span> dedicated to building scalable, real-world applications.
          </p>
          <span className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-white/50 transition-colors">
            I leverage <span className="text-blue-600">AI-driven workflows</span> to build smarter, more efficient solutions. Quick learner with a focus on high-impact digital products.
          </span>
        </div>

        {/* Info Grid/List */}
        <div className="mt-auto grid gap-3">
          {[
            { icon: MapPin, text: "Mumbai, Maharashtra", delay: 0.1 },
            { icon: Briefcase, text: "Full Stack Developer (Fresher)", delay: 0.2 },
            { icon: GraduationCap, text: "BSc IT • D.G. Ruparel College", subtext: "2023 — 2026", delay: 0.3 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="flex items-center gap-3 "
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 shadow-inner">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-800 dark:text-white/90">{item.text}</span>
                {item.subtext && <span className="text-[10px] text-slate-700 dark:text-white/40 uppercase tracking-wider">{item.subtext}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};