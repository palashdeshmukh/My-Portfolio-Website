import React, { Component } from "react";
import Slider from "react-slick";
import '../component-styles/certification.css'
import HtmlCertificate from '../assets/certificate/htmlcourse.png'
import ProgrammingInjava from '../assets/certificate/ProgrammingInJava.jpg'
import JavaDataStructure from '../assets/certificate/JavaDataStructure.jpg'
import GoogleDigitalWorkshop from '../assets/certificate/google.jpg'
import TypingCertificate from '../assets/certificate/typing_page.jpg' 
import NasscomCertificate from '../assets/certificate/NasscomCertification.png'
import SurvenCertificate from '../assets/certificate/suvenIntership.png'
export default class CertificationSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1068,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }]
    };
    return (
      <div className="certification-main-container">
        <Slider {...settings}>        
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={NasscomCertificate} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={NasscomCertificate} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={ProgrammingInjava} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={ProgrammingInjava} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={JavaDataStructure} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={JavaDataStructure} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={SurvenCertificate} alt="surven-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={SurvenCertificate} alt="surven-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={GoogleDigitalWorkshop} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={GoogleDigitalWorkshop} alt="programming-in-java-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={HtmlCertificate} alt="html-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={HtmlCertificate} alt="html-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={TypingCertificate} alt="html-certificate" width="100%"/></div></div>
        <div className="certification-container"><div className="inner-certification-container"><img style={{display:"block"}} src={TypingCertificate} alt="html-certificate" width="100%"/></div></div>
      
        </Slider>
      </div>
    );
  }
}
