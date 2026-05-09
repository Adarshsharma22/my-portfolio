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
    <div className="min-h-screen p-4 md:p-8 dark:text-white">
      <div className="max-w-7xl mx-auto">
      
        <main>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 m-10 mt-12  auto-rows-[200px]">
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
              className="md:col-span-2 lg:col-span-2 md:row-span-1"
            >
              <Stats />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-2 md:row-span-1 "
            >
              <MyMusic />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-3 md:row-span-2"
            >
              <About />
            </motion.div>


            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3 md:row-span-2"
            >
              <Skills />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-4 lg:col-span-4 md:row-span-3"
            >
              <MyProject />
            </motion.div>


            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 lg:col-span-2 md:row-span-3"
            >
              <Experience />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:col-span-3 lg:col-span-3 md:row-span-2"
            >
              <Contact />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:col-span-3 lg:col-span-3 md:row-span-2"
            >
              <Testimonials />
            </motion.div>

          </div>
        </main>
        <Footer/>
      </div>
    </div>
    
  )
}
