import React from 'react'
import NavBar from '../components/NavBar'
import Foother from '../components/Foother'
import RecentProjects from '../components/RecentProjects'

const ProjectPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20">
        <RecentProjects/>
      </div>
      <Foother />
    </>
  )
}

export default ProjectPage