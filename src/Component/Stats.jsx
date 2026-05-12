import React from 'react'
import { motion } from 'motion/react';
import { Award, Code, Coffee, Users } from 'lucide-react';

export const Stats = () => {
    const stats = [
    { icon: Code, value: '3+', label: 'Projects' },
    { icon: Award, value: 'MERN', label: 'Stack' },
    { icon: Coffee, value: '100+', label: 'Commits' },
    { icon: Users, value: 'Agile', label: 'Mindset' },
  ];
  return (
    <div id="stats" className="relative h-full overflow-hidden rounded-3xl bg-linear-to-b from-[#4fff75] to-black/20 border-2 border-white/20 hover:border hover:border-green-600  backdrop-blur-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full  ">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
            className="flex flex-col items-center justify-center text-center text-slate-800 dark:text-white"
          >
            <stat.icon className="w-6 h-6 mb-2 opacity-80" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + 0.1 * index }}
              className="text-2xl font-bold"
            >
              {stat.value}
            </motion.div>
            <div className="text-sm opacity-80">{stat.label}</div>
          </motion.div>
            ))}
        </div>
    </div>
  )
}
