import React, { Component } from 'react';
import Slider from "react-slick";
import '../component-styles/project.css'
import ProjectCardDesign from './ProjectCardDesign';

class ProjectsCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 10000,
      responsive: [
        {
          breakpoint: 1068,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3, // Change to 2 for smoother transitions
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768, // You can add more breakpoints if needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480, // You can add more breakpoints if needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
        // Add more breakpoints as necessary
      ]
    };

    // Define an array of project card data
    const projectData = [
      { id: 1, title: 'Project 1' },
      { id: 2, title: 'Project 2' },
      { id: 3, title: 'Project 3' },
      { id: 4, title: 'Project 1' },
      { id: 5, title: 'Project 2' },
      { id: 6, title: 'Project 3' },
      { id: 7, title: 'Project 1' },
      { id: 8, title: 'Project 2' },
      { id: 9, title: 'Project 3' },
      // Add more project data as needed
    ];

    return (
      <div id='project-main-card-container'>
        <Slider {...settings}>
          {projectData.map((project) => (
            <div key={project.id} className='project-card-container'>
              <div className="inner-card-container">
                <ProjectCardDesign title={project.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default ProjectsCard;
