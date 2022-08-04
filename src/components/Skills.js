import React from 'react'
import { useState } from 'react'
import './Skills.css'
import {skillsData} from './skillsData.js'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'


function Skills() {

  const [selected,setSelected] = useState(0)
  const tLength = skillsData.length


  return (
    <div className='skills-container'>
      <div className='skills max-width'>
        <h1>Skills</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            skills to add HTML CSS JS React, TEAM PLAYER, n the industry's standard dummy text.
        </p>
        <div className='skills-contents'>
          <img
            src={leftArrow}
            alt=''
            onClick={() => {
              selected===0 
                ? setSelected(tLength-1) 
                : setSelected(prev => prev-1);
            }} 
          />
          <div className='skill'>
            <img src={skillsData[selected].image} alt='' />
            {skillsData[selected].skillname}
          </div>
          <img
            src={rightArrow}
            alt=''
            onClick={() => {
              selected===tLength-1
                ? setSelected(0)
                : setSelected(prev => prev+1);
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills