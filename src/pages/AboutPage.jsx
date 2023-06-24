import React from 'react'
import NavBar from '../components/NavBar'
import Foother from '../components/Foother'
import About from '../components/About'
import TechStack from '../components/TechStack'

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <About/>
        <TechStack/>
      </div>
      <Foother/>
    </>
  )
}

export default AboutPage