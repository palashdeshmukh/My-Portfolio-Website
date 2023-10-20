import React from 'react'
import '../component-styles/projectDesign.css'
import Interior from '../assets/project-images/interor.png'
function ProjectCardDesign () {
  return (
    <div id='card-design-main-container'>
    <div id='card-design-container'>
      <div id='card-image-container'>
        <img id='card-image' src={ Interior} alt="interior-design" width="100%"/>
      </div>
      <div id='card-project-info'>
        <h2>PRODUCT INFO</h2>
        <p>Ensure a comfortable running session by wearing this pair of cool running shoes from Nike.</p>
      </div>
      <div id='card-tech-used'>
        <ul id='card-ul-list'>
        <li className='card-list-item'>My Name is Palash</li>
        <li className='card-list-item'>My Name is Palash</li>
        <li className='card-list-item'>My Name is Palash</li>

        </ul>
      </div>
      <div id='card-project-link-btn-container'>
        <button id='card-button-link'>View the Project</button>
        <button id='card-button-show-code'>Show Code</button>
      </div>
    </div>
    </div>
  )
}

export default ProjectCardDesign;