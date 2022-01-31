import { useState } from 'react';
import './App.scss';
import Contact from './components/Contact/contact';
import Intro from './components/Intro/intro';
import Portfolio from './components/Portfolio/portfolio';
import Projects from './components/Projects/projects';
import Topbar from './components/Topbar/topbar';
import Works from './components/Works/works';
import Menu from './components/Menu/menu'
import Education from './components/Education/Education';
function App() {
  const [menuOpen,setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setmenuOpen={setmenuOpen}/>
      <Menu menuOpen = {menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Education/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
