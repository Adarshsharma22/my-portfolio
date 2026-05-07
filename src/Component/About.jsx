import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket, Globe, ArrowRight, Download } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Full Stack Development",
      desc: "Building scalable MERN stack applications with modern UI.",
      color: "blue"
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "AI Tools Experience",
      desc: "Using OpenAI Codex & Claude AI to improve workflows.",
      color: "cyan"
    },
    {
      icon: <Rocket size={24} />,
      title: "Performance Focused",
      desc: "Creating responsive and optimized web applications.",
      color: "indigo"
    },
    {
      icon: <Globe size={24} />,
      title: "Real World Projects",
      desc: "Developing practical projects that solve real problems.",
      color: "teal"
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden ">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* --- LEFT SIDE: IMAGE & VISUALS --- */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              {/* Main Image Container */}
              <div className="relative w-[300px] sm:w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                <img
                  src="./my-profile.jpeg" // Replace with your actual image path
                  alt="Adarsh Sharma"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" /> */}
              </div>

              {/* Floating Experience Card */}
              <motion.div 
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="absolute -bottom-6 -right-6 md:-right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-10xl p-2 rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-500/30">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">1+ Year</h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                      Learning & Building
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wider uppercase">
                About Me
              </span>

              {/* <h4 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                Building Modern Digital<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">
                  Experiences by AI
                </span>
              </h4> */}

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                I’m a <span className="text-slate-900 dark:text-white font-medium">Full Stack Web Developer</span> who enjoys turning ideas into real, interactive web experiences. I love building modern, fast, and user-friendly applications while exploring how <span className="text-slate-900 dark:text-white font-medium">Generative AI</span> can make technology smarter and more creative.<br /> My focus extends beyond writing code to developing seamless, impactful, and user-centric digital experiences that combine functionality, performance, and intuitive design.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                  <div className="relative z-10">
                    <div className="mb-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 active:scale-95">
                Let's Talk <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};