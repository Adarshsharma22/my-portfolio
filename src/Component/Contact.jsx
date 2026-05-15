import React from "react";
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) return;

    setIsSubmitting(true);

    // Create mailto link with user's email in the body
    const subject = "New Project Inquiry";
    const body = `Hi Adarsh,\n\nI would like to connect with you.\n\nMy Email: ${email}\n\nMessage:\n\n`;
    
    const mailtoLink = `mailto:adarshsharma6222@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    // Reset form after a small delay
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div id="contact" className="relative h-full overflow-hidden md:rounded-3xl bg-white/90 dark:bg-black md:border border-border p-3 hover:border-purple-500/50 transition-colors">
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
              <a href="mailto:adarshsharma6222@gmail.com" className="hover:text-blue-500 transition-colors">
                adarshsharma6222@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <span className="w-4 h-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
                  <rect x="4" y="2" width="15" height="22" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </span>
              <a href="tel:+919321762587" className="hover:text-blue-500 transition-colors">
                +91 9321762587
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="w-3.5 h-3.5" />
              <a href="https://github.com/Adarshsharma22" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <FaLinkedin className="w-3.5 h-3.5" />
              <a href="https://www.linkedin.com/in/adarsh-sharma-03974430a" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                LinkedIn
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
              disabled={isSubmitting}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 hover:shadow-xl transition-shadow disabled:opacity-70"
            >
              <Send className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
              {isSubmitting ? 'Opening...' : 'Send'}
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