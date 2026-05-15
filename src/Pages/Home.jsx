import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Header } from '../Component/Header'
import { Hero } from '../Component/Hero'
import { Stats } from '../Component/Stats'
import { MyMusic } from '../Component/Music'
import { About } from '../Component/About'
import { Skills } from '../Component/Skills'
import { MyProject } from '../Component/Project'
import { Experience } from '../Component/Experience'
import { Contact } from '../Component/Contact'
import { Testimonials } from '../Component/Testimonials'
import { Footer } from '../Component/Footer'


export const Home = () => {

  return (
    <div className="min-h-screen p-2 md:p-8 pb-20 md:pt-6 dark:text-white">
      <div className="max-w-8xl mx-auto">
      
        <main>
        
          <div className=" md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:mt-18 mt-20  auto-rows-[200px]">
          <Header/>
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 lg:col-span-4 md:row-span-2 "
            >
              <Hero />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:block md:col-span-2 lg:col-span-2 md:row-span-1"
            >
              <Stats />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block md:col-span-2 lg:col-span-2 md:row-span-1 "
            >
              <MyMusic />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-3 md:row-span-2"
            >
              <About />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>

            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3 md:row-span-2"
            >
              <Skills />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3 lg:col-span-4  md:row-span-3"
            >
              <MyProject />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-1 lg:col-span-2  md:row-span-3"
            >
              <Experience />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:col-span-2 lg:col-span-3  md:row-span-2"
            >
              <Contact />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:col-span-2 lg:col-span-3  md:row-span-2"
            >
              <Testimonials />
            </motion.div>

            <div className="block md:hidden my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/40 dark:to-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <div className="flex-1 h-px bg-gradient-to-r from-black/40 dark:from-white/40 to-transparent"></div>
            </div>
            
          </div>
          <Footer/>
        </main>
        
      </div>
    </div>
    
  )
}