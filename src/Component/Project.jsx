import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    title: 'ExploIndia',
    description: 'Full-stack travel social networking platform for travelers to share journeys, explore destinations, and interact with community',
    color: 'from-violet-600 to-purple-600',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://github.com/adarshsharma',
  },
  {
    title: 'TodoList',
    description: 'Modern task management app built with React and AI tools to help manage daily tasks efficiently',
    color: 'from-blue-600 to-cyan-600',
    tags: ['React', 'Tailwind', 'Claude AI', 'Vite'],
    link: 'https://github.com/adarshsharma',
  },
  {
    title: 'My-Portfolio',
    description: 'High-performance responsive portfolio website with interactive UI to showcase projects and skills',
    color: 'from-emerald-600 to-teal-600',
    tags: ['React', 'Tailwind', 'Vite', 'Git'],
    link: 'https://github.com/adarshsharma',
  },
];

export const MyProject = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideProject = useCallback((newIndex) => {
    setDirection(newIndex > activeProject ? 1 : -1);
    setActiveProject(newIndex);
  }, [activeProject]);

  const nextProject = useCallback(() => {
    const next = (activeProject + 1) % projects.length;
    slideProject(next);
  }, [activeProject, slideProject]);

  const prevProject = useCallback(() => {
    const prev = (activeProject - 1 + projects.length) % projects.length;
    slideProject(prev);
  }, [activeProject, slideProject]);

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, [nextProject]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-background border border-border p-6 hover:border-purple-500/50 transition-colors">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Featured Work</h2>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Project {activeProject + 1} of {projects.length}</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={prevProject}
            className="p-2 rounded-full hover:bg-muted transition-colors border border-border"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={nextProject}
            className="p-2 rounded-full hover:bg-muted transition-colors border border-border"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative h-full overflow-hidden cursor-grab active:cursor-grabbing">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeProject}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50;
              if (swipe && offset.x > 0) prevProject();
              else if (swipe && offset.x < 0) nextProject();
            }}
            className="absolute inset-0 w-full"
          >
            <div className="h-full flex flex-col">
              {/* Visual Preview */}
              <div className={`w-full h-70 rounded-2xl bg-gradient-to-br ${projects[activeProject].color} mb-6 flex items-center justify-center relative overflow-hidden shadow-lg`}>
                <div className="text-white/20 text-8xl font-black select-none">
                  {projects[activeProject].title.charAt(0)}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-all duration-300">
                   <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 hover:opacity-100 transform translate-y-2 hover:translate-y-0 transition-all">
                      <span className="text-white text-sm font-medium">View Project</span>
                   </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-md bg-secondary text-[10px] font-bold uppercase tracking-wider text-secondary-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-background/50 backdrop-blur-sm pt-4 border-t border-border">
        <div className="flex gap-4">
          <a href={projects[activeProject].link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Code
          </a>
          <a href={projects[activeProject].link} target="_blank" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-1.5">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => slideProject(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeProject === index ? 'bg-primary w-8' : 'bg-muted w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}