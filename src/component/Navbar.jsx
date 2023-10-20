import React from 'react'
import { Link } from "react-router-dom";
import '../component-styles/navbar.css'

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'AboutMe' },
  { to: '/contact', text: 'Contact' },
  { to: '/skills', text: 'Skills' },
  { to: '/internship', text: 'Internship' },
  { to: '/experience', text: 'Experience' },
  { to: '/projects', text: 'Projects' },
];

function Navbar(){
  return (
    <div id='nav-main-container'>
      <div id='nav-container'>
      <h1 className="nav-name-text">Palash Deshmukh</h1>
      <ul id="nav-list-container">
          {navLinks.map((link, index) => (
            <li className="nav-list-item" key={index}>
              <Link className="nav-link-item" to={link.to}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar