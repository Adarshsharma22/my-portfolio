import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BrainCircuit,Settings } from 'lucide-react';
import { SkillsCard } from '../ComponentCard/SkillsCard';   
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaAws, } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiOpenai, SiClaude, } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const Skills = () => {
  const [showSkillsCard, setShowSkillsCard] = useState(false);

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5",icon: FaHtml5, color: "bg-blue-400/20", border:"border border-blue-500" },
        { name: "CSS3",icon: FaCss3Alt, color: "bg-blue-400/20", border:"border border-blue-500" },
        { name: "Tailwind",icon: SiTailwindcss, color: "bg-blue-400/20", border:"border border-blue-500" },
        { name: "React",icon: FaReact, color: "bg-blue-400/20", border:"border border-blue-500" },
        { name: "JavaScript",icon: SiJavascript, color: "bg-blue-400/20", border:"border border-blue-500" },
        { name: "TypeScript",icon: SiTypescript, color: "bg-blue-400/20", border:"border border-blue-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js",icon: FaNodeJs, color: "bg-red-400/20", border:"border border-red-500" },
        { name: "Express",icon: SiExpress, color: "bg-red-400/20", border:"border border-red-500" },
        { name: "REST APIs",icon: Settings, color: "bg-red-400/20", border:"border border-red-500" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB",icon: SiMongodb, color: "bg-green-400/20", border:"border border-green-500" },
        { name: "MySQL",icon: SiMysql, color: "bg-green-400/20", border:"border border-green-500" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub",icon: FaGithub, color: "bg-yellow-400/20", border:"border border-yellow-500" },
        { name: "AWS",icon: FaAws, color: "bg-yellow-400/20", border:"border border-yellow-500" },
        { name: "Postman",icon: SiPostman, color: "bg-yellow-400/20", border:"border border-yellow-500" },
        { name: "VS Code",icon: VscVscode, color: "bg-yellow-400/20", border:"border border-yellow-500" },
      ]
    },
    {
      title: "AI Tools",
      skills: [
        { name: "Claude",icon: SiClaude, color: "bg-black/20", border:"border border-white" },
        { name: "OpenAI",icon: SiOpenai, color: "bg-black/20", border:"border border-white"  },
      ]
    },
  ];

  return (
    <>
      {/* Main Skills Card in Grid */}
      <div 
        id="skills" 
        onClick={() => setShowSkillsCard(true)}
        className="group relative h-full overflow-hidden rounded-3xl border-2 border-white/10 bg-white/90 dark:bg-black p-3 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.1)] cursor-pointer"
      >
        <div className="absolute -right-20 -top-20 h-100 w-100 rounded-full bg-blue-600/20 blur-[100px] transition-opacity group-hover:opacity-80" />
        
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 border border-blue-500/20">
              <BrainCircuit className="h-4 w-4 text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Skills</span>
            </div>
            <motion.div whileHover={{ rotate: 45 }} className="cursor-pointer">
              <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </div>

          <div className="space-y-3">
            {skillsData.map((section) => (
              <div key={section.title}>
                <p className="text-xs uppercase tracking-widest text-slate-800 dark:text-white/80 mb-2 font-medium">
                  {section.title}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.02 * i }}
                      whileHover={{ scale: 1.1, y: -1 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-2xl bg-gradient-to-r ${skill.color} backdrop-blur-xl  ${skill.border}
                        text-black dark:text-white shadow-sm cursor-default`}
                    >
                      <skill.icon className="inline-block w-3.5 h-3.5 mr-1" />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - SkillsCard */}
      {showSkillsCard && (
        <div 
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setShowSkillsCard(false)}   // Click outside to close
        >
          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <SkillsCard onClose={() => setShowSkillsCard(false)} />
          </div>
        </div>
      )}
    </>
  );
};