import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import navicon1 from '../assets/navicon1.svg'
import navicon2 from '../assets/navicon2.svg'
import navicon3 from '../assets/navicon3.svg'
import {Link} from "react-scroll";

function Navbar() {
  return (
    <div className='navbar max-width'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='header-content'>
          <ul className='link-content'>
            <li><Link to='home' spy={true} smooth={true}>Home</Link></li>
            <li><Link to='skills-container' spy={true} smooth={true}>Skills</Link></li>
            <li><Link to='projects' spy={true} smooth={true}>Projects</Link></li>
          </ul>
          <span className='link-social'>
            <img src={navicon1} alt=''/>
            <img src={navicon2} alt=''/>
            <img src={navicon3} alt=''/>
          </span>
          <span className='link-connect'>
            <button><Link to='getintouch' spy={true} smooth={true}>Let's Connect</Link></button>
          </span>
        </div>
    </div>
  )
}

export default Navbar