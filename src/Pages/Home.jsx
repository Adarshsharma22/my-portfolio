import React, { useState } from 'react'
import { Navbar } from '../Component/Navbar'
import { Hero } from '../Component/Hero'
import { About } from '../Component/About'
import { Project } from '../Component/Project'
import { Skills } from '../Component/Skills'
import { Experience } from '../Component/Experience'
import { Contact } from '../Component/Contact'
import { Footer } from '../Component/Footer'

export const Home = () => {

  return (
    <div>
        <Navbar/>
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
