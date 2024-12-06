import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

function Section() {
  return (
    <>    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
      
    </>
  )
}

export default Section
