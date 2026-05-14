import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight  } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { ProjectCard } from '../ComponentCard/ProjectCard';

const projects = [
  {
    title: 'ExploIndia',
    description: 'A full-stack social networking platform for travelers to share journeys and explore destinations.',
    color: 'from-[#170C79] via-[#008080] to-[#170C79]',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/adarshsharma',
  },
  {
    title: 'TodoList',
    description: 'Modern task management app built with React and AI tools to help manage daily tasks efficiently.',
    color: 'from-blue-600 via-cyan-500 to-indigo-600',
    tags: ['React', 'Tailwind', 'Claude AI', 'Vite'],
    link: 'https://github.com/adarshsharma',
  },
  {
    title: 'My-Portfolio',
    description: 'High-performance responsive portfolio website with interactive UI to showcase projects and skills.',
    color: 'from-emerald-600 via-teal-500 to-blue-600',
    tags: ['React', 'Tailwind', 'Vite', 'Git'],
    link: 'https://github.com/adarshsharma',
  },
];

export const MyProject = () => {
  const [showProjectCard, setShowProjectCard] = useState(false);

  return (
    <>
    <div id="projects" onClick={() => setShowProjectCard(true)} className="h-full w-full rounded-3xl bg-white/80 dark:bg-black/20  backdrop-blur-md border-2 border-white/10 hover:border-blue-500/50 p-3 flex flex-col transition-colors duration-500">

      {/* Header */}
      <div className="relative z-10 flex h-full flex-col">
        <div className='mb-5 flex items-center justify-between'>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white/90">Featured Work</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            <p className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-widest">
              {projects.length} Total Projects
            </p>
          </div>
          </div>
          <motion.div whileHover={{ rotate: 45 }} className="cursor-pointer">
             <ArrowUpRight className="h-5 w-5 text-white/30 hover:text-blue-400 transition-colors" />
          </motion.div>
      </div> 
      {/* Projects Flex Container */}
      <div className="flex flex-wrap gap-4 justify-start overflow-y-auto no-scrollbar">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-1 min-w-[280px] group relative flex flex-col bg-white dark:bg-white/5 border border-black/20 dark:border-white/10 rounded-2xl p-4 hover:shadow-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            {/* Visual Header */}
            <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center overflow-hidden`}>
              <span className="text-white/30 dark:text-white/20 text-6xl font-black select-none group-hover:scale-110 transition-transform duration-500">
                {project.title.charAt(0)}
              </span>
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Project Details */}
            <div className="flex flex-col  flex-grow">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-xs text-slate-600 dark:text-white/60 line-clamp-3 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[9px] font-medium text-slate-500 dark:text-white/70 border border-slate-200 dark:border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 dark:text-white/40 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" /> GITHUB
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 dark:text-white/40 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> LIVE
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>  
    </div>
    {showProjectCard && (
      <div 
        className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        onClick={() => setShowProjectCard(false)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <ProjectCard onClose={() => setShowProjectCard(false)} />
        </div>
      </div>
    )}
    </>
  );
};