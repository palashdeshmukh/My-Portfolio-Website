import React from 'react'
import '../pages-styles/home.css'
import Navbar from '../component/Navbar';
import CertificationSlider from '../component/Certification-Slider';
import ContactForm from '../component/ContactForm';
function Home () {
  return (
    <>
    <Navbar/>
  
    <CertificationSlider/>
    <ContactForm/>
    </>
    
  )
}

export default Home;