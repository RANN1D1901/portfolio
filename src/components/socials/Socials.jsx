import React from 'react';
import "./Socials.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Socials() {
  return <div className='socials' id="socials">
    <div className='wrapper'>
      <div className="itemContainer">
              <LinkedInIcon className="icon"/>
              <a href="https://www.linkedin.com/in/navdeep-singh-randhawa-0565a1181/" target="_blank">
              <span>LinkedIn</span>
            </a>
        </div>
        <div className="itemContainer">
              <GitHubIcon className="icon"/>
              <a href="https://github.com/rnavdeep" target="_blank">
              <span>Github</span>
            </a>
        </div>
        <div className="itemContainer">
              <YouTubeIcon className="icon"/>
              <a href="https://www.youtube.com/channel/UCpwZLyx9N0-Rvs36vO5LTYg" target="_blank">
              <span>Youtube</span>
            </a>
        </div>
        <div className="itemContainer">
              <AutoStoriesIcon className="icon"/>
              <a href="https://medium.com/@navdeeprandhawa0001" target="_blank">
              <span>Medium</span>
            </a>
        </div>
        <div className="itemContainer">
              <InstagramIcon className="icon"/>
              <a href="https://www.instagram.com/navdeep.randhawa.1999/?hl=en" target="_blank">
              <span>Instagram</span>
            </a>
        </div>
    </div>
  </div>;
}
