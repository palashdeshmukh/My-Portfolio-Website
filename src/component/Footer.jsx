import React from 'react'
import '../component-styles/footer.css'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

function Footer () {

  const socialMediaLinks = [
    { textIcon: <Icons.Facebook/>, url: 'https://www.facebook.com' },
    { textIcon: <Icons.Twitter/>, url: 'https://www.twitter.com' },
    { textIcon: <Icons.Instagram/>, url: 'https://www.instagram.com' },
    { textIcon: <Icons.Linkedin/>, url: 'https://www.linkedin.com' },
    { textIcon: <Icons.Youtube/>, url: 'https://www.youtube.com' },
  ]; 
  return (
    <div id='footer-main-container'>
      <div id='footer-container'>
        <div id='footer-container-part-one'>
          <div className='part-one-class-container footer-part-one-heading'><h2>Palash Deshmukh</h2></div>
          <div className=' footer-part-one-icons' >
          <ul id='part-one-logo-ul-container'>
        {socialMediaLinks.map((link, index) => (
          <li key={index} className='part-one-li-list-item'>
            <Link id='footer-social-icon-link' to={link.url} target='_blank'>{link.textIcon}</Link>
          </li>
        ))}
      </ul>
          </div>
        </div>
        {/* <div id='footer-container-part-two'>
        
         <ul id='footer-table-ul-list'>
          <li className='footer-table-li-list-items footer-table-ul-head'>Company</li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Home</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>About Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Contact Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Connect With Me</Link></li>
          </ul>

          <ul id='footer-table-ul-list'>
          <li className='footer-table-li-list-items footer-table-ul-head'>Company</li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Home</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>About Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Contact Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Connect With Me</Link></li>
          </ul>

          <ul id='footer-table-ul-list'>
          <li className='footer-table-li-list-items footer-table-ul-head'>Company</li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Home</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>About Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Contact Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Connect With Me</Link></li>
          </ul> 
          
           <ul id='footer-table-ul-list'>
          <li className='footer-table-li-list-items footer-table-ul-head'>Subscribe</li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Home</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>About Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Contact Me</Link></li>
          <li className='footer-table-li-list-items'><Link className='footer-table-link'>Connect With Me</Link></li>
          </ul>
        </div> */}
        <div id='footer-copy-write-container'>
          <p>Copyright &copy; 2023 MyPortfolio. All rights are reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;