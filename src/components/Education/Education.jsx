import React from 'react';
import "./Education.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export default function Education() {
  return <div className='education' id='education'>
   
    <a href="#portfolio">
    <ArrowDropUpIcon className='up'></ArrowDropUpIcon>
    </a>
      <h1>Education</h1>
      <img src='assets/Education.jpg'/>
  </div>;
}
