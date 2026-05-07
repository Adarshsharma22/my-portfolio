import React from "react";
import { motion } from "framer-motion";

import {
  Briefcase,
  Code2,
  Rocket,
  Database,
} from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Self Employed / Personal Projects",
      period: "2024 - Present",
      icon: <Code2 size={24} />,
      description:
        "Building modern full-stack applications and continuously improving frontend, backend, and database development skills through real-world projects.",
      points: [
        "Developed responsive MERN stack applications.",
        "Built modern UI using React.js & Tailwind CSS.",
        "Created RESTful APIs with Node.js & Express.js.",
        "Worked with MongoDB and backend integration.",
        "Used Git & GitHub for version control.",
      ],
    },

    {
      role: "Frontend Development Journey",
      company: "React & UI Engineering",
      period: "2023 - Present",
      icon: <Rocket size={24} />,
      description:
        "Focused on creating smooth user experiences, responsive interfaces, animations, and modern UI design systems.",
      points: [
        "Built responsive layouts and reusable components.",
        "Implemented dark mode and smooth animations.",
        "Improved UI/UX design understanding.",
        "Optimized application performance.",
      ],
    },

    {
      role: "Backend & Database Learning",
      company: "Node.js Ecosystem",
      period: "2024 - Present",
      icon: <Database size={24} />,
      description:
        "Learning scalable backend architecture, API handling, authentication systems, and database management.",
      points: [
        "Built APIs using Express.js.",
        "Connected frontend with backend services.",
        "Worked with MongoDB & MySQL databases.",
        "Learned authentication & CRUD operations.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <span className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
            Experience & Journey
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white">
            My Learning &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
              Development Journey
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            My journey as a developer has been focused on building
            modern web applications, improving problem-solving skills,
            and continuously learning new technologies.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden md:block w-[2px] h-full bg-gradient-to-b from-blue-600 to-cyan-500 -translate-x-1/2" />

          <div className="space-y-20">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                
                {/* CARD */}
                <div className="w-full md:w-[46%]">
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-2xl"
                  >
                    
                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/5" />

                    {/* TOP */}
                    <div className="flex items-start justify-between mb-8">
                      
                      <div>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                          {item.period}
                        </span>

                        <h3 className="mt-3 text-3xl font-black text-gray-900 dark:text-white">
                          {item.role}
                        </h3>

                        <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium">
                          {item.company}
                        </p>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                        {item.icon}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* POINTS */}
                    <div className="space-y-4">
                      {item.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />

                          <p className="text-gray-700 dark:text-gray-300">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* CENTER ICON */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 items-center justify-center text-white shadow-2xl border-4 border-slate-950">
                  <Briefcase size={26} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mt-28 rounded-[40px] border border-white/10 bg-white/60 dark:bg-slate-900/70 backdrop-blur-2xl p-10 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            
            {[
              {
                number: "3+",
                label: "Projects",
              },

              {
                number: "10+",
                label: "Technologies",
              },

              {
                number: "100%",
                label: "Dedication",
              },

              {
                number: "∞",
                label: "Growth Mindset",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  {item.number}
                </h3>

                <p className="mt-3 text-gray-600 dark:text-gray-400 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};