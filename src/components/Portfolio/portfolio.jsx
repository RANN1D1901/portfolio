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
      <a href ="#projects">
        <img
            class="projects-image"
            src="assets/projects.png"
            alt="project"
        />
        </a>
      </div>
      <div className='item'>
      <h3>Socials</h3>
        <img
            class="socials-image"
            src="assets/socials.jpg"
            alt="soc"
        />
      </div>
      <div className='item'>
      <h3>Contact</h3>
      <a href ="#contact">
        <img
            class="c-image"
            src="assets/work.png"
            alt="c"
        />
        </a>
      </div>

    </div>

  </div>;
}

//useEffect(()=>{},[selected])//any change to selected variable runs this function.