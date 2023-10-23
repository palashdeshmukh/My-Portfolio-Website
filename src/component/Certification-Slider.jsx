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

const certificates = [
  { src: NasscomCertificate, alt: "Nasscom Certificate" },
  { src: ProgrammingInjava, alt: "Programming in Java Certificate" },
  { src: JavaDataStructure, alt: "Java Data Structure Certificate" },
  { src: SurvenCertificate, alt: "Surven Certificate" },
  { src: GoogleDigitalWorkshop, alt: "Google Digital Workshop Certificate" },
  { src: HtmlCertificate, alt: "HTML Certificate" },
  { src: TypingCertificate, alt: "Typing Certificate" },
];

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
        {certificates.map((certificate, index) => (
          <div key={index} className="certification-container">
            <div className="inner-certification-container">
              <img
                style={{ display: "block", maxWidth: "100%" }}
                src={certificate.src}
                alt={certificate.alt}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
  }
}
