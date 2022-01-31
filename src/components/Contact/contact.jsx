import React, { useState } from 'react';
import "./contact.scss";
import { init } from 'ityped'
import { useEffect ,useRef} from 'react';
import { handleBreakpoints } from '@mui/system';


export default function Contact() {
  const textRef = useRef()
  const [message,setMessage] = useState(false);
  useEffect(()=>{
    init(textRef.current, { showCursor: true,backDelay:2000, strings: ['Software Developer?', ' Data Scientist?' ] });
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
    console.log(e.target.elements.email.value)
    console.log(e.target.elements.message.value)

 }
  return <div className='contact' id="contact">
    <div className="left">
      <h1>Are you looking for <span ref={textRef}></span></h1>
      <img src="assets/ctc.jpg" alt=""/>
    </div>

    <div className="right">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='email' name="email"/>
        <textarea placeholder ="Message" name="message"/>
        <button type="submit">Send</button>
        {message && <span>Thanks, Looking forward to meet you.</span>}
      </form>
    </div>
  </div>
}
