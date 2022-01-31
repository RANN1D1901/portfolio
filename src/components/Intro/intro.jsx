import React, { useEffect ,useRef} from 'react';
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef()
  useEffect(()=>{
    init(textRef.current, { showCursor: true,backDelay:2000, strings: ['Software Developer', ' Data Scientist' ] });
  },[])
  return <div className='intro' id="intro">
      <div className="left">
      <div className="imgContainer">
        <img src="assets/profile.jpg" alt=""></img>
      </div>

      </div>
      <div className="right">
        <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Navdeep Randhawa</h1>
            <h3>I am an aspiring <span ref={textRef}></span></h3>
          <a href ="#portfolio">
            <img src="assets/down.jpg" alt=""></img>
          </a>
        </div>
      </div>
  </div>;
}
