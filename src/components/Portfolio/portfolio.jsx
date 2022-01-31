import React from 'react';
import "./portfolio.scss"
export default function Portfolio() {
  return <div className='portfolio' id="portfolio">
    <h1>Portfolio</h1>
    <div className='container'>    
    <div className='item'>
        <h3>Education</h3>
        <a href ="#education">
          <img
              class="education-image"
              src="assets/educaton.jpg"
              alt="education"
          />
        </a>

      </div>
      <div className='item'>
      <h3>Projects</h3>
        <img
            class="projects-image"
            src="assets/projects.png"
            alt="project"
        />
      </div>
      <div className='item'>
      <h3>Publications</h3>
        <img
            class="publications-image"
            src="assets/publications.png"
            alt="pub"
        />
      </div>
      <div className='item'>
      <h3>Experience</h3>
        <img
            class="work-image"
            src="assets/work.png"
            alt="work"
        />
      </div>
    </div>

  </div>;
}
