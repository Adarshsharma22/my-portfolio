import React, { useState } from 'react'
import { Header } from '../Component/Header'
import { Hero } from '../Component/Hero'
import { About } from '../Component/About'
import { Project } from '../Component/Project'
import { Skills } from '../Component/Skills'
import { Experience } from '../Component/Experience'
import { Contact } from '../Component/Contact'
import { Footer } from '../Component/Footer'

export const Home = () => {

  return (
    <div className="bg-white dark:bg-black">
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Project/>
            <Skills/>
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    </div>
    
  )
}
