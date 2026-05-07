import React from "react";
import { motion } from "framer-motion";

import {
  Code2,
  Database,
  BrainCircuit,
  Server,
  
  GitBranch,
} from "lucide-react";

export const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      icon: <Code2 size={28} />,
      stack: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },

    {
      title: "Backend",
      icon: <Server size={28} />,
      stack: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
      ],
    },

    {
      title: "Database",
      icon: <Database size={28} />,
      stack: [
        "MongoDB",
        "MySQL",
      ],
    },

    {
      title: "Tools",
      icon: <GitBranch size={28} />,
      stack: [
        "Git",
        "GitHub",
        "Postman",
        "Vite",
        "AWS",
      ],
    },

    {
      title: "Design",
      icon: <Server size={28} />,
      stack: [
        "Responsive UI",
        "Modern Layouts",
        "Glassmorphism",
      ],
    },

    {
      title: "AI Tools",
      icon: <BrainCircuit size={28} />,
      stack: [
        "OpenAI Codex",
        "Claude AI",
        "Antigravity",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
            Skills & Technologies
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white">
            Modern Stack For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
              Modern Products
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I build scalable and visually engaging applications using
            modern frontend technologies, backend systems, databases,
            and AI-powered development workflows.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-2xl"
            >
              
              {/* TOP GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />

              {/* ICON */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  {skill.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                {skill.title}
              </h3>

              {/* STACK */}
              <div className="flex flex-wrap gap-3">
                {skill.stack.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* CARD NUMBER */}
              <div className="absolute top-6 right-6 text-6xl font-black text-gray-100 dark:text-white/5 select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};