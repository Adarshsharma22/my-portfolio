import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
  return (
    <div className="h-full w-full rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white/90">Featured Work</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            <p className="text-[10px] text-white/40 uppercase tracking-widest">
              {projects.length} Total Projects
            </p>
          </div>
        </div>
      </div>

      {/* Projects Flex Container */}
      <div className="flex flex-wrap gap-4 justify-start overflow-y-auto pr-2 no-scrollbar custom-scrollbar">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-1 min-w-[280px] group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {/* Visual Header */}
            <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br ${project.color} mb-4 flex items-center justify-center overflow-hidden`}>
              <span className="text-white/20 text-6xl font-black select-none group-hover:scale-110 transition-transform duration-500">
                {project.title.charAt(0)}
              </span>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Project Details */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-xs text-white/60 line-clamp-3 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] font-medium text-white/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links - Pushed to bottom */}
              <div className="mt-auto pt-4 border-t border-white/5 flex gap-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 hover:text-white transition-colors"
                >
                  {/* <Github className="w-3.5 h-3.5" />  */}GITHUB
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> LIVE
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};