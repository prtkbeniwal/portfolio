import React from 'react'
import './Projects.css'
import {projectsData} from './projectsData.js'

function Projects() {
  return (
    <div className='projects max-width'>
      <h1 >Projects</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      {/* <div className='projects-tabs max-width'>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </div> */}
      <div className='tab-details'>
        <div className='project-details'>
          {projectsData.map(project => (
            <div className='project'>
              <div className='project-space'>
                <img src={project.image} alt='' />
                <div>{project.name}</div>
              </div>
              <a href={project.review} target="_blank" rel="noreferrer noopener">{project.status}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects