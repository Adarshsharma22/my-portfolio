import React from 'react'
import { motion } from 'motion/react';

export const Skills = () => {
  const frontend = [
    { name: 'HTML5', color: 'from-cyan-500 to-blue-500' },
    { name: 'CSS3', color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', color: 'from-teal-500 to-cyan-500' },
    { name: 'React.js', color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', color: 'from-blue-600 to-indigo-600' },
  ];
  const backend = [
    { name: 'Python', color: 'from-yellow-500 to-orange-500' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
    { name: 'Express.js', color: 'from-gray-700 to-gray-900' },
    { name: 'MongoDB', color: 'from-green-600 to-emerald-700' },
    { name: 'MySQL', color: 'from-blue-500 to-sky-600' },
    { name: 'RESTful APIs', color: 'from-purple-500 to-violet-600' },
    { name: 'Git/GitHub', color: 'from-gray-800 to-gray-600' },
    { name: 'AWS', color: 'from-orange-600 to-amber-600' },
    { name: 'Claude AI', color: 'from-pink-500 to-rose-500' },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-background border border-border p-6 hover:border-purple-500/50 transition-colors">
      <h2 className="text-2xl font-bold mb-6">Skills & Tech</h2>

      <div className="flex flex-wrap gap-2">
        {frontend.map((front, index) => (
          <motion.div
            key={front.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ scale: 1.1, y: -4 }}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${front.color} text-white font-medium text-sm cursor-default shadow-lg`}
          >
            {front.name}
          </motion.div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-6">Skills & Tech</h2>

      <div className="flex flex-wrap gap-2">
        {backend.map((back, index) => (
          <motion.div
            key={back.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * index }}
            whileHover={{ scale: 1.1, y: -4 }}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${back.color} text-white font-medium text-sm cursor-default shadow-lg`}
          >
            {back.name}
          </motion.div>
        ))}
      </div>


      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-500/20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  )
}
