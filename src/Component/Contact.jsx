import React from "react";
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
const [email, setEmail] = useState('');
const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="relative h-full overflow-hidden rounded-3xl bg-background border border-border p-6 hover:border-purple-500/50 transition-colors">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-foreground/60 mb-2">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Let's connect</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
          <p className="text-foreground/70 mb-4">
            Have a project in mind? Drop me a line and let's create something amazing together.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-foreground/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:adarshsharma6222@gmail.com" className="hover:text-foreground transition-colors">
                adarshsharma6222@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <span className="w-4 h-4 flex items-center justify-center">📱</span>
              <a href="tel:+919321762587" className="hover:text-foreground transition-colors">
                +91 9321762587
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-purple-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 hover:shadow-xl transition-shadow"
            >
              <Send className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
            </motion.button>
          </div>
        </form>
      </div>

      {/* Decorative gradient */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
};