import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles, ArrowRight } from "lucide-react";

export const Project = () => {
  const projects = [
    {
      title: "ExploIndia",
      category: "Featured Project",
      image: "/projects/exploindia.png",
      description:
        "A premium social network for explorers. Seamlessly share journeys, discover hidden gems through community-driven insights, and connect with a global network of travelers.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
      gitHub: "#",
      live: "#",
      featured: true,
    },
    {
      title: "TaskFlow",
      category: "Productivity",
      image: "/projects/todolist.png",
      description: "A high-performance task management engine focused on flow-state and minimalist user experience.",
      tech: ["React", "Tailwind", "Vite"],
      gitHub: "#",
      live: "#",
    },
    {
      title: "Digital Canvas",
      category: "Portfolio",
      image: "/projects/portfolio.png",
      description: "A high-end interactive portfolio featuring custom shaders, fluid animations, and glassmorphism.",
      tech: ["React", "Framer Motion", "Tailwind"],
      gitHub: "#",
      live: "#",
    },
  ];

  return (
    <section id="project" className="relative py-32 px-6  overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-12 bg-blue-500"></div>
            <span className="text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em] text-xl font-bold">
              Projects
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Works.</span>
          </h2>
        </motion.div>

        {/* FEATURED PROJECT - The Hero Card */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative mb-32"
          >
            <div className="relative grid lg:grid-cols-12 gap-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-white/5 rounded-[48px] overflow-hidden shadow-2xl">
              {/* Image Side */}
              <div className="lg:col-span-7 overflow-hidden relative aspect-video lg:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20 z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                   <Sparkles className="text-amber-400 w-4 h-4" />
                   <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">{project.category}</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-4 py-1.5 rounded-full bg-slate-200/50 dark:bg-white/5 dark:text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.live} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25">
                    View Project <ArrowRight size={18} />
                  </a>
                  <a href={project.gitHub} className="p-4 rounded-2xl border border-slate-300 dark:border-white/10 dark:text-white hover:bg-white/10 transition-all">
                    <Code2 size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group p-1 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 dark:to-transparent rounded-[40px]"
            >
              <div className="h-full bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-xl rounded-[38px] p-8 border border-white/20 dark:border-white/5 shadow-xl">
                <div className="relative h-64 rounded-[24px] overflow-hidden mb-8">
                  <img src={project.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <a href={project.live} className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                     <a href={project.gitHub} className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"><Code2 size={20} /></a>
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-500 tracking-[0.2em] uppercase mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold tracking-tighter px-3 py-1 rounded-md bg-slate-100 dark:bg-white/5 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};