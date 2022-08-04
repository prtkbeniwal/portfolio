import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import headerimg from '../assets/headerimg.svg'
import {motion} from "framer-motion"
import {Link} from "react-scroll";

function Home() {

  const bounceTransition = {
    y: {
      duration: 1,
      yoyo: Infinity,
      ease: "easeOut"
    }
  };

  return (
    <div className='home'>
      <Navbar />
      <div className='hero max-width'>
        <div className='hero-left'>
          <div>Welcome to my Portfolio</div>
          <h1>Hi! I'm <span className='gradient-text'>Prateek</span></h1>
          <h3>a Web Developer in Making</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <button><Link to='getintouch' spy={true} smooth={true}>Let's Connect</Link></button>
        </div>
        <div className='hero-right'>
          <motion.span
            transition={bounceTransition}
            animate={{
              y:["10%","-10%"]
            }}
          >
            <img src={headerimg} alt='' />
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default Home