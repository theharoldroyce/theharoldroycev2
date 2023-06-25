import React from 'react'
import NavBar from '../components/NavBar'
import Foother from '../components/Foother'
import Timeline from '../components/ExpTimeline'
import TrainingCert from '../components/TrainingCert'
import Certifications from '../components/Certifications'


const Experience = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <Timeline />
        <TrainingCert />
      </div>
      <Foother />
    </>
  )
}

export default Experience