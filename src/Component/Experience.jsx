import React from 'react';
import { motion } from 'framer-motion'; 
import { Calendar, Briefcase, GraduationCap, CircleDot } from 'lucide-react';

const timeline = [
  {
    year: '2026',
    title: 'Full Stack Web Developer',
    company: 'Portfolio Projects',
    type: 'work',
    current: true,
    description: [
      'Architecting scalable MERN stack applications with real-time features.',
      'Implementing advanced UI/UX using Framer Motion and Tailwind CSS.',
      'Optimizing backend performance and database indexing.'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Framer Motion', 'Tailwind CSS']
  },
  {
    year: '2025',
    title: 'Self-Learning Journey',
    company: 'Open Source & Courses',
    type: 'work',
    current: false,
    description: [
      'Learning core JavaScript (ES6+) and React.',
      'Learning modern CSS techniques and responsive design with Tailwind CSS.',
      'Learning backend development with Node.js and Express.'
    ],
    tags: ['JavaScript', 'Tailwind','React', 'Node.js', 'Express']
  },
  {
    year: '2023',
    title: 'BSc IT Student',
    company: 'D.G. Ruparel College',
    type: 'education',
    current: false,
    description: [
      'Participated in college tech-fests and served as HOD for fest management and coordination.',
      'Maintained a strong academic record in core IT subjects.'
    ],
    tags: ['C++', 'SQL', 'Networking', 'Python']
  },
];

export const Experience = () => {
  return (
    <div id="experience" className="relative h-full overflow-hidden rounded-4xl border border-border bg-purple-600/60 backdrop-blur-3xl p-8 shadow-2xl flex flex-col">
      
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-3xl rounded-full pointer-events-none" />
      
      
      <div className="flex items-center justify-between mb-8 shrink-0 z-10">
        <div className="flex items-center gap-3 text-white">
          <div className="p-2 bg-white/20 rounded-lg">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl text-black dark:text-white font-bold tracking-tight">My Experience & Professional Journey</h2>
            <p className="text-black/60 dark:text-white/60 text-xs uppercase tracking-widest">Evolution of Skills</p>
          </div>
        </div>
      </div>

      
      <div className="relative flex-1 overflow-y-auto no-scrollbar p-6">
        
        <div className="absolute left-10.5 top-4 bottom-2 w-0.5  h-200 bg-linear-to-b from-white/40 via-white/20 to-transparent" />

        <div className="space-y-10 pb-12"> 
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 group"
            >
              
              <div className="absolute left-0 top-1 z-10">
                {item.current ? (
                  <div className="flex items-center justify-center w-10 h-10 -ml-px">
                    <div className="absolute w-full h-full bg-white/20 rounded-full animate-ping" />
                    <CircleDot className="w-6 h-6  text-white fill-white" />
                  </div>
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center -ml-px">
                     {item.type === 'work' ? 
                        <Briefcase className="w-5 h-5 text-white/50  group-hover:text-white transition-colors" /> : 
                        <GraduationCap className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                     }
                  </div>
                )}
              </div>

              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.current ?  'bg-white text-purple-600' : 'bg-white/10 text-white/80'}`}>
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-black/90 dark:text-white/90 font-medium text-sm">
                  {item.company}
                </p>

                <ul className="space-y-2 py-2">
                  {item.description.map((bullet, i) => (
                    <li key={i} className="text-black/70 dark:text-white/70 text-sm leading-relaxed flex gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-black/10 border border-white/10 text-white/60 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-purple-600 to-transparent pointer-events-none z-20" />
    </div>
  );
};