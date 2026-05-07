import React from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  
  
  Send,
} from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide">
            Contact Me
          </span>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight">
            Let's Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Something Amazing
            </span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a project idea, collaboration opportunity, or just want to
            connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* CONTACT LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            {/* CARD */}
            {[
              {
                icon: <Mail size={24} />,
                title: "Email",
                value: "adarshsharma6222@gmail.com",
              },

              {
                icon: <Phone size={24} />,
                title: "Phone",
                value: "+91 9321762587",
              },

              {
                icon: <MapPin size={24} />,
                title: "Location",
                value: "Mumbai, Maharashtra",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="flex items-center gap-5 rounded-[28px] border border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-6 shadow-xl"
              >
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-5 pt-6">
              
              <a
                href="#"
                className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <send size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
              >
                <send size={22} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl p-8 shadow-2xl"
          >
            
            <form className="space-y-6">
              
              {/* NAME */}
              <div>
                <label className="block mb-3 text-gray-700 dark:text-gray-300 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-3 text-gray-700 dark:text-gray-300 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-3 text-gray-700 dark:text-gray-300 font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 outline-none focus:border-blue-500 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};