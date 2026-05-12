import React from 'react'
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export const Experience = () => {
  const timeline = [
    {
      year: '2026',
      title: 'Full Stack Web Developer',
      company: 'Building Projects',
      current: true,
    },
    {
      year: '2025',
      title: 'Started Web Dev',
      company: 'Self-Learning Journey',
      current: true,
    },
    {
      year: '2023',
      title: 'BSc IT Student',
      company: 'D.G. Ruparel College',
      current: false,
    },
  ];
  return (
    <div id="experience" className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-6">
      <div className="flex items-center gap-2 text-white mb-6">
        <Calendar className="w-5 h-5" />
        <h2 className="text-xl font-bold">Journey</h2>
      </div>

      <div className="relative space-y-6">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/30" />

        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="relative pl-10"
          >
            {/* Dot */}
            <div
              className={`absolute left-2.5 top-1 w-3 h-3 rounded-full ${
                item.current ? 'bg-white ring-4 ring-white/30' : 'bg-white/50'
              }`}
            />

            <div className="text-white/80 text-sm mb-1">{item.year}</div>
            <div className="text-white font-semibold">{item.title}</div>
            <div className="text-white/70 text-sm">{item.company}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
