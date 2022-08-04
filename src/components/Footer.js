import React from 'react'
import './Footer.css'
import logo from '../assets/logo.svg'
import navicon1 from '../assets/navicon1.svg'
import navicon2 from '../assets/navicon2.svg'
import navicon3 from '../assets/navicon3.svg'
import Newsletter from './Newsletter.js'

function Footer() {
  return (
    <div className='footer'>
      <div className='content max-width'>
        <div className='content-newsletter'>
          <Newsletter />
        </div>
        <div className='content-footer'>
          <div className='footer-left'>
            <img src={logo} alt='' />
          </div>
          <div className='footer-right'>
            <span className='link-social link-social-footer'>
              <img src={navicon1} alt=''/>
              <img src={navicon2} alt=''/>
              <img src={navicon3} alt=''/>
            </span>
            <div>Copyright 2022. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer