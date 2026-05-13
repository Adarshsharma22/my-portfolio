import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BrainCircuit } from 'lucide-react';
import { SkillsCard } from '../ComponentCard/SkillsCard';   // ← Adjust path if needed

export const Skills = () => {
  const [showSkillsCard, setShowSkillsCard] = useState(false);

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", color: "from-orange-500 to-red-500" },
        { name: "CSS3", color: "from-blue-500 to-cyan-500" },
        { name: "Tailwind", color: "from-teal-500 to-cyan-400" },
        { name: "React", color: "from-cyan-500 to-blue-600" },
        { name: "JS", color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", color: "from-green-500 to-emerald-600" },
        { name: "Express", color: "from-zinc-700 to-black" },
        { name: "REST APIs", color: "from-purple-500 to-violet-600" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", color: "from-green-600 to-emerald-700" },
        { name: "MySQL", color: "from-blue-500 to-sky-600" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", color: "from-gray-700 to-zinc-800" },
        { name: "AWS", color: "from-orange-500 to-amber-600" },
        { name: "Postman", color: "from-orange-600 to-rose-600" },
        { name: "VS Code", color: "from-blue-500 to-sky-500" },
      ]
    },
    {
      title: "AI Tools",
      skills: [
        { name: "Claude", color: "from-purple-500 to-pink-500" },
        { name: "OpenAI", color: "from-green-500 to-emerald-500" },
      ]
    },
  ];

  return (
    <>
      {/* Main Skills Card in Grid */}
      <div 
        id="skills" 
        onClick={() => setShowSkillsCard(true)}
        className="group relative h-full overflow-hidden rounded-3xl border-2 border-white/10 bg-black/20 p-3 backdrop-blur-xl transition-all duration-500 hover:border-red-500/50 hover:shadow-[0_0_40px_8px_rgba(239,68,68,0.15)] cursor-pointer"
      >
        <div className="absolute -right-20 -top-20 h-100 w-100 rounded-full bg-red-600/20 blur-[100px] transition-opacity group-hover:opacity-80" />
        
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1 border border-red-500/20">
              <BrainCircuit className="h-4 w-4 text-red-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Skills</span>
            </div>
            <motion.div whileHover={{ rotate: 45 }} className="cursor-pointer">
              <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-red-400 transition-colors" />
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
                      className={`px-3 py-1.5 text-xs font-medium rounded-2xl bg-gradient-to-r ${skill.color} 
                        text-white shadow-sm cursor-default`}
                    >
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="w-full max-w-2xl">
            <SkillsCard onClick={() => setShowSkillsCard(false)} />
          </div>
        </div>
      )}
    </>
  );
};