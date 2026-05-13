import React, { useState } from "react";
import { motion } from "motion/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVisualstudiocode,
  SiOpenai,
  SiClaude,
} from "react-icons/si";

const skills = {
  Frontend: [
    {
      name: "HTML5",
      percent: 95,
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      percent: 90,
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      percent: 88,
      icon: SiJavascript,
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      percent: 75,
      icon: SiTypescript,
      color: "text-blue-400",
    },
    {
      name: "React",
      percent: 92,
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      percent: 94,
      icon: SiTailwindcss,
      color: "text-sky-400",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      percent: 85,
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      percent: 82,
      icon: SiExpress,
      color: "text-white",
    },
    {
      name: "MongoDB",
      percent: 80,
      icon: SiMongodb,
      color: "text-green-400",
    },
    {
      name: "MySQL",
      percent: 78,
      icon: SiMysql,
      color: "text-blue-500",
    },
  ],

  "Other Tools": [
    {
      name: "Git",
      percent: 88,
      icon: FaGitAlt,
      color: "text-orange-500",
    },
    {
      name: "AWS",
      percent: 70,
      icon: FaAws,
      color: "text-yellow-500",
    },
    {
      name: "Postman",
      percent: 90,
      icon: SiPostman,
      color: "text-orange-400",
    },
    {
      name: "VS Code",
      percent: 95,
      icon: SiVisualstudiocode,
      color: "text-blue-400",
    },
    {
      name: "OpenAI",
      percent: 85,
      icon: SiOpenai,
      color: "text-green-400",
    },
    {
      name: "Claude AI",
      percent: 80,
      icon: SiClaude,
      color: "text-purple-400",
    },
  ],
};

export const SkillsCard = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl p-6">

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              My Skills
            </h2>

            <p className="text-white/50 text-sm mt-1">
              Technologies & tools I work with
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeTab === tab
                    ? "bg-blue-500 text-white border-blue-400"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="space-y-5">
          {skills[activeTab].map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-3">

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center border border-white/10">
                      <Icon className={`text-2xl ${skill.color}`} />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold">
                        {skill.name}
                      </h3>

                      <p className="text-white/40 text-xs">
                        Professional Skill
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-bold text-blue-400">
                    {skill.percent}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percent}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};