import React, { useState } from 'react'
// import { Header } from './Header'
import { Hero } from '../Component/Hero'
import { Stats } from '../Component/Stats'
import { MyMusic } from '../Component/Music'
import { About } from '../Component/About'
import { Skills } from '../Component/Skills'
import { MyProject } from '../Component/Project'
import { Experience } from '../Component/Experience'
import { Contact } from '../Component/Contact'
import { Footer } from '../Component/Footer'

export const Home = () => {

  return (
    <div className="bg-slate-50 dark:bg-[#020617] text-gray-900 dark:text-white min-h-screen ">
        {/* <Header/> */}
        <main>
            <Hero/>
            <Stats/>
            <MyMusic/>
            <About/>
            <Skills/>
            <MyProject/>
            <Experience/>
            <Contact/>
        </main>
        <Footer/>
    </div>
    
  )
}
