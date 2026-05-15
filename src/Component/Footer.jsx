import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp,  Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="group relative w-full mt-2 overflow-hidden rounded-3xl border border-border bg-white/50 dark:bg-black/20 p-8 backdrop-blur-xl transition-all duration-500  hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.1)]">
      
      {/* Decorative Glow Background (Matching About/Skills) */}
      <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px] transition-opacity group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px] transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white">
                ADARSH<span className="text-blue-500 text-shadow-glow">.</span>
              </h2>
              <div className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 border border-blue-500/20">
                <Sparkles className="h-3 w-3 text-blue-400" />
                <span className="text-[8px] font-bold uppercase tracking-widest text-blue-400">Dev</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-white/60 max-w-xs">
              Building <span className="text-blue-500 font-medium">intelligent digital experiences</span> by merging MERN stack architecture with modern AI tools.
            </p>
          </div>

          {/* Column 2: Contact (Synced with Contact.jsx) */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Connectivity</h3>
            <ul className="space-y-4">
              {[
                { icon: Mail, text: "adsrhsharma6222@gmail.com", href: "mailto:adsrhsharma6222@gmail.com" },
                { icon: Phone, text: "+91 9321762587", href: "tel:+919321762587" },
                { icon: MapPin, text: "Mumbai, Maharashtra", href: null },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-white/70 group/link">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/40 dark:bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover/link:bg-blue-500/20 transition-colors">
                    <item.icon size={14} />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-blue-500 transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tech Badges (Synced with Skills.jsx) */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">Core Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Tailwind','Express', 'MongoDB', 'Node.js', 'AI Integrations'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-[10px] font-bold rounded-xl bg-black/5 dark:bg-white/5 dark:bg-white/10 border border-white/10 text-slate-700 dark:text-white/80 hover:border-blue-500/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Integrated Info  */}
        <div className="mt-16 pt-8 border-t border-black/20 dark:border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[10px] font-medium text-slate-900 dark:text-white/30 uppercase tracking-widest">
              © {currentYear} Adarsh Sharma
            </p>
            <p className="text-[9px] text-slate-600 dark:text-white/20 uppercase">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group/top flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 dark:bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            BACK TO TOP
            <ArrowUp size={14} className="group-hover/top:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};