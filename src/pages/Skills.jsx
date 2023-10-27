import React from 'react'
import '../pages-styles/skills.css'
import Navbar from '../component/Navbar'
import HeadingText from '../component/HeadingText'
import CertificationSlider from '../component/Certification-Slider'
function Skills () {
  return (
    <>
     <Navbar/>
     <HeadingText text="Skills"/>
     <CertificationSlider/>
    </>
  )
}

export default Skills