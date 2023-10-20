import React from 'react'
import '../pages-styles/projects.css'
import Navbar from '../component/Navbar';
import ProjectsCard from '../component/ProjectsCard';
import HeadingText from '../component/HeadingText';


function Projects () {
  return (
    <>
    <Navbar/>
    <HeadingText text="Projects"/>
    <ProjectsCard/>
    </>
  )
}

export default Projects;