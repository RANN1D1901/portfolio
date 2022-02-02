import "./topbar.scss"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
export default function Topbar({menuOpen,setmenuOpen}) {
  return (<div className={"topbar "+(menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">navdeep</a>
                <div className="itemContainer">
                  <PhoneIcon className="icon"/>
                  <span>0402571823</span>
                </div>
                <div className="itemContainer">
                    <EmailIcon className="icon"/>
                    <span>navdeeprandhawa0001@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <DownloadIcon className="icon" />
                    <a href="assets/Resume.pdf" download>
                    <span>CV</span>
                </a>
                </div>
            </div>
            <div className="right">
              <div className="hamburger" onClick={()=>
                setmenuOpen(!menuOpen)
              }>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
  </div>);
}
 