import React from 'react'
import LandingPage from './Components/LandingPage'
import Navbar from './Components/Navbar'
import SkillsSection from './Components/Skills'
import ProjectSection from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <SkillsSection/>
    <ProjectSection/>
    <Contact/>
  </>
  )
}

export default App