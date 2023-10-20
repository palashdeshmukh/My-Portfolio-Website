import React from 'react'
import '../pages-styles/contact.css'
import Navbar from '../component/Navbar';
import HeadingText from '../component/HeadingText';
import ContactForm from '../component/ContactForm';
function Contact () {
  return <>
    <Navbar/>
    <HeadingText text="Contact"/>
    <ContactForm/>
    </>
}

export default Contact;