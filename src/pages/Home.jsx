import React from 'react'
import '../pages-styles/home.css'
import Navbar from '../component/Navbar';
import CertificationSlider from '../component/Certification-Slider';
import ContactForm from '../component/ContactForm';
import Mappostion from '../component/Mappostion';
import Footer from '../component/Footer';
function Home () {
  return (
    <>
    <Navbar/>
    <CertificationSlider/>
    <ContactForm/>
    <Mappostion/>
    <Footer/>
    </>
    
  )
}

export default Home;