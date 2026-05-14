import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight, Layout } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'ExploIndia',
    description: 'A full-stack travel social networking platform that enables travelers to share journeys, explore destinations, and interact with a community of explorers. Features include trip posts, photo uploads, likes, comments, and notifications.',
    longDesc: 'Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Focused on real-world travel interactions with responsive design and scalable architecture.',
    color: 'from-[#170C79] via-[#008080] to-[#170C79]',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/adarshsharma',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'TodoList',
    description: 'A clean and modern task management application built with React and AI assistance to help users organize, track, and complete daily activities efficiently.',
    longDesc: 'Integrated with Claude AI for smart suggestions. Features include task categorization, due dates, and progress tracking.',
    color: 'from-blue-600 via-cyan-500 to-indigo-600',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Claude AI'],
    github: 'https://github.com/adarshsharma',
    live: '#',
  },
  {
    id: 3,
    title: 'My-Portfolio',
    description: 'This modern responsive portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience.',
    longDesc: 'Designed with attention to performance, smooth animations, and interactive UI components. Built using Vite for lightning-fast development.',
    color: 'from-emerald-600 via-teal-500 to-blue-600',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/adarshsharma',
    live: '#',
  },
];

export const ProjectCard = ({ onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative w-full max-w-6xl h-[85vh] overflow-hidden rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-black/90 backdrop-blur-2xl  duration-500 hover:border-blue-500/50  hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute -right-24 -top-24 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-blue-600/5 dark:bg-blue-600/10 blur-[80px] md:blur-[120px] group-hover:bg-blue-600/20 transition-all duration-700" />
      <div className="absolute -left-24 -bottom-24 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-indigo-600/5 dark:bg-indigo-600/10 blur-[60px] md:blur-[100px] group-hover:bg-indigo-600/20 transition-all duration-700" />

      {/* Header */}
      <div className="flex justify-between items-center p-8 pb-4 z-20">
        <div>
          <h2 className="text-4xl font-black text-black dark:text-white tracking-tight">Projects</h2>
          <p className=" text-neutral-600 dark:text-neutral-500 font-medium">Selected works & experiments</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-slate-400 dark:text-white/60 hover:text-white bg-black/40 dark:bg-white/10 hover:bg-black/60 p-2 rounded-full transition-all"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Grid Section */}
      <div className="flex-1 overflow-y-auto p-8 pt-4 custom-scrollbar z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors cursor-pointer"
            >
              {/* Card Image/Visual */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <motion.span className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/10">
                  {project.title[0]}
                </motion.span>
                
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 bg-white/50">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 mb-6">
                  {project.description}
                </p>
                
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-bold text-black/40 group-hover:text-black dark:text-white/40 dark:group-hover:text-white flex items-center gap-1 transition-colors">
                    VIEW DETAILS <ChevronRight size={14} />
                  </span>
                  <div className="flex gap-3">
                    <FaGithub size={18} className="text-neutral-600 hover:text-white" />
                    <ExternalLink size={18} className="text-neutral-600 hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xl p-4 md:p-12 overflow-y-auto no-scrollbar"
          >
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="max-w-4xl mx-auto bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className={`h-64 md:h-80 bg-gradient-to-br ${selectedProject.color} relative`}>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{selectedProject.title}</h2>
                <p className="text-xl text-neutral-300 leading-relaxed mb-8">{selectedProject.longDesc}</p>
                
                <div className="flex flex-wrap gap-4">
                  <a href={selectedProject.live} className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-2xl hover:bg-neutral-200 transition-colors">
                    Live Demo <ExternalLink size={20} />
                  </a>
                  <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 text-white font-bold py-4 rounded-2xl hover:bg-neutral-700 transition-colors">
                    Source Code <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};