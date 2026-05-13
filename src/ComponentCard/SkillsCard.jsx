import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Note: motion/react is the new import, but framer-motion is standard
import { X, Zap } from 'lucide-react';

import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaAws,
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiExpress,
  SiMongodb, SiMysql, SiPostman, SiOpenai, SiClaude,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = {
  Frontend: [
    { name: "HTML5", percent: 95, icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", percent: 90, icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", percent: 88, icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", percent: 75, icon: SiTypescript, color: "text-blue-400" },
    { name: "React", percent: 92, icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", percent: 94, icon: SiTailwindcss, color: "text-sky-400" },
  ],
  Backend: [
    { name: "Node.js", percent: 85, icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", percent: 82, icon: SiExpress, color: "text-slate-200" },
    { name: "MongoDB", percent: 80, icon: SiMongodb, color: "text-green-400" },
    { name: "MySQL", percent: 78, icon: SiMysql, color: "text-blue-500" },
  ],
  "Other Tools": [
    { name: "Git", percent: 88, icon: FaGitAlt, color: "text-orange-500" },
    { name: "AWS", percent: 70, icon: FaAws, color: "text-yellow-500" },
    { name: "Postman", percent: 90, icon: SiPostman, color: "text-orange-400" },
    { name: "VS Code", percent: 95, icon: VscVscode, color: "text-blue-400" },
    { name: "OpenAI", percent: 85, icon: SiOpenai, color: "text-emerald-400" },
    { name: "Claude AI", percent: 80, icon: SiClaude, color: "text-purple-400" },
  ],
};

export const SkillsCard = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[2.5rem] border-2 border-blue-500/30 bg-white/80 dark:bg-black/90 backdrop-blur-3xl p-1 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Decorative Blue Glow Blobs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full" />

      <div className="relative z-10 p-6 md:p-10">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-12 bg-blue-500 rounded-full" />
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Capabilities</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Skills</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/60 hover:bg-red-500/10 hover:text-red-500 transition-all duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex p-1.5 gap-1 mb-10 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 max-w-fit">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/40"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid/List Area */}
        <div className="max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="wait">
            {skills[activeTab].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative p-5 rounded-3xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/[0.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-white dark:bg-black border border-slate-100 dark:border-white/10 shadow-sm group-hover:shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-end">
                        <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-sm font-black text-blue-500">{skill.percent}%</span>
                      </div>
                      
                      {/* Progress Track */}
                      <div className="mt-3 h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percent}%` }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Footer info */}
        <div className="mt-8 flex items-center gap-2 text-slate-400 dark:text-white/30 text-[10px] uppercase tracking-widest font-medium">
          <Zap size={12} className="text-blue-500" />
          <span>Continuous Learning & Improvement</span>
        </div>
      </div>
    </motion.div>
  );
};