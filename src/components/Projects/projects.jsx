import React from 'react';
import "./projects.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function Projects() {
  return <div className='projects' id="projects">
    <a href="#portfolio">
      <ArrowDropUpIcon className='up'></ArrowDropUpIcon>
    </a>
    <h1 className='head'>Projects</h1>
    <div className='Container'>
        <ul>
          <li>
            <h1>1.Student Numbers Analytics Platform                                             </h1>
            <p>--{'>'}Worked on developing APIs providing insight in the data using Flask framework.                 </p>
            <p>--{'>'}Worked on developing ReactJS interface to present data returned in form of graphs.             </p>
            <p>--{'>'}Worked on authentication and authorization using NodeJS.                                       </p>
            <p><a href="https://bitbucket-students.deakin.edu.au/projects/WEBMC-UG/repos/snap/browse/T3/snap?at=refs%2Fheads%2Fdev-phase-T3"><b>REPOSITORY</b></a></p>
            <iframe width="860" height="315" src="https://www.youtube.com/embed/oxZvJF-4u2I" title="Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
          <li>
            <h1>2.Surveillance System                                                             </h1>
            <p>--{'>'}Worked on developing face recognition system using OpenCV and in live stream video.</p>
            <p>--{'>'}Worked on developing alarm system over cloud using Argon and Webhook platfform.</p>
            <p>--{'>'}Worked on a prototype for Minimal Viable Product.</p>
           
            <p><a href="https://github.com/RANN1D1901/Project_SIT210"><b>REPOSITORY</b></a></p>

            <iframe width="860" height="315" src="https://www.youtube.com/embed/k-CFK4rMBjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </li>
          <li>
            <h1>3.Melbourne Housing Predictions                                                     </h1>
            <p>--{'>'}Worked on cleaning data acquired from Kaggle.</p>
            <p>--{'>'}Worked on Exploratory Data Analysis.</p>
            <p>--{'>'}Worked on building various Machine Learning Models to answer various business questions.</p>
            <p><a href="https://github.com/RANN1D1901/MachineLearning/tree/main/Project1"><b>REPOSITORY FOR EDA</b></a></p>
            <p><a href="https://github.com/RANN1D1901/MachineLearning/tree/main/Project2"><b>REPOSITORY FOR PREDICTIONS</b></a></p>
            <img width="860" height="315" src="assets/ml.jpg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen alt=''></img>
          </li>
        </ul>
        <p className='note'><b>Note: Refer to the CV to know about more projects I did.</b></p>

    </div>


  </div>;
}
