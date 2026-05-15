import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Sparkles, Download, X } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

export const AboutCard = ({ onClick }) => {

  const techStack = [
    { name: "React", icon: FaReact },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "AWS", icon: FaAws },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
  ];

  return (
    <motion.div
      id="aboutcard"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={onClick}
      className="relative group border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/90 backdrop-blur-2xl rounded-[2.5rem] cursor-pointer transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] w-full max-w-7xl mx-auto max-h-[92vh] overflow-y-auto no-scrollbar"
    >
      {/* Close Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        className="absolute top-6 right-6 z-50 text-slate-400 dark:text-white/60 hover:text-white bg-black/40 dark:bg-white/10 hover:bg-black/60 p-2 rounded-full transition-all"
      >
        <X size={28} strokeWidth={2.5} />
      </button>

      {/* Background Glows */}
      <div className="absolute -right-24 -top-24 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-blue-600/5 dark:bg-blue-600/10 blur-[80px] md:blur-[120px] group-hover:bg-blue-600/20 transition-all duration-700" />
      <div className="absolute -left-24 -bottom-24 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-indigo-600/5 dark:bg-indigo-600/10 blur-[60px] md:blur-[100px] group-hover:bg-indigo-600/20 transition-all duration-700" />

      <div 
        className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 pb-20 p-6 md:p-12 min-h-auto lg:min-h-[600px] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Left Section: Information */}
        <div className="flex-1 text-left w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 md:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Professional Profile</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-2">
            Adarsh <span className="text-blue-600 dark:text-blue-500">Sharma</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-700 dark:text-blue-400/90 font-medium mb-4 md:mb-6">Full Stack Web Developer & AI Integrator</p>

          <p className="mb-6 md:mb-8 text-sm md:text-[16px] leading-relaxed text-slate-600 dark:text-white/70 max-w-2xl">
            I am a passionate <span className="text-slate-900 dark:text-white font-semibold">Full Stack Web Developer</span> dedicated to building scalable, real-world applications.
            I leverage <span className="text-blue-600 dark:text-blue-400 font-medium">AI tools</span> to enhance development workflows and create smarter, more efficient solutions.
            A quick learner with strong problem-solving skills, I strive to deliver high-impact digital products.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
            {[
              { icon: MapPin, text: "Mumbai, Maharashtra" },
              { icon: Briefcase, text: "Full Stack Developer (Fresher)" },
              { icon: GraduationCap, text: "BSc IT • D.G. Ruparel", sub: "2023–2026" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-white/90">{item.text}</p>
                  {item.sub && <p className="text-[9px] md:text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-widest">{item.sub}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-white/30 font-bold">Tech Stack Expertise</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.02 * i }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 text-xs font-medium rounded-2xl bg-blue-400/30 border border-blue-500 text-white shadow-sm flex items-center gap-2 hover:border-blue-600 transition-all"
                >
                  <skill.icon className="w-4 h-4" />
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Visuals */}
        <div className="flex flex-col items-center gap-6 md:gap-8 shrink-0 w-full lg:w-auto">
          <div className="relative group/photo">
            <div className="absolute -inset-4 rounded-[3rem] border-2 border-dashed border-blue-600/70 dark:border-blue-500/20 animate-[spin_20s_linear_infinite] group-hover/photo:border-blue-700 dark:group-hover/photo:border-blue-500/50 transition-colors hidden md:block" />
            
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72">
              <img
                src="./MyProfile.png" 
                alt="Adarsh Sharma"
                className="h-full w-full rounded-[2rem] md:rounded-[2.5rem] object-cover grayscale-[20%] group-hover/photo:grayscale-0 transition-all duration-500 border-2 border-slate-200 dark:border-white/10 shadow-2xl"
              />
            </div>
          </div>

          <motion.a
            href="/Adarsh_Sharma_CV.pdf" 
            download="Adarsh_Sharma_CV.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="md:w-full md:w-auto group/cv flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl md:rounded-2xl transition-all shadow-xl hover:shadow-blue-500/20"
          >
            <Download className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover/cv:translate-y-1" />
            <span className="text-sm md:text-base">Download CV</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};